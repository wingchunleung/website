# Design Decision Record 001: Recruiter-Friendly & Professional Design Strategy

## Date: 2026-03-19
## Status: Proposed
## Context: How to make Wing's personal website effective for professional networking and recruiting while maintaining artistic quality and HCI grounding.

---

## Part 1: Research Findings

### 1.1 How Recruiters Actually Use Portfolio Websites

**The time constraint is severe.** Research shows:
- Hiring managers spend an average of **55 seconds** evaluating a resume AND portfolio combined (Presentum).
- 81% of recruiters spend less than 1 minute on a CV during initial screening (StandOut CV).
- The Nielsen Norman Group found users stay on a webpage for **10-20 seconds** before deciding to leave.
- The five-second test methodology confirms: if your core message is not clear in 5 seconds, you have failed.

**What recruiters explicitly want in 2025-2026:**
1. **Proof of work** -- not claims, but shipped projects with measurable outcomes.
2. **Clear professional identity** -- a single branding statement that captures who you are.
3. **Easy contact** -- recruiters will not hunt for your email.
4. **Mobile-responsive design** -- many recruiters review on phones between meetings.
5. **No broken links, no outdated data** -- signals attention to detail.
6. **3-5 standout projects** with case studies showing problem, process, and impact.

**The 2026 shift:** The recruitment landscape has moved from "Who you are" to "What you have shipped." Static PDF resumes are being replaced by interactive proof-of-work hubs where hiring managers verify skills in real-time.

### 1.2 Presenting a Hybrid Finance/Tech Background

Wing's positioning -- MSc AI at HKUST, PE Analyst at Carta, Financial Systems Analyst at Costco -- is **rare and valuable**. The hybrid background is a competitive advantage, not a liability.

**Key strategies from research:**
- Frame the hybrid background as a **narrative of convergence**, not a scattered career path.
- Use a visual representation (e.g., a Venn diagram or intersection graphic) showing how finance domain expertise and AI/ML technical skills combine to solve problems neither field can solve alone.
- Lead with the intersection: "I build AI systems that understand financial complexity" (or similar branding statement).
- The fintech industry specifically values people who speak both languages -- this background maps directly to the fastest-growing sector in tech.

### 1.3 Portfolio Best Practices for AI/ML Roles

**Project requirements for ML portfolios in 2025-2026:**
- End-to-end ML pipeline projects (data to deployment) are the gold standard.
- LLM fine-tuning projects are currently among the most impressive portfolio additions.
- Projects must show: problem statement, data handling, feature engineering, model selection, evaluation metrics, and deployment.
- Interactive demos (via Streamlit, Gradio, or HuggingFace Spaces) dramatically increase engagement.
- Blog-style write-ups demonstrate communication ability -- critical for senior roles.

**Presentation standards:**
- GitHub repos with clean READMEs are expected.
- Live demos or deployed applications are strongly preferred over static screenshots.
- Architecture diagrams and code snippets showing decision-making process.
- **Quantified impact is mandatory**: "Reduced processing time by 70%" is infinitely more compelling than "improved efficiency."

### 1.4 How Top Fintech/AI Professionals Present Themselves

**Lessons from leading fintech companies (Stripe, Wise, SoFi):**
- Confidence through bold, distinctive visual identity.
- Immediate value proposition in the hero section.
- Progressive complexity -- simple surface, depth available on demand.
- Trust signals: clean design, professional typography, prominent credentials.
- Data visualization as a design element (charts, graphs as aesthetic features).

---

## Part 2: Recruiter-Optimized Design Recommendations

### 2.1 Information Hierarchy: The 5-10-60 Second Framework

Design for three levels of engagement:

#### The 5-Second Layer (Above the Fold)
A recruiter's first impression. Must communicate:
1. **Name**: Wing Chun Leung
2. **Branding Statement**: One sentence (e.g., "AI engineer with deep finance expertise -- bridging quantitative analysis and machine learning at the intersection of fintech")
3. **Current Status**: MSc AI @ HKUST
4. **Primary CTA**: "View Projects" or "Download Resume"
5. **Visual identity**: Professional photo or distinctive visual element

**HCI Grounding:**
- **Information scent** (Nielsen Norman Group): Users choose links with the highest "information scent" -- the degree to which visible cues suggest the destination. Every element above the fold must smell strongly of professional competence.
- **Stage 1 Visual Processing** (from HCI knowledge base): Parallel extraction of basic features (color, orientation, size). The branding statement and CTAs must be visually distinct via size and contrast.
- **F-pattern reading** (from HCI knowledge base, Section 11): Western readers scan in an F-pattern. Place the branding statement along the top horizontal bar, key links along the left vertical bar.

#### The 10-Second Layer (First Scroll)
For recruiters who passed the 5-second threshold:
1. **Top 3 projects** as cards with: title, one-sentence description, key metric (e.g., "70% time reduction"), and tech stack tags.
2. **Skills overview**: Visual but scannable -- grouped by domain (AI/ML, Finance, Engineering).
3. **Professional timeline**: Quick visual showing Carta, Costco, HKUST progression.

**HCI Grounding:**
- **Gestalt Proximity**: Group related skills together; separate skill domains with whitespace.
- **Gestalt Similarity**: Consistent card design across all projects signals they are peers in importance.
- **Miller's Law** (~7 items): Show 3 project cards (well within working memory limits). Do not overwhelm with 8+ items.
- **Recognition over Recall** (Nielsen H6): Use tech stack icons/logos instead of plain text lists; users recognize Python, TensorFlow, pandas logos faster than reading names.

#### The 60-Second Layer (Deep Dive)
For hiring managers doing due diligence:
1. **Full project case studies** with problem/approach/result structure.
2. **Detailed experience section** with bullet points and quantified achievements.
3. **Blog/writing section** demonstrating thought leadership.
4. **Full skills matrix** with proficiency indicators.
5. **Education details** including relevant coursework.

**HCI Grounding:**
- **Progressive disclosure** (Nielsen, 1995): Defer complex information to secondary views. The 60-second layer should be accessible but not visible during the 5-second scan.
- **Flexibility and Efficiency** (Nielsen H5): Expert users (hiring managers reviewing deeply) need different navigation paths than scanning recruiters.

### 2.2 Project Presentation with Measurable Impact

Each project card should follow this structure:

```
[Project Title]
[One-sentence description of what it does]

Impact: "70% reduction in manual processing time"
        "Predicted portfolio risk with 94% accuracy"
        "$2M in savings identified through automated analysis"

Tech: [Python] [PyTorch] [LangChain] [PostgreSQL]

[View Case Study] [Live Demo] [GitHub]
```

**Design principles for impact metrics:**
- Use a **larger font or distinct color** for the metric number (e.g., "70%") to create visual hierarchy.
- Place the metric before the description -- humans scan numbers before text.
- Use comparative framing: "from X to Y" is more credible than just a percentage.
- Limit to ONE key metric per project card. Multiple metrics dilute attention.

**HCI Grounding:**
- **Visceral design** (Norman): The impact number creates an immediate emotional reaction -- "this person delivers results."
- **Figure-Ground** (Gestalt): The metric should be the figure (foreground), with the project description as ground (context).
- **Minimalism** (Nielsen H3): One metric is stronger than three. Every extra element competes with relevant information.

### 2.3 Resume/CV Download Strategy

**Recommended approach: Dual-format with strategic placement.**

1. **Primary CTA in hero section**: "Download Resume" button, above the fold, high contrast.
   - Links to a well-formatted PDF optimized for ATS (applicant tracking systems) and human reading.
   - File named `Wing_Chun_Leung_Resume.pdf` (not `resume_v3_final_FINAL.pdf`).

2. **Inline HTML resume** as a dedicated page (`/resume`):
   - Searchable, accessible, always up-to-date.
   - Print-friendly CSS for those who prefer to print.
   - A "Download PDF" button at the top of this page as well.

3. **Contextual resume CTAs**: After each project case study, a subtle "See my full experience" link leading to the resume page.

4. **Tracking**: Implement event tracking on resume downloads to understand recruiter engagement.

**HCI Grounding:**
- **Fitts's Law**: The resume download button must be large (minimum 44x44px for mobile, ideally larger) and positioned in a high-traffic area (top-right of hero, or centered below branding statement). Target placement matters more than target size -- position it where the user's cursor/thumb naturally rests.
- **Visibility** (Nielsen H7): The download action should provide feedback -- a brief animation or state change confirming the download started.
- **Consistency** (Nielsen H1): The PDF resume and the HTML version should contain identical information; inconsistency between them would violate the principle of least surprise.

### 2.4 Contact/CTA Placement

**Research-backed placement strategy:**

1. **Hero section**: Primary CTA ("View Projects" or "Download Resume") -- centered or left-aligned depending on layout, high contrast against background.
2. **Sticky header/navigation**: "Contact" always visible during scroll. On mobile, accessible within the thumb zone (bottom of screen).
3. **End of project case studies**: "Interested in working together? Let's connect." with email and LinkedIn.
4. **Dedicated contact section** at page bottom: Email, LinkedIn, GitHub, and optionally a simple contact form.
5. **Footer**: Persistent links to LinkedIn, GitHub, email.

**What NOT to do:**
- Do not hide contact behind a hamburger menu on desktop.
- Do not use a contact form as the ONLY way to reach out. Always display the actual email address.
- Do not require visitors to scroll to the bottom to find any contact method.

**HCI Grounding:**
- **Fitts's Law (mobile)**: Users hold phones with one hand and use their thumb. Place the primary mobile CTA in the bottom-center "easy reach" zone, not at the top of the screen.
- **Recognition over Recall** (Nielsen H6): Use recognizable icons (LinkedIn logo, GitHub octocat, envelope icon) alongside text labels. Icons alone are ambiguous; icons plus labels are optimal.
- **Error Prevention** (Nielsen H8): Make email addresses clickable (`mailto:`) to prevent typos when manually entering them.

### 2.5 Skills Presentation Approach

**Recommended: Categorized visual grid, NOT percentage bars.**

Percentage-based skill bars (e.g., "Python: 85%") are widely criticized because:
- 85% of what? They are meaningless without a reference point.
- They invite unfavorable comparison rather than demonstrating competence.
- They waste space communicating uncertainty rather than capability.

**Better approach -- Categorized skill clusters:**

```
AI & Machine Learning          Finance & Analytics           Engineering
- Deep Learning (PyTorch)      - Financial Modeling           - Python, SQL
- NLP / LLM Fine-tuning       - Private Equity Analysis      - Cloud (AWS/GCP)
- Computer Vision              - Risk Assessment              - Git, CI/CD
- MLOps / Model Deployment     - Data-Driven Decision Making  - REST APIs
```

**Design details:**
- Use a **3-column layout** on desktop (maps to the three identity pillars: AI, Finance, Engineering).
- Each skill is a tag/chip with consistent styling.
- Highlight "intersection skills" (e.g., "Quantitative Finance + ML") with a distinct visual treatment to reinforce the hybrid positioning.
- On hover or click, link skills to relevant projects that demonstrate them.

**HCI Grounding:**
- **Gestalt Proximity & Similarity**: Grouping skills into columns and using consistent chip styling leverages both principles to create clear categorical understanding.
- **Working Memory** (Miller's Law): Each category should contain 4-6 items (well within the 7 +/- 2 limit).
- **Mapping** (Nielsen H2): The three columns map to how Wing's expertise actually works -- three domains converging.

### 2.6 LinkedIn/GitHub Integration

**LinkedIn:**
- Link in navigation header (icon + text).
- Embed LinkedIn recommendations or endorsements as social proof (if available).
- Ensure the LinkedIn profile and website tell a consistent story (consistency heuristic).
- Include a "Connect on LinkedIn" CTA in the contact section.

**GitHub:**
- Link in navigation header (icon + text).
- For each project, link directly to the specific repository (not just the GitHub profile).
- Consider embedding GitHub contribution graphs or pinned repository cards for the "60-second layer" audience.
- Repository READMEs should mirror the project case study structure on the website.

**Integration principle:** The website is the hub; LinkedIn and GitHub are spokes. The website should contain the richest presentation, with LinkedIn/GitHub offering complementary proof.

---

## Part 3: Balancing Artistic Design with Professional Credibility

### 3.1 When Creative Design Helps

Creative design HELPS professional perception when it:
- **Demonstrates technical skill**: A beautifully crafted website built by an AI/engineering candidate IS a portfolio piece itself. It signals frontend capability, attention to detail, and aesthetic sensibility.
- **Creates memorability**: Recruiters reviewing 50 portfolios will remember the one with a distinctive visual identity. Stripe's bold gradient, for example, makes it instantly recognizable.
- **Reinforces the narrative**: For Wing, a design that visually bridges finance (clean, trustworthy, data-driven) with AI (modern, dynamic, intelligent) tells the hybrid story without words.
- **Shows personality**: The reflective level of Norman's design model -- "what does this say about me?" -- is where artistic choices create connection. A recruiter should finish visiting the site thinking "this person is thoughtful and capable."

### 3.2 When Creative Design Hurts

Creative design HURTS professional perception when it:
- **Obscures information**: If a recruiter cannot find your experience in 10 seconds because of a fancy animation sequence, the design has failed.
- **Signals wrong priorities**: An overly artistic site for an AI engineering role may signal "this person is a designer, not an engineer." The artistry must complement, not overshadow, the technical identity.
- **Creates friction**: Novel navigation patterns (e.g., horizontal scrolling, hidden menus, scroll-jacking) increase cognitive load and violate the consistency heuristic (Nielsen H1 -- external consistency with how websites normally work).
- **Increases load time**: Heavy animations or unoptimized assets hurt mobile performance. A recruiter on a train with spotty 4G will abandon a slow site.

### 3.3 The Sweet Spot: "Elegant Engineering"

**Recommended aesthetic strategy for Wing:**

1. **Clean, data-inspired base**: Use a design language that echoes financial dashboards and data visualization -- clean grids, monospace accents for numbers/metrics, generous whitespace. This signals "finance + tech" at the visceral level.

2. **Selective, purposeful animation**: Reserve motion for meaningful interactions:
   - Subtle parallax on hero section (creates depth without distraction).
   - Smooth transitions when project cards expand to case studies (progressive disclosure with visual continuity).
   - Data visualization animations that bring metrics to life (e.g., a number counting up to "70%" when the impact metric scrolls into view).

3. **Distinctive but restrained color palette**: Choose 2-3 colors that bridge finance (navy, deep blue, slate) and technology (electric blue, teal, accent gradients). Avoid neon or overly playful palettes that undermine credibility.

4. **Typography as identity**: Use a sophisticated type system:
   - A modern sans-serif for headings (e.g., Inter, Space Grotesk).
   - A clean sans-serif for body text.
   - A monospace font for technical elements (code snippets, tech stack tags, metrics).
   - This typographic hierarchy subtly communicates "I operate at the intersection of business and engineering."

5. **One signature design element**: Choose one distinctive visual feature that becomes memorable:
   - Option A: A subtle neural-network-inspired dot pattern in the background (signals AI).
   - Option B: A dynamic chart/visualization in the hero that uses real data (signals quantitative skill).
   - Option C: A code-editor-inspired navigation or section headers (signals engineering identity).
   - Pick ONE. Multiple signature elements compete and dilute impact (minimalism heuristic).

---

## Part 4: HCI-Grounded Design for Multiple Personas

### 4.1 Persona Definitions

Based on Wing's likely website visitors:

**Persona 1: The Recruiter (Sarah)**
- Goal: Quickly assess if Wing is a viable candidate.
- Time budget: 30-60 seconds.
- Needs: Role fit, experience level, tech stack, contact info, resume.
- Path: Hero -> Projects (scan) -> Resume download -> Contact.

**Persona 2: The Hiring Manager (David)**
- Goal: Evaluate technical depth and problem-solving ability.
- Time budget: 2-5 minutes.
- Needs: Project case studies, architecture decisions, code quality, quantified impact.
- Path: Hero -> Projects -> Case study deep dive -> GitHub repos -> Resume.

**Persona 3: The Professor/Academic (Dr. Chen)**
- Goal: Assess research potential, intellectual curiosity, and rigor.
- Time budget: 3-10 minutes.
- Needs: Research interests, writing quality, methodology, coursework.
- Path: Hero -> Projects (research-oriented) -> Blog/writing -> Education details.

**Persona 4: The Peer (Alex)**
- Goal: Assess collaboration potential, learn from Wing's work, connect.
- Time budget: Variable (could be minutes to hours).
- Needs: Technical details, code quality, shared interests, social links.
- Path: Hero -> Projects -> GitHub -> Blog -> LinkedIn/contact.

### 4.2 Information Scent for Each Persona

**Information scent** (Nielsen Norman Group) is the degree to which visible cues at the origin suggest the user will find what they need at the destination. For Wing's site:

| Element | Recruiter Scent | Manager Scent | Professor Scent | Peer Scent |
|---------|----------------|---------------|-----------------|------------|
| Branding statement | Strong (role fit) | Moderate | Moderate | Moderate |
| Impact metrics on cards | Strong | Strong | Moderate | Moderate |
| "View Case Study" link | Weak (too deep) | Strong | Strong | Strong |
| "Download Resume" | Strong | Moderate | Weak | Weak |
| "View on GitHub" | Weak | Strong | Moderate | Strong |
| Blog/Writing section | Weak | Moderate | Strong | Strong |
| Tech stack tags | Strong (keyword match) | Strong | Moderate | Strong |

**Design implication:** The hero and first scroll must have strong scent for ALL personas. This means including BOTH quick-scan elements (for recruiters) AND depth signals (for managers/professors).

### 4.3 Fitts's Law Application

**Fitts's Law**: Time to reach a target = f(distance / size). Larger, closer targets are faster to click.

**Specific applications:**

1. **Primary CTAs (hero)**: Minimum 48px height, full-width on mobile. On desktop, place "View Projects" and "Download Resume" side by side in the natural gaze path (center-left, below branding statement). Use high-contrast fill (not ghost/outline buttons) for the primary action.

2. **Navigation items**: Keep navigation compact so targets are close together (reduces travel distance between items). 5-6 items maximum: Home, Projects, Experience, Blog, Contact -- plus Resume download.

3. **Project card click targets**: Make the entire card clickable, not just a small "Learn More" link. A 300x200px card is a much larger target than a 100x30px text link.

4. **Mobile-specific**: Place the primary CTA in the bottom 40% of the screen (thumb zone). The sticky mobile navigation should be bottom-mounted, not top-mounted, to respect natural thumb reach.

5. **Contact section**: Make email, LinkedIn, and GitHub buttons large and spaced apart (minimum 8px gap between targets to prevent mis-taps -- error prevention heuristic).

### 4.4 Progressive Disclosure Implementation

**Layer 1 -- Surface (visible on load):**
- Branding statement + name
- Professional photo or visual identity
- Primary CTAs
- Navigation

**Layer 2 -- First interaction (one scroll or click):**
- Project cards with impact metrics
- Skills overview (categorized clusters)
- Professional timeline (visual)

**Layer 3 -- On demand (click to expand):**
- Full project case studies
- Detailed experience descriptions
- Blog posts / writing
- Education and coursework details

**Layer 4 -- External (links out):**
- GitHub repositories
- LinkedIn profile
- Live project demos
- Downloadable resume PDF

**Implementation mechanism:**
- Use scroll-based reveal (not click-to-expand) for Layer 1 to Layer 2 transition. Scroll is lower effort than clicking.
- Use card-to-detail-page navigation for Layer 2 to Layer 3. Each project card links to its own case study page.
- Use clearly labeled external links (with external-link icon) for Layer 4, opening in new tabs.

**HCI Grounding:**
- Progressive disclosure improves 3 of 5 usability components: learnability, efficiency, and error rate (Nielsen, 1995).
- **User Control and Freedom** (Nielsen H4): Users can go as deep as they want and retreat at any time. No forced linear journeys.
- **Visibility of System Status** (Nielsen H7): When expanding content or navigating to a case study, provide clear indication of where the user is (breadcrumbs, highlighted nav item).

### 4.5 Multi-Persona Navigation Design

**Recommended navigation structure:**

```
[Wing Chun Leung]   Projects   Experience   Blog   Contact   [Download Resume]
```

- **"Projects"** serves all personas -- the universal entry point.
- **"Experience"** is what recruiters look for specifically (high scent for Persona 1).
- **"Blog"** is what professors and peers seek (high scent for Personas 3 and 4).
- **"Contact"** is always visible (all personas).
- **"Download Resume"** is a distinct CTA button (not just a nav link) -- visually differentiated to serve Persona 1 especially.

**The navigation must NOT include:**
- "About Me" as a separate page -- fold this into the hero section. A separate "About" page adds one click of friction before the recruiter sees content, violating the 55-second time constraint.
- "Skills" as a separate page -- integrate into the hero or first scroll. A standalone skills page is a dead end with low information density.

---

## Part 5: Summary of Recommendations

### Must-Have (Critical for Recruiter Effectiveness)

1. **Clear branding statement above the fold** that positions the finance + AI intersection.
2. **3 project cards with quantified impact metrics** visible within first scroll.
3. **Resume download CTA** in hero section, large and high-contrast.
4. **Contact information** always accessible (header and footer at minimum).
5. **Mobile-responsive design** with thumb-zone-aware CTA placement.
6. **Fast load time** (under 3 seconds on 4G).
7. **No broken links** -- automated link checking in CI/CD.

### Should-Have (Strongly Recommended)

8. **Individual project case study pages** with problem/approach/result/impact structure.
9. **Categorized skills section** (3-column: AI, Finance, Engineering).
10. **Professional timeline** showing career progression visually.
11. **LinkedIn and GitHub integration** with direct links and recognizable icons.
12. **Blog/writing section** for thought leadership content.
13. **HTML resume page** in addition to PDF download.

### Nice-to-Have (Differentiators)

14. **One signature visual element** (neural net pattern, data visualization, or code-editor motif).
15. **Interactive project demos** embedded or linked (Streamlit/Gradio).
16. **Animated impact metrics** (count-up animation on scroll).
17. **Dark/light mode toggle** (demonstrates attention to user preference).
18. **Analytics tracking** on resume downloads and project views.

---

## Sources

- [What US Recruiters Look for in a Digital Portfolio](https://fueler.io/blog/what-us-recruiters-look-for-in-a-digital-portfolio)
- [How Recruiters and Hiring Managers Actually Look at Your Portfolio](https://blog.opendoorscareers.com/p/how-recruiters-and-hiring-managers-actually-look-at-your-portfolio)
- [Why Candidates Need Digital Portfolios in 2026](https://www.onrec.com/news/news-archive/why-candidates-need-digital-portfolios-in-2026)
- [How a Portfolio Website Gives You a Job-Seeking Edge](https://itsyourcareer.blog/how-a-portfolio-website-gives-you-a-job-seeking-edge/)
- [Don't waste time on a (React) portfolio website - 60+ hiring managers survey](https://profy.dev/article/portfolio-websites-survey)
- [Portfolio evaluation process as a hiring manager](https://presentum.io/design/hiring-explained/evaluating-portfolio-and-resume)
- [How long do recruiters spend looking at your CV? (2026 study)](https://standout-cv.com/stats/how-long-recruiters-spend-looking-at-cv)
- [ML Engineer Portfolio Projects That Will Get You Hired in 2025](http://www.interviewnode.com/post/ml-engineer-portfolio-projects-that-will-get-you-hired-in-2025)
- [The Ultimate Guide to Building a Machine Learning Portfolio That Lands Jobs](https://machinelearningmastery.com/ultimate-guide-building-machine-learning-portfolio-lands-jobs/)
- [Don't Build an ML Portfolio Without These Projects](https://towardsdatascience.com/dont-build-an-ml-portfolio-without-these-projects/)
- [Information Scent: How Users Decide Where to Go Next (NNGroup)](https://www.nngroup.com/articles/information-scent/)
- [Progressive Disclosure (NNGroup)](https://www.nngroup.com/articles/progressive-disclosure/)
- [Fitts's Law and Its Applications in UX (NNGroup)](https://www.nngroup.com/articles/fitts-law/)
- [The Science Behind Effective CTA Placement](https://notyouridea.com/blog/science-of-effective-website-cta-placement)
- [Findability and Web Design (IxDF)](https://www.interaction-design.org/literature/article/findability-and-web-design-users-aren-t-visiting-your-site-to-play-hide-and-seek)
- [Personas Make Users Memorable (NNGroup)](https://www.nngroup.com/articles/persona/)
- [Five-Second Testing Case Study (Smashing Magazine)](https://www.smashingmagazine.com/2023/12/five-second-testing-case-study/)
- [Visual Hierarchy in Web Design (Squarespace)](https://www.squarespace.com/blog/visual-hierarchy)
- [How to Design a Simple Personal Website That Converts](https://www.resumly.ai/blog/how-to-design-a-simple-personal-website-that-converts)
- [Best Fintech Website Design Examples](https://www.ramotion.com/blog/fintech-website-design-examples/)
- [Craft an Outstanding UX Portfolio With Recruiter Tips (Toptal)](https://www.toptal.com/designers/ux/ux-portfolio-tips-recruiter)
