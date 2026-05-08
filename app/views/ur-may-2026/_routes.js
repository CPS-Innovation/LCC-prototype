const express = require('express');
const { editSuspect, chargeDescription, materials, victims } = require('../../data/session-data-defaults.js');
const router = express.Router();
const version = 'ur-may-2026'



// Make session data available in all Nunjucks templates as "data"
router.use((req, res, next) => {
    res.locals.data = req.session.data || {};
    next();
});


router.use((req, res, next) => {
    if (!Array.isArray(req.session.data.materialsURMay2026)) {
        const defaults =
            res.locals.data.materialsURMay2026 ||
            res.locals.data.materials ||
            [];
        req.session.data.materialsURMay2026 = JSON.parse(JSON.stringify(defaults));
    }

    Object.defineProperty(req.session.data, 'materials', {
        get() {
            return this.materialsURMay2026;
        },
        set(value) {
            this.materialsURMay2026 = value;
        },
        configurable: true
    });

    res.locals.data.materialsURMay2026 = req.session.data.materialsURMay2026;
    res.locals.data.materials = req.session.data.materialsURMay2026;
    res.locals.data.materialsStaticActivityEntries = getStaticMaterialsActivityEntries(req.session.data.materialsURMay2026);

    next();
});

function getStaticMaterialsActivityEntries(materials = []) {
    const source = String.raw`Items deleted
Yesterday at 4:00pm by meredith.palmer@cps.gov.uk
Location: Home: Thundercat > 7. Finance
• file_0_1.docx
• file_0_2.docx
• file_0_3.docx

Items renamed
Yesterday at 1:45pm by pam.beesly@cps.gov.uk
Location: Home: Thundercat > 4. Counsel
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx

Items deleted
Yesterday at 1:00pm by pam.beesly@cps.gov.uk
Location: Home: Thundercat > 4. Counsel
• file_2_1.docx
• file_2_2.docx
• file_2_3.docx
• file_2_4.docx
• file_2_5.docx

Item deleted
Yesterday at 12:00pm by dwight_schrute@cps.gov.uk
Location: Home: Thundercat > 1. Case management
• file_3_1.docx

Items renamed
Yesterday at 11:00am by jordan.ellis@cps.gov.uk
Location: Home: Thundercat > 15. IDPC
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx

Items renamed
Yesterday at 8:45am by sarah.khan@cps.gov.uk
Location: Home: Thundercat > 10. Police
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx
• file_3.docx → file_3_v2.docx

Items renamed
Yesterday at 8:30am by sarah.khan@cps.gov.uk
Location: Home: Thundercat > 3. Experts
• file_1.docx → file_1_v2.docx

Items not copied
08 May 2026 at 11.05am by kelly.kapoor@cps.gov.uk
Files with the same name already exist in the destination.
From: Home: Thundercat > 6. Disclosure
To: Home: Thundercat > 12. Victims and Witnesses
• file_7_1.docx
• file_7_2.docx

Items moved
08 May 2026 at 10:45am by pam.beesly@cps.gov.uk
From: Home: Thundercat > 5. Correspondence
To: Home: Thundercat > 3. Experts
• file_8_1.docx
• file_8_2.docx

Items copied
07 May 2026 at 1:15pm by sarah.khan@cps.gov.uk
From: Home: Thundercat > 3. Experts
To: Home: Thundercat > 11. Media
• file_9_1.docx
• file_9_2.docx

Items deleted
06 May 2026 at 4:45pm by meredith.palmer@cps.gov.uk
Location: Home: Thundercat > 7. Finance
• file_10_1.docx
• file_10_2.docx
• file_10_3.docx
• file_10_4.docx

Items deleted
05 May 2026 at 1:15pm by sarah.khan@cps.gov.uk
Location: Home: Thundercat > 12. Victims and Witnesses
• file_11_1.docx
• file_11_2.docx
• file_11_3.docx
• file_11_4.docx
• file_11_5.docx

Items copied
04 May 2026 at 3:30pm by oscar.martinez@cps.gov.uk
From: Home: Thundercat > 6. Disclosure
To: Home: Thundercat > 11. Media
• file_12_1.docx
• file_12_2.docx
• file_12_3.docx

Items deleted
04 May 2026 at 11:30am by meredith.palmer@cps.gov.uk
Location: Home: Thundercat > 4. Counsel
• file_13_1.docx

Items moved
04 May 2026 at 8:15am by kevin.malone@cps.gov.uk
From: Home: Thundercat > 1. Case management
To: Home: Thundercat > 6. Disclosure
• file_14_1.docx
• file_14_2.docx
• file_14_3.docx

Items moved
04 May 2026 at 8:00am by sarah.khan@cps.gov.uk
From: Home: Thundercat > 15. IDPC
To: Home: Thundercat > 7. Finance
• file_15_1.docx
• file_15_2.docx

Items copied
03 May 2026 at 5:00pm by meredith.palmer@cps.gov.uk
From: Home: Thundercat > 12. Victims and Witnesses
To: Home: Thundercat > 14. Magistrates Court
• file_16_1.docx
• file_16_2.docx
• file_16_3.docx
• file_16_4.docx

Items renamed
03 May 2026 at 9:00am by pam.beesly@cps.gov.uk
Location: Home: Thundercat > 6. Disclosure
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx

Items renamed
01 May 2026 at 6:30pm by kelly.kapoor@cps.gov.uk
Location: Home: Thundercat > 10. Police
• file_1.docx → file_1_v2.docx

Items deleted
01 May 2026 at 6:00pm by jordan.ellis@cps.gov.uk
Location: Home: Thundercat > 12. Victims and Witnesses
• file_19_1.docx
• file_19_2.docx
• file_19_3.docx
• file_19_4.docx

Items renamed
01 May 2026 at 2:30pm by dwight_schrute@cps.gov.uk
Location: Home: Thundercat > 11. Media
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx

Items moved
01 May 2026 at 1:30pm by dwight_schrute@cps.gov.uk
From: Home: Thundercat > 4. Counsel
To: Home: Thundercat > 12. Victims and Witnesses
• file_21_1.docx
• file_21_2.docx
• file_21_3.docx
• file_21_4.docx

Items deleted
01 May 2026 at 8:45am by oscar.martinez@cps.gov.uk
Location: Home: Thundercat > 6. Disclosure
• file_22_1.docx
• file_22_2.docx
• file_22_3.docx
• file_22_4.docx
• file_22_5.docx

Items moved
30 April 2026 at 11:00am by kelly.kapoor@cps.gov.uk
From: Home: Thundercat > 3. Experts
To: Home: Thundercat > 7. Finance
• file_23_1.docx
• file_23_2.docx
• file_23_3.docx

Items moved
29 April 2026 at 6:30pm by angela.martin@cps.gov.uk
From: Home: Thundercat > 10. Police
To: Home: Thundercat > 8. Lawyer working copies
• file_24_1.docx
• file_24_2.docx
• file_24_3.docx
• file_24_4.docx
• file_24_5.docx

Items deleted
29 April 2026 at 2:30pm by meredith.palmer@cps.gov.uk
Location: Home: Thundercat > 15. IDPC
• file_25_1.docx
• file_25_2.docx

Items moved
28 April 2026 at 4:45pm by jordan.ellis@cps.gov.uk
From: Home: Thundercat > 7. Finance
To: Home: Thundercat > 12. Victims and Witnesses
• file_26_1.docx
• file_26_2.docx

Items copied
28 April 2026 at 9:45am by kevin.malone@cps.gov.uk
From: Home: Thundercat > 1. Case management
To: Home: Thundercat > 11. Media
• file_27_1.docx

Items copied
27 April 2026 at 4:30pm by jordan.ellis@cps.gov.uk
From: Home: Thundercat > 12. Victims and Witnesses
To: Home: Thundercat > 8. Lawyer working copies
• file_28_1.docx

Items moved
27 April 2026 at 3:45pm by pam.beesly@cps.gov.uk
From: Home: Thundercat > 5. Correspondence
To: Home: Thundercat > 9. PO working copies
• file_29_1.docx
• file_29_2.docx

Items deleted
27 April 2026 at 2:15pm by kelly.kapoor@cps.gov.uk
Location: Home: Thundercat > 6. Disclosure
• file_30_1.docx
• file_30_2.docx

Items deleted
27 April 2026 at 8:00am by kelly.kapoor@cps.gov.uk
Location: Home: Thundercat > 1. Case management
• file_31_1.docx
• file_31_2.docx
• file_31_3.docx

Items copied
24 April 2026 at 12:00pm by meredith.palmer@cps.gov.uk
From: Home: Thundercat > 14. Magistrates Court
To: Home: Thundercat > 5. Correspondence
• file_32_1.docx

Items moved
24 April 2026 at 11:30am by jordan.ellis@cps.gov.uk
From: Home: Thundercat > 10. Police
To: Home: Thundercat > 1. Case management
• file_33_1.docx
• file_33_2.docx

Items renamed
24 April 2026 at 10:15am by sarah.khan@cps.gov.uk
Location: Home: Thundercat > 9. PO working copies
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx
• file_3.docx → file_3_v2.docx
• file_4.docx → file_4_v2.docx

Items deleted
24 April 2026 at 9:45am by dwight_schrute@cps.gov.uk
Location: Home: Thundercat > 7. Finance
• file_35_1.docx
• file_35_2.docx
• file_35_3.docx
• file_35_4.docx
• file_35_5.docx

Items copied
23 April 2026 at 7:45pm by jordan.ellis@cps.gov.uk
From: Home: Thundercat > 12. Victims and Witnesses
To: Home: Thundercat > 4. Counsel
• file_36_1.docx
• file_36_2.docx

Items moved
23 April 2026 at 7:00pm by kevin.malone@cps.gov.uk
From: Home: Thundercat > 9. PO working copies
To: Home: Thundercat > 11. Media
• file_37_1.docx

Items moved
23 April 2026 at 4:15pm by wight_schrute@cps.gov.uk
From: Home: Thundercat > 12. Victims and Witnesses
To: Home: Thundercat > 10. Police
• file_38_1.docx
• file_38_2.docx

Items moved
23 April 2026 at 3:30pm by oscar.martinez@cps.gov.uk
From: Home: Thundercat > 9. PO working copies
To: Home: Thundercat > 12. Victims and Witnesses
• file_39_1.docx
• file_39_2.docx
• file_39_3.docx

Items renamed
23 April at 3:15pm by pam.beesly@cps.gov.uk
Location: Home: Thundercat > 15. IDPC
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx
• file_3.docx → file_3_v2.docx
• file_4.docx → file_4_v2.docx

Items renamed
23 April 2026 at 2:30pm by kelly.kapoor@cps.gov.uk
Location: Home: Thundercat > 12. Victims and Witnesses
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx
• file_3.docx → file_3_v2.docx

Items renamed
23 April 2026 at 2:00pm by oscar.martinez@cps.gov.uk
Location: Home: Thundercat > 1. Case management
• file_1.docx → file_1_v2.docx

Items deleted
23 April 2026 at 1:30pm by oscar.martinez@cps.gov.uk
Location: Home: Thundercat > 11. Media
• file_43_1.docx
• file_43_2.docx
• file_43_3.docx
• file_43_4.docx
• file_43_5.docx

Items renamed
22 April 2026 at 4:00pm by jordan.ellis@cps.gov.uk
Location: Home: Thundercat > 3. Experts
• file_1.docx → file_1_v2.docx

Items deleted
22 April 2026 at 3:00pm by jordan.ellis@cps.gov.uk
Location: Home: Thundercat > 11. Media
• file_45_1.docx
• file_45_2.docx
• file_45_3.docx
• file_45_4.docx
• file_45_5.docx

Items renamed
22 April 2026 at 2:30pm by kevin.malone@cps.gov.uk
Location: Home: Thundercat > 7. Finance
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx
• file_3.docx → file_3_v2.docx

Items deleted
22 April 2026 at 12:15pm by dwight_schrute@cps.gov.uk
Location: Home: Thundercat > 1. Case management
• file_47_1.docx
• file_47_2.docx

Items deleted
22 April 2026 at 11:30am by angela.martin@cps.gov.uk
Location: Home: Thundercat > 9. PO working copies
• file_48_1.docx
• file_48_2.docx
• file_48_3.docx
• file_48_4.docx
• file_48_5.docx

Items moved
22 April 2026 at 9:00am by kevin.malone@cps.gov.uk
From: Home: Thundercat > 14. Magistrates Court
To: Home: Thundercat > 6. Disclosure
• file_49_1.docx

Items deleted
21 April 2026 at 6:30pm by kelly.kapoor@cps.gov.uk
Location: Home: Thundercat > 7. Finance
• file_50_1.docx
• file_50_2.docx
• file_50_3.docx

Items deleted
21 April 2026 at 3:00pm by kevin.malone@cps.gov.uk
Location: Home: Thundercat > 10. Police
• file_51_1.docx
• file_51_2.docx
• file_51_3.docx
• file_51_4.docx
• file_51_5.docx

Items copied
21 April 2026 at 2:45pm by pam.beesly@cps.gov.uk
From: Home: Thundercat > 14. Magistrates Court
To: Home: Thundercat > 4. Counsel
• file_52_1.docx
• file_52_2.docx
• file_52_3.docx

Items moved
21 April 2026 at 2:15pm by sarah.khan@cps.gov.uk
From: Home: Thundercat > 6. Disclosure
To: Home: Thundercat > 7. Finance
• file_53_1.docx
• file_53_2.docx
• file_53_3.docx
• file_53_4.docx
• file_53_5.docx

Items renamed
21 April 2026 at 11:30am by kevin.malone@cps.gov.uk
Location: Home: Thundercat > 5. Correspondence
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx

Items renamed
21 April 2026 at 11:00am by meredith.palmer@cps.gov.uk
Location: Home: Thundercat > 15. IDPC
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx
• file_3.docx → file_3_v2.docx
• file_4.docx → file_4_v2.docx

Items renamed
21 April 2026 at 10:30am by pam.beesly@cps.gov.uk
Location: Home: Thundercat > 7. Finance
• file_1.docx → file_1_v2.docx
• file_2.docx → file_2_v2.docx
• file_3.docx → file_3_v2.docx

Items renamed
21 April 2026 at 9:00am by meredith.palmer@cps.gov.uk
Location: Home: Thundercat > 11. Media
• file_1.docx → file_1_v2.docx

Items copied
21 April 2026 at 7:15am by oscar.martinez@cps.gov.uk
From: Home: Thundercat > 8. Lawyer working copies
To: Home: Thundercat > 7. Finance
• file_58_1.docx
• file_58_2.docx
• file_58_3.docx

Items deleted
20 April 2026 at 7:15pm by kevin.malone@cps.gov.uk
Location: Home: Thundercat > 4. Counsel
• file_59_1.docx
• file_59_2.docx

Items deleted
21 April 2026 at 5:12pm by creed.bratton@cps.gov.uk
Location: Home: Thundercat > 7. Finance
• budget_summary.xlsx`;

    const lines = source.split(/\r?\n/).map(line => line.trimEnd());
    const entries = [];
    let index = 0;

    while (index < lines.length) {
        while (index < lines.length && !lines[index].trim()) index++;
        if (index >= lines.length) break;

        const title = lines[index++].trim();
        while (index < lines.length && !lines[index].trim()) index++;
        if (index >= lines.length) break;

        const dateBy = lines[index++].trim();
        let description = '';
        const sourceLines = [];
        const items = [];

        while (index < lines.length && !lines[index].trim()) index++;

        while (index < lines.length && lines[index].trim()) {
            const line = lines[index].trim();
            if (line.startsWith('• ')) {
                items.push(line.slice(2));
            } else if (line.startsWith('Location: ')) {
                const value = line.slice('Location: '.length);
                sourceLines.push({ label: 'Location:', value, href: getStaticActivityFolderHref(materials, value) });
            } else if (line.startsWith('From: ')) {
                const value = line.slice('From: '.length);
                sourceLines.push({ label: 'Original location:', value, href: getStaticActivityFolderHref(materials, value) });
            } else if (line.startsWith('To: ')) {
                const value = line.slice('To: '.length);
                sourceLines.push({ label: 'New location:', value, href: getStaticActivityFolderHref(materials, value) });
            } else {
                description = line;
            }
            index++;
        }

        entries.push({
            title,
            dateBy,
            description,
            sourceLines,
            items
        });
    }

    entries.push({
        legacyType: 'transferSharedDrive',
        title: 'Transfer from Egress to Shared Drive',
        dateBy: '22 March 2026 at 12:05pm by usability.testing.session@cps.gov.uk',
        description: '200 files were transferred.',
        sourceLines: [
            { label: 'Original location:', value: 'Egress > Investigator' },
            { label: 'New location:', value: 'Home: Thundercat', href: '/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=0' }
        ]
    });

    entries.push({
        title: 'Case connected to Egress',
        dateBy: '22 March 2026 at 9:10am by dwight_schrute@cps.gov.uk',
        description: '',
        sourceLines: [],
        items: []
    });

    entries.push({
        title: 'Case connected to Shared Drive',
        dateBy: '22 March 2026 at 9:10am by dwight_schrute@cps.gov.uk',
        description: '',
        sourceLines: [],
        items: []
    });

    entries.push({
        title: 'Case registered',
        dateBy: '22 March 2026 at 9:05am by dwight_schrute@cps.gov.uk',
        description: '',
        sourceLines: [],
        items: []
    });

    return entries;
}

function getStaticActivityFolderHref(materials = [], pathLabel = '') {
    if (!pathLabel || pathLabel === 'Home: Thundercat') {
        return '/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=0';
    }

    const normalisedPath = String(pathLabel).replace(/^Home:\s*Thundercat\s*>\s*/, '');
    const parts = normalisedPath.split('>').map(part => part.trim()).filter(Boolean);
    if (!parts.length) {
        return '/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=0';
    }

    let parentId = 0;
    let currentFolder = null;

    for (const part of parts) {
        currentFolder = (materials || []).find(item =>
            item &&
            item.folder &&
            String(item.parentId ?? 0) === String(parentId) &&
            String(item.name || '').trim() === part
        );

        if (!currentFolder) return null;
        parentId = currentFolder.id;
    }

    return currentFolder
        ? `/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=${currentFolder.id}`
        : null;
}


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

    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/02-area')
    // }
    // else {
    //     res.render('ur-may-2026/B-off-system-MVP/create-case/01-register-case', { 
    //         errors: errors
    //     })
    // }
})

// Area page
router.post('/B-off-system-MVP/create-case/02-area', function (req, res) {
    req.session.data.area = req.body['docType-Area']
    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/02-case-details')
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
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        const valueToRemove = 'Pre-Charge Decision'

        req.session.data.newCase_MonitoringCodes = req.session.data.newCase_MonitoringCodes.filter(item => item !== valueToRemove)

        const suspects = [].concat(req.session.data.suspectId).map(String)
        const charged = [].concat(req.session.data.chargeSuspectId).map(String)

        const hasUncharged = suspects.some(id => !charged.includes(id))
        req.session.data.preCharge = hasUncharged ? 'Yes' : 'No'

        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/06-monitoring-codes')
    }
})


// First hearing details
router.post('/B-off-system-MVP/create-case/02-first-hearing-details', function (req, res) {
    req.session.data.firstHearingDetailsYesNo = req.body['first-hearing-details']

    if (req.session.data.firstHearingDetailsYesNo === 'Yes') {
        req.session.data.courtLocation = req.body['court-location']
        req.session.data.firstHearingDate = req.body['newCase_FirstHearing_Date']
    }

    const valueToRemove = 'Pre-Charge Decision'

    req.session.data.newCase_MonitoringCodes = req.session.data.newCase_MonitoringCodes.filter(item => item !== valueToRemove)

    const suspects = [].concat(req.session.data.suspectId).map(String)
    const charged = [].concat(req.session.data.chargeSuspectId).map(String)

    const hasUncharged = suspects.some(id => !charged.includes(id))
    req.session.data.preCharge = hasUncharged ? 'Yes' : 'No'

    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/06-monitoring-codes')

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
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-dob')
    }
    else if (req.session.data.suspectGender[id] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-gender')
    }
    else if (req.session.data.suspectDisability[id] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[id] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[id] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[id] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[id] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[id] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[id] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
    }

    // res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
})


// Suspect details – date of birth
router.post('/B-off-system-MVP/create-case/03-suspect-details-dob', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectDayBirth[count] = req.body['date-of-birth-day']
    req.session.data.suspectMonthBirth[count] = Number(req.body['date-of-birth-month'])
    req.session.data.suspectYearBirth[count] = req.body['date-of-birth-year']

    if (req.session.data.suspectGender[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-gender')
    }
    else if (req.session.data.suspectDisability[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Suspect details – gender
router.post('/B-off-system-MVP/create-case/03-suspect-details-gender', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectGender[count] = req.body['gender']

    if (req.session.data.suspectDisability[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-disability')
    }
    else if (req.session.data.suspectReligion[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Suspect details – disability
router.post('/B-off-system-MVP/create-case/03-suspect-details-disability', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectDisability[count] = req.body['disability']

    if (req.session.data.suspectReligion[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-religion')
    }
    else if (req.session.data.suspectEthnicity[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Suspect details – religion
router.post('/B-off-system-MVP/create-case/03-suspect-details-religion', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectReligion[count] = req.body['religion']

    if (req.session.data.suspectEthnicity[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-ethnicity')
    }
    else if (req.session.data.suspectAlias[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Suspect details – ethnicity
router.post('/B-off-system-MVP/create-case/03-suspect-details-ethnicity', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectEthnicity[count] = req.body['ethnicity']

    if (req.session.data.suspectAlias[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else if (req.session.data.suspectSDO[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-sdo')
    }
    else if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
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


    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-alias-summary')
})

// Alias summary
router.post('/B-off-system-MVP/create-case/03-suspect-details-alias-summary', function (req, res) {
    count = req.session.data.suspectDetailsCount
    console.log("Alias summary - suspect count:", count)
    console.log("Arrest summons:", req.session.data.suspectArrestSummons[count])

    if (req.body['add-another'] === 'Yes') {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-add-alias')
    }
    else {
        if (req.session.data.suspectSDO[count] != undefined) {
            res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-sdo')
        }
        else if (req.session.data.suspectArrestSummons[count] != undefined) {
            res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
        }
        else if (req.session.data.suspectOffenderType[count] != undefined) {
            res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-offender-type')
        }
        else {
            res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
        }
    }
})
// End of alias section


// Suspect details – SDO
router.post('/B-off-system-MVP/create-case/03-suspect-details-sdo', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectSDO[count] = req.body['sdo']

    if (req.session.data.suspectArrestSummons[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-arrest-summons')
    }
    else if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
    }
})


// Suspect details – arrest summons
router.post('/B-off-system-MVP/create-case/03-suspect-details-arrest-summons', function (req, res) {
    count = req.session.data.suspectDetailsCount

    req.session.data.suspectArrestSummons[count] = req.body['arrest-summons']

    if (req.session.data.suspectOffenderType[count] != undefined) {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-suspect-details-offender-type')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
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



    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
})


// End of add suspects


// Suspect summary
router.post('/B-off-system-MVP/create-case/03B-suspect-summary', function (req, res) {
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-want-to-add-charges')
        // res.redirect('/ur-may-2026/B-off-system-MVP/create-case/06-monitoring-codes') 
    }
})


router.post('/B-off-system-MVP/create-case/remove-suspect', function (req, res) {
    req.session.data.removeSuspectId = Number(req.body['remove-suspect-id'])
    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-remove-suspect')
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

    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
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

    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03B-suspect-summary')
})
// End of suspect summary


router.post('/B-off-system-MVP/create-case/03-edit-suspect-router', function (req, res) {
    req.session.data.editSuspect = Number(req.body['edit-suspect'])
    req.session.data.displaySuspect = Number(req.body['edit-suspect']) + 1
    console.log("Edit suspect ID:", req.session.data.editSuspect)
    console.log("Display suspect ID:", req.session.data.displaySuspect)
    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-add-suspect')
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
            res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-charges-offence-search')
        }
        else {
            res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-add-charges-suspect')
        }
    }
    else {
        const valueToRemove = 'Pre-Charge Decision'

        req.session.data.newCase_MonitoringCodes = req.session.data.newCase_MonitoringCodes.filter(item => item !== valueToRemove)

        const suspects = [].concat(req.session.data.suspectId).map(String)
        const charged = [].concat(req.session.data.chargeSuspectId).map(String)

        const hasUncharged = suspects.some(id => !charged.includes(id))
        req.session.data.preCharge = hasUncharged ? 'Yes' : 'No'

        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/06-monitoring-codes')
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
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/03-add-suspect')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-charges-offence-search')
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
    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-charges-offence-search')
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


    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-charges-offence-search-results')
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

    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-add-charges')
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
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-add-charges-victim')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-charges-summary')
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

    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-charges-summary')
})




// Charges summary
router.post('/B-off-system-MVP/create-case/04-charges-summary', function (req, res) {
    if (req.body['add-another'] === 'Yes') {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-add-charges-suspect')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/02-first-hearing-details')
    }

})

router.get('/B-off-system-MVP/create-case/04-charges-summary', function (req, res) {
    res.render('ur-may-2026/B-off-system-MVP/create-case/04-charges-summary', {
        grouped: req.session.data.grouped
    });
})


router.post('/B-off-system-MVP/create-case/remove-charge', function (req, res) {
    req.session.data.removeChargeId = Number(req.body['remove-charge-id'])
    console.log("Remove charge ID:", req.session.data.removeChargeId)
    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-remove-charge')
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

    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/04-charges-summary')
})


// ************************************************** End of charges **************************************************



// Complexity 
router.post('/B-off-system-MVP/create-case/05-complexity', function (req, res) {
    req.session.data.caseComplexity = req.body['newCase_Complexity']
    // req.session.data.caseWeight = req.body['newCase_CaseWeight']

    // console.log("Charge suspect IDs:", req.session.data.currentSuspectId)
    // //    let codes = req.session.data.newCase_MonitoringCodes || []


    // req.session.data.preCharge = 'No'

    // const valueToRemove = 'Pre-Charge Decision'

    // req.session.data.newCase_MonitoringCodes = req.session.data.newCase_MonitoringCodes.filter(item => item !== valueToRemove)

    // const suspects = [].concat(req.session.data.suspectId).map(String)
    // const charged = [].concat(req.session.data.chargeSuspectId).map(String)

    // const hasUncharged = suspects.some(id => !charged.includes(id))
    // req.session.data.preCharge = hasUncharged ? 'Yes' : 'No'
    // console.log("hasUncharged:", hasUncharged)
    // //    }

    // console.log("Pre-charge set to (complexity page):", req.session.data.preCharge)
    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/08-check-answers')
})


// Monitoring codes
router.post('/B-off-system-MVP/create-case/06-monitoring-codes', function (req, res) {
    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/07-cps-staff')
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


    res.redirect('/ur-may-2026/B-off-system-MVP/create-case/08-check-answers')


    // If user is LCC check if there are materials. If not, go to check your answers.
    // if (req.session.data.userType === 'LCC') {
    //     res.redirect('/ur-may-2026/B-off-system-MVP/create-case/07-want-to-create-folders')
    // }
    // else {
    //     res.redirect('/ur-may-2026/B-off-system-MVP/create-case/08-check-your-answers') 
    // }    
})


// Materials
router.post('/B-off-system-MVP/create-case/09-confirmation', function (req, res) {
    req.session.data.addMaterials = req.body['add-materials']
    if (req.session.data.addMaterials === 'Yes') {
        res.redirect('/ur-may-2026/B-off-system-MVP/04A-create-or-link-folders')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/case-details-placeholder')
        // res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview')
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
        res.redirect('/ur-may-2026/B-off-system-MVP/04A-create-egress-folder')
    }

    else if (req.session.data.existingEgressFolder === 1) {
        res.redirect('/ur-may-2026/B-off-system-MVP/04A-egress-files')
    }

    else if (req.session.data.existingDriveFolder === 1) {
        res.redirect('/ur-may-2026/B-off-system-MVP/05A-p-drive-files')
    }

    else if (req.session.data.newDriveFolder === 1) {
        res.redirect('/ur-may-2026/B-off-system-MVP/05A-create-shared-drive-folder')
    }

    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/case-details-placeholder')
        // res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview')
    }

})



router.post('/B-off-system-MVP/04A-create-egress-folder', function (req, res) {
    req.session.data.egressTemplate = req.body['egress-template']

    if (req.session.data.newDriveFolder === 1) {
        res.redirect('/ur-may-2026/B-off-system-MVP/05A-create-shared-drive-folder')
    }
    else if (req.session.data.existingDriveFolder === 1) {
        res.redirect('/ur-may-2026/B-off-system-MVP/05A-p-drive-files')
    }
    else {
        res.redirect('/ur-may-2026/B-off-system-MVP/create-case/case-details-placeholder')
        // res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview')
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
//     res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview')
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

        function getFolderPath(materials, folderId) {
            // Build "Home: Thundercat > Case management > Police" etc
            const parts = [];
            let currentId = folderId;

            // prevent infinite loops if data gets weird
            const seen = new Set();

            while (currentId && !seen.has(String(currentId))) {
                seen.add(String(currentId));

                const folder = materials.find(m => String(m.id) === String(currentId) && m.folder);
                if (!folder) break;

                parts.unshift(folder.name);
                currentId = folder.parentId;
            }

            // Choose your preferred "root" label
            return parts.length ? `Home: Thundercat > ${parts.join(' > ')}` : 'Home: Thundercat';
        }

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

                groups[folderId].files.push({
                    ...item,
                    folderPath: getFolderPath(materials, folderId)
                });
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
    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});


// AI //

const createMaterialsUtils = require('../../helpers/materials.js');

function getActivityActor(data) {
    return {
        name: data['offCMS_Username'] || 'dwight_schrute',
        email: data['urUser'] || 'usability.testing.session@cps.gov.uk'
    };
}

function formatActivityTimestamp(value) {
    const date = value instanceof Date ? value : new Date(value || Date.now());
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    const time = date.toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).toLowerCase().replace(' ', '');

    const isToday =
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear();

    const isYesterday =
        date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear();

    if (isToday) return `today at ${time}`;
    if (isYesterday) return `yesterday at ${time}`;

    const day = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return `${day} at ${time}`;
}

function getFolderPathLabel(materials, folderId) {
    const parts = [];
    let currentId = folderId;
    const seen = new Set();

    while (currentId !== null && currentId !== undefined && !seen.has(String(currentId))) {
        seen.add(String(currentId));
        const folder = materials.find(m => m && m.folder && String(m.id) === String(currentId));
        if (!folder) break;
        parts.unshift(folder.name);
        currentId = folder.parentId;
    }

    return parts.length ? `Home: Thundercat > ${parts.join(' > ')}` : 'Home: Thundercat';
}

function getItemPathLabel(materials, item, nameOverride) {
    const parentPath = getFolderPathLabel(materials, item.parentId);
    const itemName = nameOverride || item.name || 'Unnamed item';
    return `${parentPath} > ${itemName}`;
}

function createBaseActivityEntry(data) {
    const actor = getActivityActor(data);
    return {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        createdAt: new Date().toISOString(),
        byName: '',
        byEmail: actor.email,
        dateLabel: formatActivityTimestamp(new Date())
    };
}

function pushMaterialsActivity(data, entry) {
    data.materialsActivityLog = data.materialsActivityLog || [];
    data.materialsActivityLog.unshift({
        ...createBaseActivityEntry(data),
        ...entry
    });
    data.activityPage = 1;
}


router.get('/B-off-system-MVP/03-case-overview', function (req, res) {
    const data = req.session.data;
    const materials = data.materials || [];
    const transferMaterials = data.transferMaterials || [];
    const pageSizeOptions = [20, 50, 100];

    function normalisePageSize(value) {
        const parsed = Number(value);
        return pageSizeOptions.includes(parsed) ? parsed : 20;
    }

    function buildPaginationItems(currentPage, totalPages) {
        if (totalPages <= 10) {
            return Array.from({ length: totalPages }, (_, index) => ({
                number: index + 1,
                ellipsis: false
            }));
        }

        const items = [];
        const pages = new Set([
            1,
            2,
            totalPages - 1,
            totalPages,
            currentPage - 1,
            currentPage,
            currentPage + 1
        ]);

        const sortedPages = Array.from(pages)
            .filter(page => page >= 1 && page <= totalPages)
            .sort((a, b) => a - b);

        sortedPages.forEach((page, index) => {
            if (index > 0 && page - sortedPages[index - 1] > 1) {
                items.push({ ellipsis: true });
            }

            items.push({
                number: page,
                ellipsis: false
            });
        });

        return items;
    }

    function paginateItems(items, currentPage, pageSize) {
        const totalItems = items.length;
        const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
        const page = Math.min(Math.max(Number(currentPage) || 1, 1), totalPages);
        const startIndex = (page - 1) * pageSize;

        return {
            items: items.slice(startIndex, startIndex + pageSize),
            page,
            pageSize,
            totalItems,
            totalPages,
            pageItems: buildPaginationItems(page, totalPages),
            startItem: totalItems === 0 ? 0 : startIndex + 1,
            endItem: Math.min(startIndex + pageSize, totalItems),
            showPagination: totalItems > 20
        };
    }

    function sortByName(items) {
        return [...items].sort((a, b) =>
            String(a?.name || '').localeCompare(String(b?.name || ''), 'en', {
                numeric: true,
                sensitivity: 'base'
            })
        );
    }

    // ✅ Seed default "last ordered" metadata (prototype baseline)
    data.orderMeta = data.orderMeta || {};

    // Only seed if it's not already set (so user actions can overwrite it)
    if (!data.orderMeta["1007"]) {
        data.orderMeta["1007"] = {
            person: "Roxanne Rowe",
            date: "12 January 2026"
        };
    }

    // 👇 MINIMAL PATCH – add these two lines
    const flashRenamedId = String(data.flashRenamedId || '');
    req.session.data.flashRenamedId = '';

    const flashNewFolderId = String(data.flashNewFolderId || '');
    req.session.data.flashNewFolderId = '';

    // Clear renamed flags from previous renders
    materials.forEach(m => {
        if (m.renamed && m.id !== lastRenamedId) {
            delete m.renamed;
        }
    });

    // Extract flags + lists for THIS render only
    const copySuccess = data.copySuccess === true;
    const moveSuccess = data.moveSuccess === true;
    const deleteSuccess = data.deleteSuccess === true;

    const copyList = data.copyList || [];
    const moveList = data.moveList || [];

    const copyDestinationName = data.copyDestinationName || null;
    const moveDestinationName = data.moveDestinationName || null;

    const copyPreviewTree = data.copyPreviewTree || [];
    const movePreviewTree = data.movePreviewTree || [];
    const deletePreviewTree = data.deletePreviewTree || [];
    const copyConflictLoading = data.copyConflictLoading === true;
    const copyConflictPending = data.copyConflictPending === true;
    const copyConflictMessage = data.copyConflictMessage || null;
    const copyConflictItems = data.copyConflictItems || [];
    const moveConflictLoading = data.moveConflictLoading === true;
    const moveConflictPending = data.moveConflictPending === true;
    const moveConflictMessage = data.moveConflictMessage || null;
    const moveConflictItems = data.moveConflictItems || [];

    const copyDestinationId = data.copyDestinationId || 0;
    const moveDestinationId = data.moveDestinationId || 0;
    const preserveCopyFlash = copyConflictLoading;
    const preserveMoveFlash = moveConflictLoading;

    req.session.data.copyDestinationId = null;
    req.session.data.moveDestinationId = null;

    // Immediately reset so they only show once
    if (!preserveCopyFlash) {
        req.session.data.copySuccess = false;
        req.session.data.copyList = [];
        req.session.data.copyDestinationName = null;
        req.session.data.copyPreviewTree = [];
    }
    if (!preserveMoveFlash) {
        req.session.data.moveSuccess = false;
        req.session.data.moveList = [];
        req.session.data.moveDestinationName = null;
        req.session.data.movePreviewTree = [];
    }
    req.session.data.deleteSuccess = false;
    req.session.data.deletePreviewTree = [];
    req.session.data.copyConflictLoading = false;
    req.session.data.copyConflictPending = false;
    if (copyConflictPending) {
        req.session.data.copyConflictMessage = null;
        req.session.data.copyConflictItems = [];
    }
    req.session.data.moveConflictLoading = false;
    req.session.data.moveConflictPending = false;
    if (moveConflictPending) {
        req.session.data.moveConflictMessage = null;
        req.session.data.moveConflictItems = [];
    }

    // Helper utils
    const utils = createMaterialsUtils(materials);

    // Current folder
    const folderId = Number(data.folderId ?? 0);

    // ================================
    // 1. Get the raw children of this folder
    // ================================
    let children = utils.getChildren(folderId);

    // Current folder
    const transferFolderId = Number(data.folderId ?? 0);

    // ================================
    // 1. Get the raw children of this folder
    // ================================
    let transferChildren = utils.getChildren(transferFolderId);

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

    children = sortByName(children);

    // Breadcrumbs unaffected
    const breadcrumbs = utils.getBreadcrumbs(folderId);


    // ================================
    // 4. If search term exists, rebuild groupedSearchResults fresh
    // ================================
    const search = (data.filtersSearch || "").trim().toLowerCase();

    // function buildGroupedSearchResults(materials, search) {
    //     if (!search) return [];

    //     const groups = {};

    //     materials.forEach(item => {
    //         if (!item) return;
    //         const itemName = (item.name || "").toString().trim().toLowerCase();
    //         const searchMatches = itemName.includes(search);

    //         // Matched FILE
    //         if (!item.folder && searchMatches) {
    //             const folderId = item.parentId ?? null;

    //             if (!groups[folderId]) {
    //                 groups[folderId] = {
    //                     folder: materials.find(m => m && m.id === folderId && m.folder) || null,
    //                     matchesFolder: false,
    //                     files: []
    //                 };
    //             }

    //             groups[folderId].files.push(item);
    //         }

    //         // Matched FOLDER NAME
    //         if (item.folder && searchMatches) {
    //             const folderId = item.id;

    //             if (!groups[folderId]) {
    //                 groups[folderId] = {
    //                     folder: item,
    //                     matchesFolder: true,
    //                     files: []
    //                 };
    //             } else {
    //                 groups[folderId].folder = item;
    //                 groups[folderId].matchesFolder = true;
    //             }
    //         }
    //     });

    //     // Convert map to array; remove empty entries
    //     return Object.values(groups).filter(g => g.folder || (g.files && g.files.length));
    // }

    function getFolderPath(materials, folderId) {
        const parts = [];
        let currentId = folderId;
        const seen = new Set();

        while (currentId !== null && currentId !== undefined && !seen.has(String(currentId))) {
            seen.add(String(currentId));

            const folder = materials.find(m => m && m.folder && String(m.id) === String(currentId));
            if (!folder) break;

            parts.unshift(folder.name);
            currentId = folder.parentId;
        }

        return parts.length ? `Home: Thundercat > ${parts.join(' > ')}` : 'Home: Thundercat';
    }

    function buildGroupedSearchResults(materials, search) {
        if (!search) return [];

        const groups = {};

        materials.forEach(item => {
            if (!item) return;

            const itemName = (item.name || "").toString().trim().toLowerCase();
            const searchMatches = itemName.includes(search);

            // Matched FILE
            if (!item.folder && searchMatches) {
                const folderId = item.parentId ?? null;

                if (!groups[folderId]) {
                    groups[folderId] = {
                        folder: materials.find(m => m && m.folder && String(m.id) === String(folderId)) || null,
                        matchesFolder: false,
                        files: []
                    };
                }

                groups[folderId].files.push({
                    ...item,
                    folderPath: getFolderPath(materials, folderId)
                });
            }

            // Matched FOLDER NAME
            if (item.folder && searchMatches) {
                const folderId = item.id;

                const enrichedFolder = {
                    ...item,
                    folderPath: getFolderPath(materials, item.parentId)
                };

                if (!groups[folderId]) {
                    groups[folderId] = {
                        folder: enrichedFolder,
                        matchesFolder: true,
                        files: []
                    };
                } else {
                    groups[folderId].folder = enrichedFolder;
                    groups[folderId].matchesFolder = true;
                }
            }
        });

        return Object.values(groups)
            .filter(g => g.folder || (g.files && g.files.length))
            .map(group => ({
                ...group,
                files: sortByName(group.files || [])
            }))
            .sort((a, b) => {
                const aName = a.folder ? a.folder.name : (a.files[0]?.name || '');
                const bName = b.folder ? b.folder.name : (b.files[0]?.name || '');

                return String(aName).localeCompare(String(bName), 'en', {
                    numeric: true,
                    sensitivity: 'base'
                });
            });
    }

    function countGroupedSearchResultItems(groups) {
        return groups.reduce((total, group) => {
            if (!group) return total;
            return total + (group.matchesFolder ? 1 : 0) + ((group.files && group.files.length) || 0);
        }, 0);
    }

    function flattenGroupedSearchResults(groups) {
        const rows = [];

        groups.forEach(group => {
            if (!group) return;

            if (group.matchesFolder) {
                rows.push({
                    type: 'folder',
                    groupKey: group.folder ? group.folder.id : `folder-${rows.length}`,
                    folder: group.folder
                });
            }

            (group.files || []).forEach(file => {
                rows.push({
                    type: 'file',
                    groupKey: group.folder ? group.folder.id : `root-${file.id}`,
                    folder: group.folder,
                    file
                });
            });
        });

        return rows;
    }

    function regroupPaginatedSearchRows(rows) {
        const groups = [];
        const groupIndex = {};

        rows.forEach(row => {
            const key = String(row.groupKey);

            if (!groupIndex[key]) {
                groupIndex[key] = {
                    folder: row.folder || null,
                    matchesFolder: false,
                    files: []
                };
                groups.push(groupIndex[key]);
            }

            if (row.type === 'folder') {
                groupIndex[key].folder = row.folder || groupIndex[key].folder;
                groupIndex[key].matchesFolder = true;
            }

            if (row.type === 'file') {
                groupIndex[key].folder = row.folder || groupIndex[key].folder;
                groupIndex[key].files.push(row.file);
            }
        });

        return groups.filter(group => group.matchesFolder || group.files.length > 0);
    }

    const groupedSearchResults = buildGroupedSearchResults(materials, search);
    const pageSize = normalisePageSize(req.query.pageSize || data.manageMaterialsPageSize);
    const page = Number(req.query.page) || 1;
    const activityPage = Number(req.query.activityPage || data.activityPage) || 1;

    req.session.data.manageMaterialsPageSize = pageSize;

    let pagination;
    let paginatedGroupedSearchResults = groupedSearchResults;
    let totalDisplayItems;

    if (search) {
        const totalSearchItems = countGroupedSearchResultItems(groupedSearchResults);
        const flattenedGroupedSearchResults = flattenGroupedSearchResults(groupedSearchResults);
        const searchPagination = paginateItems(flattenedGroupedSearchResults, page, pageSize);

        pagination = {
            ...searchPagination,
            totalItems: totalSearchItems,
            totalPages: Math.max(1, Math.ceil(totalSearchItems / pageSize)),
            page: Math.min(Math.max(Number(page) || 1, 1), Math.max(1, Math.ceil(totalSearchItems / pageSize))),
            pageItems: buildPaginationItems(
                Math.min(Math.max(Number(page) || 1, 1), Math.max(1, Math.ceil(totalSearchItems / pageSize))),
                Math.max(1, Math.ceil(totalSearchItems / pageSize))
            ),
            startItem: totalSearchItems === 0 ? 0 : ((Math.min(Math.max(Number(page) || 1, 1), Math.max(1, Math.ceil(totalSearchItems / pageSize))) - 1) * pageSize) + 1,
            endItem: Math.min(((Math.min(Math.max(Number(page) || 1, 1), Math.max(1, Math.ceil(totalSearchItems / pageSize))) - 1) * pageSize) + pageSize, totalSearchItems),
            showPagination: totalSearchItems > 20
        };

        paginatedGroupedSearchResults = regroupPaginatedSearchRows(searchPagination.items);
        totalDisplayItems = totalSearchItems;
    } else {
        pagination = paginateItems(children, page, pageSize);
        totalDisplayItems = children.length;
    }

    const activityEntries = [
        ...(data.materialsActivityLog || []).map(entry => ({
            ...entry,
            metaLine: `${entry.dateLabel} by ${entry.byEmail}`,
            displayItems: entry.listItems || []
        })),
        ...(res.locals.data.materialsStaticActivityEntries || []).map(entry => ({
            ...entry,
            metaLine: entry.dateBy,
            displayItems: entry.items || []
        }))
    ];

    const materialsActivityPaginationBase = paginateItems(activityEntries, activityPage, 10);
    const materialsActivityPagination = {
        ...materialsActivityPaginationBase,
        showPagination: activityEntries.length > 10
    };
    data.activityPage = materialsActivityPagination.page;

    // Prevent browser caching (fixes stale search results after rename)
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Surrogate-Control', 'no-store');

    // ================================
    // 3. Render page with filtered children
    // ================================
    res.render('ur-may-2026/B-off-system-MVP/03-case-overview', {
        materials,
        transferMaterials,
        transferChildren,
        data,
        children: search ? children : pagination.items,
        breadcrumbs,
        groupedSearchResults: search ? paginatedGroupedSearchResults : groupedSearchResults,
        pagination,
        pageSizeOptions,
        totalDisplayItems,
        materialsActivityEntries: materialsActivityPagination.items,
        materialsActivityPagination,
        flashRenamedId,
        flashNewFolderId,
        copySuccess,
        moveSuccess,
        deleteSuccess,
        copyList,
        moveList,
        copyDestinationName,
        moveDestinationName,
        copyPreviewTree,
        movePreviewTree,
        deletePreviewTree,
        copyConflictLoading,
        copyConflictPending,
        copyConflictMessage,
        copyConflictItems,
        moveConflictLoading,
        moveConflictPending,
        moveConflictMessage,
        moveConflictItems,
        copyDestinationId,
        moveDestinationId
    });

    req.session.data.lastRenamedId = null;
});


router.get('/ur-may-2026/manage-materials', function (req, res) {

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

    res.render('ur-may-2026/manage-materials', {
        results    // send filtered list to HTML
    });
});


router.post('/B-off-system-MVP/case-overview-folder', function (req, res) {
    const materials = req.session.data.materials || [];

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
    let parentFolder = null;
    if (req.session.data.folderName) {
        parentFolder = materials.find(m => m.name === req.session.data.folderName && m.folder);
    }
    const parentId = parentFolder ? parentFolder.id : 0;
    req.session.data.parentId = parentId


    console.log("Selected folder ID:", parentId)
    req.session.data.filtersSearch = ""
    console.log("Cleared search term", req.session.data.filtersSearch)
    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview')
})


router.post('/B-off-system-MVP/case-overview-search-folder', function (req, res) {
    const materials = req.session.data.materials || [];

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

    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});


router.post('/B-off-system-MVP/shared-drive', function (req, res) {
    req.session.data.level = req.body['level']
    req.session.data.parentId = req.body['parentId']
    console.log("Selected level (shared drive):", req.session.data.level)
    console.log("Selected parent ID (shared drive):", req.session.data.parentId)
    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview')
})



router.post('/B-off-system-MVP/clear-search', function (req, res) {
    req.session.data.filtersSearch = ""
    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview')
})


router.get('/B-off-system-MVP/new-folder', function (req, res) {
    console.log("parentId in session:", req.session.data.currentFolder);
    res.render('ur-may-2026/B-off-system-MVP/new-folder');
});

router.post('/B-off-system-MVP/new-folder', function (req, res) {
    console.log("parentId in session post:", Number(req.session.data.currentFolder));
    console.log("folderId:", req.body.parentFolder);
    let data = req.session.data;
    let materials = data.materials || [];

    const currentFolder = req.session.data.currentFolder || 0;
    const parentFolder = req.session.data.parentFolder || 0;
    const parentId = Number(req.session.data.folderId || 0);

    const newFolderName = req.body.newFolderName?.trim();

    console.log("Creating new folder:", newFolderName);

    if (!newFolderName) {
        return res.render('ur-may-2026/B-off-system-MVP/new-folder', {
            error: "Enter a folder name"
        });
    }

    // Get highest existing ID in materials
    const maxId = materials.length > 0
        ? Math.max(...materials.map(m => Number(m.id)))
        : 0;

    req.session.data.flashNewFolderId = maxId + 1;

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

    pushMaterialsActivity(data, {
        type: 'new-folder',
        title: 'Folder created',
        sourceLines: [
            {
                label: 'New folder:',
                value: getItemPathLabel(materials, newFolder),
                href: `/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=${newFolder.id}`
            }
        ]
    });

    // Redirect back to manage materials
    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});


router.post('/ur-may-2026/B-off-system-MVP/case-overview', function (req, res) {
    const data = req.session.data;
    res.render('ur-may-2026/B-off-system-MVP/03-case-overview', { materials: data.materials || [], data });
});


router.post('/B-off-system-MVP/delete', function (req, res) {
    const selected = req.body.material_selected
        ? req.body.material_selected.split(',').map(s => s.trim())
        : [];

    const data = req.session.data;
    const materials = data.materials || [];
    const toRemove = new Set(selected.map(String));

    const byParent = new Map();
    materials.forEach(m => {
        const p = m.parentId ?? null;
        if (!byParent.has(String(p))) byParent.set(String(p), []);
        byParent.get(String(p)).push(String(m.id));
    });

    const stack = [...toRemove];
    while (stack.length) {
        const id = stack.pop();
        const kids = byParent.get(String(id)) || [];
        kids.forEach(kid => {
            if (!toRemove.has(kid)) {
                toRemove.add(kid);
                stack.push(kid);
            }
        });
    }

    const removedItems = materials.filter(m => toRemove.has(String(m.id)));
    const deleteRootIds = removedItems
        .filter(item => !toRemove.has(String(item.parentId)))
        .map(item => String(item.id));

    res.render('ur-may-2026/B-off-system-MVP/delete', {
        data: {
            ...data,
            material_selected: req.body.material_selected || '',
            deleteItemsPreviewTree: buildPreviewTree(materials, deleteRootIds),
            deleteItemsCount: removedItems.length
        }
    });
});



// Discard material
router.post('/B-off-system-MVP/discard-material', function (req, res) {
    const selected = req.body.material_selected
        ? req.body.material_selected.split(',').map(s => s.trim())
        : [];

    const deleteChoice = (req.body['delete-choice'] || '').trim();
    const reason = req.body.discarding_material;

    // SOURCE OF TRUTH (v12)
    const materials = req.session.data.materials || [];

    // If nothing selected, just go back safely.
    if (!selected.length) {
        return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
    }

    // Build parent -> children map
    const byParent = new Map();
    materials.forEach(m => {
        const p = m.parentId ?? null;
        if (!byParent.has(String(p))) byParent.set(String(p), []);
        byParent.get(String(p)).push(String(m.id));
    });

    // Build preview tree from the current selection for rerender/error state.
    const selectedSet = new Set(selected.map(String));
    const selectedStack = [...selectedSet];
    while (selectedStack.length) {
        const id = selectedStack.pop();
        const kids = byParent.get(String(id)) || [];
        kids.forEach(kid => {
            if (!selectedSet.has(kid)) {
                selectedSet.add(kid);
                selectedStack.push(kid);
            }
        });
    }

    const selectedItems = materials.filter(m => selectedSet.has(String(m.id)));
    const deleteRootIds = selectedItems
        .filter(item => !selectedSet.has(String(item.parentId)))
        .map(item => String(item.id));

    if (!deleteChoice) {
        return res.render('ur-may-2026/B-off-system-MVP/delete', {
            data: {
                ...req.session.data,
                ...req.body,
                material_selected: req.body.material_selected || '',
                deleteItemsPreviewTree: buildPreviewTree(materials, deleteRootIds),
                deleteItemsCount: selectedItems.length,
                deleteChoiceError: 'Select whether you want to delete these items'
            }
        });
    }

    if (deleteChoice === 'No') {
        return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
    }

    // If folders should remove descendants too, expand IDs:
    const toRemove = new Set(selected.map(String));

    // BFS/DFS down the tree
    const stack = [...toRemove];
    while (stack.length) {
        const id = stack.pop();
        const kids = byParent.get(String(id)) || [];
        kids.forEach(kid => {
            if (!toRemove.has(kid)) {
                toRemove.add(kid);
                stack.push(kid);
            }
        });
    }

    const removedItems = materials.filter(m => toRemove.has(String(m.id)));
    const removedRootIds = removedItems
        .filter(item => !toRemove.has(String(item.parentId)))
        .map(item => String(item.id));
    const deletePreviewTree = buildPreviewTree(materials, removedRootIds);

    req.session.data.materials = materials.filter(m => !toRemove.has(String(m.id)));
    req.session.data.deletePreviewTree = deletePreviewTree;
    req.session.data.deleteSuccess = removedItems.length > 0;

    if (removedItems.length) {
        const sourceParents = [...new Set(removedItems.map(item => getFolderPathLabel(materials, item.parentId)))];
        const sourceParentIds = [...new Set(removedItems.map(item => String(item.parentId ?? 0)))];

        pushMaterialsActivity(req.session.data, {
            type: 'delete',
            title: 'Items deleted',
            listItems: removedItems.map(item => item.name),
            previewTree: deletePreviewTree,
            sourceLines: [
                {
                    label: sourceParents.length === 1 ? 'Location:' : 'Locations:',
                    value: sourceParents.length === 1 ? sourceParents[0] : 'Multiple locations',
                    href: sourceParents.length === 1 ? `/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=${sourceParentIds[0]}` : null
                }
            ]
        });
    }

    req.session.data.lastDiscard = {
        reason,
        items: Array.from(toRemove),
        date: new Date().toISOString()
    };

    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});

// Discard material
router.post('/B-off-system-MVP/p-material', function (req, res) {
    const selected = req.body.material_selected
        ? req.body.material_selected.split(',').map(s => s.trim())
        : [];

    const reason = req.body.discarding_material;

    // SOURCE OF TRUTH (v12)
    const materials = req.session.data.materials || [];

    // If folders should remove descendants too, expand IDs:
    const toRemove = new Set(selected.map(String));

    // Build parent -> children map
    const byParent = new Map();
    materials.forEach(m => {
        const p = m.parentId ?? null;
        if (!byParent.has(String(p))) byParent.set(String(p), []);
        byParent.get(String(p)).push(String(m.id));
    });

    // BFS/DFS down the tree
    const stack = [...toRemove];
    while (stack.length) {
        const id = stack.pop();
        const kids = byParent.get(String(id)) || [];
        kids.forEach(kid => {
            if (!toRemove.has(kid)) {
                toRemove.add(kid);
                stack.push(kid);
            }
        });
    }

    const removedItems = materials.filter(m => toRemove.has(String(m.id)));
    const deleteRootIds = removedItems
        .filter(item => !toRemove.has(String(item.parentId)))
        .map(item => String(item.id));
    const deletePreviewTree = buildPreviewTree(materials, deleteRootIds);

    req.session.data.materials = materials.filter(m => !toRemove.has(String(m.id)));
    req.session.data.deletePreviewTree = deletePreviewTree;
    req.session.data.deleteSuccess = removedItems.length > 0;

    if (removedItems.length) {
        const sourceParents = [...new Set(removedItems.map(item => getFolderPathLabel(materials, item.parentId)))];
        const sourceParentIds = [...new Set(removedItems.map(item => String(item.parentId ?? 0)))];

        pushMaterialsActivity(req.session.data, {
            type: 'delete',
            title: 'Items deleted',
            listItems: removedItems.map(item => item.name),
            previewTree: deletePreviewTree,
            sourceLines: [
                {
                    label: sourceParents.length === 1 ? 'Location:' : 'Locations:',
                    value: sourceParents.length === 1 ? sourceParents[0] : 'Multiple locations',
                    href: sourceParents.length === 1 ? `/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=${sourceParentIds[0]}` : null
                }
            ]
        });
    }

    req.session.data.lastDiscard = {
        reason,
        items: Array.from(toRemove),
        date: new Date().toISOString()
    };

    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});


router.post('/B-off-system-MVP/materials-action', function (req, res) {
    const { action, selectedId } = req.body;

    if (action !== 'rename') return res.redirect('back');

    const id = (selectedId || "").toString();
    const materials = req.session.data.materials || [];
    const item = materials.find(m => m && (m.id?.toString() === id));

    if (!item) return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');

    return res.render('ur-may-2026/B-off-system-MVP/rename', { item });
});

// router.post('/B-off-system-MVP/materials-action', function (req, res) {
//     const { action, selectedId, selectedName, selectedIsFolder } = req.body;

//     if (action === 'rename') {
//         req.session.data.renameId = selectedId;
//         req.session.data.renameName = selectedName;
//         req.session.data.renameIsFolder = (selectedIsFolder === 'true');

//         return res.redirect('/ur-may-2026/B-off-system-MVP/rename-from-list'); // <-- use your real rename page
//     }

//     // handle other actions...
//     return res.redirect('back');
// });



// router.post('/B-off-system-MVP/rename-from-list', function (req, res) {

//   // Support BOTH old + new forms
//   const id =
//     (req.body.selectedId || "") ||
//     (req.body.material_selected || "") ||
//     (Array.isArray(req.body.materials_document) ? req.body.materials_document[0] : req.body.materials_document) ||
//     "";

//   const idStr = id.toString();

//   console.log('Rename-from-list resolved ID:', idStr);
//   console.log('Rename-from-list body keys:', Object.keys(req.body));

//   if (!idStr) {
//     console.log('❌ Rename-from-list: missing ID');
//     return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
//   }

//   const materials = req.session.data.materials || [];
//   const item = materials.find(m => m && (m.id?.toString() === idStr));

//   if (!item) {
//     console.log('❌ Rename-from-list: item not found', idStr);
//     return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
//   }

//   return res.render('ur-may-2026/B-off-system-MVP/rename', { item });
// });

router.post('/B-off-system-MVP/rename-from-list', function (req, res) {
    const sessionData = req.session.data || {};
    const materials = sessionData.materials || [];

    const raw = (req.body.selected_ids || '').toString().trim();
    const ids = raw ? raw.split(',').map(s => s.trim()).filter(Boolean) : [];

    const selectedItems = materials.filter(m => ids.includes(String(m.id)));
    req.session.data.renameCount = selectedItems.length;

    if (!selectedItems.length) {
        return res.redirect('/B-off-system-MVP/case-overview-folder');
    }

    return res.render('ur-may-2026/B-off-system-MVP/rename-multiple', {
        selectedItems,
        selectedIds: ids
    });
});

router.post('/B-off-system-MVP/rename-multiple-save', function (req, res) {
    const sessionData = req.session.data || {};
    const materials = sessionData.materials || [];

    const updates = {};
    Object.keys(req.body).forEach(key => {
        if (key.startsWith('new_name_')) {
            const id = key.replace('new_name_', '');
            updates[id] = (req.body[key] || '').toString().trim();
        }
    });

    const renamedEntries = [];

    materials.forEach(item => {
        const id = String(item.id);
        if (updates[id] !== undefined && updates[id] !== '') {
            renamedEntries.push({
                item,
                oldName: item.name,
                newName: updates[id]
            });
            item.name = updates[id];
        }
    });

    req.session.data.materials = materials;
    req.session.data.flashRenamedIds = Object.keys(updates).filter(id => updates[id]);

    if (renamedEntries.length) {
        const locationPaths = [...new Set(renamedEntries.map(entry => getFolderPathLabel(materials, entry.item.parentId)))];
        const locationIds = [...new Set(renamedEntries.map(entry => String(entry.item.parentId ?? 0)))];
        const renameNameMap = Object.fromEntries(
            renamedEntries.map(entry => [
                String(entry.item.id),
                entry.item.folder
                    ? { name: entry.oldName, renamedTo: entry.newName }
                    : `${entry.oldName} → ${entry.newName}`
            ])
        );
        const renamePreviewTree = buildPreviewTree(
            materials,
            renamedEntries.map(entry => String(entry.item.id)),
            renameNameMap,
            false,
            false
        );

        pushMaterialsActivity(req.session.data, {
            type: 'rename',
            title: renamedEntries.length === 1 ? 'Item renamed' : 'Items renamed',
            listItems: renamedEntries.map(entry => `${entry.oldName} → ${entry.newName}`),
            previewTree: renamePreviewTree,
            sourceLines: [
                {
                    label: locationPaths.length === 1 ? 'Location:' : 'Locations:',
                    value: locationPaths.length === 1 ? locationPaths[0] : 'Multiple locations',
                    href: locationPaths.length === 1 ? `/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=${locationIds[0]}` : null
                }
            ]
        });
    }

    return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});


// router.post('/B-off-system-MVP/rename-from-list', function (req, res) {
//     const id = Number(req.body.material_selected);

//     console.log('Rename-from-list ID:', id);

//     if (!id) {
//         console.log('❌ Rename-from-list: invalid ID');
//         return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
//     }

//     const materials = req.session.data.materials || [];
//     const item = materials.find(m => m.id === id);

//     if (!item) {
//         console.log('❌ Rename-from-list: item not found', id);
//         return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
//     }

//     res.render('ur-may-2026/B-off-system-MVP/rename', { item });
// });


router.post('/B-off-system-MVP/rename', function (req, res) {
    console.log('Rename POST body:', req.body);

    const data = req.session.data;
    const materials = data.materials || [];

    const id = Number(req.body.id);
    const newName = req.body.newName?.trim();

    const item = materials.find(m => m.id === id);

    if (!item) {
        return res.redirect('ur-may-2026/B-off-system-MVP/03-case-overview');
    }

    if (!newName) {
        return res.render('ur-may-2026/B-off-system-MVP/rename', {
            item,
            error: 'Enter a name'
        });
    }

    const oldName = item.name;
    item.name = newName;
    req.session.data.flashRenamedId = item.id;

    if (!item.folder) {
        item.date = new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }

    data.materials = materials;

    pushMaterialsActivity(data, {
        type: 'rename',
        title: 'Item renamed',
        listItems: [`${oldName} → ${newName}`],
        previewTree: buildPreviewTree(materials, [String(item.id)], {
            [String(item.id)]: item.folder
                ? { name: oldName, renamedTo: newName }
                : `${oldName} → ${newName}`
        }, false, false),
        sourceLines: [
            {
                label: 'Location:',
                value: getFolderPathLabel(materials, item.parentId),
                href: `/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=${item.parentId ?? 0}`
            }
        ]
    });

    req.session.data.groupedSearchResults = null; // or [] to force rebuild on next render

    return res.redirect('ur-may-2026/B-off-system-MVP/03-case-overview');
});

// -----------------------------------------------------
// RENAME MATERIAL (page)
// -----------------------------------------------------

// router.get('/B-off-system-MVP/rename', function (req, res) {
//     const data = req.session.data;
//     const materials = data.materials || [];
//     const id = Number(req.query.id);

//     const item = materials.find(m => m.id === id);

//     if (!item) {
//         return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
//     }

//     res.render('ur-may-2026/B-off-system-MVP/rename', {
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
//         return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
//     }

//     if (!newName) {
//         return res.render('ur-may-2026/B-off-system-MVP/rename', {
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
//         return res.redirect(`/ur-may-2026/B-off-system-MVP/03-case-overview?folder=${parent}`);
//     }

//     return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
// });




router.post('/B-off-system-MVP/set-materials-mode', function (req, res) {
    const mode = req.body.mode;
    const selectedIds = req.body.selected_ids || '';

    req.session.data.materialsMode = mode || null;
    req.session.data.materialsSelected = selectedIds;   // <-- THIS LINE IS THE KEY

    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
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
function buildPreviewTree(materials, rootIds, nameOverrides = {}, includeDescendants = true, boldFolders = true) {
    const byId = {};
    materials.forEach(m => {
        byId[String(m.id)] = m;
    });

    function buildNode(item) {
        const override = nameOverrides[String(item.id)];
        const children = includeDescendants
            ? materials
                .filter(m => String(m.parentId) === String(item.id))
                .map(buildNode)
            : [];

        return {
            id: item.id,
            name: override && typeof override === 'object' ? override.name : (override || item.name),
            isFolder: !!item.folder,
            isBold: !!item.folder && boldFolders,
            renamedTo: override && typeof override === 'object' ? override.renamedTo : null,
            children
        };
    }

    return rootIds
        .map(id => byId[String(id)])
        .filter(Boolean)
        .map(buildNode);
}

router.post('/B-off-system-MVP/copy-material-old', function (req, res) {

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

    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});


router.post('/B-off-system-MVP/start-copy', function (req, res) {
    // selected_ids could be "1,2,3" or an array depending on your form
    const ids = req.body.selected_ids
        ? String(req.body.selected_ids).split(',').map(x => String(x).trim()).filter(Boolean)
        : [];

    // Store selection for the next page
    req.session.data.copySelectedIds = ids;
    req.session.data.copySelectedCount = ids.length;

    // Optional: store names for a hint banner on folder-tree-copy
    const materials = (req.session.data.materials || res.locals.data.materials || []);
    req.session.data.copySelectedNames = ids
        .map(id => (materials.find(m => String(m.id) === String(id)) || {}).name)
        .filter(Boolean);

    // Send them to the folder picker page
    res.redirect('/ur-may-2026/B-off-system-MVP/folder-tree-copy');
});


// start-move 3 February 2026
router.post('/B-off-system-MVP/start-move', function (req, res) {
    // selected_ids could be "1,2,3" or an array depending on your form
    const ids = req.body.selected_ids
        ? String(req.body.selected_ids).split(',').map(x => String(x).trim()).filter(Boolean)
        : [];

    // Store selection for the next page
    req.session.data.moveSelectedIds = ids;
    req.session.data.moveSelectedCount = ids.length;

    // Optional: store names for a hint banner on folder-tree-copy
    const materials = (req.session.data.materials || res.locals.data.materials || []);
    req.session.data.moveSelectedNames = ids
        .map(id => (materials.find(m => String(m.id) === String(id)) || {}).name)
        .filter(Boolean);

    // Send them to the folder picker page
    res.redirect('/ur-may-2026/B-off-system-MVP/folder-tree-move');
});


router.post('/B-off-system-MVP/copy-material', function (req, res) {

    req.session.data.moveSuccess = false;

    // Pull selection from session (set by /start-copy)
    const ids = Array.isArray(req.session.data.copySelectedIds)
        ? req.session.data.copySelectedIds.map(String)
        : [];

    const destinationFolderId = req.body.destinationFolder;
    req.session.data.copyDestinationId = destinationFolderId;

    const materials = (req.session.data.materials || res.locals.data.materials || []);

    console.log("Copying:", ids, "into folder", destinationFolderId);

    if (!ids.length || !destinationFolderId) {
        // In a prototype, just bounce back with a flag
        req.session.data.copyError = "Select at least one item and a destination folder";
        return res.redirect('/ur-may-2026/B-off-system-MVP/folder-tree-copy');
    }

    let destinationFolderName = null;
    const destFolder = materials.find(m => String(m.id) === String(destinationFolderId));
    if (destFolder) destinationFolderName = destFolder.name;

    const destinationChildren = materials.filter(
        item => String(item.parentId ?? '') === String(destinationFolderId)
    );
    const destinationChildNames = new Set(
        destinationChildren.map(item => String(item.name || '').trim().toLowerCase())
    );
    const conflictingItems = ids
        .map(id => materials.find(item => String(item.id) === String(id)))
        .filter(Boolean)
        .filter(item => destinationChildNames.has(String(item.name || '').trim().toLowerCase()));
    const conflictingIdSet = new Set(conflictingItems.map(item => String(item.id)));
    const idsToCopy = ids.filter(id => !conflictingIdSet.has(String(id)));


    // Snapshot BEFORE mutation
    const originalMaterials = materials.map(item => ({ ...item }));

    const copiedNames = [];

    const copyPreviewTree = buildPreviewTree(originalMaterials, idsToCopy);

    idsToCopy.forEach(id => {
        const original = materials.find(m => String(m.id) === id);
        if (!original) return;

        copiedNames.push(original.name);

        const idMap = {};
        const newId = Date.now() + Math.random();
        idMap[id] = newId;

        materials.push({
            ...original,
            id: newId,
            parentId: destinationFolderId
        });

        const descendants = getAllDescendants(originalMaterials, id);

        descendants.forEach(child => {
            const newChildId = Date.now() + Math.random();
            idMap[child.id] = newChildId;

            materials.push({
                ...child,
                id: newChildId,
                parentId: idMap[child.parentId]
            });

            copiedNames.push(child.name);
        });
    });

    // Persist mutated materials back into session so it sticks
    req.session.data.materials = materials;

    req.session.data.copyList = copiedNames;
    req.session.data.copyDestinationName = destinationFolderName;
    req.session.data.copyPreviewTree = copyPreviewTree;
    req.session.data.copySuccess = copiedNames.length > 0;

    if (copiedNames.length) {
        const sourceItems = idsToCopy
            .map(id => originalMaterials.find(m => String(m.id) === String(id)))
            .filter(Boolean);
        const sourceParents = [...new Set(sourceItems.map(item => getFolderPathLabel(originalMaterials, item.parentId)))];
        const sourceParentIds = [...new Set(sourceItems.map(item => String(item.parentId ?? 0)))];

        pushMaterialsActivity(req.session.data, {
            type: 'copy',
            title: 'Items copied',
            // title: `${copiedNames.length === 1 ? copiedNames[0] : `${copiedNames.length} items`} ${copiedNames.length === 1 ? 'has' : 'have'} been copied to ${destinationFolderName || 'Home: Thundercat'} on the shared drive`,
            // description: 'Below is a list of documents and folders copied:',
            listItems: copiedNames,
            previewTree: copyPreviewTree,
            sourceLines: [
                {
                    label: sourceParents.length === 1 ? 'Original location:' : 'Original locations:',
                    value: sourceParents.length === 1 ? sourceParents[0] : 'Multiple locations',
                    href: sourceParents.length === 1 ? `/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=${sourceParentIds[0]}` : null
                },
                {
                    label: 'New location:',
                    value: getFolderPathLabel(materials, destinationFolderId),
                    href: `/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=${destinationFolderId}`
                }
            ]
        });
    }

    if (conflictingItems.length) {
        req.session.data.copyConflictLoading = true;
        req.session.data.copyConflictMessage =
            conflictingItems.length === 1
                ? copiedNames.length > 0
                    ? '1 item with the same name already exists in this location.'
                    : '1 item with the same name already exists in this location. No items were copied.'
                : copiedNames.length > 0
                    ? `${conflictingItems.length} items with the same name already exist in this location.`
                    : `${conflictingItems.length} items with the same name already exist in this location. No items were copied.`;
        req.session.data.copyConflictItems = conflictingItems.map(item => item.name);
        req.session.data.copyDestinationName = destinationFolderName;
    }

    // Clear selection state
    req.session.data.copySelectedIds = [];
    req.session.data.copySelectedNames = [];
    req.session.data.copySelectedCount = 0;

    // Reset selection + mode
    req.session.data.materialsMode = null;
    req.session.data.materialsSelected = '';

    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});


// move-material 3 February 2026
router.post('/B-off-system-MVP/move-material', function (req, res) {

    req.session.data.moveSuccess = false;

    // Pull selection from session (set by /start-copy)
    const ids = Array.isArray(req.session.data.moveSelectedIds)
        ? req.session.data.moveSelectedIds.map(String)
        : [];

    const destinationFolderId = req.body.destinationFolder;
    req.session.data.moveDestinationId = destinationFolderId;

    const materials = (req.session.data.materials || res.locals.data.materials || []);

    console.log("Moving:", ids, "into folder", destinationFolderId);

    if (!ids.length || !destinationFolderId) {
        // In a prototype, just bounce back with a flag
        req.session.data.moveError = "Select at least one item and a destination folder";
        return res.redirect('/ur-may-2026/B-off-system-MVP/folder-tree-move');
    }

    // Snapshot BEFORE mutation
    const originalMaterials = materials.map(item => ({ ...item }));

    const movedNames = [];

    const destFolder = materials.find(m => String(m.id) === String(destinationFolderId));
    const destinationFolderName = destFolder ? destFolder.name : null;

    const destinationChildren = materials.filter(
        item => String(item.parentId ?? '') === String(destinationFolderId)
    );
    const destinationChildNames = new Set(
        destinationChildren.map(item => String(item.name || '').trim().toLowerCase())
    );
    const conflictingItems = ids
        .map(id => materials.find(item => String(item.id) === String(id)))
        .filter(Boolean)
        .filter(item => destinationChildNames.has(String(item.name || '').trim().toLowerCase()));
    const conflictingIdSet = new Set(conflictingItems.map(item => String(item.id)));
    const idsToMove = ids.filter(id => !conflictingIdSet.has(String(id)));

    idsToMove.forEach(id => {
        const original = materials.find(m => String(m.id) === String(id));
        if (!original) return;

        // Don’t allow moving an item into itself
        if (String(original.id) === String(destinationFolderId)) return;

        // Don’t allow moving a folder into one of its descendants
        if (original.folder) {
            const descendantIds = getAllDescendants(originalMaterials, original.id).map(d => String(d.id));
            if (descendantIds.includes(String(destinationFolderId))) return;
        }

        movedNames.push(original.name);

        // ✅ MOVE (no cloning)
        original.parentId = destinationFolderId;
    });

    // Persist mutated materials back into session so it sticks
    req.session.data.materials = materials;

    req.session.data.moveList = movedNames;
    req.session.data.moveDestinationName = destinationFolderName;
    const movePreviewTree = buildPreviewTree(originalMaterials, idsToMove);
    req.session.data.movePreviewTree = movePreviewTree;
    req.session.data.moveSuccess = movedNames.length > 0;

    if (movedNames.length) {
        const sourceItems = idsToMove
            .map(id => originalMaterials.find(m => String(m.id) === String(id)))
            .filter(Boolean);
        const sourceParents = [...new Set(sourceItems.map(item => getFolderPathLabel(originalMaterials, item.parentId)))];
        const sourceParentIds = [...new Set(sourceItems.map(item => String(item.parentId ?? 0)))];

        pushMaterialsActivity(req.session.data, {
            type: 'move',
            title: 'Items moved',
            // title: `${movedNames.length === 1 ? movedNames[0] : `${movedNames.length} items`} ${movedNames.length === 1 ? 'has' : 'have'} been moved to ${destinationFolderName || 'Home: Thundercat'} on the shared drive`,
            // description: 'Below is a list of documents and folders moved:',
            listItems: movedNames,
            previewTree: movePreviewTree,
            sourceLines: [
                {
                    label: sourceParents.length === 1 ? 'Original location:' : 'Original locations:',
                    value: sourceParents.length === 1 ? sourceParents[0] : 'Multiple locations',
                    href: sourceParents.length === 1 ? `/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=${sourceParentIds[0]}` : null
                },
                {
                    label: 'New location:',
                    value: getFolderPathLabel(materials, destinationFolderId),
                    href: `/ur-may-2026/B-off-system-MVP/03-case-overview?folderId=${destinationFolderId}`
                }
            ]
        });
    }

    if (conflictingItems.length) {
        req.session.data.moveConflictLoading = true;
        req.session.data.moveConflictMessage =
            conflictingItems.length === 1
                ? movedNames.length > 0
                    ? '1 item with the same name already exists in this location.'
                    : '1 item with the same name already exists in this location. No items were moved.'
                : movedNames.length > 0
                    ? `${conflictingItems.length} items with the same name already exist in this location.`
                    : `${conflictingItems.length} items with the same name already exist in this location. No items were moved.`;
        req.session.data.moveConflictItems = conflictingItems.map(item => item.name);
        req.session.data.moveDestinationName = destinationFolderName;
    }

    // Clear selection state
    req.session.data.moveSelectedIds = [];
    req.session.data.moveSelectedNames = [];
    req.session.data.moveSelectedCount = 0;

    // Reset selection + mode
    req.session.data.materialsMode = null;
    req.session.data.materialsSelected = '';

    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});


// Move – 3 February 2026
// router.post('/B-off-system-MVP/move-material', function (req, res) {

//     req.session.data.copySuccess = false;

//     // Pull selection from session (set by /start-copy)
//     const ids = Array.isArray(req.session.data.moveSelectedIds)
//         ? req.session.data.moveSelectedIds.map(String)
//         : [];

//     const destinationFolderId = req.body.destinationFolder;
//     const materials = (req.session.data.materials || res.locals.data.materials || []);

//     console.log("Moving:", ids, "into folder", destinationFolderId);

//     if (!ids.length || !destinationFolderId) {
//         // In a prototype, just bounce back with a flag
//         req.session.data.moveError = "Select at least one item and a destination folder";
//         return res.redirect('/ur-may-2026/B-off-system-MVP/folder-tree-move');
//     }

//     // Snapshot BEFORE mutation
//     const originalMaterials = [...materials];

//     const movedNames = [];

//     let destinationFolderName = null;
//     const destFolder = materials.find(m => String(m.id) === String(destinationFolderId));
//     if (destFolder) destinationFolderName = destFolder.name;

//     const movePreviewTree = buildPreviewTree(originalMaterials, ids);

//     ids.forEach(id => {
//         const original = materials.find(m => String(m.id) === id);
//         if (!original) return;

//         movedNames.push(original.name);

//         const idMap = {};
//         const newId = Date.now() + Math.random();
//         idMap[id] = newId;

//         materials.push({
//             ...original,
//             id: newId,
//             parentId: destinationFolderId
//         });

//         const descendants = getAllDescendants(originalMaterials, id);

//         descendants.forEach(child => {
//             const newChildId = Date.now() + Math.random();
//             idMap[child.id] = newChildId;

//             materials.push({
//                 ...child,
//                 id: newChildId,
//                 parentId: idMap[child.parentId]
//             });

//             movedNames.push(child.name);
//         });
//     });

//     // Persist mutated materials back into session so it sticks
//     req.session.data.materials = materials;

//     req.session.data.moveList = movedNames;
//     req.session.data.moveDestinationName = destinationFolderName;
//     req.session.data.movePreviewTree = movePreviewTree;
//     req.session.data.moveSuccess = true;

//     // Clear selection state
//     req.session.data.moveSelectedIds = [];
//     req.session.data.moveSelectedNames = [];
//     req.session.data.moveSelectedCount = 0;

//     // Reset selection + mode
//     req.session.data.materialsMode = null;
//     req.session.data.materialsSelected = '';

//     res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
// });



// router.post('/B-off-system-MVP/move-material-old', function (req, res) {

//     req.session.data.copySuccess = false;  // Clear copy flag

//     const ids = req.body.selected_ids
//         ? req.body.selected_ids.split(',').map(x => String(x).trim())
//         : [];

//     const destinationFolderId = req.body.destinationFolder;
//     const materials = req.session.data.materials || [];

//     console.log("Moving:", ids, "into folder", destinationFolderId);

//     // Snapshot BEFORE we move items (for preview)
//     const originalMaterials = [...materials];

//     // List for flat banner summary
//     const movedNames = [];

//     ids.forEach(id => {
//         const original = originalMaterials.find(m => String(m.id) === String(id));
//         if (original) movedNames.push(original.name);
//     });

//     // Destination folder name for banner
//     let destinationFolderName = null;
//     const destFolder = originalMaterials.find(m => String(m.id) === String(destinationFolderId));
//     if (destFolder) {
//         destinationFolderName = destFolder.name;
//     }

//     // Build nested preview tree (based on original structure)
//     const movePreviewTree = buildPreviewTree(originalMaterials, ids);

//     // Perform the move
//     req.session.data.materials = materials.map(m => {
//         if (ids.includes(String(m.id))) {
//             return { ...m, parentId: destinationFolderId };
//         }
//         return m;
//     });

//     // Banner data
//     req.session.data.moveList = movedNames;
//     req.session.data.moveDestinationName = destinationFolderName;
//     req.session.data.movePreviewTree = movePreviewTree;
//     req.session.data.moveSuccess = true;

//     // Reset selection + mode
//     req.session.data.materialsMode = null;
//     req.session.data.materialsSelected = '';

//     res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
// });


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
    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
    // change this to whatever your main materials URL is
});

// CLEAR A SPECIFIC FILTER
router.get('/includes/materials/clear-filter', function (req, res) {

    const type = req.query.type;

    // Safely delete it from session
    if (type && req.session.data.hasOwnProperty(type)) {
        req.session.data[type] = null;
    }

    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
    // again: use your actual materials page URL
});


// New code for ur-may-2026
router.get('/B-off-system-MVP/folder-tree-copy', function (req, res) {

    const sessionData = req.session.data || {};
    const defaultsData = res.locals.data || {};

    console.log("DEFAULT materials:", res.locals.data.materials?.length);
    console.log("SESSION materials:", req.session.data?.materials?.length);

    // Prefer session, fallback to defaults
    const materials =
        sessionData.materials && sessionData.materials.length
            ? sessionData.materials
            : defaultsData.materials || [];

    console.log("Materials length:", materials.length);

    // folders only
    const folders = materials.filter(m => m && m.folder);

    // group by parentId (NORMALISE TO STRING)
    const byParent = new Map();
    folders.forEach(f => {
        const parentKey = (f.parentId === null || f.parentId === undefined || f.parentId === '')
            ? null
            : String(f.parentId);

        if (!byParent.has(parentKey)) byParent.set(parentKey, []);
        byParent.get(parentKey).push(f);
    });

    for (const [key, arr] of byParent.entries()) {
        arr.sort((a, b) => String(a.name).localeCompare(String(b.name)));
    }

    // folder ids set (NORMALISE TO STRING)
    const folderIds = new Set(folders.map(f => String(f.id)));

    function isRoot(folder) {
        const parent = folder.parentId;

        // no parent
        if (parent === null || parent === undefined || parent === '') return true;

        // parent exists?
        return !folderIds.has(String(parent));
    }

    const roots = folders.filter(isRoot);

    function buildNode(node) {
        const children = byParent.get(String(node.id)) || [];
        return {
            ...node,
            children: children.map(buildNode)
        };
    }

    const folderTree = roots.map(buildNode);
    const copyError = req.session.data.copyError || null;
    const copyErrorItems = req.session.data.copyErrorItems || [];

    req.session.data.copyError = null;
    req.session.data.copyErrorItems = [];

    res.render('ur-may-2026/B-off-system-MVP/folder-tree-copy', {
        folderTree,
        data: {
            ...req.session.data,
            copyError,
            copyErrorItems
        }
    });
});

router.get('/B-off-system-MVP/copy-conflict-result', function (req, res) {
    req.session.data.copyConflictLoading = false;
    req.session.data.copyConflictPending = true;
    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});

router.get('/B-off-system-MVP/move-conflict-result', function (req, res) {
    req.session.data.moveConflictLoading = false;
    req.session.data.moveConflictPending = true;
    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});

// Move – 3 February 2026
router.get('/B-off-system-MVP/folder-tree-move', function (req, res) {

    const sessionData = req.session.data || {};
    const defaultsData = res.locals.data || {};

    console.log("DEFAULT materials:", res.locals.data.materials?.length);
    console.log("SESSION materials:", req.session.data?.materials?.length);

    // Prefer session, fallback to defaults
    const materials =
        sessionData.materials && sessionData.materials.length
            ? sessionData.materials
            : defaultsData.materials || [];

    console.log("Materials length:", materials.length);

    // folders only
    const folders = materials.filter(m => m && m.folder);

    // group by parentId (NORMALISE TO STRING)
    const byParent = new Map();
    folders.forEach(f => {
        const parentKey = (f.parentId === null || f.parentId === undefined || f.parentId === '')
            ? null
            : String(f.parentId);

        if (!byParent.has(parentKey)) byParent.set(parentKey, []);
        byParent.get(parentKey).push(f);
    });

    for (const [key, arr] of byParent.entries()) {
        arr.sort((a, b) => String(a.name).localeCompare(String(b.name)));
    }

    // folder ids set (NORMALISE TO STRING)
    const folderIds = new Set(folders.map(f => String(f.id)));

    function isRoot(folder) {
        const parent = folder.parentId;

        // no parent
        if (parent === null || parent === undefined || parent === '') return true;

        // parent exists?
        return !folderIds.has(String(parent));
    }

    const roots = folders.filter(isRoot);

    function buildNode(node) {
        const children = byParent.get(String(node.id)) || [];
        return {
            ...node,
            children: children.map(buildNode)
        };
    }

    const folderTree = roots.map(buildNode);

    res.render('ur-may-2026/B-off-system-MVP/folder-tree-move', {
        folderTree
    });
});



//New search at the top of the page
router.post('/B-off-system-MVP/materials-search', function (req, res) {
    const term = (req.body.filtersSearch || '').trim();

    // Store in session so 03-case-overview can render search results
    req.session.data.filtersSearch = term;

    // Optional: when searching, reset folder context if you want
    // req.session.data.folderId = 0;

    return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});



// 4 February 2026
router.post('/B-off-system-MVP/mark-as-read', function (req, res) {
    const ids = String(req.body.selected_ids || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);

    const materials = (req.session.data.materials || res.locals.data.materials || []);

    materials.forEach(m => {
        if (!m || m.folder) return; // only files
        if (ids.includes(String(m.id))) {
            m.new = false; // ✅ Mark as read
        }
    });

    req.session.data.materials = materials;
    req.session.data.markReadSuccess = true; // optional banner flag
    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});


router.post('/B-off-system-MVP/mark-as-unread', function (req, res) {
    const ids = String(req.body.selected_ids || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);

    const materials = (req.session.data.materials || res.locals.data.materials || []);

    materials.forEach(m => {
        if (!m || m.folder) return; // only files
        if (ids.includes(String(m.id))) {
            m.new = true; // ✅ Mark as unread
        }
    });

    req.session.data.materials = materials;
    req.session.data.markUnreadSuccess = true; // optional banner flag
    res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});




// 20 February 2026 – version 13

const materialsHelperFactory = require('../../helpers/materials.js');

router.get('/B-off-system-MVP/order-materials', (req, res) => {
    const sessionData = req.session.data || {};
    const defaultsData = res.locals.data || {};

    const materials =
        (sessionData.materials && sessionData.materials.length
            ? sessionData.materials
            : defaultsData.materials) || [];

    // folderId from querystring, else session, else 0
    const folderId = Number(req.query.folderId ?? sessionData.folderId ?? 0);

    // persist context for templates that use data.folderId
    req.session.data.folderId = folderId;

    // ✅ PROTOTYPE SEED: only folder 1007 starts "ordered"
    sessionData.orderMeta = sessionData.orderMeta || {};
    sessionData._seededOrder1007 = sessionData._seededOrder1007 || false;

    if (!sessionData._seededOrder1007) {
        // 1) Seed "last ordered" message for folder 1007
        sessionData.orderMeta["1007"] = {
            person: "Roxanne Rowe",
            date: "12 January 2026"
        };

        // 2) Seed numeric order values for direct children of folder 1007 only
        const kids1007 = materials.filter(m => m && Number(m.parentId) === 1007);

        // Use current array order as the initial order (simple + stable for a prototype)
        kids1007.forEach((item, idx) => {
            item.order = idx + 1;
        });

        sessionData._seededOrder1007 = true;
    }

    const helper = materialsHelperFactory(materials);

    const breadcrumbs = helper.getBreadcrumbs(folderId);
    const children = helper.getChildren(folderId);

    res.render('ur-may-2026/B-off-system-MVP/order-materials', {
        folderId,
        breadcrumbs,
        children
    });
});


router.post('/B-off-system-MVP/order-materials', (req, res) => {

    console.log('✅ POST /order-materials hit', {
        sessionFolderId: req.session.data.folderId,
        bodyFolderId: req.body.folderId
    });

    // folderId might be '1000' OR ['1000','0'] if duplicate fields exist
    // ✅ Use the folder context you already stored when the page loaded
    const folderId = Number(req.session.data.folderId ?? 0);

    const sessionData = req.session.data || {};
    const defaultsData = res.locals.data || {};

    // Ensure we have a session copy to mutate (don’t mutate defaults)
    if (!sessionData.materials || !sessionData.materials.length) {
        sessionData.materials = (defaultsData.materials || []).map(m => ({ ...m }));
        req.session.data.materials = sessionData.materials;
    }

    const materials = sessionData.materials;
    // const folderId = Number(req.body.folderId ?? sessionData.folderId ?? 0);


    // 26 February 2026
    // 🔴 PROTOTYPE INTERRUPT RULE
    const shouldInterrupt = folderId === 1007; // hard-code whatever folder you want

    if (shouldInterrupt) {
        req.session.data.pendingOrderSave = {
            folderId,
            body: req.body
        };

        return res.redirect('/ur-may-2026/B-off-system-MVP/order-interrupt');
    }
    // End of 26 February 2026


    // Only reorder items that are DIRECT children of this folder
    const children = materials.filter(m => Number(m.parentId) === folderId);

    // Read desired order from posted inputs: order_<id>
    const desiredById = new Map();
    children.forEach(item => {
        const key = `order_${item.id}`;
        const raw = req.body[key];
        const n = parseInt(raw, 10);

        // If blank/invalid, push it to the end
        desiredById.set(String(item.id), Number.isFinite(n) ? n : 999999);
    });

    // Sort children by desired order, then by name as a tie-break
    children.sort((a, b) => {
        const ao = desiredById.get(String(a.id)) ?? 999999;
        const bo = desiredById.get(String(b.id)) ?? 999999;
        if (ao !== bo) return ao - bo;
        return String(a.name || '').localeCompare(String(b.name || ''), 'en', { numeric: true, sensitivity: 'base' });
    });

    // Renumber to a clean 1..n and store onto the items
    children.forEach((item, idx) => {
        item.order = idx + 1;
    });

    // ✅ ADD THIS: Persist per-folder "last ordered" metadata
    req.session.data.orderMeta = req.session.data.orderMeta || {};
    req.session.data.orderMeta[String(folderId)] = {
        person: "You",
        date: new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    };

    // Persist current folder context too (helps other pages)
    req.session.data.folderId = folderId;


    return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});


router.post('/B-off-system-MVP/order-interrupt', (req, res) => {
    const pending = req.session.data.pendingOrderSave;
    if (!pending) {
        return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
    }

    const folderId = Number(pending.folderId ?? 0);
    req.session.data.folderId = folderId;

    const sessionData = req.session.data || {};
    const defaultsData = res.locals.data || {};

    if (!sessionData.materials || !sessionData.materials.length) {
        sessionData.materials = (defaultsData.materials || []).map(m => ({ ...m }));
        req.session.data.materials = sessionData.materials;
    }

    const materials = sessionData.materials;

    // Apply the exact same save logic, but using pending.body
    const children = materials.filter(m => Number(m.parentId) === folderId);

    const desiredById = new Map();
    children.forEach(item => {
        const key = `order_${item.id}`;
        const raw = pending.body[key];
        const n = parseInt(raw, 10);
        desiredById.set(String(item.id), Number.isFinite(n) ? n : 999999);
    });

    children.sort((a, b) => {
        const ao = desiredById.get(String(a.id)) ?? 999999;
        const bo = desiredById.get(String(b.id)) ?? 999999;
        if (ao !== bo) return ao - bo;
        return String(a.name || '').localeCompare(String(b.name || ''), 'en', { numeric: true, sensitivity: 'base' });
    });

    children.forEach((item, idx) => {
        item.order = idx + 1;
    });

    // ✅ ADD THIS: Persist per-folder "last ordered" metadata
    req.session.data.orderMeta = req.session.data.orderMeta || {};
    req.session.data.orderMeta[String(folderId)] = {
        person: "You",
        date: new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    };

    console.log('Person name and date:', req.session.data.orderPerson, req.session.data.orderDate);

    req.session.data.orderPerson = "You";
    req.session.data.orderDate = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    console.log('Person name and date:', req.session.data.orderPerson, req.session.data.orderDate);

    // Clean up the delayed save payload
    delete req.session.data.pendingOrderSave;

    return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});

router.post('/B-off-system-MVP/disconnect-shared-drive', (req, res) => {
    const choice = req.body['disconnect-shared-drive-choice'];
    const data = req.session.data;
    req.session.data['disconnect-shared-drive-choice'] = choice;

    if (!choice) {
        return res.render('ur-may-2026/B-off-system-MVP/disconnect-shared-drive', {
            disconnectSharedDriveError: 'Select whether you want to disconnect the Shared Drive'
        });
    }

    req.session.data.sharedDriveDisconnected = choice === 'Yes' ? 'Yes' : 'No';

    if (choice === 'Yes') {
        pushMaterialsActivity(data, {
            tag: 'Shared drive',
            title: 'Shared Drive folder Thunderstruck disconnected from this case',
            description: 'The Shared Drive folder Thunderstruck has been disconnected from this case.'
        });
        return res.redirect('/ur-may-2026/B-off-system-MVP/disconnect-shared-drive-confirmation');
    }

    return res.redirect('/ur-may-2026/B-off-system-MVP/03-case-overview');
});

module.exports = router
