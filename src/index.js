var modsList = require('./mods_list')
var search = require('./search')

var SteamWorkshop = function (options) {
  this.options = options;
};

SteamWorkshop.prototype.mods = function (callback) {
  modsList(this.options.path, callback);
}

SteamWorkshop.prototype.search = function (text, callback) {
  search(text, this.options.apiKey, callback);
}

module.exports = SteamWorkshop;
