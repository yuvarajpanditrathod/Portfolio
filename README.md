<!--
	README for: my-portfolio
	Framework: React + Vite + Tailwind
	Author: yuvarajpanditrathod (repo owner)
	<!--
		Professional README for: my-portfolio
		Framework: React + Vite + Tailwind
		Author: Yuvaraj
	-->

	# Yuvaraj — Developer Portfolio

	A fast, responsive single-page developer portfolio built with React, Vite and Tailwind CSS. It showcases a Hero, About, Skills, Experience, Projects and Contact sections and is configured to deploy to GitHub Pages.

	Live demo: (paste your Pages URL here after deploy)

	## Highlights

	- Small, fast codebase optimized for static hosting
	- Tailwind CSS for rapid styling and responsive layout
	- Framer Motion + icon libraries for subtle UI polish
	- Automated GitHub Actions workflow to build and deploy to Pages

	## Quick start (Windows PowerShell)

	Requirements: Node.js (>=18) and npm

	```powershell
	cd D:\Portfolio\my-portfolio
	npm install
	npm run dev      # start local dev server with HMR
	npm run build    # create optimized production build in `dist/`
	npm run preview  # locally preview the production build
	```

	If you use `pnpm` or `yarn` replace the commands accordingly.

	## Project structure (short)

	src/
	- assets/        # images, resume PDF (Yuvaraj-Resume.pdf)
	- components/    # Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer
	- contexts/      # ThemeContext.jsx (dark/light)
	- main.jsx       # app bootstrap
	- App.jsx        # page composition

	Config & tooling: `vite.config.js`, `tailwind.config.js`, `.github/workflows/deploy-pages.yml`

	Render flow: `main.jsx` → `App.jsx` → sections in `src/components/` (vertical single-page layout)

	## How to customize (quick)

	1. Update copy and project entries: edit components in `src/components/`.
	2. Replace images or resume: drop files into `src/assets/` and update imports.
	3. Adjust theme/colors: edit `tailwind.config.js` and CSS variables.

	## Deployment (GitHub Pages)

	- The repository includes a workflow that builds and publishes the `dist/` folder to GitHub Pages on pushes to `main`.
	- Important: for repo pages the built HTML must reference assets with the repo subpath. `vite.config.js` includes `base: '/Portfolio/'` so published pages load assets correctly at `https://<user>.github.io/Portfolio/`.
	- After a push, check Actions → Deploy static content to Pages for the run status and the published URL.

	## Troubleshooting

	- Layout appears broken on Pages (missing CSS/JS): confirm `vite.config.js` `base` matches the Pages path (e.g., `/Portfolio/`). Rebuild using `npm run build`.
	- `npm install` or native binary EPERM errors on Windows: close editors/terminals, delete `node_modules` and `package-lock.json`, then run `npm install` again.

	## Accessibility & SEO quick tips

	- Use semantic elements (header, main, nav, footer, section).
	- Provide `alt` text for images and descriptive link labels.
	- Add meta description and Open Graph tags in `index.html` for better sharing and SEO.

	## Contact

	- Author: Yuvaraj
	- Resume: `src/assets/Yuvaraj-Resume.pdf`

	---

	Want me to:

	- Add a Pages status badge and published URL into this README
	- Insert SEO meta tags into `index.html`
	- Add a lint/test step to the deploy workflow

	Tell me which and I will implement it.
```
