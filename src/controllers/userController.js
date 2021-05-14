let userController = {
    renderLogin: (req,res) => {
        let title = 'Ingresá';
        res.render('./users/login',{'title':title});
    },
    renderRegister: (req,res) => {
        let title = 'Creá tu cuenta';
        res.render('./users/register',{'title':title});
    }
};

module.exports = userController;