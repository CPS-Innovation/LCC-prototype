$(document).ready(function () {

    // Notifications - Control
    $(".notifications").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.notifications-panel').toggle();
    });

    $(".notifications-STICKY").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.notifications-panel-STICKY').toggle();
        $('.tooltiptext').hide();
    });

    $(".clear-notification").on("click", function (e) {
        e.preventDefault();
        // $(this).parent().parent().hide();
        var data1 = parseFloat($('.notifications-number').text()) - 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) - 1;

        $('.text-holder').show();

        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);
        if (data1 == '0') {
            // $('.clear-all').hide();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').removeClass('alert');
            $('.notifications-panel').removeClass('alerts-working');
        } else if (data1 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        }
        if (data2 == '0') {
            // $('.clear-all').hide();
            $('.alert-button').removeClass('alert');
            $('.notifications-panel-STICKY').removeClass('alerts-working');
        } else if (data2 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        }

        // 1 
        if ($(this).parents('.one').length) {
            $('.case-alert.one').hide();
        } 
        // 2 
        if ($(this).parents('.two').length) {
            $('.case-alert.two').hide();
        }            
        // 3 
        if ($(this).parents('.three').length) {
            $('.case-alert.three').hide();
        } 
        // 4 
        if ($(this).parents('.four').length) {
            $('.case-alert.four').hide();
        }  
        // 5 
        if ($(this).parents('.five').length) {
            $('.case-alert.five').hide();
        } 
        // 6 
        if ($(this).parents('.six').length) {
            $('.case-alert.six').hide();
        }            

    });

    // $(".clear-all-notifications").on("click", function (e) {
    //     $('.notifications-number').html('0');
    //     $('.notifications-number-STICKY').html('0');
    //     $('.clear-all').hide();
    //     $('.alert-button, .notifications-number, .notifications-number-STICKY').removeClass('alert');
    //     $('.notifications-panel').removeClass('alerts-working');
    //     $('.notifications-panel-STICKY').removeClass('alerts-working');
    // });

    $('.clear-all').hide();

    // Notifications - Document 1 - ERROR
    setTimeout(function() {
        $(".notifications .alert-button, .notifications .notifications-number").addClass('alert');
        $(".notifications-STICKY .alert-button, .notifications-STICKY .notifications-number").addClass('alert');
        $(".notifications-panel").addClass('alerts-working');
        $(".notifications-panel .case-alert.one").addClass('show'); 
        $(".notifications-panel-STICKY").addClass('alerts-working');
        $(".notifications-panel-STICKY .case-alert.one").addClass('show'); 

        $('.text-holder').hide();

        var data1 = parseFloat($('.notifications-number').text()) + 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) + 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);
        // $('.clear-all').show();

        if (data1 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        } 
        if (data2 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        }

        // Time 1
        document.getElementById("date-stamp-DOC1").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 
        // Time 2
        document.getElementById("date-stamp-DOC7").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 
    }, 5000);

    $(".date-stamp-DOC1").on("click", function (e) {
        $('.accordion-section.section-3').attr("aria-expanded", "true");
        $(this).parent().parent().parent().addClass('read');
        var data1 = parseFloat($('.notifications-number').text()) - 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) - 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);
    });

    // Notifications - Document 2 - NEW
    setTimeout(function() {
        $(".notifications .alert-button, .notifications .notifications-number").addClass('alert');
        $(".notifications-STICKY .alert-button, .notifications-STICKY .notifications-number").addClass('alert');
        $(".notifications-panel").addClass('alerts-working');
        $(".notifications-panel .case-alert.two").addClass('show'); 
        $(".notifications-panel-STICKY").addClass('alerts-working');
        $(".notifications-panel-STICKY .case-alert.two").addClass('show'); 
        $('table tbody#accordion-tbody-defendant tr.hidden-section').show().addClass('new');
        $('table tbody#accordion-tbody-defendant tr.hidden-section td').addClass('newDocument');
        $('table tbody#accordion-tbody-defendant tr.hidden-section .govuk-tag--green').show();
        $('table tbody#accordion-tbody-defendant tr.holder').hide();
        $('.accordion-section.section-7 .accordion-section-header').removeClass('no-documents');
        $('.accordion-section.section-7 .accordion-section-header .defendants').html('1');
        var data1 = parseFloat($('.notifications-number').text()) + 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) + 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);

        if (data1 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        } 
        if (data2 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        }

        // Time 1
        document.getElementById("date-stamp-DOC2").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 
        // Time 2
        document.getElementById("date-stamp-DOC8").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 
    }, 30000);

    $(".date-stamp-DOC2").on("click", function (e) {
        e.preventDefault();
        $('.accordion-section.section-7').attr("aria-expanded", "true");
        $(this).parent().parent().parent().addClass('read');
        $('.govuk-tag.govuk-tag--turquoise').hide();
        $('table tbody#accordion-tbody-defendant tr.hidden-section .govuk-tag.govuk-tag--turquoise').show();
        $('table tbody tr td').removeClass('current');
        $('table tbody#accordion-tbody-defendant tr.hidden-section td').addClass('current');
        $("#left-column").scrollTop($("[id=hidden-documents-2]").position().top);
        var data1 = parseFloat($('.notifications-number').text()) - 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) - 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);
    });

    // Notifications - Document 3 - UPDATE
    setTimeout(function() {
        $(".notifications .alert-button, .notifications .notifications-number").addClass('alert');
        $(".notifications-STICKY .alert-button, .notifications-STICKY .notifications-number").addClass('alert');
        $(".notifications-panel").addClass('alerts-working');
        $(".notifications-panel .case-alert.three").addClass('show'); 
        $(".notifications-panel-STICKY").addClass('alerts-working');
        $(".notifications-panel-STICKY .case-alert.three").addClass('show'); 
        $('table tbody#accordion-tbody-case-overview tr#group2-doc2 .govuk-tag--orange').show();
        var data1 = parseFloat($('.notifications-number').text()) + 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) + 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);

        if (data1 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        } 
        if (data2 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        }

        // Time 1
        document.getElementById("date-stamp-DOC3").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 
        // Time 2
        document.getElementById("date-stamp-DOC9").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 

    }, 70000);

    $(".date-stamp-DOC3").on("click", function (e) {
        e.preventDefault();
        $('.accordion-section.section-2').attr("aria-expanded", "true");
        $(this).parent().parent().parent().addClass('read');
        $('.govuk-tag.govuk-tag--turquoise').hide();
        $('table tbody#accordion-tbody-case-overview tr#group2-doc2 .govuk-tag.govuk-tag--turquoise').show();
        $('table tbody tr td').removeClass('current');
        $('table tbody#accordion-tbody-case-overview tr#group2-doc2 td').addClass('current');
        $("#left-column").scrollTop($("[id=group2-doc2]").position().top);
        $('.updated-message').show();

        var data1 = parseFloat($('.notifications-number').text()) - 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) - 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);
    });

    // Notifications - Document 4 - UPDATE
    setTimeout(function() {
        $(".notifications .alert-button, .notifications .notifications-number").addClass('alert');
        $(".notifications-STICKY .alert-button, .notifications-STICKY .notifications-number").addClass('alert');
        $(".notifications-panel").addClass('alerts-working');
        $(".notifications-panel .case-alert.four").addClass('show'); 
        $(".notifications-panel-STICKY").addClass('alerts-working');
        $(".notifications-panel-STICKY .case-alert.four").addClass('show'); 
        $('table tbody#accordion-tbody-case-overview tr#group2-doc4 .govuk-tag--orange').show();
        var data1 = parseFloat($('.notifications-number').text()) + 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) + 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);

        if (data1 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        } 
        if (data2 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        }

        // Time 1
        document.getElementById("date-stamp-DOC4").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 
        // Time 2
        document.getElementById("date-stamp-DOC10").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 
    }, 70000);

    $(".date-stamp-DOC4").on("click", function (e) {
        e.preventDefault();
        $('.accordion-section.section-2').attr("aria-expanded", "true");
        $(this).parent().parent().parent().addClass('read');
        $('.govuk-tag.govuk-tag--turquoise').hide();
        $('table tbody#accordion-tbody-case-overview tr#group2-doc4 .govuk-tag.govuk-tag--turquoise').show();
        $('table tbody tr td').removeClass('current');
        $('table tbody#accordion-tbody-case-overview tr#group2-doc4 td').addClass('current');
        $("#left-column").scrollTop($("[id=group2-doc4]").position().top);
        $('.updated-message').show();

        var data1 = parseFloat($('.notifications-number').text()) - 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) - 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);
    });


    // Notifications - Document 5 - NEW
    setTimeout(function() {
        $('.notifications-panel').addClass('scroll');
        $('.notifications-panel-STICKY').addClass('scroll');
        $(".notifications .alert-button, .notifications .notifications-number").addClass('alert');
        $(".notifications-STICKY .alert-button, .notifications-STICKY .notifications-number").addClass('alert');
        $(".notifications-panel").addClass('alerts-working');
        $(".notifications-panel .case-alert.five").addClass('show'); 
        $(".notifications-panel-STICKY").addClass('alerts-working');
        $(".notifications-panel-STICKY .case-alert.five").addClass('show'); 
        $('table tbody#accordion-tbody-statements tr.hidden-section').show().addClass('new');
        $('table tbody#accordion-tbody-statements tr.hidden-section td').addClass('newDocument');
        $('table tbody#accordion-tbody-statements tr.hidden-section .govuk-tag--green').show();
        $('.accordion-section.section-3 .accordion-section-header .statements').html('7');
        var data1 = parseFloat($('.notifications-number').text()) + 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) + 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);

        if (data1 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        } 
        if (data2 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        }

        // Time 1
        document.getElementById("date-stamp-DOC5").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 
        // Time 2
        document.getElementById("date-stamp-DOC11").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 
    }, 150000);

    $(".date-stamp-DOC5").on("click", function (e) {
        e.preventDefault();
        $('.accordion-section.section-3').attr("aria-expanded", "true");
        $(this).parent().parent().parent().addClass('read');
        $("#left-column").scrollTop($("[id=new-document-2]").position().top);

        var data1 = parseFloat($('.notifications-number').text()) - 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) - 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);
    });

    $('#group6-doc3 td .govuk-tag--red, #group6-doc3 td .hidden').hide();        

    // Notifications - Document 6 - DISCARDED
    setTimeout(function() {
        $(".notifications .alert-button, .notifications .notifications-number").addClass('alert');
        $(".notifications-STICKY .alert-button, .notifications-STICKY .notifications-number").addClass('alert');
        $(".notifications-panel").addClass('alerts-working');
        $(".notifications-panel .case-alert.six").addClass('show'); 
        $(".notifications-panel-STICKY").addClass('alerts-working');
        $(".notifications-panel-STICKY .case-alert.six").addClass('show'); 
        $('.accordion-section.section-6 .accordion-section-header .unused-materials').html('4');
        $('#group6-doc3 td').removeClass('openMe unreadDocument'); 
        $('#group6-doc3 td .govuk-tag--red, #group6-doc3 td .hidden').show();        
        $('#group6-doc3 td a.show-case').hide();        
        var data1 = parseFloat($('.notifications-number').text()) + 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) + 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);

        if (data1 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        } 
        if (data2 >= '1') {
            // $('.clear-all').show();
            $('.alert-button, .notifications-number, .notifications-number-STICKY').addClass('alert');
            $('.notifications-panel').addClass('alerts-working');
        }

        // Time 1
        document.getElementById("date-stamp-DOC6").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 
        // Time 2
        document.getElementById("date-stamp-DOC12").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
                months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        } 
    }, 200000);

    $(".date-stamp-DOC6").on("click", function (e) {
        e.preventDefault();
        $(this).parent().parent().parent().addClass('read');

        var data1 = parseFloat($('.notifications-number').text()) - 1;
        var data2 = parseFloat($('.notifications-number-STICKY').text()) - 1;
        $('.notifications-number').html(data1);
        $('.notifications-number-STICKY').html(data2);
    });

})

