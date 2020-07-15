import * as express from 'express'
import IControllerBase from '../interfaces/ControllerBase.interface'
import { CreateLogs } from '../services/quake.services'

class quakeController implements IControllerBase {
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes(): void {
    this.router.get('/', (Request, Response) => CreateLogs.matchLog() )
  }
}

export default quakeController
