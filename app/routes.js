const express = require('express')
const router = new express.Router()

// Add your routes here - above the module.exports line

// router.post('/monica/B-off-system-MVP/create-case/03A-add-suspect-routes', function(req, res) {
//     console.log("Monica")
//     res.redirect('/monica/B-off-system-MVP/create-case/03A-add-suspect-name')
// })

// GET SPRINT NAME - useful for relative templates

// route middleware that will happen on every request
router.use('/', (req, res, next) => {
     res.locals.currentURL = req.originalUrl; //current screen
     res.locals.prevURL = req.get('Referrer'); // previous screen
     console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
     next();
});

///////////////////////////////////////// New router functionality /////////////////////////////////////////

// User Research and design versions
router.use('/version-0', require('./views/version-0/_routes'))
router.use('/version-1', require('./views/version-1/_routes'))
router.use('/version-2', require('./views/version-2/_routes'))
router.use('/version-3', require('./views/version-3/_routes'))
router.use('/version-4', require('./views/version-4/_routes'))
router.use('/version-5', require('./views/version-5/_routes'))
router.use('/version-6', require('./views/version-6/_routes'))
router.use('/version-7', require('./views/version-7/_routes'))
router.use('/version-8', require('./views/version-8/_routes'))
router.use('/monica', require('./views/monica/_routes.js'))


module.exports = router