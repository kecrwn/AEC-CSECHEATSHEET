# Design Direction — AEC CSE Survival Guide

## Three approaches considered

### 1. Curriculum Terminal
**Very Brief Intro:** An editorial reference system inspired by aircraft maintenance manuals and monochrome computing terminals. It makes dense, time-sensitive academic information feel composed, operational, and immediately searchable.

**Probability:** 0.07

### 2. Library Marginalia
**Very Brief Intro:** A quiet scholarly field notebook where warm paper, pencil annotations, and archival tabs create a sense of peer-to-peer guidance. It foregrounds encouragement and long-term study habits.

**Probability:** 0.03

### 3. Signal Workshop
**Very Brief Intro:** A high-contrast research-lab interface using blueprint structures, luminous telemetry marks, and dense typographic specimen sheets. It frames first-year study as a series of systems that can be understood and navigated.

**Probability:** 0.09

## Chosen approach — Curriculum Terminal

### Design Movement
Swiss International Typographic Style interpreted through early scientific-computing terminals and aviation technical manuals. The interface is an **editorial instrument**, not a dashboard.

### Core Principles
1. Every screen prioritizes retrieval: direct labels, strong hierarchy, and predictable anchors make urgent information easy to find.
2. Information is arranged as sequential field notes and precise data bands rather than a grid of interchangeable cards.
3. Operational trust is visible: source markers, verification status, and update dates remain part of the hierarchy instead of disappearing into a footer.
4. Quiet precision carries the design: a restrained palette, calibrated spacing, and a small set of purposeful rules replace decorative UI chrome.

### Color Philosophy
The ground is **near-black graphite** to reduce glare and make the resource comfortable during late-night study. Soft mineral white supports prolonged reading; an acidic safety-yellow signal separates actions and verified wayfinding cues without turning the page neon. A muted mineral-blue appears only for source and external-link context. The contrast is deliberate and printable without relying on color alone.

### Layout Paradigm
An offset technical folio. Desktop uses a left reading rail with a persistent index and a broad, vertically sequenced document field. At key moments, sections break the rail with long horizontal datum lines, oversized numbered markers, or full-bleed evidence bands. On small screens, the rail becomes a compact jump menu while the document preserves its reading sequence.

### Signature Elements
1. **Coordinate marks:** small section numbers, source IDs, and thin datum lines that make the guide feel like a reference instrument.
2. **Verification strips:** a yellow edge mark paired with a source class and last-checked date.
3. **Signal tabs:** understated blue or yellow end-caps on high-value links and callouts.

### Interaction Philosophy
Interactions are utilitarian and physical. Navigation reports the active chapter; link treatments explain whether they lead to official, public, or login-gated destinations; copying an email or phone number offers brief confirmation. No gamified meters, faux data widgets, or unnecessary product prompts are used.

### Animation
Use only 140–220 ms opacity and transform transitions with a sharp ease-out. The active navigation tick slides a few pixels; rows lighten on hover without shifting their dimensions. Section entrance motion uses one subtle upward fade only when motion is permitted. The guide respects `prefers-reduced-motion` and remains fully legible without animation.

### Typography System
**Space Grotesk** is the display and navigation face: semibold, compact, and operational. **IBM Plex Mono** handles section codes, dates, data labels, links, and citations. **Source Serif 4** carries explanatory paragraphs at a generous line height, creating a deliberate difference between reading and scanning. Headlines use sentence case; all navigation and metadata use short uppercase labels with controlled letter spacing.

### Brand Essence
**AEC CSE Survival Guide is a verified, offline-ready academic field manual for first-year CSE students who want an immediate path through the information maze.**

**Personality:** exacting, practical, calm.

### Brand Voice
Headlines speak in direct academic language; CTAs are verbs that clarify destination and access status; microcopy names uncertainty rather than disguising it.

> “Find the official route before the deadline finds you.”

> “Open the syllabus source — public PDF.”

Generic filler such as “Welcome to our website” and “Get started today” is not used.

### Wordmark & Logo
The wordmark uses a custom bracketed terminal construction: `AEC//CSE` paired with a solid, oversized slanted **route marker**. The logo is a text-free black-and-safety-yellow arrowed coordinate glyph, built from a diagonal transit line and a single square node; it suggests a path through a technical system rather than a generic academic crest.

### Signature Brand Color
**Route Yellow — #D6FF3D.** It is reserved for verified wayfinding, critical labels, and the graphic mark.

## Style Decisions

- The desktop page must visibly behave as an offset technical folio: the reading rail anchors the document field with datum lines, persistent source codes, and sequential field-note markers.
- `AEC//CSE` and the slanted Route Yellow coordinate glyph recur in the header, footer, hero and major section transitions. **AECCHEATSHEET** remains the product name; `AEC//CSE` is its institutional terminal signature.
- Images are treated as dark evidence bands, augmented with coordinate overlays, scan lines and document-trace motifs rather than generic decorative technology photography.
