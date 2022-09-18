import express from "express";
import http from "node:http";
import { Server } from "socket.io";
import { fetchWeather as fetchWeatherData } from "./weather.mjs";

// Weather Data Cache

let weatherDataCacheTimestamp = undefined;
let weatherDataCache = undefined;

async function updateWeatherDataCache() {
	weatherDataCache = await fetchWeatherData();
	weatherDataCacheTimestamp = Date.now();
	return weatherDataCache;
}

function isWeatherDataCacheTooOld() {
	if (!weatherDataCacheTimestamp) return false;
	return (Date.now() - weatherDataCacheTimestamp) > POLLING_DELAY;
}

updateWeatherDataCache();

// HTTP server & websockets

const app = express();
const port = process.env.PAJASCREEN_PORT || 3000;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", async (socket) => {
	console.log(`New socket connection (${socket.id})`);

	if (isWeatherDataCacheTooOld()) { await updateWeatherDataCache(); }

	socket.emit("weather", weatherDataCache);

	socket.on("disconnect", () => {
		console.log(`Socket connection closed (${socket.id})`);
	});
});

server.listen(port, () => {
	console.log(`Pajascreen running on port ${port}`);
});

// Weather data polling

const POLLING_DELAY = 1000 * 60 * 10;	// 10min

setInterval(async () => {
	const sockets = await io.sockets.allSockets();

	// don't update the cache if there are no clients listening
	if (sockets.size) {
		const data = updateWeatherDataCache();
		io.sockets.emit("weather", data);
	}
}, POLLING_DELAY);