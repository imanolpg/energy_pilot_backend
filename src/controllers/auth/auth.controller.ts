import { Request, Response } from 'express'

import { nconf } from '../../utils'

function getPublicSalt (req: Request, res: Response): void {
  // get the public salt from the environment variable
  const publicSalt: String | undefined = nconf.get('PUBLIC_SALT')

  if (publicSalt === undefined) {
    res.status(500).send('Internal server error')
  } else {
    res.send(publicSalt)
  }
}

export default {
  getPublicSalt
}
