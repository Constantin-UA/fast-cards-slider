function slidesPlugin(activeSlide = 0) {
	const slides = document.querySelectorAll('.slide');

	slides[activeSlide].classList.add('active');

	for (const slide of slides) {
		slide.addEventListener('click', () => {
			clearActiveClasses();

			slide.classList.add('active');
		});
	}

	function clearActiveClasses() {
		slides.forEach((slide) => {
			slide.classList.remove('active');
		});
	}
}
slidesPlugin(1);
// my firs version
/* const hideAllCards = () => {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	});
};
slides.forEach((slide) => {
	slide.addEventListener('click', (e) => {
		const target = e.target;
		hideAllCards();
		target.classList.add('active');
	});
}); */
