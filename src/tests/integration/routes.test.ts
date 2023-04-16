import request from 'supertest'
import server from '../../..'

describe(`Test '${'/api'}' route`, () => {
  test(`get '${'/api'}'`, async () => {
    await request(server).get('/api').expect(404)
  })
})

describe(`Test '${'/api/user'}' route`, () => {
  test(`get '${'/api/user'}'`, async () => {
    await request(server).get('/api/user').expect(404)
  })
})

describe(`Test '${'/api/user/addCurrent'}' route`, () => {
  test(`get '${'/api/user/addCurrent'}'`, async () => {
    await request(server).get('/api/user/addCurrent').expect(404)
  })

  test(`put '${'/api/user/addCurrent'}'`, async () => {
    await request(server).put('/api/user/addCurrent').expect(404)
  })

  test(`delete '${'/api/user/addCurrent'}'`, async () => {
    await request(server).delete('/api/user/addCurrent').expect(404)
  })

  test(`post '${'/api/user/addCurrent'}' with no auth-token`, async () => {
    await request(server).post('/api/user/addCurrent').expect(400)
  })

  test(`post '${'/api/user/addCurrent'}' with auth-token`, async () => {
    await request(server).post('/api/user/addCurrent').set('Cookie', ['auth-token=12345']).expect(401)
  })
})

describe(`Test '${'/api/user/addVoltaje'}' route`, () => {
  test(`get '${'/api/user/addVoltaje'}'`, async () => {
    await request(server).get('/api/user/addVoltaje').expect(404)
  })

  test(`put '${'/api/user/addVoltaje'}'`, async () => {
    await request(server).put('/api/user/addVoltaje').expect(404)
  })

  test(`delete '${'/api/user/addVoltaje'}'`, async () => {
    await request(server).delete('/api/user/addVoltaje').expect(404)
  })

  test(`post '${'/api/user/addVoltaje'}' with no auth-token`, async () => {
    await request(server).post('/api/user/addVoltaje').expect(400)
  })

  test(`post '${'/api/user/addVoltaje'}' with auth-token`, async () => {
    await request(server).post('/api/user/addVoltaje').set('Cookie', ['auth-token=12345']).expect(401)
  })
})

describe(`Test '${'/api/auth'}' route`, () => {
  test(`get '${'/api/auth'}'`, async () => {
    await request(server).get('/api/auth').expect(404)
  })
})

describe(`Test '${'/api/auth/login'}' route`, () => {
  test(`get '${'/api/auth/login'}'`, async () => {
    await request(server).get('/api/auth/login').expect(404)
  })

  test(`put '${'/api/auth/login'}'`, async () => {
    await request(server).put('/api/auth/login').expect(404)
  })

  test(`delete '${'/api/auth/login'}'`, async () => {
    await request(server).delete('/api/auth/login').expect(404)
  })

  test(`post '${'/api/auth/login'}' with no json body`, async () => {
    await request(server).post('/api/auth/login').expect(400)
  })

  test(`post '${'/api/auth/login'}' with empty json -no credentials-`, async () => {
    await request(server).post('/api/auth/login').send({}).expect(400)
  })

  test(`post '${'/api/auth/login'}' with random credentials`, async () => {
    await request(server).post('/api/auth/login').send({
      userName: 'abcd',
      password: '1234'
    }).expect(500)
  })
})

afterAll(() => {
  server.close()
})
