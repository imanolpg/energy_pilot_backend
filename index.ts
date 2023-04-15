// load nconf
import { nconf, EPLogger } from './src/utils'
import express, { Express, Request, Response } from 'express'
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

app.get('/', (req: Request, res: Response) => {
  res.send('Server alive!')
})

app.use('/api', router)

app.listen(port, () => {
  EPLogger.info(`Listening in port ${port}!!`)
})
