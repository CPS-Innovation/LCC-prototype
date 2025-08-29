const express = require('express');
const router = express.Router();
const version = 'version-9'

// Add your routes here - above the module.exports line


router.post('/B-off-system-MVP/create-case/01-register-case', function(req, res) {
    req.session.data.operationNameYesNo = req.body['operation-name-yes-no']
    req.session.data.suspectDetailsYesNo = req.body['suspect-details-yes-no']
    req.session.data.hearingDetailsYesNo = req.body['first-hearing-details']

    if (req.body['operation-name-yes-no'] === 'Yes') {
        req.session.data.operationName = req.body['operation-name']
    }

    if (req.body['first-hearing-details'] === 'Yes') {
        req.session.data.courtLocation = req.body['court-location']
        req.session.data.hearingDate = req.body['newCase_FirstHearing_Date']
    }

    req.session.data.operationNameYesNo = req.body['operation-name-yes-no']
    req.session.data.suspectDetailsYesNo = req.body['suspect-details-yes-no']
    req.session.data.hearingDetailsYesNo = req.body['first-hearing-details']

    console.log("Operation name yes / no:",req.session.data.operationNameYesNo)
    console.log("Operation name:",req.session.data.operationName)
    console.log("Suspect details yes / no:",req.session.data.suspectDetailsYesNo)
    console.log("Hearing details yes / no:",req.session.data.hearingDetailsYesNo)
    console.log("Court location:",req.session.data.courtLocation)
    console.log("Hearing date:",req.session.data.hearingDate)   

    res.redirect('/version-9/B-off-system-MVP/create-case/02-area')
})

router.post('/B-off-system-MVP/create-case/02-area', function(req, res) {
    req.session.data.area = req.body['docType-Area']
    console.log("Area:",req.session.data.area)
    res.redirect('/version-9/B-off-system-MVP/create-case/02A-case-details')
})

router.post('/B-off-system-MVP/create-case/02A-case-details', function(req, res) {
    console.log("Case details page submitted")

    req.session.data.localReference1 = req.body['local-reference-1']
    req.session.data.localReference2 = req.body['local-reference-2']
    console.log("Local reference 1:",req.session.data.localReference1)
    console.log("Local reference 2:",req.session.data.localReference2)  

    if (req.session.data.suspectDetailsYesNo === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/03A-add-suspect')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/05-monitoring-codes') 
    }    
})

router.post('/B-off-system-MVP/create-case/00-initial-checks', function(req, res) {

    if (req.body['initial-checks'] === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/01-case-details')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/00B-end-journey') 
    }    
})


router.post('/B-off-system-MVP/create-case/03A-add-suspect-start', function(req, res) {
    if (req.body['add-suspect'] === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/03A-add-suspect')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/03A-create-suspects') 
    }    
})

router.post('/B-off-system-MVP/create-case/03A-add-suspect', function(req, res) {
    count = req.session.data.suspectCount
    
    req.session.data.suspectType[count] = req.body['suspect-type']
    req.session.data.suspectId[count] = count

    if (req.body['suspect-type'] == 'Person') {
        req.session.data.suspectFirstName[count] = req.body['suspect-person-first-name']
        req.session.data.suspectLastName[count] = req.body['suspect-person-last-name']
        req.session.data.suspectDOB[count] = req.body['suspect-date-of-birth']
    }
    else {
        req.session.data.suspectCompanyName[count] = req.body['suspect-company-name']
    }
    
    req.session.data.suspectCount = count + 1
    
    res.redirect('/version-9/B-off-system-MVP/create-case/03A-suspect-summary')
})

// router.post('/B-off-system-MVP/create-case/03A-add-suspect', function(req, res) {
//     update = req.session.data.updateDefault
//     console.log("Update value 1st:", update)
//     update = req.body['update']
//     count  = req.session.data.suspectCount
//     console.log("Update value:",update)
//     console.log("Id value:", req.body['id'])
//     console.log("Suspect count:",count) 

//     // Check if this is an update
//     if (update != "No") { 
//         console.log("This is an update")
//         req.session.data.suspectType[update] = req.body['suspect-type']

//         if (req.body['suspect-type'] == 'Person') {
//             req.session.data.suspectFirstName[update] = req.body['suspect-person-first-name']
//             req.session.data.suspectLastName[update] = req.body['suspect-person-last-name']
//             req.session.data.suspectDOB[update] = req.body['suspect-date-of-birth']
//         }
//         else {
//             req.session.data.suspectCompanyName[update] = req.body['suspect-company-name']
//         }
        
//         req.session.data.update = "No"
//     }
//     else {
//         console.log("This is a new suspect")
//         req.session.data.suspectType[count] = req.body['suspect-type']
//         req.session.data.suspectId[count] = count

//         if (req.body['suspect-type'] == 'Person') {
//             req.session.data.suspectFirstName[count] = req.body['suspect-person-first-name']
//             req.session.data.suspectLastName[count] = req.body['suspect-person-last-name']
//             req.session.data.suspectDOB[count] = req.body['suspect-date-of-birth']
//         }
//         else {
//             req.session.data.suspectCompanyName[count] = req.body['suspect-company-name']
//         }
        
//         req.session.data.suspectCount = count + 1
//     }
    
//     res.redirect('/version-9/B-off-system-MVP/create-case/03A-suspect-summary')
// })


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