let fs = require('fs');
let path = require('path');

let dataPath = path.join(__dirname,'..','data');

let helper = {
    readJson: (jsonFile) => {
        let dataFile = fs.readFileSync(dataPath + '/' + jsonFile, 'UTF-8');
        let data = JSON.parse(dataFile);
        return data;
    },
    writeJson: (data) => {
        let dataFile = 
        dataFile = JSON.stringify(data, null, 2);
        fs.writeFileSync(dataPath + '/' + jsonFile + '.json', dataFile);
    }
}

module.exports = helper;

let lala = [
    {
        one: 'one',
        two: 'two',
        three: 'three'
    },
    {
        uno: 'uno',
        dos: 'dos',
        tres: 'tres',
    }
];

helper.writeJson('lalaOne',lala);