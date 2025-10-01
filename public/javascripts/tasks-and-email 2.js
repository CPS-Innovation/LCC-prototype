// Tasks

$(document).ready(function () {

    // Tasks - Control
    $(".tasks").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.tasks-panel').toggle();
    });

    $(".tasks-STICKY").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.tasks-panel-STICKY').toggle();
        $('.tooltiptext').hide();
    });


    $(".task-item-1").on("click", function (e) {
        e.preventDefault();
        $('.accordion-section.section-10').attr("aria-expanded", "true");
        $("#left-column").scrollTop($("[id=new-task]").position().top);

        // Document
        $('table tr#group10-doc2 td').removeClass('unreadDocument').addClass('current');
        $('table tr#group10-doc2 td .govuk-tag.current').show();
    });

    $('.task-alert.one.completed, .no-tasks').hide();

    // $("input[name=taskComplete]").on("change", function (e) {
    //     if ($(this).val() == "Yes") {
    //         $('#confirm-task-complete').attr('onClick','return closeMarkTaskAsComplete()').removeClass('govuk-button--disabled').removeAttr('disabled', 'aria-disabled');
    //     } else if ($(this).val() == "No") {
    //         $('#confirm-task-complete').attr('onClick','closeMarkTaskAsComplete()').removeClass('govuk-button--disabled').removeAttr('disabled', 'aria-disabled');
    //     }
    // });

    $("#confirm-task-complete").on("click", function (e) {
        $('.tasks-panel-wrapper .tasks-button, .tasks-panel-wrapper .tasks-number').removeClass('alert');
        $('.tasks-panel-wrapper .tasks-number').html('0');

        $('.tasks-panel-wrapper .task-alert.one').hide();
        $('.tasks-panel-wrapper .task-alert.one.completed, .tasks-panel-wrapper .no-tasks').show();
    });

})

$(document).ready(function () {

    document.getElementById("task-date-stamp-1").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    document.getElementById("task-date-stamp-2").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    document.getElementById("task-date-stamp-3").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    document.getElementById("task-date-stamp-4").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    document.getElementById("task-date-stamp-5").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }


})

// Emails
$(document).ready(function () {

    $('#send-email-button').hide();
    $('#Email-error-status, #emailRecipients-error, #emailTitle-error, #emailText-error').hide();

    // Recipients
    $("input[id=emailRecipients]").on("keyup", function (e) {
        if ($(this).val() && $("input[id=emailTitle]").val()) {
            $('#Email-error-status, #error-email-button').hide();
            $('#send-email-button').show();
        }
    });

    // Title
    $("input[id=emailTitle]").on("keyup", function (e) {
        if ($(this).val() && $("input[id=emailRecipients]").val()) {
            $('#Email-error-status, #error-email-button').hide();
            $('#send-email-button').show();
        }
    });

    // Text
    // $("input[id=emailText]").on("click", function (e) {
    //     alert('emailText');
    //     if ($("input[id=emailRecipients]").val() && $("input[id=emailTitle]").val()) {
    //         $('#Email-error-status, #error-email-button').hide();
    //         $('#send-email-button').show();
    //     }
    // });


    $("#error-email-button").on("click", function (e) {
        $('#Email-error-status').show();

        if ($("input[id=emailRecipients]").val()) {
            $('#email-Recipients-error, #emailRecipients-error').hide();
            $('#emailRecipients-wrapper').removeClass('govuk-form-group--error');
            $('#emailRecipients').removeClass('govuk-input--error');
        } else {
            $('#email-Recipients-error, #emailRecipients-error').show();
            $('#emailRecipients-wrapper').addClass('govuk-form-group--error');
            $('#emailRecipients').addClass('govuk-input--error');
            
        }
        if ($("input[id=emailTitle]").val()) {
            $('#email-Title-error, #emailTitle-error').hide();
            $('#emailTitle-wrapper').removeClass('govuk-form-group--error');
            $('#emailTitle').removeClass('govuk-input--error');
        } else {
            $('#email-Title-error, #emailTitle-error').show();
            $('#emailTitle-wrapper').addClass('govuk-form-group--error');
            $('#emailTitle').addClass('govuk-input--error');
        }
    });

})


function openEmailConfirmation() {

    $('.email-message').show();

    // Recipients
    var emailRecipients = $('#emailRecipients').val();
    $('#emailRecipients-Content').html(emailRecipients);

    // Title
    var emailTitle = $('#emailTitle').val();
    $('#emailTitle-Content').html(emailTitle);

    // Textarea
    var emailText = $('#emailText').val();
    $('#emailText-Content').html(emailText);

    document.getElementById("email-date-stamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }
}

// Print Document
function printDocument(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}
