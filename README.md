# Olalekan "Swanky" Isiaka — Official Portfolio

> Visual Artist | Production Designer | Nollywood Art Director | Founder, Just Art Ltd

---

## About

The official portfolio website for **Olalekan "Swanky" Isiaka** — a Nigerian multidisciplinary visual artist, production designer, and acclaimed Nollywood art director. Recognised for bridging fine art and large-scale production design across the Nigerian film, television, and broadcast industries.

**AMVCA Nominee** for Best Art Director. Credits include *A Tribe Called Judah*, *Everybody Loves Jenifa*, *Shanty Town* (Netflix), *The Party* (Netflix), and the *Big Brother Naija Reunion* set (2025).

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Build** | Vite 7 |
| **Styling** | Tailwind CSS 3 + CSS Custom Properties |
| **Animation** | GSAP + ScrollTrigger |
| **Routing** | React Router v7 |
| **Icons** | Lucide React |
| **UI Components** | Radix UI primitives |
| **Smooth Scroll** | Lenis |

---

## Features

- **Dark / Light Mode** — Global theming via CSS custom properties with smooth animated transitions, OS preference detection, `localStorage` persistence, and zero-FOUC inline script
- **GSAP Animations** — Scroll-triggered reveals, parallax, and cinematic page transitions
- **Custom Cursor** — Bespoke animated cursor with hover detection (`mix-blend-difference`)
- **Film Grain Overlay** — SVG noise texture for cinematic texture
- **Responsive** — Mobile-first design across all breakpoints
- **Accessible** — ARIA labels, focus-visible rings, semantic HTML, keyboard navigation

---

## Pages

| Route | Description |
|---|---|
| `/` | Splash / landing with Ken Burns hero |
| `/home` | Homepage with hero, services, selected work, stats, about teaser |
| `/about` | Full biography, career timeline, recognition, teaching philosophy |
| `/work` | Portfolio with showreel video, filterable project grid, detail modals |
| `/workshops` | Masterclasses, workshop types, testimonials, upcoming dates, FAQs |
| `/stock` | Art prints gallery with category filters and purchase options |
| `/rates` | Service pricing for art direction, production design, workshops |
| `/presenting` | Public speaking services, topics, and past events |
| `/blog` | Blog with category filters and newsletter signup |
| `/contact` | Contact form with project type selector and budget range |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
cd app
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
app/
  src/
    assets/          # Images, videos, siteImages registry
    components/      # Navbar, Footer, CustomCursor, ScrollReveal, etc.
    context/         # ThemeContext (global dark/light mode)
    data/            # siteData.ts (projects, blog, testimonials, etc.)
    pages/           # Route-level page components
    index.css        # Global styles, CSS variables, Tailwind layers
  index.html         # Entry HTML with FOUC prevention script
  tailwind.config.js # Tailwind configuration
  vite.config.ts     # Vite configuration
```

---

## Theming Architecture

The app uses a **CSS custom property** system with two token sets:

- `:root` — Dark mode (default)
- `.light-mode` — Light mode overrides

Theme state is managed by `ThemeContext` (React Context API) which supports:

- **Three modes:** `light`, `dark`, `system`
- **OS sync:** Listens for `prefers-color-scheme` changes
- **Persistence:** `localStorage`
- **FOUC prevention:** Inline `<script>` in `index.html` applies class before first paint
- **Smooth transitions:** `theme-transitioning` class enables 300ms color transitions only during active switches

---

## Contact

**Olalekan "Swanky" Isiaka**
Email: olalekan@swankyi.com
Company: Just Art Ltd

---

<sub>Built with care. Designed for impact.</sub>
