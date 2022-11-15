$('.slider-center').slick({
	centerMode: true,
	centerPadding: '16px',
	slidesToShow: 1.67,
	mobileFirst: true,
	arrows: false,
	dots: true,
	respondTo: 'slider',
	swipeToSlide: true,
	autoPlay: true,
	speed: 500,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 3,
			},
		},
	],
});

//my script

function handleToggle(element) {
	const menu = document.querySelector('.navbar__menu');
	const toggleClose = document.querySelector('#toggle-close');
	const toggleOpen = document.querySelector('#toggle-open');
	if (element.id === 'toggle-open') {
		toggleOpen.classList.add('display-none');
		toggleClose.classList.remove('display-none');
	} else {
		toggleClose.classList.add('display-none');
		toggleOpen.classList.remove('display-none');
	}

	if (menu.style.display !== 'flex') {
		menu.style.display = 'flex';
	} else {
		menu.style.display = 'none';
	}
}
