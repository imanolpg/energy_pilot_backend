import { Request, Response, NextFunction } from 'express'
import jwt, { VerifyErrors } from 'jsonwebtoken'
import { EPLogger, nconf, Cypher } from '../../utils'
import { RequestWithUser } from '../../types/types'
import { User } from '../../database/models/user.model'

function authenticateToken (req: RequestWithUser, res: Response, next: NextFunction): void {
  const authHeader: string | undefined = req.cookies['auth-token']

  // check if auth-token header is passed
  if (authHeader === undefined) {
    res.status(400).send('No auth-token sent')
    return
  }

  // get the token in the passed auth-token
  const token: string = authHeader

  // get the JWT_SECRET_TOKEN from .env
  const JWT_SECRET_TOKEN: string | undefined = nconf.get('JWT_SECRET_TOKEN')
  // if no JWT_SECRET_TOKEN found return internal server error
  if (JWT_SECRET_TOKEN === undefined) {
    res.status(5000).send('Internal server error')
    return
  }

  jwt.verify(token, JWT_SECRET_TOKEN, (err: VerifyErrors | null, decoded: any): void => {
    // check if the is an error
    if (err != null) {
      EPLogger.error(`An error ocurred '${err.message}'`)
      res.status(401).send('Not logged in')
      return
    }

    // the user is logged in
    req.userId = decoded.userId
    next()
  })
}

function login (req: Request, res: Response): void {
  // get the JWT_SECRET_TOKEN from .env
  const JWT_SECRET_TOKEN: string | undefined = nconf.get('JWT_SECRET_TOKEN')
  // if no JWT_SECRET_TOKEN found return internal server error
  if (JWT_SECRET_TOKEN === undefined) {
    res.status(5000).send('Internal server error')
    return
  }

  const { userName, password }: any = req.body
  if (userName === undefined || password === undefined) {
    res.status(400).send('User or password not sent')
    return
  }

  User.findAll({
    where: {
      userName
    }
  })
    .then((users: User[]) => {
      // check if more than one user exists
      if (users.length !== 1) {
        res.status(500).send('Internal server error')
        return
      }

      // hash provided password
      const hashedPassword: string = Cypher.hashPassword(password, users[0].salt)
      // check if passwords match
      if (hashedPassword !== users[0].password) {
        res.status(401).send('Incorrect user or password')
        return
      }

      // sign user and generate a token
      const token = jwt.sign({
        userId: users[0].id
      }, JWT_SECRET_TOKEN, { expiresIn: '5m' })

      // add auth-token cookie with token
      res.cookie('auth-token', token, {
        httpOnly: true
      })
      res.send('Logged in')
    })
    .catch((e: Error) => {
      EPLogger.error(`Error chekcing user passwords '${e.message}'`)
      res.status(500).send('Internal server error')
    })
}

function logout (req: Request, res: Response): void {
  // clear the cookie with the jwt token
  res.clearCookie('auth-token')
  res.send('Logged out')
}

export default {
  authenticateToken,
  login,
  logout
}
