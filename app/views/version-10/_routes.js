const express = require('express');
const { editSuspect, chargeDescription } = require('../../data/session-data-defaults');
const router = express.Router();
const version = 'version-9'

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

        res.redirect('/version-9/B-off-system-MVP/create-case/02-area')
    // }
    // else {
    //     res.render('version-9/B-off-system-MVP/create-case/01-register-case', { 
    //         errors: errors
    //     })
    // }
})

// Area page
router.post('/B-off-system-MVP/create-case/02-area', function(req, res) {
    req.session.data.area = req.body['docType-Area']
    res.redirect('/version-9/B-off-system-MVP/create-case/02-case-details')
})

// Case details page
router.post('/B-off-system-MVP/create-case/02-case-details', function(req, res) {
    console.log("Case details page submitted")

//    req.session.data.area = req.body['docType-Area']
    req.session.data.URN1 = req.body['newCase_URN-A']
    req.session.data.URN2 = req.body['newCase_URN-B']
    req.session.data.URN3 = req.body['newCase_URN-C']
    req.session.data.URN4 = req.body['newCase_URN-D']

    res.redirect('/version-9/B-off-system-MVP/create-case/02-first-hearing-details') 
})


// First hearing details
router.post('/B-off-system-MVP/create-case/02-first-hearing-details', function(req, res) {
    req.session.data.firstHearingDetailsYesNo = req.body['first-hearing-details']

    if (req.session.data.firstHearingDetailsYesNo === 'Yes') {
        req.session.data.courtLocation = req.body['court-location']
        req.session.data.firstHearingDate = req.body['newCase_FirstHearing_Date']
    }

    if (req.session.data.suspectDetailsYesNo === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/05-complexity') 
    }    
})



// ************************************************** Suspects **************************************************
// Add suspects
router.post('/B-off-system-MVP/create-case/03-add-suspect', function(req, res) {
    count = req.session.data.suspectCount
    
    req.session.data.suspectType[count] = req.body['suspect-type']
    req.session.data.suspectId[count] = count

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
    id = req.session.data.suspectDetailsCount

    if (req.session.data.suspectDOB[id] != undefined) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-dob')
    }
    else if (req.session.data.suspectGender[id] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-gender')
    }
    else if (req.session.data.suspectDisability[id] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[id] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[id] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[id] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[id] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[id] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[id] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
    }
    
    // res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
})


// Suspect details – date of birth
router.post('/B-off-system-MVP/create-case/03-suspect-details-dob', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectDayBirth[count] = req.body['date-of-birth-day']
    req.session.data.suspectMonthBirth[count] = Number(req.body['date-of-birth-month'])
    req.session.data.suspectYearBirth[count] = req.body['date-of-birth-year'] 

    if (req.session.data.suspectGender[count] != undefined) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-gender')
    }
    else if (req.session.data.suspectDisability[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – gender
router.post('/B-off-system-MVP/create-case/03-suspect-details-gender', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectGender[count] = req.body['gender']

    if (req.session.data.suspectDisability[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – disability
router.post('/B-off-system-MVP/create-case/03-suspect-details-disability', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectDisability[count] = req.body['disability']

    if (req.session.data.suspectReligion[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – religion
router.post('/B-off-system-MVP/create-case/03-suspect-details-religion', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectReligion[count] = req.body['religion']

    if (req.session.data.suspectEthnicity[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – ethnicity
router.post('/B-off-system-MVP/create-case/03-suspect-details-ethnicity', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectEthnicity[count] = req.body['ethnicity']

    if (req.session.data.suspectAlias[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
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

    req.session.data.aliasCount = aliasCount + 1
//    req.session.data.suspectDetailsCount = aliasCount


    res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-alias-summary')
})

// Alias summary
router.post('/B-off-system-MVP/create-case/03-suspect-details-alias-summary', function(req, res) {
    count = req.session.data.suspectDetailsCount
    console.log("Alias summary - suspect count:",count)
    console.log("Arrest summons:",req.session.data.suspectArrestSummons[count])
    
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else {
        if (req.session.data.suspectSDO[count] != undefined ) {
            res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-sdo')
        }        
        else if (req.session.data.suspectArrestSummons[count] != undefined ) {
            res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
        }
        else if (req.session.data.suspectOffenderType[count] != undefined ) {
            res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-offender-type')
        }
        else {
            res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
        }            
    }    
})
// End of alias section


// Suspect details – SDO
router.post('/B-off-system-MVP/create-case/03-suspect-details-sdo', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectSDO[count] = req.body['sdo']

    if (req.session.data.suspectArrestSummons[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – arrest summons
router.post('/B-off-system-MVP/create-case/03-suspect-details-arrest-summons', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectArrestSummons[count] = req.body['arrest-summons']

    if (req.session.data.suspectOffenderType[count] != undefined ) {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
    }    
})


// Suspect details – type of offender
router.post('/B-off-system-MVP/create-case/03-suspect-details-offender-type', function(req, res) {
    count = req.session.data.suspectDetailsCount
    
    req.session.data.suspectOffenderType[count] = req.body['offender-type']
    res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
})


// End of add suspects


// Suspect summary
router.post('/B-off-system-MVP/create-case/03B-suspect-summary', function(req, res) {
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/04-want-to-add-charges') 
        // res.redirect('/version-9/B-off-system-MVP/create-case/05-complexity') 
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

    res.redirect('/version-9/B-off-system-MVP/create-case/03B-suspect-summary')
})
// End of suspect summary


router.post('/B-off-system-MVP/create-case/03-edit-suspect-router', function(req, res) {
    req.session.data.editSuspect = Number(req.body['edit-suspect'])
    req.session.data.displaySuspect = Number(req.body['edit-suspect']) + 1
    console.log("Edit suspect ID:",req.session.data.editSuspect)
    console.log("Display suspect ID:",req.session.data.displaySuspect)
    res.redirect('/version-9/B-off-system-MVP/create-case/03-add-suspect')
})
// End of edit suspect

// ************************************************** End of suspects **************************************************


// Want to add charges
router.post('/B-off-system-MVP/create-case/04-want-to-add-charges', function(req, res) {
    req.session.data.wantToAddCharges = req.body['add-charges']
    console.log("Want to add charges:",req.session.data.wantToAddCharges)
    console.log("Suspect count:",req.session.data.suspectCount)
    if (req.session.data.wantToAddCharges === 'Yes') {
        if (req.session.data.suspectCount === 1) {
            req.session.data.chargeSuspectId[0] = 0
            console.log("Charge suspect id:",req.session.data.chargeSuspectId[0])
            res.redirect('/version-9/B-off-system-MVP/create-case/04-add-charges') 
        }
        else {
            res.redirect('/version-9/B-off-system-MVP/create-case/04-add-charges-suspect')
        }
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/05-complexity') 
    }    
})


// Add charges - select suspect
router.post('/B-off-system-MVP/create-case/04-add-charges-suspect', function(req, res) {
    count = req.session.data.chargeCount
    // console.log("Charge count:",count)
    
    // req.session.data.chargeId[count] = count
    // // console.log("Charge id:",req.session.data.chargeId[count])

    req.session.data.chargeSuspectId[count] = req.body['suspect-charges'] 
    if (req.body['suspect-charges'] == 'Suspect not listed') {
        req.session.data.chargeSuspectId[count] = 'Suspect not listed'
    }
    else {
        req.session.data.currentSuspectId = Number(req.session.data.chargeSuspectId[count])
    }
    // console.log("Charge suspect id:",req.session.data.chargeSuspectId[count])

    if (req.session.data.chargeSuspectId[count] == 'Suspect not listed') {
        res.redirect('/version-9/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/04-add-charges')
    }
})


// Add charges 
router.post('/B-off-system-MVP/create-case/04-add-charges', function(req, res) {
    count = req.session.data.chargeCount
    // console.log("Charge count:",count)
    
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

    req.session.data.chargeCode[count] = req.body['newChargeCode']
    req.session.data.chargeDescription[count] = req.body['newCharge_Description']
    req.session.data.chargeFromDay[count] = req.body['addCharge_Form_Date-Day']
    req.session.data.chargeFromMonth[count] = req.body['addCharge_Form_Date-Month']
    req.session.data.chargeFromYear[count] = req.body['addCharge_Form_Date-Year']
    req.session.data.chargeToDay[count] = req.body['addCharge_Form_Date-Day_2']
    req.session.data.chargeToMonth[count] = req.body['addCharge_Form_Date-Month_2']
    req.session.data.chargeToYear[count] = req.body['addCharge_Form_Date-Year_2']
    req.session.data.chargeComments[count] = req.body['newCharge_Comment']
    // req.session.data.chargeVictimYesNo[count] = req.body['newCharge_Victim_YesNo']
    req.session.data.chargeVictimFirstName[count] = req.body['newCharge_Victim_FirstName']
    req.session.data.chargeVictimLastName[count] = req.body['newCharge_Victim_SurnameName']
    req.session.data.chargeVictimVulnerable[count] = req.body['newCharge_Vulnerable']
    req.session.data.chargeVictimIntimidated[count] = req.body['newCharge_Intimidated']
    req.session.data.chargeVictimWitness[count] = req.body['charge-victim-witness']
    req.session.data.chargedWithAdult[count] = req.body['newCharge_WithAdult']

    console.log("Charge suspect id:",req.session.data.chargeSuspectId[count])
    console.log("Charge id:",req.session.data.chargeId[count])
    console.log("Charge code:",req.session.data.chargeCode[count])
    console.log("Charge description:",req.session.data.chargeDescription[count])
    console.log("Charge from date:",req.session.data.chargeFromDay[count],req.session.data.chargeFromMonth[count],req.session.data.chargeFromYear[count])
    console.log("Charge to date:",req.session.data.chargeToDay[count],req.session.data.chargeToMonth[count],req.session.data.chargeToYear[count])
    console.log("Charge comment:",req.session.data.chargeComments[count])
    // console.log("Charge victim yes/no:",req.session.data.chargeVictimYesNo[count])
    console.log("Charge victim first name:",req.session.data.chargeVictimFirstName[count])
    console.log("Charge victim surname:",req.session.data.chargeVictimLastName[count])
    console.log("Charge vulnerable:",req.session.data.chargeVictimVulnerable[count])
    console.log("Charge intimidated:",req.session.data.chargeVictimIntimidated[count])
    console.log("Charge witness:",req.session.data.chargeVictimWitness[count])
    console.log("Charged with adult:",req.session.data.chargedWithAdult[count])


    // const grouped = {};
    // req.session.data.chargeId.forEach((cid, i) => {
    //     const sid = req.session.data.chargeSuspectId[i];
    //     if (!grouped[sid]) grouped[sid] = [];
    //     grouped[sid].push({ chargeId: cid, chargeSuspectId: sid, chargeCode: req.session.data.chargeCode[i], chargeDescription: req.session.data.chargeDescription[i], chargeFromDay: req.session.data.chargeFromDay[i], chargeFromMonth: req.session.data.chargeFromMonth[i], chargeFromYear: req.session.data.chargeFromYear[i], chargeToDay: req.session.data.chargeToDay[i], chargeToMonth: req.session.data.chargeToMonth[i], chargeToYear: req.session.data.chargeToYear[i], chargeComments: req.session.data.chargeComments[i], chargeVictimFirstName: req.session.data.chargeVictimFirstName[i], chargeVictimLastName: req.session.data.chargeVictimLastName[i], chargeVictimVulnerable: req.session.data.chargeVictimVulnerable[i], chargeVictimIntimidated: req.session.data.chargeVictimIntimidated[i], chargeVictimWitness: req.session.data.chargeVictimWitness[i], chargedWithAdult: req.session.data.chargedWithAdult[i] });
    // });

    // req.session.data.grouped = grouped;  // save for later

    req.session.data.chargeCount = count + 1
    console.log("Charge count 2:",req.session.data.chargeCount)
    // console.log("Grouped:",req.session.data.grouped)

    // res.render('version-9/B-off-system-MVP/create-case/04-charges-summary', {
    //     grouped: req.session.data.grouped
    // });

    const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
    const counts = {};

    for (const num of req.session.data.chargeSuspectId) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    req.session.data.counts = counts;  // save for later
    console.log(counts);
//    console.log(counts[5], counts[2], counts[9], counts[4]);

   res.redirect('/version-9/B-off-system-MVP/create-case/04-charges-summary')
})


// Charges summary
router.post('/B-off-system-MVP/create-case/04-charges-summary', function(req, res) {
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/version-9/B-off-system-MVP/create-case/04-add-charges-suspect')
    }
    else {
        res.redirect('/version-9/B-off-system-MVP/create-case/05-complexity') 
    }    

})

router.get('/B-off-system-MVP/create-case/04-charges-summary', function(req, res) {
    res.render('version-9/B-off-system-MVP/create-case/04-charges-summary', {
        grouped: req.session.data.grouped
    });
})


// Complexity 
router.post('/B-off-system-MVP/create-case/05-complexity', function(req, res) {
    req.session.data.caseComplexity = req.body['newCase_Complexity']
    // req.session.data.caseWeight = req.body['newCase_CaseWeight']
    res.redirect('/version-9/B-off-system-MVP/create-case/06-monitoring-codes') 
})


// Monitoring codes
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
        else if (req.session.data.newDriveFolder === 'Shared drive folder') {
            res.redirect('/version-9/B-off-system-MVP/03-case-overview') 
        }
        else {
            res.redirect('/version-9/B-off-system-MVP/04A-create-or-link-folders') 
        }
    }
    else {
        req.session.data.existingEgressFolder = req.body['linked-egress-folder']
        req.session.data.existingDriveFolder = req.body['linked-drive-folder']
        if (req.session.data.existingEgressFolder === 'Egress folder') {
            res.redirect('/version-9/B-off-system-MVP/04A-egress-files')
        }
        else if (req.session.data.existingDriveFolder === 'Shared drive folder') {
            res.redirect('/version-9/B-off-system-MVP/05A-p-drive-files') 
        }    
        else {
            res.redirect('/version-9/B-off-system-MVP/04A-create-or-link-folders') 
        }
    }
})

router.post('/B-off-system-MVP/04A-create-egress-folder', function(req, res) {
    req.session.data.egressTemplate = req.body['egress-template']
    res.redirect('/version-9/B-off-system-MVP/03-case-overview') 
})
// End of materials










// ************************************************** Old code **************************************************

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
        res.redirect('/version-9/B-off-system-MVP/create-case/04-want-to-add-charges') 
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