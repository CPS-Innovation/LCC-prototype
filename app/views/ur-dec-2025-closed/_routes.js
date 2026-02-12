const express = require('express');
const { editSuspect, chargeDescription, materials, victims } = require('../../data/session-data-defaults');
const router = express.Router();
const version = 'ur-dec-2025-closed'


// Make session data available in all Nunjucks templates as "data"
router.use((req, res, next) => {
    res.locals.data = req.session.data || {};
    next();
});



// Add your routes here - above the module.exports line


// Register a case - start of journey
router.post('/B-off-system-MVP/create-case/01-register-case', function (req, res) {
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

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/02-area')
    // }
    // else {
    //     res.render('ur-dec-2025-closed/B-off-system-MVP/create-case/01-register-case', { 
    //         errors: errors
    //     })
    // }
})

// Area page
router.post('/B-off-system-MVP/create-case/02-area', function (req, res) {
    req.session.data.area = req.body['docType-Area']
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/02-case-details')
})

// Case details page
router.post('/B-off-system-MVP/create-case/02-case-details', function (req, res) {
    console.log("Case details page submitted")

    //    req.session.data.area = req.body['docType-Area']
    req.session.data.URN1 = req.body['newCase_URN-A']
    req.session.data.URN2 = req.body['newCase_URN-B']
    req.session.data.URN3 = req.body['newCase_URN-C']
    req.session.data.URN4 = req.body['newCase_URN-D']
    req.session.data.registeringUnit = req.body['newCase_RegisteringUnit']
    req.session.data.WCU = req.body['newCase_WCU']

    if (req.session.data.suspectDetailsYesNo === 'Yes') {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/05-complexity')
    }
})


// First hearing details
router.post('/B-off-system-MVP/create-case/02-first-hearing-details', function (req, res) {
    req.session.data.firstHearingDetailsYesNo = req.body['first-hearing-details']

    if (req.session.data.firstHearingDetailsYesNo === 'Yes') {
        req.session.data.courtLocation = req.body['court-location']
        req.session.data.firstHearingDate = req.body['newCase_FirstHearing_Date']
    }

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/05-complexity')

})



// ************************************************** Suspects **************************************************
// Add suspects
router.post('/B-off-system-MVP/create-case/03-add-suspect', function (req, res) {
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
        console.log("Arrest summons:", req.session.data.suspectArrestSummons[count])
        console.log("Alias:", req.session.data.suspectAlias[count])
        console.log("SDO:", req.session.data.suspectSDO[count])
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
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-dob')
    }
    else if (req.session.data.suspectGender[id] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-gender')
    }
    else if (req.session.data.suspectDisability[id] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[id] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[id] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[id] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[id] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[id] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[id] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
    }

    // res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
})


// Suspect details – date of birth
router.post('/B-off-system-MVP/create-case/03-suspect-details-dob', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectDayBirth[count] = req.body['date-of-birth-day']
    req.session.data.suspectMonthBirth[count] = Number(req.body['date-of-birth-month'])
    req.session.data.suspectYearBirth[count] = req.body['date-of-birth-year']

    if (req.session.data.suspectGender[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-gender')
    }
    else if (req.session.data.suspectDisability[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Suspect details – gender
router.post('/B-off-system-MVP/create-case/03-suspect-details-gender', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectGender[count] = req.body['gender']

    if (req.session.data.suspectDisability[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Suspect details – disability
router.post('/B-off-system-MVP/create-case/03-suspect-details-disability', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectDisability[count] = req.body['disability']

    if (req.session.data.suspectReligion[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Suspect details – religion
router.post('/B-off-system-MVP/create-case/03-suspect-details-religion', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectReligion[count] = req.body['religion']

    if (req.session.data.suspectEthnicity[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Suspect details – ethnicity
router.post('/B-off-system-MVP/create-case/03-suspect-details-ethnicity', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectEthnicity[count] = req.body['ethnicity']

    if (req.session.data.suspectAlias[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Alias section
// Suspect details – add alias
router.post('/B-off-system-MVP/create-case/03-suspect-details-add-alias', function (req, res) {
    aliasCount = req.session.data.aliasCount

    req.session.data.aliasId[aliasCount] = aliasCount

    req.session.data.aliasFirstName[aliasCount] = req.body['alias-first-name']
    req.session.data.aliasLastName[aliasCount] = req.body['alias-last-name']
    req.session.data.aliasSuspectID[aliasCount] = req.session.data.suspectDetailsCount

    console.log("Alias first name:", req.session.data.aliasFirstName[aliasCount])
    console.log("Alias last name:", req.session.data.aliasLastName[aliasCount])
    console.log("Alias count:", req.session.data.aliasCount)
    console.log("Alias suspect:", req.session.data.aliasSuspectID[aliasCount])
    console.log("Details count:", req.session.data.suspectDetailsCount)
    console.log("Test:", req.session.data.suspectDetailsCount)

    req.session.data.aliasCount = aliasCount + 1
    //    req.session.data.suspectDetailsCount = aliasCount


    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-alias-summary')
})

// Alias summary
router.post('/B-off-system-MVP/create-case/03-suspect-details-alias-summary', function (req, res) {
    count = req.session.data.suspectDetailsCount
    console.log("Alias summary - suspect count:", count)
    console.log("Arrest summons:", req.session.data.suspectArrestSummons[count])

    if (req.body['add-another'] === 'Yes') {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else {
        if (req.session.data.suspectSDO[count] != undefined) {
            res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-sdo')
        }
        else if (req.session.data.suspectArrestSummons[count] != undefined) {
            res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
        }
        else if (req.session.data.suspectOffenderType[count] != undefined) {
            res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-offender-type')
        }
        else {
            res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
        }
    }
})
// End of alias section


// Suspect details – SDO
router.post('/B-off-system-MVP/create-case/03-suspect-details-sdo', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectSDO[count] = req.body['sdo']

    if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Suspect details – arrest summons
router.post('/B-off-system-MVP/create-case/03-suspect-details-arrest-summons', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectArrestSummons[count] = req.body['arrest-summons']

    if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Suspect details – type of offender
router.post('/B-off-system-MVP/create-case/03-suspect-details-offender-type', function (req, res) {
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



    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
})


// End of add suspects


// Suspect summary
router.post('/B-off-system-MVP/create-case/03B-suspect-summary', function (req, res) {
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-want-to-add-charges')
        // res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/05-complexity') 
    }
})


router.post('/B-off-system-MVP/create-case/remove-suspect', function (req, res) {
    req.session.data.removeSuspectId = Number(req.body['remove-suspect-id'])
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-remove-suspect')
})


router.post('/B-off-system-MVP/create-case/03-remove-suspect', function (req, res) {
    if (req.body['submit-button'] == 'remove') {
        req.session.data.suspectId.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectType.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectFirstName.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectLastName.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectDOB.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectGender.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectDisability.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectReligion.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectEthnicity.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectSDO.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectArrestSummons.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectOffenderType.splice(req.session.data.removeSuspectId, 1)
        req.session.data.suspectCompanyName.splice(req.session.data.removeSuspectId, 1)

        // Adjust suspect count
        req.session.data.suspectCount = req.session.data.suspectCount - 1

        if (req.session.data.suspectCount == 0) {
            req.session.data.suspectDetailsYesNo = 'No'
        }

        for (let i = 0; i < req.session.data.chargeId.length; i++) {
            if (req.session.data.chargeSuspectId[i] == req.session.data.removeSuspectId) {
                req.session.data.chargeId.splice(i, 1)
            }
        }
    }

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
})




// Edit suspect
router.post('/B-off-system-MVP/create-case/03-edit-suspect', function (req, res) {
    console.log("Edit suspect ID:", req.session.data.editSuspect)
    console.log("Display suspect ID:", req.session.data.displaySuspect)

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

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03B-suspect-summary')
})
// End of suspect summary


router.post('/B-off-system-MVP/create-case/03-edit-suspect-router', function (req, res) {
    req.session.data.editSuspect = Number(req.body['edit-suspect'])
    req.session.data.displaySuspect = Number(req.body['edit-suspect']) + 1
    console.log("Edit suspect ID:", req.session.data.editSuspect)
    console.log("Display suspect ID:", req.session.data.displaySuspect)
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-add-suspect')
})
// End of edit suspect

// ************************************************** End of suspects **************************************************



// ************************************************** Start of charges **************************************************

// Want to add charges
router.post('/B-off-system-MVP/create-case/04-want-to-add-charges', function (req, res) {
    req.session.data.wantToAddCharges = req.body['add-charges']
    console.log("Want to add charges:", req.session.data.wantToAddCharges)
    console.log("Suspect count:", req.session.data.suspectCount)
    if (req.session.data.wantToAddCharges === 'Yes') {
        if (req.session.data.suspectCount === 1) {
            req.session.data.chargeSuspectId[0] = 0
            console.log("Charge suspect id:", req.session.data.chargeSuspectId[0])
            res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-charges-offence-search')
        }
        else {
            res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-add-charges-suspect')
        }
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/05-complexity')
    }
})


// Add charges - select suspect
router.post('/B-off-system-MVP/create-case/04-add-charges-suspect', function (req, res) {
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
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-charges-offence-search')
    }
})

router.post('/B-off-system-MVP/create-case/add-another-charge', function (req, res) {
    // Preset or reset pre-charge info
    req.session.data.preCharge = 'No'
    console.log("Pre-charge set to:", req.session.data.preCharge)

    count = req.session.data.chargeCount
    req.session.data.chargeSuspectId[count] = req.body['add-charge-suspect-id']
    req.session.data.currentSuspectId = req.body['add-charge-suspect-id']
    console.log("Charge suspect id:", req.session.data.chargeSuspectId[count])
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-charges-offence-search')
})




// Add charges - offence search
router.post('/B-off-system-MVP/create-case/04-charges-offence-search', function (req, res) {
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


    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-charges-offence-search-results')
})

// Add charges - offence search results
router.post('/B-off-system-MVP/create-case/04-charges-offence-search-results', function (req, res) {
    count = req.session.data.chargeCount
    req.session.data.chargeCode[count] = req.session.data.currentResultsChargeCode[req.body['add-charge']]
    console.log("req.session.data.chargeCode[count]:", req.session.data.chargeCode[count])
    console.log("Count:", count)
    console.log("req.body['add-charge']:", req.body['add-charge'])

    req.session.data.currentChargeId = req.body['add-charge']

    req.session.data.chargeDescription[count] = req.session.data.currentResultsChargeDescription[req.session.data.currentChargeId]
    console.log("req.session.data.chargeDescription[count]:", req.session.data.chargeDescription[count])

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-add-charges')
})


// Add charges 
router.post('/B-off-system-MVP/create-case/04-add-charges', function (req, res) {
    count = req.session.data.chargeCount
    console.log("Charge count:", count)

    req.session.data.chargeId[count] = count
    // console.log("Charge id:",req.session.data.chargeId[count])

    count = Number(req.session.data.chargeCount)

    console.log("Charge count:", count)
    console.log("Current suspect id:", req.session.data.currentSuspectId)

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

    console.log("Charge id:", req.session.data.chargeId[count])


    req.session.data.chargeCount = count + 1
    console.log("Charge count 2:", req.session.data.chargeCount)
    // console.log("Grouped:",req.session.data.grouped)

    if (req.body['newCharge_Victim_YesNo'] === 'Yes') {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-add-charges-victim')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-charges-summary')
    }

})

// Charges victim
router.post('/B-off-system-MVP/create-case/04-add-charges-victim', function (req, res) {
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
    console.log("Charge victim id:", req.session.data.chargeVictimId[count])

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-charges-summary')
})




// Charges summary
router.post('/B-off-system-MVP/create-case/04-charges-summary', function (req, res) {
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-add-charges-suspect')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/02-first-hearing-details')
    }

})

router.get('/B-off-system-MVP/create-case/04-charges-summary', function (req, res) {
    res.render('ur-dec-2025-closed/B-off-system-MVP/create-case/04-charges-summary', {
        grouped: req.session.data.grouped
    });
})


router.post('/B-off-system-MVP/create-case/remove-charge', function (req, res) {
    req.session.data.removeChargeId = Number(req.body['remove-charge-id'])
    console.log("Remove charge ID:", req.session.data.removeChargeId)
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-remove-charge')
})


router.post('/B-off-system-MVP/create-case/04-remove-charge', function (req, res) {
    if (req.body['submit-button'] == 'remove') {
        req.session.data.chargeId.splice(req.session.data.removeChargeId, 1)
        console.log("Charge IDs after removal:", req.session.data.chargeId)
        // req.session.data.chargeSuspectId.splice(req.session.data.removeChargeId, 1)
        // req.session.data.chargeCode.splice(req.session.data.removeChargeId, 1)
        // req.session.data.chargeDescription.splice(req.session.data.removeChargeId, 1)
        // req.session.data.chargeFromDay.splice(req.session.data.removeChargeId, 1)
        // req.session.data.chargeFromMonth.splice(req.session.data.removeChargeId, 1)
        // req.session.data.chargeFromYear.splice(req.session.data.removeChargeId, 1)
        // req.session.data.chargeToDay.splice(req.session.data.removeChargeId, 1)
        // req.session.data.chargeToMonth.splice(req.session.data.removeChargeId, 1)
        // req.session.data.chargeToYear.splice(req.session.data.removeChargeId, 1)
        // req.session.data.chargeComments.splice(req.session.data.removeChargeId, 1)
        // req.session.data.chargeVictimYesNo.splice(req.session.data.removeChargeId, 1)
        // req.session.data.chargeVictimId.splice(req.session.data.removeChargeId, 1)

        req.session.data.chargeCount = req.session.data.chargeCount - 1

    }

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/04-charges-summary')
})


// ************************************************** End of charges **************************************************



// Complexity 
router.post('/B-off-system-MVP/create-case/05-complexity', function (req, res) {
    req.session.data.caseComplexity = req.body['newCase_Complexity']
    // req.session.data.caseWeight = req.body['newCase_CaseWeight']

    console.log("Charge suspect IDs:", req.session.data.currentSuspectId)
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

    console.log("Pre-charge set to (complexity page):", req.session.data.preCharge)
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/06-monitoring-codes')
})


// Monitoring codes
router.post('/B-off-system-MVP/create-case/06-monitoring-codes', function (req, res) {
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/07-cps-staff')
})


// CPS and police staff
router.post('/B-off-system-MVP/create-case/07-cps-staff', function (req, res) {
    console.log("User type:", req.session.data.userType)
    req.session.data.prosecutorCaseworkerYesNo = req.body['prosecutor-caseworker-yes-no']
    req.session.data.prosecutor = req.body['newCase_Prosecutor']
    req.session.data.caseworker = req.body['newCase_Caseworker']
    req.session.data.policeYesNo = req.body['police-yes-no']
    req.session.data.policeRank = req.body['newCase_Police_Rank']
    req.session.data.policeFirstName = req.body['newCase_Police_FirstName']
    req.session.data.policeLastName = req.body['newCase_Police_LastName']
    req.session.data.policeShoulderNumber = req.body['newCase_Police_Number']
    req.session.data.policeUnit = req.body['newCase_Police_Unit']


    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/08-check-answers')


    // If user is LCC check if there are materials. If not, go to check your answers.
    // if (req.session.data.userType === 'LCC') {
    //     res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/07-want-to-create-folders')
    // }
    // else {
    //     res.redirect('/ur-dec-2025-closed/B-off-system-MVP/create-case/08-check-your-answers') 
    // }    
})


// Materials
router.post('/B-off-system-MVP/create-case/09-confirmation', function (req, res) {
    req.session.data.addMaterials = req.body['add-materials']
    if (req.session.data.addMaterials === 'Yes') {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/04A-create-or-link-folders')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview')
    }
})


router.post('/B-off-system-MVP/04A-create-or-link-folders', function (req, res) {
    if (req.body['egress-folders'] != undefined) {
        if (req.body['egress-folder-options'] === 'Create new Egress folders') {
            req.session.data.newEgressFolder = 1
            req.session.data.existinEgressFolder = 0
        }
        else if (req.body['egress-folder-options'] === 'Connect Egress folders') {
            req.session.data.existingEgressFolder = 1
            req.session.data.newEgressFolder = 0
        }
    }

    if (req.body['shared-drive-folders'] != undefined) {
        if (req.body['shared-drive-folder-options'] === 'Create new Shared Drive folders') {
            req.session.data.newDriveFolder = 1
            req.session.data.existingDriveFolder = 0
        }
        else if (req.body['shared-drive-folder-options'] === 'Connect Shared Drive folders') {
            req.session.data.existingDriveFolder = 1
            req.session.data.newDriveFolder = 0
        }
    }

    if (req.session.data.newEgressFolder === 1) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/04A-create-egress-folder')
    }

    else if (req.session.data.existingEgressFolder === 1) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/04A-egress-files')
    }

    else if (req.session.data.existingDriveFolder === 1) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/05A-p-drive-files')
    }

    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview')
    }

})


// router.post('/B-off-system-MVP/04A-create-or-link-folders', function(req, res) {
//     req.session.data.foldersAction = req.body['folders']
//     if (req.session.data.foldersAction === 'Create folders') {
//         req.session.data.newEgressFolder = req.body['new-egress-folder']
//         req.session.data.newDriveFolder = req.body['new-drive-folder']
//         if (req.session.data.newEgressFolder === 'Egress folder') {
//             res.redirect('/ur-dec-2025-closed/B-off-system-MVP/04A-create-egress-folder')
//         }
//         else if (req.session.data.newDriveFolder === 'Shared drive folder') {
//             res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview') 
//         }
//         else {
//             res.redirect('/ur-dec-2025-closed/B-off-system-MVP/04A-create-or-link-folders') 
//         }
//     }
//     else {
//         req.session.data.existingEgressFolder = req.body['linked-egress-folder']
//         req.session.data.existingDriveFolder = req.body['linked-drive-folder']
//         if (req.session.data.existingEgressFolder === 'Egress folder') {
//             res.redirect('/ur-dec-2025-closed/B-off-system-MVP/04A-egress-files')
//         }
//         else if (req.session.data.existingDriveFolder === 'Shared drive folder') {
//             res.redirect('/ur-dec-2025-closed/B-off-system-MVP/05A-p-drive-files') 
//         }    
//         else {
//             res.redirect('/ur-dec-2025-closed/B-off-system-MVP/04A-create-or-link-folders') 
//         }
//     }
// })



router.post('/B-off-system-MVP/04A-create-egress-folder', function (req, res) {
    req.session.data.egressTemplate = req.body['egress-template']

    if (req.session.data.newDriveFolder === 1) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview')
    }
    else if (req.session.data.existingDriveFolder === 1) {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/05A-p-drive-files')
    }
    else {
        res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview')
    }

})
// End of materials






// ********************** Materials ********************** //

// Handle materials filter POST
// router.post('/includes/materials/materials-filter', function(req, res) {
//     req.session.data.filterNew = req.body['filterNew']
//     req.session.data.filterStatusUsed = req.body['filterStatusUsed']
//     req.session.data.filterStatusUnused = req.body['filterStatusUnused']
//     req.session.data.filterStatusNone = req.body['filterStatusNone']
//     req.session.data.filtersSearch = req.body['filtersSearch']

// //   req.session.data.filterCategoryReview = req.body['filterCategoryReview']
// //   req.session.data.filterCategoryCaseOverview = req.body['filterCategoryCaseOverview']
// //   req.session.data.filterCategoryStatements = req.body['filterCategoryStatements']
// //   req.session.data.filterCategoryExhibits = req.body['filterCategoryExhibits']
// //   req.session.data.filterCategoryForensics = req.body['filterCategoryForensics']
// //   req.session.data.filterCategoryUnusedMaterial = req.body['filterCategoryUnusedMaterial']
// //   req.session.data.filterCategoryDefendant = req.body['filterCategoryDefendant']
// //   req.session.data.filterCategoryCourtPreparation = req.body['filterCategoryCourtPreparation']
//     if (req.session.data.filtersSearch != "") {
//         console.log("Search term:", req.body['filtersSearch'] )
//     }

// //   console.log("Filter data:", req.session.data)
//     res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview')
// })


// Handle materials filter POST
router.post('/includes/materials/materials-filter', function (req, res) {

    const data = req.session.data;
    const body = req.body;

    // ----------------------------
    // READ / UNREAD CHECKBOXES
    // (new pattern: filterUnread + filterRead)
    // ----------------------------
    data.filterUnread = body.filterUnread ? 'Unread' : '';
    data.filterRead = body.filterRead ? 'Read' : '';

    // ----------------------------
    // STATUS CHECKBOXES (multi-select)
    // ----------------------------
    data.filterStatusUsed = body.filterStatusUsed ? 'Used' : '';
    data.filterStatusUnused = body.filterStatusUnused ? 'Unused' : '';
    data.filterStatusNone = body.filterStatusNone ? 'None' : '';

    // ----------------------------
    // SEARCH TERM + CLEAR SEARCH
    // ----------------------------
    if (body.clearSearch === 'x') {
        // user clicked the × button
        data.filtersSearch = '';
    } else if (typeof body.filtersSearch === 'string') {
        data.filtersSearch = body.filtersSearch.trim();
    }

    const materials = data.materials || [];
    const search = (data.filtersSearch || "").trim().toLowerCase();

    // -------------------------------------------------------------------
    // Build grouped search results (MATCHES BOTH FOLDERS AND FILES)
    // (unchanged logic, just moved into a helper function here)
    // -------------------------------------------------------------------
    function buildGroupedSearchResults(materials, search) {

        if (!search) return [];

        const groups = {};

        materials.forEach(item => {
            const itemName = (item.name || "").toString().trim().toLowerCase();
            const searchMatches = itemName.includes(search);

            // ----------- MATCHED FILE -----------
            if (!item.folder && searchMatches) {
                const folderId = item.parentId;

                if (!groups[folderId]) {
                    groups[folderId] = {
                        folder: materials.find(m => m.id === folderId && m.folder) || null,
                        matchesFolder: false,
                        files: []
                    };
                }

                groups[folderId].files.push(item);
            }

            // ----------- MATCHED FOLDER NAME -----------
            if (item.folder && searchMatches) {
                const folderId = item.id;

                if (!groups[folderId]) {
                    groups[folderId] = {
                        folder: item,
                        matchesFolder: true,
                        files: []
                    };
                } else {
                    groups[folderId].matchesFolder = true;
                }
            }
        });

        // CLEAN-UP RULE:
        // If a folder has NO matching files and matchesFolder=false,
        // do not include it.
        return Object.values(groups).filter(g =>
            g.matchesFolder || g.files.length > 0
        );
    }

    // Store results in session (used by materials-search-grouped.html)
    data.groupedSearchResults = buildGroupedSearchResults(materials, search);

    console.log("Grouped search results:");
    console.dir(data.groupedSearchResults, { depth: null });

    // Back to case overview, where GET will apply filters + search
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
});


// AI //

const createMaterialsUtils = require('../../helpers/materials.js');

router.get('/B-off-system-MVP/03-case-overview', function (req, res) {
    const data = req.session.data;
    const materials = data.materials || [];

    // Extract flags + lists for THIS render only
    const copySuccess = data.copySuccess === true;
    const moveSuccess = data.moveSuccess === true;

    const copyList = data.copyList || [];
    const moveList = data.moveList || [];

    const copyDestinationName = data.copyDestinationName || null;
    const moveDestinationName = data.moveDestinationName || null;

    const copyPreviewTree = data.copyPreviewTree || [];
    const movePreviewTree = data.movePreviewTree || [];

    // Immediately reset so they only show once
    req.session.data.copySuccess = false;
    req.session.data.moveSuccess = false;
    req.session.data.copyList = [];
    req.session.data.moveList = [];
    req.session.data.copyDestinationName = null;
    req.session.data.moveDestinationName = null;
    req.session.data.copyPreviewTree = [];
    req.session.data.movePreviewTree = [];

    // Helper utils
    const utils = createMaterialsUtils(materials);

    // Current folder fallback
    const folderId = Number(data.folderId) || 0;

    // ================================
    // 1. Get the raw children of this folder
    // ================================
    let children = utils.getChildren(folderId);

    // ================================
    // 2. Apply filters
    // ================================
    const filters = {
        unread: data.filterUnread ? true : false,
        read: data.filterRead ? true : false,
        used: data.filterStatusUsed ? true : false,
        unused: data.filterStatusUnused ? true : false,
        none: data.filterStatusNone ? true : false
    };

    // -------------------------
    // READ / UNREAD FILTERING
    // -------------------------
    if (filters.unread && !filters.read) {
        // unread only
        children = children.filter(m => m.new === true);
    }

    if (!filters.unread && filters.read) {
        // read only
        children = children.filter(m => m.new === false);
    }

    // if both checked → no filter
    // if none checked → no filter

    // -------------------------
    // STATUS MULTI-SELECT
    // -------------------------

    const statusFilters = [];

    if (filters.used) statusFilters.push("Used");
    if (filters.unused) statusFilters.push("Unused");
    if (filters.none) statusFilters.push("None");

    if (statusFilters.length > 0) {
        children = children.filter(m => statusFilters.includes(m.status));
    }
    // Breadcrumbs unaffected
    const breadcrumbs = utils.getBreadcrumbs(folderId);

    // ================================
    // 3. Render page with filtered children
    // ================================
    res.render('ur-dec-2025-closed/B-off-system-MVP/03-case-overview', {
        materials,
        data,
        children,           // now filtered!
        breadcrumbs,
        copySuccess,
        moveSuccess,
        copyList,
        moveList,
        copyDestinationName,
        moveDestinationName,
        copyPreviewTree,
        movePreviewTree
    });
});


router.get('/ur-dec-2025-closed/manage-materials', function (req, res) {

    const search = req.session.data['filtersSearch'];
    let results = materialsData;   // your full array

    if (search && search.trim() !== "") {
        const term = search.toLowerCase();

        results = materialsData.filter(m =>
            m.name.toLowerCase().includes(term) ||
            m.type.toLowerCase().includes(term) ||
            m.category.toLowerCase().includes(term)
        );
    }

    res.render('ur-dec-2025-closed/manage-materials', {
        results    // send filtered list to HTML
    });
});

router.get('/B-off-system-MVP/case-overview-folder', function (req, res) {
    const folderId = Number(req.query.folderId);
    if (!Number.isFinite(folderId)) {
        return res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
    }

    req.session.data.folderId = folderId;
    return res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
});



router.post('/B-off-system-MVP/case-overview-folder', function (req, res) {
    // req.session.data.currentLevel = req.body['currentLevel']
    // req.session.data.selectedFolder = req.body['selectedFolder']
    req.session.data.searchLabel = req.body['searchLabel']
    req.session.data.folderId = req.body['folderId']
    req.session.data.folderName = req.body['folderName']
    //    req.session.data.breadcrumbs.push(req.session.data.folderName)
    console.log("Selected folder id:", req.session.data.folderId)
    console.log("Selected folder name:", req.session.data.folderName)
    req.session.data.level = req.body['level']
    console.log("Selected level:", req.session.data.level)
    if (req.session.data.folderName) {
        parentFolder = materials.find(m => m.name === req.session.data.folderName && m.folder);
    }
    const parentId = parentFolder ? parentFolder.id : 0;
    req.session.data.parentId = parentId


    console.log("Selected folder ID:", parentId)
    req.session.data.filtersSearch = ""
    console.log("Cleared search term", req.session.data.filtersSearch)
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview')
})


router.post('/B-off-system-MVP/case-overview-search-folder', function (req, res) {

    // Incoming from form/button
    const folderId = req.body.folderId;
    const search = (req.body.searchLabel || "").trim().toLowerCase();
    const flag = req.body.flag;

    req.session.data.folderId = folderId;
    // req.session.data.filtersSearch = search;
    req.session.data.flag = flag;

    console.log("Selected folderId:", folderId);
    console.log("Search term:", req.session.data.filtersSearch);

    // --- Always match folder by ID, not name ---
    const parentFolder = materials.find(m =>
        m.id == folderId && m.folder
    );

    const parentId = parentFolder ? parentFolder.id : null;
    req.session.data.parentId = parentId;

    console.log("ParentId:", parentId);

    // Run your search inside this folder
    req.session.data.folderSearchResults = getFilesInFolderBySearch(
        materials,
        parentId,
        search
    );

    function getFilesInFolderBySearch(materials, parentId, search) {

        if (!search || !parentId) return [];

        const term = search.trim().toLowerCase();

        return materials.filter(item =>
            !item.folder &&
            item.parentId == parentId &&
            item.name.toLowerCase().includes(term)
        );
    }

    console.log("Search results:", req.session.data.folderSearchResults);

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
});


router.post('/B-off-system-MVP/shared-drive', function (req, res) {
    req.session.data.level = req.body['level']
    req.session.data.parentId = req.body['parentId']
    console.log("Selected level (shared drive):", req.session.data.level)
    console.log("Selected parent ID (shared drive):", req.session.data.parentId)
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview')
})



router.post('/B-off-system-MVP/clear-search', function (req, res) {
    req.session.data.filtersSearch = ""
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview')
})


router.get('/B-off-system-MVP/new-folder', function (req, res) {
    console.log("parentId in session:", req.session.data.currentFolder);
    res.render('ur-dec-2025-closed/B-off-system-MVP/new-folder');
});

router.post('/B-off-system-MVP/new-folder', function (req, res) {
    console.log("parentId in session post:", Number(req.session.data.currentFolder));
    console.log("folderId:", req.body.parentFolder);
    let data = req.session.data;
    let materials = data.materials || [];

    const currentFolder = req.session.data.currentFolder || 0;
    const parentFolder = req.session.data.parentFolder || 0;

    const newFolderName = req.body.newFolderName?.trim();

    console.log("Creating new folder:", newFolderName);

    if (!newFolderName) {
        return res.render('ur-dec-2025-closed/B-off-system-MVP/new-folder', {
            error: "Enter a folder name"
        });
    }

    // Get highest existing ID in materials
    const maxId = materials.length > 0
        ? Math.max(...materials.map(m => Number(m.id)))
        : 0;

    // Create new folder object
    const newFolder = {
        id: maxId + 1,
        name: newFolderName,
        type: null,
        category: null,
        date: null,
        status: null,
        new: false,
        docLink: null,
        previewLink: null,
        parentId: parentFolder ? Number(parentFolder) : currentFolder,
        folder: true,
        level: parentFolder != 0 ? 2 : 1,
    };

    console.log('Creating folder:', newFolder);

    materials.unshift(newFolder);

    // Save back into session
    data.materials = materials;

    // Redirect back to manage materials
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
});


router.post('/ur-dec-2025-closed/B-off-system-MVP/case-overview', function (req, res) {
    const data = req.session.data;
    res.render('ur-dec-2025-closed/B-off-system-MVP/03-case-overview', { materials: data.materials || [], data });
});



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
        m => !selected.includes(String(m.id))
    );

    //  (Optional) You could store the discard reason somewhere for audit, e.g.:
    req.session.data.lastDiscard = { reason, items: selected, date: new Date().toISOString() };
    console.log('Last discard action stored:', req.session.data.lastDiscard);

    //  Mark or remove discarded materials
    // req.session.data.materials = req.session.data.materials.map(m => {
    // if (selected.includes(m.name)) {
    //     m.status = 'Discarded (' + reason + ')';
    // }
    // return m;
    // });

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
});


// -----------------------------------------------------
// RENAME MATERIAL (page)
// -----------------------------------------------------

// router.post('/B-off-system-MVP/rename-from-list', function (req, res) {
//     const id = Number(req.body.material_selected);

//     if (!id) {
//         return res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
//     }

//     res.redirect(`/ur-dec-2025-closed/B-off-system-MVP/rename?id=${id}`);
// });


router.post('/B-off-system-MVP/rename-from-list', function (req, res) {
    const id = Number(req.body.material_selected);

    console.log('Rename-from-list ID:', id);

    if (!id) {
        console.log('❌ Rename-from-list: invalid ID');
        return res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
    }

    const materials = req.session.data.materials || [];
    const item = materials.find(m => m.id === id);

    if (!item) {
        console.log('❌ Rename-from-list: item not found', id);
        return res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
    }

    res.render('ur-dec-2025-closed/B-off-system-MVP/rename', { item });
});


router.post('/B-off-system-MVP/rename', function (req, res) {
    console.log('Rename POST body:', req.body);

    const data = req.session.data;
    const materials = data.materials || [];

    const id = Number(req.body.id);
    const newName = req.body.newName?.trim();

    const item = materials.find(m => m.id === id);

    if (!item) {
        return res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
    }

    if (!newName) {
        return res.render('ur-dec-2025-closed/B-off-system-MVP/rename', {
            item,
            error: 'Enter a name'
        });
    }

    item.name = newName;

    if (!item.folder) {
        item.date = new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }

    data.materials = materials;

    return res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
});



// router.post('/B-off-system-MVP/rename-from-list', function (req, res) {
//     const data = req.session.data;
//     const materials = data.materials || [];
//     const id = Number(req.body.material_selected);

//     const item = materials.find(m => m.id === id);

//     if (!item) {
//         return res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
//     }

//     res.render('ur-dec-2025-closed/B-off-system-MVP/rename', {
//         item
//     });
// });


// router.post('/B-off-system-MVP/rename', function (req, res) {
//     const data = req.session.data;
//     let materials = data.materials || [];

//     const id = Number(req.body.id);
//     const newName = req.body.newName?.trim();

//     const item = materials.find(m => m.id === id);

//     if (!item) {
//         return res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
//     }

//     if (!newName) {
//         return res.render('ur-dec-2025-closed/B-off-system-MVP/rename', {
//             item,
//             error: "Enter a name"
//         });
//     }

//     // Apply rename
//     item.name = newName;
//     if (item.folder == false) {
//         item.date = new Date().toLocaleDateString('en-GB', {
//             day: '2-digit',
//             month: 'short',
//             year: 'numeric'
//         });
//     }

//     console.log(`✏️ Renamed material ID ${id} to "${newName}" and last update "${item.date}"`);

//     // Save back to session
//     data.materials = materials;

//     // 🔙 Redirect to correct place based on parent folder
//     const parent = item.parentId || 0;

//     if (parent !== 0) {
//         return res.redirect(`/ur-dec-2025-closed/B-off-system-MVP/03-case-overview?folder=${parent}`);
//     }

//     return res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
// });


// Rename material modal
// Step 1: show rename page
// router.post('/B-off-system-MVP/B-rename-material', function (req, res) {
//   const selected = req.body.rename_selected || '';
//   req.session.data.rename_selected = selected;
//   res.redirect('/ur-dec-2025-closed/B-off-system-MVP/B-rename-material');
// });

// // Step 2: handle save
// router.post('/B-off-system-MVP/B-rename-material-save', function (req, res) {
//   const oldName = req.body.rename_selected;
//   const newName = req.body.newName?.trim();

//   if (!oldName || !newName) {
//     return res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
//   }

//   req.session.data.materials = req.session.data.materials.map(m => {
//     if (m.name === oldName) {
//       return { ...m, name: newName };
//     }
//     return m;
//   });

//   console.log(`✏️ Renamed "${oldName}" → "${newName}"`);

//   res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
// });

router.post('/B-off-system-MVP/set-materials-mode', function (req, res) {
    const mode = req.body.mode;
    const selectedIds = req.body.selected_ids || '';

    req.session.data.materialsMode = mode || null;
    req.session.data.materialsSelected = selectedIds;   // <-- THIS LINE IS THE KEY

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
});

// Helper: recursively collect ALL descendants of a folder (flat list)
function getAllDescendants(materials, parentId) {
    const results = [];
    const stack = [parentId];

    while (stack.length > 0) {
        const currentId = stack.pop();

        const children = materials.filter(m => String(m.parentId) === String(currentId));

        children.forEach(child => {
            results.push(child);
            stack.push(child.id);
        });
    }

    return results;
}

// Helper: build a nested tree for preview in the banner
function buildPreviewTree(materials, rootIds) {
    const byId = {};
    materials.forEach(m => {
        byId[String(m.id)] = m;
    });

    function buildNode(item) {
        const children = materials
            .filter(m => String(m.parentId) === String(item.id))
            .map(buildNode);

        return {
            id: item.id,
            name: item.name,
            isFolder: !!item.folder,
            children
        };
    }

    return rootIds
        .map(id => byId[String(id)])
        .filter(Boolean)
        .map(buildNode);
}

router.post('/B-off-system-MVP/copy-material', function (req, res) {

    req.session.data.moveSuccess = false;   // Clear move flag

    const ids = req.body.selected_ids
        ? req.body.selected_ids.split(',').map(x => String(x).trim())
        : [];

    const destinationFolderId = req.body.destinationFolder;
    const materials = req.session.data.materials || [];

    console.log("Copying:", ids, "into folder", destinationFolderId);

    // Take a snapshot BEFORE we mutate materials, for preview tree
    const originalMaterials = [...materials];

    // For banner
    const copiedNames = [];

    // Destination folder name for the banner
    let destinationFolderName = null;
    const destFolder = materials.find(m => String(m.id) === String(destinationFolderId));
    if (destFolder) {
        destinationFolderName = destFolder.name;
    }

    // Build tree preview from the original structure (before copying)
    const copyPreviewTree = buildPreviewTree(originalMaterials, ids);

    // Actually perform the copy (with full structure)
    ids.forEach(id => {
        const original = materials.find(m => String(m.id) === id);
        if (!original) return;

        // Record for banner
        copiedNames.push(original.name);

        // Map old→new IDs so structure stays intact
        const idMap = {};
        const newId = Date.now() + Math.random();
        idMap[id] = newId;

        // Clone the folder/file itself
        const topClone = {
            ...original,
            id: newId,
            parentId: destinationFolderId
        };
        materials.push(topClone);

        // Get all nested descendants
        const descendants = getAllDescendants(originalMaterials, id);

        descendants.forEach(child => {
            const newChildId = Date.now() + Math.random();
            idMap[child.id] = newChildId;

            materials.push({
                ...child,
                id: newChildId,
                parentId: idMap[child.parentId]   // reconnect the tree
            });

            copiedNames.push(child.name); // Add to banner list
        });
    });

    // Store results for banner
    req.session.data.copyList = copiedNames;
    req.session.data.copyDestinationName = destinationFolderName;
    req.session.data.copyPreviewTree = copyPreviewTree;
    req.session.data.copySuccess = true;

    // Reset selection + mode
    req.session.data.materialsMode = null;
    req.session.data.materialsSelected = '';

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
});


router.post('/B-off-system-MVP/move-material', function (req, res) {

    req.session.data.copySuccess = false;  // Clear copy flag

    const ids = req.body.selected_ids
        ? req.body.selected_ids.split(',').map(x => String(x).trim())
        : [];

    const destinationFolderId = req.body.destinationFolder;
    const materials = req.session.data.materials || [];

    console.log("Moving:", ids, "into folder", destinationFolderId);

    // Snapshot BEFORE we move items (for preview)
    const originalMaterials = [...materials];

    // List for flat banner summary
    const movedNames = [];

    ids.forEach(id => {
        const original = originalMaterials.find(m => String(m.id) === String(id));
        if (original) movedNames.push(original.name);
    });

    // Destination folder name for banner
    let destinationFolderName = null;
    const destFolder = originalMaterials.find(m => String(m.id) === String(destinationFolderId));
    if (destFolder) {
        destinationFolderName = destFolder.name;
    }

    // Build nested preview tree (based on original structure)
    const movePreviewTree = buildPreviewTree(originalMaterials, ids);

    // Perform the move
    req.session.data.materials = materials.map(m => {
        if (ids.includes(String(m.id))) {
            return { ...m, parentId: destinationFolderId };
        }
        return m;
    });

    // Banner data
    req.session.data.moveList = movedNames;
    req.session.data.moveDestinationName = destinationFolderName;
    req.session.data.movePreviewTree = movePreviewTree;
    req.session.data.moveSuccess = true;

    // Reset selection + mode
    req.session.data.materialsMode = null;
    req.session.data.materialsSelected = '';

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
});


// CLEAR ALL FILTERS
router.get('/includes/materials/clear-filters', function (req, res) {

    // Wipe all filter fields you use
    req.session.data.filterUnread = null;
    req.session.data.filterRead = null;

    req.session.data.filterStatusUsed = null;
    req.session.data.filterStatusUnused = null;
    req.session.data.filterStatusNone = null;

    req.session.data.filtersSearch = null;

    // Redirect back to the materials page
    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
    // change this to whatever your main materials URL is
});

// CLEAR A SPECIFIC FILTER
router.get('/includes/materials/clear-filter', function (req, res) {

    const type = req.query.type;

    // Safely delete it from session
    if (type && req.session.data.hasOwnProperty(type)) {
        req.session.data[type] = null;
    }

    res.redirect('/ur-dec-2025-closed/B-off-system-MVP/03-case-overview');
    // again: use your actual materials page URL
});


module.exports = router