import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// Configuration the .evn file
dotenv.config()

/**
Heare we create a new express application
*/
// Instantiate a new express application
const app: Express = express()

// Instance of server PORT
const port: string | number = process.env.PORT || 8000

/**
* Here we define the routes
*/

// GET /
app.get('/', (req: Request, res: Response) => {
  // Send Hello World to the client - response body
  res.send('Welcome to my API Restfull: Express + TS + Nodemon + Jest +  Swagger + Mongoose')
})

// GET /
app.get('/hello', (req: Request, res: Response) => {
  // Send Hello World to the client - response body
  res.send('Welcome to GET route: ¡Hello!')
})

// Execute APP and Listen Request to port
app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})
