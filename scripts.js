const body = document.body;
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');
const navLinks = [...document.querySelectorAll('[data-nav] a[href^="#"]')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function setNavOpen(isOpen) {
  if (!toggle || !nav) {
    return;
  }

  body.classList.toggle('nav-open', isOpen);
  nav.classList.toggle('is-open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Cerrar navegación' : 'Abrir navegación');
}

toggle?.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  setNavOpen(!isOpen);
});

nav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setNavOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setNavOpen(false);
  }
});

document.addEventListener('click', (event) => {
  if (!body.classList.contains('nav-open')) {
    return;
  }

  if (header?.contains(event.target)) {
    return;
  }

  setNavOpen(false);
});

const navigationObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

    if (!visibleEntry) {
      return;
    }

    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${visibleEntry.target.id}`;

      if (isCurrent) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  },
  {
    rootMargin: '-20% 0px -65%',
    threshold: [0, 0.25, 0.5],
  },
);

sections.forEach((section) => navigationObserver.observe(section));

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 52rem)').matches) {
    setNavOpen(false);
  }
});
