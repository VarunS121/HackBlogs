const Blog = require('../models/Blog')

const statusPage = (req, res) => {
  res.status(200).json({ status: 'Running' })
}

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.findAll()
  res.status(200).json({ blogs })
}

const createBlog = async (req, res) => {
  const { title, content } = req.body
  const newBlog = await Blog.create({ title: title, content: content })
  res.status(200).json({ msg: 'Blog Created', newBlog })
}

const getBlog = async (req, res) => {
  const id = req.params.id
  const blog = await Blog.findAll({
    where: {
      id: id,
    },
  })
  res.status(200).json({ blog })
}

const updateBlog = async (req, res) => {
  const id = req.params.id
  const { title, content } = req.body
  await Blog.update(
    { title: title, content: content },
    {
      where: {
        id: id,
      },
    }
  )
  const blog = await Blog.findAll({
    where: {
      id: id,
    },
  })
  res.status(200).json({ blog })
}

const deleteBlog = async (req, res) => {
  const id = req.params.id
  await Blog.destroy({
    where: {
      id: id,
    },
  })
  res.status(200).json({ msg: `Blog with id ${id} is deleted` })
}
module.exports = {
  statusPage,
  getAllBlogs,
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
}
