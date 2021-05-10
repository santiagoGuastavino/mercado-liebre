const path = require('path');

const pathLogin = path.resolve(__dirname,'../views/users/login.html');
const pathRegister = path.resolve(__dirname,'../views/users/register.html');

let userController = {
    login: (req,res) => res.sendFile(pathLogin),
    register: (req,res) => res.sendFile(pathRegister)
};

module.exports = userController;