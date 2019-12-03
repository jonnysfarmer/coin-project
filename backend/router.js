
const router = require('express').Router()
const portfolios = require('./controllers/portfolios')
const users = require('./controllers/users')
// Secure route is our custom middleware
// const secureRoute = require('./lib/secureRoute')

//All these are secure Routes


router.route('/portfolio')
  .get(portfolios.index) // WORKS
  .post(portfolios.create)

//can only get these if you are the specific user
router.route('/portfolio/:id')
  .get(portfolios.show) // works
  .put(portfolios.update)
  .delete(portfolios.remove)

router.route('/portfolio/:id/coins')
  .get(portfolios.showCoins) // works
  .post(portfolios.addCoins) // works



router.route('/portfolio/:id/:coinId')
  .delete(portfolios.deleteCoins)
  .put(portfolios.updateCoins)




//------USER

//No need for either of these to be secure

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router
