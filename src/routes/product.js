let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');

// show all
router.get('/', productController.index);
// create one
router.get('/create', productController.create);
// show one // PUDE MOSTRAR /products/create porque aparece antes
router.get('/:id', productController.show);

// edit one
// get

// update one
// post


// store one
router.post('/', productController.store);

// delete
// delete

module.exports = router;