var async = require('async');
var modInfo = require('./mod_info');
var modsDirectories = require('./mods_directories');

function modsInfo(folders, callback) {
  async.map(folders, modInfo, callback);
}

module.exports = function (steamDirectory, callback) {
  modsDirectories(steamDirectory, function (err, folders) {
    modsInfo(folders, callback);
  });
}
