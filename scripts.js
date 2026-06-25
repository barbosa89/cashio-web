const body = document.body;
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');

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
