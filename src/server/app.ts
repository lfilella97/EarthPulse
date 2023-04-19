import express from "express";
import cors from "cors";
import morgan from "morgan";
import options from "../utils/cors/options.js";
import getGeoData from "./controllers/getGeoDataControllers.js";

const app = express();

app.use(cors(options));
app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());

app.get("/geo-data", getGeoData);

export default app;
