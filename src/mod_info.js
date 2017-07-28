var path = require('path')
var readCpp = require('./read_cpp')

module.exports = function (modPath, callback) {
  readCpp(path.join(modPath, 'meta.cpp'), function (err, metadata) {
    if (err) {
      return callback(err)
    }

    var id = metadata.publishedid
    if (id) {
      id = id.toString()
    } else {
      id = path.basename(modPath)
    }

    callback(null, {
      id: id,
      name: metadata.name,
      path: modPath
    })
  })
}
