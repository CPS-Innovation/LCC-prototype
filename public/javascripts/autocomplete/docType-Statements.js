$(function(){
     var currencies = [
          { value: "MG11(CONT)" },
          { value: "MG11(T)" },
          { value: "MG11T(CONT)" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-Statements').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Statements').html(thehtml);
          }
     });

});
