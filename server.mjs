import * as dotenv from "dotenv";
import express from "express";
import { weatherHandler } from "./weather.mjs";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/weather", weatherHandler);

const server = app.listen(port, () => {
	console.log(`Pajascreen running on port ${port}.`);
});