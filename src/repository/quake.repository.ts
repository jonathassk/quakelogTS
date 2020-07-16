import { Game } from '../interfaces/Game.interface'

let userName: string = ''
let userId: number = 0

export class QuakeRepository {
  static initGame(game: Game) {
    game.players = []
    game.total_kills = 0
    game.kills = {}
    return game
  }

  static changeUser(game: Game, infoChange: RegExp, action: string) {
    userName = action.match(infoChange)[2]
    userId = parseInt(action.match(infoChange)[1])
    if (!game.players[userId - 2]) {
      game.players.push(userName)
    } else {
      game.players[userId - 2] = userName
    }
    if (!game.kills[userName]) {
      game.kills[userName] = 0
    }
    return game
  }

  static Kill(game, action, kill) {
    game.total_kills++
    if (action.match(kill)[4] !== '<world>') {
      game.kills[action.match(kill)[4]]++
    }
    if (action.match(kill)[4] === '<world>' && game.kills[action.match(kill)[5]] > 0) {
      game.kills[action.match(kill)[5]]--
    }
    return game
  }
}
