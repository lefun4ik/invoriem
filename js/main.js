$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
		dots: false,
		margin: 48,
		// autoplay: true,
		// autoplayTimeout: 5000,
		responsive:{
			0:{
				items: 1,
				margin: 32
			},
			374:{
				items:1.32,
				margin: 32
			},
			479:{
				items:1.8,
				margin: 32
			},
			600:{
				items:2
			},
			991:{
				items:2.42
			},
			1921:{
				items:3
		}
		},
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