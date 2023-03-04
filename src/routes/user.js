const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/login', userController.renderLogin)
router.get('/register', userController.renderRegister)
router.post('/register', userController.create)

module.exports = router
