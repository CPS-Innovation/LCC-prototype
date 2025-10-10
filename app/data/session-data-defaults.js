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
