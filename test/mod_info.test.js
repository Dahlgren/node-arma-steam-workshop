var path = require('path');
var should = require('should');
var modInfo = require('../src/mod_info');

var modPath = path.join(__dirname, 'data', 'steamapps', 'workshop', 'content', '107410', '12345');

describe('mod info', function () {
  it('should have mod metadata', function (done) {
    modInfo(modPath, function (err, mod) {
      should.not.exist(err);
      
      mod.should.be.a.Object();
      mod.should.have.property('id', 12345);
      mod.should.have.property('name', 'Test Mod');

      done(err);
    });
  });
});
