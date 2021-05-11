let express = require('express');
let router = express.Router();
let userController = require ('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/list', userController.list);

module.exports = router;