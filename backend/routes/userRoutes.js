const express = require('express')
const router = express.Router()

const { Login, SignUp } = require('../controllers/userControllers')

router.route('/login').post(Login)
router.route('/signup').post(SignUp)

module.exports = router
