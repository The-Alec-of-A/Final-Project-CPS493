// Load the http module to create an http server.
const express = require('express')
const productsController = require('./controllers/products')
const e = require('express')

const PORT = process.env.PORT ?? 8000 // Default to 8000 if PORT is not set

const app = express();


// Middleware
  app.use(express.json()) // Parse JSON request body

app
  .get('/hello', (req, res) => {
    res.send('Hello New Paltz, NY!!!')
  })
  .use('/api/v1/products', productsController)


app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500  //server-side error
  
  const error = {
    status,
    message: err.message || 'Internal Server Error',
  }
  res.status(status).send(error)
})
// Listen on port 8000, IP defaults to
//
app.listen(PORT, () => {
    console.log('Welcome to the best class at New Paltz - $[process.env.BEST_CLASS]')
});

/*
Asynchronous programming in Node.js- return type of async function is always a promise
1. Callbacks
2. Pipleines
3. Promises
4. Async/Await
* 'await' keyword creates the actual promise
*/

console.log('Hello World!')

/* 
  Ways to send data to the server
  1. PATH parameters: /users/123
  2. Query parameters: ?name=John&age=30
  3. Headers
    3.5. Cookies
  4. Request body: { "name": "John", "age": 30 }
    4.0. Form data: name=John&age=30
    4.5. JSON data: { "name": "John", "age": 30 }

*/

/* 
  parts of a url
  1. Protocol: http:// or https://
  2. Domain: www.example.com
  3. Port: :80 or :443
  4. Path: /path/to/resource
  5. Query parameters: ?name=John&age=30
  6. Fragment: #section1

  example: https://www.example.com:80/path/to/resource?name=John&age=30#section1
*/

/*
  Module Types
    1. CommonJS:
      import: require('module')
      export: module.exports = { functions, variables, etc. }
    2. ES6:
      import: import { functions, variables, etc. } from 'module'
      export: export { functions, variables, etc. }
*/