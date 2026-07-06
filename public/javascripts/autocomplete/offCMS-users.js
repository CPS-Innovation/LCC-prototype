$(function(){
     var currencies = [
          { value: "jim.halpert@test.gov.uk" },
          { value: "pam.beesly@test.gov.uk" },
          { value: "erin.hannon@test.gov.uk" },
          { value: "jan.levinson@test.gov.uk" },
          { value: "michael.scott@test.gov.uk" },
          { value: "andy.bernard@test.gov.uk" },
          { value: "dwight.schrute@test.gov.uk" },
          { value: "karen.filippelli@test.gov.uk" },
          { value: "creed.bratton@test.gov.uk" },
          { value: "kevin.malone@test.gov.uk" },
          { value: "kelly.kapoor@test.gov.uk" },
          { value: "toby.flenderson@test.gov.uk" },
          { value: "cathy.simms@test.gov.uk" },
          { value: "angela.martin@test.gov.uk" },
          { value: "phyllis.lapin-vance@test.gov.uk" },
          { value: "robert.california@test.gov.uk" },
          { value: "stanley.hudson@test.gov.uk" },
          { value: "gabe.lewis@test.gov.uk" },
          { value: "oscar.martinez@test.gov.uk" },
          { value: "ryan.howard@test.gov.uk" },
          { value: "meredith.palmer@test.gov.uk" },
          { value: "roy.anderson@test.gov.uk" },
          { value: "david.wallace@test.gov.uk" },
          { value: "nellie.bertram@test.gov.uk" },
          { value: "jo.bennett@test.gov.uk" },
          { value: "darryl.philbin@test.gov.uk" },
          { value: "pete.miller@test.gov.uk" },
          { value: "todd.packer@test.gov.uk" },
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
