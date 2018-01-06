var fs = require('fs.extra')
var path = require('path')
var should = require('should')
var deleteModFromAcf = require('../src/delete_mod_from_acf')

var dataFolder = path.join(__dirname, 'data')
var workshopFolder = path.join(dataFolder, 'steamapps', 'workshop')
var workshopMetadataFile = path.join(workshopFolder, 'appworkshop_107410.acf')
var expected = fs.readFileSync(path.join(workshopFolder, 'appworkshop_empty.acf'), 'utf-8')

describe('delete mod from acf', function () {
  beforeEach(function (done) {
    var src = path.join(workshopFolder, 'appworkshop_with_cba_a3.acf')
    var dst = path.join(workshopFolder, 'appworkshop_107410.acf')
    fs.copy(src, dst, { replace: true }, done)
  })

  afterEach(function () {
    fs.unlinkSync(workshopMetadataFile)
  })

  it('should have mod metadata deleted', function (done) {
    deleteModFromAcf(dataFolder, '450814997', function (err) {
      should.not.exist(err)

      var actual = fs.readFileSync(workshopMetadataFile, 'utf-8')
      should.equal(actual, expected)

      done(err)
    })
  })
})
