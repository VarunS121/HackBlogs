const express = require('express')
const blogRouter = express.Router()

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
blogRouter.route('/create').post(createBlog)
blogRouter.route('/:id').get(getBlog)
blogRouter.route('/:id/update').put(updateBlog)
blogRouter.route('/:id/delete').delete(deleteBlog)

module.exports = blogRouter
