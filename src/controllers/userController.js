const userController = {
  renderLogin: (req, res) => {
    const title = 'Ingresá'
    res.render('./users/login', { title })
  },
  renderRegister: (req, res) => {
    const title = 'Creá tu cuenta'
    res.render('./users/register', { title })
  },
  create: (req, res) => {
    const user = {
      fullName: req.body.fullName,
      userName: req.body.userName
    }
    res.send(user)
    // res.redirect('/');
  }
}

module.exports = userController
