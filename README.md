<!--
	README for: my-portfolio
	Framework: React + Vite + Tailwind
	Author: yuvarajpanditrathod (repo owner)
	Purpose: Developer portfolio site source + instructions
-->

# My Portfolio

A modern, responsive developer portfolio built with React and Vite, styled with Tailwind CSS, and enhanced with Framer Motion and small UI libraries. This repository contains the source for a single-page portfolio app showcasing About, Skills, Experience, Projects, and Contact sections.

Live demo: (add your deployed URL here)

Quick links

- Code: this repo
- Author: yuvarajpanditrathod

## Table of contents

- What this project is
- Features
- Tech stack
- Quick start (Windows PowerShell)
- Project structure (Clear View)
- Component map (what each file does)
- Development tips
- Deployment
- Accessibility & SEO notes
- License & contact

## What this project is

This is a personal portfolio site built for showcasing professional details, projects, skills, and contact information. It uses Vite for a fast dev experience, React for UI composition, Tailwind for utility-first styling, and Framer Motion for subtle animations.

## Features

- Fast local dev server with HMR
- Responsive layout optimized for desktop and mobile
- Sections: Hero, About, Skills, Experience, Projects, Contact, Footer
- Dark/light theme support via `ThemeContext`
- Simple, accessible forms/links for contact and resume download

## Tech stack

- React 19
- Vite (dev build tool)
- Tailwind CSS
- Framer Motion (animations)
- React Icons / Lucide
- ESLint for linting

## Quick start (Windows PowerShell)

These commands assume you have Node.js (recommended >= 18) and npm installed. Open PowerShell in the repo root (`d:\Portfolio\my-portfolio`) and run:

```powershell
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

If you use yarn or pnpm, replace the commands accordingly (e.g., `pnpm install`).

## Clear View — Project structure and how it maps to the site

Top-level files you'll care about:

- `index.html` — Vite entry HTML
- `package.json` — scripts and dependencies
- `vite.config.js` — Vite configuration
- `tailwind.config.js` + `postcss` files — Tailwind setup

Source code (important folder): `src/`

- `main.jsx` — App bootstrap, React root render and global providers
- `App.jsx` — Root app component that composes page sections and applies layout
- `index.css`, `App.css` — Global styles and Tailwind directives

Major folders

- `src/components/` — Presentational React components used to build the page
	- `Navbar.jsx` — Top navigation and theme toggle
	- `Hero.jsx` — Main header section with name, headline, call-to-action
	- `About.jsx` — Short bio and resume link
	- `Skills.jsx` — Skill list / icons
	- `Experience.jsx` — Timeline or experience cards
	- `Projects.jsx` — Project cards with links/screenshots
	- `Contact.jsx` — Contact form or contact links
	- `Footer.jsx` — Footer links, copyright

- `src/contexts/ThemeContext.jsx` — Theme provider and hook for dark/light mode

- `src/assets/` — Images, resume PDF, and icons used across the site

How it renders: `main.jsx` -> `App.jsx` -> components in `src/components/*` (Hero, About, Skills, ...) — the app is a single page with sections arranged vertically and navigable from the `Navbar`.

Visual layout (logical order of sections)

1. Navbar (site navigation + resume link + theme toggle)
2. Hero (name, short headline, CTA)
3. About (bio, resume download)
4. Skills (icons/list)
5. Experience (timeline/cards)
6. Projects (cards, links to project demos / repos)
7. Contact (email / social links / form)
8. Footer (copyright)

## Component map (quick reference)

- `Navbar.jsx` — handles navigation, mobile menu, theme switch. Connects to `ThemeContext`.
- `Hero.jsx` — hero header copy, background image (if any) and primary CTA (scroll or contact link).
- `About.jsx` — paragraph and resume download link (`src/assets/Yuvaraj-Resume.pdf`).
- `Skills.jsx` — uses icons from `react-icons` / `lucide-react` to present core skills.
- `Experience.jsx` — lists jobs, roles, and durations.
- `Projects.jsx` — each project card shows title, description, tech, and links to live / repo.
- `Contact.jsx` — mailto link or contact form (if implemented) that posts to chosen endpoint.
- `Footer.jsx` — small site footer and external links.

Files to edit when customizing

- `src/components/*` — content and layout
- `src/assets/*` — images, resume, logos
- `tailwind.config.js` — theme, colors, fonts

## Development tips

- Change copy (bio, projects, links) inside the component files for quick updates.
- Keep images in `src/assets` and import them into components to let Vite optimize them.
- Use `ThemeContext.jsx` to add or tweak dark/light styles; prefer Tailwind's `dark:` variants.
- Linting: run `npm run lint` and fix reported issues. ESLint is configured in the repo.

## Deployment

This project builds to static assets using `npm run build`. You can deploy the `dist/` folder to any static host, e.g., GitHub Pages, Netlify, Vercel, or an S3 static site.

Recommended quick deployments:

- Vercel: connect the GitHub repo and use the default build command `npm run build` and `dist` as output.
- Netlify: drag & drop the `dist` folder or connect repo and set build command `npm run build` and publish directory `dist`.

Add a production environment variable or site-specific config if you need analytics or form endpoints.

## Accessibility & SEO notes

- Use semantic HTML elements (header, main, nav, footer, section) for structure.
- Ensure images have `alt` text and links have descriptive labels.
- For better SEO, add meta tags and opengraph tags in `index.html`.

## Tests & Quality gates (suggested)

- Add unit tests with Jest + React Testing Library for critical components.
- Add Lighthouse checks in CI to measure performance and accessibility.

## Troubleshooting

- If the dev server fails to start: delete `node_modules` and `package-lock.json`, then run `npm install` again.
- If Tailwind classes don’t apply, ensure `index.css` includes Tailwind directives and `tailwind.config.js` content paths include `src/**/*`.

## License

Add your preferred license here (e.g., MIT). If this is a personal portfolio, you can state "All rights reserved" or a permissive license.

## Contact

- Author: yuvarajpanditrathod
- Resume: `src/assets/Yuvaraj-Resume.pdf`
- Add your e‑mail and social links in `Footer.jsx` / `Navbar.jsx`.

---

If you'd like, I can:

- Add a short deploy workflow for GitHub Actions
- Generate a minimal Lighthouse CI configuration
- Add meta tags and an SEO-optimized `index.html`

Tell me which of those you'd like next and I’ll implement it.
