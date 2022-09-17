import axios from "axios";
import { config } from "./weatherConfig.mjs";

function isEnabled() {
	if (process.env.OPENWEATHERMAP_API_KEY && process.env.OPENWEATHERMAP_API_KEY.length == 32) {
		return true;
	}

	return false;
}

async function fetchWeather() {
	return await axios(config)
		.then((res) => {
			console.log(`Got data (${res.status})`);
			return res.data;
		})
		.catch((err) => {
			console.log("API error")
			return { error: "API error" };
		});
}

export { fetchWeather };