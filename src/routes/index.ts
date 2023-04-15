import { Router } from 'express'
import { currentDataRouter } from './user/user.routes'
import { authDataRouter } from './auth/auth.routes'

const router: Router = Router()

router.use('/user', currentDataRouter)
router.use('/auth', authDataRouter)

export {
  router
}
