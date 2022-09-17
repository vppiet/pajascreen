import { updateClock } from "./clock.mjs"
import { updateDate } from "./date.mjs"

const TIMER_DELAY_MS = 1000;

function updateInterface() {
	let now = new Date();
	
	updateClock(now);
	updateDate(now);
}

updateInterface();
window.setInterval(updateInterface, TIMER_DELAY_MS);
