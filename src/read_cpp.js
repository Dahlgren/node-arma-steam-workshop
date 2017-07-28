var armaClassParser = require('arma-class-parser')
var fs = require('fs')

module.exports = function (filePath, callback) {
  fs.readFile(filePath, function (err, buf) {
    if (err) {
      return callback(err)
    }

    callback(null, armaClassParser(buf.toString()))
  })
}
