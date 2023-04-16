import { nconf } from '../../../utils'

describe('Test if nconf is exported correctly', () => {
  test(`should export ${'nconf'} object`, () => {
    expect(nconf).toBeDefined()
  })
})
