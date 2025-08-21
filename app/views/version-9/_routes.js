const express = require('express');
const router = express.Router();
const version = 'version-9'

// Add your routes here - above the module.exports line


router.post('/B-off-system-MVP/create-case/03A-add-suspect-start', function(req, res) {
    if (req.body['addSuspect'] === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/03A-add-suspect-name')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/03A-create-suspects') 
    }    
})


router.post('/B-off-system-MVP/create-case/03A-add-suspect', function(req, res) {
    console.log('Test')
    count = req.session.data.suspectCount
    
    req.session.data.suspectType[count] = req.body['suspect-type']
    req.session.data.suspectId[count] = count

    if (req.body['suspect-type'] == 'Person') {
        req.session.data.suspectFirstName[count] = req.body['suspect-person-first-name']
        req.session.data.suspectLastName[count] = req.body['suspect-person-last-name']
        // req.session.data.suspectDOB[count] = req.body['suspect-person-DOB']
    }
    else {
        req.session.data.suspectCompanyName[count] = req.body['suspect-company-name']
    }
    
    req.session.data.suspectCount = count + 1
    
    res.redirect('/version-9/B-off-system-MVP/create-case/03A-suspect-summary')
})

router.post('/B-off-system-MVP/create-case/03A-suspect-summary', function(req, res) {
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/03A-add-suspect')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/05-monitoring-codes') 
    }    
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