// variables

const menuIcon = document.querySelector('.icon-bar-container');
const navBar = document.querySelector('.nav_bar');
const body = document.querySelector('body');
const barTop = document.querySelector('.icon-bar-top');
const barMiddle = document.querySelector('.icon-bar-middle');
const barBottom = document.querySelector('.icon-bar-bottom');
const iframe = document.querySelector('iframe');
const closer = document.querySelectorAll('.closer');

// functions

function toggleMenu() {
  navBar.classList.toggle('only_desktop');
  navBar.classList.toggle('modal_menu');
  navBar.classList.toggle('autoScroll');
  body.classList.toggle('noScroll');
  barTop.classList.toggle('rotatePos');
  barBottom.classList.toggle('rotateNeg');
  barMiddle.classList.toggle('noShow');
}

function closeMenu () {
  navBar.classList.add('only_desktop');
  navBar.classList.remove('modal_menu');
  navBar.classList.remove('autoScroll');
  body.classList.remove('noScroll');
  barTop.classList.remove('rotatePos');
  barBottom.classList.remove('rotateNeg');
  barMiddle.classList.remove('noShow');
}
    
// Adjusting the iframe height onload event
iframe.onload = function(){
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

// event listeners
menuIcon.addEventListener('click', toggleMenu);
closer.forEach((item) => item.addEventListener('click', closeMenu));