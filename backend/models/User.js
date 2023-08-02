const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../db/psql')
const bcrypt = require('bcryptjs')

class User extends Model {
  validatePass(pass) {
    return bcrypt.compare(pass, this.password)
  }
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[A-Za-z][A-Za-z0-9_.]{7,29}$/,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'User', tableName: 'Users' }
)

User.beforeSave(async (user, options) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPass = await bcrypt.hash(user.password, salt)
  user.password = hashedPass
})

module.exports = User
