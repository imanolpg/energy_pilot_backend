import { Router } from 'express'
import { currentDataRouter } from './user/user.routes'

const router: Router = Router()

router.use('/user', currentDataRouter)

export {
  router
}
