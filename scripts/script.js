const toggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.nav-list');
const slides = document.querySelectorAll('.slide');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
var slideCounter = 0;


function nextSlide() {
  slides[slideCounter].classList.remove('currentSlide');
  slideCounter++;
  if(slideCounter == slides.length) {
    slideCounter = 0;
  }
  slides[slideCounter].classList.add('currentSlide');
}

function previousSlide() {
  slides[slideCounter].classList.remove('currentSlide');
  slideCounter--;
  if(slideCounter < 0) {
    slideCounter = slides.length -1;
  }
  slides[slideCounter].classList.add('currentSlide');
}

function toggleMenu() {
  if (navbar.classList.contains('visible')) {
    navbar.classList.remove('visible');
    toggle.innerHTML = `<p class="nav-link"><i class="fas fa-bars"></i></p>`;
  } else {
    navbar.classList.add('visible');
    toggle.innerHTML = `<p class="nav-link"><i class="fas fa-times"></i></p>`;
  }
}

function clearInt() {
  clearInterval(interval);

}

toggle.addEventListener('click', toggleMenu);
var interval = setInterval(nextSlide, 5000);
leftButton.addEventListener('click', previousSlide);
leftButton.addEventListener('click', clearInt);
rightButton.addEventListener('click', nextSlide);
rightButton.addEventListener('click', clearInt);
