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
  "aliasCount": 0,







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




  // Edit suspect
  "editSuspect": 999,
  "displaySuspect": 999,

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
