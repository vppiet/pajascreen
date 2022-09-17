import { io } from "./socket.io.esm.min.js";
import { updateWeather } from "./weather.mjs";

function initializeWebSocket() {
	const socket = io();

	socket.on("weather", updateWeather);
}

export { initializeWebSocket };