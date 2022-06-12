// Меню бургер
const menuIcon = document.querySelector('._toggle-menu');
const menuHeader = document.querySelector('.header');
if (menuIcon) {
  	menuIcon.addEventListener("click", function (e) {
		menuIcon.classList.toggle('_toggle-menu-open');
		menuHeader.classList.toggle('header__menu-open');
	});
}