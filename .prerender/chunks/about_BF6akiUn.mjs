import { c as createComponent, $ as $$BaseLayout, r as renderScript, a as $$Header, b as $$Footer } from './Footer_CMkeqOjG.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_2mVi4qWA.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const experience = [
    {
      org: "HKUST",
      role: "Research Assistant — AI in Asset Management",
      period: "2026 — Present",
      color: "#003366",
      highlight: "LLM-driven macro allocation pipeline",
      metrics: ["Multi-agent systems", "RMB 5T+ AUM scope", "Prof. Yi Yang"]
    },
    {
      org: "Carta",
      role: "Private Equity Analyst",
      period: "2024 — 2025",
      color: "#1a1a1a",
      highlight: "Redesigned PE advisory workflow",
      metrics: ["70% faster processing", "4.8/5.0 satisfaction", "LLM tools built"]
    },
    {
      org: "Costco",
      role: "Financial Systems Analyst",
      period: "2023 — 2024",
      color: "#e31837",
      highlight: "Automated financial operations",
      metrics: ["99% time reduction", "97% forecast accuracy", "Python/SQL"]
    }
  ];
  const education = [
    {
      org: "HKUST",
      degree: "MSc Artificial Intelligence",
      period: "2025 — 2027",
      color: "#003366",
      detail: "GPA 3.43 · Talent Development Scholarship"
    },
    {
      org: "UW",
      degree: "BBA Finance & Information Systems",
      period: "2020 — 2022",
      color: "#4b2e83",
      detail: "GPA 3.78 · Dean's List · CFO Blockchain Society"
    },
    {
      org: "Edmonds",
      degree: "AA Business Administration",
      period: "2018 — 2020",
      color: "#2d6a4f",
      detail: "GPA 4.0 · Commencement Honors"
    }
  ];
  const stats = [
    { value: "5×", label: "Guest Speaker" },
    { value: "3", label: "Languages" },
    { value: "4.0", label: "College GPA" },
    { value: "6+", label: "Leadership Roles" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About — Wing Chun Leung", "description": "Learn about Wing Chun Leung — bridging finance and AI, from Hong Kong to HKUST.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="page-hero" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <span class="section-label" data-astro-cid-kh7btl4r>About</span> <h1 data-astro-cid-kh7btl4r>The person behind<br data-astro-cid-kh7btl4r>the systems</h1> <p class="hero-sub" data-astro-cid-kh7btl4r>
Builder at the intersection of finance and AI. From Hong Kong,
        through the US, and back — always bridging disciplines.
</p> </div> </section>  <section class="stats-strip" aria-label="Quick stats" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <div class="stats-row" data-animate="reveal" data-astro-cid-kh7btl4r> ${stats.map((s) => renderTemplate`<div class="stat-item" data-astro-cid-kh7btl4r> <span class="stat-value"${addAttribute(s.value, "data-count")} data-astro-cid-kh7btl4r>${s.value}</span> <span class="stat-label" data-astro-cid-kh7btl4r>${s.label}</span> </div>`)} </div> </div> </section>  <section class="exp-section" aria-label="Experience" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <div class="section-header" data-animate="reveal" data-astro-cid-kh7btl4r> <span class="section-label" data-astro-cid-kh7btl4r>Experience</span> <h2 data-astro-cid-kh7btl4r>Where I've built</h2> </div> <div class="exp-grid" data-astro-cid-kh7btl4r> ${experience.map((exp, i) => renderTemplate`<article class="exp-card" data-animate="reveal"${addAttribute(`--delay: ${i * 0.1}s; --brand: ${exp.color}`, "style")} data-astro-cid-kh7btl4r> <div class="exp-card-top" data-astro-cid-kh7btl4r> <span class="exp-org" data-astro-cid-kh7btl4r>${exp.org}</span> <span class="exp-period" data-astro-cid-kh7btl4r>${exp.period}</span> </div> <h3 class="exp-role" data-astro-cid-kh7btl4r>${exp.role}</h3> <p class="exp-highlight" data-astro-cid-kh7btl4r>${exp.highlight}</p> <div class="exp-metrics" data-astro-cid-kh7btl4r> ${exp.metrics.map((m) => renderTemplate`<span class="exp-metric" data-astro-cid-kh7btl4r>${m}</span>`)} </div> </article>`)} </div> </div> </section>  <section class="edu-section" aria-label="Education" data-astro-cid-kh7btl4r> <div class="container" data-astro-cid-kh7btl4r> <div class="section-header" data-animate="reveal" data-astro-cid-kh7btl4r> <span class="section-label" data-astro-cid-kh7btl4r>Education</span> <h2 data-astro-cid-kh7btl4r>Where I've learned</h2> </div> <div class="edu-grid" data-astro-cid-kh7btl4r> ${education.map((edu, i) => renderTemplate`<article class="edu-card" data-animate="reveal"${addAttribute(`--delay: ${i * 0.1}s; --brand: ${edu.color}`, "style")} data-astro-cid-kh7btl4r> <span class="edu-org" data-astro-cid-kh7btl4r>${edu.org}</span> <h3 class="edu-degree" data-astro-cid-kh7btl4r>${edu.degree}</h3> <span class="edu-period" data-astro-cid-kh7btl4r>${edu.period}</span> <p class="edu-detail" data-astro-cid-kh7btl4r>${edu.detail}</p> </article>`)} </div> </div> </section>  <section class="bio-section" aria-label="Personal" data-astro-cid-kh7btl4r> <div class="container content" data-astro-cid-kh7btl4r> <div class="section-header centered" data-animate="reveal" data-astro-cid-kh7btl4r> <span class="section-label" data-astro-cid-kh7btl4r>The Human</span> <h2 data-astro-cid-kh7btl4r>Beyond the resume</h2> </div> <div class="bio-content" data-animate="reveal" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Born and raised in <strong data-astro-cid-kh7btl4r>Hong Kong</strong>, educated in the <strong data-astro-cid-kh7btl4r>United States</strong>,
          now home building the future of AI. I speak English, Cantonese, and Mandarin.
</p> <p data-astro-cid-kh7btl4r>
I've been a guest speaker five times — at universities, high schools, and community organizations.
          I've mentored interns, tutored students, and led multiple student organizations.
          I believe the most important skill is the ability to make others better.
</p> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-kh7btl4r": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-kh7btl4r": true })}` })}  ${renderScript($$result, "/home/wing/src/pages/about.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/wing/src/pages/about.astro", void 0);
const $$file = "/home/wing/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
