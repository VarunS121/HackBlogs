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
        is: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i,
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
