import { Cypher } from '../../../utils'

describe('Test Cypher hashPassword function', () => {
  test(`hash password '${'1234567890'}' with salt '${'abcd'}'`, () => {
    expect(Cypher.hashPassword('1234567890', 'abcd')).toBe('04becc44e273f2434c585a93a41f49f93596283d4a15bbb2f209456116eaf91c')
  })

  test(`hash password '${'ABCDEFGHIJKLM'}' with salt '${'12345'}'`, () => {
    expect(Cypher.hashPassword('ABCDEFGHIJKLM', '12345')).toBe('675b5e7e108d5d63a036c099485dd9d0866dc57f709314d527b4d7286ba095d4')
  })

  test(`hash password '${'a'}' with salt '${'123'}'`, () => {
    expect(Cypher.hashPassword('a', '123')).toBe('7c04837eb356565e28bb14e5a1dedb240a5ac2561f8ed318c54a279fb6a9665e')
  })

  test(`hash password '${''}' with salt '${''}'`, () => {
    expect(Cypher.hashPassword('', '')).toBe('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')
  })

  test(`hash password '${'__-%ç2Aaåf Ññ++\n¿¿\ts.;'}' with salt '${'ç+´+´}{}[++¡\'¡'}'`, () => {
    expect(Cypher.hashPassword('__-%ç2Aaåf Ññ++\n¿¿\ts.;', 'ç+´+´}{}[++¡\'¡')).toBe('1729f3107130a66eda70be6b621c41c1a692c6e9be19983ce47e924377638bb8')
  })

  test(`hash password '${'--------'}' with salt '${'--------'}'`, () => {
    expect(Cypher.hashPassword('--------', '--------')).toBe('1772a4132ec9e7e7f17afc6b6086a3894eb59ccb1f0e68cdccb8d67b5d02f4ef')
  })
})
