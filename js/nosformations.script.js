// js/nosformations.script.js

document.addEventListener('DOMContentLoaded', () => {
	const sectors = document.querySelectorAll('.sector');
	sectors.forEach((sector, index) => {
		setTimeout(() => {
			sector.classList.add('animate-category');
		}, index * 200); // Stagger the animation start times for each sector
	});
});

function toggleSection(id) {
	const section = document.getElementById(id);
	const formations = section.querySelector('.formations');
	const fiches = formations.querySelectorAll('.fiche');

	if (section.style.maxHeight === '50px' || section.style.maxHeight === '') {
		section.style.maxHeight = formations.scrollHeight + 90 + 'px';
		formations.style.justifyContent = 'center';
		formations.style.alignItems = 'center';
		fiches.forEach((fiche) => fiche.classList.add('animate-fiche'));
	} else {
		section.style.maxHeight = '50px';
		formations.style.justifyContent = 'flex-start';
		formations.style.alignItems = 'flex-start';
		fiches.forEach((fiche) => fiche.classList.remove('animate-fiche'));
	}
}
