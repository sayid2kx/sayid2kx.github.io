# GEMINI.md - Project Context

## Project Overview

This project is a modern, single-page personal portfolio for Sarowar Jahan Sayid, a full-stack web developer. It is built using vanilla HTML, CSS, and JavaScript, with no external frameworks.

The key feature is its "Liquid Design" aesthetic, which includes:
- A dynamic, animated background with colorful, blurred "blob" shapes.
- A glassmorphism effect (frosted glass) on UI elements like the navigation bar, content containers, and footer.
- A fully functional light/dark mode theme that can be toggled by the user.

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

- A color palette and standard dimensions are defined using CSS variables in the `:root` for easy theme management.
- The file is organized by component, with general styles first, followed by specific component styles (e.g., `.nav-container`, `.hero`, `.profile-pic`).
- Dark mode is implemented by adding a `.dark-mode` class to the `<body>` tag. All dark mode-specific overrides are grouped at the end of the file under the `/* Dark Mode Styles */` comment.
- The current dark mode implementation only styles the "chrome" of the page (background, nav, footer), leaving the main content container with its default light theme to create a high-contrast, "floating" appearance.
- Responsive design for smaller screens is handled within an `@media (max-width: 768px)` block.

### JavaScript (`script.js`)

- The script is written in vanilla JavaScript.
- It handles several pieces of dynamic functionality:
  - **Auto-updating Footer Year:** Sets the current year in the footer.
  - **Navbar Scroll Effect:** Adds a `scrolled` class to the navbar when the user scrolls down, triggering the glassmorphism effect.
  - **Smooth Scrolling:** Implements smooth navigation to different sections when anchor links are clicked.
  - **Dark Mode Toggle:** Manages the adding/removing of the `.dark-mode` class on the body and persists the user's choice across sessions using `localStorage`.