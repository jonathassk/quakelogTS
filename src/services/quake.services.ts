import * as fs from 'fs'
import * as path from "path"
import { TransformLogToArray } from '../helpers/transform-log-to-array'
import {response} from "express";

let textArray

export class CreateLogs {
  constructor(private transformLogToArray :TransformLogToArray) {
  }
  static matchLog (req, res): any{
    fs.readFile(path.join(__dirname, '../data/games.log'), 'utf8', (err, data) => {
      if (err) {
        throw new Error()
      }
      textArray = data.toString().split(`\n`)
      let game = TransformLogToArray.createObjectGame(textArray)
      res.send(game)
    })
  }
}
