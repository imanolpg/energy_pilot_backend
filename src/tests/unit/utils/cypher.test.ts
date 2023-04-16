import { Cypher } from '../../../utils'

describe('Test Cypher hashPassword function', () => {
  test(`hash password '${'1234567890'}' with salt '${'abcd'}'`, () => {
    expect(Cypher.hashPassword('1234567890', 'abcd')).toBe('4bf526b3ef1c10d1d76f28a1f8b257c3c4cdfbfa995823eb30109da4eadb0b2d')
  })

  test(`hash password '${'ABCDEFGHIJKLM'}' with salt '${'12345'}'`, () => {
    expect(Cypher.hashPassword('ABCDEFGHIJKLM', '12345')).toBe('c0a13fda34a70240991e69276c3a99cf2db0828f72174b66f5069364e88a84d5')
  })

  test(`hash password '${'a'}' with salt '${'123'}'`, () => {
    expect(Cypher.hashPassword('a', '123')).toBe('9da24d316372f07702d2b3235fdb7ee516376ef31b95f414153293a1157c395e')
  })

  test(`hash password '${''}' with salt '${''}'`, () => {
    expect(Cypher.hashPassword('', '')).toBe('cd372fb85148700fa88095e3492d3f9f5beb43e555e5ff26d95f5a6adc36f8e6')
  })

  test(`hash password '${'__-%ç2Aaåf Ññ++\n¿¿\ts.;'}' with salt '${'ç+´+´}{}[++¡\'¡'}'`, () => {
    expect(Cypher.hashPassword('__-%ç2Aaåf Ññ++\n¿¿\ts.;', 'ç+´+´}{}[++¡\'¡')).toBe('762d8a87b2a0e5cac2b8faf927f92592ce3121c7feea2af8b697f15c00397ca3')
  })

  test(`hash password '${'--------'}' with salt '${'--------'}'`, () => {
    expect(Cypher.hashPassword('--------', '--------')).toBe('0fbdf36744b991643520bdd9073eaae43b2f29e94ab976c4ca9e99e33f53192c')
  })
})
