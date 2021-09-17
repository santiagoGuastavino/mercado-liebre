let fs = require('fs');
let path = require('path');
let dataPath = path.join(__dirname,'..','data');

let helper = {
    readJson: (jsonFile) => {
        let dataFile = fs.readFileSync(dataPath + '/' + jsonFile, 'UTF-8');
        let data = JSON.parse(dataFile);
        return data;
    },

    writeJson: (jsonName,data) => {
        dataFile = JSON.stringify(data, null, 2);
        fs.writeFileSync(dataPath + '/' + jsonName, dataFile);
    },

    lastId: (data) => {
        let last = 0;
        data.forEach(item => {
            if (last < item.id) {
                last = item.id;
            };
        });
        return last;
    }
};

module.exports = helper;