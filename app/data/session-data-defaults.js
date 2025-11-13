/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here

  "employer.name": "Assurance Aerospace Engineering",
  "employer.id": "RVRD8V",

  // Register a case
  "operationNameYesNo": "",
  "operationName": "",
  
// Case details
  "area": "",
  "URN1": "",
  "URN2": "",
  "URN3": "",
  "URN4": 25,
  "registeringUnit": "",
  "WCU": "",

  // First hearing details
  "firstHearingDetailsYesNo": "",
  "courtLocation": "",
  "firstHearingDate": "",

  // User info
  "updateDefault": "No",
  "userType": "LCC",

// Date helper arrays
  "monthName": [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
],
  
  // Suspects
  "suspectCount": 0,
  "suspectDetailsCount": 0,
  "suspectDetailsYesNo": "",
  "suspectId": [],
  "suspectType": [],
  "suspectFirstName": [],
  "suspectLastName": [],
  "suspectDOB": [],
  "suspectCompanyName": [],
  "suspectDayBirth": [],
  "suspectMonthBirth": [],
  "suspectYearBirth": [], 
  "suspectGender": [],
  "suspectDisability": [],
  "suspectReligion": [],
  "suspectEthnicity": [],
  "suspectSDO": [],
  "suspectArrestSummons": [],
  "suspectOffenderType": [],
  "suspectAlias": [],
  "aliasId": [],
  "aliasFirstName": [],
  "aliasLastName": [],
  "aliasCount": 0,
  "aliasDetailsCount": 0,
  "aliasSuspectID": [],
  "arrestDate": [],
  "aliasTempSuspectId": 0,

  "removeSuspectId": "",

  // Edit suspect
  "editSuspect": 999,
  "displaySuspect": 999,


  // Charges
  "wantToAddCharges": "",
  "chargeCount": 0,

  "chargeId": [],
  "chargeSuspectId": [],
  "chargeVictimId": [],

  "chargeSearch": "",
  "searchResultsStatus": "hidden",


  "chargeCode": [],
  "chargeDescription": [],
  "chargeFromDay": [],
  "chargeFromMonth": [],
  "chargeFromYear": [],
  "chargeToDay": [],
  "chargeToMonth": [],
  "chargeToYear": [],
  "chargeComments": [], 
  "chargeVictimYesNo:": [],
  "chargeVictimFirstName": [],
  "chargeVictimLastName": [],
  "chargeVictimVulnerable": [],
  "chargeVictimIntimidated": [],
  "chargeVictimWitness": [],
  "offenceAddress1": [],
  "offenceAddress2": [],
  "offenceTown": [],
  "offencePostcode": [],
  "offenceCountry": [],
  "currentSuspectId": 0,
  "chargedWithAdult": [],
  "grouped": [],
  "counts": [],
  "currentChargeId": 0,


// Empty arrays for search results
  "currentResultsId": [],
  "currentResultsChargeCode": [],
  "currentResultsChargeDescription": [],
  "currentResultsStatute": [],
  "currentResultsSection": [],
  "currentResultsFromDate": [],
  "currentResultsToDate": [],
  
// Charge search results - Criminal Damage Act 1971
  "resultsId": ['0', '1', '2', '3', '4', '5', '6', '7', '8'],

  "resultsChargeCode": ['CD71003', 'CD71015', 'CD71016', 'CD71017', 'CD71038', 'CD71039', 'CD71040', 'CD71041', 'CD71042'],
  
  "resultsChargeDescription": ['Arson with intent / reckless as to whether life was endangered', 'Arson', 'Arson with intent to endanger life', 'Arson - recklessly endangering life', 'Criminal damage to property - value over £5000', 	'Criminal damage to property valued under £5000', 'Destroy / damage to property of a value unknown', '	Damage / destroy property with intent to endager life', '	Criminal damage - recklessly endagering life'	],
  
  "resultsStatute": ['Criminal Damage Act 1971', 'Criminal Damage Act 1971', 'Criminal Damage Act 1971', 'Criminal Damage Act 1971', 'Criminal Damage Act 1971', 'Criminal Damage Act 1971', 'Criminal Damage Act 1971', 'Criminal Damage Act 1971', 'Criminal Damage Act 1971'],

  "resultsSection": ['Sections 1(2), 1(3) and 4', 'Sections 1(1), 1(3) and 4', 'Sections 1(2), 1(3) and 4', 'Sections 1(2), 1(3) and 4', 'Sections 1(1) and 4', 'Sections 1(1) and 4', 'Sections 1(1) and 4', 'Sections 1(2) and 4', 'Sections 1(2) and 4'],

  "resultsFromDate": ['01 Jan 2012', '14 Oct 1971', '05 Jan 1971', '17 Nov 2005', '02 Jan 1971', '02 Jan 1971', '02 Jan 1971', '02 Jan 1971', '02 Jan 1971'],

  "resultsToDate": ['16 Jun 2019', '', '31 Dec 2011', '31 Dec 2011', '', '', '', '', ''],

  // Charge search results - terrorism
  "resultsIdTerrorism":  [
    '0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'
  ],

  "resultsChargeCodeTerrorism": [
    'AT01036','CT15001','CT15002','CT15003','CT15004','CT19001','CT19002','PT00011','PT00025',
    'PT00067','PT00071','PT00072','PT05001','PT05002','TA10001','TA10002','TA10003','TA10004','TA10005','TA10006'
  ],

  "resultsChargeDescriptionTerrorism": [
    'Contravene either way offence under regs relating to security of the nuclear industry made under s.77',
    'Return to UK in contravention of temporary exclusion order',
    'Person subject to temporary exclusion order fail to comply with permitted obligation after return to the UK',
    'Fail to hand over travel documents when required - Counter-Terrorism and Security Act 2015',
    'Obstruct / seek to frustrate search for travel documents - Counter-Terrorism and Security Act 2015',
    'Border security - wilfully fail to comply with duty imposed by Schedule 3 - hostile activity',
    'Border security - wilfully obstruct / seek to frustrate search / examination by Schedule 3 - hostile activity',
    'Driver / other person fail to immediately move a vehicle from a cordoned area on order of a constable',
    'Entering into or becoming concerned in an arrangement which facilitates the retention or control by or on behalf of another person of terrorist property by any means',
    'Views / accesses a document / record on the internet containing information useful to terrorism',
    'Publish an image of an item of clothing or other article - terrorism',
    'Enters / remains in a designated area overseas - terrorism',
    'Contravene obligation imposed by control order - Prevention of Terrorism Act 2005',
    'Control order now expired fail to report to specified person on re-entry to UK',
    'Disclose information knowing / having reasonable cause to suspect it was to be treated as confidential',
    'Deal with funds / economic resources owned / held / controlled by a designated person',
    'Make funds / financial services available directly / indirectly to a designated person',
    'Make funds / financial services available to a person for the benefit of a designated person',
    'Make economic resources available directly / indirectly to a designated person',
    'Make economic resources available to a person for the benefit of a designated person'
  ],

  "resultsStatuteTerrorism": [
    'Anti-terrorism, Crime and Security Act 2001',
    'Counter-Terrorism and Security Act 2015',
    'Counter-Terrorism and Security Act 2015',
    'Counter-Terrorism and Security Act 2015',
    'Counter-Terrorism and Security Act 2015',
    'Counter-Terrorism and Border Security Act 2019',
    'Counter-Terrorism and Border Security Act 2019',
    'Terrorism Act 2000',
    'Terrorism Act 2000',
    'Terrorism Act 2000',
    'Terrorism Act 2000',
    'Terrorism Act 2000',
    'Prevention of Terrorism Act 2005',
    'Prevention of Terrorism Act 2005',
    'Terrorist Asset-Freezing etc. Act 2010',
    'Terrorist Asset-Freezing etc. Act 2010',
    'Terrorist Asset-Freezing etc. Act 2010',
    'Terrorist Asset-Freezing etc. Act 2010',
    'Terrorist Asset-Freezing etc. Act 2010',
    'Terrorist Asset-Freezing etc. Act 2010'
  ],

  "resultsSectionTerrorism": [
    'Section 77(3)(a)',
    'Sections 10(1) and (5)',
    'Sections 10(3) and (5)',
    'Sections 15(1) and (3) of Schedule 1',
    'Sections 15(2) and (3) of Schedule 1',
    'Sections 23(1)(a) and (2) of Schedule 3',
    'Sections 23(1)(b) and (2) of Schedule 3',
    'Sections 36(2) and (4)',
    'Section 18',
    'Sections 58(1)(c) and (4)',
    'Sections 13(1A) and (3)',
    'Sections 58B(1) and (9)',
    'Sections 9(1) and (4)',
    'Sections 9(2) and (4)',
    'Sections 10 and 32(2)',
    'Sections 11 and 32(1)',
    'Sections 12 and 32(1)',
    'Sections 13 and 32(1)',
    'Sections 14 and 32(1)',
    'Sections 15 and 32(1)'
  ],

  "resultsFromDateTerrorism": [
    '14 Dec 2001',
    '12 Feb 2015',
    '12 Feb 2015',
    '13 Feb 2015',
    '13 Feb 2015',
    '13 Aug 2020',
    '13 Aug 2020',
    '19 Feb 2001',
    '19 Feb 2001',
    '12 Apr 2019',
    '12 Apr 2019',
    '12 Apr 2019',
    '11 Mar 2005',
    '11 Mar 2005',
    '17 Dec 2010',
    '17 Dec 2010',
    '17 Dec 2010',
    '17 Dec 2010',
    '17 Dec 2010',
    '17 Dec 2010'
  ],

  "resultsToDateTerrorism": [
    '', '', '', '', '', '', '', '', '', '', '', '', '14 Dec 2011', '14 Dec 2011',
    '31 Dec 2020','31 Dec 2020','31 Dec 2020','31 Dec 2020','31 Dec 2020','31 Dec 2020'
  ],



  // Charge search results - fraud
  "resultsIdFraud": [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', 
  '9', '10', '11', '12', '13', '14', '15', '16', 
  '17', '18', '19', '20'
],

"resultsChargeCodeFraud": [
  'BD81017', 'CA03001', 'CA03002', 'CA03003', 'CA03004',
  'CE79039', 'CE79046', 'CE79047', 'CE79048', 'CE79053',
  'CE79090', 'CE79097', 'CE79098', 'CE79100', 'CE79101',
  'CE79102', 'CE79158', 'CE79158C', 'CE79159', 'CE79160', 
  'CE79161', 'CE79183', 'CE79184'
],

"resultsChargeDescriptionFraud": [
  'Being knowingly concerned in fraudulent evasion of gaming licence duty',
  'Obtain electronic communications service with intent to avoid payment',
  'Possess a thing for fraudulent use of a communications service',
  'Supply a thing to fraudulently use a communications service',
  'Offer to supply a thing to fraudulently use an electronic communications service',
  'Fraudulently ship dutiable / restricted goods for export without acceptance of a prior entry',
  'Fraudulently evade a prohibition / restriction on the export of goods - other than controlled drug',
  'Take dutiable / restricted goods on an exporting ship with fraudulent intent',
  'Load dutiable / restricted goods into an aircraft without authorisation and with fraudulent intent',
  'Attempt to fraudulently evade the agricultural levy chargeable on goods being exported',
  'Carry / remove / deposit / harbour / keep / conceal / deal with Class A drug with intent evade prohibition on importing',
  'Carry / remove / deposit / harbour / keep / conceal / deal with Class B drug with intent evade prohibition on importing',
  'Carry / remove / deposit / harbour / keep / conceal / deal with Class C drug with intent evade prohibition on importing',
  'Evade prohibition / restriction on the exporting of Class A drug',
  'Evade prohibition / restriction on the exporting of Class B drug',
  'Evade prohibition / restriction on the exporting of Class C drug',
  'Fraudulently evade any duty / prohibition / restriction / provision',
  'Conspire to fraudulently evade any duty / prohibition / restriction / provision',
  'Attempt to fraudulently evade duty / prohibition / restriction / provision',
  'Import / export goods with intent to defraud His Majesty of duty payable',
  'Import / export goods with intent to evade prohibition / restriction',
  'Carry / remove / deposit / conceal etc goods with intent to defraud His Majesty',
  'Carry / remove / deposit / conceal etc goods with intent to evade restriction / prohibition'
],

"resultsStatuteFraud": [
  'Betting and Gaming Duties Act 1981',
  'Communications Act 2003', 'Communications Act 2003', 'Communications Act 2003', 'Communications Act 2003',
  'Customs and Excise Management Act 1979', 'Customs and Excise Management Act 1979',
  'Customs and Excise Management Act 1979', 'Customs and Excise Management Act 1979',
  'Customs and Excise Management Act 1979', 'Customs and Excise Management Act 1979',
  'Customs and Excise Management Act 1979', 'Customs and Excise Management Act 1979',
  'Customs and Excise Management Act 1979', 'Customs and Excise Management Act 1979',
  'Customs and Excise Management Act 1979', 'Customs and Excise Management Act 1979',
  'Criminal Law Act 1977',
  'Customs and Excise Management Act 1979', 'Customs and Excise Management Act 1979',
  'Customs and Excise Management Act 1979', 'Customs and Excise Management Act 1979',
  'Customs and Excise Management Act 1979'
],

"resultsSectionFraud": [
  'Sections 7(3)(b) of Schedule 2',
  'Section 125',
  'Sections 126(1) and (5)',
  'Sections 126(2) and (5)',
  'Sections 126(2) and (5)',
  'Sections 53(8) and (9)',
  'Section 68(2)',
  'Section 63(f)',
  'Section 64(7)',
  'Section 68A(1)',
  'Sections 170(1)(b), 3 and 4 of Sched 1',
  'Sections 170(1)(b), 3 and 4 of Sched 1',
  'Sections 170(1)(b), 3 and 4 of Sched 1',
  'Sections 170(1)(b), 3 and 4 of and Schedule 1',
  'Sections 170(1)(b), 3 and 4 of and Schedule 1',
  'Sections 170(1)(b), 3 and 4 of and Schedule 1',
  'Sections 170(2) and (3)',
  'Section 1(1)',
  'Sections 170(2) and (3)',
  'Sections 170(1)(b) and (3)',
  'Sections 170(1)(b) and (3)',
  'Sections 170(1)(b) and (3)',
  'Sections 170(1)(b) and (3)'
],

"resultsFromDateFraud": [
  '1 Sep 1994', '26 Jul 2003', '26 Jul 2003', '26 Jul 2003', '2 Jul 2003',
  '1 Apr 1979', '1 Apr 1979', '1 Apr 1979', '1 Apr 1979', '1 Apr 1979',
  '2 Jan 1979', '2 Jan 1979', '3 Jan 1979', '2 Jan 1979', '2 Jan 1979',
  '2 Jan 1979', '4 Jan 1979', '1 Jan 1979', '1 Jan 1979', '2 Jan 1979',
  '2 Jan 1979', '23 Feb 1979', '23 Feb 1979'
],

"resultsToDateFraud": [
  '1 Oct 1997', '', '', '', '',
  '30 Dec 2020', '', '', '', '',
  '', '', '', '', '', '',
  '30 Dec 2020', '30 Dec 2020', '30 Dec 2020', '', '', '', ''
],
  

"victims": [ 
  {
    id: 0, 
    firstName: null, 
    lastName: null, 
    vulnerable: null,
    intimidated: null, 
    witness: null 
  }
],
// "victims": [],
"countVictims": 0,



// Pre-charge flag
"preCharge": "No",

// Case complexity and weight
"newCase_MonitoringCodes": [],
"caseComplexity": "",
"caseWeight": "",

// CPS and police staff
"prosecutorCaseworkerYesNo": "",
"prosecutor": "",
"caseworker": "",
"policeYesNo": "",
"policeRank": "",
"policeFirstName": "",
"policeLastName": "",
"policeShoulderNumber": "",
"policeUnit": "",

// Wanted folders
"wantedFolders": "",
"wantedEgressFolder": "",
"wantedDriveFolder": "",
"egressTemplate": "",
"addMaterials": "",





"newFilter": "",
"filterStatusUsed": "",
"filterStatusUnused": "",
"filterStatusNone": "",
"filterCategoryReview": "",
"filterCategoryCaseOverview": "",
"filterCategoryStatements": "",
"filterCategoryExhibits": "",
"filterCategoryForensics": "",
"filterCategoryUnusedMaterial": "", 
"filterCategoryDefendant": "",
"filterCategoryCourtPreparation": "",

"folderName": null,
"level": 1,

"materials": [
  {
    id: 1,
    name: 'MCLOVE MG3',
    type: 'MG3',
    category: 'Review',
    date: '18 May 2022',
    status: 'None',
    new: false,
    docLink: 'MCLOVEMG3.pdf',
    previewLink: '/public/files/MCLOVEMG3.pdf',
    parentId: 1000,
    folder: false,
    level: 2
  },
  {
    id: 2,
    name: 'Case overview and officer comments',
    type: 'PDF',
    category: 'Case overview',
    date: '9 Aug 2022',
    status: 'None',
    new: true,
    docLink: 'CM01.pdf',
    previewLink: '/public/files/CM01.pdf',
    parentId: 1000,
    folder: false,
    level: 2
  },
  {
    id: 3,
    name: 'MG05 MCLOVE',
    type: 'MG05',
    category: 'Case overview',
    date: '14 Jan 2023',
    status: 'Used',
    new: true,
    docLink: 'MG05MCLOVE.pdf',
    previewLink: '/public/files/MG05MCLOVE.pdf',
    parentId: 1000,
    folder: false,
    level: 2
  },
  {
    id: 4,
    name: 'MG06 3 June',
    type: 'MG05',
    category: 'Unused material',
    date: '2 Mar 2023',
    status: 'Used',
    new: true,
    docLink: 'MG06_3June.pdf',
    previewLink: '/public/files/MG06_3June.pdf',
    parentId: 1005,
    folder: false,
    level: 2
  },
  {
    id: 5,
    name: 'MG06 10 June',
    type: 'MG05',
    category: 'Unused material',
    date: '24 Jul 2023',
    status: 'Used',
    new: true,
    docLink: 'MG06_10june.pdf',
    previewLink: '/public/files/MG06_10june.pdf',
    parentId: 1005,
    folder: false,
    level: 2
  },
  {
    id: 6,
    name: 'stmt BLAYNEE 2034 1 JUNE mg11',
    type: 'MG11',
    category: 'Statements',
    date: '11 Oct 2023',
    status: 'Used',
    new: true,
    docLink: 'stmt_BLAYNEE_2034_1_JUNE_mg11.pdf',
    previewLink: '/public/files/stmt_BLAYNEE_2034_1_JUNE_mg11.pdf',
    parentId: 1011,
    folder: false,
    level: 2
  },
  {
    id: 7,
    name: 'stmt Lucy Doyle MG11',
    type: 'MG11',
    category: 'Statements',
    date: '6 Dec 2023',
    status: 'Used',
    new: true,
    docLink: 'stmt_Lucy_Doyle_MG11.pdf',
    previewLink: '/public/files/stmt_Lucy_Doyle_MG11.pdf',
    parentId: 1011,
    folder: false,
    level: 2
  },
  {
    id: 8,
    name: 'stmt Shelagh McLove MG11',
    type: 'MG11',
    category: 'Statements',
    date: '9 Jan 2024',
    status: 'Used',
    new: true,
    docLink: 'stmt_Shelagh_McLove_MG11.pdf',
    previewLink: '/public/files/stmt_Shelagh_McLove_MG11.pdf',
    parentId: 1011,
    folder: false,
    level: 2
  },
  {
    id: 9,
    name: 'Shelagh McLove VPS mg11',
    type: 'MG11',
    category: 'Statements',
    date: '27 Feb 2024',
    status: 'Used',
    new: true,
    docLink: 'Shelagh_McLove_VPS_mg11.pdf',
    previewLink: '/public/files/Shelagh_McLove_VPS_mg11.pdf',
    parentId: 1011,
    folder: false,
    level: 2
  },
  {
    id: 10,
    name: 'MG11 Shelagh MCLOVE retraction',
    type: 'MG11',
    category: 'Statements',
    date: '12 Apr 2024',
    status: 'Used',
    new: false,
    docLink: 'MG11_Shelagh_MCLOVE_retraction.pdf',
    previewLink: '/public/files/MG11_Shelagh_MCLOVE_retraction.pdf',
    parentId: 1011,
    folder: false,
    level: 2
  },
  {
    id: 11,
    name: 'MCLOVE MG12',
    type: 'MG12',
    category: 'Exhibits',
    date: '23 May 2024',
    status: 'Used',
    new: false,
    docLink: 'MG12.pdf',
    previewLink: '/public/files/MG12.pdf',
    parentId: 1005,
    folder: false,
    level: 2
  },
  {
    id: 12,
    name: 'MCLOVE MG00',
    type: 'MG00',
    category: 'Exhibits',
    date: '1 Jul 2024',
    status: 'Used',
    new: true,
    docLink: 'MG00.pdf',
    previewLink: '/public/files/MG00.pdf',
    parentId: 1005,
    folder: false,
    level: 2
  },
  {
    id: 13,
    name: 'UNUSED 1 - STORM LOG 1881 01.6.20 - EDITED 2020-11-23 MCLOVE',
    type: 'MG11',
    category: 'Unused material',
    date: '15 Aug 2024',
    status: 'Unused',
    new: false,
    docLink: 'UNUSED_1_STORM_LOG_1881_01.6.20_EDITED_2020-11-23_MCLOVE.pdf',
    previewLink: '/public/files/UNUSED_1_STORM_LOG_1881_01.6.20_EDITED_2020-11-23_MCLOVE.pdf',
    parentId: 1005,
    folder: false,
    level: 2
  },
  {
    id: 14,
    name: 'SDC_items to_be Disclosed MCLOVE',
    type: 'MG11',
    category: 'Unused material',
    date: '20 Sep 2024',
    status: 'Unused',
    new: true,
    docLink: 'SDC_items_to_be_Disclosed_MCLOVE.pdf',
    previewLink: '/public/files/SDC_items_to_be_Disclosed_MCLOVE.pdf',
    parentId: 1005,
    folder: false,
    level: 2
  },
  {
    id: 15,
    name: 'MG20_5_JUNE',
    type: 'MG20',
    category: 'Exhibits',
    date: '2 Nov 2024',
    status: 'Unused',
    new: true,
    docLink: 'MG20_5_JUNE.pdf',
    previewLink: '/public/files/MG20_5_JUNE.pdf',
    parentId: 1005,
    folder: false,
    level: 2
  },
  {
    id: 16,
    name: 'MG20_10_JUNE',
    type: 'MG20',
    category: 'Exhibits',
    date: '11 Dec 2024',
    status: 'Unused',
    new: true,
    docLink: 'MG20_10_JUNE.pdf',
    previewLink: '/public/files/MG20_10_JUNE.pdf',
    parentId: 1005,
    folder: false,
    level: 2
  },
  {
    id: 17,
    name: 'PRE CONS D',
    type: 'MG20',
    category: 'Defendant',
    date: '29 Jan 2025',
    status: 'Used',
    new: true,
    docLink: 'PRE_CONS_D.pdf',
    previewLink: '/public/files/PRE_CONS_D.pdf',
    parentId: 1000,
    folder: false,
    level: 2
  },
  {
    id: 18,
    name: 'Asset Rec 1',
    type: 'MG20',
    category: 'Exhibits',
    date: '19 Mar 2025',
    status: 'None',
    new: true,
    docLink: 'defendants.pdf',
    previewLink: '/public/files/Asset-Rec-1.png',
    parentId: 1000,
    folder: false,
    level: 2
  },
  {
    id: 19,
    name: 'MG11 - 1',
    type: 'MG11',
    category: 'Statements',
    date: '22 Jun 2025',
    status: 'None',
    new: true,
    docLink: 'MG11_1.pdf',
    previewLink: '/public/files/MG11_1.pdf',
    parentId: 0,
    folder: false,
    level: 2
  },
  {
    id: 20,
    name: 'Exhibit - 1',
    type: 'MG11',
    category: 'Exhibits',
    date: '14 Aug 2025',
    status: 'None',
    new: true,
    docLink: 'MG12.pdf',
    previewLink: '/public/files/MG11_2.pdf',
    parentId: 1011,
    folder: false,
    level: 2
  },
  {
    id: 1000,
    name: '1. Case management',
    type: null,
    category: null,
    date: '8 Nov 2022',
    status: 'Used',
    new: true,
    docLink: 'caseManagement',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1001,
    name: '2. Conference hearing notes',
    type: null,
    category: null,
    date: '14 Feb 2023',
    status: 'Used',
    new: false,
    docLink: 'conferenceHearingNotes',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1002,
    name: '3. Experts',
    type: null,
    category: null,
    date: '7 May 2023',
    status: 'None',
    new: false,
    docLink: 'experts',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1003,
    name: '4. Counsel',
    type: null,
    category: null,
    date: '28 Aug 2023',
    status: 'None',
    new: false,
    docLink: 'counsel',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1004,
    name: '5. Correspondence',
    type: null,
    category: null,
    date: '22 Nov 2023',
    status: 'None',
    new: false,
    docLink: 'correspondence',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1005,
    name: '6. Disclosure',
    type: null,
    category: null,
    date: '9 Feb 2024',
    status: 'Used',
    new: false,
    docLink: 'disclosure',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1006,
    name: '7. Finance',
    type: null,
    category: null,
    date: '17 Apr 2024',
    status: 'None',
    new: false,
    docLink: 'finance',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1007,
    name: '8. Lawyer working copies',
    type: null,
    category: null,
    date: '23 Jun 2024',
    status: 'Used',
    new: false,
    docLink: 'lawyerWorkingCopies',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1008,
    name: '9. PO working copies',
    type: null,
    category: null,
    date: '12 Sep 2024',
    status: 'Unused',
    new: false,
    docLink: 'poWorkingCopies',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1009,
    name: '10. Police',
    type: null,
    category: null,
    date: '27 Nov 2024',
    status: 'Used',
    new: false,
    docLink: 'police',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1010,
    name: '11. Media',
    type: null,
    category: null,
    date: '9 Jan 2025',
    status: 'None',
    new: false,
    docLink: 'media',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1011,
    name: '12. Victims and Witnesses',
    type: null,
    category: null,
    date: '4 Mar 2025',
    status: 'Unused',
    new: false,
    docLink: 'victimsAndWitnesses',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1012,
    name: '13. DCS',
    type: null,
    category: null,
    date: '28 May 2025',
    status: 'Used',
    new: false,
    docLink: 'dcs',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1013,
    name: '14. Magistrates Court',
    type: null,
    category: null,
    date: '19 Jul 2025',
    status: 'Unused',
    new: false,
    docLink: 'magistratesCourt',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  },
  {
    id: 1014,
    name: '15. IDPC',
    type: null,
    category: null,
    date: '1 Nov 2025',
    status: 'None',
    new: false,
    docLink: 'idpc',
    previewLink: null,
    parentId: 0,
    folder: true,
    level: 1
  }
],

"parentId": 0,
"breadcrumbs": ['Shared drive'],
"lastdiscard": []

}
