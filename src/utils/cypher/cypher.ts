import crypto from 'crypto-js'

function hashPassword (password: string, salt: string): string {
  const hashedPassword: string = crypto.SHA256(password + salt).toString()
  return hashedPassword
}

export default {
  hashPassword
}
