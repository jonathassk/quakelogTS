class Game {
  total_kills: number
  players: Array<string>
  kills: object
}
let initGame: RegExp = /InitGame: /
let infoChange: RegExp = /ClientUserinfoChanged: ([0-9]+) n\\(.*)\\t\\([0-9]+)/
let kill: RegExp = /Kill: ([0-9]+) ([0-9]+) ([0-9]+): (.*) killed (.*) by (.*)/
let shutDown: RegExp = /ShutdownGame:/
let userName: string = ''
let userId: number = 0

export class TransformLogToArray {
  static createObjectGame(data: Array<string>) {
    let game = new Game()
    data.map(action => {
      if (action.match(initGame)) {
        game.total_kills = 0
        game.players = []
        game.kills = {}
      }

      if (action.match(infoChange)) {
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
      }

      if (action.match(kill)){
        game.total_kills++
        if (action.match(kill)[4] !== '<world>') {
          game.kills[action.match(kill)[4]]++
        }
        if (action.match(kill)[4] === '<world>' && game.kills[action.match(kill)[5]] > 0) {
          game.kills[action.match(kill)[5]]--
        }
      }

      if (action.match(shutDown)) {

      }
    })
  }
}


//Object.assign
//array.push
