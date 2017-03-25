var async = require('async');
var fs = require('fs');
var path = require('path');
var modsDirectory = require('./mods_directory');

function isDirectory(filePath, callback) {
  fs.stat(filePath, function (err, stats) {
    callback(null, !err && stats.isDirectory());
  });
}

function hasMetaCpp(filePath, callback) {
  fs.exists(path.join(filePath, 'meta.cpp'), function (exists) {
    callback(null, exists);
  });
}

module.exports = function (steamDirectory, callback) {
  var dir = modsDirectory(steamDirectory);
  fs.readdir(dir, function (err, files) {
    files = files.map(function (fileName) {
      return path.join(dir, fileName);
    });

    async.filter(files, isDirectory, function (err, files) {
      if (err) {
        return callback(err);
      }

      async.filter(files, hasMetaCpp, callback);
    });
  });
}
