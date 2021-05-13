let express = require('express');
let router = express.Router();
let mainController = require('../controllers/mainController');
let productController = require('../controllers/productController');

router.get('/', mainController.renderHome);
router.get('/', productController.renderArticles);

module.exports = router;