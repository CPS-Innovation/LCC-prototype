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

  // Edit suspect
  "editSuspect": 999,
  "displaySuspect": 999,


  // Charges
  "wantToAddCharges": "",
  "chargeCount": 0,

  "chargeId": [],
  "chargeSuspectId": [],

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
  "addMaterials": ""
  
}
