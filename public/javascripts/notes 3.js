// =================================== NOTES =================================== //

$(document).ready(function () {

    // Existing notes
    var notesNumber = 4;

     $(".has-notes").on("click", function (e) {
          $(this).parent().parent().parent().addClass('existing-note-added');
     });

     $(".closeNotesModal").on("click", function (e) {
          $('table tbody tr td').removeClass('new-note-added');
     });

    $('#note-added, #note-loading').hide();

    $("#notes-button").on("click", function (e) {

        $('.saving-panel-notes').show();
        $('.header-wrapper').hide();
        $('#note-loading').show();

        setTimeout(function () {
            $('#note-loading').hide();
            $('#notes .saving-panel-notes').hide();
            $('#notes .success-banner-notes').show();
            $('#note-added').show();
        }, 2000)

        // Time stamp
        document.getElementById("note-timestamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
        }


        // Note
        $.cookie("notes-Details", $('#notes-Comments').val(), {path:'/'});
        $('#note-added .hods-timeline__description').html($.cookie("notes-Details"));
        $('.notes-text-content .notes-content').html($.cookie("notes-Details"));

        setTimeout(function () {
            $('#notes-Comments').val('');
            $('#notes-Comments-info').text('You can enter up to 500 characters');
        }, 15)

        // Counter 
        // notesNumber += 1;
        // $('.notes-number').text(notesNumber);
        // $('.notes-trigger span').text(notesNumber);

          // Tags
          var notes = $('#notes-Comments').val();
          if (notes.length > 0) {   
               $('.hods-timeline__description').show();
          } else {
               $('.hods-timeline__description').hide();
          }

          var notesEvidential = $('#notes-Evidential').val();
          $('.existing-tags-wrapper .notes-Evidential').hide();

          if ($('#notes-Evidential').val() == 'EVIDENCE - Live' || $('#notes-Evidential').val() == 'EVIDENCE - S9' || $('#notes-Evidential').val() == 'UNUSED - Disclose' || $('#notes-Evidential').val() == 'UNUSED - Not Disclose' || $('#notes-Evidential').val() == 'UNUSED - Clearly Not Disclose') {
               // alert(notes);
               $('.existing-tags-wrapper').append('<strong class="govuk-tag notes-Evidential"></strong>');
               $('strong.notes-Evidential').html(notesEvidential);
               $('.existing-tags-wrapper .notes-Evidential').show();
               $('.existing-note-added .notes-text-content').append('<strong class="govuk-tag  notes-Evidential">' + notesEvidential + '</strong>');
          } else {
               $('.existing-tags-wrapper .notes-Evidential').hide();
          }

          var notesEvidentialType = $('input[name=notes-Evidence]:checked').val();
          if ($('input[name=notes-Evidence]').is(':checked')) {
               $('.notes-Evidential').append(' - ' + notesEvidentialType);
               // $('.existing-note-added .notes-text-content .notes-Evidential').append(' - ' + notesEvidentialType);
          }
          
          if ($('input[id=notes-GDPR]').is(':checked')) {
               $('.existing-tags-wrapper').append('<strong class="govuk-tag">Not GDPR Safe</strong>');
               $('.existing-note-added .notes-text-content').append('<strong class="govuk-tag">Not GDPR Safe</strong>');
          }

          if ($('input[id=notes-Links]').is(':checked')) {
               $('.existing-tags-wrapper').append('<strong class="govuk-tag">Links don\'t work</strong>');
               $('.existing-note-added .notes-text-content').append('<strong class="govuk-tag">Links don\'t work</strong>');
          }

          if ($('input[id=notes-Sensitive]').is(':checked')) {
               $('.existing-tags-wrapper').append('<strong class="govuk-tag">Sensitive Material</strong>');
               $('.existing-note-added .notes-text-content').append('<strong class="govuk-tag">Sensitive Material</strong>');
          }

          var notesStatement = $('#notes-MG11').val();
          if ($('#notes-MG11').val() == 'Arrest' || $('#notes-MG11').val() == 'Victim' || $('#notes-MG11').val() == 'VPS' || $('#notes-MG11').val() == 'Civilian' || $('#notes-MG11').val() == 'Expert') {
               $('.existing-tags-wrapper').append('<strong class="govuk-tag">' + notesStatement + '</strong>');
               $('.existing-note-added .notes-text-content').append('<strong class="govuk-tag">' + notesStatement + '</strong>');
          }

          var notesExhibit = $('#notes-Exhibit').val();
          if ($('#notes-Exhibit').val() == 'Audio' || $('#notes-Exhibit').val() == 'MG15' || $('#notes-Exhibit').val() == 'Bodyworn' || $('#notes-Exhibit').val() == 'Phone' || $('#notes-Exhibit').val() == 'Presentation' || $('#notes-Exhibit').val() == 'Maps' || $('#notes-Exhibit').val() == 'CCTV' || $('#notes-Exhibit').val() == 'Cell' || $('#notes-Exhibit').val() == '999' || $('#notes-Exhibit').val() == 'Photo - Injuries' || $('#notes-Exhibit').val() == 'Photo - Scene' || $('#notes-Exhibit').val() == 'Photo - Exhibits') {
               $('.existing-tags-wrapper').append('<strong class="govuk-tag">' + notesExhibit + '</strong>');
               $('.existing-note-added .notes-text-content').append('<strong class="govuk-tag">' + notesExhibit + '</strong>');
          }

     });

     // Note Errors
     $('.cta-buttons').hide();
     $('#notes-error').hide();

     $("#notes-Comments").on("keyup", function (e) {
          $('.cta-buttons').show();
          $('.error-buttons').hide();
     });

     $('#notes-Evidential, #notes-GDPR, #notes-Links, #notes-Sensitive, #notes-MG11, #notes-Exhibit').on("change", function (e) {
          $('.cta-buttons').show();
          $('.error-buttons').hide();
     });

     $('#notes-errors').on("click", function (e) {
          $('.notes-wrapper, .hods-timeline').addClass('errors');
          if ($('#notes-Comments').val() <= 0) {
               // $('#notes-Comments').addClass('govuk-input--error');
               $('#notes-error').show();
               $('.newNote-Details').attr('open', 'open');
          } else {
               $('#notes-error').hide();
          }
     });

})


// =================================== NEW NOTES =================================== //

$(document).ready(function () {

     // New notes
     $(".new-notes-link").on("click", function (e) {
          $(this).parent().parent().parent().addClass('new-note-added');
     });

     $(".closeNewNotesModal").on("click", function (e) {
          $('table tbody tr td').removeClass('new-note-added');
     });

     $('.notes-completed').hide();

     var notesNewNumber = 0;

     $('#noteNew-added').hide();

     $("#notesNew-button").on("click", function (e) {

          $('.notes-completed').show();
          $('.closeNewNotesModal').hide();

          $('.notes-wrapper, .hods-timeline').removeClass('errors');
          $('#notesNew-Comments').removeClass('govuk-input--error');
          $('#newnotes-error').hide();

          $('.saving-panel-notes-NEW').show();
          $('.header-wrapper-NEW').hide();
          $('#noteNew-loading').show();

          setTimeout(function () {
               $('#noteNew-loading').hide();
               $('#notesNew .saving-panel-notes-NEW').hide();
               $('#notesNew .success-banner-notes-NEW').show();
               $('#noteNew-added').show();
          }, 2000)

          // Time stamp
          document.getElementById("noteNew-timestamp").innerHTML = formatAMPM();
          function formatAMPM() {
               var d = new Date(),
               minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
               hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
               ampm = d.getHours() >= 12 ? 'pm' : 'am',
               months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
               days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
               return d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
          }

          // Note
          var newNotesContent = $('#notesNew-Comments').val();
          // $.cookie("notesNew-Details", $('#notesNew-Comments').val(), {path:'/'});
          $('#noteNew-added .hods-timeline__description').html(newNotesContent);

          $('.new-note-added .notes-link').addClass('has-notes');
          $('.new-note-added .notes-new-text-content').html('<strong>Notes:</strong><br><span class="newNotesContent">' + newNotesContent + '</span>');

          setTimeout(function () {
               $('#notesNew-Comments').val('');
               $('#notesNew-Comments-info').text('You can enter up to 500 characters');
          }, 15)

          // Counter 
          // notesNewNumber += 1;
          // $('.notes-link').addClass('has-notes');
          // $('.new-notes-number').text(notesNewNumber);

          // Tags
          var notesNew = $('#notesNew-Comments').val();
          if (notesNew.length > 0) {   
               $('.hods-timeline__description').show();
          } else {
               $('.hods-timeline__description').hide();
          }

          var notesNewEvidential = $('#notesNew-Evidential').val();
          $('.tags-wrapper .notesNew-Evidential').hide();

          if ($('#notesNew-Evidential').val() == 'EVIDENCE - Live' || $('#notesNew-Evidential').val() == 'EVIDENCE - S9' || $('#notesNew-Evidential').val() == 'UNUSED - Disclose' || $('#notesNew-Evidential').val() == 'UNUSED - Not Disclose' || $('#notesNew-Evidential').val() == 'UNUSED - Clearly Not Disclose') {
               // alert(notesNewEvidential);
               $('.tags-wrapper').append('<strong class="govuk-tag notesNew-Evidential"></strong>');
               $('strong.notesNew-Evidential').html(notesNewEvidential);
               $('.tags-wrapper .notesNew-Evidential').show();
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag  notesNew-Evidential">' + notesNewEvidential + '</strong>');
          } else {
               $('.tags-wrapper .notesNew-Evidential').hide();
          }


          var notesNewEvidentialType = $('input[name=notesNew-Evidence]:checked').val();
          if ($('input[name=notesNew-Evidence]').is(':checked')) {
               $('.notesNew-Evidential').append(' - ' + notesNewEvidentialType);
               // $('.new-note-added .notes-new-text-content .notesNew-Evidential').append(' - ' + notesNewEvidentialType);
          }
          
          if ($('input[id=notesNew-GDPR]').is(':checked')) {
               $('.tags-wrapper').append('<strong class="govuk-tag">Not GDPR Safe</strong>');
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag">Not GDPR Safe</strong>');
          }

          if ($('input[id=notesNew-Links]').is(':checked')) {
               $('.tags-wrapper').append('<strong class="govuk-tag">Links don\'t work</strong>');
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag">Links don\'t work</strong>');
          }

          if ($('input[id=notesNew-Sensitive]').is(':checked')) {
               $('.tags-wrapper').append('<strong class="govuk-tag">Sensitive Material</strong>');
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag">Sensitive Material</strong>');
          }

          var notesNewStatement = $('#notesNew-MG11').val();
          if ($('#notesNew-MG11').val() == 'Arrest' || $('#notesNew-MG11').val() == 'Victim' || $('#notesNew-MG11').val() == 'VPS' || $('#notesNew-MG11').val() == 'Civilian' || $('#notesNew-MG11').val() == 'Expert') {
               $('.tags-wrapper').append('<strong class="govuk-tag">' + notesNewStatement + '</strong>');
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag">' + notesNewStatement + '</strong>');
          }

          var notesNewExhibit = $('#notesNew-Exhibit').val();
          if ($('#notesNew-Exhibit').val() == 'Audio' || $('#notesNew-Exhibit').val() == 'MG15' || $('#notesNew-Exhibit').val() == 'Bodyworn' || $('#notesNew-Exhibit').val() == 'Phone' || $('#notesNew-Exhibit').val() == 'Presentation' || $('#notesNew-Exhibit').val() == 'Maps' || $('#notesNew-Exhibit').val() == 'CCTV' || $('#notesNew-Exhibit').val() == 'Cell' || $('#notesNew-Exhibit').val() == '999' || $('#notesNew-Exhibit').val() == 'Photo - Injuries' || $('#notesNew-Exhibit').val() == 'Photo - Scene' || $('#notesNew-Exhibit').val() == 'Photo - Exhibits') {
               $('.tags-wrapper').append('<strong class="govuk-tag">' + notesNewExhibit + '</strong>');
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag">' + notesNewExhibit + '</strong>');
          }

    });

    // Conditional elements
    // $("#notesNew-Evidential").on("change", function (e) {
    //       if ($(this).val() == 'EVIDENCE') {
    //            $('.conditonal-evidence').show();
    //       } else {
    //            $('.conditonal-evidence').hide();
    //       }
    // });

     // Exhibit notes
     $(".exhibit-notes").on("click", function (e) {
          $('.conditonal-MG11').hide();
          $('.conditonal-Exhibit').show();
     });

     // Statement notes
     $(".statement-notes").on("click", function (e) {
          $('.conditonal-Exhibit').hide();
          $('.conditonal-MG11').show();
     });

     // New not Errors
     $('.cta-buttons').hide();
     $('#newnotes-error').hide();

     $("#notesNew-Comments").on("keyup", function (e) {
          $('.cta-buttons').show();
          $('.error-buttons').hide();
     });

     $('#notesNew-Evidential, #notesNew-GDPR, #notesNew-Links, #notesNew-Sensitive, #notesNew-MG11, #notesNew-Exhibit').on("change", function (e) {
          $('.cta-buttons').show();
          $('.error-buttons').hide();
     });

     $('#notesNew-errors').on("click", function (e) {
          $('.notes-wrapper, .hods-timeline').addClass('errors');
          if ($('#notesNew-Comments').val() <= 0) {
               // $('#notesNew-Comments').addClass('govuk-input--error');
               $('#newnotes-error').show();
               $('.newNote-Details').attr('open', 'open');
          } else {
               $('#newnotes-error').hide();
          }
     });

})

