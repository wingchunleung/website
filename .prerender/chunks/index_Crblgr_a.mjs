import { c as createComponent, $ as $$BaseLayout, r as renderScript, a as $$Header, b as $$Footer } from './Footer_CMkeqOjG.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_2mVi4qWA.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const assignments = [
    {
      number: "01",
      title: "Assignment 1",
      description: "Coming soon — check back for the first HCI assignment.",
      date: "TBD",
      status: "upcoming"
    }
  ];
  const principles = [
    {
      category: "Usability Heuristics",
      items: [
        { name: "Consistency", description: "Internal, external, and metaphorical consistency across the interface." },
        { name: "Mapping", description: "Match between system and real world — use language users understand." },
        { name: "Minimalism", description: "Every extra element competes with relevant information." },
        { name: "Freedom", description: "User control — undo, redo, emergency exits." },
        { name: "Flexibility", description: "Accelerators for experts, support for novices." },
        { name: "Recognition", description: "Make options visible rather than requiring recall." },
        { name: "Visibility", description: "Keep users informed about system status." },
        { name: "Error Prevention", description: "Prevent errors before they occur through constraints." },
        { name: "Error Recovery", description: "Help users recognize, diagnose, and recover from errors." },
        { name: "Help", description: "Provide help and documentation when needed." }
      ]
    },
    {
      category: "Gestalt Principles",
      items: [
        { name: "Proximity", description: "Close elements are perceived as related groups." },
        { name: "Similarity", description: "Similar elements are perceived as belonging together." },
        { name: "Continuation", description: "Elements on a line or curve are seen as related." },
        { name: "Closure", description: "The mind completes incomplete shapes." },
        { name: "Figure-Ground", description: "Users distinguish foreground from background." },
        { name: "Common Fate", description: "Elements moving together are grouped." },
        { name: "Symmetry", description: "Balanced elements are perceived as unified." }
      ]
    },
    {
      category: "Design Levels",
      items: [
        { name: "Visceral", description: "Immediate emotional reaction — sensation, first impression." },
        { name: "Behavioral", description: "Usability and function — does it work well?" },
        { name: "Reflective", description: "Meaning and self-image — what does it say about me?" }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "HCI — Wing Chun Leung", "description": "ARIN5301 Human-Computer Interaction coursework by Wing Chun Leung at HKUST.", "accent": "celadon", "data-astro-cid-6cl3lugn": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="page-hero hci-hero" data-astro-cid-6cl3lugn> <div class="container content" data-astro-cid-6cl3lugn> <span class="section-label" data-astro-cid-6cl3lugn>ARIN5301</span> <h1 data-astro-cid-6cl3lugn>Human-Computer<br data-astro-cid-6cl3lugn>Interaction</h1> <p class="page-subtitle" data-astro-cid-6cl3lugn>
Coursework and explorations from Prof. Xiaojuan Ma's HCI course at HKUST.
        This page is itself a demonstration of the principles it describes.
</p> </div> </section>  <section class="assignments-section" aria-label="Course assignments" data-astro-cid-6cl3lugn> <div class="container content" data-astro-cid-6cl3lugn> <div class="section-header" data-animate="reveal" data-astro-cid-6cl3lugn> <span class="section-label" data-astro-cid-6cl3lugn>Assignments</span> <h2 data-astro-cid-6cl3lugn>Coursework</h2> </div> <div class="assignments-list" data-astro-cid-6cl3lugn> ${assignments.map((assignment) => renderTemplate`<article class="assignment-card" data-animate="reveal" data-astro-cid-6cl3lugn> <div class="assignment-number" data-astro-cid-6cl3lugn>${assignment.number}</div> <div class="assignment-content" data-astro-cid-6cl3lugn> <h3 class="assignment-title" data-astro-cid-6cl3lugn>${assignment.title}</h3> <p class="assignment-description" data-astro-cid-6cl3lugn>${assignment.description}</p> <div class="assignment-meta" data-astro-cid-6cl3lugn> <span class="assignment-date" data-astro-cid-6cl3lugn>${assignment.date}</span> <span${addAttribute(["assignment-status", assignment.status], "class:list")} data-astro-cid-6cl3lugn> ${assignment.status === "upcoming" ? "Upcoming" : "Published"} </span> </div> </div> </article>`)} </div> <p class="assignments-note" data-astro-cid-6cl3lugn>
Assignments will be posted here as they are completed throughout the semester.
</p> </div> </section>  <section class="principles-section" aria-label="HCI principles reference" data-astro-cid-6cl3lugn> <div class="container" data-astro-cid-6cl3lugn> <div class="content" data-astro-cid-6cl3lugn> <span class="section-label" data-astro-cid-6cl3lugn>Reference</span> <h2 data-astro-cid-6cl3lugn>HCI Principles Applied to This Site</h2> <p class="principles-intro" data-astro-cid-6cl3lugn>
Every design decision on this website is grounded in HCI theory from ARIN5301.
          Below are the key principles and how they are applied.
</p> </div> <div class="principles-grid" data-astro-cid-6cl3lugn> ${principles.map((group) => renderTemplate`<div class="principle-group" data-animate="reveal" data-astro-cid-6cl3lugn> <h3 class="group-title" data-astro-cid-6cl3lugn>${group.category}</h3> <ul class="principle-list" data-astro-cid-6cl3lugn> ${group.items.map((item) => renderTemplate`<li class="principle-item" data-astro-cid-6cl3lugn> <span class="principle-name" data-astro-cid-6cl3lugn>${item.name}</span> <span class="principle-desc" data-astro-cid-6cl3lugn>${item.description}</span> </li>`)} </ul> </div>`)} </div> </div> </section>  <section class="design-notes-section" aria-label="Design decisions" data-astro-cid-6cl3lugn> <div class="container content" data-astro-cid-6cl3lugn> <span class="section-label" data-astro-cid-6cl3lugn>Design Notes</span> <h2 data-astro-cid-6cl3lugn>How this site practices HCI</h2> <div class="design-notes" data-animate="reveal" data-astro-cid-6cl3lugn> <article class="design-note" data-astro-cid-6cl3lugn> <h3 data-astro-cid-6cl3lugn>Color as Identity</h3> <p data-astro-cid-6cl3lugn>
The warm "Ink Stone" palette draws from traditional Chinese ink painting materials — connecting cultural identity to visual design. The celadon accent on this page distinguishes course content from the main site while maintaining system consistency (H1).
</p> </article> <article class="design-note" data-astro-cid-6cl3lugn> <h3 data-astro-cid-6cl3lugn>Typography as Hierarchy</h3> <p data-astro-cid-6cl3lugn>
Three typefaces serve three roles: Cormorant Garamond for display (emotional, visceral), Inter for body (readable, behavioral), JetBrains Mono for metadata (technical, informational). This three-tier system supports Recognition over Recall (H6).
</p> </article> <article class="design-note" data-astro-cid-6cl3lugn> <h3 data-astro-cid-6cl3lugn>Whitespace as Design</h3> <p data-astro-cid-6cl3lugn>
Generous section spacing (96-128px) creates distinct visual "rooms" — applying Gestalt Proximity to group related content and reduce cognitive load. The content column is limited to 720px for optimal 65-75 character line length.
</p> </article> <article class="design-note" data-astro-cid-6cl3lugn> <h3 data-astro-cid-6cl3lugn>Motion as Feedback</h3> <p data-astro-cid-6cl3lugn>
Scroll-reveal animations provide Visibility of System Status (H7) — confirming that new content has loaded. All animations respect <code data-astro-cid-6cl3lugn>prefers-reduced-motion</code> for accessibility (H5 Flexibility).
</p> </article> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-6cl3lugn": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "data-astro-cid-6cl3lugn": true })}` })}  ${renderScript($$result, "/home/wing/src/pages/hci/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/wing/src/pages/hci/index.astro", void 0);

const $$file = "/home/wing/src/pages/hci/index.astro";
const $$url = "/hci";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
