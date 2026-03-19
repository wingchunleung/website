# HCI Knowledge Base
## Extracted from ARIN5301 Course Materials (Prof. Xiaojuan Ma, HKUST)

---

## 1. Foundations of HCI

HCI sits at the intersection of:
- **Use and Context** (social organization, application areas, human-machine fit)
- **Human** (belief, perception, cognition, emotion)
- **Computer** (truth, implementation, technology)
- **Development Process** (design approaches, implementation, evaluation, case studies)

**Key insight**: People remember **80% of what they SEE and DO**, 20% of what they read, 10% of what they hear. Design for active visual engagement.

---

## 2. Understanding Humans

### 2.1 Sensory Systems
- **Vision** (primary channel for digital interfaces)
  - Sensitivity: luminance range 10^-6 to 10^7 mL
  - Acuity: angle & focus detection, movement tracking
  - Adaptation: distance/lighting changes cause fatigue
  - Deficiency: Color blindness affects 8% of males, 0.5% of females
  - Symbol recognition: 5-30 degrees from center of vision
  - Binocular vision: 62 degrees each side

### 2.2 Visual Information Processing (3 Stages)
1. **Stage 1 - Features**: Parallel extraction of basic features (color, orientation, size)
2. **Stage 2 - Patterns**: Serial recognition of patterns from features
3. **Stage 3 - GIST/Working Memory**: Construction of meaning, fed to visual and verbal working memory

### 2.3 Gestalt Principles (Perceptual Grouping)

| Principle | Description | Web Design Application |
|-----------|-------------|----------------------|
| **Closure** | Mind completes incomplete shapes | Progress indicators (incomplete circles = loading) |
| **Continuation** | Elements on line/curve perceived as related | Navigation bars, breadcrumbs |
| **Common Fate** | Elements moving together are grouped | Carousel items, dropdown menus |
| **Symmetry** | Balanced layouts perceived as unified | Centered navigation, symmetric grids |
| **Figure-Ground** | Distinguish foreground from background | Modal overlays, card elevation, shadows |
| **Similarity** | Similar elements perceived as grouped | Consistent button styles, icon families |
| **Proximity** | Close elements perceived as related | Form field labels near inputs, card grouping |

### 2.4 Human Memory
- **Short-term (working) memory**: ~7 +/- 2 items (Miller's Law)
- **Long-term memory**: Unlimited but requires encoding
- **Design implication**: Don't require users to remember more than 7 items; use recognition over recall

### 2.5 Cognition
- **Attention**: Selective and limited; design must guide it
- **Learning**: Support both first-time and experienced users
- **Problem solving**: Provide clear paths to goals
- **Emotion**: Influences cognitive capability; positive emotion → better problem solving

---

## 3. User Experience Models

### Implementation Model → Representation Model → Mental Model

- **Implementation model**: How the system actually works (technical)
- **Mental model**: How the user thinks it works (conceptual)
- **Representation model**: How the interface presents the system
- **Goal**: Make representation model as close to mental model as possible

**Key components of UX**:
- Perception (Sensation & Awareness)
- Imagination (Idea or Image or Concept)
- Knowledge (Experience & Reasoning)
- Comprehension (Language & Communication)

---

## 4. Design Philosophy

### 4.1 Design as Practice vs. Design as Thinking
- **Practice**: Domain-specific knowledge, skills, tools
- **Thinking**: Generic process and mindset (Design Thinking)

### 4.2 Three Levels of Design (Donald Norman)
| Level | Focus | Example |
|-------|-------|---------|
| **Visceral** | Sensation, immediate reaction | Skeuomorphic icons, color palette |
| **Behavioral** | Usability, function | Navigation flow, form design |
| **Reflective** | Meaning, self-image | Brand identity, social sharing |

### 4.3 Aspects of Design
- **Usability**: "The simplest solution is usually the best" (Occam's Razor)
- **Aesthetics**: "Attractive things work better" (Norman) - but ugly ≠ unusable
- **Culture**: Usability and aesthetics are user/culture-dependent

### 4.4 Design Thinking (IDEO)
A **human-centered** approach to innovation that integrates:
- The **needs of people**
- The **possibilities of technology**
- The requirements for **business success**

**Start with USER NEEDS, not solutions or problems.**

---

## 5. Design Process: Empathize → Interpret → Ideate → Verify

### 5.1 Empathize
Methods:
- **Immerse**: Be one of the users
- **Observe**: Record behavior
- **Contact**: Interview users

### 5.2 Interpret
1. **Organize**: Transcribe, annotate, group into clusters (themes, patterns, trends, outliers)
2. **Construct Framework**:
   - **HTA** (Hierarchical Task Analysis): Goals → sub-goals → operations → plans
   - **GOMS** (Goals, Operators, Methods, Selection rules): Solution-oriented, human info processing
   - **Activity Theory**: Considers social context, community, rules, roles
3. **Generate POV**: User + Need + Insight (Goal)

### 5.3 Ideate
- Brainstorm many possible solutions
- Avoid jumping to the first idea
- Divergent thinking before convergent

### 5.4 Verify (Evaluate)
- Build prototypes
- Test with users
- Iterate based on feedback

---

## 6. Personas

A **persona** is a description of a "fake" representative user:
- **Demographics**: Background, bio
- **Attributes**: Abilities, likes/dislikes
- **Goals**: Details, reasons

Used to keep design decisions grounded in real user needs.

---

## 7. Nielsen's 10 Usability Heuristics (Detailed)

### H1: Consistency and Standards
- **Internal consistency**: Interface consistent with itself
- **External consistency**: Consistent with similar apps/platform
- **Metaphorical consistency**: Consistent with real-world entity (e.g., shopping cart icon)
- **Principle of Least Surprise**: Similar things should act similarly; different things should look different
- **Adhere to Platform Guidelines**: Consistent language, color, wording, ordering, input syntax

### H2: Match Between System and Real World (Mapping)
- Use language users understand, not system-oriented terms
- Follow real-world conventions
- Information appears in natural and logical order

### H3: Aesthetic and Minimalist Design (Minimalism)
- Every extra element competes with relevant information
- Remove or de-emphasize non-essential information
- "The simplest solution is usually the best" (Occam's Razor)

### H4: User Control and Freedom (Freedom)
- Provide undo and redo
- Support "emergency exits" from unwanted states
- Don't trap users in dead ends

### H5: Flexibility and Efficiency of Use
- Accelerators for expert users (keyboard shortcuts, gestures)
- Allow users to customize frequent actions
- Support both novice and expert paths

### H6: Recognition Rather Than Recall
- Make options visible or easily retrievable
- Reduce memory load
- Show contextual information at point of need

### H7: Visibility of System Status
- Keep users informed about what's happening
- Provide appropriate feedback within reasonable time
- Show progress for long operations

### H8: Error Prevention
- Prevent errors before they occur
- Use constraints to prevent invalid input
- Provide confirmation for irreversible actions

### H9: Help Users Recognize, Diagnose, and Recover from Errors
- Error messages in plain language (not error codes)
- Precisely indicate the problem
- Constructively suggest a solution

### H10: Help and Documentation
- System should be usable without documentation
- But help should be available when needed
- Easy to search, focused on user's task, concrete steps

---

## 8. Heuristic Evaluation Process

1. **Recruit 3-5 inspectors** (usability engineers, end users, experts)
2. **Inspect interface in isolation** (then as a group)
   - Pre-training on heuristics
   - ~1-2 hours for simple interfaces
3. **Conduct assessment**: Identify problem → rate severity → propose fix
4. **Aggregate results**: Single evaluator catches ~35%; **5 evaluators catch ~75%** ("Rule of Five")
5. **Debriefing** with design team

### Severity Rating Scale
| Rating | Description |
|--------|-------------|
| 0 | Not a usability problem |
| 1 | Cosmetic problem |
| 2 | Minor usability problem |
| 3 | Major usability problem; important to fix |
| 4 | Usability catastrophe; must fix |

Severity = f(Frequency, Impact, Persistence)

---

## 9. Evaluation: Questionnaires

### Survey Research Process
1. Identify research objectives
2. Identify & characterize target audience
3. Design sampling plan
4. Design & write questionnaire
5. Pilot test
6. Distribute
7. Analyze results

### Questionnaire Design Guidelines
- Be specific, but not too specific
- Use simple words and sentences
- Highlight key words (e.g., "Not")
- Avoid double negatives
- Avoid bias in answer options
- Avoid hypothetical questions
- Likert scales: 5-point or 7-point most common
- Each additional question reduces response rate by 0.5%
- Each additional page reduces response rate by 5%

---

## 10. Accessibility Considerations

- **Color blindness**: Never use color as the only indicator (8% males affected)
- **Visual acuity**: Ensure sufficient text size and contrast
- **Motor impairment**: Ensure adequate click/tap target sizes (Fitts's Law)
- **Cognitive load**: Minimize information processing requirements
- **Screen readers**: Semantic HTML, ARIA labels, alt text

---

## 11. Web-Specific HCI Guidelines

### Visual Hierarchy
- Use size, color, contrast, and position to guide attention
- Most important content above the fold
- F-pattern and Z-pattern reading for western audiences

### Navigation
- Maximum 7 +/- 2 top-level items
- Breadcrumbs for deep hierarchies
- Consistent navigation placement

### Forms
- Label placement: above or to the left of field
- Single masked input fields are ~2.5x faster than multi-field dropdowns (GOMS analysis)
- Group related fields using proximity
- Provide inline validation

### Responsive Design
- Content-first approach
- Touch targets minimum 44x44px (Apple HIG) / 48x48dp (Material Design)
- Consider thumb zones for mobile
