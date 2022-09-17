import { updateClock } from "./clock.mjs"
import { updateDate } from "./date.mjs"
import { initializeWebSocket } from "./websocket.mjs";

initializeWebSocket();

const DELAY_MS = 1000;

function updateInterface() {
	let now = new Date();
	
	updateClock(now);
	updateDate(now);
}

updateInterface();
window.setInterval(updateInterface, DELAY_MS);
