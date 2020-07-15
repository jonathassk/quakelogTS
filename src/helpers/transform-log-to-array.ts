class Game {
  total_kills: number
  players: Array<string>
  kills: object
}


export class TransformLogToArray {
  static createObjectGame(data: Array<string>) {
    let game = new Game()
    data.map(action => {
      if (action.match(/InitGame: /)) {
        game.total_kills = 0
        game.players = []
        game.kills = {}
        console.log('init', game)
      }
      if (action.match(/ClientUserinfoChanged: ([0-9]+) n\\(.*)\\t\\([0-9]+)/)) {
        let userName = action.match(/ClientUserinfoChanged: ([0-9]+) n\\(.*)\\t\\([0-9]+)/)[2]
        let userId: number = parseInt(action.match(/ClientUserinfoChanged: ([0-9]+) n\\(.*)\\t\\([0-9]+)/)[1])
        if (!game.players[userId - 2]) {
          game.players.push(userName)
        } else {
          game.players[userId - 2] = userName
        }
      console.log('change', game)
      }
      if (action.match(/Kill: ([0-9]+) ([0-9]+)/)){
        game.total_kills++
        //console.log(action.match(/Kill: ([0-9]+) ([0-9]+) ([0-9]+): ([\w.]+)/))
      }
      if (action.match(/ShutdownGame:/)) {
        console.log('end', game)
      }
    })
  }
}


//Object.assign
//array.push
