const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const { DBuri, port } = require('./config/enviroment')


const app = express()

mongoose.connect(DBuri,
  { useNewUrlParser: true, useUnifiedTopology: true }
  , () => console.log('Mongo is connected'))



app.use(bodyParser.json())

app.use((req, resp, next) => {
  console.log(`${req.method} to ${req.url}`)
  next()
})

//------

app.use('/api', router)

app.listen(port, () => console.log(`we are good to go on port ${port}`))