$(function(){
     var currencies = [
          { value: "Crown Court HRS" },
          { value: "Advocate's Record of Hearing" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-CaseOverview').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-CaseOverview').html(thehtml);
          }
     });

});
