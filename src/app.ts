import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";

import ApiRoutes from "./routes/api.routes";

// Update this to send to PG
// const today = new Date().toDateString();
// const logFile = `./logs/${today.replaceAll(" ", "_")}.txt`;
// const logFilePath = path.resolve(logFile);
// const accessLogStream = fs.createWriteStream(logFilePath, { flags: "a" });

const apiRoutes = new ApiRoutes();

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(
	helmet({
		contentSecurityPolicy: false
	})
);

app.use(morgan(":method _ :url _ :status _ :response-time"));

app.use(apiRoutes.getUserRoutes().name, apiRoutes.getUserRoutes().router);
app.use(apiRoutes.getTweetRoutes().name, apiRoutes.getTweetRoutes().router);

export default app;