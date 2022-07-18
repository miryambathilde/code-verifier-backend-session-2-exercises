/* eslint-disable no-unused-vars */
import express, { Request, Response } from 'express'
import { HelloController } from '../controller/HelloController'
import { logInfo } from '../utils/logger'

// Router from express
const HelloRouter = express.Router()

// methods HTTP for this route
HelloRouter.route('/')
// GET http://localhost:8000/api/hello?name=Miryam
  .get(async (req: Request, res: Response) => {
    // obtain a query param
    const name: any = req?.query?.name
    logInfo(`Query Param: ${name}`)
    // controller Istance to execute the method
    const controller: HelloController = new HelloController()
    // obtain the response from the method
    const response = await controller.getMessage(name)
    // send the response to the client
    return res.send(response)
  })

// Export hello router
export default HelloRouter
