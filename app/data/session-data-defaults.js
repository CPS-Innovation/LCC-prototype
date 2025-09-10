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
  "localReference1": "",
  "localReference2": "",
  "updateDefault": "No",
  "userType": "LCC",
  
  // Suspects
  "suspectCount": 0,
  "suspectDetailsYesNo": "",
  "suspectId": [],
  "suspectType": [],
  "suspectFirstName": [],
  "suspectLastName": [],
  "suspectDOB": [],
  "suspectCompanyName": [],

  // Edit suspect
  "editSuspect": 999,

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
  "wantedDriveFolder": ""
  

  

}
