var pageHeader = document.querySelector('.page-header');
var burger = document.querySelector('.page-header__burger');

pageHeader.classList.remove('page-header--no-js');


burger.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
    burger.classList.remove('page-header__burger--open');
    burger.classList.add('page-header__burger--close');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
    burger.classList.add('page-header__burger--open');
    burger.classList.remove('page-header__burger--close');
  }
});
