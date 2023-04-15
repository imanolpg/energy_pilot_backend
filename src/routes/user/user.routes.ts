import { Router, json } from 'express'

import { UserController } from '../../controllers'
import { AuthMiddleware } from '../../middleware'

const currentDataRouter: Router = Router()

currentDataRouter.post('/addCurrent', AuthMiddleware.authenticateToken, json(), UserController.saveCurrentData)
currentDataRouter.post('/addVoltaje', AuthMiddleware.authenticateToken, json(), UserController.saveVoltajeData)

export { currentDataRouter }
