// Core
import request from 'supertest'

// Instruments
import { app } from '../app.js'

describe('should handle get request /hello', () => {
  test('should return 200 status and "Hello World"', (done) => {
    request(app)
      .get('/hello')
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(200)
        expect(body).toBe('Hello World')
        done()
      })
  })
})
