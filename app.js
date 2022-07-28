import express from 'express'
import 'express-async-errors'
import { userRouter } from './users/router.js'

const app = express()

app.use(express.json())

app.get('/hello', (req, res) => {
  res.json('Hello World')
})

app.use('/users', userRouter)

//error handler notFound
app.use((req, res, next) => {
  res.status(404).json(`Page ${req.url} not found`)
})

//error handler
app.use((err, req, res, next) => {
  res.status(400).json(err.message)
})

export { app }
