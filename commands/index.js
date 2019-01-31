/**
* File name: vue-start-kit/commands/index.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-31 11:35:02
*/
const path = require('path')

const filenameApp = [
  'createModule.js'
]

module.exports = function commandLoader (program) {
  let commands = {}
  let loadPathApp = path.dirname(__filename) + '/exec'

  /* App */
  for (let key in filenameApp) {
    if (filenameApp.hasOwnProperty(key)) {
      let name = filenameApp[key].substr(0, filenameApp[key].lastIndexOf('.'))

      // Require command
      let command = require(path.join(loadPathApp, filenameApp[key]))

      // Initialize command
      commands[name] = command(program)
    }
  }
  return commands
}
