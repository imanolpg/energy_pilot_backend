import { nconf, EPLogger } from './src/utils'

import express, { Express, Request, Response } from 'express'
import coockieParser from 'cookie-parser'
import https from 'https'
import { RedisClientType, createClient } from 'redis'

import { router } from './src/routes'
import { connection } from './src/database/config'
import { exit } from 'process'
import { SEQUELIZE_INSERT_EXAMPLES } from './src/database/examples.insert'

// connect to mysql database
const env: string | undefined = nconf.get('NODE_ENV')
if (env === undefined) {
  EPLogger.fatal('NODE_ENV variable not found')
  exit(1)
}
if (env === 'development' || env === 'production') {
  connection.sync({ force: nconf.get('SEQUELIZE_FORCE_RESTART_DB') }).then(() => {
    EPLogger.info('Sequelize database connected!')
    if (nconf.get('SEQUELIZE_INSERT_EXAMPLES') === true) {
      SEQUELIZE_INSERT_EXAMPLES()
        .catch((e: Error) => { EPLogger.error(e.message) })
    }
  })
    .catch((e: Error) => {
      EPLogger.error(String(e))
      exit(1)
    })
}

// connect to redis database
let redisClient: RedisClientType
if (env === 'development' || env === 'production') {
  redisClient = createClient({
    url: 'redis://redis/'
  })
  redisClient.on('error', (err: Error) => {
    EPLogger.error(`Redis error: ${err.message}`)
  })
  redisClient.on('connect', () => {
    EPLogger.info('Redis databse connected!')
  })

  redisClient.connect()
    .catch((err: Error) => {
      EPLogger.error(`${err.message}`)
    })
}

// Express app config
const port = 8000
const app: Express = express()

// generate coockie-parse middleware
app.use(coockieParser())

app.get('/', (req: Request, res: Response) => {
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

const server: https.Server = https.createServer({
  cert,
  key
}, app).listen(port, () => {
  EPLogger.info(`Listening in port ${port}!!`)
})

export {
  redisClient
}

export default server
