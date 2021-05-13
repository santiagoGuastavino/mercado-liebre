let userController = {
    renderLogin: (req,res) => res.render('./users/login'),
    renderRegister: (req,res) => res.render('./users/register'),
};

module.exports = userController;