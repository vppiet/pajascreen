const CLOCK_ELEMENT = document.getElementById("clock");

function updateClock(now) {
	let hours = now.getHours();
	if (hours < 10) {
		hours = "0" + hours;
	}

	let minutes = now.getMinutes();
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	CLOCK_ELEMENT.textContent = `${hours}:${minutes}`;
}

export { updateClock };