const express = require('express');
const { editSuspect, chargeDescription, materials, victims } = require('../../data/session-data-defaults');
const router = express.Router();
const version = 'version-11'


// Make session data available in all Nunjucks templates as "data"
router.use((req, res, next) => {
  res.locals.data = req.session.data || {};
  next();
});



// Add your routes here - above the module.exports line


// Register a case - start of journey
router.post('/B-off-system-MVP/create-case/01-register-case', function(req, res) {
    // var errors = []
    // if (req.body['operation-name-yes-no'] === 'undefined') {
    //   errors.push({
    //   text: 'Enter their first names',
    //   href: '#first-names'
    //   })
    // }
    // if (req.body['suspect-details-yes-no'] === '') {
    //   errors.push({
    //   text: 'Enter their last names',
    //   href: '#last-names'
    //   })
    // }


    // if (errors.length === 0) {
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

        res.redirect('/version-11/B-off-system-MVP/create-case/02-area')
    // }
    // else {
    //     res.render('version-11/B-off-system-MVP/create-case/01-register-case', { 
    //         errors: errors
    //     })
    // }
})

// Area page
router.post('/B-off-system-MVP/create-case/02-area', function(req, res) {
    req.session.data.area = req.body['docType-Area']
    res.redirect('/version-11/B-off-system-MVP/create-case/02-case-details')
})

// Case details page
router.post('/B-off-system-MVP/create-case/02-case-details', function(req, res) {
    console.log("Case details page submitted")

//    req.session.data.area = req.body['docType-Area']
    req.session.data.URN1 = req.body['newCase_URN-A']
    req.session.data.URN2 = req.body['newCase_URN-B']
    req.session.data.URN3 = req.body['newCase_URN-C']
    req.session.data.URN4 = req.body['newCase_URN-D']
    req.session.data.registeringUnit = req.body['newCase_RegisteringUnit']
    req.session.data.WCU =  req.body['newCase_WCU']

    if (req.session.data.suspectDetailsYesNo === 'Yes') {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/05-complexity') 
    }    
})


// First hearing details
router.post('/B-off-system-MVP/create-case/02-first-hearing-details', function(req, res) {
    req.session.data.firstHearingDetailsYesNo = req.body['first-hearing-details']

    if (req.session.data.firstHearingDetailsYesNo === 'Yes') {
        req.session.data.courtLocation = req.body['court-location']
        req.session.data.firstHearingDate = req.body['newCase_FirstHearing_Date']
    }

    res.redirect('/version-11/B-off-system-MVP/create-case/05-complexity') 

})



// ************************************************** Suspects **************************************************
// Add suspects
router.post('/B-off-system-MVP/create-case/03-add-suspect', function(req, res) {
    count = req.session.data.suspectCount
    
    req.session.data.suspectType[count] = req.body['suspect-type']
    req.session.data.suspectId[count] = count
    req.session.data.aliasTempSuspectId = count

    if (req.body['suspect-type'] == 'Person') {
        req.session.data.suspectFirstName[count] = req.body['suspect-person-first-name']
        req.session.data.suspectLastName[count] = req.body['suspect-person-last-name']
        req.session.data.suspectDOB[count] = req.body['suspect-person-dob']
        req.session.data.suspectGender[count] = req.body['suspect-person-gender']
        req.session.data.suspectDisability[count] = req.body['suspect-person-disability']
        req.session.data.suspectReligion[count] = req.body['suspect-person-religion']
        req.session.data.suspectEthnicity[count] = req.body['suspect-person-ethnicity']
        req.session.data.suspectSDO[count] = req.body['suspect-person-sdo']
        req.session.data.suspectArrestSummons[count] = req.body['suspect-person-arrest-summons']
        req.session.data.suspectOffenderType[count] = req.body['suspect-person-offender-type']
        req.session.data.suspectAlias[count] = req.body['suspect-person-alias']
        console.log("Arrest summons:",req.session.data.suspectArrestSummons[count])
        console.log("Alias:",req.session.data.suspectAlias[count])
        console.log("SDO:",req.session.data.suspectSDO[count])
    }           
    else {
        req.session.data.suspectCompanyName[count] = req.body['suspect-company-name']
    }
    
    req.session.data.suspectDetailsCount = count
    req.session.data.suspectCount = count + 1

    if (req.session.data.suspectCount > 0) {
        req.session.data.suspectDetailsYesNo = 'Yes'
    }

    id = req.session.data.suspectDetailsCount

    if (req.session.data.suspectDOB[id] != undefined) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-dob')
    }
    else if (req.session.data.suspectGender[id] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-gender')
    }
    else if (req.session.data.suspectDisability[id] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[id] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[id] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[id] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[id] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[id] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[id] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
    }
    
    // res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
})


// Suspect details – date of birth
router.post('/B-off-system-MVP/create-case/03-suspect-details-dob', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectDayBirth[count] = req.body['date-of-birth-day']
    req.session.data.suspectMonthBirth[count] = Number(req.body['date-of-birth-month'])
    req.session.data.suspectYearBirth[count] = req.body['date-of-birth-year'] 

    if (req.session.data.suspectGender[count] != undefined) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-gender')
    }
    else if (req.session.data.suspectDisability[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – gender
router.post('/B-off-system-MVP/create-case/03-suspect-details-gender', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectGender[count] = req.body['gender']

    if (req.session.data.suspectDisability[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – disability
router.post('/B-off-system-MVP/create-case/03-suspect-details-disability', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectDisability[count] = req.body['disability']

    if (req.session.data.suspectReligion[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – religion
router.post('/B-off-system-MVP/create-case/03-suspect-details-religion', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectReligion[count] = req.body['religion']

    if (req.session.data.suspectEthnicity[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – ethnicity
router.post('/B-off-system-MVP/create-case/03-suspect-details-ethnicity', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectEthnicity[count] = req.body['ethnicity']

    if (req.session.data.suspectAlias[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Alias section
// Suspect details – add alias
router.post('/B-off-system-MVP/create-case/03-suspect-details-add-alias', function(req, res) {
    aliasCount = req.session.data.aliasCount
    
    req.session.data.aliasId[aliasCount] = aliasCount
    
    req.session.data.aliasFirstName[aliasCount] = req.body['alias-first-name']   
    req.session.data.aliasLastName[aliasCount] = req.body['alias-last-name']
    req.session.data.aliasSuspectID[aliasCount] = req.session.data.suspectDetailsCount

    console.log("Alias first name:",req.session.data.aliasFirstName[aliasCount])
    console.log("Alias last name:",req.session.data.aliasLastName[aliasCount])
    console.log("Alias count:",req.session.data.aliasCount)
    console.log("Alias suspect:",req.session.data.aliasSuspectID[aliasCount])
    console.log("Details count:",req.session.data.suspectDetailsCount)
    console.log("Test:",req.session.data.suspectDetailsCount)

    req.session.data.aliasCount = aliasCount + 1
//    req.session.data.suspectDetailsCount = aliasCount


    res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-alias-summary')
})

// Alias summary
router.post('/B-off-system-MVP/create-case/03-suspect-details-alias-summary', function(req, res) {
    count = req.session.data.suspectDetailsCount
    console.log("Alias summary - suspect count:",count)
    console.log("Arrest summons:",req.session.data.suspectArrestSummons[count])
    
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else {
        if (req.session.data.suspectSDO[count] != undefined ) {
            res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-sdo')
        }        
        else if (req.session.data.suspectArrestSummons[count] != undefined ) {
            res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
        }
        else if (req.session.data.suspectOffenderType[count] != undefined ) {
            res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-offender-type')
        }
        else {
            res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
        }            
    }    
})
// End of alias section


// Suspect details – SDO
router.post('/B-off-system-MVP/create-case/03-suspect-details-sdo', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectSDO[count] = req.body['sdo']

    if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – arrest summons
router.post('/B-off-system-MVP/create-case/03-suspect-details-arrest-summons', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectArrestSummons[count] = req.body['arrest-summons']

    if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – type of offender
router.post('/B-off-system-MVP/create-case/03-suspect-details-offender-type', function(req, res) {
    count = (req.session.data.suspectDetailsCount)
    
    req.session.data.suspectOffenderType[count] = req.body['offender-type']
    console.log("Offender type:", req.session.data.suspectOffenderType[count])

    if (req.session.data.suspectOffenderType[count] == 'Youth offender (YO)') {
        req.session.data.arrestDate[count] = req.body['arrest-date-yo']
    }
    else if (req.session.data.suspectOffenderType[count] == 'Both prolific priority offender (PPO) and prolific youth offender (PYO)') {
        req.session.data.arrestDate[count] = req.body['arrest-date-ppo-pyo']
    }
    else if (req.session.data.suspectOffenderType[count] == 'Prolific youth offender (PYO)') {
        req.session.data.arrestDate[count] = req.body['arrest-date-pyo']
    }


    
    res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
})


// End of add suspects


// Suspect summary
router.post('/B-off-system-MVP/create-case/03B-suspect-summary', function(req, res) {
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/04-want-to-add-charges') 
        // res.redirect('/version-11/B-off-system-MVP/create-case/05-complexity') 
    }    
})


// Edit suspect
router.post('/B-off-system-MVP/create-case/03-edit-suspect', function(req, res) {
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

    res.redirect('/version-11/B-off-system-MVP/create-case/03B-suspect-summary')
})
// End of suspect summary


router.post('/B-off-system-MVP/create-case/03-edit-suspect-router', function(req, res) {
    req.session.data.editSuspect = Number(req.body['edit-suspect'])
    req.session.data.displaySuspect = Number(req.body['edit-suspect']) + 1
    console.log("Edit suspect ID:",req.session.data.editSuspect)
    console.log("Display suspect ID:",req.session.data.displaySuspect)
    res.redirect('/version-11/B-off-system-MVP/create-case/03-add-suspect')
})
// End of edit suspect

// ************************************************** End of suspects **************************************************



// ************************************************** Start of charges **************************************************

// Want to add charges
router.post('/B-off-system-MVP/create-case/04-want-to-add-charges', function(req, res) {
    req.session.data.wantToAddCharges = req.body['add-charges']
    console.log("Want to add charges:",req.session.data.wantToAddCharges)
    console.log("Suspect count:",req.session.data.suspectCount)
    if (req.session.data.wantToAddCharges === 'Yes') {
        if (req.session.data.suspectCount === 1) {
            req.session.data.chargeSuspectId[0] = 0
            console.log("Charge suspect id:",req.session.data.chargeSuspectId[0])
            res.redirect('/version-11/B-off-system-MVP/create-case/04-charges-offence-search') 
        }
        else {
            res.redirect('/version-11/B-off-system-MVP/create-case/04-add-charges-suspect')
        }
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/05-complexity') 
    }    
})


// Add charges - select suspect
router.post('/B-off-system-MVP/create-case/04-add-charges-suspect', function(req, res) {
    count = req.session.data.chargeCount

    req.session.data.chargeSuspectId[count] = req.body['suspect-charges'] 
    if (req.body['suspect-charges'] == 'Suspect not listed') {
        req.session.data.chargeSuspectId[count] = 'Suspect not listed'
    }
    else {
        req.session.data.currentSuspectId = Number(req.session.data.chargeSuspectId[count])
    }
    // console.log("Charge suspect id:",req.session.data.chargeSuspectId[count])

    if (req.session.data.chargeSuspectId[count] == 'Suspect not listed') {
        res.redirect('/version-11/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/04-charges-offence-search')
    }
})

router.post('/B-off-system-MVP/create-case/add-another-charge', function(req, res) {
    // Preset or reset pre-charge info
    req.session.data.preCharge = 'No'
    console.log("Pre-charge set to:",req.session.data.preCharge)

    count = req.session.data.chargeCount
    req.session.data.chargeSuspectId[count] = req.body['add-charge-suspect-id']
    req.session.data.currentSuspectId = req.body['add-charge-suspect-id']
    console.log("Charge suspect id:",req.session.data.chargeSuspectId[count])
    res.redirect('/version-11/B-off-system-MVP/create-case/04-charges-offence-search') 
})




// Add charges - offence search
router.post('/B-off-system-MVP/create-case/04-charges-offence-search', function(req, res) {
    count = req.session.data.chargeCount
    req.session.data.chargeSearch = req.body['charge-search']

    req.session.data.currentResultsId = req.session.data.resultsId
    req.session.data.currentResultsChargeCode = req.session.data.resultsChargeCode
    req.session.data.currentResultsChargeDescription = req.session.data.resultsChargeDescription
    req.session.data.currentResultsStatute = req.session.data.resultsStatute
    req.session.data.currentResultsSection = req.session.data.resultsSection
    req.session.data.currentResultsFromDate = req.session.data.resultsFromDate
    req.session.data.currentResultsToDate = req.session.data.resultsToDate


    if (req.body['charge-search'].includes("Terror") || req.body['charge-search'].includes("terror")) {
        req.session.data.currentResultsId = req.session.data.resultsIdTerrorism
        req.session.data.currentResultsChargeCode = req.session.data.resultsChargeCodeTerrorism
        req.session.data.currentResultsChargeDescription = req.session.data.resultsChargeDescriptionTerrorism
        req.session.data.currentResultsStatute = req.session.data.resultsStatuteTerrorism
        req.session.data.currentResultsSection = req.session.data.resultsSectionTerrorism
        req.session.data.currentResultsFromDate = req.session.data.resultsFromDateTerrorism
        req.session.data.currentResultsToDate = req.session.data.resultsToDateTerrorism
    }
    else if (req.body['charge-search'].includes("CD") || req.body['charge-search'].includes("cd") || 'charge-search'.includes("Criminal") || req.body['charge-search'].includes("criminal") || req.body['charge-search'].includes("arson") || req.body['charge-search'].includes("Arson")) {
        req.session.data.currentResultsId = req.session.data.resultsId
        req.session.data.currentResultsChargeCode = req.session.data.resultsChargeCode
        req.session.data.currentResultsChargeDescription = req.session.data.resultsChargeDescription
        req.session.data.currentResultsStatute = req.session.data.resultsStatute
        req.session.data.currentResultsSection = req.session.data.resultsSection
        req.session.data.currentResultsFromDate = req.session.data.resultsFromDate
        req.session.data.currentResultsToDate = req.session.data.resultsToDate
    }
    else if (req.body['charge-search'].includes("fraud") || req.body['charge-search'].includes("aud")) {
        req.session.data.currentResultsId = req.session.data.resultsIdFraud
        req.session.data.currentResultsChargeCode = req.session.data.resultsChargeCodeFraud
        req.session.data.currentResultsChargeDescription = req.session.data.resultsChargeDescriptionFraud
        req.session.data.currentResultsStatute = req.session.data.resultsStatuteFraud
        req.session.data.currentResultsSection = req.session.data.resultsSectionFraud
        req.session.data.currentResultsFromDate = req.session.data.resultsFromDateFraud
        req.session.data.currentResultsToDate = req.session.data.resultsToDateFraud
    }
  

    res.redirect('/version-11/B-off-system-MVP/create-case/04-charges-offence-search-results')
})

// Add charges - offence search results
router.post('/B-off-system-MVP/create-case/04-charges-offence-search-results', function(req, res) {
    count = req.session.data.chargeCount
    req.session.data.chargeCode[count] = req.session.data.currentResultsChargeCode[req.body['add-charge']]
    console.log("req.session.data.chargeCode[count]:", req.session.data.chargeCode[count])
    console.log("Count:", count)
    console.log("req.body['add-charge']:", req.body['add-charge'])
    
    req.session.data.currentChargeId = req.body['add-charge']

    req.session.data.chargeDescription[count] = req.session.data.currentResultsChargeDescription[req.session.data.currentChargeId]
    console.log("req.session.data.chargeDescription[count]:", req.session.data.chargeDescription[count])

    res.redirect('/version-11/B-off-system-MVP/create-case/04-add-charges')
})


// Add charges 
router.post('/B-off-system-MVP/create-case/04-add-charges', function(req, res) {
    count = req.session.data.chargeCount
    console.log("Charge count:",count)
    
    req.session.data.chargeId[count] = count
    // console.log("Charge id:",req.session.data.chargeId[count])

    count = Number(req.session.data.chargeCount)

    console.log("Charge count:", count)
    console.log("Current suspect id:",req.session.data.currentSuspectId)

    // If only 1 suspect and first charge
    if (req.session.data.suspectCount === 1) {
        console.log("Only 1 suspect")
        req.session.data.currentSuspectId = 0 
        req.session.data.chargeSuspectId[count] = 0
    }

    // req.session.data.chargeCode[count] = req.body['newChargeCode']
    // req.session.data.chargeDescription[count] = req.body['newCharge_Description']
    // Dates
    req.session.data.chargeFromDay[count] = req.body['addCharge_Form_Date-Day']
    req.session.data.chargeFromMonth[count] = req.body['addCharge_Form_Date-Month']
    req.session.data.chargeFromYear[count] = req.body['addCharge_Form_Date-Year']
    req.session.data.chargeToDay[count] = req.body['addCharge_Form_Date-Day_2']
    req.session.data.chargeToMonth[count] = req.body['addCharge_Form_Date-Month_2']
    req.session.data.chargeToYear[count] = req.body['addCharge_Form_Date-Year_2']
//    req.session.data.chargeComments[count] = req.body['newCharge_Comment']
    // req.session.data.chargeVictimYesNo[count] = req.body['newCharge_Victim_YesNo']

    // Victim
    req.session.data.chargeVictimFirstName[count] = req.body['newCharge_Victim_FirstName']
    req.session.data.chargeVictimLastName[count] = req.body['newCharge_Victim_SurnameName']
    req.session.data.chargeVictimVulnerable[count] = req.body['newCharge_Vulnerable']
    req.session.data.chargeVictimIntimidated[count] = req.body['newCharge_Intimidated']
    req.session.data.chargeVictimWitness[count] = req.body['charge-victim-witness']


    // Offence address
    // req.session.data.offenceAddress1[count] = req.body['addressLine1']
    // req.session.data.offenceAddress2[count] = req.body['addressLine2']
    // req.session.data.offenceTown[count] = req.body['addressTown']
    // req.session.data.offencePostcode[count] = req.body['addressPostcode']
    // req.session.data.offenceCountry[count] = req.body['docType-Country']

    req.session.data.chargedWithAdult[count] = req.body['charged-with-adult']

    console.log("Charge id:",req.session.data.chargeId[count])


    req.session.data.chargeCount = count + 1
    console.log("Charge count 2:",req.session.data.chargeCount)
    // console.log("Grouped:",req.session.data.grouped)

    if (req.body['newCharge_Victim_YesNo'] === 'Yes') {
        res.redirect('/version-11/B-off-system-MVP/create-case/04-add-charges-victim')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/04-charges-summary')
    }

})

// Charges victim
router.post('/B-off-system-MVP/create-case/04-add-charges-victim', function(req, res) {
    var count = req.session.data.chargeCount - 1

    if (req.session.data.victims.length == 1 || req.body['existing-victim'] == 'new-victim') {
        req.session.data.chargeVictimId[count] = req.session.data.victims.length
        req.session.data.countVictims = req.session.data.victims.length
        req.session.data.victims.push({
            id: req.session.data.victims.length,
            firstName: req.body['newCharge_Victim_FirstName'],
            lastName: req.body['newCharge_Victim_SurnameName'],
            vulnerable: req.body['newCharge_Vulnerable'],
            intimidated: req.body['newCharge_Intimidated'],
            witness: req.body['charge-victim-witness']
        });
    }
    else {
        req.session.data.chargeVictimId[count] = req.body['existing-victim']
    }

    console.log("Victims:", req.session.data.victims)
    console.log("Charge victim id:",req.session.data.chargeVictimId[count])

    res.redirect('/version-11/B-off-system-MVP/create-case/04-charges-summary')
})




// Charges summary
router.post('/B-off-system-MVP/create-case/04-charges-summary', function(req, res) {
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/version-11/B-off-system-MVP/create-case/04-add-charges-suspect')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/create-case/02-first-hearing-details') 
    }    

})

router.get('/B-off-system-MVP/create-case/04-charges-summary', function(req, res) {
    res.render('version-11/B-off-system-MVP/create-case/04-charges-summary', {
        grouped: req.session.data.grouped
    });
})

// ************************************************** End of charges **************************************************



// Complexity 
router.post('/B-off-system-MVP/create-case/05-complexity', function(req, res) {
    req.session.data.caseComplexity = req.body['newCase_Complexity']
    // req.session.data.caseWeight = req.body['newCase_CaseWeight']

    console.log("Charge suspect IDs:",req.session.data.currentSuspectId)
//    let codes = req.session.data.newCase_MonitoringCodes || []


    req.session.data.preCharge = 'No'

    const valueToRemove = 'Pre-Charge Decision'
//    req.session.data.newCase_MonitoringCodes[0] = "999"

    req.session.data.newCase_MonitoringCodes = req.session.data.newCase_MonitoringCodes.filter(item => item !== valueToRemove)

    // if (req.session.data.chargeSuspectId.length > 0) {
    //     const hasUncharged = req.session.data.suspectId.some(
    //         id => !req.session.data.chargeSuspectId.includes(id)
    //     )
    //     req.session.data.preCharge = hasUncharged ? 'Yes' : 'No'
    // }

    
//    if (req.session.data.chargeSuspectId.length > 0 || req.session.da) {
        // const suspects = req.session.data.suspectId.map(String)
        // const charged = req.session.data.chargeSuspectId.map(String)
        const suspects = [].concat(req.session.data.suspectId).map(String)
        const charged = [].concat(req.session.data.chargeSuspectId).map(String)

        const hasUncharged = suspects.some(id => !charged.includes(id))
        req.session.data.preCharge = hasUncharged ? 'Yes' : 'No'
        console.log("hasUncharged:", hasUncharged)
//    }

    console.log("Pre-charge set to (complexity page):",req.session.data.preCharge)
    res.redirect('/version-11/B-off-system-MVP/create-case/06-monitoring-codes') 
})


// Monitoring codes
router.post('/B-off-system-MVP/create-case/06-monitoring-codes', function(req, res) {
    res.redirect('/version-11/B-off-system-MVP/create-case/07-cps-staff') 
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


    res.redirect('/version-11/B-off-system-MVP/create-case/08-check-answers')


    // If user is LCC check if there are materials. If not, go to check your answers.
    // if (req.session.data.userType === 'LCC') {
    //     res.redirect('/version-11/B-off-system-MVP/create-case/07-want-to-create-folders')
    // }
    // else {
    //     res.redirect('/version-11/B-off-system-MVP/create-case/08-check-your-answers') 
    // }    
})


// Materials
router.post('/B-off-system-MVP/create-case/09-confirmation', function(req, res) {
    req.session.data.addMaterials = req.body['add-materials']
    if (req.session.data.addMaterials === 'Yes') {
        res.redirect('/version-11/B-off-system-MVP/04A-create-or-link-folders')
    }
    else {
        res.redirect('/version-11/B-off-system-MVP/03-case-overview') 
    }    
})


router.post('/B-off-system-MVP/04A-create-or-link-folders', function(req, res) {
    req.session.data.foldersAction = req.body['folders']
    if (req.session.data.foldersAction === 'Create folders') {
        req.session.data.newEgressFolder = req.body['new-egress-folder']
        req.session.data.newDriveFolder = req.body['new-drive-folder']
        if (req.session.data.newEgressFolder === 'Egress folder') {
            res.redirect('/version-11/B-off-system-MVP/04A-create-egress-folder')
        }
        else if (req.session.data.newDriveFolder === 'Shared drive folder') {
            res.redirect('/version-11/B-off-system-MVP/03-case-overview') 
        }
        else {
            res.redirect('/version-11/B-off-system-MVP/04A-create-or-link-folders') 
        }
    }
    else {
        req.session.data.existingEgressFolder = req.body['linked-egress-folder']
        req.session.data.existingDriveFolder = req.body['linked-drive-folder']
        if (req.session.data.existingEgressFolder === 'Egress folder') {
            res.redirect('/version-11/B-off-system-MVP/04A-egress-files')
        }
        else if (req.session.data.existingDriveFolder === 'Shared drive folder') {
            res.redirect('/version-11/B-off-system-MVP/05A-p-drive-files') 
        }    
        else {
            res.redirect('/version-11/B-off-system-MVP/04A-create-or-link-folders') 
        }
    }
})

router.post('/B-off-system-MVP/04A-create-egress-folder', function(req, res) {
    req.session.data.egressTemplate = req.body['egress-template']
    res.redirect('/version-11/B-off-system-MVP/03-case-overview') 
})
// End of materials






// ********************** Materials ********************** //

// Handle materials filter POST
router.post('/includes/materials/materials-filter', function(req, res) {
  req.session.data.filterNew = req.body['filterNew']
  req.session.data.filterStatusUsed = req.body['filterStatusUsed']
  req.session.data.filterStatusUnused = req.body['filterStatusUnused']
  req.session.data.filterStatusNone = req.body['filterStatusNone']

  // ✅ singular 'Review' not 'Reviews'
  req.session.data.filterCategoryReview = req.body['filterCategoryReview']
  req.session.data.filterCategoryCaseOverview = req.body['filterCategoryCaseOverview']
  req.session.data.filterCategoryStatements = req.body['filterCategoryStatements']
  req.session.data.filterCategoryExhibits = req.body['filterCategoryExhibits']
  req.session.data.filterCategoryForensics = req.body['filterCategoryForensics']
  req.session.data.filterCategoryUnusedMaterial = req.body['filterCategoryUnusedMaterial']
  req.session.data.filterCategoryDefendant = req.body['filterCategoryDefendant']
  req.session.data.filterCategoryCourtPreparation = req.body['filterCategoryCourtPreparation']

  console.log("Filter data:", req.session.data)
  res.redirect('/version-11/B-off-system-MVP/03-case-overview')
})



// AI //
// Route for the materials page
router.get('/B-off-system-MVP/03-case-overview', function (req, res) {
  res.render('version-11/B-off-system-MVP/03-case-overview', {
    // materialsData: req.session.data.materialsData,
    materials: req.session.data.materials
  })
})

router.post('/B-off-system-MVP/case-overview-folder', function(req, res) {
    req.session.data.folderName = req.body['folderName']
    req.session.data.breadcrumbs.push(req.session.data.folderName)
    console.log("Selected folder name:", req.session.data.folderName)
    req.session.data.level = req.body['level']
    console.log("Selected level:", req.session.data.level)
    if (req.session.data.folderName) {
        parentFolder = materials.find(m => m.name === req.session.data.folderName && m.folder);
    }
    const parentId = parentFolder ? parentFolder.id : 0; 
    req.session.data.parentId = parentId

    console.log("Selected folder ID:", parentId)
    res.redirect('/version-11/B-off-system-MVP/03-case-overview') 
})

router.post('/B-off-system-MVP/shared-drive', function(req, res) {
    req.session.data.level = req.body['level']
    req.session.data.parentId = req.body['parentId']
    console.log("Selected level (shared drive):", req.session.data.level)
    console.log("Selected parent ID (shared drive):", req.session.data.parentId)
    res.redirect('/version-11/B-off-system-MVP/03-case-overview') 
})



router.post('/B-off-system-MVP/add-new-folder', function(req, res) {
    const newFolderName = req.body.newFolderName?.trim();
    if (!newFolderName) return res.redirect('/version-11/B-off-system-MVP/shared-drive');

    // Make sure materials array exists
    req.session.data.materials = req.session.data.materials || [];

    const materials = req.session.data.materials;
    const level = req.body.level || 0;
    
    const parentName = req.body.parentFolder?.trim() || null;

    console.log("Adding folder:", newFolderName, "at level:", level, "under parent folder:", parentName);

    let parentFolder = null;

    if (parentName) {
        parentFolder = materials.find(m => m.name === parentName && m.folder);
    }
    const parentId = parentFolder ? parentFolder.id : 0; 

    // Determine next ID
    //  const lastId = materials.length ? materials[materials.length - 1].id : 1000;
    const lastId = materials.length
    ? Math.max(...materials.map(m => m.id || 0))
    : 1000;

    // Build new folder object
    const newFolder = {
        id: lastId + 1,
        name: newFolderName,
        type: null,
        category: null,
        date: new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }),    
        status: 'None',
        new: true,
        docLink: null,
        previewLink: null,
        parentId: parentId,
        folder: true,
        level: level
    };

    // Add to session
    // materials.push(newFolder);
    materials.unshift(newFolder);

    console.log('✅ New folder added:', newFolder);
    res.set('Cache-Control', 'no-store');   
    // Redirect back to case overview (reloads tab-manage-materials.html)
    res.redirect('/version-11/B-off-system-MVP/03-case-overview');
});

router.post('/version-11/B-off-system-MVP/case-overview', function (req, res) {
  const data = req.session.data;
  res.render('version-11/B-off-system-MVP/03-case-overview', { materials: data.materials || [], data });
});


// router.post('/B-off-system-MVP/discard-material', function(req, res) {
//     req.session.data.discardingReason = req.body['discarding-material']

//     res.redirect('/version-11/B-off-system-MVP/03-case-overview') 
// })

// Discard material
router.post('/B-off-system-MVP/discard-material', function (req, res) {
    const selected = req.body.material_selected
        ? req.body.material_selected.split(',').map(s => s.trim())
        : [];
    const reason = req.body.discarding_material;

    console.log('Discarding materials:', selected);
    console.log('Reason:', reason);

    // Remove selected materials entirely
    req.session.data.materials = req.session.data.materials.filter(
        m => !selected.includes(m.name)
    );

// (Optional) You could store the discard reason somewhere for audit, e.g.:
    req.session.data.lastDiscard = { reason, items: selected, date: new Date().toISOString() };
    console.log('Last discard action stored:', req.session.data.lastDiscard);

  // Mark or remove discarded materials
//   req.session.data.materials = req.session.data.materials.map(m => {
//     if (selected.includes(m.name)) {
//       m.status = 'Discarded (' + reason + ')';
//     }
//     return m;
//   });

    res.redirect('/version-11/B-off-system-MVP/03-case-overview');
});

// Rename material
router.post('/B-off-system-MVP/B-rename-material-save', function (req, res) {
  const oldName = req.body.rename_selected?.trim();
  const newName = req.body.new_name?.trim();

  if (!oldName || !newName) {
    return res.redirect('/version-11/B-off-system-MVP/03-case-overview');
  }

  req.session.data.materials = req.session.data.materials.map(m => {
    if (m.name === oldName) {
      return { ...m, name: newName };
    }
    return m;
  });

  console.log(`✏️ Renamed "${oldName}" → "${newName}"`);
  res.redirect('/version-11/B-off-system-MVP/03-case-overview');
});// ************************************************** Old code **************************************************

// Add suspects
// router.post('/B-off-system-MVP/create-case/04A-add-suspect', function(req, res) {
//     count = req.session.data.suspectCount
    
//     req.session.data.suspectType[count] = req.body['suspect-type']
//     req.session.data.suspectId[count] = count

//     if (req.body['suspect-type'] == 'Person') {
//         req.session.data.suspectFirstName[count] = req.body['suspect-person-first-name']
//         req.session.data.suspectLastName[count] = req.body['suspect-person-last-name']
//         req.session.data.suspectDayBirth[count] = req.body['date-of-birth-day']
//         req.session.data.suspectMonthBirth[count] = Number(req.body['date-of-birth-month'])
//         req.session.data.suspectYearBirth[count] = req.body['date-of-birth-year'] 
//     }
//     else {
//         req.session.data.suspectCompanyName[count] = req.body['suspect-company-name']
//     }
    
//     req.session.data.suspectCount = count + 1
    
//     res.redirect('/version-11/B-off-system-MVP/create-case/04B-suspect-summary')
// })
// // End of add suspects

// // Suspect summary
// router.post('/B-off-system-MVP/create-case/04B-suspect-summary', function(req, res) {
//     if (req.body['add-another'] === 'Yes') {
//         res.redirect('/version-11/B-off-system-MVP/create-case/04A-add-suspect')
//     }
//     else {
//         res.redirect('/version-11/B-off-system-MVP/create-case/04-want-to-add-charges') 
//     }    
// })
// // End of suspect summary


// // Edit suspect
// router.post('/B-off-system-MVP/create-case/04-edit-suspect', function(req, res) {
//     console.log("Edit suspect ID:",req.session.data.editSuspect)
//     console.log("Display suspect ID:",req.session.data.displaySuspect)

//     var x = Number(req.session.data.editSuspect)

//     if (req.body['suspect-type'] == 'Person') {
//         req.session.data.suspectFirstName[x] = req.body['suspect-person-first-name']
//         req.session.data.suspectLastName[x] = req.body['suspect-person-last-name']
//         // req.session.data.suspectDOB[x] = req.body['suspect-date-of-birth']
//         req.session.data.suspectDayBirth[x] = req.body['date-of-birth-day']
//         req.session.data.suspectMonthBirth[x] = Number(req.body['date-of-birth-month'])
//         req.session.data.suspectYearBirth[x] = req.body['date-of-birth-year'] 
//     }
//     else {
//         req.session.data.suspectCompanyName[x] = req.body['suspect-company-name']
//     }

//     req.session.data.displaySuspect = 999
//     req.session.data.editSuspect = 999

//     res.redirect('/version-11/B-off-system-MVP/create-case/04B-suspect-summary')
// })

// router.post('/B-off-system-MVP/create-case/04-edit-suspect-router', function(req, res) {
//     req.session.data.editSuspect = Number(req.body['edit-suspect'])
//     req.session.data.displaySuspect = Number(req.body['edit-suspect']) + 1
//     console.log("Edit suspect ID:",req.session.data.editSuspect)
//     console.log("Display suspect ID:",req.session.data.displaySuspect)
//     res.redirect('/version-11/B-off-system-MVP/create-case/04A-add-suspect')
// })
// End of edit suspect

// router.post('/B-off-system-MVP/create-case/03-edit-suspect', function(req, res) {
//     req.session.data.editSuspect = req.body['edit-suspect']
//     console.log("Edit suspect ID:",req.session.data.editSuspect)
//     res.redirect('/version-11/B-off-system-MVP/create-case/03A-add-suspect')
// })


// End of suspects


// router.post('/B-off-system-MVP/create-case/07A-pre-existing-material', function(req, res) {
//     req.session.data.existingEgressFolder = req.body['existing-egress-folder']
//     req.session.data.existingDriveFolder = req.body['existing-drive-folder']
//     if (req.body['existing-egress-folder'] === 'Egress folder') {
//         res.redirect('/version-11/B-off-system-MVP/04A-egress-files')
//     }
//     else if (req.body['existing-drive-folder'] === 'Shared drive folder') {
//         res.redirect('/version-11/B-off-system-MVP/05A-p-drive-files') 
//     }
//     else {
//         res.redirect('/version-11/B-off-system-MVP/create-case/08-check-your-answers') 
//     }    
// })




module.exports = router