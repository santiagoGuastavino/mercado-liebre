const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, '..', 'data')

const helper = {
  readJson: (jsonFile) => {
    const dataFile = fs.readFileSync(dataPath + '/' + jsonFile, 'UTF-8')
    const data = JSON.parse(dataFile)
    return data
  },

  writeJson: (jsonName, data) => {
    const dataFile = JSON.stringify(data, null, 2)
    fs.writeFileSync(dataPath + '/' + jsonName, dataFile)
  },

  lastId: (data) => {
    let last = 0
    data.forEach(item => {
      if (last < item.id) {
        last = item.id
      };
    })
    return last
  }
}

module.exports = helper
