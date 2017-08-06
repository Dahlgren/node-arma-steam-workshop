var steamcmd = require('steamcmd')

module.exports = function (options, callback) {
  steamcmd.install({
    applicationId: 107410,
    installPath: options.path,
    password: options.password,
    username: options.username,
    workshopId: options.workshopId,
  }, callback)
}
