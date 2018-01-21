var fs = require('fs')
var path = require('path')
var deleteModMetadata = require('./delete_mod_metadata')

module.exports = function (steamDirectory, workshopId, callback) {
  var filePath = path.join(steamDirectory, 'steamapps', 'workshop', 'appworkshop_107410.acf')
  fs.readFile(filePath, 'utf8', function (err, text) {
    if (err) {
      return callback(err)
    }
    var data = deleteModMetadata(text, workshopId)
    fs.writeFile(filePath, data, callback)
  })
}
