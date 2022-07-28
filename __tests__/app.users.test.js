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

describe('should handle request /users', () => {
  test('should return 201 status and new user', (done) => {
    request(app)
      .post('/users')
      .send(user)
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(201)
        expect(typeof body).toBe('object')
        userId = body.id
        done()
      })
  })
  test('should return 200 status and an array of users', (done) => {
    request(app)
      .get('/users')
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(200)
        expect(body).toHaveLength(1)
        done()
      })
  })
  test('should return 200 status and user by id', (done) => {
    request(app)
      .get(`/users/${userId}`)
      .send(userId)
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(200)
        expect(body.id).toBeDefined()
        expect(body.username).toBe(user.username)
        expect(body.email).toBe(user.email)
        expect(body.password).toBe(user.password)
        expect(body.sex).toBe(user.sex)
        done()
      })
  })
  test('should return 200 status and username "Tom"', (done) => {
    request(app)
      .put(`/users/${userId}`)
      .send(updateUser)
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(200)
        expect(body.username).toBe(updateUser.username)
        done()
      })
  })
  test('should return 204 and delete user', (done) => {
    request(app)
      .delete(`/users/${userId}`)
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(204)
        done()
      })
  })
  test('should return 200 status and zerro array of users', (done) => {
    request(app)
      .get('/users')
      .end((error, response) => {
        const { body, statusCode } = response
        expect(statusCode).toBe(200)
        expect(body).toHaveLength(0)
        done()
      })
  })
})
