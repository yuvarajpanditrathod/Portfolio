<<<<<<< HEAD
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
---

# Yuvaraj — Developer Portfolio

A clean, single-page developer portfolio built with React + Vite and styled with Tailwind CSS. This repo provides the full source for a personal portfolio site: hero, about, skills, experience, projects, contact, and footer.

---

## Quick start (Windows PowerShell)

Open PowerShell in the project root (`d:\Portfolio\my-portfolio`) and run:

```powershell
npm install
npm run dev      # start development server (HMR)
npm run build    # production build -> creates `dist/`
npm run preview  # preview production build locally
```

If you use yarn or pnpm, use those package-manager equivalents.

---

## Clear View — project at-a-glance

Purpose: showcase skills, projects, and contact info in a fast, responsive single-page app.

Core files & folders:

- `index.html` — app entry
- `package.json` — scripts & dependencies
- `vite.config.js` — Vite config
- `tailwind.config.js` — Tailwind setup
- `src/`
	- `assets/` — images, resume PDF (e.g. `Yuvaraj-Resume.pdf`)
	- `components/` — UI sections (Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer)
	- `contexts/ThemeContext.jsx` — theme provider
	- `main.jsx` — app bootstrap
	- `App.jsx` — app composition
	- `index.css` / `App.css` — global styles

Render flow: `main.jsx` → `App.jsx` → section components in `src/components/` (vertical single-page layout).

Logical section order shown in the UI:
1. Navbar (nav, resume link, theme toggle)
2. Hero (headline, CTA)
3. About (bio + resume download)
4. Skills (icons/list)
5. Experience (timeline/cards)
6. Projects (cards with links)
7. Contact (email / social links / form)
8. Footer

---

## Component map (one-line summary)

- `Navbar.jsx` — top navigation, mobile menu, theme switch
- `Hero.jsx` — main header with name and CTA
- `About.jsx` — bio and resume download
- `Skills.jsx` — tech/skill icons
- `Experience.jsx` — work/education timeline
- `Projects.jsx` — project cards with links
- `Contact.jsx` — contact links or form
- `Footer.jsx` — social links and copyright

---

## Customize (3 quick edits)

1. Edit text and project details in `src/components/*`.
2. Replace images and the resume in `src/assets/`.
3. Update colors/fonts in `tailwind.config.js`.

---

## Deploy (quick)

- Vercel: import the repo, use `npm run build`.
- Netlify: set build command `npm run build`, publish directory `dist`.
- GitHub Pages: build then publish `dist/` (or use a deploy action).

---

## Good-to-have improvements (I can add any of these)

- CI workflow to build & deploy (GitHub Actions)
- Add meta + Open Graph tags to `index.html` for SEO
- Lighthouse/A11y checks in CI
- Simple contact form integration (Netlify Forms / Formspree)

---

## Contact

- Author: Yuvaraj
- Resume: `src/assets/Yuvaraj-Resume.pdf`
- Edit `src/components/Footer.jsx` and `Navbar.jsx` to add email and social links.

---

If you'd like, I can add a GitHub Actions deploy workflow or insert SEO meta tags next — tell me which and I will implement it.
- If the dev server fails to start: delete `node_modules` and `package-lock.json`, then run `npm install` again.
