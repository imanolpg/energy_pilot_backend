import { Router, json } from 'express'

import { UserController } from '../../controllers'

const currentDataRouter: Router = Router()

currentDataRouter.post('/addCurrent', json(), UserController.saveCurrentData)
currentDataRouter.post('/addVoltaje', json(), UserController.saveVoltajeData)

export { currentDataRouter }
