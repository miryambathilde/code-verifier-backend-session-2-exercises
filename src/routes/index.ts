/**
* Root Router for the application
* To manage redirections
*/

import express, { Request, Response } from 'express'
import HelloRouter from './HelloRouter'
import { logInfo } from '../utils/logger'
import GoodbyeRouter from './GoodbyeRouter'

// Server instance
const server = express()

// Router instance
const rootRouter = express.Router()

// Activate for request to http://localhost:8000/api

// GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
  logInfo('GET: http://127.0.0.1:8000/api/')
  // Send Hello World to the client - response body
  res.send('Welcome to my API Restfull: Express + TS + Nodemon + Jest +  Swagger + Mongoose')
})

// Redirections to Routers & Controllers
// GET: http://localhost:8000/api/
server.use('/', rootRouter)
// GET: http://localhost:8000/api/hello --> HelloRouter
server.use('/hello', HelloRouter)
// GET: http://localhost:8000/api/goodbye --> GoodbyeRouter
server.use('/goodbye', GoodbyeRouter)

// Add more routers to the app

export default server
