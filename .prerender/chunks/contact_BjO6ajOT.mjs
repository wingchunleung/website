import { c as createComponent, $ as $$BaseLayout, r as renderScript, a as $$Header, b as $$Footer } from './Footer_CMkeqOjG.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_2mVi4qWA.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contacts = [
    {
      label: "Email",
      value: "",
      href: "mailto:",
      cta: "Send an email",
      external: false
    },
    {
      label: "LinkedIn",
      value: "/in/wingchunleung",
      href: "https://linkedin.com/in/wingchunleung",
      cta: "Connect",
      external: true
    },
    {
      label: "GitHub",
      value: "wingchunleung",
      href: "https://github.com/wingchunleung",
      cta: "View code",
      external: true
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact — Wing Chun Leung", "description": "Get in touch with Wing Chun Leung.", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="page-hero" data-astro-cid-uw5kdbxl> <div class="container content" data-astro-cid-uw5kdbxl> <span class="section-label" data-astro-cid-uw5kdbxl>Contact</span> <h1 data-astro-cid-uw5kdbxl>Let's talk</h1> <p class="hero-sub" data-astro-cid-uw5kdbxl>
Open to conversations about AI research, fintech, speaking, or anything in between.
</p> </div> </section> <section class="contact-section" data-astro-cid-uw5kdbxl> <div class="container content" data-astro-cid-uw5kdbxl> <div class="contact-grid" data-astro-cid-uw5kdbxl> ${contacts.map((c, i) => renderTemplate`<a${addAttribute(c.href, "href")} class="contact-card" data-animate="reveal"${addAttribute(`--delay: ${i * 0.1}s`, "style")}${addAttribute(c.external ? "_blank" : void 0, "target")}${addAttribute(c.external ? "noopener noreferrer" : void 0, "rel")} data-astro-cid-uw5kdbxl> <span class="contact-label" data-astro-cid-uw5kdbxl>${c.label}</span> <span class="contact-value" data-astro-cid-uw5kdbxl>${c.value}</span> <span class="contact-cta" data-astro-cid-uw5kdbxl> ${c.cta} <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" data-astro-cid-uw5kdbxl> <path d="M1 11L11 1M11 1H3M11 1v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uw5kdbxl></path> </svg> </span> </a>`)} </div> <div class="location-block" data-animate="reveal" data-astro-cid-uw5kdbxl> <span class="section-label" data-astro-cid-uw5kdbxl>Based in</span> <p class="location-city" data-astro-cid-uw5kdbxl>Hong Kong SAR</p> <p class="location-detail" data-astro-cid-uw5kdbxl>HKUST, Clear Water Bay</p> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-uw5kdbxl": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-uw5kdbxl": true })}` })}  ${renderScript($$result, "/home/wing/website/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/wing/website/src/pages/contact.astro", void 0);
const $$file = "/home/wing/website/src/pages/contact.astro";
const $$url = "/website/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
