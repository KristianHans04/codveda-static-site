# Level-1-Static-Site

A multi-page static website for a tech education company styled with Codveda branding. Built with semantic HTML5, responsive CSS, and vanilla JavaScript.

## Features

- **Three-page structure:** Home, About, and Contact pages with consistent navigation and footer
- **Responsive navigation:** Desktop horizontal nav collapses to a hamburger menu with slide-in panel on mobile
- **Codveda brand design:** Dark navy backgrounds, bright white text, vibrant blue accents, and golden yellow CTAs
- **Semantic HTML5:** Proper use of `<header>`, `<main>`, `<nav>`, `<footer>`, and `<section>` landmarks
- **CSS Grid layouts:** Services cards, team members, and testimonials adapt from 1 to 3 columns
- **Accessibility:** Skip-to-content link, ARIA labels, focus-visible states, keyboard navigation, `lang` attribute
- **Mobile-first responsive design:** Tested at 320px, 768px, 1024px, and 1440px breakpoints
- **High-quality images:** Unsplash images with descriptive alt text and lazy loading

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling with CSS custom properties and Grid/Flexbox |
| JavaScript | Navigation toggle and mobile menu |
| Google Fonts (Inter) | Typography |

## File Structure

```
Level-1-Static-Site/
  index.html          # Home page
  about.html          # About page
  contact.html        # Contact page
  styles/
    styles.css        # Global stylesheet with CSS variables
  scripts/
    navigation.js     # Mobile menu toggle logic
  images/             # Placeholder for local images
  README.md
  .gitignore
```

## Live Deployment

| Environment | URL |
|---|---|
| Cloudflare Pages | https://codveda-static.pages.dev |
| Custom Domain | https://codveda-static.kristianhans.com |

Deployed via **GitHub auto-deploy**: every push to `main` triggers a new Cloudflare Pages build automatically.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/KristianHans04/codveda-static-site.git
   ```
2. Open `index.html` in any modern browser.

No build tools or dependencies required.

## Deployment

This project is deployed to **Cloudflare Pages** with GitHub integration.

To re-deploy manually:
```bash
# No build step required — Cloudflare Pages serves static files directly
# Just push to main and GitHub auto-deploy takes care of the rest
git push origin main
```

Cloudflare Pages project name: `codveda-static`
