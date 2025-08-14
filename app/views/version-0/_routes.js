const express = require('express');
const router = express.Router();
const version = 'version-0'

// Add your routes here - above the module.exports line

module.exports = router

// // Version 3 routes
//  router.post('/' + version + '/3-case-materials/change-category', function (req, res) {
//     if(req.query.returnUrl) {
//         res.redirect(req.query.returnUrl)
//     } else {
// 	    res.redirect('/' + version + '/3-case-materials/case-materials-recategorised')
//     }
// })

// router.post('/3-case-materials/changeStatus', function (req, res) {
//     res.redirect('/' + version + '/3-case-materials/D-case-materials-status')
// })

// router.post('/' + version + '/3-case-materials/case-materials', function (req, res) {
//     if(req.query.returnUrl) {
//         res.redirect(req.query.returnUrl)
//     } else {
//     res.redirect('/' + version + '/3-case-materials/case-materials-renamed')
//     }
// })
