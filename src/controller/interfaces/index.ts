import { BasicResponse } from '../types'

/**
 * @interface IController
 * @param {string} name: le ponemos un ? porque es un query params y es un parametro opcional
 * BasicResponse is the interface that return the basic response of the controller in JSON format
 * Return a promise of type BasicResponse
 */
export interface IHelloController {
  getMessage(name?: string): Promise<BasicResponse>;
}
