import { app } from './app.js'
const port = 8080
async function run() {
  try {
    app.listen(port, () => {
      console.log(`Server has started on ${port}`)
    })
  } catch (err) {
    return console.log(err)
  }
}
run()
