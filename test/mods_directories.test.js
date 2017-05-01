var path = require('path');
var should = require('should');
var modsDirectory = require('../src/mods_directory');
var modsDirectories = require('../src/mods_directories');

var steamPath = path.join(__dirname, 'data');
var invalidSteamPath = path.join(__dirname, 'invalid');
var modPath = path.join(modsDirectory(steamPath), 'no-published-id');

describe('mods directories', function () {
  it('should have one mod', function (done) {
    modsDirectories(steamPath, function (err, mods) {
      should.not.exist(err);

      mods.should.be.instanceOf(Array).and.have.lengthOf(2);

      var mod = mods[0];
      should(mod).be.a.String();
      should.equal(mod, modPath);

      done(err);
    });
  });
  it('should return error if directory does not exist', function (done) {
    modsDirectories(invalidSteamPath, function (err, mods) {
      if (!err) {
        return done(new Error('No error was generated for invalid folder'))
      }

      done();
    });
  });
});
