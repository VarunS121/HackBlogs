const mongoose = require('mongoose')
const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model('Blog', BlogSchema)
