let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');

router.get('/', productController.index); // show all
router.get('/create', productController.create); // create form
router.post('/', productController.store); // from create form to db
router.get('/edit/:id', productController.edit); // edit form w/ current data
router.put('/', productController.update);
router.get('/:id', productController.show); // show one



// delete
// delete

module.exports = router;