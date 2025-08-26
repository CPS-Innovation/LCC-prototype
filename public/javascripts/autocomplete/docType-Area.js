$(function() {
    var areas = [
        { value: "Avon & Somerset" },
        { value: "Bedfordshire" },
        { value: "Cambridgeshire" },
        { value: "Cheshire" },
        { value: "Cleveland" },
        { value: "Counter Terrorism Division" },
        { value: "Cumbria" },
        { value: "Derbyshire" },
        { value: "Devon and Cornwall" },
        { value: "Dorset" },
        { value: "Durham" },
        { value: "Dyfed Powys" },
        { value: "Essex" },
        { value: "Gloucestershire" },
        { value: "Greater Manchester" },
        { value: "Gwent" },
        { value: "Hampshire & IOW" },
        { value: "Hertfordshire" },
        { value: "HMCPSI" },
        { value: "Humberside" },
        { value: "Kent" },
        { value: "Lancashire" },
        { value: "Leatherhead" },
        { value: "Leicestershire" },
        { value: "Lincolnshire" },
        { value: "London" },
        { value: "London North" },
        { value: "London South" },
        { value: "Merseyside" },
        { value: "Norfolk" },
        { value: "North Wales" },
        { value: "North Yorkshire" },
        { value: "Northamptonshire" },
        { value: "Northumbria" },
        { value: "Nottinghamshire" },
        { value: "Records Management Team (RMT)" },
        { value: "RMU Area" },
        { value: "SEOCID Int London and SE Div" },
        { value: "SEOCID Regional and Wales Div" },
        { value: "South Wales" },
        { value: "South Yorkshire" },
        { value: "Special Crime Division" },
        { value: "Specialist Fraud Division" },
        { value: "Stafford" },
        { value: "Suffolk" },
        { value: "Surrey" },
        { value: "Sussex" },
        { value: "Thames Valley" },
        { value: "Warwickshire" },
        { value: "West Mercia" },
        { value: "West Midlands" },
        { value: "West Yorkshire" },
        { value: "Wiltshire" }
    ];

     // setup autocomplete function pulling from area[] array
     $('#docType-Area').autocomplete({
          lookup: areas,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Area:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Area').html(thehtml);
          }
     });

});