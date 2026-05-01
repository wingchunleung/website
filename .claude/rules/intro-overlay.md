# Rules for the landing-page intro animation

The intro animation (free-floating "wow"/👀 particles → "see who this is 👀✨" tease → 👋 wave → iris-close → hero reveal) is the **only approved** intro animation for this site. The user kept it across 100+ design iterations. It must not change without explicit instruction.

The animation lives in `src/components/IntroOverlay.astro`. The homepage in `src/pages/index.astro` imports it and renders `<IntroOverlay />`. That is the entire homepage involvement. The component owns its markup, its CSS (declared as `<style is:global>`), and its JS.

These rules exist because previous attempts to refactor this animation broke it, and unrelated edits elsewhere on the site repeatedly trampled it. Follow them carefully.

## Hard rules

1. **Never inline the intro markup, CSS, or JS in `index.astro` or any other page or layout.** The component is the single source of truth. Putting any intro logic in `index.astro`'s `<style>` or `<script>` block is what caused past breakage when unrelated CSS/JS edits regenerated the scoped `data-astro-cid` hash.

2. **Keep the intro CSS in `<style is:global>` inside the component.** This is load-bearing. The JS dynamically creates `<span>` particle elements in `#wowContainer`; those nodes do not carry any `data-astro-cid` attribute, so a scoped CSS rule would silently fail to match them. The rule must be global.

3. **Do not change the timings.** The sequence is 0 → 800 → 1100 → 2000 → 2300 → 3300 ms. Each timer is part of the visual rhythm the user signed off on. If a timing change is genuinely needed, write a DDR in `design/decisions/` and get user approval before editing.

4. **Do not change the easings or GSAP parameters.** `back.out(1.8)` for tease pop-in, `back.out(2)` for 👋 pop-in, `sine.inOut` for the wave, `power3.out` for greeting + CTA, `back.out(1.7)` for hero-wave, `power2.inOut` for iris-close. These curves are why the motion feels right.

5. **Do not change the particle parameters.** Counts (35 mobile / 65 desktop), text/emoji split (60/40), font-size ranges (mobile 2.5–5rem, desktop 3–8.5rem), gradient colours (`#ff6b35 → #e63946 → #ff006e`), motion ranges (y-amp 15–50, x-amp 8–30, rot-amp 4–14), and the rotation pool `[-30,-15,-5,0,10,25,40,75,110,160,200,250,270,310,340]` are the deployed values. Reproduce them verbatim.

6. **The intro reaches forward into the homepage hero classes.** It animates `.hero-wave`, `.greeting-text`, `.hero-cta-wrap`, `.wave-hand`, and `.scroll-cue` directly (via GSAP `to`) at 3300 ms. The homepage must continue to provide elements with those class names in the hero, with their initial styles set so the GSAP `to` transitions look right (e.g. `opacity: 0`, `transform: translateY(...)`, `transform: scale(0.3)`). Do not rename these classes without updating the intro at the same time.

7. **Public contract with `LockScreen.astro`:**
   - LockScreen owns `sessionStorage 'site-unlocked'` and the `site-unlocked` CustomEvent.
   - On a correct PIN, LockScreen sets `sessionStorage 'site-unlocked' = '1'` and dispatches `window.dispatchEvent(new CustomEvent('site-unlocked'))` inside the same setTimeout that removes its DOM (after 500 ms).
   - The intro reads `sessionStorage 'site-unlocked'` synchronously to handle the case where the user has already unlocked in this session, and listens for the `site-unlocked` event for the live unlock.
   - Removing the dispatch from LockScreen will hang the intro on first visit.

8. **The intro owns `sessionStorage 'intro-seen'`.** It is set to `'1'` once the animation has fired. Returning visits within the same session skip the animation. Do not read or write that key from anywhere else.

9. **The intro is only on `/`.** Don't render `<IntroOverlay />` from any other page, layout, or shared component. The `<style is:global>` block applies its rules everywhere, but no other page has the matching DOM elements, so there is no visual leak. Adding the component to another page would add a second instance of the JS, which is unsupported.

10. **Reduced motion is honoured by a single `@media` rule** in the component (`.intro-overlay { display: none; }`). No JS path is needed because the bypass also works: when the overlay is hidden, the JS still runs but the user sees nothing animate; the hero still gets revealed at 3300 ms via the same GSAP `to` calls. Do not add a separate "reduced motion" code path.

11. **GSAP is imported once** in the component (`import gsap from 'gsap'`). ScrollTrigger is NOT used by the intro and must not be imported there.

## Co-editing rules

- **Do not edit `IntroOverlay.astro` and `index.astro`'s hero CSS in the same commit** unless the change explicitly demands it (e.g. you are renaming a hero class and updating both ends of the contract). Split into two commits and run a smoke test (open `/`, watch the animation) between them.
- **Do not edit `IntroOverlay.astro` and `LockScreen.astro` in the same commit** for the same reason. The contract between them is the `site-unlocked` event and the two sessionStorage keys; either side breaking it strands the other.

## Smoke test before pushing

1. `npm run dev`
2. In DevTools: Application → Storage → Clear site data
3. Reload `localhost:4321`, enter PIN
4. Watch the animation: white background → particles drifting → fade at ~800 ms → "see who this is 👀✨" at ~1.1 s → 👋 at ~2.3 s → hero appears with iris-close at ~3.3 s
5. Reload without clearing storage → hero appears instantly, no overlay
6. Toggle "Emulate prefers-reduced-motion: reduce" in DevTools → reload → no overlay visible

If any step fails, do not push. Diagnose first.

## When in doubt

Read the doc-comment at the top of `IntroOverlay.astro`. Read this file. If you are tempted to copy values out of `IntroOverlay.astro` into another file, or re-implement any part of its logic somewhere else — stop. The point of isolating the intro is that consumers do not need to do that.
