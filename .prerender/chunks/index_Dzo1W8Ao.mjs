import { c as createComponent, r as renderScript, $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_CMkeqOjG.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as renderTemplate, r as renderComponent, b as addAttribute } from './prerender_2mVi4qWA.mjs';
import 'clsx';

const $$HeroCanvas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hero-canvas-container" data-astro-cid-4zothrxl> <!-- Layer 1: Animated CSS gradient (0 JS, rich color depth) --> <div class="hero-gradient-bg" aria-hidden="true" data-astro-cid-4zothrxl></div> <!-- Layer 2: Flowing SVG circuit lines --> <svg class="hero-svg-lines" viewBox="0 0 1400 800" fill="none" preserveAspectRatio="none" aria-hidden="true" data-astro-cid-4zothrxl> <path class="flow-line fl-1" d="M-50,400 C200,340 500,460 750,400 S1100,340 1450,400" data-astro-cid-4zothrxl></path> <path class="flow-line fl-2" d="M-50,280 C300,230 550,330 800,270 S1100,300 1450,280" data-astro-cid-4zothrxl></path> <path class="flow-line fl-3" d="M-50,550 C250,520 480,580 720,540 S1050,560 1450,550" data-astro-cid-4zothrxl></path> <path class="flow-line fl-4" d="M-50,180 C350,150 600,210 850,170 S1150,200 1450,180" data-astro-cid-4zothrxl></path> <path class="flow-line fl-5" d="M-50,650 C200,630 450,670 700,640 S1000,660 1450,650" data-astro-cid-4zothrxl></path> </svg> <!-- Layer 3: Canvas particle network --> <canvas id="hero-canvas" aria-hidden="true" data-astro-cid-4zothrxl></canvas> <!-- Layer 4: Radial overlay for text readability --> <div class="hero-gradient-overlay" aria-hidden="true" data-astro-cid-4zothrxl></div> </div>  ${renderScript($$result, "/home/wing/website/src/components/HeroCanvas.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/wing/website/src/components/HeroCanvas.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const base = "/website".replace(/\/$/, "");
  const journeySteps = [
    {
      label: "01",
      place: "Hong Kong",
      period: "1999 — 2017",
      heading: "Where it began",
      accent: "#c73e1d",
      text: "Born and raised in Hong Kong. A city where East meets West, tradition meets innovation — shaping a perspective that would define everything that followed."
    },
    {
      label: "02",
      place: "University of Washington",
      period: "2018 — 2022",
      heading: "Building the foundation",
      accent: "#4b2e83",
      text: "From community college (4.0 GPA) to UW, double-majoring in Finance and Information Systems. CFO of the Blockchain Society. Discovering that the most interesting problems live between disciplines."
    },
    {
      label: "03",
      place: "Costco Wholesale",
      period: "2023 — 2024",
      heading: "Systems thinking",
      accent: "#e31837",
      text: "Turned a 4-hour manual payroll process into a single button click — 99% time reduction. Built forecasting models with 97% accuracy. The best technology disappears into the workflow."
    },
    {
      label: "04",
      place: "Carta",
      period: "2024 — 2025",
      heading: "Scaling impact",
      accent: "#1a1a1a",
      text: "Redesigned the PE advisory projection workflow, cutting processing time by 70%. Built LLM-powered tools for data extraction. Client satisfaction: 4.8/5.0."
    },
    {
      label: "05",
      place: "HKUST",
      period: "2025 — Present",
      heading: "The synthesis",
      accent: "#003366",
      text: "Returned to Hong Kong for an MSc in AI. Researching LLM-driven macro allocation — building multi-agent systems that reason about global markets. The bridge between finance and AI, made real."
    }
  ];
  const featuredWork = [
    {
      title: "LLM Macro Allocation Pipeline",
      metric: "RMB 5T+",
      metricLabel: "AUM scope",
      org: "HKUST",
      orgColor: "#003366",
      description: "Multi-agent LLM system for macro cycle analysis and asset allocation.",
      tags: ["AI Research", "Multi-Agent", "Finance"]
    },
    {
      title: "Financial Workflow Automation",
      metric: "70%",
      metricLabel: "faster",
      org: "Carta",
      orgColor: "#1a1a1a",
      description: "Redesigned PE advisory projection workflow, cutting Bloomberg Terminal processing time.",
      tags: ["Process Design", "LLM", "Carta"]
    },
    {
      title: "Payroll System Optimization",
      metric: "99%",
      metricLabel: "time saved",
      org: "Costco",
      orgColor: "#e31837",
      description: "Transformed a 4-hour manual task into a single-click automated process.",
      tags: ["Automation", "Python", "SQL"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Wing Chun Leung — Finance × AI", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<div class="intro-overlay" id="intro-overlay" aria-hidden="true" data-astro-cid-j7pv25f6> <div class="intro-bg" data-astro-cid-j7pv25f6></div> <div class="intro-stage" data-astro-cid-j7pv25f6> <div class="intro-icon" data-astro-cid-j7pv25f6> <span class="intro-wave-emoji" data-astro-cid-j7pv25f6>👋</span> </div> <div class="intro-text" data-astro-cid-j7pv25f6> <span class="intro-line" data-astro-cid-j7pv25f6> <span class="intro-line-inner" data-astro-cid-j7pv25f6>Welcome</span> </span> </div> </div> </div>  <section class="hero" aria-label="Welcome" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "HeroCanvas", $$HeroCanvas, { "data-astro-cid-j7pv25f6": true })} <div class="hero-content" data-astro-cid-j7pv25f6> <div class="hero-wave" aria-hidden="true" data-astro-cid-j7pv25f6> <span class="wave-hand" data-astro-cid-j7pv25f6>👋</span> </div> <h1 class="hero-greeting" data-astro-cid-j7pv25f6> <span class="greeting-mask" data-astro-cid-j7pv25f6> <span class="greeting-text" data-astro-cid-j7pv25f6>Welcome to my page</span> </span> </h1> <div class="hero-cta-wrap" data-astro-cid-j7pv25f6> <a href="#intro" class="btn-hero" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Explore</span> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" data-astro-cid-j7pv25f6> <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> <div class="scroll-cue" aria-hidden="true" data-astro-cid-j7pv25f6> <div class="scroll-line-track" data-astro-cid-j7pv25f6> <div class="scroll-line-fill" data-astro-cid-j7pv25f6></div> </div> </div> </section>  <section id="intro" class="intro" aria-label="Introduction" data-astro-cid-j7pv25f6> <div class="container content" data-astro-cid-j7pv25f6> <div class="intro-content" data-animate="reveal" data-astro-cid-j7pv25f6> <p class="intro-greeting" data-astro-cid-j7pv25f6>I'm</p> <h2 class="intro-name" data-astro-cid-j7pv25f6>Wing Chun Leung</h2> <div class="intro-divider" aria-hidden="true" data-astro-cid-j7pv25f6></div> <p class="intro-tagline" data-astro-cid-j7pv25f6>
Finance speaks one language. AI speaks another.
<strong data-astro-cid-j7pv25f6>I build the bridge.</strong> </p> <p class="intro-bio" data-astro-cid-j7pv25f6>
Currently pursuing an MSc in Artificial Intelligence at HKUST, where I research LLM-driven macro allocation. Previously at Carta and Costco, turning complex financial processes into intelligent automated systems.
</p> <div class="intro-actions" data-astro-cid-j7pv25f6> <a${addAttribute(`${base}/about`, "href")} class="btn-primary" data-astro-cid-j7pv25f6>Learn more</a> <a${addAttribute(`${base}/contact`, "href")} class="btn-outline" data-astro-cid-j7pv25f6>Get in touch</a> </div> </div> </div> </section>  <section class="logo-strip" aria-label="Experience" data-animate="reveal" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <span class="section-label" style="text-align:center;display:block;margin-bottom:var(--space-4)" data-astro-cid-j7pv25f6>Experience</span> <div class="logo-row" data-astro-cid-j7pv25f6> <div class="logo-item" data-astro-cid-j7pv25f6> <img${addAttribute(`${base}/logos/hkust.svg`, "src")} alt="HKUST" class="logo-img" loading="lazy" width="120" height="24" data-astro-cid-j7pv25f6> <span class="logo-role" data-astro-cid-j7pv25f6>Research Assistant</span> </div> <div class="logo-item" data-astro-cid-j7pv25f6> <img${addAttribute(`${base}/logos/carta.svg`, "src")} alt="Carta" class="logo-img" loading="lazy" width="110" height="28" data-astro-cid-j7pv25f6> <span class="logo-role" data-astro-cid-j7pv25f6>PE Analyst</span> </div> <div class="logo-item" data-astro-cid-j7pv25f6> <img${addAttribute(`${base}/logos/costco.svg`, "src")} alt="Costco Wholesale" class="logo-img" loading="lazy" width="140" height="30" data-astro-cid-j7pv25f6> <span class="logo-role" data-astro-cid-j7pv25f6>Financial Systems</span> </div> <div class="logo-item" data-astro-cid-j7pv25f6> <img${addAttribute(`${base}/logos/uw.svg`, "src")} alt="University of Washington" class="logo-img" loading="lazy" width="36" height="32" data-astro-cid-j7pv25f6> <span class="logo-role" data-astro-cid-j7pv25f6>BBA Finance & IS</span> </div> </div> </div> </section>  <section class="journey" aria-label="Career journey" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="section-header" data-animate="reveal" data-astro-cid-j7pv25f6> <span class="section-label" data-astro-cid-j7pv25f6>The Journey</span> <h2 data-astro-cid-j7pv25f6>From Hong Kong to<br data-astro-cid-j7pv25f6>the frontier of AI</h2> </div> <div class="journey-timeline" data-astro-cid-j7pv25f6> ${journeySteps.map((step, i) => renderTemplate`<article class="journey-step" data-animate="reveal"${addAttribute(`--delay: ${i * 0.08}s; --step-accent: ${step.accent}`, "style")} data-astro-cid-j7pv25f6> <div class="step-marker" data-astro-cid-j7pv25f6> <span class="step-number" data-astro-cid-j7pv25f6>${step.label}</span> <div class="step-line" aria-hidden="true" data-astro-cid-j7pv25f6></div> </div> <div class="step-content" data-astro-cid-j7pv25f6> <div class="step-meta" data-astro-cid-j7pv25f6> <span class="step-place" data-astro-cid-j7pv25f6>${step.place}</span> <span class="step-period" data-astro-cid-j7pv25f6>${step.period}</span> </div> <h3 class="step-heading" data-astro-cid-j7pv25f6>${step.heading}</h3> <p class="step-text" data-astro-cid-j7pv25f6>${step.text}</p> </div> </article>`)} </div> </div> </section>  <section class="featured-work" aria-label="Featured projects" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="section-header" data-animate="reveal" data-astro-cid-j7pv25f6> <span class="section-label" data-astro-cid-j7pv25f6>Selected Work</span> <h2 data-astro-cid-j7pv25f6>Things I've built</h2> </div> <div class="work-grid" data-astro-cid-j7pv25f6> ${featuredWork.map((work, i) => renderTemplate`<article class="work-card" data-animate="reveal"${addAttribute(`--delay: ${i * 0.1}s`, "style")} data-astro-cid-j7pv25f6> <div class="work-card-header" data-astro-cid-j7pv25f6> <span class="work-org-badge"${addAttribute(`--org-color: ${work.orgColor}`, "style")} data-astro-cid-j7pv25f6>${work.org}</span> <div class="work-metric-group" data-astro-cid-j7pv25f6> <span class="work-metric" data-astro-cid-j7pv25f6>${work.metric}</span> <span class="work-metric-label" data-astro-cid-j7pv25f6>${work.metricLabel}</span> </div> </div> <h3 class="work-title" data-astro-cid-j7pv25f6>${work.title}</h3> <p class="work-description" data-astro-cid-j7pv25f6>${work.description}</p> <div class="work-tags" data-astro-cid-j7pv25f6> ${work.tags.map((tag) => renderTemplate`<span class="work-tag" data-astro-cid-j7pv25f6>${tag}</span>`)} </div> </article>`)} </div> <div class="section-cta" data-astro-cid-j7pv25f6> <a${addAttribute(`${base}/projects`, "href")} class="btn-outline" data-astro-cid-j7pv25f6>View all projects</a> </div> </div> </section>  <section class="contact-teaser" aria-label="Get in touch" data-astro-cid-j7pv25f6> <div class="container content" data-astro-cid-j7pv25f6> <div class="section-header centered" data-animate="reveal" data-astro-cid-j7pv25f6> <span class="section-label" data-astro-cid-j7pv25f6>Get in Touch</span> <h2 data-astro-cid-j7pv25f6>Let's connect</h2> </div> <p class="contact-text" data-animate="reveal" data-astro-cid-j7pv25f6>
Whether you're interested in AI research, fintech, or just want to say hello — I'd love to hear from you.
</p> <div class="contact-actions" data-animate="reveal" data-astro-cid-j7pv25f6> <a href="mailto:wingchunleung8@gmail.com" class="btn-primary" data-astro-cid-j7pv25f6>Say hello</a> <a${addAttribute(`${base}/contact`, "href")} class="btn-outline" data-astro-cid-j7pv25f6>All contact info</a> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-j7pv25f6": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-j7pv25f6": true })}` })}  ${renderScript($$result, "/home/wing/website/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/wing/website/src/pages/index.astro", void 0);
const $$file = "/home/wing/website/src/pages/index.astro";
const $$url = "/website";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
