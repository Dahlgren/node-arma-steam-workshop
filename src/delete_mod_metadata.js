var VDF = require('@node-steam/vdf')

function parseSize (size) {
  if (size) {
    return parseInt(size, 10)
  }

  return null
}

module.exports = function (text, workshopId) {
  var data = VDF.parse(text)
  if (data.AppWorkshop) {
    var workshop = data.AppWorkshop
    var sizeOnDisk = parseSize(workshop['SizeOnDisk'])
    var installedItems = workshop.WorkshopItemsInstalled

    if (installedItems && installedItems[workshopId]) {
      var itemSize = parseSize(installedItems[workshopId]['size'])
      delete installedItems[workshopId]

      if (sizeOnDisk && itemSize) {
        workshop['SizeOnDisk'] = (sizeOnDisk - itemSize).toString()
      }
    }

    if (workshop.WorkshopItemDetails && workshop.WorkshopItemDetails[workshopId]) {
      delete workshop.WorkshopItemDetails[workshopId]
    }
  }
  return VDF.stringify(data)
}
