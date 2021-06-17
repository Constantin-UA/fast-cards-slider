const slides = document.querySelectorAll('.slide');

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
