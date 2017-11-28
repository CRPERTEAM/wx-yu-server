import path from 'path'
let env = process.env.NODE_ENV || "development"
env = env.toLocaleLowerCase()

let file = path.resolve(__dirname, env)

try {
  module.exports = require(file)
} catch (err) {
  throw err
}
