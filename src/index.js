var downloadMod = require('./download_mod')
var modsList = require('./mods_list')
var search = require('./search')

var SteamWorkshop = function (options) {
  this.options = options
}

SteamWorkshop.prototype.mods = function (callback) {
  modsList(this.options.path, callback)
}

SteamWorkshop.prototype.downloadMod = function (workshopId, callback) {
  downloadMod({
    workshopId: workshopId,
    path: this.options.path,
    username: this.options.username,
    password: this.options.password
  }, callback)
}

SteamWorkshop.prototype.search = function (text, callback) {
  search(text, this.options.apiKey, callback)
}

module.exports = SteamWorkshop
