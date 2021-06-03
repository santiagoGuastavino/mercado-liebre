let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');
let upload = require('../middlewares/multer');

router.get('/', productController.index); // show all
router.get('/create', productController.create); // create form
router.post('/', upload.single('image'), productController.store); // from create form to db
router.get('/edit/:id', productController.edit); // edit form w/ current data
router.put('/edit/:id', upload.single('image'), productController.update); // from form to existing entry
router.get('/:id', productController.show); // show one
router.delete('/:id', productController.destroy); // remove entry

module.exports = router;