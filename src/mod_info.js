var path = require('path');
var readCpp = require('./read_cpp');

module.exports = function (modPath, callback) {
  readCpp(path.join(modPath, 'meta.cpp'), function (err, metadata) {
    if (err) {
      return callback(err);
    }

    callback(null, {
      id: metadata.publishedid,
      name: metadata.name,
      path: modPath,
    });
  });
}
