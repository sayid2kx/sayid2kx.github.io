// Auto-update footer year
      document.getElementById('year').textContent = new Date().getFullYear()

      // Navbar scroll effect
      const navbar = document.getElementById('navbar')
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      })

      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const href = this.getAttribute('href')
          if (href === '#') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
            return
          }
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        })
      })

      // Scroll to Top Button
      const scrollToTopBtn = document.getElementById('scroll-to-top');

      // Show/hide scroll to top button based on scroll position
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          scrollToTopBtn.classList.add('visible');
        } else {
          scrollToTopBtn.classList.remove('visible');
        }
      });

      // Scroll to top when button is clicked
      scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });