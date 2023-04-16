import request from 'supertest'
import server from '../../..'

describe('Test if server is alive', () => {
  test(`get '${'/'}'`, async () => {
    await request(server).get('/').expect(200)
  })
})

describe('Test no existing routes', () => {
  test(`get '${'/hello'}'`, async () => {
    await request(server).get('/hello').expect(404)
  })

  test(`get '${'/--ññapsdue/../..'}'`, async () => {
    await request(server).get('/--ññapsdue/../..').expect(404)
  })
})

describe('Test no existing routes', () => {
  test(`get '${'/hello'}'`, async () => {
    await request(server).get('/hello').expect(404)
  })

  test(`get '${'/--ññapsdue/../..'}'`, async () => {
    await request(server).get('/--ññapsdue/../..').expect(404)
  })
})

afterAll(() => {
  server.close()
})
