const express = require('express')
const blogRouter = express.Router()
const verifyToken = require('../middleware/authMiddleware')

const {
  statusPage,
  getAllBlogs,
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
} = require('../controllers/blogControllers')

blogRouter.route('/status').get(statusPage)
blogRouter.route('/').get(getAllBlogs)
blogRouter.route('/create').post(verifyToken, createBlog)
blogRouter.route('/:id').get(getBlog)
blogRouter.route('/:id/update').put(verifyToken, updateBlog)
blogRouter.route('/:id/delete').delete(verifyToken, deleteBlog)

module.exports = blogRouter
