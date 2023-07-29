const express = require('express')
// const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
require('./db/psql')
const port = process.env.PORT || 5000

const blogRouter = require('./routes/blogRoutes')
const userRouter = require('./routes/userRoutes')

app.use(express.json())
app.use('/', blogRouter)
app.use('/user', userRouter)

app.use(function (req, res) {
  res.status(404).json({ msg: 'URL Not Found' })
})

// mongoose
//   .connect('mongodb://localhost:27017/hackblogs', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('Connected to DB....')
//     }
//   })

app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
)
