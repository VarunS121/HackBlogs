const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize('postgres://varun:1209@localhost:5432/hbtest')
const sequelize = new Sequelize(
  'hbtest',
  process.env.MYSQL_USER,
  process.env.MYSQL_PASS,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
)

const connect = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
connect()

module.exports = sequelize
