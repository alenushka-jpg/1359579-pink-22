var pageHeader = document.querySelector('.page-header');
var burger = document.querySelector('.page-header__burger');

navMain.classList.remove('page-header--no-js');


burger.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});
