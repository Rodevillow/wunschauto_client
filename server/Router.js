const Router = require('express')
const router = new Router()
const controller = require('./Controller')

router.get('/navbar', controller.navBar)
router.get('/home', controller.sectionHome)
router.get('/credentials', controller.sectionCredentials)
router.get('/benefits', controller.sectionBenefits)

module.exports = router