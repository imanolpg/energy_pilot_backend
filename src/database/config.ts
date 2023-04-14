import { Sequelize } from "sequelize-typescript";
import { nconf } from "../utils";
import { EPLogger } from "../utils";

import { User } from "./models/user.model";
import { Current } from "./models/current.model";
import {Voltaje } from "./models/voltaje.model";

const connection: Sequelize = new Sequelize({
  dialect: "mysql",
  host: nconf.get("DB_HOST"),
  username: nconf.get("DB_USER"),
  password: nconf.get("DB_PASSWORD"),
  database: nconf.get("DB_SCHEMA"),
  port: nconf.get("DB_PORT"),
  models:[User, Current, Voltaje],
  logging: ((log) => {
    if(nconf.get("SEQUELIZE_LOGGIN")) {
      EPLogger.info(log);
    }
  })
});

export {connection};