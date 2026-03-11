// Scroll reveal
const els = document.querySelectorAll(
  '.feat-card, .cond__item, .apply__step, .apply__panel, .skills__box, .section__head'
);
els.forEach(el => el.classList.add('js-reveal'));

const io = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

els.forEach(el => io.observe(el));

// Nav shadow on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 30 ? '0 2px 16px rgba(0,0,0,0.08)' : 'none';
}, { passive: true });
