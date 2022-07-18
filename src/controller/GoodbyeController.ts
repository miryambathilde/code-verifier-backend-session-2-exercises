import { GoodbyeResponse } from './types'
import { IGoodbyeController } from './interfaces'
import { logSuccess } from '../utils/logger'

const currentDate = new Date()

export class GoodbyeController implements IGoodbyeController {
  public async getMessage (name?: string, date?: string): Promise<GoodbyeResponse> {
    logSuccess('[/api/goodbye] Get Request')
    return {
      message: `Goodbye ${name || 'Anonymous'}`,
      date: currentDate.toLocaleDateString() + ' ' + currentDate.toLocaleTimeString()
    }
  }
}
