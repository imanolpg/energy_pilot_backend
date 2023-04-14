// load nconf
import { nconf } from "./src/utils";

import express, {Express, Request, Response} from "express";
import {router} from "./src/routes";
import { connection } from './src/database/config';
import { EPLogger } from './src/utils';
import { exit } from 'process';
import { SEQUELIZE_INSERT_EXAMPLES } from "./src/database/examples.insert";

// connect to the database
try {
  connection.sync({force: nconf.get("SEQUELIZE_FORCE_RESTART_DB")}).then(() => {
    EPLogger.info("Database connected!");
    if (nconf.get("SEQUELIZE_INSERT_EXAMPLES")) {
      SEQUELIZE_INSERT_EXAMPLES();
    }
    });
} catch (e) {
  EPLogger.error(String(e));
  exit(1);
}

// Express app config
const port = 8000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Server alive!");
});

app.use("/api", router);

app.listen(port, () => {
  EPLogger.info(`Listening in port ${port}!!`);
});