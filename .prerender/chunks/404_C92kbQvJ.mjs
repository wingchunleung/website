import { c as createComponent, $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_CMkeqOjG.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_2mVi4qWA.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const base = "/website".replace(/\/$/, "");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page Not Found — Wing Chun Leung", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="error-page" data-astro-cid-zetdm5md> <div class="container content" data-astro-cid-zetdm5md> <span class="error-code" data-astro-cid-zetdm5md>404</span> <h1 data-astro-cid-zetdm5md>Page not found</h1> <p class="error-text" data-astro-cid-zetdm5md>
The page you're looking for doesn't exist or has been moved.
</p> <div class="error-actions" data-astro-cid-zetdm5md> <a${addAttribute(`${base}/`, "href")} class="btn-primary" data-astro-cid-zetdm5md>Go home</a> <a${addAttribute(`${base}/contact`, "href")} class="btn-outline" data-astro-cid-zetdm5md>Get in touch</a> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-zetdm5md": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-zetdm5md": true })}` })}`;
}, "/home/wing/website/src/pages/404.astro", void 0);
const $$file = "/home/wing/website/src/pages/404.astro";
const $$url = "/website/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
