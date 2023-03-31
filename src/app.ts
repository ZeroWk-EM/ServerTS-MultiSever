import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json())
dotenv.config();

const port = process.env.PORT;

import random from "./routes/userweather.routes";
import location from "./routes/locations.routes";

app.use("/random", random);
app.use("/locations", location);

app.listen(port, () => {
  console.log(`[SERVER]: Server is running at http://localhost:${port}`);
});
