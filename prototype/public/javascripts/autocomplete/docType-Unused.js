$(function(){
     var currencies = [
          { value: "MG11(R)" },
          { value: "MG20" },
          { value: "MG21" },
          { value: "MG21A" },
          { value: "MG6" },
          { value: "Other material" },
          { value: "Other exhibit" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-Unused').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Unused').html(thehtml);
          }
     });

});
