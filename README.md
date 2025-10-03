
<!--
  Professional README — my-portfolio
  Framework: React + Vite + Tailwind
  Author: Yuvaraj
-->

# Yuvaraj — Developer Portfolio

A fast, responsive single-page developer portfolio built with React, Vite and Tailwind CSS. The site showcases a Hero, About, Skills, Experience, Projects and Contact sections and is configured for automated deployment to GitHub Pages.

Live demo: (paste your Pages URL here after deploy)

## Key highlights

- Lightweight, fast static site built with Vite
- Tailwind CSS for responsive, utility-first styling
- Small, composable React components for each section
- Automated GitHub Actions workflow to build and publish to Pages

---

## Quick start (Windows PowerShell)

Prerequisites: Node.js >= 18, npm

```powershell
cd D:\Portfolio\my-portfolio
npm install
npm run dev      # start local dev server with HMR
npm run build    # create optimized production build in `dist/`
npm run preview  # preview production build locally
```

Use `pnpm` or `yarn` if you prefer those package managers.

---

## Project structure (concise)

src/
- assets/        # images and `Yuvaraj-Resume.pdf`
- components/    # Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer
- contexts/      # ThemeContext (dark/light)
- main.jsx       # app bootstrap
- App.jsx        # app composition

Config & tooling: `vite.config.js`, `tailwind.config.js`, `.github/workflows/deploy-pages.yml`

Render flow: `main.jsx` → `App.jsx` → components in `src/components/` (vertical single-page layout)

---

## Customization checklist

1. Edit content: change copy, project details, and links in files under `src/components/`.
2. Update assets: replace images and `Yuvaraj-Resume.pdf` in `src/assets/`.
3. Style tweaks: update theme, colors, and fonts in `tailwind.config.js`.

---

## Deployment (GitHub Pages)

- This repository includes a workflow that builds and publishes the `dist/` folder to GitHub Pages when you push to `main`.
- Important: repo Pages serve at `https://<user>.github.io/<repo>/`. `vite.config.js` is configured with `base: '/Portfolio/'` so built assets reference the correct subpath for this repo. If you use a custom domain, update or remove `base` accordingly.
- After pushing to `main`, check the Actions tab for the "Deploy static content to Pages" run. The published URL appears in the workflow output and in the repository Settings → Pages.

---

## Troubleshooting

- Missing CSS/JS on the published site (404s): ensure `vite.config.js` `base` matches the Pages path (e.g., `/Portfolio/`) and rebuild (`npm run build`).
- Windows native binary EPERM during `npm install`: close editors and terminals that might hold files, remove `node_modules` and `package-lock.json`, then run `npm install` again.

---

## Accessibility & SEO quick tips

- Use semantic HTML and meaningful link text.
- Provide descriptive `alt` attributes for images.
- Add meta description and Open Graph tags in `index.html` for improved sharing and SEO.

---

## Contact & license

- Author: Yuvaraj
- Resume: `src/assets/Yuvaraj-Resume.pdf`
- License: add your preferred license (e.g., MIT) or "All rights reserved".

---

If you'd like, I can:

- Add a Pages status badge and published URL to this README
- Insert SEO meta tags into `index.html`
- Add a lint/test step to the deploy workflow

Tell me which and I'll implement it.
```
