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
  "firstHearingDetailsYesNo": "",
  "courtLocation": "",
  "firstHearingDate": "",
  
// Case details
  "area": "",
  "URN1": "",
  "URN2": "",
  "URN3": "",
  "URN4": "",
  "localReference1": "",
  "localReference2": "",
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
  "currentSuspectId": 0,
  "chargedWithAdult": [],
  "grouped": [],
  "counts": [],
  "currentChargeId": 0,



// Charge codes and descriptions on results
  "resultsId": ['0', '1', '2', '3', '4', '5', '6', '7', '8'],

  "resultsChargeCode": ['CD71003', 'CD71015', 'CD71016', 'CD71017', 'CD71038', 'CD71039', 'CD71040', 'CD71041', 'CD71042'],
  
  "resultsChargeDescription": ['Arson with intent / reckless as to whether life was endangered', 'Arson', 'Arson with intent to endanger life', 'Arson - recklessly endangering life', 'Criminal damage to property - value over £5000', 	'Criminal damage to property valued under £5000', 'Destroy / damage to property of a value unknown', '	Damage / destroy property with intent to endager life', '	Criminal damage - recklessly endagering life'	],
  
  "resultsStatute": ['Criminal Damage Act 1971 Sections 1(2), 1(3) and 4', 'Criminal Damage Act 1971 Sections 1(1), 1(3) and 4', 'Criminal Damage Act 1971 Sections 1(2), 1(3) and 4', 'Criminal Damage Act 1971 Sections 1(2), 1(3) and 4', 'Criminal Damage Act 1971 Sections 1(1) and 4', 'Criminal Damage Act 1971 Sections 1(1) and 4', 'Criminal Damage Act 1971 Sections 1(1) and 4', 'Criminal Damage Act 1971 Sections 1(2) and 4', 'Criminal Damage Act 1971 Sections 1(2) and 4'],

  "resultsFromDate": ['01/01/2012', '14/10/1971', '05/01/1971', '17/11/2005', '02/01/1971', '02/01/1971', '02/01/1971', '02/01/1971', '02/01/1971'],

  "resultsToDate": ['16/06/2019', '', '31/12/2011', '31/12/2011', '', '', '', '', ''],


  


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





  // Case complexity and weight
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
