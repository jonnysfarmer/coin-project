
const router = require('express').Router()
const portfolios = require('./controllers/portfolios')
const users = require('./controllers/users')
// Secure route is our custom middleware
// const secureRoute = require('./lib/secureRoute')

//All these are secure Routes

// DONE SO FAR  index, create
router.route('/portfolio')
  .get(portfolios.index) //this is just for testing!
  .post(portfolios.create)

//can only get these if you are the specific user
router.route('/portfolio/:id')
  .get(portfolios.show)
  .put(portfolios.update)
  .delete(portfolios.remove)

router.route('/portfolio/:id/coins')
  .get(portfolios.showCoins)
  .put(portfolios.updateCoins)
  .post(portfolios.addCoins)

router.route('/animals/:id/comments/:commentId')
  .delete(portfolios.deleteCoins)




//------USER

//No need for either of these to be secure

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)
