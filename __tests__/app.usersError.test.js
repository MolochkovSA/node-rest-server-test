// Core
import request from 'supertest'

// Instruments
import { app } from '../app.js'

let userId = null

const user = {
  username: 'Bob',
  email: 'mail@mail.ru',
  password: 'Sw331@111',
  sex: 'male',
}
const updateUser = {
  username: 'Tom',
  email: 'mail@mail.ru',
  password: 'Sw331@111',
  sex: 'male',
}
const invalidUser = {
  username: 111,
}

describe('should handle request /users', () => {
  beforeAll((done) => {
    request(app)
      .post('/users')
      .send(user)
      .end((error, response) => {
        const { body, statusCode } = response
        userId = body.id
        done()
      })
  })
  test('"POST" should return 400 status because invalid body', (done) => {
    request(app)
      .post('/users')
      .send(invalidUser)
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(400)
        done()
      })
  })
  test('"PUT" should return 400 status because invalid body', (done) => {
    request(app)
      .put(`/users/${userId}`)
      .send(invalidUser)
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(400)
        done()
      })
  })
  test('"GET" should return 400 status because invalid id', (done) => {
    request(app)
      .get(`/users/123`)
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(400)
        done()
      })
  })
  test('"PUT" should return 400 status because invalid id', (done) => {
    request(app)
      .put(`/users/123`)
      .send(updateUser)
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(400)
        done()
      })
  })
  test('"DELETE" should return 400 status because invalid id', (done) => {
    request(app)
      .delete(`/users/123`)
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(400)
        done()
      })
  })
})
