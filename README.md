# AECCHEATSHEET

**AECCHEATSHEET** is a responsive, search-first reference website for B.Tech Computer Science and Engineering students at Asansol Engineering College. It presents verified AEC and MAKAUT resource routes, curriculum structure, date-sensitive examination guidance, contacts, library access, placement-source cautions and a clear source register.

## Static architecture

The project is a client-only React + Vite site. It has no backend, database, authentication requirement or secret. Search operates entirely in the browser and routes readers to the matching guide section. The generated production files are written to `dist/`.

| Requirement | Implementation |
|---|---|
| Mobile / tablet / desktop | Responsive layout with a side rail on desktop and compact search/index controls on smaller screens. |
| Search | Client-side keyword search for guide sections, courses, contacts, portals and practical topics. |
| Routing | One-page document with static Vercel rewrite for stable direct URLs. |
| Hosting | Vercel configuration targets `pnpm build` and the `dist` output directory. |

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
