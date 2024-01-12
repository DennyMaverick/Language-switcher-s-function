const menuBurger = document.querySelector('.menu-burger');
const navMenu = document.querySelector('.nav');
const closeButton = document.querySelector('.close-button');
const navItems = document.querySelectorAll('.nav__link');

const openMenu = function () {
  if (navMenu.classList.contains('hide')) {
    navMenu.classList.remove('hide');
  }
  navMenu.classList.add('nav--active-mobile-menu');
  closeButton.classList.add('nav__close--active');
};

const closeMenu = function () {
  navMenu.classList.remove('nav--active-mobile-menu');
  closeButton.classList.remove('nav__close--active');
  navMenu.classList.remove('nav--active-mobile-menu');
};

// const toggleHide = function () {

// }

const resizeWindow = function () {
  if (document.documentElement.clientWidth > 992) {
    menuBurger.classList.add('hide');
    closeButton.classList.add('hide');
    navMenu.classList.remove('hide');
    closeMenu();
  } else {
    menuBurger.classList.remove('hide');
    closeButton.classList.remove('hide');
    closeButton.classList.add('nav__close--active');
  }
};


window.addEventListener('resize', resizeWindow);

menuBurger.addEventListener('click', openMenu);

closeButton.addEventListener('click', closeMenu);

const doNavigate = function () {
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      navMenu.classList.add('hide');
    });
  });
};

doNavigate();
