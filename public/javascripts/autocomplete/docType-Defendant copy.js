$(function(){
     var currencies = [
          { value: "DREP" },
          { value: "MG16" },
          { value: "MG16(DBCI)" },
          { value: "MG16(DDOI)" },
          { value: "PCN1" },
          { value: "PCN2" },
          { value: "PE2" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-Defendant').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Defendant').html(thehtml);
          }
     });

});
