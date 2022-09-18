const DATE_ELEMENT = document.getElementById("date");

const DAY_NUMBERS_AND_NAMES_MAPPING = new Map()
	.set(0, "su")
	.set(1, "ma")
	.set(2, "ti")
	.set(3, "ke")
	.set(4, "to")
	.set(5, "pe")
	.set(6, "la");

function updateDate(now) {
	const dayNameNumber = now.getDay();
	const dayName = DAY_NUMBERS_AND_NAMES_MAPPING.get(dayNameNumber);

	const day = now.getDate();
	const month = now.getMonth();
	const year = now.getFullYear();

	DATE_ELEMENT.textContent = `${dayName} ${day}.${month}.${year}`
}

export { updateDate };