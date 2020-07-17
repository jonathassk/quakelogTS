import {QuakeRepository} from "../repository/quake.repository";
class Game {
  total_kills: number
  players: Array<string>
  kills: object
}

let initGame: RegExp = /InitGame: /
let infoChange: RegExp = /ClientUserinfoChanged: ([0-9]+) n\\(.*)\\t\\([0-9]+)/
let kill: RegExp = /Kill: ([0-9]+) ([0-9]+) ([0-9]+): (.*) killed (.*) by (.*)/
let shutDown: RegExp = /ShutdownGame:/
let gameArray: Array<any> = []

export class TransformLogToArray {
  static createObjectGame(data: Array<string>) {
    let game = new Game()
    data.map(action => {
      if (action.match(initGame)) {
        game = QuakeRepository.initGame(game)
      }

      if (action.match(infoChange)) {
        game = QuakeRepository.changeUser(game, infoChange, action)
      }

      if (action.match(kill)){
        game = QuakeRepository.Kill(game, action, kill)
      }

      if (action.match(shutDown)) {
        let gamekills = game.kills
        let total_kills = game.total_kills
        let players = game.players
        gameArray.push({
          total_kills, players, gamekills
        })
      }
    })
    return gameArray
  }
}
