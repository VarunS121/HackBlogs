const Blog = require('../models/Blog')

const statusPage = (req, res) => {
  res.status(200).json({ status: 'Running' })
}

const homePage = (req, res) => {}

module.exports = { statusPage }
