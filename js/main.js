$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
		dots: false,
		margin: 48,
		loop: true
	});
});

window.onscroll = function showHeader () {
	const header = document.querySelector('.header');
	if (window.pageYOffset > 10) {
		header.classList.add('_fixed');
	}
	else {
		header.classList.remove('_fixed');
	}
}
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}