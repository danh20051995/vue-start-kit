/**
* File name: vue-start-kit/commands/status.js
* Created by Visual studio code
* User: Danh Le / danh.danh20051995@gmail.com
* Date: 2019-01-31 11:29:29
*/
let _intervalId = null

module.exports = {
  start: function () {
    process.stdout.write('.')
    if (process.stdout.isTTY) {
      _intervalId = _intervalId || setInterval(function () {
        process.stdout.write('.')
      }, 1000)
    }
  },
  stop: function () {
    if (process.stdout.isTTY && _intervalId) {
      clearInterval(_intervalId)
      _intervalId = null
      console.log('')
    }
  }
}
