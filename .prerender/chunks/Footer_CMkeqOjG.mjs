import 'piccolore';
import { A as AstroError, I as InvalidComponentArgs, c as createRenderInstruction, a as renderTemplate, d as renderSlot, e as renderHead, u as unescapeHTML, b as addAttribute, m as maybeRenderHead } from './prerender_2mVi4qWA.mjs';
import 'clsx';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Wing Chun Leung — bridging finance and AI. MSc Artificial Intelligence at HKUST.",
    accent = "vermillion"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"', '><meta name="theme-color" content="#ffffff"><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image"><!-- Fonts: self-hosted via fontsource (no external DNS, GDPR-safe, faster) --><link rel="icon" type="image/svg+xml"', "><title>", '</title><!-- Structured data for SEO --><script type="application/ld+json">', "</script><!-- Accent color override for HCI page -->", "", '</head> <body> <a href="#main-content" class="skip-to-content">Skip to content</a> ', ' <main id="main-content"> ', " </main> ", " </body></html>"])), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${"/".replace(/\/$/, "")}/og-image.svg`, "content"), addAttribute(`${"/".replace(/\/$/, "")}/favicon.svg`, "href"), title, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Wing Chun Leung",
    "jobTitle": "MSc AI Student & Research Assistant",
    "affiliation": { "@type": "Organization", "name": "HKUST" },
    "url": "https://wingchunleung.github.io/",
    "sameAs": [
      "https://linkedin.com/in/wingchunleung",
      "https://github.com/wingchunleung"
    ],
    "knowsAbout": ["Artificial Intelligence", "Finance", "LLM", "Multi-Agent Systems"],
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "HKUST" },
      { "@type": "EducationalOrganization", "name": "University of Washington" }
    ]
  })), accent === "celadon" && renderTemplate`<style>
        :root {
          --color-accent: #7d9e8c;
          --color-link-hover: #7d9e8c;
        }
      </style>`, renderHead(), renderSlot($$result, $$slots["header"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["footer"]));
}, "/home/wing/src/layouts/BaseLayout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const pathname = Astro2.url.pathname;
  const base = "/".replace(/\/$/, "");
  const navItems = [
    { label: "About", href: `${base}/about` },
    { label: "Projects", href: `${base}/projects` },
    { label: "HCI", href: `${base}/hci` },
    { label: "Contact", href: `${base}/contact` }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="site-header" class="site-header" role="banner" data-astro-cid-3ef6ksr2> <nav class="container nav-container" role="navigation" aria-label="Main navigation" data-astro-cid-3ef6ksr2> <a${addAttribute(`${base}/`, "href")} class="nav-logo" aria-label="Wing Chun Leung — Home" data-astro-cid-3ef6ksr2> <span class="logo-text" data-astro-cid-3ef6ksr2>WCL</span> </a> <ul class="nav-links" role="list" data-astro-cid-3ef6ksr2> ${navItems.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(item.href, "href")}${addAttribute(["nav-link", { active: pathname.startsWith(item.href) }], "class:list")}${addAttribute(pathname.startsWith(item.href) ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${item.label} </a> </li>`)} </ul> <!-- Mobile menu toggle --> <button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-menu" data-astro-cid-3ef6ksr2> <span class="menu-bar" data-astro-cid-3ef6ksr2></span> <span class="menu-bar" data-astro-cid-3ef6ksr2></span> </button> </nav> <!-- Mobile menu overlay --> <div id="mobile-menu" class="mobile-menu" role="dialog" aria-label="Navigation menu" hidden data-astro-cid-3ef6ksr2> <ul class="mobile-nav-links" role="list" data-astro-cid-3ef6ksr2> ${navItems.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(item.href, "href")}${addAttribute(["mobile-nav-link", { active: pathname.startsWith(item.href) }], "class:list")} data-astro-cid-3ef6ksr2> ${item.label} </a> </li>`)} </ul> </div> </header>  ${renderScript($$result, "/home/wing/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/wing/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" role="contentinfo" data-astro-cid-sz7xmlte> <div class="container footer-content" data-astro-cid-sz7xmlte> <div class="footer-left" data-astro-cid-sz7xmlte> <p class="footer-name" data-astro-cid-sz7xmlte>Wing Chun Leung</p> <p class="footer-tagline" data-astro-cid-sz7xmlte>Finance &middot; AI &middot; Hong Kong</p> </div> <div class="footer-links" data-astro-cid-sz7xmlte> <a href="https://linkedin.com/in/wingchunleung" class="footer-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-astro-cid-sz7xmlte>LinkedIn</a> <a href="https://github.com/wingchunleung" class="footer-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-astro-cid-sz7xmlte>GitHub</a> </div> <div class="footer-right" data-astro-cid-sz7xmlte> <button class="back-to-top" aria-label="Back to top" onclick="window.scrollTo({top:0,behavior:'smooth'})" data-astro-cid-sz7xmlte> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-astro-cid-sz7xmlte> <path d="M8 14V2M2 8l6-6 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sz7xmlte></path> </svg> </button> <p class="footer-copy" data-astro-cid-sz7xmlte> <span class="seal-mark" aria-hidden="true" data-astro-cid-sz7xmlte>&#21360;</span>
&copy; ${year} </p> </div> </div> </footer>`;
}, "/home/wing/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b, createComponent as c, renderScript as r };
