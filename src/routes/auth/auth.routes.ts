import { Router, json } from 'express'
import { AuthMiddleware } from '../../middlewares'
import { AuthController } from '../../controllers'

const authDataRouter: Router = Router()

authDataRouter.post('/login', json(), AuthMiddleware.login)
authDataRouter.post('/logout', AuthMiddleware.authenticateToken, AuthMiddleware.logout)
authDataRouter.get('/publicSalt', AuthController.getPublicSalt)

export { authDataRouter }
