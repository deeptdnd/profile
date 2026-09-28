// Header background on scroll
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach((link) =>
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
