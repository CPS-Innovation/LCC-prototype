$(function(){
     var currencies = [
          { value: "MG22 SFR" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-Forensics').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Forensics').html(thehtml);
          }
     });

});
