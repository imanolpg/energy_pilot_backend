import { Request, Response } from 'express'
import { UserService } from '../../services'

function addCurrentData (req: Request, res: Response): void {
  // add type check for request body

  UserService.saveCurrentData(req.body)
    .then(() => {
      res.send('Data added')
    })
    .catch(() => {
      res.status(500).send()
    })
}

export default {
  addCurrentData
}
