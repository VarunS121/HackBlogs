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
  const userId = req.userId
  const newBlog = await Blog.create({
    title: title,
    content: content,
    authorId: userId,
  })
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
  const userId = req.userId
  const id = req.params.id
  const { title, content } = req.body

  try {
    const blog = await Blog.findAll({
      where: {
        id: id,
      },
    })
    if (blog[0].authorId == userId) {
      await Blog.update(
        { title: title, content: content },
        {
          where: {
            id: id,
          },
        }
      )
      const blog1 = await Blog.findAll({
        where: {
          id: id,
        },
      })
      res.status(200).json({ blog1 })
    } else {
      res.status(401).json({ msg: 'Unauthorized to perform this operation' })
    }
  } catch (error) {
    res.status(404).json({ msg: `Blog not found` })
  }
}

const deleteBlog = async (req, res) => {
  const userId = req.userId
  const id = req.params.id
  try {
    const blog = await Blog.findAll({
      where: {
        id: id,
      },
    })
    if (blog[0].authorId == userId) {
      await Blog.destroy({
        where: {
          id: id,
        },
      })
      res.status(200).json({ msg: `Blog with id ${id} is deleted` })
    } else {
      res.status(401).json({ msg: 'Unauthorized to perform this operation' })
    }
  } catch (error) {
    res.status(404).json({ msg: `Blog not found` })
  }
}
module.exports = {
  statusPage,
  getAllBlogs,
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
}
