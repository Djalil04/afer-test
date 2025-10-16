// Met automatiquement l'année courante
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Active le lazy loading sur les images si nécessaire
document.querySelectorAll('img').forEach(img => {
  if(!img.loading) img.setAttribute('loading','lazy');
});
