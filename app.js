const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate([{opacity: 0, transform: 'translateY(18px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 550, easing: 'ease-out', fill: 'both'});
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll('.program-card,.location-card,.trophy-list article,.coach-grid>*').forEach(el => observer.observe(el));
