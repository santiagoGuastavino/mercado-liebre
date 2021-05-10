const path = require('path');

const pathHome = path.resolve(__dirname,'../views/index.html');

let mainController = {
    showHome: (req,res) => res.sendFile(pathHome)
}

module.exports = mainController;