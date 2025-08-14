$(function(){
     var currencies = [
          { value: "jim.halpert@cps.gov.uk" },
          { value: "pam.beesly@cps.gov.uk" },
          { value: "erin.hannon@cps.gov.uk" },
          { value: "jan.levinson@cps.gov.uk" },
          { value: "michael.scott@cps.gov.uk" },
          { value: "andy.bernard@cps.gov.uk" },
          { value: "dwight.schrute@cps.gov.uk" },
          { value: "karen.filippelli@cps.gov.uk" },
          { value: "creed.bratton@cps.gov.uk" },
          { value: "kevin.malone@cps.gov.uk" },
          { value: "kelly.kapoor@cps.gov.uk" },
          { value: "toby.flenderson@cps.gov.uk" },
          { value: "cathy.simms@cps.gov.uk" },
          { value: "angela.martin@cps.gov.uk" },
          { value: "phyllis.lapin-vance@cps.gov.uk" },
          { value: "robert.california@cps.gov.uk" },
          { value: "stanley.hudson@cps.gov.uk" },
          { value: "gabe.lewis@cps.gov.uk" },
          { value: "oscar.martinez@cps.gov.uk" },
          { value: "ryan.howard@cps.gov.uk" },
          { value: "meredith.palmer@cps.gov.uk" },
          { value: "roy.anderson@cps.gov.uk" },
          { value: "david.wallace@cps.gov.uk" },
          { value: "nellie.bertram@cps.gov.uk" },
          { value: "jo.bennett@cps.gov.uk" },
          { value: "darryl.philbin@cps.gov.uk" },
          { value: "pete.miller@cps.gov.uk" },
          { value: "todd.packer@cps.gov.uk" },
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#newCase_Access-Email').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#newCase_Access-Email').html(thehtml);
          }
     });

     $('#newCase_Access-Email2').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#newCase_Access-Email2').html(thehtml);
          }
     });

     $('#newCase_Access-Email3').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#newCase_Access-Email3').html(thehtml);
          }
     });


});
