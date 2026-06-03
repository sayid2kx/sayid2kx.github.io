# Sarowar Jahan Sayid - Personal Portfolio

A modern, responsive portfolio showcasing the transition from Computer Science graduate to entrepreneur running **Shahin Machinery and Hardware Store**. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

**🌐 Live:** [sayid2kx.github.io](https://sayid2kx.github.io/)
**📧 Contact:** sayid2kx@gmail.com | 📍 Mymensingh, Bangladesh

## ✨ Features

- **Liquid Background** with animated, blurred gradient blobs
- **Glassmorphism UI** with backdrop blur and conic-gradient borders
- **Career Timeline** — Visual journey from CS student to web developer to business owner
- **Photo Gallery** — "Life In Frames" with click-to-zoom lightbox and keyboard support
- **Education Cards** — Milestones from SSC to B.Sc. with grades
- **Store Section** — Product categories for the family hardware business
- **Contact Section** — Phone, WhatsApp, email, address, and business hours
- **Mobile Navigation** — Hamburger menu with smooth open/close transitions
- **Scroll-aware Navbar** — Floating pill style after scroll, with smooth section scrolling
- **Scroll-to-top** — Floating action button revealed on scroll
- **Accessibility** — Semantic HTML5, ARIA labels, focus-visible outlines, `prefers-reduced-motion` support, `prefers-color-scheme` aware

## 🎨 Design Highlights

**Color Palette:** Green theme (`#52b788`) with light backgrounds and glassmorphism effects.

**Visual Elements:**

- Glassmorphism cards with backdrop blur
- Conic-gradient border on the main container
- Gradient hover effects and shadow enhancements
- CSS keyframe animations (blob motion, fade-in, scale-in, float)
- Standard CSS syntax for maximum browser compatibility

## 📂 Structure

```
portfolio/
├── index.html        # Main HTML
├── style.css         # Styles & animations
├── script.js         # Interactions
└── assets/
    ├── Sayid.jpg     # Profile picture
    └── sayid1-7.jpg  # Gallery photos
```

## 🧩 Sections

1. **Hero** — Name, transition badge (CS → Business Owner), location, social links
2. **About** — Info card + business statistics (Product Areas, Business Focus)
3. **Gallery** — "Life In Frames" photo grid with lightbox preview
4. **Journey** — Timeline: CS Student → Web Developer → Hardware Business Owner
5. **Education** — Netrokona University, Advanced Residential Model College, Atharabari M.C High School
6. **Store** — Industrial Machinery, Cycle Parts & Accessories, General Hardware
7. **Contact** — Address, phone numbers, email, WhatsApp, business hours

## 🛠️ Tech Stack

- **HTML5** — Semantic structure, Open Graph & Twitter meta tags
- **CSS3** — Custom properties, Grid/Flexbox, keyframe animations, `clamp()` responsive sizing, `backdrop-filter` with `@supports` fallbacks
- **JavaScript** — Navbar scroll effect, mobile nav toggle, gallery lightbox, smooth scrolling, scroll-to-top, click-outside and `Esc` handling

## 🚀 Performance

- No external dependencies for fast loading
- GPU-accelerated CSS transforms (`will-change`, `translateZ(0)`)
- Lazy-loaded images and explicit `width`/`height` for layout stability
- `preload` hint for the profile image
- `requestAnimationFrame` for scroll handling
- Responsive media queries consolidated by breakpoint

## ♿ Accessibility

- Semantic landmarks (`nav`, `main`, `section`, `footer`)
- ARIA attributes for the nav toggle, lightbox dialog, and gallery buttons
- Visible focus outlines via `:focus-visible`
- `prefers-reduced-motion` disables non-essential animations
- `safe-area-inset-*` variables for notched devices
- `overflow-x: clip` via `@supports` to prevent horizontal scroll

## 📞 Connect

- **Facebook:** [facebook.com/sayid2kx](https://facebook.com/sayid2kx)
- **Twitter:** [x.com/sayid2kx](https://x.com/sayid2kx)
- **WhatsApp:** +880 1721-151361
- **Email:** sayid2kx@gmail.com

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
© Sarowar Jahan Sayid
