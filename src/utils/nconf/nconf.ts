import nconf from "nconf";

// load .env config
import * as dotenv from 'dotenv';
dotenv.config();


//
// 1. any overrides
//
nconf.overrides();

//
// 2. `process.env`
// 3. `process.argv`
//
nconf.env().argv();

//
// 4. Values in `config.json`
//
nconf.file({
  file: "config.json",
  dir: "./../../../",
  search: true
});

//
// 5. Any default values
//
nconf.defaults({
  "SEQUELIZE_FORCE_RESTART_DB": false,
  "SEQUELIZE_INSERT_EXAMPLES": false
});


export {
  nconf
}