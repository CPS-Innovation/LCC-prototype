const express = require('express');
const router = express.Router();
const version = 'monica'

// Add your routes here - above the module.exports line


router.post('/B-off-system-MVP/create-case/03A-add-suspect', function(req, res) {
    console.log("Monica in local routes")
    if (req.body['addSuspect'] === 'Yes') {
        res.redirect('/monica/B-off-system-MVP/create-case/03A-add-suspect-name')
    }
    else {
        res.redirect('/monica/B-off-system-MVP/create-case/03A-create-suspects') 
    }    
})


router.post('/B-off-system-MVP/create-case/03A-add-suspect-name', function(req, res) {
    count = req.session.data.suspectCount
    
    req.session.data.suspectId[count] = count
    req.session.data.suspectType[count] = req.body['suspect-type']

    if (req.body['suspect-type'] == 'Person') {
        req.session.data.suspectFirstName[count] = req.body['suspect-first-name']
        req.session.data.suspectLastName[count] = req.body['suspect-last-name']
    }
    else {
        req.session.data.suspectCompanyName[count] = req.body['suspect-company-name']
    }
    
    req.session.data.suspectCount = count++

    res.redirect('/monica/B-off-system-MVP/create-case/03A-suspects-summary')
})



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


module.exports = router