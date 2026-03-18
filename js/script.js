const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.header__link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'header__link--active',
            link.getAttribute('href') === '#' + entry.target.id,
          );
        });
      }
    });
  },
  { threshold: 0.3 },
);

sections.forEach((s) => observer.observe(s));
