import { Router, json } from 'express'
import { AuthMiddleware } from '../../middleware'

const authDataRouter: Router = Router()

authDataRouter.post('/login', json(), AuthMiddleware.login)
authDataRouter.post('/logout', AuthMiddleware.authenticateToken, AuthMiddleware.logout)

export { authDataRouter }
