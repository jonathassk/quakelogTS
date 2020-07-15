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
      }
      if (action.match(/Kill: ([0-9]+) ([0-9]+)/)){
        //console.log(action.match(/Kill: ([0-9]+) ([0-9]+) ([0-9]+): ([\w.]+)/))
      }
      if (action.match(/ClientUserinfoChanged: ([0-9]+) n\\(.*)\\t\\([0-9]+)/)) {
        console.log(action.match(/ClientUserinfoChanged: ([0-9]+) n\\(.*)\\t\\([0-9]+)/))
      }
      if (action.match(/ShutdownGame:/)) {

      }
    })


    game.total_kills = 2
    game.players = ['player1', 'player2']
    game.kills = {
      'player 1': 2
    }
  }
}
