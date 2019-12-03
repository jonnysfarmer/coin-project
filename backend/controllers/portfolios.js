const Portfolio = require('../Modules/Portfolio')

function create(req, res) {
  req.body.user = req.currentUser //this links to the secure route.
  Portfolio.create(req.body)
    .then(porfolio => res.status(201).json(porfolio))
    .catch(err => res.status(400).json({ message: err }))
}

function index(req, res) {
  Portfolio
    .find()
    .populate('user') //this bascially means it also shows the object user.  Without this, its just the ID!
    .then(portfolio => res.status(200).json(portfolio))
    .catch(err => res.status(400).json({ message: err }))
}



module.exports = {
  create,
  index
}