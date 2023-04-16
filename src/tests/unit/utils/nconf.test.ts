import { nconf } from '../../../utils'

describe('Test if utils index.ts exports correct objects', () => {
  test(`should export ${'nconf'} object`, () => {
    expect(nconf).toBeDefined()
  })
})
