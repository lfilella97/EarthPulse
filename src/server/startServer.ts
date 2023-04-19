import createDebug from "debug";
import app from "./app.js";

const debug = createDebug("EarthPulse:server");

const startServer = async (port: number) => {
  await new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      resolve(server);
    });

    debug(`Server started at http://localhost:${port}`);
  });
};

export default startServer;
