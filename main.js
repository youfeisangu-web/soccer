/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function () {
  const targets = document.querySelectorAll(
    '.section__header, .feature-card, .skill-list li, .cond-card, .apply-item, .apply__cta-box, .skills__col, .about__card'
  );

  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
  );

  targets.forEach((el, i) => {
    el.style.transitionDelay = (i % 8) * 60 + 'ms';
    observer.observe(el);
  });
})();

/* ============================================================
   NAV SCROLL SHADOW
   ============================================================ */
(function () {
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });
})();

/* ============================================================
   FEATURE CARD STAGGER
   ============================================================ */
(function () {
  document.querySelectorAll('.feature-card').forEach((el, i) => {
    el.style.transitionDelay = i * 50 + 'ms';
  });
})();
