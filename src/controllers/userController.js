let userController = {
    renderLogin: (req,res) => {
        let title = 'Ingresá';
        res.render('./users/login',{'title':title});
    },
    renderRegister: (req,res) => {
        let title = 'Creá tu cuenta';
        res.render('./users/register',{'title':title});
    },
    create: (req,res) => {
        let user = {
                fullName: req.body.fullName,
                userName: req.body.userName
            };
        res.redirect('/');
    }
};

module.exports = userController;