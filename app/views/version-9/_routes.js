const express = require('express');
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

    console.log("Operation name yes / no:",req.session.data.operationNameYesNo)
    console.log("Operation name:",req.session.data.operationName)
    console.log("Suspect details yes / no:",req.session.data.suspectDetailsYesNo)
    console.log("Hearing details yes / no:",req.session.data.firstHearingDetailsYesNo)
    console.log("Court location:",req.session.data.courtLocation)
    console.log("Hearing date:",req.session.data.firstHearingDate)   

    res.redirect('/version-9/B-off-system-MVP/create-case/02-case-details')
})

router.post('/B-off-system-MVP/create-case/02-area', function(req, res) {
    req.session.data.area = req.body['docType-Area']
    console.log("Area:",req.session.data.area)
    res.redirect('/version-9/B-off-system-MVP/create-case/02A-case-details')
})

// Case details page
router.post('/B-off-system-MVP/create-case/02-case-details', function(req, res) {
    console.log("Case details page submitted")

    req.session.data.area = req.body['docType-Area']
    req.session.data.localReference1 = req.body['local-reference-1']
    req.session.data.localReference2 = req.body['local-reference-2']
    console.log("Local reference 1:",req.session.data.localReference1)
    console.log("Local reference 2:",req.session.data.localReference2)  

    if (req.session.data.suspectDetailsYesNo === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/03A-add-suspect')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/05-complexity-weight') 
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



// Suspects
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
    
    res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
})


router.post('/B-off-system-MVP/create-case/03-edit-suspect', function(req, res) {
    req.session.data.editSuspect = req.body['idSuspect'] + 1
    console.log("Edit suspect ID:",req.session.data.editSuspect)
    res.redirect('/version-9/B-off-system-MVP/create-case/03A-add-suspect')
})

router.post('/B-off-system-MVP/create-case/03B-suspect-summary', function(req, res) {
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/03A-add-suspect')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/05-complexity-weight') 
    }    
})

router.post('/B-off-system-MVP/create-case/03-edit-suspect', function(req, res) {
    req.session.data.editSuspect = req.body['edit-suspect']
    console.log("Edit suspect ID:",req.session.data.editSuspect)
    res.redirect('/version-9/B-off-system-MVP/create-case/03A-add-suspect')
})


// End of suspects


router.post('/B-off-system-MVP/create-case/05-complexity-weight', function(req, res) {
    req.session.data.caseComplexity = req.body['newCase_Complexity']
    req.session.data.caseWeight = req.body['newCase_CaseWeight']
    res.redirect('/version-9/B-off-system-MVP/create-case/05A-monitoring-codes') 
})

router.post('/B-off-system-MVP/create-case/05A-monitoring-codes', function(req, res) {
    res.redirect('/version-9/B-off-system-MVP/create-case/06-cps-staff') 
})

router.post('/B-off-system-MVP/create-case/06-cps-staff', function(req, res) {
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


    // If user is LCC check if there are materials. If not, go to check your answers.
    if (req.session.data.userType === 'LCC') {
        res.redirect('/version-9/B-off-system-MVP/create-case/07-want-to-create-folders')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/08-check-your-answers') 
    }    
})

// Wanted folders
router.post('/B-off-system-MVP/create-case/07-want-to-create-folders', function(req, res) {
    req.session.data.wantedFolders = req.body['want-folders']
    if (req.session.data.wantedFolders === 'Yes') {
        req.session.data.wantedEgressFolder = req.body['wanted-egress-folder']
        req.session.data.wantedDriveFolder = req.body['wanted-drive-folder']
        if (req.session.data.wantedEgressFolder === 'Egress folder') {
            res.redirect('/version-9/B-off-system-MVP/create-case/07A-create-egress-folder')
        }
        else if (req.session.data.wantedDriveFolder === 'Shared drive folder') {
            res.redirect('/version-9/B-off-system-MVP/create-case/08-check-answers') 
        }
        else {
            res.redirect('/version-9/B-off-system-MVP/create-case/08-check-answers') 
        }
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/08-check-answers') 
    }    
})

router.post('/B-off-system-MVP/create-case/07A-create-egress-folder', function(req, res) {
    req.session.data.egressTemplate = req.body['egress-template']
    console.log("Egress folder created")
    res.redirect('/version-9/B-off-system-MVP/create-case/08-check-answers') 
})


router.post('/B-off-system-MVP/create-case/07A-pre-existing-material', function(req, res) {
    req.session.data.existingEgressFolder = req.body['existing-egress-folder']
    req.session.data.existingDriveFolder = req.body['existing-drive-folder']
    if (req.body['existing-egress-folder'] === 'Egress folder') {
        res.redirect('/version-9/B-off-system-MVP/04A-egress-files')
    }
    else if (req.body['existing-drive-folder'] === 'Shared drive folder') {
        res.redirect('/version-9/B-off-system-MVP/05A-p-drive-files') 
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/08-check-your-answers') 
    }    
})


module.exports = router