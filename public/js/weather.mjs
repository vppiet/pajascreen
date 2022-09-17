const WEATHER_ELEMENT = document.getElementById("weather");

function updateWeather(data) {
	if (data.hasOwnProperty("error")) {
		console.log(data.error);
		WEATHER_ELEMENT.textContent = "";
		return;
	}

	const temperature = Math.round(data.main.temp);
	WEATHER_ELEMENT.textContent = temperature + "°C"
}

export { updateWeather };