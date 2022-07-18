import express, { Request, Response } from 'express'
import { GoodbyeController } from '../controller/GoodbyeController'
import { logInfo } from '../utils/logger'

// Router from express
const GoodbyeRouter = express.Router()

// methods HTTP for this route
GoodbyeRouter.route('/')
// GET http://localhost:8000/api/goodbye?name=Miryam
  .get(async (req: Request, res: Response) => {
    // obtain a query param
    const name: any = req?.query?.name
    logInfo(`Query Param: ${name}`)
    // controller Instance to execute the method
    const controller: GoodbyeController = new GoodbyeController()
    // obtain the response from the method
    const response = await controller.getMessage(name)
    // send the response to the client
    return res.send(response)
  })

// Export hello router
export default GoodbyeRouter
