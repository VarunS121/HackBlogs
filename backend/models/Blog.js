// const mongoose = require('mongoose')
// const BlogSchema = mongoose.Schema({
//   title: {
//     type: String,
//     require: true,
//   },
// })
// module.exports = mongoose.model('Blog', BlogSchema)

//psql models
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../db/psql')
const User = require('./User')

class Blog extends Model {}

Blog.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
  },
  { sequelize, modelName: 'Blog', tableName: 'Blogs' }
)

Blog.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
  as: 'author',
})
// ;(async () => {
//   await sequelize.sync({ force: true })
//   console.log('Synced DB')
// })()
module.exports = Blog
