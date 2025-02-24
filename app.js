// app.js
const hamburgerMenu = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');

hamburgerMenu.addEventListener('click', () => {
  navList.classList.toggle('open');
});
