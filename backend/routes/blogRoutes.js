const express = require('express')
const blogRouter = express.Router()

const { statusPage } = require('../controllers/blogControllers')

blogRouter.route('/status').get(statusPage)
// blogRouter.route('/').get(homePage)

module.exports = blogRouter
