var modsList = require('./mods_list')

var SteamWorkshop = function (options) {
  this.options = options;
};

SteamWorkshop.prototype.mods = function (callback) {
  modsList(this.options.path, callback);
}

module.exports = SteamWorkshop;
