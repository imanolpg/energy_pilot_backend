import { createHash } from 'crypto'

function hashPassword (password: string, salt: string): string {
  return createHash('sha256')
    .update(password)
    .update(createHash('sha256').update(salt, 'utf8').digest('hex'))
    .digest('hex')
}

export default {
  hashPassword
}
