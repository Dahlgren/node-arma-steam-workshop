var path = require('path');
var should = require('should');
var modsDirectory = require('../src/mods_directory');
var modsDirectories = require('../src/mods_directories');

var steamPath = path.join(__dirname, 'data');
var modPath = path.join(modsDirectory(steamPath), '12345');

describe('mods directories', function () {
  it('should have one mod', function (done) {
    modsDirectories(steamPath, function (err, mods) {
      should.not.exist(err);
      
      mods.should.be.instanceOf(Array).and.have.lengthOf(1);

      var mod = mods[0];
      should(mod).be.a.String();
      should.equal(mod, modPath);

      done(err);
    });
  });
});
