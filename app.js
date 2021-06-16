//Hamburger menu
const nav = document.querySelector('.nav-list');
const burger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-list li');


burger.addEventListener('click', openNavBar);
//To toggle the navbar
function openNavBar(){
  nav.classList.toggle('nav-active');

//To animate the links
navLinks.forEach ((link, index) => {
  if(link.style.animation){
    link.style.animation = '';
  }else {
    link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  }
})

//To animate the burger
burger.classList.toggle('toggle');
};