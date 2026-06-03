(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
  const smoothBehavior = prefersReducedMotion ? "auto" : "smooth"

  const navbar = document.getElementById("navbar")
  const navToggle = document.querySelector(".nav-toggle")
  const navLinks = document.getElementById("primary-navigation")
  const scrollToTopBtn = document.getElementById("scroll-to-top")
  const galleryLightbox = document.getElementById("gallery-lightbox")
  const galleryLightboxImage = document.getElementById("gallery-lightbox-image")
  const galleryLightboxClose = document.querySelector(".gallery-lightbox__close")
  const galleryLightboxBackdrop = document.querySelector(".gallery-lightbox__backdrop")
  let ticking = false
  let activeGalleryCard = null

  const closeMenu = () => {
    if (!navToggle || !navLinks) return

    navToggle.setAttribute("aria-expanded", "false")
    navToggle.setAttribute("aria-label", "Open navigation menu")
    navToggle.classList.remove("active")
    navLinks.classList.remove("open")
    document.body.classList.remove("nav-open")
  }

  const updateScrollState = () => {
    const y = window.scrollY || document.documentElement.scrollTop

    navbar?.classList.toggle("scrolled", y > 50)
    scrollToTopBtn?.classList.toggle("visible", y > 300)
    ticking = false
  }

  const requestScrollUpdate = () => {
    if (ticking) return

    window.requestAnimationFrame(updateScrollState)
    ticking = true
  }

  window.addEventListener("scroll", requestScrollUpdate, { passive: true })
  updateScrollState()

  navToggle?.addEventListener("click", () => {
    if (!navLinks) return

    const isOpen = navToggle.getAttribute("aria-expanded") === "true"
    navToggle.setAttribute("aria-expanded", String(!isOpen))
    navToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu")
    navToggle.classList.toggle("active", !isOpen)
    navLinks.classList.toggle("open", !isOpen)
    document.body.classList.toggle("nav-open", !isOpen)
  })

  document.addEventListener("click", (event) => {
    const target = event.target

    if (
      navLinks?.classList.contains("open") &&
      target instanceof Node &&
      !navLinks.contains(target) &&
      !navToggle?.contains(target)
    ) {
      closeMenu()
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu()
  })

  const closeGalleryLightbox = () => {
    if (!galleryLightbox || !galleryLightboxImage) return

    galleryLightbox.classList.remove("open")
    galleryLightbox.setAttribute("aria-hidden", "true")
    document.body.classList.remove("lightbox-open")
    galleryLightboxImage.removeAttribute("src")
    galleryLightboxImage.alt = ""
    activeGalleryCard?.focus()
    activeGalleryCard = null
  }

  const openGalleryLightbox = (card) => {
    if (!galleryLightbox || !galleryLightboxImage) return

    const image = card.querySelector("img")
    if (!image) return

    activeGalleryCard = card
    galleryLightboxImage.src = image.currentSrc || image.src
    galleryLightboxImage.alt = image.alt
    galleryLightbox.classList.add("open")
    galleryLightbox.setAttribute("aria-hidden", "false")
    document.body.classList.add("lightbox-open")
    galleryLightboxClose?.focus()
  }

  document.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => openGalleryLightbox(card))

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return

      event.preventDefault()
      openGalleryLightbox(card)
    })
  })

  galleryLightboxClose?.addEventListener("click", closeGalleryLightbox)
  galleryLightboxBackdrop?.addEventListener("click", closeGalleryLightbox)

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && galleryLightbox?.classList.contains("open")) {
      closeGalleryLightbox()
    }
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href")
      if (!href) return

      event.preventDefault()
      closeMenu()

      if (href === "#") {
        window.scrollTo({ top: 0, behavior: smoothBehavior })
        return
      }

      const target = document.getElementById(href.slice(1))
      target?.scrollIntoView({ behavior: smoothBehavior, block: "start" })
    })
  })

  scrollToTopBtn?.addEventListener("click", () => {
    closeMenu()
    window.scrollTo({ top: 0, behavior: smoothBehavior })
  })
})()
