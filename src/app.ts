import * as express from 'express'
import { Application } from 'express'

class App {
  public app: Application
  public port: number

  constructor(appInit: { port: number, middleWares: any, controllers: any}) {
    this.app = express()
    this.port = appInit.port
    this.middlewares(appInit.middleWares)
    this.routes(appInit.controllers)
  }

  private routes(controller: { forEach: (arg0: (controller: any) => void) => void}) {
    controller.forEach(controller => {
      this.app.use('/', controller.router)
    })
  }

  private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void}) {
    middleWares.forEach(middleWare => {
      this.app.use(middleWare)
    })
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`quake log rodando na porta ${this.port}`)
    })
  }
}

export default App
