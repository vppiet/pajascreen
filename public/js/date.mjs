const DATE_ELEMENT = document.getElementById("date");

const DAY_NUMBERS_AND_NAMES = new Map()
	.set(0, "ma")
	.set(1, "ti")
	.set(2, "ke")
	.set(3, "to")
	.set(4, "pe")
	.set(5, "la")
	.set(6, "su");

function updateDate(now) {
	const dayNameNumber = now.getDay();
	const dayName = DAY_NUMBERS_AND_NAMES.get(dayNameNumber);

	const day = now.getDate();
	const month = now.getMonth();
	const year = now.getFullYear();

	DATE_ELEMENT.textContent = `${dayName} ${day}.${month}.${year}`
}

export { DATE_ELEMENT, updateDate };