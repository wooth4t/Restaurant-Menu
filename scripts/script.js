const toggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.nav-list');

function toggleMenu() {
  if (navbar.classList.contains('visible')) {
    navbar.classList.remove('visible');
    toggle.innerHTML = `<p class="nav-link"><i class="fas fa-bars"></i></p>`;
  } else {
    navbar.classList.add('visible');
    toggle.innerHTML = `<p class="nav-link"><i class="fas fa-times"></i></p>`;
  }
}

toggle.addEventListener('click', toggleMenu);