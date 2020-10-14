const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const random = Math.random();

app.use(morgan("dev"))
app.get('/', (req, res) => {
  res.send(`Hello World::${random}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})