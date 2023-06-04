import { randomBytes } from 'crypto'
import { EPLogger, nconf, Cypher } from '../utils'

import { User } from './models/user.model'
import { Current } from './models/current.model'
import { Voltage } from './models/voltage.model'

function randomNumberGenerator (min = 0, max = 1, fractionDigits = 0, inclusive = true): number {
  const precision = Math.pow(10, Math.max(fractionDigits, 0))
  const scaledMax = max * precision
  const scaledMin = min * precision
  const offset = inclusive ? 1 : 0
  const num = Math.floor(Math.random() * (scaledMax - scaledMin + offset)) + scaledMin
  return num / precision
};

function randomDateGenerator (start: Date, end: Date): string {
  const date: Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return date.toUTCString()
}

const SEQUELIZE_INSERT_EXAMPLES = async (): Promise<void> => {
  let i: number

  // get PUBLIC_SALT
  const publicSalt: string | undefined = nconf.get('PUBLIC_SALT')
  if (publicSalt === undefined) {
    throw Error('PUBLIC_SALT not found')
  }

  // add user1
  const user1: User = new User()
  user1.userName = 'imanolpg'
  user1.salt = randomBytes(4).toString('base64url')
  const user1Password: string = '1234'
  const hashedUser1PasswordPublicSalt: string = Cypher.hashPassword(user1Password, publicSalt)
  user1.password = Cypher.hashPassword(hashedUser1PasswordPublicSalt, user1.salt)
  user1.currentLecture = []
  user1.voltageLecture = []
  await user1.save()
    .then(() => { EPLogger.debug('User1 saved!') })
    .catch((e: Error) => { EPLogger.error(`Error saving user1: ${e.message}`) })

  // insert current measures for user1
  i = 0
  while (i < nconf.get('SEQUELIZE_USER1_CURRENT_READS')) {
    const current: Current = new Current()
    current.date = randomDateGenerator(new Date('2023-04-10'), new Date('2023-04-14'))
    current.lecture = randomNumberGenerator(0, 30, 2, true)
    current.user = user1.id
    await current.save()
      .catch((e: Error) => { EPLogger.error(`Error saving current: ${e.message}`) })

    i++
  }
  EPLogger.debug('Currents saved for user1')

  // insert voltage measures for user2
  i = 0
  while (i < nconf.get('SEQUELIZE_USER1_VOLTAGE_READS')) {
    const voltage: Voltage = new Voltage()
    voltage.date = randomDateGenerator(new Date('2023-04-10'), new Date('2023-04-14'))
    voltage.lecture = randomNumberGenerator(3.3, 4.2, 2, true)
    voltage.cellNumber = randomNumberGenerator(1, 3, 0, true)
    voltage.user = user1.id
    await voltage.save()
      .catch((e: Error) => { EPLogger.error(`Error saving voltage: ${e.message}`) })

    i++
  }
  EPLogger.debug('Voltages saved for user1')

  // add user2
  const user2: User = new User()
  user2.userName = 'javierguti'
  user2.salt = randomBytes(4).toString('base64url')
  const user2Password: string = 'holaaaaaaaa'
  const hashedUser2PasswordPublicSalt: string = Cypher.hashPassword(user2Password, publicSalt)
  user2.password = Cypher.hashPassword(hashedUser2PasswordPublicSalt, user2.salt)
  user2.currentLecture = []
  user2.voltageLecture = []
  await user2.save()
    .then(() => { EPLogger.debug('User2 saved!') })
    .catch((e: Error) => { EPLogger.error(`Error saving user2: ${e.message}`) })

  // insert current measures for user2
  i = 0
  while (i < nconf.get('SEQUELIZE_USER2_CURRENT_READS')) {
    const current: Current = new Current()
    current.date = randomDateGenerator(new Date('2023-04-10'), new Date('2023-04-14'))
    current.lecture = randomNumberGenerator(0, 30, 2, true)
    current.user = user2.id
    await current.save()
      .catch((e: Error) => { EPLogger.error(`Error saving current: ${e.message}`) })

    i++
  }
  EPLogger.debug('Currents save for user2')

  // insert voltage measures for user2
  i = 0
  while (i < nconf.get('SEQUELIZE_USER2_VOLTAGE_READS')) {
    const voltage: Voltage = new Voltage()
    voltage.date = randomDateGenerator(new Date('2023-04-10'), new Date('2023-04-14'))
    voltage.lecture = randomNumberGenerator(3.3, 4.2, 2, true)
    voltage.cellNumber = randomNumberGenerator(1, 3, 0, true)
    voltage.user = user2.id
    await voltage.save()
      .catch((e: Error) => { EPLogger.error(`Error saving voltage: ${e.message}`) })

    i++
  }
  EPLogger.debug('Voltages saved for user2')

  // add user3
  const user3: User = new User()
  user3.userName = 'jokkinn'
  user3.salt = randomBytes(4).toString('base64url')
  const user3Password: string = 'kokdf.fFF@@sfSDFsss'
  const hashedUser3PasswordPublicSalt: string = Cypher.hashPassword(user3Password, publicSalt)
  user3.password = Cypher.hashPassword(hashedUser3PasswordPublicSalt, user3.salt)
  user3.currentLecture = []
  user3.voltageLecture = []
  await user3.save()
    .then(() => { EPLogger.debug('User3 saved!') })
    .catch((e: Error) => { EPLogger.error(`Error saving user3: ${e.message}`) })

  // insert current measures for user3
  i = 0
  while (i < nconf.get('SEQUELIZE_USER3_CURRENT_READS')) {
    const current: Current = new Current()
    current.date = randomDateGenerator(new Date('2023-04-10'), new Date('2023-04-14'))
    current.lecture = randomNumberGenerator(0, 30, 2, true)
    current.user = user3.id
    await current.save()
      .catch((e: Error) => { EPLogger.error(`Error saving current: ${e.message}`) })

    i++
  }
  EPLogger.debug('Currents save for user3')

  // insert voltage measures for user2
  i = 0
  while (i < nconf.get('SEQUELIZE_USER3_VOLTAGE_READS')) {
    const voltage: Voltage = new Voltage()
    voltage.date = randomDateGenerator(new Date('2023-04-10'), new Date('2023-04-14'))
    voltage.lecture = randomNumberGenerator(3.3, 4.2, 2, true)
    voltage.cellNumber = randomNumberGenerator(1, 3, 0, true)
    voltage.user = user3.id
    await voltage.save()
      .catch((e: Error) => { EPLogger.error(`Error saving voltage: ${e.message}`) })

    i++
  }
  EPLogger.debug('Voltages saved for user3')
}

export {
  SEQUELIZE_INSERT_EXAMPLES
}
