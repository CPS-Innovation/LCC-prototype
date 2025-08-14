$(function(){
     var currencies = [
          { value: "Other Material" },
          { value: "Covers" },
          { value: "Rear of Witness Statement" },
          { value: "Defence Statement" },
          { value: "Unknown" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-Uncategorised').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Uncategorised').html(thehtml);
          }
     });

});
