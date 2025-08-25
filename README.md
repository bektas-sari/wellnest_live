# Wellnest Live — StudioPlus‑style Landing Page (Vanilla HTML/CSS/JS)

A clean, modern, and fully responsive single‑page landing site inspired by StudioPlus’ layout (hero → classes → instructors → community → teams → testimonials → FAQ → footer). Built with **only three files**: `index.html`, `style.css`, `script.js` — no frameworks, no build step.

> **Goal:** Provide a professional, GitHub‑ready template that you can quickly brand and publish as a live‑classes platform landing page.

---

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Customization Guide](#customization-guide)
* [Accessibility](#accessibility)
* [Performance & SEO](#performance--seo)
* [Deployment (GitHub Pages)](#deployment-github-pages)
* [Roadmap](#roadmap)
* [License](#license)
* [Acknowledgements](#acknowledgements)
* [Developer](#-developer)

---

## Features

* **Sticky header** with mobile navigation drawer.
* **Hero section** with strong value prop & dual CTAs.
* **Upcoming Live Classes** cards rendered from JS with **real‑time countdowns** and **category filters** (Fitness, Yoga, Meditation, Mindfulness, Self Help & Coaching, Hobby Club).
* **Instructors grid** with auto‑generated avatars (initials) and roles.
* **Community & Teams sections** with stats and a B2B teaser block.
* **Testimonials slider** with keyboard and pointer swipe support.
* **FAQ accordion** using native `<details>`/`<summary>` for great accessibility.
* **Cookie notice** persisted in `localStorage`.
* **Reveal‑on‑scroll** animations with `IntersectionObserver`, respecting `prefers-reduced-motion`.
* **Zero dependencies** — pure HTML/CSS/JS.

## Tech Stack

* **Frontend:** HTML5, modern CSS, vanilla JavaScript (ES6+)
* **Styling:** Custom properties (CSS variables), responsive grid, utility classes
* **No build tools, no frameworks, no external fonts/images**

## Project Structure

```
/ (repo root)
├─ index.html   # Markup & sections
├─ style.css    # Theme variables, layout, components, responsive rules
└─ script.js    # Interactivity, data rendering, countdowns, sliders, cookies
```

Key sections in `index.html`:

* `header.site-header` — brand + navigation
* `section.hero` — main headline and CTAs
* `section#classes` — upcoming classes and filters
* `section#instructors` — teachers grid
* `section#community` — benefits + stats
* `section#work` — for teams / B2B pitch
* `section#testimonials` — slider
* `section#faq` — FAQ
* `footer.site-footer` — links & copyright

---

## Getting Started

1. **Clone or download** this repository.
2. Open `index.html` directly in your browser.
3. Edit text and data arrays to match your brand (see below).

*No tooling required.*

---

## Customization Guide

**Branding**

* Replace the name **“Wellnest Live”** everywhere in `index.html` (brand, `<title>`, footer).
* Update `<meta name="description">` and Open Graph tags for accurate sharing.

**Theme / Colors**

* In `style.css`, adjust CSS variables at the top (e.g., `--accent`, `--accent-2`, `--bg`).

**Copy & Sections**

* Hero headline, CTAs, and section intros are plain text in `index.html`.
* You can remove any section by deleting the corresponding `<section>` block.

**Dynamic Data**

* In `script.js`, update:

  * `classData`: title, category, instructor, start time, duration
  * `instructors`: name & area
  * `testimonials`: quote & author
* Use `offsetDate(days, hour, minute)` helper for new class start times.

**Components Behavior**

* **Filters:** Category chips filter the class cards.
* **Countdowns:** Auto‑update every minute; show “Live now” when started.
* **Slider:** Buttons + arrow keys + swipe to navigate.
* **Cookie Notice:** Stored as `wellnest-cookie-choice` in `localStorage`.

---

## Accessibility

* Keyboard‑friendly navigation, focus outlines, and skip link.
* FAQ uses semantic HTML (`<details>`/`<summary>`).
* Animations respect `prefers-reduced-motion`.
* Color contrast tuned for dark UI; verify with your palette.

*Check WCAG contrast if you change colors; aim for AA or better.*

---

## Performance & SEO

* Lightweight single page (no dependencies or images by default).
* Use descriptive `<title>` and `<meta name="description">`.
* Preload CSS and keep CSS/JS minimal.
* If adding images, consider modern formats and `loading="lazy"`.

---

## Deployment (GitHub Pages)

1. Create a new GitHub repository and push these three files to the root.
2. Go to **Settings → Pages**.
3. **Build and deployment → Source:** select **Deploy from a branch**.
4. **Branch:** choose `main` and **/ (root)**. Save.
5. Wait for Pages to publish; your site will be live at the given URL.

> Tip: Name the repo after your brand (e.g., `wellnest-live`) and add a short description.

---

## Roadmap

* Pricing section with plan cards
* Email capture form (static or integrated with a provider)
* Real calendar integration for classes
* Dark/Light theme toggle
* More testimonial variants and logo strip

---

## License

**MIT License** — free to use, modify, and distribute. Add your copyright notice if you fork.

---

## Acknowledgements

* Structure inspired by StudioPlus (getstudioplus.com). All copy, code, and visuals here are original and dependency‑free.

---

## 👤 Developer

**Bektas Sari**
Email: [bektas.sari@gmail.com](mailto:bektas.sari@gmail.com)  <br>
GitHub: [https://github.com/bektas-sari](https://github.com/bektas-sari) <br>
LinkedIn: [www.linkedin.com/in/bektas-sari](http://www.linkedin.com/in/bektas-sari) <br>
Researchgate: [https://www.researchgate.net/profile/Bektas-Sari-3](https://www.researchgate.net/profile/Bektas-Sari-3) <br>
Academia: [https://independent.academia.edu/bektassari](https://independent.academia.edu/bektassari) <br>
