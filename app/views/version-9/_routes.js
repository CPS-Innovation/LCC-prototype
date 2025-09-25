const express = require('express');
const { editSuspect } = require('../../data/session-data-defaults');
const router = express.Router();
const version = 'version-9'

// Add your routes here - above the module.exports line


// Register a case - start of journey
router.post('/B-off-system-MVP/create-case/01-register-case', function(req, res) {
    req.session.data.operationNameYesNo = req.body['operation-name-yes-no']
    req.session.data.suspectDetailsYesNo = req.body['suspect-details-yes-no']
    req.session.data.firstHearingDetailsYesNo = req.body['first-hearing-details']

    if (req.session.data.operationNameYesNo === 'Yes') {
        req.session.data.operationName = req.body['operation-name']
    }

    if (req.session.data.firstHearingDetailsYesNo === 'Yes') {
        req.session.data.courtLocation = req.body['court-location']
        req.session.data.firstHearingDate = req.body['newCase_FirstHearing_Date']
    }

    res.redirect('/version-9/B-off-system-MVP/create-case/02-area')
})

// Area page
router.post('/B-off-system-MVP/create-case/02-area', function(req, res) {
    req.session.data.area = req.body['docType-Area']
    res.redirect('/version-9/B-off-system-MVP/create-case/03-case-details')
})

// Case details page
router.post('/B-off-system-MVP/create-case/03-case-details', function(req, res) {
    console.log("Case details page submitted")

    req.session.data.localReference1 = req.body['local-reference-1']
    req.session.data.localReference2 = req.body['local-reference-2']

    if (req.session.data.suspectDetailsYesNo === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/04A-add-suspect')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/05-complexity-weight') 
    }    
})


// Suspects
// Add suspects
router.post('/B-off-system-MVP/create-case/04A-add-suspect', function(req, res) {
    count = req.session.data.suspectCount
    
    req.session.data.suspectType[count] = req.body['suspect-type']
    req.session.data.suspectId[count] = count

    if (req.body['suspect-type'] == 'Person') {
        req.session.data.suspectFirstName[count] = req.body['suspect-person-first-name']
        req.session.data.suspectLastName[count] = req.body['suspect-person-last-name']
        req.session.data.suspectDayBirth[count] = req.body['date-of-birth-day']
        req.session.data.suspectMonthBirth[count] = Number(req.body['date-of-birth-month'])
        req.session.data.suspectYearBirth[count] = req.body['date-of-birth-year'] 
    }
    else {
        req.session.data.suspectCompanyName[count] = req.body['suspect-company-name']
    }
    
    req.session.data.suspectCount = count + 1
    
    res.redirect('/version-9/B-off-system-MVP/create-case/04B-suspect-summary')
})
// End of add suspects

// Suspect summary
router.post('/B-off-system-MVP/create-case/04B-suspect-summary', function(req, res) {
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/04A-add-suspect')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/05-complexity-weight') 
    }    
})
// End of suspect summary


// Edit suspect
router.post('/B-off-system-MVP/create-case/04-edit-suspect', function(req, res) {
    console.log("Edit suspect ID:",req.session.data.editSuspect)
    console.log("Display suspect ID:",req.session.data.displaySuspect)

    var x = Number(req.session.data.editSuspect)

    if (req.body['suspect-type'] == 'Person') {
        req.session.data.suspectFirstName[x] = req.body['suspect-person-first-name']
        req.session.data.suspectLastName[x] = req.body['suspect-person-last-name']
        // req.session.data.suspectDOB[x] = req.body['suspect-date-of-birth']
        req.session.data.suspectDayBirth[x] = req.body['date-of-birth-day']
        req.session.data.suspectMonthBirth[x] = Number(req.body['date-of-birth-month'])
        req.session.data.suspectYearBirth[x] = req.body['date-of-birth-year'] 
    }
    else {
        req.session.data.suspectCompanyName[x] = req.body['suspect-company-name']
    }

    req.session.data.displaySuspect = 999
    req.session.data.editSuspect = 999

    res.redirect('/version-9/B-off-system-MVP/create-case/04B-suspect-summary')
})

router.post('/B-off-system-MVP/create-case/04-edit-suspect-router', function(req, res) {
    req.session.data.editSuspect = Number(req.body['edit-suspect'])
    req.session.data.displaySuspect = Number(req.body['edit-suspect']) + 1
    console.log("Edit suspect ID:",req.session.data.editSuspect)
    console.log("Display suspect ID:",req.session.data.displaySuspect)
    res.redirect('/version-9/B-off-system-MVP/create-case/04A-add-suspect')
})
// End of edit suspect

// router.post('/B-off-system-MVP/create-case/03-edit-suspect', function(req, res) {
//     req.session.data.editSuspect = req.body['edit-suspect']
//     console.log("Edit suspect ID:",req.session.data.editSuspect)
//     res.redirect('/version-9/B-off-system-MVP/create-case/03A-add-suspect')
// })


// End of suspects


router.post('/B-off-system-MVP/create-case/05-complexity-weight', function(req, res) {
    req.session.data.caseComplexity = req.body['newCase_Complexity']
    req.session.data.caseWeight = req.body['newCase_CaseWeight']
    res.redirect('/version-9/B-off-system-MVP/create-case/06-monitoring-codes') 
})

router.post('/B-off-system-MVP/create-case/06-monitoring-codes', function(req, res) {
    res.redirect('/version-9/B-off-system-MVP/create-case/07-cps-staff') 
})

// CPS and police staff
router.post('/B-off-system-MVP/create-case/07-cps-staff', function(req, res) {
    console.log("User type:",req.session.data.userType)
    req.session.data.prosecutorCaseworkerYesNo = req.body['prosecutor-caseworker-yes-no']
    req.session.data.prosecutor = req.body['newCase_Prosecutor']
    req.session.data.caseworker = req.body['newCase_Caseworker']
    req.session.data.policeYesNo = req.body['police-yes-no']
    req.session.data.policeRank = req.body['newCase_Police_Rank']
    req.session.data.policeFirstName = req.body['newCase_Police_FirstName']
    req.session.data.policeLastName = req.body['newCase_Police_LastName']
    req.session.data.policeShoulderNumber = req.body['newCase_Police_Number']
    req.session.data.policeUnit = req.body['newCase_Police_Unit']       


    res.redirect('/version-9/B-off-system-MVP/create-case/08-check-answers')


    // If user is LCC check if there are materials. If not, go to check your answers.
    // if (req.session.data.userType === 'LCC') {
    //     res.redirect('/version-9/B-off-system-MVP/create-case/07-want-to-create-folders')
    // }
    // else {
    //     res.redirect('/version-9/B-off-system-MVP/create-case/08-check-your-answers') 
    // }    
})

// Materials
router.post('/B-off-system-MVP/create-case/09-confirmation', function(req, res) {
    req.session.data.addMaterials = req.body['add-materials']
    if (req.session.data.addMaterials === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/04A-create-or-link-folders')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/03-case-overview') 
    }    
})


router.post('/B-off-system-MVP/04A-create-or-link-folders', function(req, res) {
    req.session.data.foldersAction = req.body['folders']
    if (req.session.data.foldersAction === 'Create folders') {
        req.session.data.newEgressFolder = req.body['new-egress-folder']
        req.session.data.newDriveFolder = req.body['new-drive-folder']
        if (req.session.data.newEgressFolder === 'Egress folder') {
            res.redirect('/version-9/B-off-system-MVP/04A-create-egress-folder')
        }
        else if (req.session.data.wantedDriveFolder === 'Shared drive folder') {
            res.redirect('/version-9/B-off-system-MVP/create-case/08-check-answers') 
        }
        else {
            res.redirect('/version-9/B-off-system-MVP/create-case/08-check-answers') 
        }
    }
    else {
        req.session.data.existingEgressFolder = req.body['linked-egress-folder']
        req.session.data.existingDriveFolder = req.body['linked-drive-folder']
        if (req.body['linked-egress-folder'] === 'Egress folder') {
            res.redirect('/version-9/B-off-system-MVP/04A-egress-files')
        }
        else if (req.body['linked-drive-folder'] === 'Shared drive folder') {
            res.redirect('/version-9/B-off-system-MVP/05A-p-drive-files') 
        }    
    }
})

router.post('/B-off-system-MVP/04A-create-egress-folder', function(req, res) {
    req.session.data.egressTemplate = req.body['egress-template']
    res.redirect('/version-9/B-off-system-MVP/03-case-overview') 
})
// End of materials


// router.post('/B-off-system-MVP/create-case/07A-pre-existing-material', function(req, res) {
//     req.session.data.existingEgressFolder = req.body['existing-egress-folder']
//     req.session.data.existingDriveFolder = req.body['existing-drive-folder']
//     if (req.body['existing-egress-folder'] === 'Egress folder') {
//         res.redirect('/version-9/B-off-system-MVP/04A-egress-files')
//     }
//     else if (req.body['existing-drive-folder'] === 'Shared drive folder') {
//         res.redirect('/version-9/B-off-system-MVP/05A-p-drive-files') 
//     }
//     else {
//         res.redirect('/version-9/B-off-system-MVP/create-case/08-check-your-answers') 
//     }    
// })


module.exports = router