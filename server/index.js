const express = require('express')
const path = require('path')
const userControler = require('./controllers/users')
const summaryControler = require('./controllers/summaries')
const postControler = require('./controllers/posts')

require('dotenv').config()

const PORT = process.env.PORT ?? 10000

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH')
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200)
    }
    next()
  })
    app.use(express.json())

app
    .use('/api/users',userControler)
    .use('/api/summaries', summaryControler)
    .use('/api/posts', postControler)
    .use('/', express.static('../client/dist'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.use((err, req, res, next) => {
    console.error(err)
    const status = err.status || 500
    
    const error = {
      status,
      message: err.message || 'Internal Server Error',
    }
    res.status(status).send(error)
})
      
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})