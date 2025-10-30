# GEMINI.md - Project Context

## Project Overview

This project is a modern, single-page personal portfolio for Sarowar Jahan Sayid, a full-stack web developer. It is built using vanilla HTML, CSS, and JavaScript, with no external frameworks.

The current experience leans into a refined "Liquid Design" aesthetic:
- A dynamic, animated background with softly blurred "blob" shapes that shift color.
- A glassmorphism treatment on navigation, content containers, cards, and footer for a floating, frosted-glass feel.
- A light theme featuring a green-toned conic gradient border around the main content container (no more pink/purple accents).
- A deep, radial-gradient dark theme with matching green highlights, unified white typography, and recolored blobs.
- A reimagined skills section composed of four feature cards, each with its own icon, gradient panel, and tagged highlights for Shopify, JavaScript, and collaboration strengths.

The portfolio is structured into several sections: a hero introduction, an about me section, education history, and a grid of technical skills.

## Building and Running

This is a static website with no build process.

To run the project, simply open the `index.html` file in a web browser.

```bash
# On most systems, you can use a command like this:
open index.html
# Or on Linux:
x-www-browser index.html
```

## Development Conventions

### HTML (`index.html`)

- The structure is semantic, using `<nav>`, `<main>`, `<section>`, and `<footer>` tags appropriately.
- The main content is wrapped in a `.main-container` and `.main-content` structure to create the floating, bordered look.
- The CSS and JavaScript are linked as external files (`style.css` and `script.js`).

### CSS (`style.css`)

- CSS variables in the `:root` capture the primary palette and spacing scales, keeping color swaps straightforward.
- Styles are organized by component (e.g., `.nav-container`, `.hero`, `.skills-feature`) with layout utilities and media queries grouped near the relevant sections.
- The main content container uses a green conic gradient pseudo-element and translucent interior background to emphasize the liquid/glass hybrid look.
- The skills section introduces `.skills-wrapper`, `.skills-feature`, and `.feature-tags` classes to render icon-led feature panels with chip-style skill tags; the layout stays single-column and centers within a 920px max width.
- Dark mode relies on a `.dark-mode` class applied to the `<body>` tag. Overrides near the end of the file recolor backgrounds, gradients, and typographic elements while ensuring all copy renders white for readability.
- Responsive tweaks ensure comfortable padding on smaller screens and scale the hero and skills sections without breaking the floating aesthetic.

### JavaScript (`script.js`)

- The script is written in vanilla JavaScript.
- It handles several pieces of dynamic functionality:
  - **Auto-updating Footer Year:** Sets the current year in the footer.
  - **Navbar Scroll Effect:** Adds a `scrolled` class to the navbar when the user scrolls down, triggering the glassmorphism effect.
  - **Smooth Scrolling:** Implements smooth navigation to different sections when anchor links are clicked.
  - **Dark Mode Toggle:** Manages the adding/removing of the `.dark-mode` class on the body and persists the user's choice across sessions using `localStorage`.