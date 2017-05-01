var path = require('path');
var should = require('should');
var modsList = require('../src/mods_list');

describe('mods list', function () {
  it('should list with one mod', function (done) {
    modsList(path.join(__dirname, 'data'), function (err, mods) {
      should.not.exist(err);

      mods.should.be.instanceOf(Array).and.have.lengthOf(2);

      var mod = mods[0];
      var modPath = path.join(__dirname, 'data', 'steamapps', 'workshop', 'content', '107410', 'no-published-id');
      mod.should.be.a.Object();
      mod.should.have.property('id', 'no-published-id');
      mod.should.have.property('name', 'Test Mod');
      mod.should.have.property('path', modPath);

      done(err);
    });
  });
});
