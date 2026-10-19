/* Six Pixel — small progressive enhancements, no dependencies. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = document.getElementById('nav');
  const onScroll = () => nav && nav.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('mobile-menu');
  const setMenu = open => {
    if (!btn || !menu) return;
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('open', open);
    menu.toggleAttribute('inert', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn?.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  menu?.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  const els = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add('in'));

  const videos = document.querySelectorAll('video[data-autoplay]');
  if ('IntersectionObserver' in window && !reduce) {
    const vio = new IntersectionObserver(entries => entries.forEach(({ target: v, isIntersecting }) => {
      if (isIntersecting) v.play().catch(() => { v.controls = true; }); else v.pause();
    }), { threshold: 0.3 });
    videos.forEach(v => { v.controls = false; v.muted = true; vio.observe(v); });
  }

  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
})();
