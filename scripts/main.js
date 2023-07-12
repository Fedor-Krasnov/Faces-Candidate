const toggleNavbarClass = (button) => {
  const navbarClass = 'navbar--open';
  const element = document.getElementById('header');
  if (element.classList.contains(navbarClass))
    element.classList.remove(navbarClass);
  else
    element.classList.add(navbarClass);
};

const toggleHideClass = (element) => {
  const hideClass = 'hide';
  if (element.classList.contains(hideClass))
    element.classList.remove(hideClass);
  else
    element.classList.add(hideClass);
};

const navbarToggle = (element) => {
  element.preventDefault();
  const navbarLinks = document.querySelectorAll('.navbar_js_link');
  navbarLinks.forEach(toggleHideClass);
};

const navbarToggleLinks = document.querySelectorAll('.navbar_js_toggle');
const navbarCloseButton = document.getElementById('navbar-close');
navbarCloseButton.addEventListener('click', toggleNavbarClass);
navbarToggleLinks.forEach((element) => element.addEventListener('click', navbarToggle));
