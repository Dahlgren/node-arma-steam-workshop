var path = require('path')
var should = require('should')
var modsDirectory = require('../src/mods_directory')

var expectedModsPath = path.join(__dirname, 'steamapps', 'workshop', 'content', '107410')

describe('mods directory', function () {
  it('should have path to steam workshop mods', function () {
    var actualModsPath = modsDirectory(__dirname)
    actualModsPath.should.be.a.String()
    should.equal(actualModsPath, expectedModsPath)
  })
})
