/* ── main.js ── */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── NAVBAR SCROLL ─── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* ─── HAMBURGER MOBILE MENU ─── */
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  function toggleMenu(open) {
    hamburger.classList.toggle('open', open);
    navLinks.classList.toggle('open', open);
    navOverlay.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger?.addEventListener('click', () => toggleMenu(!navLinks.classList.contains('open')));
  navOverlay?.addEventListener('click', () => toggleMenu(false));

  // Close nav when a link is clicked
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => toggleMenu(false));
  });

  /* ─── SCROLL REVEAL ─── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-right, .reveal-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger reveal-item children
        const delay = entry.target.classList.contains('reveal-item')
          ? (Array.from(entry.target.parentNode.children).indexOf(entry.target) % 8) * 60
          : 0;
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));

  /* ─── WISHLIST TOGGLE ─── */
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('product-wishlist')) {
      const btn = e.target;
      const isActive = btn.classList.toggle('active');
      btn.textContent = isActive ? '♥' : '♡';
      btn.style.color  = isActive ? 'var(--red)' : '';
    }
  });

  /* ─── FILTER CHIPS (home page quick links already navigate) ─── */
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', function() {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });

  /* ─── SMOOTH NAV ANCHOR ─── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
