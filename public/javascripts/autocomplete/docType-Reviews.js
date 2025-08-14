$(function(){
     var currencies = [
          { value: "MG3A (with Schedule of Charges)" },
          { value: "MG3 (with Schedule of Charges)" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-Reviews').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Reviews').html(thehtml);
          }
     });

});
