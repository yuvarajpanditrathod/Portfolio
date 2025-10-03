<<<<<<< HEAD
<!--
	README for: my-portfolio
	Framework: React + Vite + Tailwind
	Author: yuvarajpanditrathod (repo owner)
	# Yuvaraj — Developer Portfolio

	A simple, fast, single-page developer portfolio built with React + Vite and styled with Tailwind CSS. This repo contains the source for the site (Hero, About, Skills, Experience, Projects, Contact, Footer) and an automated Pages deploy workflow.

	Live demo: (paste your GitHub Pages URL here after first deploy)

	---

	## Quick start (Windows PowerShell)

	Open PowerShell in the repository root (`d:\Portfolio\my-portfolio`) and run:

	```powershell
	npm install
	npm run dev      # start development server with HMR
	npm run build    # production build -> creates `dist/`
	npm run preview  # preview production build locally
	```

	If you prefer `pnpm` or `yarn`, use the equivalent commands.

	---

	## Clear view — where to edit

	Core source locations:

	- `src/components/` — main UI sections (Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer)
	- `src/assets/` — images and `Yuvaraj-Resume.pdf`
	- `src/contexts/ThemeContext.jsx` — dark/light theme provider
	- `src/main.jsx` and `src/App.jsx` — app bootstrap and composition
	- `vite.config.js`, `tailwind.config.js` — build and styling configs

	Render order (page layout): Navbar → Hero → About → Skills → Experience → Projects → Contact → Footer

	---

	## Deployment (GitHub Pages)

	- This repo includes a workflow that builds and deploys the `dist/` folder to GitHub Pages on pushes to `main`.
	- Important: the app must use correct base paths so assets load from the Pages subpath. `vite.config.js` already contains `base: '/Portfolio/'` for this repository. If you deploy to a custom domain, update/remove `base` accordingly.
	- After pushing to `main`, check Actions → Deploy static content to Pages. When the run completes you should see the Pages URL in the workflow output or in Settings → Pages.

	---

	## Quick customization checklist

	1. Edit text or project entries under `src/components/Projects.jsx`.
	2. Replace images and resume in `src/assets/`.
	3. Update colors or fonts in `tailwind.config.js`.

	---

	## Troubleshooting

	- If CSS or JS return 404 on the published site, ensure `vite.config.js`'s `base` matches your Pages path (e.g., `/Portfolio/`).
	- If `npm ci` or `npm install` fails on Windows with EPERM errors for native binaries, close editors/terminals using the project and retry; removing `node_modules` and `package-lock.json` and running `npm install` can help.

	---

	## Contact & license

	- Author: Yuvaraj
	- Resume: `src/assets/Yuvaraj-Resume.pdf`
	- License: add your preferred license (e.g., MIT) or "All rights reserved".

	---

	If you want, I can add:

	- A Pages status badge to the README
	- A GitHub Actions step to run lint/tests before deploy
	- SEO meta tags and Open Graph tags in `index.html`

	Tell me which and I will implement it.
```
