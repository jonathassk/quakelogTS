import * as fs from 'fs'
import * as path from "path";

export class CreateLogs {
  static matchLog (req, res): any{
    fs.readFile(path.join(__dirname, '../data/games.log'), 'utf8', (err, data) => {
      if (err) {
        console.log(err)
      }
      console.log(data)
    })

  }
}
