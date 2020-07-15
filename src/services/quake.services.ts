import * as fs from 'fs'
import * as path from "path"
import { TransformLogToArray } from '../helpers/transform-log-to-array'

let textArray

export class CreateLogs {
  constructor(private transformLogToArray :TransformLogToArray) {
  }
  static matchLog (): any{
    fs.readFile(path.join(__dirname, '../data/games.log'), 'utf8', (err, data) => {
      if (err) {
        throw new Error()
      }
      textArray = data.toString().split(`\n`)
      return TransformLogToArray.createObjectGame(textArray)
    })
  }
}
