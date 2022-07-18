/* eslint-disable no-unused-vars */
import express, { Express, Request, Response, Router } from 'express'

// Security
import cors from 'cors'
import helmet from 'helmet'

// TODO: HTTPS

// Root Router by default we exporting index.ts from the folder routes
import rootRouter from '../routes'

// * Instance of our server
const server: Express = express()

// * Here define SERVER to use "/api" and use rootRouter from 'index.ts' in routes
// From this point: http://localhost:8000/api/...
server.use(
  '/api',
  rootRouter
)

// TODO: Mongoose Connection

// * Security Configuration
server.use(helmet())
server.use(cors())

// * Content type Configuration
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))

// * Redirections Config
// Request to http://localhost:8000/ redict to --> http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
  res.redirect('/api')
})

export default server
