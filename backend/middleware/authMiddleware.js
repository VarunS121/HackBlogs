const jwt = require('jsonwebtoken')
const User = require('../models/User')

const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1]
  if (!token) return res.status(401).json({ error: 'Access denied' })
  try {
    const decoded = jwt.verify(token, 'secret')
    const user = await User.findOne({
      where: { username: decoded.username },
    })
    req.userId = user.id
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid Token' })
  }
}

module.exports = verifyToken
