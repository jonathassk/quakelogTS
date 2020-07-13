import App from './app'
import * as bodyParser from 'body-parser'
import HomeController from './routes/quake.Controller'

const app = new App ({
  port: 3000,
  controllers: [
    new HomeController()
  ],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
  ]
})

app.listen()
