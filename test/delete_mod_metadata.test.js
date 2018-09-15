var fs = require('fs')
var path = require('path')
var should = require('should')
var VDF = require('@node-steam/vdf')

var deleteModMetadata = require('../src/delete_mod_metadata')

var workshopFolder = path.join(__dirname, 'data', 'steamapps', 'workshop')
var testData = VDF.parse(fs.readFileSync(path.join(workshopFolder, 'appworkshop_with_cba_a3.acf'), 'utf-8'))
var expected = VDF.parse(fs.readFileSync(path.join(workshopFolder, 'appworkshop_empty.acf'), 'utf-8'))

describe('delete mod metadata', function () {
  it('should have mod metadata deleted', function () {
    var actual = deleteModMetadata(testData, '450814997')

    should.deepEqual(actual, expected)
  })
})
