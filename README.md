
<!--
  Professional README — my-portfolio
  Framework: React + Vite + Tailwind
  Author: Yuvaraj
-->

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



<h2 align="center">🚀 Live Portfolio</h2>

<div align="center">
  <a href="https://yuvarajpanditrathod.github.io/Portfolio/" target="_blank" style="font-size:1.2em; font-weight:bold; color:#2563eb; text-decoration:none;">
    <img src="https://img.shields.io/badge/Live%20Demo-Portfolio-blue?style=for-the-badge&logo=vercel" alt="Live Demo" />
    <br/>
    https://yuvarajpanditrathod.github.io/Portfolio/
  </a>
</div>

---

## ✨ Features

- Modern, responsive single-page design
- Built with React, Vite, and Tailwind CSS
- Modular, maintainable codebase
- Professional sections: Hero, About, Skills, Experience, Projects, Contact
- Automated deployment with GitHub Actions & Pages
- SEO and accessibility best practices

---





## ⚙️ Deployment

This portfolio is automatically deployed to GitHub Pages on every push to `main`.

---




## 📞 Contact

- **Author:** Yuvaraj P Rathod
- **Email:** yuvarajpanditrathod@gmail.com
- **LinkedIn:** [yuvarajpanditrathod](https://linkedin.com/in/yuvarajpanditrathod)

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

If you'd like, I can:

- Add a Pages status badge and published URL to this README
- Insert SEO meta tags into `index.html`
- Add a lint/test step to the deploy workflow

Tell me which and I'll implement it.
```
