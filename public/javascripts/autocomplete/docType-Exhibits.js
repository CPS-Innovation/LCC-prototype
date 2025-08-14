$(function(){
     var currencies = [
          { value: "MG15(CONT)" },
          { value: "MG15(T)" },
          { value: "MG15(T)(CONT)" },
          { value: "MG22 SFR" },
          { value: "HORT-1" },
          { value: "HORT-2" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-Exhibits').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Exhibits').html(thehtml);
          }
     });

});
