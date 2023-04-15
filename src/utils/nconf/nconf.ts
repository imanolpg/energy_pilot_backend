import nconf from 'nconf'

// load .env config
import * as dotenv from 'dotenv'
dotenv.config()

//
// 1. any overrides
//
nconf.overrides()

//
// 2. `process.env`
// 3. `process.argv`
//
nconf.env().argv()

//
// 4. Values in `config.json`
//
nconf.file({
  file: 'config.json',
  dir: './../../../',
  search: true
})

//
// 5. Any default values
//
nconf.defaults({
  SEQUELIZE_FORCE_RESTART_DB: false,
  SEQUELIZE_INSERT_EXAMPLES: false,
  SEQUELIZE_LOGGIN: false,
  SEQUELIZE_USER1_CURRENT_READS: 0,
  SEQUELIZE_USER1_VOLTAJE_READS: 0,
  SEQUELIZE_USER2_CURRENT_READS: 0,
  SEQUELIZE_USER2_VOLTAJE_READS: 0,
  SEQUELIZE_USER3_CURRENT_READS: 0,
  SEQUELIZE_USER4_VOLTAJE_READS: 0
})

export {
  nconf
}
