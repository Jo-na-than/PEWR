document.addEventListener('DOMContentLoaded', function () {
	const currentDate = new Date();

	const formations = [
		{ id: 'ssiap2-juin', dateFin: new Date('2024-06-14') },
		{ id: 'garde-juin1', dateFin: new Date('2024-06-29') },
		{ id: 'pack-aout', dateFin: new Date('2024-08-30') },
		{ id: 'garde-aout', dateFin: new Date('2024-08-23') },
		{ id: 'elec-sept1', dateFin: new Date('2024-09-04') },
		{ id: 'sst-sept', dateFin: new Date('2024-09-06') },
		{ id: 'aps-sept-oct', dateFin: new Date('2024-11-08') },
		{ id: 'ssiap1-oct', dateFin: new Date('2024-10-18') },
		{ id: 'elec-oct', dateFin: new Date('2024-10-29') },
		{ id: 'sst-oct', dateFin: new Date('2024-10-31') },
		{ id: 'ssiap1-nov', dateFin: new Date('2024-11-18') },
		{ id: 'ssiap2-nov1', dateFin: new Date('2024-11-15') },
		{ id: 'garde-nov', dateFin: new Date('2024-11-22') },
		{ id: 'elec-nov', dateFin: new Date('2024-11-13') },
		{ id: 'sst-nov', dateFin: new Date('2024-11-15') },
		{ id: 'ssiap1-dec', dateFin: new Date('2024-12-16') },
		{ id: 'aps-nov-dec', dateFin: new Date('2024-12-20') },
		{ id: 'garde-dec', dateFin: new Date('2024-12-20') },
	];

	formations.forEach((formation) => {
		if (currentDate > formation.dateFin) {
			const element = document.getElementById(formation.id);
			if (element) {
				element.remove();
			}
		}
	});
});
