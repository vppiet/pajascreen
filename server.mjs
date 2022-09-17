import express from "express";
import http from "node:http";
import { Server } from "socket.io";
import { fetchWeather } from "./weather.mjs";

let currentWeather = await fetchWeather();

// HTTP server & websockets
const app = express();
const port = process.env.PAJASCREEN_PORT || 3000;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
	console.log(`New socket connection (${socket.id})`);

	socket.emit("weather", currentWeather);

	socket.on("disconnect", () => {
		console.log(`Socket connection closed (${socket.id})`);
	});
});

server.listen(port, () => {
	console.log(`Pajascreen running on port ${port}`);
});

// Weather data poll

const DELAY = 1000 * 60 * 10;	// 10min
setInterval(async () => {
	currentWeather = await fetchWeather();
	io.sockets.emit("weather", currentWeather);
}, DELAY);
