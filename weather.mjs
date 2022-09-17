import axios from "axios";
const querystring = await import("querystring");

const weatherEnabled = process.env.OPENWEATHERMAP_API_KEY && process.env.OPENWEATHERMAP_API_KEY.length == 32 ? true : false;

function fetchWeather() {
	const queryStrings = {
		lat: 62.88119,
		lon: 27.65333,
		units: "metric",
		lang: "fi",
		appid: process.env.OPENWEATHERMAP_API_KEY,
	};

	const config = {
		url: "https://api.openweathermap.org/data/2.5/weather?" + querystring.stringify(queryStrings),
		responseType: "json"
	};

	console.log(config)		// TODO: LET*S CONTINUE
}

function isEnabledHandler(req, res) {
	if (!weatherEnabled) {
		res.status(500).json({ error: "Weather API key missing." });
	}
}

function weatherHandler(req, res) {
	fetchWeather()
	res.send("Kylymä!");
}

export { isEnabledHandler, weatherHandler };