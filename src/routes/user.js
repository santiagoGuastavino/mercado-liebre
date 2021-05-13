let express = require('express');
let router = express.Router();
let userController = require ('../controllers/userController');

router.get('/login', userController.renderLogin);
router.get('/register', userController.renderRegister);

module.exports = router;