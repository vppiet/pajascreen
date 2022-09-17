import querystring from "node:querystring";

const data = {
	lat: 62.88119,
	lon: 27.65333,
	units: "metric",
	lang: "fi",
	appid: process.env.OPENWEATHERMAP_API_KEY
};

const config = {
	method: "get",
	url: "https://api.openweathermap.org/data/2.5/weather?" + querystring.stringify(data),
	responseType: "json"
};

export { config };