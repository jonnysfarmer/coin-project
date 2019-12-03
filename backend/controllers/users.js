const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/enviroment')

function register(req, res) {
  User
    .create(req.body) 
    .then(() => res.status(200).json({ message: 'Thank you for registering' })) 
    .catch(err => {
      console.log(err)
      res.status(400).json({ message: 'Problem registering account', error: err.message })
    })
}

// login route -/login
// user supplies in body of request, email and password only
function login(req, res) {
  User
    .findOne({ email: req.body.email }) 
    .then(user => { 
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' }) 
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.status(202).json({ message: `Welcome Back ${user.firstname}`, token })
    }) 
    .catch(() => res.status(401).json({ message: 'Unauthorized' } ))
}

module.exports = {
  register,
  login
}