import { c as createComponent, $ as $$BaseLayout, r as renderScript, a as $$Header, b as $$Footer } from './Footer_CMkeqOjG.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_2mVi4qWA.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "LLM Macro Allocation Pipeline",
      metric: "RMB 5T+",
      metricLabel: "AUM scope",
      org: "HKUST",
      orgColor: "#003366",
      period: "2026 — Present",
      description: "Building a multi-agent LLM system for macro cycle analysis and asset allocation. Uses pairwise tournament ranking and dual-ranker Borda aggregation to synthesize qualitative reasoning into actionable investment signals.",
      tags: ["LLM", "Multi-Agent", "Finance", "Python", "NLP"],
      featured: true
    },
    {
      title: "PE Advisory Workflow Redesign",
      metric: "70%",
      metricLabel: "faster",
      org: "Carta",
      orgColor: "#1a1a1a",
      period: "2024 — 2025",
      description: "Redesigned the financial projection workflow from Bloomberg Terminal to Google Sheets, reducing processing from 30+ minutes to under 8 minutes.",
      tags: ["Process Design", "LLM", "Google Sheets"],
      featured: false
    },
    {
      title: "LLM Email Response Generator",
      metric: "4.8/5",
      metricLabel: "satisfaction",
      org: "Carta",
      orgColor: "#1a1a1a",
      period: "2024 — 2025",
      description: "Built an LLM-powered email response generator for PE advisory client inquiries, standardizing communication quality across the team.",
      tags: ["LLM", "NLP", "Automation"],
      featured: false
    },
    {
      title: "Payroll Automation System",
      metric: "99%",
      metricLabel: "time saved",
      org: "Costco",
      orgColor: "#e31837",
      period: "2023 — 2024",
      description: "Transformed a 4-hour manual payroll process into a single-click automated system. Eliminated human error and freed the team for higher-value work.",
      tags: ["Python", "SQL", "Automation"],
      featured: false
    },
    {
      title: "Payroll Expense Forecasting",
      metric: "97%",
      metricLabel: "accuracy",
      org: "Costco",
      orgColor: "#e31837",
      period: "2023 — 2024",
      description: "Developed a payroll expense forecasting model enabling better budget planning and resource allocation.",
      tags: ["Forecasting", "Python", "Finance"],
      featured: false
    },
    {
      title: "Revenue Accounting Automation",
      metric: "40hrs",
      metricLabel: "/week saved",
      org: "Costco",
      orgColor: "#e31837",
      period: "2022",
      description: "Built VBA-based process improvements saving approximately 40 hours per week across the revenue accounting team.",
      tags: ["VBA", "Excel", "Automation"],
      featured: false
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects — Wing Chun Leung", "description": "Selected projects by Wing Chun Leung — LLM systems, financial automation, and process optimization.", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="page-hero" data-astro-cid-aid3sr62> <div class="container" data-astro-cid-aid3sr62> <span class="section-label" data-astro-cid-aid3sr62>Projects</span> <h1 data-astro-cid-aid3sr62>Building systems<br data-astro-cid-aid3sr62>that think</h1> <p class="hero-sub" data-astro-cid-aid3sr62>
From payroll automation to LLM-driven macro analysis — making complex systems more intelligent.
</p> </div> </section>  ${projects.filter((p) => p.featured).map((project) => renderTemplate`<section class="featured-project" aria-label="Featured project" data-astro-cid-aid3sr62> <div class="container" data-astro-cid-aid3sr62> <article class="featured-card" data-animate="reveal"${addAttribute(`--brand: ${project.orgColor}`, "style")} data-astro-cid-aid3sr62> <div class="featured-badge" data-astro-cid-aid3sr62> <span class="featured-org"${addAttribute(`color: ${project.orgColor}`, "style")} data-astro-cid-aid3sr62>${project.org}</span> <span class="featured-label" data-astro-cid-aid3sr62>Featured</span> </div> <div class="featured-body" data-astro-cid-aid3sr62> <div class="featured-metric-group" data-astro-cid-aid3sr62> <span class="featured-metric" data-astro-cid-aid3sr62>${project.metric}</span> <span class="featured-metric-label" data-astro-cid-aid3sr62>${project.metricLabel}</span> </div> <div class="featured-info" data-astro-cid-aid3sr62> <h2 class="featured-title" data-astro-cid-aid3sr62>${project.title}</h2> <p class="featured-desc" data-astro-cid-aid3sr62>${project.description}</p> <div class="featured-tags" data-astro-cid-aid3sr62> ${project.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-aid3sr62>${tag}</span>`)} </div> </div> </div> </article> </div> </section>`)} <section class="projects-grid-section" aria-label="All projects" data-astro-cid-aid3sr62> <div class="container" data-astro-cid-aid3sr62> <div class="projects-grid" data-astro-cid-aid3sr62> ${projects.filter((p) => !p.featured).map((project, i) => renderTemplate`<article class="project-card" data-animate="reveal"${addAttribute(`--delay: ${i * 0.08}s; --brand: ${project.orgColor}`, "style")} data-astro-cid-aid3sr62> <div class="project-card-top" data-astro-cid-aid3sr62> <span class="project-org" data-astro-cid-aid3sr62>${project.org}</span> <span class="project-period" data-astro-cid-aid3sr62>${project.period}</span> </div> <div class="project-metric-row" data-astro-cid-aid3sr62> <span class="project-metric" data-astro-cid-aid3sr62>${project.metric}</span> <span class="project-metric-label" data-astro-cid-aid3sr62>${project.metricLabel}</span> </div> <h3 class="project-title" data-astro-cid-aid3sr62>${project.title}</h3> <p class="project-desc" data-astro-cid-aid3sr62>${project.description}</p> <div class="project-tags" data-astro-cid-aid3sr62> ${project.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-aid3sr62>${tag}</span>`)} </div> </article>`)} </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-aid3sr62": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-aid3sr62": true })}` })}  ${renderScript($$result, "/home/wing/website/src/pages/projects.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/wing/website/src/pages/projects.astro", void 0);
const $$file = "/home/wing/website/src/pages/projects.astro";
const $$url = "/website/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
