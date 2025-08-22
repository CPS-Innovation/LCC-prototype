$(function(){
     var currencies = [
          { value: "Streamlined Disclosure Certificate" },
          { value: "BCM Form finalised" },
          { value: "Instructions to Admin" },
          { value: "MC PET Adult 2021" },
          { value: "MPS Witness Warning Â– CC" },
          { value: "PET Form finalised" },
          { value: "Prosecutions Strategy Document Â– Serious Cases" },
          { value: "PTPH Form V2" },
          { value: "Special Measures Appl with Cover (Def/MC/CC)" },
          { value: "New Live Link Application" },
          { value: "Certificate of Readiness" },
          { value: "Application To Extend CTL" },
          { value: "CTL Case Progression Log" },
          { value: "Certificate of Trial Readiness - CC" },
          { value: "Application for restraining order" },
          { value: "Committal for Sentence Brief" },
          { value: "PO - Lawyer Action Log" },
          { value: "Application to vacate" },
          { value: "Police Witness Warned List - Luton & St Albans" },
          { value: "Civilian Warning Warned List for St Albans & Luton" },
          { value: "Police witness live evidence - St Albans " },
          { value: "Police Witness Live Evidence - Stevenage" },
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-Court').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Court').html(thehtml);
          }
     });

});
