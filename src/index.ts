import "./loadEnvironment.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4001;

await startServer(Number(port));
