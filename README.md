<div align="center">

# 🎓 AEC-CSECHEATSHEET

### *The Essential Engineering Field Manual & Reference Hub for Asansol Engineering College*

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-Components-161618?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <b>A responsive, instant-search reference application and printable handbook tailored for B.Tech Computer Science & Engineering students at AEC (MAKAUT).</b>
</p>

</div>

---

## 📖 About The Project

**AEC-CSECHEATSHEET** is an open-source, client-only handbook and dynamic navigation portal designed specifically for Computer Science & Engineering undergraduates at **Asansol Engineering College (AEC)**, affiliated with **MAKAUT**. 

Navigating college portals, exam schedules, faculty listings, syllabus updates, and reliable placement preparation materials can be fragmented and daunting. This platform consolidates verified departmental resources into an ultra-fast, offline-friendly, search-first reference hub.

Key objectives:
- ⚡ **Instant Client-Side Search:** Zero-latency fuzzy search across all handbook routes, courses, faculty directories, and verified links.
- 🎯 **Source Hierarchy & Truth Register:** Prioritizes official AEC and MAKAUT directives to mitigate misinformation and unverified rumors.
- 📑 **Dual-Format Delivery:** A responsive web application paired with an exported printable field manual (`AECCHEATSHEET_BTech_CSE_Handbook.pdf`).

---

## ✨ Key Features

- **🔍 Search-First Experience**: High-speed, client-side indexing across sections, syllabus modules, faculty contacts, and institutional portals.
- **🗺️ Complete Academic Routing**:
  - `/` &mdash; **Orientation**: Official information hierarchy, institutional guidelines, and safety checks.
  - `/links` &mdash; **Portals & Gateways**: Verified MAKAUT, AEC, student registration, exam, and library links.
  - `/resources` &mdash; **Curated CSE Stack**: Core textbooks, reference repositories, developer tools, and study aids.
  - `/curriculum` &mdash; **B.Tech Syllabus & Roadmap**: Detailed semester breakdowns, lab manuals, and assessment checkpoints.
  - `/placements` &mdash; **Placement & Career Blueprint**: Evidence-led recruiter insights, coding prep trajectories, and interview archives.
  - `/faculty` &mdash; **Faculty Directory**: Contact directory, departmental offices, and office hours.
  - `/social` &mdash; **Community & Clubs**: Verified student chapters (ACM, IEEE, GDSC), technical forums, and social channels.
  - `/extras` &mdash; **Campus Life & Safeguards**: Hostel guides, scholarships, transit routes, and support channels.
- **📱 Fluid Responsiveness**: Optimized for mobile thumb navigation, tablet split views, and full-screen desktop workstations.
- **🔒 Zero-Dependency Runtime**: Operates completely in the client without external backend servers, tracking, or databases.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- **Language**: [TypeScript 5.6](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Component Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [Wouter](https://github.com/molefrog/wouter)
- **Deployment**: [Vercel](https://vercel.com/) (zero-config static deployment via `vercel.json`)

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [pnpm](https://pnpm.io/) (v10+ recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kecrwn/AEC-CSECHEATSHEET.git
   cd AEC-CSECHEATSHEET
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

### Production Build & Verification

```bash
# Type check TypeScript codebase
pnpm check

# Build production bundle to dist/
pnpm build

# Preview production build locally
pnpm preview
```

---

## 📂 Project Structure

```
AEC-CSECHEATSHEET/
├── client/
│   ├── src/
│   │   ├── components/    # Reusable UI primitives & layout components
│   │   ├── contexts/      # App state providers (theme, search state)
│   │   ├── data/          # Verified academic datasets & handbook content
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Route views (Orientation, Curriculum, Faculty, etc.)
│   │   ├── App.tsx        # Application router and shell
│   │   └── main.tsx       # DOM root entry
├── docs/                  # Supplementary documentation & research
├── public/                # Static assets and icons
├── vercel.json            # Vercel SPA rewrite & cache headers
├── vite.config.ts         # Vite build configuration
└── package.json           # Dependencies and scripts
```

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">
  <sub>Maintained with ❤️ for AEC CSE scholars by <a href="https://github.com/kecrwn">Kecrwn</a></sub>
</div>
