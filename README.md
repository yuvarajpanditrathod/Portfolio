
<!--
  Professional README — my-portfolio
  Framework: React + Vite + Tailwind
  Author: Yuvaraj
-->

src/
<div align="center">
  <img src="public/favicon.svg" width="80" alt="Logo" />
  
  <h1>Yuvaraj P Rathod — Professional Portfolio</h1>
  <p>
    <b>Full-Stack Developer | React • Node.js • Tailwind CSS</b><br/>
    Building robust, scalable, and innovative digital solutions.
  </p>
  <a href="https://github.com/yuvarajpanditrathod/Portfolio" target="_blank">
    <img src="https://img.shields.io/github/deployments/yuvarajpanditrathod/Portfolio/github-pages?label=Deploy&logo=github" alt="GitHub Pages Status" />
  </a>
</div>


## 🚀 Live Demo

> [View Portfolio Online](#) <!-- Add your deployed URL here -->

---

## ✨ Features

- Modern, responsive single-page design
- Built with React, Vite, and Tailwind CSS
- Modular, maintainable codebase
- Professional sections: Hero, About, Skills, Experience, Projects, Contact
- Automated deployment with GitHub Actions & Pages
- SEO and accessibility best practices

---

## 🛠️ Quick Start

**Prerequisites:** Node.js >= 18, npm

```sh
git clone https://github.com/yuvarajpanditrathod/Portfolio.git
cd Portfolio
npm install
npm run dev       # Start local dev server
npm run build     # Production build
npm run preview   # Preview production build
```

---

## 📁 Project Structure

```
src/
  assets/        # Images, resume
  components/    # All React components
  contexts/      # Context providers
  App.jsx        # Main app layout
  main.jsx       # Entry point
public/
  favicon.svg    # Custom favicon
index.html       # HTML template
vite.config.js   # Vite config
tailwind.config.js # Tailwind config
```

---

## ⚙️ Deployment

- Automated GitHub Actions workflow builds and deploys to GitHub Pages on push to `main`.
- Ensure `vite.config.js` `base` matches your repo name for correct asset paths.
- After deployment, your site is live at `https://<user>.github.io/<repo>/`.

---

## 🧑‍💻 Customization

- Edit content in `src/components/` for your own info, projects, and experience.
- Replace images and resume in `src/assets/`.
- Adjust theme and styles in `tailwind.config.js`.

---

## 📞 Contact

- **Author:** Yuvaraj P Rathod
- **Email:** yuvarajpanditrathod@gmail.com
- **LinkedIn:** [yuvarajpanditrathod](https://linkedin.com/in/yuvarajpanditrathod)
- **Resume:** [`src/assets/Yuvaraj-Resume.pdf`](src/assets/Yuvaraj-Resume.pdf)

---

<div align="center">
  <sub>© 2026 Yuvaraj P Rathod. All rights reserved.</sub>
</div>
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
