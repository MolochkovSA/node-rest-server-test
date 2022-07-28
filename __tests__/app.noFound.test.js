// Core
import request from 'supertest'

// Instruments
import { app } from '../app.js'

describe('should handle bad request', () => {
  test('should return 404 status', (done) => {
    request(app)
      .get('/error')
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(404)
        done()
      })
  })
})
