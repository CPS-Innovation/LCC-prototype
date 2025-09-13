function CookieBanner (module) {
    this.module = module;
    this.settings = {
        seenCookieName: 'DASSeenCookieMessage',
        cookiePolicy: {
            AnalyticsConsent: false
        }
    }
    if ( !window.GOVUK.cookie(this.settings.seenCookieName) ) {
        this.start()
    }
}

CookieBanner.prototype.start = function () {
    this.module.cookieBanner = this.module.querySelector('.das-cookie-banner')
    this.module.cookieBannerInnerWrap = this.module.querySelector('.das-cookie-banner__wrapper')
    this.module.cookieBannerConfirmationMessage = this.module.querySelector('.das-cookie-banner__confirmation')
    this.setupCookieMessage()
}

CookieBanner.prototype.setupCookieMessage = function () {
    this.module.hideLink = this.module.querySelector('button[data-hide-cookie-banner]')
    this.module.acceptCookiesButton = this.module.querySelector('button[data-accept-cookies]')

    if (this.module.hideLink) {
        this.module.hideLink.addEventListener('click', this.hideCookieBanner.bind(this))
    }

    if (this.module.acceptCookiesButton) {
        this.module.acceptCookiesButton.addEventListener('click', this.acceptAllCookies.bind(this))
    }
    this.showCookieBanner()
}

CookieBanner.prototype.showCookieBanner = function () {
    var cookiePolicy = this.settings.cookiePolicy;
    this.module.cookieBanner.style.display = 'block';
    Object.keys(cookiePolicy).forEach(function (cookieName) {
        window.GOVUK.cookie(cookieName, cookiePolicy[cookieName].toString(), { days: 365 })
    });
}

CookieBanner.prototype.hideCookieBanner = function () {
    this.module.cookieBanner.style.display = 'none';
    window.GOVUK.cookie(this.settings.seenCookieName, true, { days: 365 })
}

CookieBanner.prototype.acceptAllCookies = function () {
    this.module.cookieBannerInnerWrap.style.display = 'none';
    this.module.cookieBannerConfirmationMessage.style.display = 'block';
$("#cookieSpacer"). removeClass("fixedBottomCookie");


    window.GOVUK.cookie(this.settings.seenCookieName, true, { days: 365 })

    Object.keys(this.settings.cookiePolicy).forEach(function (cookieName) {
        window.GOVUK.cookie(cookieName, true, { days: 365 })
    });
}

window.GOVUK = window.GOVUK || {}

window.GOVUK.cookie = function (name, value, options) {
    if (typeof value !== 'undefined') {
        if (value === false || value === null) {
            return window.GOVUK.setCookie(name, '', { days: -1 })
        } else {
            // Default expiry date of 30 days
            if (typeof options === 'undefined') {
                options = { days: 30 }
            }
            return window.GOVUK.setCookie(name, value, options)
        }
    } else {
        return window.GOVUK.getCookie(name)
    }
}

window.GOVUK.setCookie = function (name, value, options) {
    if (typeof options === 'undefined') {
        options = {}
    }
    var cookieString = name + '=' + value + '; path=/'

    if (options.days) {
        var date = new Date()
        date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000))
        cookieString = cookieString + '; expires=' + date.toGMTString()
    }
    if (!options.domain) {
        options.domain = window.GOVUK.getDomain()
    }

    if (document.location.protocol === 'https:') {
        cookieString = cookieString + '; Secure'
    }
    document.cookie = cookieString  + ';domain=' + options.domain
}

window.GOVUK.getCookie = function (name) {
    var nameEQ = name + '='
    var cookies = document.cookie.split(';')
    for (var i = 0, len = cookies.length; i < len; i++) {
        var cookie = cookies[i]
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length)
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length))
        }
    }
    return null
}

window.GOVUK.getDomain = function () {
    return window.location.hostname !== 'localhost'
      ? '.' + window.location.hostname.slice(window.location.hostname.indexOf('.') + 1)
      : window.location.hostname;
}

var $cookieBanner = document.querySelector('[data-module="cookie-banner"]');
if ($cookieBanner != null) {
    new CookieBanner($cookieBanner);
}

// =================================== CASE ACTION PLAN =================================== //
$(document).ready(function () {

    $(".tablinks").on("click", function (e) {
        preventDefault(e);
    });

    $('#case-action-plan-active').hide();
    $('.Details-Key, .Details-AllKey, .Details-NonKey, .Details-Additional, .Details-Witness, .Details-Victim, .Details-Special, .Details-Convictions, .Details-ROTI, .Details-KeyExibits, .Details-Evidence, .Details-CCTV, .Details-Visually, .Details-Drugs, .Details-Forensic, .Details-Medical, .Details-Unused, .Details-Bad, .Details-Orders, .Details-POCA, .Details-Compensation, .Details-Other').hide();

    $("input[name=caseActionPlan-SpecificDetails]").on("change", function (e) {
        $('#caseActionPlan-Description-hint').append('\r\n \r\n - ' + $(this).val()+': \r\n');
    });

    $("#confirmation, #case-action-plan-button").on("click", function (e) {
        $('#case-action-plan').addClass('active');

        $('.draft-plan-link').addClass('active');

        $('#no-plan').hide();
        $('#case-action-plan-active').show();
        $('#caseActionBuilderModal .caseActionBuilderModal-wrapper').removeClass('x-small');

        // Cookies store
        if ($('input[id="caseActionPlan-Type-Start"]:checked')) { $.cookie("CAPanswer-type", 'Start File Build', {path:'/'}); }
        if ($('input[id="caseActionPlan-Type-Stop"]:checked')) { $.cookie("CAPanswer-type", 'Stop File Build', {path:'/'}); }
        if ($('input[id="caseActionPlan-Type-Modify"]:checked')) { $.cookie("CAPanswer-type", 'Modify File Build', {path:'/'}); }
        $.cookie("CAPanswer-Day", $('#caseActionPlan-Date-Day').val(), {path:'/'});
        $.cookie("CAPanswer-Month", $('#caseActionPlan-Date-Month').val(), {path:'/'});
        $.cookie("CAPanswer-Year", $('#caseActionPlan-Date-Year').val(), {path:'/'});
        // $.cookie("CAPanswer-info", $('input[name=caseActionPlan-SpecificDetails]').val(), {path:'/'});
         if ($("input[name=caseActionPlan-SpecificDetails]:checkbox:checked").length > 0) {
            $.cookie("CAPanswer-info", true, {path:'/'});
        } else {
            $.cookie("CAPanswer-info", false, {path:'/'});
        }   

        if ($('input[id=caseActionPlan-SpecificDetails-Key]').is(':checked')) { 
            $.cookie("Details-Key", true, {path:'/'}); 
        } else {
            $.cookie("Details-Key", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-AllKey]').is(':checked')) { 
            $.cookie("Details-AllKey", true, {path:'/'}); 
        } else {
            $.cookie("Details-AllKey", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-NonKey]').is(':checked')) { 
            $.cookie("Details-NonKey", true, {path:'/'}); 
        } else {
            $.cookie("Details-NonKey", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-NonKeyAdd]').is(':checked')) { 
            $.cookie("Details-Additional", true, {path:'/'}); 
        } else {
            $.cookie("Details-Additional", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Witness]').is(':checked')) { 
            $.cookie("Details-Witness", true, {path:'/'}); 
        } else {
            $.cookie("Details-Witness", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Victim]').is(':checked')) { 
            $.cookie("Details-Victim", true, {path:'/'}); 
        } else {
            $.cookie("Details-Victim", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Special]').is(':checked')) { 
            $.cookie("Details-Special", true, {path:'/'}); 
        } else {
            $.cookie("Details-Special", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Convictions]').is(':checked')) { 
            $.cookie("Details-Convictions", true, {path:'/'}); 
        } else {
            $.cookie("Details-Convictions", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-ROTI]').is(':checked')) { 
            $.cookie("Details-ROTI", true, {path:'/'}); 
        } else {
            $.cookie("Details-ROTI", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Key-Exhibits]').is(':checked')) { 
            $.cookie("Details-KeyExibits", true, {path:'/'}); 
        } else {
            $.cookie("Details-KeyExibits", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Evidence]').is(':checked')) { 
            $.cookie("Details-Evidence", true, {path:'/'}); 
        } else {
            $.cookie("Details-Evidence", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-CCTV]').is(':checked')) { 
            $.cookie("Details-CCTV", true, {path:'/'}); 
        } else {
            $.cookie("Details-CCTV", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Visually]').is(':checked')) { 
            $.cookie("Details-Visually", true, {path:'/'}); 
        } else {
            $.cookie("Details-Visually", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Drugs]').is(':checked')) { 
            $.cookie("Details-Drugs", true, {path:'/'}); 
        } else {
            $.cookie("Details-Drugs", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Forensic]').is(':checked')) { 
            $.cookie("Details-Forensic", true, {path:'/'}); 
        } else {
            $.cookie("Details-Forensic", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Medical]').is(':checked')) { 
            $.cookie("Details-Medical", true, {path:'/'}); 
        } else {
            $.cookie("Details-Medical", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Sensitive]').is(':checked')) { 
            $.cookie("Details-Unused", true, {path:'/'}); 
        } else {
            $.cookie("Details-Unused", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Character]').is(':checked')) { 
            $.cookie("Details-Bad", true, {path:'/'}); 
        } else {
            $.cookie("Details-Bad", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Orders]').is(':checked')) { 
            $.cookie("Details-Orders", true, {path:'/'}); 
        } else {
            $.cookie("Details-Orders", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-POCA]').is(':checked')) { 
            $.cookie("Details-POCA", true, {path:'/'}); 
        } else {
            $.cookie("Details-POCA", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Compensation]').is(':checked')) { 
            $.cookie("Details-Compensation", true, {path:'/'}); 
        } else {
            $.cookie("Details-Compensation", false, {path:'/'});
        }
        if ($('input[id=caseActionPlan-SpecificDetails-Other]').is(':checked')) { 
            $.cookie("Details-Other", true, {path:'/'}); 
        } else {
            $.cookie("Details-Other", false, {path:'/'});
        }

        $.cookie("CAPanswer-description", $('#caseActionPlan-Description-hint').text(), {path:'/'});
        if ($('input[name=caseActionPlan-FollowUp]:checkbox:checked').length > 0) {
            $.cookie("CAPanswer-task", true, {path:'/'});
        } else {
            $.cookie("CAPanswer-task", false, {path:'/'});
        }

        $('.CAPanswer-type').text($.cookie("CAPanswer-type"));
        $('.CAPanswer-date-Day').text($.cookie("CAPanswer-Day"));
        if ($.cookie("CAPanswer-Month") == '01' || $.cookie("CAPanswer-Month") == '1') { $('.CAPanswer-date-Month').text('January'); }
        if ($.cookie("CAPanswer-Month") == '02' || $.cookie("CAPanswer-Month") == '2') { $('.CAPanswer-date-Month').text('February'); }
        if ($.cookie("CAPanswer-Month") == '03' || $.cookie("CAPanswer-Month") == '3') { $('.CAPanswer-date-Month').text('March'); }
        if ($.cookie("CAPanswer-Month") == '04' || $.cookie("CAPanswer-Month") == '4') { $('.CAPanswer-date-Month').text('April'); }
        if ($.cookie("CAPanswer-Month") == '05' || $.cookie("CAPanswer-Month") == '5') { $('.CAPanswer-date-Month').text('May'); }
        if ($.cookie("CAPanswer-Month") == '06' || $.cookie("CAPanswer-Month") == '6') { $('.CAPanswer-date-Month').text('June'); }
        if ($.cookie("CAPanswer-Month") == '07' || $.cookie("CAPanswer-Month") == '7') { $('.CAPanswer-date-Month').text('July'); }
        if ($.cookie("CAPanswer-Month") == '08' || $.cookie("CAPanswer-Month") == '8') { $('.CAPanswer-date-Month').text('August'); }
        if ($.cookie("CAPanswer-Month") == '09' || $.cookie("CAPanswer-Month") == '9') { $('.CAPanswer-date-Month').text('September'); }
        if ($.cookie("CAPanswer-Month") == '10' || $.cookie("CAPanswer-Month") == '10') { $('.CAPanswer-date-Month').text('October'); }
        if ($.cookie("CAPanswer-Month") == '11' || $.cookie("CAPanswer-Month") == '11') { $('.CAPanswer-date-Month').text('November'); }
        if ($.cookie("CAPanswer-Month") == '12' || $.cookie("CAPanswer-Month") == '12') { $('.CAPanswer-date-Month').text('December'); }
        $('.CAPanswer-date-Year').text($.cookie("CAPanswer-Year"));
        if ($.cookie("CAPanswer-info") == 'true') {
            $('.CAPanswer-info').show();
        } else {
            $('.CAPanswer-info').hide();
        }

        $('#CAP-details-wrapper .govuk-character-count').hide();

        if ($.cookie("Details-Key") == 'true') { 
            $('.Details-Key').show(); 
        } else {
            $('.Details-Key').hide(); 
        }
        if ($.cookie("Details-AllKey") == 'true') { 
            $('.Details-AllKey').show(); 
        } else {
            $('.Details-AllKey').hide(); 
        }
        if ($.cookie("Details-NonKey") == 'true') { 
            $('.Details-NonKey').show(); 
        } else {
            $('.Details-NonKey').hide(); 
        }
        if ($.cookie("Details-Additional") == 'true') { 
            $('.Details-Additional').show(); 
        } else {
            $('.Details-Additional').hide(); 
        }
        if ($.cookie("Details-Witness") == 'true') { 
            $('.Details-Witness').show(); 
        } else {
            $('.Details-Witness').hide(); 
        }
        if ($.cookie("Details-Victim") == 'true') { 
            $('.Details-Victim').show(); 
        } else {
            $('.Details-Victim').hide(); 
        }
        if ($.cookie("Details-Special") == 'true') { 
            $('.Details-Special').show(); 
        } else {
            $('.Details-Special').hide(); 
        }
        if ($.cookie("Details-Convictions") == 'true') { 
            $('.Details-Convictions').show(); 
        } else {
            $('.Details-Convictions').hide(); 
        }
        if ($.cookie("Details-ROTI") == 'true') { 
            $('.Details-ROTI').show(); 
        } else {
            $('.Details-ROTI').hide(); 
        }
        if ($.cookie("Details-KeyExibits") == 'true') { 
            $('.Details-KeyExibits').show(); 
        } else {
            $('.Details-KeyExibits').hide(); 
        }
        if ($.cookie("Details-Evidence") == 'true') { 
            $('.Details-Evidence').show(); 
        } else {
            $('.Details-Evidence').hide(); 
        }
        if ($.cookie("Details-CCTV") == 'true') { 
            $('.Details-CCTV').show(); 
        } else {
            $('.Details-CCTV').hide(); 
        }
        if ($.cookie("Details-Visually") == 'true') { 
            $('.Details-Visually').show(); 
        } else {
            $('.Details-Visually').hide(); 
        }
        if ($.cookie("Details-Drugs") == 'true') { 
            $('.Details-Drugs').show(); 
        } else {
            $('.Details-Drugs').hide(); 
        }
        if ($.cookie("Details-Forensic") == 'true') { 
            $('.Details-Forensic').show(); 
        } else {
            $('.Details-Forensic').hide(); 
        }
        if ($.cookie("Details-Medical") == 'true') { 
            $('.Details-Medical').show(); 
        } else {
            $('.Details-Medical').hide(); 
        }
        if ($.cookie("Details-Unused") == 'true') { 
            $('.Details-Unused').show(); 
        } else {
            $('.Details-Unused').hide(); 
        }
        if ($.cookie("Details-Bad") == 'true') { 
            $('.Details-Bad').show(); 
        } else {
            $('.Details-Bad').hide(); 
        }
        if ($.cookie("Details-Orders") == 'true') { 
            $('.Details-Orders').show(); 
        } else {
            $('.Details-Orders').hide(); 
        }
        if ($.cookie("Details-POCA") == 'true') { 
            $('.Details-POCA').show(); 
        } else {
            $('.Details-POCA').hide(); 
        }
        if ($.cookie("Details-Compensation") == 'true') { 
            $('.Details-Compensation').show(); 
        } else {
            $('.Details-Compensation').hide(); 
        }
        if ($.cookie("Details-Other") == 'true') { 
            $('.Details-Other').show(); 
        } else {
            $('.Details-Other').hide(); 
        }

        // $('.CAPanswer-info').text($.cookie("CAPanswer-info"));
        $('.CAPanswer-description').text($.cookie("CAPanswer-description"));
        if ($.cookie("CAPanswer-task") == 'true') {
            $('.CAPanswer-task').text('Yes');
        } else {
            $('.CAPanswer-task').text('No');
        }

    });

    $("#case-action-plan-submitted").on("click", function (e) {
        $('.draft-plan-link').removeClass('active');
        $('.sent-plan-link').addClass('active');
    });


    // CAP details

    $("#CAP-descriptions").on("click", function (e) {
        $.cookie("Details-Key-Content", $('#caseActionPlan-Desc-Key').val(), {path:'/'}); 
        $.cookie("Details-AllKey-Content",$('#caseActionPlan-Desc-All').val(), {path:'/'}); 
        $.cookie("Details-NonKey-Content", $('#caseActionPlan-Desc-Non').val(), {path:'/'}); 
        $.cookie("Details-Additional-Content", $('#caseActionPlan-Desc-Add').val(), {path:'/'}); 
        $.cookie("Details-Witness-Content", $('#caseActionPlan-Desc-Witness').val(), {path:'/'}); 
        $.cookie("Details-Victim-Content", $('#caseActionPlan-Desc-Victim').val(), {path:'/'}); 
        $.cookie("Details-Special-Content", $('#caseActionPlan-Desc-Special').val(), {path:'/'}); 
        $.cookie("Details-Convictions-Content", $('#caseActionPlan-Desc-Convictions').val(), {path:'/'}); 
        $.cookie("Details-ROTI-Content", $('#caseActionPlan-Desc-ROTI').val(), {path:'/'}); 
        $.cookie("Details-KeyExibits-Content", $('#caseActionPlan-Desc-Exhibits').val(), {path:'/'}); 
        $.cookie("Details-Evidence-Content", $('#caseActionPlan-Desc-Evidence').val(), {path:'/'}); 
        $.cookie("Details-CCTV-Content", $('#caseActionPlan-Desc-CCTV').val(), {path:'/'}); 
        $.cookie("Details-Visually-Content", $('#caseActionPlan-Desc-Recorded').val(), {path:'/'}); 
        $.cookie("Details-Drugs-Content", $('#caseActionPlan-Desc-Drugs').val(), {path:'/'}); 
        $.cookie("Details-Forensic-Content", $('#caseActionPlan-Desc-Forensic').val(), {path:'/'}); 
        $.cookie("Details-Medical-Content", $('#caseActionPlan-Desc-Medical').val(), {path:'/'}); 
        $.cookie("Details-Unused-Content", $('#caseActionPlan-Desc-Unused').val(), {path:'/'}); 
        $.cookie("Details-Bad-Content", $('#caseActionPlan-Desc-Bad').val(), {path:'/'}); 
        $.cookie("Details-Orders-Content", $('#caseActionPlan-Desc-Orders').val(), {path:'/'}); 
        $.cookie("Details-POCA-Content", $('#caseActionPlan-Desc-POCA').val(), {path:'/'}); 
        $.cookie("Details-Compensation-Content", $('#caseActionPlan-Desc-Compensation').val(), {path:'/'}); 
        $.cookie("Details-Other-Content", $('#caseActionPlan-Desc-Other').val(), {path:'/'}); 

        $('.Details-Key-Content').text($.cookie("Details-Key-Content"));
        $('.Details-AllKey-Content').text($.cookie("Details-AllKey-Content"));
        $('.Details-NonKey-Content').text($.cookie("Details-NonKey-Content"));
        $('.Details-Additional-Content').text($.cookie("Details-Additional-Content"));
        $('.Details-Witness-Content').text($.cookie("Details-Witness-Content"));
        $('.Details-Victim-Content').text($.cookie("Details-Victim-Content"));
        $('.Details-Special-Content').text($.cookie("Details-Special-Content"));
        $('.Details-Convictions-Content').text($.cookie("Details-Convictions-Content"));
        $('.Details-ROTI-Content').text($.cookie("Details-ROTI-Content"));
        $('.Details-KeyExibits-Content').text($.cookie("Details-KeyExibits-Content"));
        $('.Details-Evidence-Content').text($.cookie("Details-Evidence-Content"));
        $('.Details-CCTV-Content').text($.cookie("Details-CCTV-Content"));
        $('.Details-Visually-Content').text($.cookie("Details-Visually-Content"));
        $('.Details-Drugs-Content').text($.cookie("Details-Drugs-Content"));
        $('.Details-Forensic-Content').text($.cookie("Details-Forensic-Content"));
        $('.Details-Medical-Content').text($.cookie("Details-Medical-Content"));
        $('.Details-Unused-Content').text($.cookie("Details-Unused-Content"));
        $('.Details-Bad-Content').text($.cookie("Details-Bad-Content"));
        $('.Details-Orders-Content').text($.cookie("Details-Orders-Content"));
        $('.Details-POCA-Content').text($.cookie("Details-POCA-Content"));
        $('.Details-Compensation-Content').text($.cookie("Details-Compensation-Content"));
        $('.Details-Other-Content').text($.cookie("Details-Other-Content"));

        document.getElementById("CAP-date-stamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
            days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        }

    }); 


})

// =================================== Confirmation =================================== //
$(document).ready(function () {

    $("#sent-case-action-plan-active").hide();

    $("#confirmation-sent").on("click", function (e) {
        $('#case-action-plan').removeClass('active');
        $('#no-plan').show();
        $('#case-action-plan-active').hide();

        $('#no-sent-plan').hide();
        $("#sent-case-action-plan-active").show();

        document.getElementById("CAP-date-stamp2").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        }
    });

})




// =================================== MY COOKIES =================================== //

// function documentTarget() {
//     // const documentTarget == $('#selectedTab').find('a').text();
//     $.cookie("reportProblem-Title", $('#selectedTab').find('a').text(), {path:'/'});
// }

// A - Search term
$(document).ready(function () {

    // $(".searchModal").on("click", function (e) {
    //     var resultValue = $('#searchURNModal').val();
    //     $.cookie("search-data", $('#searchURNModal').val(), {path:'/'});
    //     $('#searchURNModal-result').val(resultValue); 
    //     $('.searchModalResults').text(resultValue); 
    // });

    // if ($.cookie("search-data")) {
    //     $('#searchURNModal-result').val(resultValue); 
    //     $('.searchModalResults').text(resultValue); 
    // }

    // Report a problem...
    $(".show-case").on("click", function (e) {
        $.cookie("reportProblem-Document", $(this).attr("data-document"), {path:'/'});
        // var documentID = $(this).attr("data-count");
        // alert($.cookie("reportProblem-Document"));
        if ($(this).attr('data-doc') == 'MG06_10june.pdf' || $(this).attr('data-doc') == 'MG05MCLOVE.pdf' || $(this).attr('data-doc') == 'UNUSED_6_DA_CHECKLIST_MCLOVE.pdf' && $.cookie("updatedDocument") == 'true') {
            // $('#pdf-root[data-pdf-url=/public/files/UNUSED_6_DA_CHECKLIST_MCLOVE.pdf]').addClass('test');
            // $('#pdf-root[data-pdf-url=/public/files/MG05MCLOVE.pdf]').addClass('test');
            // $('#pdf-root[data-pdf-url=/public/files/MG06_10june.pdf]').addClass('test');
            $('.updated-message').show();
        } else {
            $('.updated-message').hide();
        }     
    });

    $("#page-refresh-2").on("click", function (e) {
        $.cookie("updatedDocument", true, {path:'/'});
    });


    $(".govuk-tabs__list-item").on("click", function (e) {
        $.cookie("reportProblem-Tab", $(this).text(), {path:'/'});
    });

    $("#reportProblem-button").on("click", function (e) {
        $.cookie("reportProblem", true, {path:'/'});
        $.cookie("reportProblem-Details", $('#reportProblem-text').val(), {path:'/'});


        if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '1') {
            $('a[data-document=1]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '2') {
            $('a[data-document=2]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '3') {
            $('a[data-document=3]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '4') {
            $('a[data-document=4]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '5') {
            $('a[data-document=5]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '6') {
            $('a[data-document=6]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '7') {
            $('a[data-document=7]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '8') {
            $('a[data-document=8]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '9') {
            $('a[data-document=9]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '10') {
            $('a[data-document=10]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '11') {
            $('a[data-document=11]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '12') {
            $('a[data-document=12]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '13') {
            $('a[data-document=13]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '14') {
            $('a[data-document=14]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '15') {
            $('a[data-document=15]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '16') {
            $('a[data-document=16]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '17') {
            $('a[data-document=17]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '18') {
            $('a[data-document=18]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '19') {
            $('a[data-document=19]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '20') {
            $('a[data-document=20]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '21') {
            $('a[data-document=21]').parent().parent().addClass('error');
            $('.error-message').addClass('show');
            $('.redaction-message').hide();
            $('#error-details').text($.cookie("reportProblem-Details"));
        }
        // else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '21' || $.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Title") == 'VADER, 45GD0702322, 22/08/2023') {
        //     $('a[data-document=21]').parent().parent().addClass('error');
        // }
    });

})

// =================================== Document history =================================== //
$(document).ready(function () {

    $('.new-document-row').hide();

    $("#confirm-document-change").on("click", function (e) {
        if ($('input[id="restoreDocument-Yes"]:checked')) { $.cookie("confirm-document-change", 'Yes', {path:'/'}); }

        if ($.cookie("confirm-document-change") == 'Yes') {
            $('.attachments.history').hide();
            $('.document-V2').removeClass('govuk-tag--turquoise').addClass('govuk-tag--grey');
            $('.new-document-row').show();
            $('.document-number').text('2');
            $('.document-history-V1').show();
            $('.document-history-V1-OPEN').hide();
            $('ul li[data-tab-id="View%20document"] a').text('MCLOVE MG3');
            $('.document-panel[data-tab-id="View%20document-content"] .inPageSearchMargins2').text('MCLOVE MG3').removeClass('old-document');

            $('ul li[data-tab-id="MCLOVE%20MG3"] a').text('MCLOVE MG3 - V2');
            $('.document-panel[data-tab-id="MCLOVE%20MG3-content"] .inPageSearchMargins2').addClass('old-document');
            $('.document-panel[data-tab-id="MCLOVE%20MG3-content"] .inPageSearchMargins2').html(`
                MCLOVE MG3 - V2
                <br>
                <span>02 June 2020, 13:08</span>
            `);
            
        }

        document.getElementById("NEW-DOC-date-stamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+', '+hours+':'+minutes;
        }


    });
})

// =================================== Rename & Move Documents =================================== //

$(document).ready(function () {

    // Rename
    // $(".show-case").on("click", function (e) {
    //     // var newDocumentName = $(this).attr("data-doc");
    //     // alert(newDocumentName);
    //     $.cookie("newDocumentName", $(this).attr("data-doc"), {path:'/'});
    // });

    // $("#document-renamed").on("click", function (e) {
    //     $.cookie("rename-Document", $('#rename-Document').val(), {path:'/'});
    //     $('.change-DocumentName').find('.show-case').text($.cookie("rename-Document"));
    //     // $('ul.sticky-tabs li.govuk-tabs__list-item--selected a').text($.cookie("rename-Document");
    //     // $('ul li[data-tab-id="MCLOVE%20MG3"] a').text('MCLOVE MG3 - V2');
    // });

    // Move
    $('.multiple-documents').hide();

    $("#multiple-documents-moved").on("click", function (e) {
        $.cookie("move-multiple-Documents", true, {path:'/'});

        $('input[id=caseActionPlan-SpecificDetails-Other]').is(':checked')
        if ($.cookie("move-multiple-Documents") == 'true') {
            $('.multiple-documents').show();
            $('.single-document').hide();
        }

        // File names
        // 1
        if ($('input[id=move-Document-group1-doc1]').is(':checked')) { 
            $.cookie("group1-doc1", true, {path:'/'}); 
        } else {
            $.cookie("group1-doc1", false, {path:'/'});
        }

        if ($.cookie("group1-doc1") == 'true') { 
            $('.group1-doc1').show(); 
            $('#group1-doc1').hide(); 
        } else {
            $('.group1-doc1').hide(); 
            $('#group1-doc1').show(); 
        }

        // 2
        if ($('input[id=move-Document-group2-doc1]').is(':checked')) { 
            $.cookie("group2-doc1", true, {path:'/'}); 
        } else {
            $.cookie("group2-doc1", false, {path:'/'});
        }
        if ($('input[id=move-Document-group2-doc2]').is(':checked')) { 
            $.cookie("group2-doc2", true, {path:'/'}); 
        } else {
            $.cookie("group2-doc2", false, {path:'/'});
        }
        if ($('input[id=move-Document-group2-doc3]').is(':checked')) { 
            $.cookie("group2-doc3", true, {path:'/'}); 
        } else {
            $.cookie("group2-doc3", false, {path:'/'});
        }
        if ($('input[id=move-Document-group2-doc4]').is(':checked')) { 
            $.cookie("group2-doc4", true, {path:'/'}); 
        } else {
            $.cookie("group2-doc4", false, {path:'/'});
        }

        if ($.cookie("group2-doc1") == 'true') { 
            $('.group2-doc1').show(); 
            $('#group2-doc1').hide(); 
        } else {
            $('.group2-doc1').hide(); 
            $('#group2-doc1').show(); 
        }
        if ($.cookie("group2-doc2") == 'true') { 
            $('.group2-doc2').show();
            $('#group2-doc2').hide();  
        } else {
            $('.group2-doc2').hide(); 
            $('#group2-doc2').show(); 
        }
        if ($.cookie("group2-doc3") == 'true') { 
            $('.group2-doc3').show(); 
            $('#group2-doc3').hide(); 
        } else {
            $('.group2-doc3').hide();
            $('#group2-doc3').show();  
        }
        if ($.cookie("group2-doc4") == 'true') { 
            $('.group2-doc4').show(); 
            $('#group2-doc4').hide(); 
        } else {
            $('.group2-doc4').hide();
            $('#group2-doc4').show();  
        }

        // 3
        if ($('input[id=move-Document-group3-doc1]').is(':checked')) { 
            $.cookie("group3-doc1", true, {path:'/'}); 
        } else {
            $.cookie("group3-doc1", false, {path:'/'});
        }
        if ($('input[id=move-Document-group3-doc2]').is(':checked')) { 
            $.cookie("group3-doc2", true, {path:'/'}); 
        } else {
            $.cookie("group3-doc2", false, {path:'/'});
        }
        if ($('input[id=move-Document-group3-doc3]').is(':checked')) { 
            $.cookie("group3-doc3", true, {path:'/'}); 
        } else {
            $.cookie("group3-doc3", false, {path:'/'});
        }
        if ($('input[id=move-Document-group3-doc4]').is(':checked')) { 
            $.cookie("group3-doc4", true, {path:'/'}); 
        } else {
            $.cookie("group3-doc4", false, {path:'/'});
        }
        if ($('input[id=move-Document-group3-doc5]').is(':checked')) { 
            $.cookie("group3-doc5", true, {path:'/'}); 
        } else {
            $.cookie("group3-doc5", false, {path:'/'});
        }
        if ($('input[id=move-Document-group3-doc6]').is(':checked')) { 
            $.cookie("group3-doc6", true, {path:'/'}); 
        } else {
            $.cookie("group3-doc6", false, {path:'/'});
        }

        if ($.cookie("group3-doc1") == 'true') { 
            $('.group3-doc1').show();
            $('#group3-doc1').hide();  
        } else {
            $('.group3-doc1').hide(); 
            $('#group3-doc1').show(); 
        }
        if ($.cookie("group3-doc2") == 'true') { 
            $('.group3-doc2').show();
            $('#group3-doc2').hide();  
        } else {
            $('.group3-doc2').hide(); 
            $('#group3-doc2').show(); 
        }
        if ($.cookie("group3-doc3") == 'true') { 
            $('.group3-doc3').show(); 
            $('#group3-doc3').hide(); 
        } else {
            $('.group3-doc3').hide();
            $('#group3-doc3').show();  
        }
        if ($.cookie("group3-doc4") == 'true') { 
            $('.group3-doc4').show(); 
            $('#group3-doc4').hide(); 
        } else {
            $('.group3-doc4').hide();
            $('#group3-doc4').show();  
        }
        if ($.cookie("group3-doc5") == 'true') { 
            $('.group3-doc5').show();
            $('#group3-doc5').hide();  
        } else {
            $('.group3-doc5').hide(); 
            $('#group3-doc5').show(); 
        }
        if ($.cookie("group3-doc6") == 'true') { 
            $('.group3-doc6').show(); 
            $('#group3-doc6').hide(); 
        } else {
            $('.group3-doc6').hide();
            $('#group3-doc6').show(); 
        }

        // 4
        if ($('input[id=move-Document-group4-doc1]').is(':checked')) { 
            $.cookie("group4-doc1", true, {path:'/'}); 
        } else {
            $.cookie("group4-doc1", false, {path:'/'});
        }
        if ($('input[id=move-Document-group4-doc2]').is(':checked')) { 
            $.cookie("group4-doc2", true, {path:'/'}); 
        } else {
            $.cookie("group4-doc2", false, {path:'/'});
        }

        if ($.cookie("group4-doc1") == 'true') { 
            $('.group4-doc1').show(); 
            $('#group4-doc1').hide(); 
        } else {
            $('.group4-doc1').hide(); 
            $('#group4-doc1').show(); 
        }
        if ($.cookie("group4-doc2") == 'true') { 
            $('.group4-doc2').show();
            $('#group4-doc2').hide();  
        } else {
            $('.group4-doc2').hide();
            $('#group4-doc2').show();  
        }

        // 5

        // 6
        if ($('input[id=move-Document-group6-doc1]').is(':checked')) { 
            $.cookie("group6-doc1", true, {path:'/'}); 
        } else {
            $.cookie("group6-doc1", false, {path:'/'});
        }
        if ($('input[id=move-Document-group6-doc2]').is(':checked')) { 
            $.cookie("group6-doc2", true, {path:'/'}); 
        } else {
            $.cookie("group6-doc2", false, {path:'/'});
        }
        if ($('input[id=move-Document-group6-doc3]').is(':checked')) { 
            $.cookie("group6-doc3", true, {path:'/'}); 
        } else {
            $.cookie("group6-doc3", false, {path:'/'});
        }
        if ($('input[id=move-Document-group6-doc4]').is(':checked')) { 
            $.cookie("group6-doc4", true, {path:'/'}); 
        } else {
            $.cookie("group6-doc4", false, {path:'/'});
        }
        if ($('input[id=move-Document-group6-doc5]').is(':checked')) { 
            $.cookie("group6-doc5", true, {path:'/'}); 
        } else {
            $.cookie("group6-doc5", false, {path:'/'});
        }

        if ($.cookie("group6-doc1") == 'true') { 
            $('.group6-doc1').show(); 
            $('#group6-doc1').hide(); 
        } else {
            $('.group6-doc1').hide(); 
            $('#group6-doc1').show(); 
        }
        if ($.cookie("group6-doc2") == 'true') { 
            $('.group6-doc2').show();
            $('#group6-doc2').hide();  
        } else {
            $('.group6-doc2').hide(); 
            $('#group6-doc2').show(); 
        }
        if ($.cookie("group6-doc3") == 'true') { 
            $('.group6-doc3').show(); 
            $('#group6-doc3').hide(); 
        } else {
            $('.group6-doc3').hide();
            $('#group6-doc3').show();  
        }
        if ($.cookie("group6-doc4") == 'true') { 
            $('.group6-doc4').show();
            $('#group6-doc4').hide();  
        } else {
            $('.group6-doc4').hide();
            $('#group6-doc4').show();  
        }
        if ($.cookie("group6-doc5") == 'true') { 
            $('.group6-doc5').show();
            $('#group6-doc5').hide();  
        } else {
            $('.group6-doc5').hide(); 
            $('#group6-doc5').show(); 
        }

        // 7

        // 8

        // 9
        if ($('input[id=move-Document-group9-doc1]').is(':checked')) { 
            $.cookie("group9-doc1", true, {path:'/'}); 
        } else {
            $.cookie("group9-doc1", false, {path:'/'});
        }
        if ($('input[id=move-Document-group9-doc2]').is(':checked')) { 
            $.cookie("group9-doc2", true, {path:'/'}); 
        } else {
            $.cookie("group9-doc2", false, {path:'/'});
        }

        if ($.cookie("group9-doc1") == 'true') { 
            $('.group9-doc1').show();
            $('#group9-doc1').hide(); 
        } else {
            $('.group9-doc1').hide(); 
            $('#group9-doc1').show(); 
        }
        if ($.cookie("group9-doc2") == 'true') { 
            $('.group9-doc2').show(); 
            $('#group9-doc2').hide(); 
        } else {
            $('.group9-doc2').hide(); 
            $('#group9-doc2').show(); 
        }

        // 10
        if ($('input[id=move-Document-group10-doc1]').is(':checked')) { 
            $.cookie("group10-doc1", true, {path:'/'}); 
        } else {
            $.cookie("group10-doc1", false, {path:'/'});
        }

        if ($.cookie("group10-doc1") == 'true') { 
            $('.group10-doc1').show();
            $('#group10-doc1').hide();  
        } else {
            $('.group10-doc1').hide();
            $('#group10-doc1').show();  
        }


    });

})


// =================================== Page Load Documents =================================== //

$(document).ready(function () {

    // Set load
    $('#pageLoad').on("click", function() {
        $.cookie("first-time-load", true, {path:'/'});
    });

    // Cancel load
    $('.cancelPageLoad').on("click", function() {
        $.cookie("first-time-load", false, {path:'/'});
    });

    // Scenarios
    $('#start-scenario-1').on("click", function() {
        $.cookie("start-scenario-1", true, {path:'/'});
    });

    $('#start-scenario-2').on("click", function() {
        $.cookie("start-scenario-2", true, {path:'/'});
    });

    $('#start-scenario-3').on("click", function() {
        $.cookie("start-scenario-3", true, {path:'/'});
    });

    $('.end-scenario').on("click", function() {
        $.cookie("end-scenario", true, {path:'/'});
    });

    if ($.cookie("start-scenario-1") == 'true' && $.cookie("end-scenario") == 'true') {
        $('.section-9').attr("aria-expanded","true");
        $('.section-10').attr("aria-expanded","true");
    }

    if ($.cookie("start-scenario-2") == 'true' && $.cookie("end-scenario") == 'true') {
        $('.section-3').attr("aria-expanded","true");
        $('.section-10').attr("aria-expanded","true");
    }

    if ($.cookie("start-scenario-3") == 'true' && $.cookie("end-scenario") == 'true') {
        $('.section-4').attr("aria-expanded","true");
        $('.section-10').attr("aria-expanded","true");
    }


    $('.loading').hide();
    $('.search-PII').show();
    $('table tbody tr.document-holder td .wrapper strong.loading-tag').hide();
    $('table tbody tr.document-holder.document-11 td strong.govuk-tag--red').show();

    if ($.cookie("first-time-load") == 'true') { 

        $('.loading').show();
        $('.documents-loaded, .failed-documents, .search-PII').hide();
        $('table tbody tr.document-holder.document-11 td strong.govuk-tag--red').hide();

        $('.document-1, .document-2, .document-3, .document-4, .document-5, .document-6, .document-7, .document-8, .document-9, .document-10, .document-11, .document-12, .document-13, .document-14, .document-15, .document-16, .document-17, .document-18, .document-19, .document-20, .document-21, .document-11A, .document-22, .document-23, .document-24').css('opacity','0.2');
        $('table tbody tr.document-holder td .wrapper strong.loading-tag').show();

        setTimeout(function() {
            $(".loading").hide();
            $('.documents-loaded').show();
            $('#searchFormTest, #searchFormTest2').removeClass('disabled');
            $('#searchURNModal').removeAttr('disabled');
        }, 19500);

        // Accordion changes
        // 1
        $('.accordion-section.section-1 .accordion-section-header').addClass('no-documents');
        $('.accordion-section.section-1 .accordion-section-header .govuk-heading-s').html('Reviews (0)');

        setTimeout(function() {
            $('.accordion-section.section-1 .accordion-section-header').removeClass('no-documents');
            $('.accordion-section.section-1 .accordion-section-header .govuk-heading-s').html('Reviews (1)');
            $('.document-1').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-1 td strong.loading-tag').hide();
        }, 1000);

        // 2 - Case overview (4)
        $('.accordion-section.section-2 .accordion-section-header').addClass('no-documents');
        $('.accordion-section.section-2 .accordion-section-header .govuk-heading-s').html('Case overview (0)');

        setTimeout(function() {
            $('.accordion-section.section-2 .accordion-section-header').removeClass('no-documents');
            $('.accordion-section.section-2 .accordion-section-header .govuk-heading-s').html('Case overview (1)');
            $('.document-2').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-2 td strong.loading-tag').hide();
        }, 2000);

        setTimeout(function() {
            $('.accordion-section.section-2 .accordion-section-header .govuk-heading-s').html('Case overview (2)');
            $('.document-3').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-3 td strong.loading-tag').hide();
        }, 3000);

        setTimeout(function() {
            $('.accordion-section.section-2 .accordion-section-header .govuk-heading-s').html('Case overview (3)');
            $('.document-4').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-4 td strong.loading-tag').hide();
        }, 4000);

        setTimeout(function() {
            $('.accordion-section.section-2 .accordion-section-header .govuk-heading-s').html('Case overview (4)');
            $('.document-5').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-5 td strong.loading-tag').hide();
        }, 5000);

        // 3 - Statements (6)
        $('.accordion-section.section-3 .accordion-section-header').addClass('no-documents');
        $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (0)');

        setTimeout(function() {
            $('.accordion-section.section-3 .accordion-section-header').removeClass('no-documents');
            $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (1)');
            $('.document-6').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-6 td strong.loading-tag').hide();
        }, 6000);

        setTimeout(function() {
            $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (2)');
            $('.document-7').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-7 td strong.loading-tag').hide();
        }, 7000);

        setTimeout(function() {
            $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (3)');
            $('.document-8').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-8 td strong.loading-tag').hide();
        }, 8000);

        setTimeout(function() {
            $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (4)');
            $('.document-9').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-9 td strong.loading-tag').hide();
        }, 9000);

        setTimeout(function() {
            $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (5)');
            $('.document-10').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-10 td strong.loading-tag').hide();
        }, 10000);

        setTimeout(function() {
            $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (6)');
            $('.document-11, .document-11A').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-11 td strong.loading-tag').hide();
            $('.accordion-section table tbody tr.document-holder.document-11 td strong.govuk-tag--red').show();
            $('.failed-documents').show();

            $('.accordion-section table tbody tr.document-holder.document-11A td strong.loading-tag').hide();
        }, 11000);

        // 4 - Exhibits (2)
        $('.accordion-section.section-4 .accordion-section-header').addClass('no-documents');
        $('.accordion-section.section-4 .accordion-section-header .govuk-heading-s').html('Exhibits (0)');

        setTimeout(function() {
            $('.accordion-section.section-4 .accordion-section-header').removeClass('no-documents');
            $('.accordion-section.section-4 .accordion-section-header .govuk-heading-s').html('Exhibits (1)');
            $('.document-12').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-12 td strong.loading-tag').hide();
        }, 12000);

        setTimeout(function() {
            $('.accordion-section.section-4 .accordion-section-header .govuk-heading-s').html('Exhibits (2)');
            $('.document-13').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-13 td strong.loading-tag').hide();
        }, 13000);

        // 5 - Forensics (0)

        // 6 - Unused materials (5)
        $('.accordion-section.section-6 .accordion-section-header').addClass('no-documents');
        $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (0)');

        setTimeout(function() {
            $('.accordion-section.section-6 .accordion-section-header').removeClass('no-documents');
            $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (1)');
            $('.document-14').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-14 td strong.loading-tag').hide();
        }, 14000);

        setTimeout(function() {
            $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (2)');
            $('.document-15').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-15 td strong.loading-tag').hide();
        }, 15000);

        setTimeout(function() {
            $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (3)');
            $('.document-16').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-16 td strong.loading-tag').hide();
        }, 16000);

        setTimeout(function() {
            $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (4)');
            $('.document-17').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-17 td strong.loading-tag').hide();
        }, 17000);

        setTimeout(function() {
            $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (5)');
            $('.document-18').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-18 td strong.loading-tag').hide();
        }, 18000);

        // 7 - Defendant (0)

        // 8 - Court preparation (0)

        // 9 - Communications (1)
        $('.accordion-section.section-9 .accordion-section-header').addClass('no-documents');
        $('.accordion-section.section-9 .accordion-section-header .govuk-heading-s').html('Communications (0)');

        setTimeout(function() {
            $('.accordion-section.section-9 .accordion-section-header').removeClass('no-documents');
            $('.accordion-section.section-9 .accordion-section-header .govuk-heading-s').html('Communications (1)');
            $('.document-19').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-19 td strong.loading-tag').hide();
        }, 19000);

        setTimeout(function() {
            $('.accordion-section.section-9 .accordion-section-header').removeClass('no-documents');
            $('.accordion-section.section-9 .accordion-section-header .govuk-heading-s').html('Communications (2)');
            $('.document-20').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-20 td strong.loading-tag').hide();
        }, 20000);

        // 10 - Uncategorised (1)
        $('.accordion-section.section-10 .accordion-section-header').addClass('no-documents');
        $('.accordion-section.section-10 .accordion-section-header .govuk-heading-s').html('Uncategorised (0)');

        setTimeout(function() {
            $('.accordion-section.section-10 .accordion-section-header').removeClass('no-documents');
            $('.accordion-section.section-10 .accordion-section-header .govuk-heading-s').html('Uncategorised (1)');
            $('.document-21').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-21 td strong.loading-tag').hide();
        }, 21000);

        setTimeout(function() {
            $('.accordion-section.section-10 .accordion-section-header').removeClass('no-documents');
            $('.accordion-section.section-10 .accordion-section-header .govuk-heading-s').html('Uncategorised (2)');
            $('.document-22').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-22 td strong.loading-tag').hide();
        }, 22000);

        setTimeout(function() {
            $('.accordion-section.section-10 .accordion-section-header').removeClass('no-documents');
            $('.accordion-section.section-10 .accordion-section-header .govuk-heading-s').html('Uncategorised (3)');
            $('.document-23').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-23 td strong.loading-tag').hide();
        }, 23000);

        setTimeout(function() {
            $('.accordion-section.section-10 .accordion-section-header').removeClass('no-documents');
            $('.accordion-section.section-10 .accordion-section-header .govuk-heading-s').html('Uncategorised (4)');
            $('.document-24').css('opacity','1');
            $('.accordion-section table tbody tr.document-holder.document-24 td strong.loading-tag').hide();
        }, 24000);

    }

})

            




