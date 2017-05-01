var path = require('path');
var should = require('should');
var modsDirectory = require('../src/mods_directory');
var readCpp = require('../src/read_cpp');

var metaCppFilePath = path.join(modsDirectory(path.join(__dirname, 'data')), 'valid-mod', 'meta.cpp');

describe('read cpp', function () {
  it('should read meta.cpp', function (done) {
    readCpp(metaCppFilePath, function (err, metadata) {
      should.not.exist(err);

      should(metadata).be.a.Object();
      metadata.should.have.property('protocol', 1);
      metadata.should.have.property('publishedid', 12345);
      metadata.should.have.property('name', 'Test Mod');
      metadata.should.have.property('timestamp', 123456789);

      done(err);
    });
  });
});
