let express = require('express');
let router = express.Router();
let mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/search', mainController.search);

module.exports = router;