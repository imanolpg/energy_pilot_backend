import { nconf, EPLogger } from './src/utils'

import express, { Express, Response } from 'express'
import coockieParser from 'cookie-parser'
import https from 'https'

import { router } from './src/routes'
import { connection } from './src/database/config'
import { exit } from 'process'
import { SEQUELIZE_INSERT_EXAMPLES } from './src/database/examples.insert'

// connect to the database
connection.sync({ force: nconf.get('SEQUELIZE_FORCE_RESTART_DB') }).then(() => {
  EPLogger.info('Database connected!')
  if (nconf.get('SEQUELIZE_INSERT_EXAMPLES') === true) {
    SEQUELIZE_INSERT_EXAMPLES()
      .catch((e: Error) => { EPLogger.error('Could not insert exaple data') })
  }
})
  .catch((e: Error) => {
    EPLogger.error(String(e))
    exit(1)
  })

// Express app config
const port = 8000
const app: Express = express()

// generate coockie-parse middleware
app.use(coockieParser())

app.get('/', (res: Response) => {
  res.send('Server alive!')
})

app.use('/api', router)

// get the cert and key for https
let key: string | undefined = nconf.get('SSL_KEY')
let cert: string | undefined = nconf.get('SSL_CERT')
if (key === undefined || cert === undefined) {
  // certificates have not been found
  // the server can not be created
  EPLogger.fatal('SSL key or cert not found. Server can not be created. Exiting..')
  exit(1)
}

// reformat cert and key for newline characters
key = key.replace(/\\n/g, '\n')
cert = cert.replace(/\\n/g, '\n')

https.createServer({
  cert,
  key
}, app).listen(port, () => {
  EPLogger.info(`Listening in port ${port}!!`)
})

export default app
