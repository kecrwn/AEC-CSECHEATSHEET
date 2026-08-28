# AECCHEATSHEET

**AECCHEATSHEET** is a responsive, search-first reference website and printable field manual for B.Tech Computer Science and Engineering students at Asansol Engineering College. It organizes verified AEC and MAKAUT routes, curriculum structure, date-sensitive examination guidance, faculty/contact records, resources, social accounts, student-life links, placement-source cautions and a clear source register.

## Static architecture

The project is a client-only React + Vite site. It has no backend, database, authentication requirement or secret. Search operates entirely in the browser and routes readers to the matching guide section. The generated production files are written to `dist/`.

| Requirement | Implementation |
|---|---|
| Mobile / tablet / desktop | Responsive layout with a side rail on desktop and compact search/index controls on smaller screens. |
| Search | Client-side keyword search for guide sections, courses, contacts, portals and practical topics. |
| Routing | Eight direct handbook routes with a static Vercel rewrite for stable deep links. |
| Hosting | Vercel configuration targets `pnpm build` and the `dist` output directory. |
| Handbook PDF | `AECCHEATSHEET_BTech_CSE_Handbook.pdf` mirrors the eight routed sections with matching chapter dividers. |

## Handbook routes

| Route | Content |
|---|---|
| `/` | Orientation and official-source hierarchy. |
| `/links` | AEC, MAKAUT, examination, login, library and student-resource routes. |
| `/resources` | CSE learning stack, library routes and legitimate study tools. |
| `/curriculum` | First-year CSE course tables, batch caution and assessment checkpoints. |
| `/placements` | Evidence-led placement summaries and first-year preparation routes. |
| `/faculty` | Public CSE faculty directory, central contacts and department map. |
| `/social` | Institutional and community channels with source classifications. |
| `/extras` | Fees, accommodation, scholarships, safeguards, events and verified gaps. |

## Run locally

```bash
pnpm install
pnpm dev
```

For a production check:

```bash
pnpm check
pnpm build
pnpm preview
```

## GitHub and Vercel handoff

Create a GitHub repository named `AEC-CSECHEATSHEET`, push this project to its default branch, and import the repository in Vercel. Vercel will read `vercel.json`, run `pnpm build`, and publish `dist/`. No environment variables are required.

Before relying on any academic deadline, payment amount or person-specific contact, open the latest official AEC or MAKAUT source from the in-site reference register. The guide intentionally preserves unresolved source conflicts rather than guessing.
