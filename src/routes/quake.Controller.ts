import * as express from 'express'
import { Request, Response} from 'express'
import IControllerBase from '../interfaces/ControllerBase.interface'

class quakeController implements IControllerBase {
  public path = '/'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes(): void {
    this.router.get('/', () => {console.log('ahoy')})
  }
}

export default quakeController
