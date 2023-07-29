const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { Op } = require('sequelize')

const Login = async (req, res) => {
  const { userCred, password } = req.body
  try {
    const user = await User.findOne({
      where: {
        [Op.or]: [{ username: userCred }, { email: userCred }],
      },
    })
    if (!user) return res.json(404).json({ message: 'User does not exist.' })
    const isPassword = await user.validatePass(password)
    if (!isPassword)
      return res.status(404).json({ message: 'Entered Wrong password' })
    const token = jwt.sign(
      { username: user.username, email: user.email },
      'secret',
      { expiresIn: '1h' }
    )
    res.status(200).json({ result: user, token })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: err })
  }
}

const SignUp = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const oldUser = await User.findOne({
      where: {
        [Op.or]: [{ username: username }, { email: email }],
      },
    })
    if (oldUser) return res.status(404).json({ message: 'User already exists' })
    const newUser = await User.create({
      username: username,
      email: email,
      password: password,
    })
    const token = jwt.sign({ username: username, email: email }, 'secret', {
      expiresIn: '1h',
    })
    res.status(200).json({ newUser: newUser, token })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: err })
    console.log(err)
  }
}

module.exports = { Login, SignUp }
