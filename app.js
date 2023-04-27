// ......................Interactions...................

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');


function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  document.getElementById('border').style.zIndex='-10'
}


hamburger.addEventListener('click', mobileMenu);


function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
  document.getElementById('border').style.zIndex='2'
}

navLink.forEach((n) => n.addEventListener('click', closeMenu));
