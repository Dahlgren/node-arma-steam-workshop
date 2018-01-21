var fs = require('fs')
var path = require('path')
var should = require('should')
var deleteModMetadata = require('../src/delete_mod_metadata')

var workshopFolder = path.join(__dirname, 'data', 'steamapps', 'workshop')
var testData = fs.readFileSync(path.join(workshopFolder, 'appworkshop_with_cba_a3.acf'), 'utf-8')
var expected = fs.readFileSync(path.join(workshopFolder, 'appworkshop_empty.acf'), 'utf-8')

describe('delete mod metadata', function () {
  it('should have mod metadata deleted', function () {
    var actual = deleteModMetadata(testData, '450814997')

    should.equal(actual, expected)
  })
})
