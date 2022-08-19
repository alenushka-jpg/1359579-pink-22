const pageHeader = document.querySelector('.page-header');
const burger = document.querySelector('.page-header__burger');

pageHeader.classList.remove('page-header--no-js');

function showHeader() {
  pageHeader.classList.toggle('page-header--opened');
}

function onClickToggle() {
  showHeader();
}

burger.addEventListener('click', onClickToggle);
