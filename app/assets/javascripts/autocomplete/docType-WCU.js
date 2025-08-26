$(function() {
    var WCU = [
        { value: "Bedfordshire WCU" },
        { value: "Beds WCU" },
        { value: "Bristol WCU" },
        { value: "Cambridgeshire WCU" },
        { value: "Cardiff Merthyr WCU" },
        { value: "Cheshire WCU" },
        { value: "Cleveland WCU" },
        { value: "Cumbria WCU" },
        { value: "Derby WCU" },
        { value: "Derbyshire WCU" },
        { value: "Devon and Cornwall WCU" },
        { value: "Dorset WCU" },
        { value: "Durham WCU" },
        { value: "Dyfed Powys WCU" },
        { value: "Essex WCU" },
        { value: "Gloucs WCU" },
        { value: "Greater Manchester WCU" },
        { value: "Guildford WCU" },
        { value: "Gwent WCU" },
        { value: "Hampshire WCU" },
        { value: "Hertfordshire WCU" },
        { value: "Herts WCU" },
        { value: "Humberside WCU" },
        { value: "Inner London Youth WCU" },
        { value: "Kent WCU" },
        { value: "Lancashire WCU" },
        { value: "Leicestershire WCU" },
        { value: "Leics WCU" },
        { value: "Lincolnshire WCU" },
        { value: "London North-East WCU" },
        { value: "London North-West WCU" },
        { value: "London South-Central WCU" },
        { value: "London South-Southern WCU" },
        { value: "Merseyside WCU" },
        { value: "Norfolk Team WCU" },
        { value: "North Wales WCU" },
        { value: "North Yorkshire WCU" },
        { value: "Northampton WCU" },
        { value: "Northamptonshire WCU" },
        { value: "Northumbria WCU" },
        { value: "Nottinghamshire WCU" },
        { value: "South Yorkshire WCU" },
        { value: "Southern WCU" },
        { value: "Staffordshire WCU" },
        { value: "Suffolk WCU" },
        { value: "Sussex WCU" },
        { value: "Swansea WCU" },
        { value: "Taunton WCU" },
        { value: "Thames Valley WCU" },
        { value: "Warwickshire WCU" },
        { value: "Wessex WCU" },
        { value: "West Mercia WCU" },
        { value: "West Midlands WCU" },
        { value: "West Mids WCU" },
        { value: "West Yorkshire WCU" },
        { value: "Western WCU" },
        { value: "Wiltshire WCU" }
    ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-WCU').autocomplete({
          lookup: WCU,
          onSelect: function (suggestion) {
               var thehtml = '<strong>WCU:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-WCU').html(thehtml);
          }
     });

});
