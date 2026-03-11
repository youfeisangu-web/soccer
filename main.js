/* ============================================================
   PARTICLES
   ============================================================ */
(function () {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = 40;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 12 + 6;
    const delay = Math.random() * -12;
    const opacity = Math.random() * 0.4 + 0.1;

    Object.assign(p.style, {
      position: 'absolute',
      width: size + 'px',
      height: size + 'px',
      borderRadius: '50%',
      left: x + '%',
      top: y + '%',
      background: Math.random() > 0.5 ? '#00e5ff' : '#7c4dff',
      opacity: opacity,
      animation: `particle-float ${duration}s ease-in-out ${delay}s infinite`,
    });

    container.appendChild(p);
  }

  if (!document.getElementById('particle-style')) {
    const style = document.createElement('style');
    style.id = 'particle-style';
    style.textContent = `
      @keyframes particle-float {
        0%,100% { transform: translateY(0) translateX(0); opacity: var(--op, 0.2); }
        33%      { transform: translateY(-20px) translateX(10px); }
        66%      { transform: translateY(10px) translateX(-8px); }
      }
    `;
    document.head.appendChild(style);
  }
})();

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function () {
  const targets = document.querySelectorAll(
    '.section__header, .about__card, .feature-card, .skill-item, .apply-item, .condition-item, .about__text, .about__card-wrap, .budget-block__inner, .apply__cta-inner'
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
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
})();

/* ============================================================
   STAGGERED ANIMATION FOR CARDS
   ============================================================ */
(function () {
  document.querySelectorAll('[data-delay]').forEach((el) => {
    const delay = parseInt(el.dataset.delay, 10) || 0;
    el.style.transitionDelay = delay + 'ms';
  });
})();

/* ============================================================
   SMOOTH NAV HIGHLIGHT
   ============================================================ */
(function () {
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 60) {
      nav.style.background = 'rgba(5,8,16,0.92)';
    } else {
      nav.style.background = 'rgba(5,8,16,0.7)';
    }
    lastScroll = y;
  }, { passive: true });
})();

/* ============================================================
   COUNTER ANIMATION FOR STATS
   ============================================================ */
(function () {
  function animateValue(el, start, end, duration) {
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const val = Math.floor(progress * (end - start) + start);
      el.textContent = val.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statsSection = document.querySelector('.hero__stats');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  observer.observe(statsSection);
})();
