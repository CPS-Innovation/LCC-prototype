// ========================= Homepage =========================

$(document).ready(function () {

    $("#myCases-Sort").on("change", function (e) {
        if ($(this).val() == 'All cases') {
            $('#my-cases-table tr').show();
        } else if ($(this).val() == 'Pre-charge') {
            $('#my-cases-table tr').hide();
            $('#my-cases-table tr.pre-charge').show();
        } else if ($(this).val() == 'Charged') {
            $('#my-cases-table tr').hide();
            $('#my-cases-table tr.charged').show();
        }
    });

    $(".moj-search-toggle__button").on("click", function (e) {
        $(this).closest('.moj-primary-navigation__search').find('.moj-search').toggleClass('moj-js-hidden');
    });


})

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("my-cases-table");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            // Check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}



// ========================= 4A Create Case =========================

$(document).ready(function () {

    $('.create-case-continue, #newCase_Errors, #newCase_OperationName-error, #newCase_URN-error').hide();

    $("#newCase_ErrorActivate").on("click", function (e) {
        e.preventDefault();
        $('#newCase_Errors, #newCase_OperationName-error, #newCase_URN-error').show();

        // Operation Name
        if ($('#newCase_OperationName').val()) {
            $('#newCase_OperationName-Value').removeClass('govuk-form-group--error');
            $('#newCase_OperationName-Value input').removeClass('govuk-input--error');
            $('#newCase_OperationName-error').hide();
        } else {
            $('#newCase_OperationName-Value').addClass('govuk-form-group--error');
            $('#newCase_OperationName-Value input').addClass('govuk-input--error');
            $('#newCase_OperationName-error').show();
        }

        // URN
        if ($('#newCase_URN-A').val() && $('#newCase_URN-B').val() && $('#newCase_URN-C').val() && $('#newCase_URN-D').val()) {
            $('#newCase_URN-Value').removeClass('govuk-form-group--error');
            $('#newCase_URN-Value input').removeClass('govuk-input--error');

            $('#newCase_URN-error, .newCase_Errors-ValueURN').hide();
        } else {
            $('#newCase_URN-Value').addClass('govuk-form-group--error');
            $('#newCase_URN-Value input').addClass('govuk-input--error');
        }

    });

    $("input[id=newCase_OperationName]").on("keyup", function (e) {
        if ($(this).val().length >= 1 && $('#newCase_URN-A').val().length >= 2 && $('#newCase_URN-C').val().length >= 4 && $('#newCase_URN-D').val().length >= 1) {
            $('.create-case-continue').show();
            $('.create-case-error').hide();
            $('.newCase_Errors-ValueOperation').hide();
        } else {
            $('.create-case-continue').hide();
            $('.create-case-error').show();
            $('.newCase_Errors-ValueOperation').show();
        }
        // $('.newCase_Errors-ValueOperation').hide();
        // if ($(this).val() && $('#newCase_URN-A').val() && $('#newCase_URN-B').val() && $('#newCase_URN-C').val() && $('#newCase_URN-D').val()) {
        //     $('.create-case-continue').show();
        //     $('.create-case-error').hide();
        // } else if ($(this).val() && $('#newCase_URN-A').val().length === 0 || $('#newCase_URN-C').val().length === 0 || $('#newCase_URN-D').val().length === 0) {
        //     $('.create-case-error').show();
        //     $('.create-case-continue').hide();
        //     $('#newCase_OperationName-error').hide();
        // }
    });

    $("input[id=newCase_URN-A]").on("keyup", function (e) {
        if ($(this).val().length === 0 || $('#newCase_URN-C').val().length === 0 || $('#newCase_URN-D').val().length === 0) {
            $('.create-case-continue').hide();
            $('.create-case-error').show();
        } else {
            $('.create-case-continue').show();
            $('.create-case-error').hide();
        }

        // SEOCID code
        if ($(this).val() == 77) {
            $('.form-wrapper select').hide();
            $('.form-wrapper select#newCase_URN-B-77').show();
        } else if ($(this).val() == 83) {
            $('.form-wrapper select').hide();
            $('.form-wrapper select#newCase_URN-B-83').show();
        } else if ($(this).val() == 85) {
            $('.form-wrapper select').hide();
            $('.form-wrapper select#newCase_URN-B-85').show();
        } else if ($(this).val() == 86) {
            $('.form-wrapper select').hide();
            $('.form-wrapper select#newCase_URN-B-86').show();
        } else if ($(this).val() == 87) {
            $('.form-wrapper select').hide();
            $('.form-wrapper select#newCase_URN-B-87').show();
        } else if ($(this).val() == 88) {
            $('.form-wrapper select').hide();
            $('.form-wrapper select#newCase_URN-B-88').show();
        } else if ($(this).val() == 89) {
            $('.form-wrapper select').hide();
            $('.form-wrapper select#newCase_URN-B-89').show();
        } else if ($(this).val() == 96) {
            $('.form-wrapper select').hide();
            $('.form-wrapper select#newCase_URN-B-96').show();
        } else {
            $('.form-wrapper select').hide();
            $('.form-wrapper select#newCase_URN-B-83').show();
        }

    });

    $("input[id=newCase_URN-C]").on("keyup", function (e) {
        if ($(this).val().length === 0 || $('#newCase_URN-A').val().length === 0 || $('#newCase_URN-D').val().length === 0) {
            $('.create-case-continue').hide();
            $('.create-case-error').show();
        } else {
            $('.create-case-continue').show();
            $('.create-case-error').hide();
        }
    });

    $("input[id=newCase_URN-D]").on("keyup", function (e) {
        if ($(this).val().length === 0 || $('#newCase_URN-A').val().length === 0 || $('#newCase_URN-C').val().length === 0) {
            $('.create-case-continue').hide();
            $('.create-case-error').show();
        } else {
            $('.create-case-continue').show();
            $('.create-case-error').hide();
        }
    });


})

// ========================= 4B Create Case =========================

$(document).ready(function () {

    $('#newCase_SharedAccess').on("click", function() {
        if ($('input[id=newCase_SharedAccess-Egress]').is(':checked')) {
            $.cookie("newCase_SharedAccess-Egress", true, {path:'/'});
        }
        if ($('input[id=newCase_SharedAccess-Holmes]').is(':checked')) {
            $.cookie("newCase_SharedAccess-Holmes", true, {path:'/'});
        }
            if ($('input[id=newCase_SharedAccess-Relativity]').is(':checked')) {
            $.cookie("newCase_SharedAccess-Relativity", true, {path:'/'});
        }
        if ($('input[id=newCase_SharedAccess-Drive]').is(':checked')) {
            $.cookie("newCase_SharedAccess-Drive", true, {path:'/'});
        }
        if ($('input[id=newCase_SharedAccess-Outlook]').is(':checked')) {
            $.cookie("newCase_SharedAccess-Outlook", true, {path:'/'});
        }

    });

    if ($.cookie("newCase_SharedAccess-Egress") == 'true') {
        $('#newCase_SharedAccess-EgressShow').show();
    } else {
        $('#newCase_SharedAccess-EgressShow').hide();
    }

    if ($.cookie("newCase_SharedAccess-Holmes") == 'true') {
        $('#newCase_SharedAccess-HolmesShow').show();
    } else {
        $('#newCase_SharedAccess-HolmesShow').hide();
    }

    if ($.cookie("newCase_SharedAccess-Relativity") == 'true') {
        $('#newCase_SharedAccess-RelativityShow').show();
    } else {
        $('#newCase_SharedAccess-RelativityShow').hide();
    }

    if ($.cookie("newCase_SharedAccess-Drive") == 'true') {
        $('#newCase_SharedAccess-DriveShow').show();
    } else {
        $('#newCase_SharedAccess-DriveShow').hide();
    }

    if ($.cookie("newCase_SharedAccess-Outlook") == 'true') {
        $('#newCase_SharedAccess-OutlookShow').show();
    } else {
        $('#newCase_SharedAccess-OutlookShow').hide();
    }

})


// ========================= 4C Create Case =========================

$(document).ready(function () {

    // $('input[name=newCase_Access]').on("change", function() {
    //     if ($('input[id=newCase_Access--Later]').is(':checked')) {
    //         $('#newCase_Form-C').attr('action','5-case-overview');
    //     } else if ($('input[id=newCase_Access--Now]').is(':checked')) {
    //         $('#newCase_Form-C').attr('action','4D-create-case');
    //     }      
    // });

})


// ========================= NAVIGATION =========================

// Home
if ($("#homepage-journey").length == 0) {
    $('#global-navigation.off-cms-journey ul li.homepage').removeClass('current');
} else {
    $('#global-navigation.off-cms-journey ul li.homepage').addClass('current');
}

// Create a Case
if ($("#create-case-journey").length == 0) {
    $('#global-navigation.off-cms-journey ul li.create-case').removeClass('current');
} else {
    $('#global-navigation.off-cms-journey ul li.create-case').addClass('current');
}

// Search
if ($("#search-journey").length == 0) {
    $('#global-navigation.off-cms-journey ul li.search').removeClass('current');
} else {
    $('#global-navigation.off-cms-journey ul li.search').addClass('current');
}


// ========================= TABS =========================
$(document).ready(function () {

    $("#new-tabs .tab-link").on("click", function (e) {
        e.preventDefault();
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $(this).parent().addClass('govuk-tabs__list-item--selected');

        $('.extra-nav').hide();
        $('.extended-navigation').removeClass('govuk-tabs__list-item--selected');
        $('.show-hide').removeClass('active');
    });

    $("#new-tabs .tab-1-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-1-content').show();
    });

    $("#new-tabs .tab-2-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-2-content').show();
    });
    
    $("#new-tabs .tab-3-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-3-content').show();
    });

    $("#new-tabs .tab-4-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-4-content').show();
    });

    $("#new-tabs .tab-5-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-5-content').show();
    });

    $("#new-tabs .tab-6-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-6-content').show();
    });

    $("#new-tabs .tab-7-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-7-content').show();

        $('nav.secondaryTabs li a').removeAttr('aria-current');
        $('nav.secondaryTabs li#secondaryTab-1 a').attr('aria-current','page');
    });

    $("#new-tabs .tab-8-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-8-content').show();

        $('nav.secondaryTabs li a').removeAttr('aria-current');
        $('nav.secondaryTabs li#secondaryTab-4 a').attr('aria-current','page');
    });

    $("#new-tabs .tab-9-content").on("click", function (e) {
        $('.panel, .extra-nav').hide();
        $('#tab-9-content').show();
        $('.show-hide').removeClass('active');
        $('.extended-navigation').removeClass('list-item--selected');

        $(this).parent().parent().hide();
    });

    $("#new-tabs .tab-10-content").on("click", function (e) {
        $('.panel, .extra-nav').hide();
        $('#tab-10-content').show();
        $('.show-hide').removeClass('active');
        $('.extended-navigation').removeClass('list-item--selected');

        $(this).parent().parent().hide();
    });

    $("#new-tabs .tab-11-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-11-content').show();
    });

    $("#new-tabs .extended-navigation .show-hide").on("click", function (e) {
        $(this).toggleClass('active');
        $(this).parent().find('.extra-nav').toggle();
        // $('#tab-11-content').show();
    });



})

$(document).ready(function() {

    // $('#last-action-hero .hods-timeline__item').hide();
    // $('#last-action-hero .hods-timeline__item.last-action-hero-CREATED').show();

    // 1 - Overview
    if (window.location.href.indexOf("overviewTab") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-1').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-1-content').show();

        $('#last-action-hero .hods-timeline__item.last-action-hero-CREATED').show();
    }

    // 2 - Case progression
    if (window.location.href.indexOf("eaTab") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-2').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-2-content').show();

        $('#last-action-hero .hods-timeline__item.last-action-hero-EARLY_ADVICE').show();
        $('#last-action-hero .hods-timeline__item.last-action-hero-CREATED').hide();
    }

    // 3 - Case strategy
    if (window.location.href.indexOf("strategyTab") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-3').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-3-content').show();
    }

    if (window.location.href.indexOf("strategyTab_subTab_1") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-3').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-3-content').show();


        $('.moj-sub-navigation__item').removeClass('secondaryTab-Selected');
        $('.moj-sub-navigation__item#secondaryTab-1').addClass('secondaryTab-Selected');
        $('#strategy_Nav a').removeAttr('aria-current');
        $('#strategy_Nav #secondaryTab-1 a').attr('aria-current','page');
        $('.secondaryTabContent').hide();
        $('.secondaryTabContent#secondaryTabContent-1').show();
    }

    if (window.location.href.indexOf("strategyTab_subTab_2") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-3').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-3-content').show();

        $('.moj-sub-navigation__item').removeClass('secondaryTab-Selected');
        $('.moj-sub-navigation__item#secondaryTab-2').addClass('secondaryTab-Selected');
        $('#strategy_Nav a').removeAttr('aria-current');
        $('#strategy_Nav #secondaryTab-2 a').attr('aria-current','page');
        $('.secondaryTabContent').hide();
        $('.secondaryTabContent#secondaryTabContent-2').show();
    }

    if (window.location.href.indexOf("strategyTab_subTab_3") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-3').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-3-content').show();

        $('.moj-sub-navigation__item').removeClass('secondaryTab-Selected');
        $('.moj-sub-navigation__item#secondaryTab-3').addClass('secondaryTab-Selected');
        $('#strategy_Nav a').removeAttr('aria-current');
        $('#strategy_Nav #secondaryTab-3 a').attr('aria-current','page');
        $('.secondaryTabContent').hide();
        $('.secondaryTabContent#secondaryTabContent-3').show();
    }

    if (window.location.href.indexOf("strategyTab_subTab_4") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-3').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-3-content').show();

        $('.moj-sub-navigation__item').removeClass('secondaryTab-Selected');
        $('.moj-sub-navigation__item#secondaryTab-4').addClass('secondaryTab-Selected');
        $('#strategy_Nav a').removeAttr('aria-current');
        $('#strategy_Nav #secondaryTab-4 a').attr('aria-current','page');
        $('.secondaryTabContent').hide();
        $('.secondaryTabContent#secondaryTabContent-4').show();
    }

    if (window.location.href.indexOf("strategyTab_subTab_5") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-3').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-3-content').show();

        $('.moj-sub-navigation__item').removeClass('secondaryTab-Selected');
        $('.moj-sub-navigation__item#secondaryTab-5').addClass('secondaryTab-Selected');
        $('#strategy_Nav a').removeAttr('aria-current');
        $('#strategy_Nav #secondaryTab-5 a').attr('aria-current','page');
        $('.secondaryTabContent').hide();
        $('.secondaryTabContent#secondaryTabContent-5').show();
    }

    if (window.location.href.indexOf("strategyTab_subTab_6") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-3').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-3-content').show();

        $('.moj-sub-navigation__item').removeClass('secondaryTab-Selected');
        $('.moj-sub-navigation__item#secondaryTab-6').addClass('secondaryTab-Selected');
        $('#strategy_Nav a').removeAttr('aria-current');
        $('#strategy_Nav #secondaryTab-6 a').attr('aria-current','page');
        $('.secondaryTabContent').hide();
        $('.secondaryTabContent#secondaryTabContent-6').show();
    }

    if (window.location.href.indexOf("strategyTab_subTab_7") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-3').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-3-content').show();

        $('.moj-sub-navigation__item').removeClass('secondaryTab-Selected');
        $('.moj-sub-navigation__item#secondaryTab-7').addClass('secondaryTab-Selected');
        $('#strategy_Nav a').removeAttr('aria-current');
        $('#strategy_Nav #secondaryTab-7 a').attr('aria-current','page');
        $('.secondaryTabContent').hide();
        $('.secondaryTabContent#secondaryTabContent-7').show();
    }

    if (window.location.href.indexOf("strategyTab_subTab_8") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-3').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-3-content').show();

        $('.moj-sub-navigation__item').removeClass('secondaryTab-Selected');
        $('.moj-sub-navigation__item#secondaryTab-8').addClass('secondaryTab-Selected');
        $('#strategy_Nav a').removeAttr('aria-current');
        $('#strategy_Nav #secondaryTab-8 a').attr('aria-current','page');
        $('.secondaryTabContent').hide();
        $('.secondaryTabContent#secondaryTabContent-8').show();
    }

    // 4 - Suspects
    if (window.location.href.indexOf("suspectsTab") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-4').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-4-content').show();

        $('#last-action-hero .hods-timeline__item.last-action-hero-SUSPECT').show();
        $('#last-action-hero .hods-timeline__item.last-action-hero-CREATED').hide();
    }

    // 5 - Witnesses
    if (window.location.href.indexOf("witnessesTab") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-5').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-5-content').show();

        $('#last-action-hero .hods-timeline__item.last-action-hero-WITNESS').show();
        $('#last-action-hero .hods-timeline__item.last-action-hero-CREATED').hide();
    }

    // 6 - Materials
    if (window.location.href.indexOf("materialsTab") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-6').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-6-content').show();

        $('#last-action-hero .hods-timeline__item.last-action-hero-MATERAILS').show();
        $('#last-action-hero .hods-timeline__item.last-action-hero-CREATED').hide();
    }

    // 7 - Comms
    if (window.location.href.indexOf("permissionsTab") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-7').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-7-content').show();

        $('#last-action-hero .hods-timeline__item.last-action-hero-COMMS').show();
        $('#last-action-hero .hods-timeline__item.last-action-hero-CREATED').hide();
    }

    // 8 - Key contacts
    if (window.location.href.indexOf("contactsTab") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-8').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-8-content').show();

        $('#last-action-hero .hods-timeline__item.last-action-hero-CONTACTS').show();
        $('#last-action-hero .hods-timeline__item.last-action-hero-CREATED').hide();
    }

    // 9 - Permissions
    if (window.location.href.indexOf("permissionsTab") > -1) {
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel').hide();

        $('#new-tabs .govuk-tabs__list-item#tab-9').addClass('govuk-tabs__list-item--selected');
        $('#new-tabs .panel#tab-9-content').show();

        $('#last-action-hero .hods-timeline__item.last-action-hero-PERMISSIONS').show();
        $('#last-action-hero .hods-timeline__item.last-action-hero-CREATED').hide();
    }
});

// ========================= ADD USERS ========================= //
$(document).ready(function () {
    // $('#userDetails-2, #userDetails-3, #userDetails-4, #userDetails-5').hide();
    $('#userDetails-1 a#removeUser1').hide();
})

function addUser1() {
    var userEmail = $('#newCase_Access-Email').val();
    var userAccess = $('#newCase_Access-Permissions').val();
    $('#new-contacts').append('<p class="userDetails-1"><span class="icon-new user"></span>' + userEmail + '<br><strong class="govuk-tag govuk-tag--blue">' + userAccess + '</strong></p>');
    $('#userDetails-2').addClass('active');
    $('#addUser1').hide();
    $('#userDetails-1 a#removeUser1').show();
}

function removeUser1() {
    $('#userDetails-1').hide();
    $('.userDetails-1').hide();
}


function addUser2() {
    var userEmail2 = $('#newCase_Access-Email2').val();
    var userAccess2 = $('#newCase_Access-Permissions2').val();
    $('#new-contacts').append('<p class="userDetails-2"><span class="icon-new user"></span>' + userEmail2 + '<br><strong class="govuk-tag govuk-tag--blue">' + userAccess2 + '</strong></p>');
    $('#userDetails-3').addClass('active');
    $('#addUser2').hide();
}

function removeUser2() {
    $('#userDetails-2').hide();
    $('.userDetails-2').hide();
}

function addUser3() {
    var userEmail3 = $('#newCase_Access-Email3').val();
    var userAccess3 = $('#newCase_Access-Permissions3').val();
    $('#new-contacts').append('<p class="userDetails-3"><span class="icon-new user"></span>' + userEmail3 + '<br><strong class="govuk-tag govuk-tag--blue">' + userAccess3 + '</strong></p>');
    $('#userDetails-4').addClass('active');
    $('#addUser3').hide();
}

function removeUser3() {
    $('#userDetails-3').hide();
    $('.userDetails-3').hide();
}

function addUser4() {
    var userEmail4 = $('#newCase_Access-Email4').val();
    var userAccess4 = $('#newCase_Access-Permissions4').val();
    $('#new-contacts').append('<p class="userDetails-4"><span class="icon-new user"></span>' + userEmail4 + '<br><strong class="govuk-tag govuk-tag--blue">' + userAccess4 + '</strong></p>');
    $('#userDetails-5').addClass('active');
    $('#addUser4').hide();
}

function removeUser4() {
    $('#userDetails-4').hide();
    $('.userDetails-4').hide();
}

function addUser5() {
    var userEmail5 = $('#newCase_Access-Email5').val();
    var userAccess5 = $('#newCase_Access-Permissions5').val();
    $('#new-contacts').append('<p class="userDetails-5"><span class="icon-new user"></span>' + userEmail5 + '<br><strong class="govuk-tag govuk-tag--blue">' + userAccess5 + '</strong></p>');
}

function removeUser5() {
    $('#userDetails-5').hide();
    $('.userDetails-5').hide();
}

// ========================= REMOVE USERS =========================
$(document).ready(function () {
    $(".removeContact").on("click", function (e) {
        $('.contacts-table tr').removeClass('removeContact-Row');
        $(this).parent().parent().addClass('removeContact-Row');
        var userName = $(this).parent().parent().find('.govuk-table__header').text();
        $('#confirmRemoveUser').removeClass('rj-dont-display');
        $('.usernameRemove').text(userName);
    });

    $("input[id=offCMS_Username-Remove]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-RemoveUsers').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmRemoveUsers();');
        } else {
            $('#confirm-RemoveUsers').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

    
})

function closeConfirmRemoveUser() {
    $('#confirmRemoveUser').addClass('rj-dont-display');
    $('table.contacts-table tbody tr').removeClass('removeContact-Row');
}

function confirmRemoveUsers() {
    $('#confirmRemoveUser').addClass('rj-dont-display');
    $('table.contacts-table tbody tr.removeContact-Row').hide();
    var userNumbers = parseInt($('.tab-8-content .contacts-number').text());
    $('.tab-8-content .contacts-number').text(userNumbers-1);

}

// ========================= ADD CONTACTS ========================= //
$(document).ready(function () {
    $('#contactsDetails-1 a#removeContact1').hide();

    $("#keyContact_Role_1").on("change", function (e) {
        if ($(this).val() == 'Counsel 1' || $(this).val() == 'Counsel 2' || $(this).val() == 'Counsel 3') {
            $('#conditional-keyContact_Role_1').show();
        } else {
            $('#conditional-keyContact_Role_1').hide();
        }
    });

    $("#keyContact_Role_2").on("change", function (e) {
        if ($(this).val() == 'Counsel 1' || $(this).val() == 'Counsel 2' || $(this).val() == 'Counsel 3') {
            $('#conditional-keyContact_Role_2').show();
        } else {
            $('#conditional-keyContact_Role_2').hide();
        }
    });

    $("#keyContact_Role_3").on("change", function (e) {
        if ($(this).val() == 'Counsel 1' || $(this).val() == 'Counsel 2' || $(this).val() == 'Counsel 3') {
            $('#conditional-keyContact_Role_3').show();
        } else {
            $('#conditional-keyContact_Role_3').hide();
        }
    });

    $("#keyContact_Role_4").on("change", function (e) {
        if ($(this).val() == 'Counsel 1' || $(this).val() == 'Counsel 2' || $(this).val() == 'Counsel 3') {
            $('#conditional-keyContact_Role_4').show();
        } else {
            $('#conditional-keyContact_Role_4').hide();
        }
    });

    $("#keyContact_Role_5").on("change", function (e) {
        if ($(this).val() == 'Counsel 1' || $(this).val() == 'Counsel 2' || $(this).val() == 'Counsel 3') {
            $('#conditional-keyContact_Role_5').show();
        } else {
            $('#conditional-keyContact_Role_5').hide();
        }
    });

})

function addContact1() {

    $('p#no_key_contacts').hide();

    var contactSurname_1 = $('#keyContact_Name_1A').val();
    var contactForname_1 = $('#keyContact_Name_1B').val();
    var contactRole_1 = $('#keyContact_Role_1').val();
    var contactType_1 = $('#keyContact_Role_1-Type').val();
    var contactEmail_1 = $('#keyContact_Email_1').val();
    var contactPhone_1 = $('#keyContact_Phone_1').val();
    var contactDay_1 = $('#keyContact_Date_1-Day').val();
    var contactMonth_1 = $('#keyContact_Date_1-Month').val();
    var contactYear_1 = $('#keyContact_Date_1-Year').val();

    $('#new-contacts').append(`
        <p class="contactDetails-1">
            <span class="icon-new user"></span><strong>` + contactSurname_1 + `, ` + contactForname_1 + `</strong>
        </p>
        <details class="govuk-details">
            <summary class="govuk-details__summary">
                <span class="govuk-details__summary-text">Contact details</span>
            </summary>
            <div class="govuk-details__text">
                <strong>Role:</strong><span>` + contactRole_1 + `</span><br>
                <strong>Email:</strong> <a href="mailto:` + contactEmail_1 + `" class="copy_Item">` + contactEmail_1 + `</a><br>
                <strong>Telephone:</strong> <a href="tel:` + contactPhone_1 + `" class="copy_Item">` + contactPhone_1 + `</a><br>
                <strong>Date:</strong><span>` + contactDay_1 + `/` + contactMonth_1 + `/` + contactYear_1 + `</span>
            </div>
        </details>                    
    `);
    $('#contactsDetails-2').addClass('active');
    $('#addContact1').hide();
    $('#contactsDetails-1 a#removeContact1').show();
}

function removeContact1() {
    $('#contactsDetails-1').hide();
    $('.contactsDetails-1').hide();
}

function addContact2() {
    var contactSurname_2 = $('#keyContact_Name_2A').val();
    var contactForname_2 = $('#keyContact_Name_2B').val();
    var contactRole_2 = $('#keyContact_Role_2').val();
    var contactType_2 = $('#keyContact_Role_2-Type').val();
    var contactEmail_2 = $('#keyContact_Email_2').val();
    var contactPhone_2 = $('#keyContact_Phone_2').val();
    var contactDay_2 = $('#keyContact_Date_2-Day').val();
    var contactMonth_2 = $('#keyContact_Date_2-Month').val();
    var contactYear_2 = $('#keyContact_Date_2-Year').val();

    $('#new-contacts').append(`
        <p class="contactDetails-2">
            <span class="icon-new user"></span><strong>` + contactSurname_2 + `, ` + contactForname_2 + `</strong>
        </p>
        <details class="govuk-details">
            <summary class="govuk-details__summary">
                <span class="govuk-details__summary-text">Contact details</span>
            </summary>
            <div class="govuk-details__text">
                <strong>Role:</strong><span>` + contactRole_2 + `</span><br>
                <strong>Email:</strong> <a href="mailto:` + contactEmail_2 + `" class="copy_Item">` + contactEmail_2 + `</a><br>
                <strong>Telephone:</strong> <a href="tel:` + contactPhone_2 + `" class="copy_Item">` + contactPhone_2 + `</a><br>
                <strong>Date:</strong><span>` + contactDay_2 + `/` + contactMonth_2 + `/` + contactYear_2 + `</span>
            </div>
        </details>                    
    `);
    $('#contactsDetails-3').addClass('active');
    $('#addContact2').hide();
    $('#contactsDetails-2 a#removeContact2').show();
}

function removeContact2() {
    $('#contactsDetails-2').hide();
    $('.contactsDetails-2').hide();
}

function addContact3() {
    var contactSurname_3 = $('#keyContact_Name_3A').val();
    var contactForname_3 = $('#keyContact_Name_3B').val();
    var contactRole_3 = $('#keyContact_Role_3').val();
    var contactType_3 = $('#keyContact_Role_3-Type').val();
    var contactEmail_3 = $('#keyContact_Email_3').val();
    var contactPhone_3 = $('#keyContact_Phone_3').val();
    var contactDay_3 = $('#keyContact_Date_3-Day').val();
    var contactMonth_3 = $('#keyContact_Date_3-Month').val();
    var contactYear_3 = $('#keyContact_Date_3-Year').val();

    $('#new-contacts').append(`
        <p class="contactDetails-3">
            <span class="icon-new user"></span><strong>` + contactSurname_3 + `, ` + contactForname_3 + `</strong>
        </p>
        <details class="govuk-details">
            <summary class="govuk-details__summary">
                <span class="govuk-details__summary-text">Contact details</span>
            </summary>
            <div class="govuk-details__text">
                <strong>Role:</strong><span>` + contactRole_3 + `</span><br>
                <strong>Email:</strong> <a href="mailto:` + contactEmail_3 + `" class="copy_Item">` + contactEmail_3 + `</a><br>
                <strong>Telephone:</strong> <a href="tel:` + contactPhone_3 + `" class="copy_Item">` + contactPhone_3 + `</a><br>
                <strong>Date:</strong><span>` + contactDay_3 + `/` + contactMonth_3 + `/` + contactYear_3 + `</span>
            </div>
        </details>                    
    `);
    $('#contactsDetails-4').addClass('active');
    $('#addContact3').hide();
    $('#contactsDetails-3 a#removeContact3').show();
}

function removeContact3() {
    $('#contactsDetails-3').hide();
    $('.contactsDetails-3').hide();
}

function addContact4() {
    var contactSurname_4 = $('#keyContact_Name_4A').val();
    var contactForname_4 = $('#keyContact_Name_4B').val();
    var contactRole_4 = $('#keyContact_Role_4').val();
    var contactType_4 = $('#keyContact_Role_4-Type').val();
    var contactEmail_4 = $('#keyContact_Email_4').val();
    var contactPhone_4 = $('#keyContact_Phone_4').val();
    var contactDay_4 = $('#keyContact_Date_4-Day').val();
    var contactMonth_4 = $('#keyContact_Date_4-Month').val();
    var contactYear_4 = $('#keyContact_Date_4-Year').val();

    $('#new-contacts').append(`
        <p class="contactDetails-4">
            <span class="icon-new user"></span><strong>` + contactSurname_4 + `, ` + contactForname_4 + `</strong>
        </p>
        <details class="govuk-details">
            <summary class="govuk-details__summary">
                <span class="govuk-details__summary-text">Contact details</span>
            </summary>
            <div class="govuk-details__text">
                <strong>Role:</strong><span>` + contactRole_4 + `</span><br>
                <strong>Email:</strong> <a href="mailto:` + contactEmail_4 + `" class="copy_Item">` + contactEmail_4 + `</a><br>
                <strong>Telephone:</strong> <a href="tel:` + contactPhone_4 + `" class="copy_Item">` + contactPhone_4 + `</a><br>
                <strong>Date:</strong><span>` + contactDay_4 + `/` + contactMonth_4 + `/` + contactYear_4 + `</span>
            </div>
        </details>                    
    `);
    $('#contactsDetails-5').addClass('active');
    $('#addContact4').hide();
    $('#contactsDetails-4 a#removeContact4').show();
}

function removeContact4() {
    $('#contactsDetails-4').hide();
    $('.contactsDetails-4').hide();
}

function addContact5() {
    var contactSurname_5 = $('#keyContact_Name_5A').val();
    var contactForname_5 = $('#keyContact_Name_5B').val();
    var contactRole_5 = $('#keyContact_Role_5').val();
    var contactType_5 = $('#keyContact_Role_5-Type').val();
    var contactEmail_5 = $('#keyContact_Email_5').val();
    var contactPhone_5 = $('#keyContact_Phone_5').val();
    var contactDay_5 = $('#keyContact_Date_5-Day').val();
    var contactMonth_5 = $('#keyContact_Date_5-Month').val();
    var contactYear_5 = $('#keyContact_Date_5-Year').val();

    $('#new-contacts').append(`
        <p class="contactDetails-5">
            <span class="icon-new user"></span><strong>` + contactSurname_5 + `, ` + contactForname_5 + `</strong>
        </p>
        <details class="govuk-details">
            <summary class="govuk-details__summary">
                <span class="govuk-details__summary-text">Contact details</span>
            </summary>
            <div class="govuk-details__text">
                <strong>Role:</strong><span>` + contactRole_5 + `</span><br>
                <strong>Email:</strong> <a href="mailto:` + contactEmail_5 + `" class="copy_Item">` + contactEmail_5 + `</a><br>
                <strong>Telephone:</strong> <a href="tel:` + contactPhone_5 + `" class="copy_Item">` + contactPhone_5 + `</a><br>
                <strong>Date:</strong><span>` + contactDay_5 + `/` + contactMonth_5 + `/` + contactYear_5 + `</span>
            </div>
        </details>                    
    `);
    $('#addContact5').hide();
    $('#contactsDetails-5 a#removeContact3').show();
}

function removeContact5() {
    $('#contactsDetails-5').hide();
    $('.contactsDetails-5').hide();
}


// ========================= REMOVE CONTACTS =========================
$(document).ready(function () {

    $('tr#no_key_contacts').hide();

    $(".removeKeyContact").on("click", function (e) {
        $('.key_contacts-table tr').removeClass('removeContact-Row');
        $(this).parent().parent().addClass('removeContact-Row');
        var userName = $(this).parent().parent().find('.govuk-table__header').text();
        $('#confirmRemoveContact').removeClass('rj-dont-display');
        $('.usernameRemove').text(userName);
    });

    $("input[id=offCMS_Contact-Remove]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-RemoveContact').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmRemoveContact();');
        } else {
            $('#confirm-RemoveContact').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

    
})

function closeConfirmRemoveContact() {
    $('#confirmRemoveContact').addClass('rj-dont-display');
    $('table.key_contacts-table tbody tr').removeClass('removeContact-Row');
}

function confirmRemoveContact() {
    $('#confirmRemoveContact').addClass('rj-dont-display');
    $('table.key_contacts-table tbody tr.removeContact-Row').hide();
    var userNumbers = parseInt($('.tab-8-content .contacts-number').text());
    $('.tab-8-content .contacts-number').text(userNumbers-1);

    $('tr#no_key_contacts').show();
}


// ========================= SHARED LINKS =========================
function copyEgressLink() {
    // Get the text field
    var copyText = document.getElementById("filePath-Egress");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    $('#copyEgressLink').text('Path copied');
    $('#copyDriveLink, #copyOutlookLink').text('Copy text');
}

function copyDriveLink() {
    // Get the text field
    var copyText = document.getElementById("filePath-Drive");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    $('#copyDriveLink').text('Path copied');
    $('#copyEgressLink, #copyOutlookLink').text('Copy text');
}

function copyOutlookLink() {
    // Get the text field
    var copyText = document.getElementById("filePath-Outlook");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    $('#copyOutlookLink').text('Path copied');
    $('#copyEgressLink, #copyDriveLink').text('Copy text');
}

// ========================= Secondary Tabs ========================= //
function secondaryTab1() {
    $('.tabsGroup-1.secondaryTabContent').hide();
    $('.tabsGroup-1.secondaryTabContent#secondaryTabContent-1').show();

    $('.tabsGroup-1 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-1').addClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-1 a').attr('aria-current','page');
}

function secondaryTab2() {
    $('.tabsGroup-1.secondaryTabContent').hide();
    $('.tabsGroup-1.secondaryTabContent#secondaryTabContent-2').show();

    $('.tabsGroup-1 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-2').addClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-2 a').attr('aria-current','page');
}

function secondaryTab3() {
    $('.tabsGroup-1.secondaryTabContent').hide();
    $('.tabsGroup-1.secondaryTabContent#secondaryTabContent-3').show();

    $('.tabsGroup-1 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-3').addClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-3 a').attr('aria-current','page');
}

function secondaryTab4_V2() {
    $('.tabsGroup-1.secondaryTabContent').hide();
    $('.tabsGroup-1.secondaryTabContent#secondaryTabContent-4').show();

    $('.tabsGroup-1 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-4').addClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-4 a').attr('aria-current','page');
}

function secondaryTab5_V2() {
    $('.tabsGroup-1.secondaryTabContent').hide();
    $('.tabsGroup-1.secondaryTabContent#secondaryTabContent-5').show();

    $('.tabsGroup-1 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-5').addClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-5 a').attr('aria-current','page');
}

function secondaryTab6_V2() {
    $('.tabsGroup-1.secondaryTabContent').hide();
    $('.tabsGroup-1.secondaryTabContent#secondaryTabContent-6').show();

    $('.tabsGroup-1 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-6').addClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-6 a').attr('aria-current','page');
}

function secondaryTab7_V2() {
    $('.tabsGroup-1.secondaryTabContent').hide();
    $('.tabsGroup-1.secondaryTabContent#secondaryTabContent-7').show();

    $('.tabsGroup-1 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-7').addClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-7 a').attr('aria-current','page');
}

function secondaryTab8_V2() {
    $('.tabsGroup-1.secondaryTabContent').hide();
    $('.tabsGroup-1.secondaryTabContent#secondaryTabContent-8').show();

    $('.tabsGroup-1 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-8').addClass('secondaryTab-Selected');
    $('.tabsGroup-1 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-1 .moj-sub-navigation__item#secondaryTab-8 a').attr('aria-current','page');
}

function secondaryTab4() {
    $('.tabsGroup-2.secondaryTabContent').hide();
    $('.tabsGroup-2.secondaryTabContent#secondaryTabContent-4').show();

    $('.tabsGroup-2 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-2 .moj-sub-navigation__item#secondaryTab-4').addClass('secondaryTab-Selected');
    $('.tabsGroup-2 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-2 .moj-sub-navigation__item#secondaryTab-4 a').attr('aria-current','page');
}

function secondaryTab5() {
    $('.tabsGroup-2.secondaryTabContent').hide();
    $('.tabsGroup-2.secondaryTabContent#secondaryTabContent-5').show();

    $('.tabsGroup-2 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-2 .moj-sub-navigation__item#secondaryTab-5').addClass('secondaryTab-Selected');
    $('.tabsGroup-2 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-2 .moj-sub-navigation__item#secondaryTab-5 a').attr('aria-current','page');
}

function secondaryTab6() {
    $('.tabsGroup-2.secondaryTabContent').hide();
    $('.tabsGroup-2.secondaryTabContent#secondaryTabContent-6').show();

    $('.tabsGroup-2 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-2 .moj-sub-navigation__item#secondaryTab-6').addClass('secondaryTab-Selected');
    $('.tabsGroup-2 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-2 .moj-sub-navigation__item#secondaryTab-6 a').attr('aria-current','page');
}

function secondaryTab7() {
    $('.tabsGroup-2.secondaryTabContent').hide();
    $('.tabsGroup-2.secondaryTabContent#secondaryTabContent-7').show();

    $('.tabsGroup-2 .moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.tabsGroup-2 .moj-sub-navigation__item#secondaryTab-7').addClass('secondaryTab-Selected');
    $('.tabsGroup-2 .moj-sub-navigation__item a').removeAttr('aria-current');
    $('.tabsGroup-2 .moj-sub-navigation__item#secondaryTab-7 a').attr('aria-current','page');
}


// ========================= Create REVIEW Report ========================= //
$(document).ready(function () {
    $("#eaCaseSummary-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaCaseSummary').addClass('completed'); });
    $("#eaEvidentialAanalysis-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaEvidentialAanalysis').addClass('completed'); });
    $("#eaPublicInterestAssesment-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaPublicInterestAssesment').addClass('completed'); });
    $("#eaWitnessVictim-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaWitnessVictim').addClass('completed'); });
    $("#eaTrialStrategy-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaTrialStrategy').addClass('completed'); });
    $("#eaAllocation-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaAllocation').addClass('completed'); });
    $("#eaDisclosureActions-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaDisclosureActions').addClass('completed'); });
    $("#eaHumanRights-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaHumanRights').addClass('completed'); });
    $("#eaCaseAdvocate-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaCaseAdvocate').addClass('completed'); });

    $("input[name=eaHumanRightsRadio]").on("change", function (e) { 
        if ($('input[id=eaHumanRightsRadio-Yes]').is(':checked')) {
            $('.eaHumanRights-Panel').show();
        } else if ($('input[id=eaHumanRightsRadio-No]').is(':checked')) {
            $('.eaHumanRights-Panel').hide();
        }      
    });

    $("input[name=eaCaseMonitoring_Checkboxes]").on("change", function (e) { 
        $('nav.tube-map-ea ul li.eaCaseMonitoring').addClass('completed');
        if ($('input[id=eaCaseMonitoring_Checkboxes-5]').is(':checked')) {
            $('.eaCaseRelationship').show();
            $('#eaCaseMonitoring-Continue').attr('onClick','return eaCaseRelationship();');
        } else {
            $('.eaCaseRelationship').hide();
            $('#eaCaseMonitoring-Continue').attr('onClick','return eaPreview();');        
        }      
    });

    $("input[name=eaCaseMonitoring_Checkboxes-V2]").on("change", function (e) { 
        $('nav.tube-map-ea ul li.eaCaseMonitoring').addClass('completed');
    });

    $("input[name=eaCaseRelationship-Type]").on("change", function (e) { 
        $('nav.tube-map-ea ul li.eaCaseRelationship').addClass('completed');
        $('#eaCaseRelationship-Sex').show();
        $('#domesticAbuse').show();

        var relationshipType = $("input[name=eaCaseRelationship-Type]:checked").val();
        $('.relationship').append(relationshipType);
    });

    $("input[name=eaCaseRelationship-Sex]").on("change", function (e) { 
        $('#domesticAbuse-Relationship').show();

        var relationshipSex = $("input[name=eaCaseRelationship-Sex]:checked").val();
        $('.sexRelationship').append(relationshipSex);
    });

})

// 1
function eaCaseSummary() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaCaseSummary').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaCaseSummary').addClass('show-panel');
}

// 2
function eaEvidentialAanalysis() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaEvidentialAanalysis').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaEvidentialAanalysis').addClass('show-panel');
}

// 3
function eaPublicInterestAssesment() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaPublicInterestAssesment').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaPublicInterestAssesment').addClass('show-panel');
}

// 4
function eaWitnessVictim() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaWitnessVictim').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaWitnessVictim').addClass('show-panel');
}

// 5
function eaTrialStrategy() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaTrialStrategy').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaTrialStrategy').addClass('show-panel');
}

// 6
function eaAllocation() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaAllocation').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaAllocation').addClass('show-panel');
}

// 7
function eaDisclosureActions() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaDisclosureActions').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaDisclosureActions').addClass('show-panel');
}

// 8 
function eaHumanRights() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaHumanRights').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaHumanRights').addClass('show-panel');
}

// 9 
function eaCaseAdvocate() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaCaseAdvocate').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaCaseAdvocate').addClass('show-panel');
}

// 10A 
function eaCaseMonitoring() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaCaseMonitoring').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaCaseMonitoring').addClass('show-panel');
}

// 10B 
function eaCaseRelationship() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaCaseRelationship').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaCaseRelationship').addClass('show-panel');
}

// 11
function eaPreview() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaPreview').addClass('selected');

    $('.ea-content-panel').removeClass('show-panel');
    $('#eaPreview').addClass('show-panel');

    var eaCaseSummary = $('#eaCaseSummary-Editor').html();
    if (eaCaseSummary.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Case summary</strong><br>` + eaCaseSummary + `<br><br>`); }

    var eaEvidentialAanalysis = $('#eaEvidentialAanalysis-Editor').html();
    if (eaEvidentialAanalysis.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Evidential analysis</strong><br>` + eaEvidentialAanalysis + `<br><br>`); }

    var eaPublicInterestAssesment = $('#eaPublicInterestAssesment-Editor').html();
    if (eaPublicInterestAssesment.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Public interest assessment</strong><br>` + eaPublicInterestAssesment + `<br><br>`); }

    var eaWitnessVictim = $('#eaWitnessVictim-Editor').html();
    if (eaWitnessVictim.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Witness and victim strategy</strong><br>` + eaWitnessVictim + `<br><br>`); }
    
    var eaTrialStrategy = $('#eaTrialStrategy-Editor').html();
    if (eaTrialStrategy.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Trial Strategy</strong><br>` + eaTrialStrategy + `<br><br>`); }

    var eaAllocation = $('#eaAllocation-Editor').html();
    if (eaAllocation.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Allocation</strong><br>` + eaAllocation + `<br><br>`); }
    
    var eaDisclosureActions = $('#eaDisclosureActions-Editor').html();
    if (eaDisclosureActions.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Disclosure</strong><br>` + eaDisclosureActions + `<br><br>`); }
    
    var eaHumanRights = $('#eaHumanRights-Editor').html();
    if (eaHumanRights.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Human rights factors</strong><br>` + eaHumanRights + `<br><br>`); }

    var eaCaseAdvocate = $('#eaCaseAdvocate-Editor').html();
    if (eaCaseAdvocate.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Advocate and op.delivery instructions</strong><br>` + eaCaseAdvocate + `<br><br>`); }

    // Monitoring codes
    if ($('input[name="eaCaseMonitoring_Checkboxes"]:checked').length >= 2 || $('input[name="eaCaseMonitoring_Checkboxes-V2"]:checked').length >= 1) {
        $('.monitoringCodes').show();
    } else {
        $('.monitoringCodes').hide();
    }

    if ($('input[name="eaCaseMonitoring_Checkboxes"]:checked').length >= 2) {
        $('.monitoringCodes .global-codes').show();
    } else if ($('input[name="eaCaseMonitoring_Checkboxes"]:checked').length == 1) {
        $('.monitoringCodes .global-codes').hide();
    }      

    if ($('input[name="eaCaseMonitoring_Checkboxes-V2"]:checked').length >= 1) {
        $('.monitoringCodes .local-codes').show();
    } else if ($('input[name="eaCaseMonitoring_Checkboxes-V2"]:checked').length == 0) {
        $('.monitoringCodes .local-codes').hide();
    }   

    // Global codes
    if ($('input[id=eaCaseMonitoring_Checkboxes-1]').is(':checked')) { $('.monitoringCodes .global-codes').append('Asset recovery' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-2]').is(':checked')) { $('.monitoringCodes .global-codes').append('Child abuse' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-3]').is(':checked')) { $('.monitoringCodes .global-codes').append('Crime against an older person' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-4]').is(':checked')) { $('.monitoringCodes .global-codes').append('Disability hate crime' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-5]').is(':checked')) { $('.monitoringCodes .global-codes').append('Domestic abuse' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-6]').is(':checked')) { $('.monitoringCodes .global-codes').append('DA specialist court' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-7]').is(':checked')) { $('.monitoringCodes .global-codes').append('Extraordinary event' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-8]').is(':checked')) { $('.monitoringCodes .global-codes').append('Fatality' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-9]').is(':checked')) { $('.monitoringCodes .global-codes').append('Forced marriage' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-10]').is(':checked')) { $('.monitoringCodes .global-codes').append('GAP' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-11]').is(':checked')) { $('.monitoringCodes .global-codes').append('Homophobic' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-12]').is(':checked')) { $('.monitoringCodes .global-codes').append('Honour crime' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-13]').is(':checked')) { $('.monitoringCodes .global-codes').append('Human trafficking' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-14]').is(':checked')) { $('.monitoringCodes .global-codes').append('Identified victim' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-15]').is(':checked')) { $('.monitoringCodes .global-codes').append('Joint enterprise' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-16]').is(':checked')) { $('.monitoringCodes .global-codes').append('Media interest' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-17]').is(':checked')) { $('.monitoringCodes .global-codes').append('Mental health' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-18]').is(':checked')) { $('.monitoringCodes .global-codes').append('Nationality bar' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-19]').is(':checked')) { $('.monitoringCodes .global-codes').append('NGAP' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-20]').is(':checked')) { $('.monitoringCodes .global-codes').append('Op Venetic' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-21]').is(':checked')) { $('.monitoringCodes .global-codes').append('Police complaints' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-22]').is(':checked')) { $('.monitoringCodes .global-codes').append('Pre-charge decision' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-23]').is(':checked')) { $('.monitoringCodes .global-codes').append('Prohibited weapons' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-24]').is(':checked')) { $('.monitoringCodes .global-codes').append('PTWI referral' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-25]').is(':checked')) { $('.monitoringCodes .global-codes').append('Racist crime' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-26]').is(':checked')) { $('.monitoringCodes .global-codes').append('Racist/religious incident' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-27]').is(':checked')) { $('.monitoringCodes .global-codes').append('Rape' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-28]').is(':checked')) { $('.monitoringCodes .global-codes').append('Religious crime' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-29]').is(':checked')) { $('.monitoringCodes .global-codes').append('Substantial charge alteration' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-30]').is(':checked')) { $('.monitoringCodes .global-codes').append('Transphobic' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-31]').is(':checked')) { $('.monitoringCodes .global-codes').append('Vulnerable/intimidated victim' + '<br>'); }

    // Local codes
    if ($('input[id=eaCaseMonitoring_Checkboxes-A]').is(':checked')) { $('.monitoringCodes .local-codes').append('Drug confiscation' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-B]').is(':checked')) { $('.monitoringCodes .local-codes').append('Football hooliganism' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-C]').is(':checked')) { $('.monitoringCodes .local-codes').append('Hoax bomb phone calls' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-D]').is(':checked')) { $('.monitoringCodes .local-codes').append('Infanticide' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-E]').is(':checked')) { $('.monitoringCodes .local-codes').append('Medicinal cannabis' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-F]').is(':checked')) { $('.monitoringCodes .local-codes').append('Murder' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-G]').is(':checked')) { $('.monitoringCodes .local-codes').append('RTA fatality' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-H]').is(':checked')) { $('.monitoringCodes .local-codes').append('Victim focus' + '<br>'); }

}

function saveCR() {
    $.cookie("eaCaseSummary", $('#eaCaseSummary-Editor').html(), {path:'/'});
    $.cookie("eaEvidentialAanalysis", $('#eaEvidentialAanalysis-Editor').html(), {path:'/'});
    $.cookie("eaPublicInterestAssesment", $('#eaPublicInterestAssesment-Editor').html(), {path:'/'});
    $.cookie("eaWitnessVictim", $('#eaWitnessVictim-Editor').html(), {path:'/'});
    $.cookie("eaTrialStrategy", $('#eaTrialStrategy-Editor').html(), {path:'/'});
    $.cookie("eaAllocation", $('#eaAllocation-Editor').html(), {path:'/'});
    $.cookie("eaDisclosureActions", $('#eaDisclosureActions-Editor').html(), {path:'/'});
    $.cookie("eaHumanRights", $('#eaHumanRights-Editor').html(), {path:'/'});
    $.cookie("eaCaseAdvocate", $('#eaCaseAdvocate-Editor').html(), {path:'/'});
    $.cookie("eaCaseMonitoring", $('#eaCaseMonitoring-Editor').html(), {path:'/'});
    $.cookie("eaCaseRelationship", $('#eaCaseRelationship-Editor').html(), {path:'/'});
}

$(document).ready(function () {

    // CR
    if ($.cookie("eaCaseSummary") || $.cookie("eaEvidentialAanalysis") || $.cookie("eaPublicInterestAssesment") || $.cookie("eaWitnessVictim") || $.cookie("eaTrialStrategy") || $.cookie("eaAllocation") || $.cookie("eaDisclosureActions") || $.cookie("eaHumanRights") || $.cookie("eaCaseAdvocate") || $.cookie("eaCaseMonitoring") || $.cookie("eaCaseRelationship")) {
        $('#ea-NotAvailable').hide();
        // $('#ea-available').show();
    } else {
        $('#ea-NotAvailable').show();
        // $('#ea-available').hide();
    }

    // 1 - Case summary
    if ($.cookie("eaCaseSummary") == '' || $.cookie("eaCaseSummary") == 'undefined') {
        $('#eaCaseSummary-Content').hide();
    } else if ($.cookie("eaCaseSummary")) { 
        $('#eaCaseSummary-Content').show(); $('#eaCaseSummary-Content td').append($.cookie("eaCaseSummary")); 
        $('.cr-description').append('a case summary, ');
    } 

    // 2 - Evidential analysis
    if ($.cookie("eaEvidentialAanalysis") == '' || $.cookie("eaEvidentialAanalysis") == 'undefined') {
        $('#eaEvidentialAanalysis-Content').hide();
    } else if ($.cookie("eaEvidentialAanalysis")) { 
        $('#eaEvidentialAanalysis-Content').show(); $('#eaEvidentialAanalysis-Content td').append($.cookie("eaEvidentialAanalysis")); 
        $('.cr-description').append('an Evidential analysis, ');
    }  

    // 3 - Public interest assessment
    if ($.cookie("eaPublicInterestAssesment") == '' || $.cookie("eaPublicInterestAssesment") == 'undefined') {
        $('#eaPublicInterestAssesment-Content').hide();
    } else if ($.cookie("eaPublicInterestAssesment")) { 
        $('#eaPublicInterestAssesment-Content').show(); $('#eaPublicInterestAssesment-Content td').append($.cookie("eaPublicInterestAssesment")); 
        $('.cr-description').append('a public interest assessment, ');
    }

    // 4 - Witness and victim strategy
    if ($.cookie("eaWitnessVictim") == '' || $.cookie("eaWitnessVictim") == 'undefined') {
        $('#eaWitnessVictim-Content').hide();
    } else if ($.cookie("eaWitnessVictim")) { 
        $('#eaWitnessVictim-Content').show(); $('#eaWitnessVictim-Content td').append($.cookie("eaWitnessVictim")); 
        $('.cr-description').append('a Witness and victim strategy, ');
    } 

    // 5 - Trial strategy
    if ($.cookie("eaTrialStrategy") == '' || $.cookie("eaTrialStrategy") == 'undefined') {
        $('#eaTrialStrategy-Content').hide();
    } else if ($.cookie("eaTrialStrategy")) { 
        $('#eaTrialStrategy-Content').show(); $('#eaTrialStrategy-Content td').append($.cookie("eaTrialStrategy")); 
        $('.cr-description').append('a Trial strategy, ');
    } 

    // 6 - Allocation
    if ($.cookie("eaAllocation") == '' || $.cookie("eaAllocation") == 'undefined') {
        $('#eaAllocation-Content').hide();
    } else if ($.cookie("eaAllocation")) { 
        $('#eaAllocation-Content').show(); $('#eaAllocation-Content td').append($.cookie("eaAllocation")); 
        $('.cr-description').append('a Allocation, ');
    } 

    // 7 - Disclosure
    if ($.cookie("eaDisclosureActions") == '' || $.cookie("eaDisclosureActions") == 'undefined') {
        $('#eaDisclosureActions-Content').hide();
    } else if ($.cookie("eaDisclosureActions")) { 
        $('#eaDisclosureActions-Content').show(); $('#eaDisclosureActions-Content td').append($.cookie("eaDisclosureActions")); 
        $('.cr-description').append('a Disclosure, ');
    } 

    // 8 - Human rights factors
    if ($.cookie("eaHumanRights") == '' || $.cookie("eaHumanRights") == 'undefined') {
        $('#eaHumanRights-Content').hide();
    } else if ($.cookie("eaHumanRights")) { 
        $('#eaHumanRights-Content').show(); $('#eaHumanRights-Content td').append($.cookie("eaHumanRights")); 
        $('.cr-description').append('a Human rights factor, ');
    } 

    // 9 - Advocate and op.delivery instructions
    if ($.cookie("eaCaseAdvocate") == '' || $.cookie("eaCaseAdvocate") == 'undefined') {
        $('#eaCaseAdvocate-Content').hide();
    } else if ($.cookie("eaCaseAdvocate")) { 
        $('#eaCaseAdvocate-Content').show(); $('#eaCaseAdvocate-Content td').append($.cookie("eaCaseAdvocate")); 
        $('.cr-description').append('a Advocate and op.delivery instruction, ');
    } 

    // 10A - Monitoring codes
    if ($.cookie("eaCaseMonitoring") == '' || $.cookie("eaCaseMonitoring") == 'undefined') {
        $('#eaCaseMonitoring-Content').hide();
    } else if ($.cookie("eaCaseMonitoring")) { 
        $('#eaCaseMonitoring-Content').show(); $('#eaCaseMonitoring-Content td').append($.cookie("eaCaseMonitoring")); 
        $('.cr-description').append('a Monitoring code, ');
    } 

    // 10B - Victim-suspect relationship
    if ($.cookie("eaCaseRelationship") == '' || $.cookie("eaCaseRelationship") == 'undefined') {
        $('#eaCaseRelationship-Content').hide();
    } else if ($.cookie("eaCaseRelationship")) { 
        $('#eaCaseRelationship-Content').show(); $('#eaCaseRelationship-Content td').append($.cookie("eaCaseRelationship")); 
        $('.cr-description').append('a Victim-suspect relationship, ');
    } 

})

function openCR() {
    $('#crModal').removeClass('rj-dont-display');
}
function closeCRModal() {
    $('#crModal').addClass('rj-dont-display');
}

$(document).ready(function () {
    $("#hidden-row, #hidden-row_V2, .hide-table-link, .hide-table-link_V2").hide();

    $(".preview-table-link").on("click", function (e) { 
        e.preventDefault();
        $(this).hide();
        $(this).parent().find('.hide-table-link').show();
        $(this).closest('.section-content').find('#hidden-row').show();
        $(this).parent().parent().addClass('open');
    });

    $(".hide-table-link").on("click", function (e) { 
        e.preventDefault();
        $(this).hide();
        $(this).parent().find('.preview-table-link').show();
        $(this).closest('.section-content').find('#hidden-row').hide();
        $(this).parent().parent().removeClass('open');
    });

    $(".preview-table-link_V2").on("click", function (e) { 
        e.preventDefault();
        $(this).hide();
        $(this).parent().find('.hide-table-link_V2').show();
        $(this).closest('.section-content').find('#hidden-row_V2').show();
        $(this).parent().parent().addClass('open');
    });

    $(".hide-table-link_V2").on("click", function (e) { 
        e.preventDefault();
        $(this).hide();
        $(this).parent().find('.preview-table-link_V2').show();
        $(this).closest('.section-content').find('#hidden-row_V2').hide();
        $(this).parent().parent().removeClass('open');
    });
});

// ========================= Create EA Report ========================= //
$(document).ready(function () {
    // EA - V1
    $("#ea2Introduction-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Introduction').addClass('completed'); $('nav.tube-map-ea ul li.ea2Preview').addClass('completed'); });
    $("#ea2Materials-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Materials').addClass('completed'); $('nav.tube-map-ea ul li.ea2Preview').addClass('completed'); });
    $("#ea2Summary-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Summary').addClass('completed'); $('nav.tube-map-ea ul li.ea2Preview').addClass('completed'); });
    $("#ea2Law-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Law').addClass('completed'); $('nav.tube-map-ea ul li.ea2Preview').addClass('completed'); });
    $("#ea2NextSteps-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2NextSteps').addClass('completed'); $('nav.tube-map-ea ul li.ea2Preview').addClass('completed'); });

    // EA - V2
    $("#ea2Part1-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Part1').addClass('completed'); $('nav.tube-map-ea ul li.ea2Part8').addClass('completed'); });
    $("#ea2Part2-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Part2').addClass('completed'); $('nav.tube-map-ea ul li.ea2Part8').addClass('completed'); });
    $("#ea2Part3-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Part3').addClass('completed'); $('nav.tube-map-ea ul li.ea2Part8').addClass('completed'); });
    $("#ea2Part4-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Part4').addClass('completed'); $('nav.tube-map-ea ul li.ea2Part8').addClass('completed'); });
    $("#ea2Part5-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Part5').addClass('completed'); $('nav.tube-map-ea ul li.ea2Part8').addClass('completed'); });
    $("#ea2Part6-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Part6').addClass('completed'); $('nav.tube-map-ea ul li.ea2Part8').addClass('completed'); });
    $("#ea2Part7-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Part7').addClass('completed'); $('nav.tube-map-ea ul li.ea2Part8').addClass('completed'); });

    // Upload
    $("#upload_EA").on("click", function (e) { 
        var numberOfReviews = parseInt($('.ea-number').html());

        setTimeout(function () {
            $('.ea-number').html(numberOfReviews + 1);
            // $('#ea-available').show();
            $('#ea-NotAvailable').hide();
            $('#ea-available').prepend(`
                <div class="hods-timeline__item" id="">
                    <table class="govuk-table govuk-!-margin-bottom-0">
                        <tbody class="govuk-table__body">
                            <tr class="govuk-table__row">
                                <th scope="row" class="govuk-table__header">
                                    <a onclick="return openEA();" id="">EIA-Template-V1-2024.docm</a><br>
                                    <span class="added-by">created by user.name@cps.gov.uk, today at 12:05pm</span><br>
                                    <strong class="govuk-tag govuk-tag--green govuk-!-margin-top-2">Document</strong>
                                    <strong class="govuk-tag govuk-tag--grey govuk-!-margin-top-2">Version 1</strong>
                                </th>
                                <td class="govuk-table__cell">
                                    <button type="submit" data-module="govuk-button" class="govuk-link govuk-link--no-visited-state" onclick="return openEA();">View</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `);
        }, 2500)
    });

})

function ea2Introduction() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Introduction').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Introduction').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2Part1() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Part1').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Part1').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2Materials() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Materials').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Materials').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2Part2() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Part2').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Part2').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2Summary() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Summary').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Summary').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2Part3() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Part3').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Part3').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2Law() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Law').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Law').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2Part4() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Part4').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Part4').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2NextSteps() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2NextSteps').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2NextSteps').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2Part5() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Part5').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Part5').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2Part6() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Part6').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Part6').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2Part7() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Part7').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Part7').addClass('show-panel');
    window.scrollTo(0, 0);
}

function ea2Preview() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Preview').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Preview').addClass('show-panel');
    window.scrollTo(0, 0);

    var ea2Introduction = $('#ea2Introduction-Editor').html();
    if (ea2Introduction.length >= 1 ) { $('#ea2Preview-Preview').append(`<strong>Introduction</strong><br>` + ea2Introduction + `<br><br>`); }

    var ea2Materials = $('#ea2Materials-Editor').html();
    if (ea2Materials.length >= 1 ) { $('#ea2Preview-Preview').append(`<strong>List of given materials</strong><br>` + ea2Materials + `<br><br>`); }

    var ea2Summary = $('#ea2Summary-Editor').html();
    if (ea2Summary.length >= 1 ) { $('#ea2Preview-Preview').append(`<strong>Summary of Advice</strong><br>` + ea2Summary + `<br><br>`); }

    var ea2Law = $('#ea2Law-Editor').html();
    if (ea2Law.length >= 1 ) { $('#ea2Preview-Preview').append(`<strong>Law</strong><br>` + ea2Law + `<br><br>`); }

    var ea2NextSteps = $('#ea2NextSteps-Editor').html();
    if (ea2NextSteps.length >= 1 ) { $('#ea2Preview-Preview').append(`<strong>Next steps</strong><br>` + ea2NextSteps + `<br><br>`); }

}

function ea2Part8() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Part8').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Part8').addClass('show-panel');
    window.scrollTo(0, 0);

    var ea2Part1 = $('#ea2Part1-Editor').html();
    if (ea2Part1.length >= 1 ) { $('#ea2Part8-Preview').append(`<strong>Background</strong><br>` + ea2Part1 + `<br><br>`); }

    var ea2Part2 = $('#ea2Part2-Editor').html();
    if (ea2Part2.length >= 1 ) { $('#ea2Part8-Preview').append(`<strong>Offences considered</strong><br>` + ea2Part2 + `<br><br>`); }

    var ea2Part3 = $('#ea2Part3-Editor').html();
    if (ea2Part3.length >= 1 ) { $('#ea2Part8-Preview').append(`<strong>Relevant law/legal lonsiderations</strong><br>` + ea2Part3 + `<br><br>`); }

    var ea2Part4 = $('#ea2Part4-Editor').html();
    if (ea2Part4.length >= 1 ) { $('#ea2Part8-Preview').append(`<strong>Summary of evidence Considered</strong><br>` + ea2Part4 + `<br><br>`); }

    var ea2Part5 = $('#ea2Part5-Editor').html();
    if (ea2Part5.length >= 1 ) { $('#ea2Part8-Preview').append(`<strong>Disclosure considerations</strong><br>` + ea2Part5 + `<br><br>`); }

    var ea2Part6 = $('#ea2Part6-Editor').html();
    if (ea2Part6.length >= 1 ) { $('#ea2Part8-Preview').append(`<strong>Advice and assessement of evidence</strong><br>` + ea2Part6 + `<br><br>`); }

    var ea2Part7 = $('#ea2Part7-Editor').html();
    if (ea2Part7.length >= 1 ) { $('#ea2Part8-Preview').append(`<strong>Action plan/line of enquiry</strong><br>` + ea2Part7 + `<br><br>`); }

}

function saveCA() {
    // EA - V1
    $.cookie("ea2IntroductionContent", $('#ea2Introduction-Editor').html(), {path:'/'});
    $.cookie("ea2MaterialsContent", $('#ea2Materials-Editor').html(), {path:'/'});
    $.cookie("ea2SummaryContent", $('#ea2Summary-Editor').html(), {path:'/'});
    $.cookie("ea2LawContent", $('#ea2Law-Editor').html(), {path:'/'});
    $.cookie("ea2NextStepsContent", $('#ea2NextSteps-Editor').html(), {path:'/'});

    // EA - V2
    $.cookie("ea2Part1Content", $('#ea2Part1-Editor').html(), {path:'/'});
    $.cookie("ea2Part2Content", $('#ea2Part2-Editor').html(), {path:'/'});
    $.cookie("ea2Part3Content", $('#ea2Part3-Editor').html(), {path:'/'});
    $.cookie("ea2Part4Content", $('#ea2Part4-Editor').html(), {path:'/'});
    $.cookie("ea2Part5Content", $('#ea2Part5-Editor').html(), {path:'/'});
    $.cookie("ea2Part6Content", $('#ea2Part6-Editor').html(), {path:'/'});
    $.cookie("ea2Part7Content", $('#ea2Part7-Editor').html(), {path:'/'});
    $.cookie("ea2Part8Content", $('#ea2Part8-Editor').html(), {path:'/'});
}

$(document).ready(function () {

    // EA - V1
    if ($.cookie("ea2IntroductionContent") || $.cookie("ea2MaterialsContent") || $.cookie("ea2SummaryContent") || $.cookie("ea2LawContent") || $.cookie("ea2NextStepsContent")) {
        $('#ea-NotAvailable').hide();
        // $('#ea-available').show();
    } else {
        $('#ea-NotAvailable').show();
        // $('#ea-available').hide();
    }

    // 1 - Introduction
    if ($.cookie("ea2IntroductionContent") == '' || $.cookie("ea2IntroductionContent") == 'undefined') {
        $('#ea2Introduction-Content').hide();
    } else if ($.cookie("ea2IntroductionContent")) { 
        $('#ea2Introduction-Content').show(); $('#ea2Introduction-Content td').append($.cookie("ea2IntroductionContent")); 
        $('.ea-description').append('an introduction, ');
    } 

    // 2 - List of given materials
    if ($.cookie("ea2MaterialsContent") == '' || $.cookie("ea2MaterialsContent") == 'undefined') {
        $('#ea2Materials-Content').hide();
    } else if ($.cookie("ea2MaterialsContent")) { 
        $('#ea2Materials-Content').show(); $('#ea2Materials-Content td').append($.cookie("ea2MaterialsContent")); 
        $('.ea-description').append('a list of given materials,');
    }  

    // 3 - Summary of Advice
    if ($.cookie("ea2SummaryContent") == '' || $.cookie("ea2SummaryContent") == 'undefined') {
        $('#ea2Summary-Content').hide();
    } else if ($.cookie("ea2SummaryContent")) { 
        $('#ea2Summary-Content').show(); $('#ea2Summary-Content td').append($.cookie("ea2SummaryContent")); 
        $('.ea-description').append('a summary of Advice, ');
    }

    // 4 - Law
    if ($.cookie("ea2LawContent") == '' || $.cookie("ea2LawContent") == 'undefined') {
        $('#ea2Law-Content').hide();
    } else if ($.cookie("ea2LawContent")) { 
        $('#ea2Law-Content').show(); $('#ea2Law-Content td').append($.cookie("ea2LawContent")); 
        $('.ea-description').append('a description of law, ');
    } 

    // 5 - Next steps
    if ($.cookie("ea2NextStepsContent") == '' || $.cookie("ea2NextStepsContent") == 'undefined') {
        $('#ea2NextSteps-Content').hide();
    } else if ($.cookie("ea2NextStepsContent")) { 
        $('#ea2NextSteps-Content').show(); $('#ea2NextSteps-Content td').append($.cookie("ea2NextStepsContent")); 
        $('.ea-description').append('some next steps, ');
    } 

    // EA - V2
    if ($.cookie("ea2Part1Content") || $.cookie("ea2Part2Content") || $.cookie("ea2Part3Content") || $.cookie("ea2Part4Content") || $.cookie("ea2Part5Content") || $.cookie("ea2Part6Content") || $.cookie("ea2Part7Content")) {
        $('#ea-NotAvailable').hide();
        // $('#ea-available').show();
        $('#ea_Digital').show();
    } else {
        $('#ea-NotAvailable').show();
        // $('#ea-available').hide();
        $('#ea_Digital').hide();
    }

    // 1 - Background
    if ($.cookie("ea2Part1Content") == '' || $.cookie("ea2Part1Content") == 'undefined') {
        $('#ea2Part1-Content').hide();
    } else if ($.cookie("ea2Part1Content")) { 
        $('#ea2Part1-Content').show(); $('#ea2Part1-Content td').append($.cookie("ea2Part1Content")); 
        $('.ea-description').append(`<li>a background</li>`);
    } 

    // 2 - Offences considered
    if ($.cookie("ea2Part2Content") == '' || $.cookie("ea2Part2Content") == 'undefined') {
        $('#ea2Part2-Content').hide();
    } else if ($.cookie("ea2Part2Content")) { 
        $('#ea2Part2-Content').show(); $('#ea2Part2-Content td').append($.cookie("ea2Part2Content")); 
        $('.ea-description').append(`<li>offences considered</li>`);
    }  

    // 3 - Relevant Law/Legal Considerations
    if ($.cookie("ea2Part3Content") == '' || $.cookie("ea2Part3Content") == 'undefined') {
        $('#ea2Part3-Content').hide();
    } else if ($.cookie("ea2Part3Content")) { 
        $('#ea2Part3-Content').show(); $('#ea2Part3-Content td').append($.cookie("ea2Part3Content")); 
        $('.ea-description').append(`<li>relevant law/legal considerations</li>`);
    }

    // 4 - Summary of Evidence Considered
    if ($.cookie("ea2Part4Content") == '' || $.cookie("ea2Part4Content") == 'undefined') {
        $('#ea2Part4-Content').hide();
    } else if ($.cookie("ea2Part4Content")) { 
        $('#ea2Part4-Content').show(); $('#ea2Part4-Content td').append($.cookie("ea2Part4Content")); 
        $('.ea-description').append(`<li>a summary of evidence considered</li>`);
    } 

    // 5 - Disclosure considerations
    if ($.cookie("ea2Part5Content") == '' || $.cookie("ea2Part5Content") == 'undefined') {
        $('#ea2Part5-Content').hide();
    } else if ($.cookie("ea2Part5Content")) { 
        $('#ea2Part5-Content').show(); $('#ea2Part5-Content td').append($.cookie("ea2Part5Content")); 
        $('.ea-description').append(`<li>some disclosure considerations</li>`);
    } 

    // 6 - Advice and assessement of evidence
    if ($.cookie("ea2Part6Content") == '' || $.cookie("ea2Part6Content") == 'undefined') {
        $('#ea2Part6-Content').hide();
    } else if ($.cookie("ea2Part6Content")) { 
        $('#ea2Part6-Content').show(); $('#ea2Part6-Content td').append($.cookie("ea2Part6Content")); 
        $('.ea-description').append(`<li>advice and assessement of evidence</li>`);
    } 

    // 7 - Action plan/line of enquiry
    if ($.cookie("ea2Part7Content") == '' || $.cookie("ea2Part7Content") == 'undefined') {
        $('#ea2Part7-Content').hide();
    } else if ($.cookie("ea2Part7Content")) { 
        $('#ea2Part7-Content').show(); $('#ea2Part7-Content td').append($.cookie("ea2Part7Content")); 
        $('.ea-description').append(`<li>action plan/line of enquiry</li>`);
    } 

})

function openEA() {
    $('#eaModal').removeClass('rj-dont-display');
}
function closeEAModal() {
    $('#eaModal').addClass('rj-dont-display');
}

// ========================= CASE PROGRESSION ========================= //
function toggleCaseProgression() {
    $('.moj-button-menu__wrapper').toggle();
}

// ========================= EMAILS ========================= //
function showEmail1() {
    $('.email-wrapper').hide();
    $('.email-wrapper#email1').show();
    $('table#emailTable tr td').removeClass('activeDocument');
    $('table#emailTable tr td strong.govuk-tag').hide();
    $('table#emailTable tr td#emailLink1').addClass('activeDocument');
    $('table#emailTable tr td strong.govuk-tag').hide();
    $('table#emailTable tr td#emailLink1 strong.govuk-tag').show();
}

function showEmail2() {
    $('.email-wrapper').hide();
    $('.email-wrapper#email2').show();
    $('table#emailTable tr td').removeClass('activeDocument');
    $('table#emailTable tr td#emailLink2').addClass('activeDocument').removeClass('unreadDocument');
    $('table#emailTable tr td strong.govuk-tag').hide();
    $('table#emailTable tr td#emailLink2 strong.govuk-tag').show();
}

// ========================= ADD SUSPECT ========================= //

$(document).ready(function () {
    $('.add-suspect-continue, #addSuspect_CompanyDetails-error, #addSuspect_Errors, #addSuspect_Details-error, .addSuspect_Errors-CompanyName').hide();

    $("input[name=addSuspect_Details]").on("change", function (e) { 
        if ($('input[id=addSuspect_Details_Person]').is(':checked')) {
            $('.add-suspect-error, #addSuspect_Errors, .addSuspect_Errors-Type, #addSuspect_Details-error').hide(); 
            $('.add-suspect-continue').show();
            $('#addSuspect_Form-A').attr('action','9B-add-suspect');
        } else if ($('input[id=addSuspect_Details_Company]').is(':checked')) {
            // $('.add-suspect-error, #addSuspect_Errors, .addSuspect_Errors-Type, #addSuspect_Details-error').show(); 
            $('.add-suspect-error').show();
            $('.add-suspect-continue').hide();
            $('.addSuspect_Errors-CompanyName').show();
        }
    });

    $("#addSuspect_CompanyName").on("keyup", function (e) { 
        if ($(this).length >= 1) {
            $('#addSuspect_Form-A').attr('action','5-case-overview#suspectsTab');
            $('.add-suspect-error').hide();
            $('.add-suspect-continue').show();
        } else {
            $('#addSuspect_Form-A').removeAttr('action');
            $('.add-suspect-error').show();
            $('.add-suspect-continue').hide();
        }
    });

    $("#addSuspect_ErrorActivate").on("click", function (e) { 
        $('#addSuspect_Errors, .addSuspect_Errors-Type, #addSuspect_Details-error').show(); 
        $('#addSuspect_Details-Type').addClass('govuk-form-group--error');
        if ($('input[id=addSuspect_Details_Company]').is(':checked')) {
            $('.addSuspect_Errors-Type, #addSuspect_Details-error').hide();
            $('#addSuspect_CompanyName').addClass('govuk-input--error');
            $('#addSuspect_CompanyDetails-error').show();
        }
    });

    $("#addSuspect_Form-DOB-Year").on("keyup", function (e) { 
        if ($(this).val() < '2007') {
            $('#addSuspect_Form_YouthOffender').removeAttr('checked');
            $('#addSuspect_Form-Type-YO').removeAttr('checked');
        } else if ($(this).val() >= '2007') { 
            $('#addSuspect_Form_YouthOffender').attr('checked','checked');
            $('#addSuspect_Form-Type-YO').attr('checked','checked');
        } 
    }); 

    // All items
    $(".preview-all-link").hide();

    $(".preview-all-link").on("click", function (e) { 
        e.preventDefault();
        $(this).hide();
        $('.hide-all-link').show();
        $('.suspects-details-wrapper').show();
        $(".preview-link").hide();
        $(".hide-link").show();
        $('.suspects-details').addClass('open');
    });

    $(".hide-all-link").on("click", function (e) { 
        e.preventDefault();
        $(this).hide();
        $('.preview-all-link').show();
        $('.suspects-details-wrapper').hide().removeClass('open');
        $(".preview-link").show();
        $(".hide-link").hide();
        $('.suspects-details').removeClass('open');
    });

    // One by one
    $(".preview-link").hide();

    $(".preview-link").on("click", function (e) { 
        $(this).hide();
        $(this).parent().find('.hide-link').show();
        $(this).parent().parent().find('.suspects-details-wrapper').show();
        $(this).parent().parent().addClass('open');
    });

    $(".hide-link").on("click", function (e) { 
        $(this).hide();
        $(this).parent().find('.preview-link').show();
        $(this).parent().parent().find('.suspects-details-wrapper').hide();
        $(this).parent().parent().removeClass('open');
    });

    $('#addSuspect_Form-TypeHidden').hide();

    $("input[name=addSuspect_Form-Type]").on("change", function (e) { 
        if ($('input[id=addSuspect_Form-Type-YO]').is(':checked') || $('input[id=addSuspect_Form-Type-PYO]').is(':checked') ||  $('input[id=addSuspect_Form-Type-Both]').is(':checked')) {
            $('#addSuspect_Form-TypeHidden').show();
        } else {
            $('#addSuspect_Form-TypeHidden').hide();
        }
    }); 

    $("input[id=addSuspect_Form-Aliases]").on("change", function (e) { 
        if ($(this).is(':checked')) {
            $('#addSuspect_Form-B').attr('action','9C-add-suspect');
        } else {
            $('#addSuspect_Form-B').attr('action','5-case-overview#suspectsTab');
        }
    });
    
})

function closeConfirmRemoveSuspect() {
    $('#confirmRemoveSuspect').addClass('rj-dont-display');
    $('.suspects-details').removeClass('removeSuspect');
}

$(document).ready(function () {
    $('#aliasesDetails-2, #aliasesDetails-3, #aliasesDetails-4, #aliasesDetails-5').hide();

    $(".removeSuspect").on("click", function (e) { 
        $('#confirmRemoveSuspect').removeClass('rj-dont-display');
        $(this).closest('.suspects-details').addClass('removeSuspect');

        var suspectName = $(this).closest('.suspects-details').find('.name_Wrapper').text();
        $('.suspectRemove').text(suspectName);
    });

    $("input[id=offCMS_Remove_Suspect]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-RemoveSuspects').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmRemoveSuspects();');
        } else {
            $('#confirm-RemoveSuspects').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

    $("#confirm-RemoveSuspects").on("click", function (e) {
        var suspectsNumber = parseInt($('.suspects-number').text()); 
        if ($('input[id=offCMS_Remove_Suspect]').is(':checked')) { 
            $('.suspects-number').text(suspectsNumber - 1);
            var suspectsNumberNew = parseInt($('.suspects-number').text()); 
            if (suspectsNumberNew <= 0) {
                $('.suspects-number').addClass('zero');
            }
        }
    });
})

function confirmRemoveSuspects() {
    $('.suspects-details.removeSuspect').hide();
    $('#confirmRemoveSuspect').addClass('rj-dont-display');
}

function addAlias1() {
    var suspectSurname = $('#addSuspect-Alias-Surname').val();
    var suspectForename = $('#addSuspect-Alias-Forename').val();
    $('#new-aliases').append('<p><strong class="surname">' + suspectSurname + '</strong>, ' + suspectForename + '</p>');
    $('#aliasesDetails-1').hide();
    $('#aliasesDetails-2').show();
    $('.no-aliases').remove();
}

function addAlias2() {
    var suspectSurname2 = $('#addSuspect-Alias-Surname2').val();
    var suspectForename2 = $('#addSuspect-Alias-Forename2').val();
    $('#new-aliases').append('<p><strong class="surname">' + suspectSurname2 + '</strong>, ' + suspectForename2 + '</p>');
    $('#aliasesDetails-2').hide();
    $('#aliasesDetails-3').show();
}

function addAlias3() {
    var suspectSurname3 = $('#addSuspect-Alias-Surname3').val();
    var suspectForename3 = $('#addSuspect-Alias-Forename3').val();
    $('#new-aliases').append('<p><strong class="surname">' + suspectSurname3 + '</strong>, ' + suspectForename3 + '</p>');
    $('#aliasesDetails-3').hide();
    $('#aliasesDetails-4').show();
}

function addAlias4() {
    var suspectSurname4 = $('#addSuspect-Alias-Surname4').val();
    var suspectForename4 = $('#addSuspect-Alias-Forename4').val();
    $('#new-aliases').append('<p><strong class="surname">' + suspectSurname4 + '</strong>, ' + suspectForename4 + '</p>');
    $('#aliasesDetails-4').hide();
    $('#aliasesDetails-5').show();
}

function addAlias5() {
    var suspectSurname5 = $('#addSuspect-Alias-Surname5').val();
    var suspectForename5 = $('#addSuspect-Alias-Forename5').val();
    $('#new-aliases').append('<p><strong class="surname">' + suspectSurname5 + '</strong>, ' + suspectForename5 + '</p>');
}

// ========================= ADD MULTIPLE SUSPECTS ========================= //
$(document).ready(function () {

    $('#multiple_Suspect_Details').hide();
    $('#multiple_Suspects_Added').hide();

    $("#multiple_Suspects").on("click", function (e) { 
        setTimeout(function () {
            $('#multiple_Suspect_Details').show();
        }, 2500)
        var addSuspectsWitnesses = parseInt($('.suspects-number').text());
        $('.suspects-number').html(addSuspectsWitnesses + 3).removeClass('zero');
        $.cookie("multiple_Suspects", true, {path:'/'});
        $('#multiple_Suspects_Added').show();
    });


    $('#multiple_Suspects_Selection').hide();

    if ($.cookie("multiple_Suspects") == 'true') {
        var addSuspectsWitnesses = parseInt($('.suspects-number').text());
        $('.suspects-number').html(addSuspectsWitnesses + 3);
        $('#multiple_Suspect_Details').show();
        $('#multiple_Suspects_Selection').show();
        $('#single_Suspects_Selection').remove();

        // CMR
        $('#multiple_Suspects_Added').show();
    }


})


// ========================= ADD Witness ========================= //

$(document).ready(function () {

    $('#witness_Police').hide();

    $("#addWitness_Form-Title").on("change", function (e) { 
        if ($(this).val() == 'PC' || $(this).val() == 'DC' || $(this).val() == 'PS' || $(this).val() == 'DS' || $(this).val() == 'INS' || $(this).val() == 'DI' || $(this).val() == 'PCSO' || $(this).val() == 'CI' || $(this).val() == 'SC') {
            $('#witness_Police').show();
        } else {
            $('#witness_Police').hide();
        }
    });

    $("input[name=addWitness_Details-Type]").on("change", function (e) { 

        if ($('input[id=addWitness_Details-Type-Vulnerable]').is(':checked') || $('input[id=addWitness_Details-Type-Intimidated]').is(':checked')) {
            $('#addWitness_Details-Type-Need').attr('disabled','disabled');
        } else if ($('input[id=addWitness_Details-Type-Need]').is(':checked')) {
            $('#addWitness_Details-Type-Vulnerable').attr('disabled','disabled');
            $('#addWitness_Details-Type-Intimidated').attr('disabled','disabled');
        } else {
            $('#addWitness_Details-Type-Need').removeAttr('disabled');
            $('#addWitness_Details-Type-Vulnerable').removeAttr('disabled');
            $('#addWitness_Details-Type-Intimidated').removeAttr('disabled');
        }
    });

    $("#findAddress").on("click", function (e) { 
        $('#witnessAddress').attr('open','open');
        e.preventDefault();
        var witnessPostcode = $('#addWitness_Form-Postcode').val();
        $('#addWitness_Form-Address_5').val(witnessPostcode);

        $('#addWitness_Form-Address_1').val('31 Plough Rd');
        $('#addWitness_Form-Address_2').val('Yateley');
        $('#addWitness_Form-Address_3').val('Hampshire');
        $('#addWitness_Form-Address_3').val('United Kingdom');        
    });

    // All items
    $(".preview-all-witnesses-link").hide();
    $(".hide-all-witnesses-link").hide();
    
    $(".preview-all-witnesses-link").on("click", function (e) { 
        e.preventDefault();
        $(this).hide();
        $('.hide-all-witnesses-link').show();
        $('.witnesses-details-wrapper').show();
        $(".preview-witness-link").hide();
        $(".hide-witness-link").show();
        $('.witnesses-details').addClass('open');
    });

    $(".hide-all-witnesses-link").on("click", function (e) { 
        e.preventDefault();
        $(this).hide();
        $('.preview-all-witnesses-link').show();
        $('.witnesses-details-wrapper').hide().removeClass('open');
        $(".preview-witness-link").show();
        $(".hide-witness-link").hide();
        $('.witnesses-details').removeClass('open');
    });

    // One by one
    $(".preview-witness-link").hide();

    $(".preview-witness-link").on("click", function (e) { 
        $(this).hide();
        $(this).parent().find('.hide-witness-link').show();
        $(this).parent().parent().find('.witnesses-details-wrapper').show();
        $(this).parent().parent().addClass('open');
    });

    $(".hide-witness-link").on("click", function (e) { 
        $(this).hide();
        $(this).parent().find('.preview-witness-link').show();
        $(this).parent().parent().find('.witnesses-details-wrapper').hide();
        $(this).parent().parent().removeClass('open');
    });
    
})

function closeConfirmRemoveWitness() {
    $('#confirmRemoveWitness').addClass('rj-dont-display');
    $('.witnesses-details').removeClass('removeWitness');
}

$(document).ready(function () {

    $(".removeWitness").on("click", function (e) { 
        $('#confirmRemoveWitness').removeClass('rj-dont-display');
        $(this).closest('.witnesses-details').addClass('removeWitness');

        var witnessName = $(this).closest('.witnesses-details').find('.name_WrapperWitness').text();
        $('.witnessRemove').text(witnessName);
    });

    $("input[id=offCMS_Remove_Witness]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-RemoveWitness').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmRemoveWitness();');
        } else {
            $('#confirm-RemoveWitness').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

    $("#confirm-RemoveWitness").on("click", function (e) {
        var witnessNumber = parseInt($('.witnesses-number').text()); 
        if ($('input[id=offCMS_Remove_Witness]').is(':checked')) { 
            $('.witnesses-number').text(witnessNumber - 1);
            var witnessNumberNew = parseInt($('.witnesses-number').text()); 
            if (witnessNumberNew <= 0) {
                $('.witnesses-number').addClass('zero');
            }
        }
    });

})

function confirmRemoveWitness() {
    $('.witnesses-details.removeWitness').hide();
    $('#confirmRemoveWitness').addClass('rj-dont-display');
}

// ========================= ADD MULTIPLE WITNESSES ========================= //
$(document).ready(function () {

    $('#multiple_Witnesses_Details').hide();

    $('#multiple_Witnesses_Added').hide();

    $("#multiple_Witnesses").on("click", function (e) { 
        setTimeout(function () {
            $('#multiple_Witnesses_Details').show();
        }, 2500)
        var addMultipleWitnesses = parseInt($('.witnesses-number').text());
        $('.witnesses-number').text(addMultipleWitnesses + 5);
        $('.witnesses-number').removeClass('zero');
        $.cookie("multiple_Witnesses", true, {path:'/'});

        // CMR
        $('#multiple_Witnesses_Added').show();
    });

    if ($.cookie("multiple_Witnesses") == 'true') {
        var addMultipleWitnesses = parseInt($('.witnesses-number').text());
        $('.witnesses-number').text(addMultipleWitnesses + 5);
        $('#multiple_Witnesses_Details').show();
        $('.witnesses-number').removeClass('zero');

        // CMR
        $('#multiple_Witnesses_Added').show();
    }

})

// ========================= ADD CMR ITEM ========================= //
$(document).ready(function () {

    $('#new_CMR_Item_Added').hide();

    $("#add_CMR_item").on("click", function (e) { 
        $('#new_CMR_Item_Added').show();
        var CMR_item = $('#CMR_item').val();
        $('.item-description').text(CMR_item);
    });

})



// ========================= ADD A CHARGE ========================= //
$(document).ready(function () {

    // Page 1
    $('.create-charge-continue, #newChargeCode_ErrorPanel-A, #newChargeCode_Error-A').hide();

    $("#newCharge_ErrorActivate").on("click", function (e) { 
        e.preventDefault();
        $('#newChargeCode_ErrorPanel-A, #newChargeCode_Error-A').show();
        $('#newChargeCode_Error').addClass('govuk-form-group--error');
        $('#newChargeCode').addClass('govuk-input--error');
    });

    $("#newChargeCode").on("keyup", function (e) { 
        if ($(this).val().length >= 5) {
            $('#newChargeCode_A').attr('action','12B-charge-details');
            $('.create-charge-error').hide();
            $('.create-charge-continue').show();
        }
    });

    // Page 2
    $('.create-charge-continue_B, #newChargeCode_ErrorPanel-B').hide();
    $('.addCharge_Form_Date-Day-Error, #addCharge_Form_Date-Day-Error').hide();
    $('.addCharge_Form-Address_1-Error, #addCharge_Form-Address_1-Error').hide();
    $('.addCharge_Form-Address_3-Error, #addCharge_Form-Address_3-Error').hide();
    $('.addCharge_Form-Postcode-Error, #addCharge_Form-Postcode-Error').hide();
    $('.addCharge_Form-Address_4-Error, #addCharge_Form-Address_4-Error').hide();

    $("#newCharge_ErrorActivate_B").on("click", function (e) { 
        e.preventDefault();
        $('#newChargeCode_ErrorPanel-B').show();

        // Date of Offence
        if ($('#addCharge_Form_Date-Day').val() && $('#addCharge_Form_Date-Month').val() && $('#addCharge_Form_Date-Year').val()) {
            $('.addCharge_Form_Date-Day-Error, #addCharge_Form_Date-Day-Error').hide();
            $('#addCharge_Form_Date-Day, #addCharge_Form_Date-Month, #addCharge_Form_Date-Year').removeClass('govuk-input--error');
            $('#dateRange-Container').removeClass('govuk-form-group--error');
        } else {
            $('.addCharge_Form_Date-Day-Error, #addCharge_Form_Date-Day-Error').show();
            $('#addCharge_Form_Date-Day, #addCharge_Form_Date-Month, #addCharge_Form_Date-Year').addClass('govuk-input--error');
            $('#dateRange-Container').addClass('govuk-form-group--error');
        }

        // Address line 1
        if ($('#addCharge_Form-Address_1').val()) {
            $('.addCharge_Form-Address_1-Error, #addCharge_Form-Address_1-Error').hide();
            $('#addCharge_Form-Address_1').removeClass('govuk-input--error');
            $('#newChargeCode_Address_1').removeClass('govuk-form-group--error');
        } else {
            $('.addCharge_Form-Address_1-Error, #addCharge_Form-Address_1-Error').show();
            $('#addCharge_Form-Address_1').addClass('govuk-input--error');
            $('#newChargeCode_Address_1').addClass('govuk-form-group--error');
        }

        // Address line 3 - Town or City
        if ($('#addCharge_Form-Address_3').val()) {
            $('.addCharge_Form-Address_3-Error, #addCharge_Form-Address_3-Error').hide();
            $('#addCharge_Form-Address_3').removeClass('govuk-input--error');
            $('#newChargeCode_Error-B').removeClass('govuk-form-group--error');
        } else {
            $('.addCharge_Form-Address_3-Error, #addCharge_Form-Address_3-Error').show();
            $('#addCharge_Form-Address_3').addClass('govuk-input--error');
            $('#newChargeCode_Error-B').addClass('govuk-form-group--error');
        }

        // Address Postcode
        if ($('#addCharge_Form-Postcode').val()) {
            $('.addCharge_Form-Postcode-Error, #addCharge_Form-Postcode-Error').hide();
            $('#addCharge_Form-Postcode').removeClass('govuk-input--error');
            $('#newChargeCode_Error-C').removeClass('govuk-form-group--error');
        } else {
            $('.addCharge_Form-Postcode-Error, #addCharge_Form-Postcode-Error').show();
            $('#addCharge_Form-Postcode').addClass('govuk-input--error');
            $('#newChargeCode_Error-C').addClass('govuk-form-group--error');
        }

        // Address line 4 - Country
        if ($('#addCharge_Form-Address_4').val()) {
            $('.addCharge_Form-Address_4-Error, #addCharge_Form-Address_4-Error').hide();
            $('#addCharge_Form-Address_4').removeClass('govuk-input--error');
            $('#newChargeCode_Error-D').removeClass('govuk-form-group--error');
        } else {
            $('.addCharge_Form-Address_4-Error, #addCharge_Form-Address_4-Error').show();
            $('#addCharge_Form-Address_4').addClass('govuk-input--error');
            $('#newChargeCode_Error-D').addClass('govuk-form-group--error');
        }

    });

    // $("#addCharge_Form_Date-Day").on("keyup", function (e) { 
    //     if ($('#addCharge_Form-Address_1').val() && $('#addCharge_Form-Address_3').val() && $('#addCharge_Form-Postcode').val() && $('#addCharge_Form-Address_4').val()) {
    //         $('.create-charge-continue_B').show();
    //         $('.create-charge-error_B').hide();
    //     }
    // });

    // $("#addCharge_Form-Address_1").on("keyup", function (e) { 
    //     if ($('#addCharge_Form_Date-Day').val() && $('#addCharge_Form-Address_3').val() && $('#addCharge_Form-Postcode').val() && $('#addCharge_Form-Address_4').val()) {
    //         $('.create-charge-continue_B').show();
    //         $('.create-charge-error_B').hide();
    //     }
    // });

    // $("#addCharge_Form-Address_3").on("keyup", function (e) { 
    //     if ($('#addCharge_Form_Date-Day').val() && $('addCharge_Form-Address_1').val() && $('#addCharge_Form-Postcode').val() && $('#addCharge_Form-Address_4').val()) {
    //         $('.create-charge-continue_B').show();
    //         $('.create-charge-error_B').hide();
    //     }
    // });

    // $("#addCharge_Form-Postcode").on("keyup", function (e) { 
    //     if ($('#addCharge_Form_Date-Day').val() && $('addCharge_Form-Address_1').val() && $('#addCharge_Form-Address_3').val() && $('#addCharge_Form-Address_4').val()) {
    //         $('.create-charge-continue_B').show();
    //         $('.create-charge-error_B').hide();
    //     }
    // });

    $("#addCharge_Form-Address_4").on("keyup", function (e) { 
        $('.create-charge-continue_B').show();
        $('.create-charge-error_B').hide();
        $('#newChargeCode_B').attr('action','12C-charge-details');
    });

})

function datePicker() {
    $('#addCharge_Form_Date-Day').val('20');
    $('#addCharge_Form_Date-Month').val('10');
    $('#addCharge_Form_Date-Year').val('2024');
}

function dateRange() {
    $('#addCharge_Form_Date-Day, #addCharge_Form_Date-Day_3').val('20');
    $('#addCharge_Form_Date-Month, #addCharge_Form_Date-Month_3').val('10');
    $('#addCharge_Form_Date-Year, #addCharge_Form_Date-Year_3').val('2024');
    $('#addCharge_Form_Date-Day_2, #addCharge_Form_Date-Day_4').val('21');
    $('#addCharge_Form_Date-Month_2, #addCharge_Form_Date-Month_4').val('10');
    $('#addCharge_Form_Date-Year_2, #addCharge_Form_Date-Year_4').val('2024');
    $('#dateRangeButton').hide();
    $('#dateRange-Container_2').show();
}

function dateSingle() {
    $('#dateRange-Container_2').hide();
    $('#dateRangeButton').show();
}

function generateSummary() {
    var chargeDate = $('.dateOffence').text();
    var chargeLocation = $('#addCharge_Form-Location').val();
    var chargeType = $('#addCharge_Form-Type').val();
    var chargeProperty = $('#addCharge_Form-Property').val();
    var chargeValue = $('#addCharge_Form-Value').val();
    var chargeOwner = $('#addCharge_Form-Owner').val();
    $('#addCharge_Form-Particulars').text(`On ` + chargeDate + ` at ` + chargeLocation + `, ` + chargeType + ` a ` + chargeProperty + ` to the ` + chargeValue + ` belonging to ` + chargeOwner);
}


function openCharge() {
    $('#chargesModal').removeClass('rj-dont-display');
}

function closeChargesModal() {
    $('#chargesModal').addClass('rj-dont-display');
}




// ========================= LOCKDOWN CASE ========================= //
function openLockDown() {
    $('#confirmLockDown').removeClass('rj-dont-display');
}

function closeLockdownCase() {
    $('#confirmLockDown').addClass('rj-dont-display');
}

$(document).ready(function () {

    $('.caseAccessLockedDown').hide();

    $("input[id=newCase_URN-Lockdown]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-LockDown').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('type','submit');
        } else {
            $('#confirm-LockDown').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

    $("input[id=newCase_URN-RemoveLockdown]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-RemoveLockDown').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('type','submit');
        } else {
            $('#confirm-RemoveLockDown').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

})

function removeLockDown() {
    $('#removeLockDown').removeClass('rj-dont-display');
}

function closeRemoveLockdownCase() {
    $('#removeLockDown').addClass('rj-dont-display');
}

// ========================= COMMUNCATIONS ========================= //

$(document).ready(function () {

    if ($.cookie("comms_Form_Description-Text")) {
        $('#comms_Form_Description-Text').html($.cookie("comms_Form_Description-Text"));
    }

})

function saveComms() {
    $.cookie("comms_Form_Description-Text", $("#comms_Form_Description").html(), {path:'/'});
}

function datePicker2() {
    $('#comms_Form_Date-Day').val('20');
    $('#comms_Form_Date-Month').val('10');
    $('#comms_Form_Date-Year').val('2024');
}

function openComms() {
    $('#commsModal').removeClass('rj-dont-display');
}

function closeCommsModal() {
    $('#commsModal').addClass('rj-dont-display');
}

// ========================= STRATEGY ========================= //

function saveStrategyDesctiption() {
    $.cookie("strategy_Description", $('#strategy_Description-Editor').html(), {path:'/'});
}
function saveStrategyProsecution() {
    $.cookie("strategy_Prosecution", $('#strategy_Prosecution-Editor').html(), {path:'/'});
}
function saveStrategyVictim() {
    $.cookie("strategy_Victim", $('#strategy_Victim-Editor').html(), {path:'/'});
}
function saveStrategyProceeds() {
    $.cookie("strategy_Proceeds", $('#strategy_Proceeds-Editor').html(), {path:'/'});
}
function saveStrategyDisclosure() {
    $.cookie("strategy_Disclosure", $('#strategy_Disclosure-Editor').html(), {path:'/'});
}
function saveStrategyAsset() {
    $.cookie("strategy_Asset", $('#strategy_Asset-Editor').html(), {path:'/'});
}
function saveStrategyInternational() {
    $.cookie("strategy_International", $('#strategy_International-Editor').html(), {path:'/'});
}

function saveRiskRegister() {
    $.cookie("risk_Description", $('#risk_Register-Risk').html(), {path:'/'});
    $.cookie("action_Description", $('#risk_Register-Action').html(), {path:'/'});
}

function saveActionsLog() {
    $.cookie("actions_Log-Action", $('#actions_Log-Action').html(), {path:'/'});
}

function saveDecisionLog() {
    // $.cookie("decision_Action", $('#decision_Action').html(), {path:'/'});
    $.cookie("custody_Decision", $('#custody_Decision').html(), {path:'/'});
}


$(document).ready(function () {
    if ($.cookie("strategy_Description")) {
        var strategiesNumber = parseInt($('.strategies-number').html());
        $('.strategies-number').html(strategiesNumber + 1);
        $('#strategy_Description-Editor').html($.cookie("strategy_Description"));
        $('#strategy_Description-Text').html($.cookie("strategy_Description"));
    }
    if ($.cookie("strategy_Prosecution")) {
        var strategiesNumber = parseInt($('.strategies-number').html());
        $('.strategies-number').html(strategiesNumber + 1);
        $('#strategy_Prosecution-Editor').html($.cookie("strategy_Prosecution"));
        $('#strategy_Prosecution-Text').html($.cookie("strategy_Prosecution"));
    }
    if ($.cookie("strategy_Victim")) {
        var strategiesNumber = parseInt($('.strategies-number').html());
        $('.strategies-number').html(strategiesNumber + 1);
        $('#strategy_Victim-Editor').html($.cookie("strategy_Victim"));
        $('#strategy_Victim-Text').html($.cookie("strategy_Victim"));
    }
    if ($.cookie("strategy_Proceeds")) {
        var strategiesNumber = parseInt($('.strategies-number').html());
        $('.strategies-number').html(strategiesNumber + 1);
        $('#strategy_Proceeds-Editor').html($.cookie("strategy_Proceeds"));
        $('#strategy_Proceeds-Text').html($.cookie("strategy_Proceeds"));
    }
    if ($.cookie("strategy_Disclosure")) {
        var strategiesNumber = parseInt($('.strategies-number').html());
        $('.strategies-number').html(strategiesNumber + 1);
        $('#strategy_Disclosure-Editor').html($.cookie("strategy_Disclosure"));
        $('#strategy_Disclosure-Text').html($.cookie("strategy_Disclosure"));
    }
    if ($.cookie("strategy_Asset")) {
        var strategiesNumber = parseInt($('.asset-number').html());
        $('.asset-number').html(strategiesNumber + 1);
        $('#strategy_Asset-Editor').html($.cookie("strategy_Asset"));
        $('#strategy_Asset-Text').html($.cookie("strategy_Asset"));
    }
    if ($.cookie("strategy_International")) {
        var strategiesNumber = parseInt($('.international-number').html());
        $('.international-number').html(strategiesNumber + 1);
        $('#strategy_International-Editor').html($.cookie("strategy_International"));
        $('#strategy_International-Text').html($.cookie("strategy_International"));
    }
    if ($.cookie("risk_Description")) {
        $('#risk_Register-Risk').html($.cookie("risk_Description"));
        $('#risk_Register-Risk-Details').html($.cookie("risk_Description"));
    }
    if ($.cookie("action_Description")) {
        $('#risk_Register-Action').html($.cookie("action_Description"));
        $('#risk_Register-Action-Details').html($.cookie("action_Description"));
    }
    if ($.cookie("actions_Log-Action")) {
        $('#actions_Log-Action-Details').html($.cookie("actions_Log-Action"));
    }
    if ($.cookie("decision_Action")) {
        $('#decision_Action-Details').html($.cookie("decision_Action"));
    }
    if ($.cookie("custody_Decision")) {
        $('#custody_Decision-Details').html($.cookie("custody_Decision"));
    }
})

function toggleGuidance1() {
    $('.tooltiptext-1').toggleClass('active');
    $('.tooltiptext-2, .tooltiptext-3, .tooltiptext-4, .tooltiptext-5, .tooltiptext-6, .tooltiptext-7, .tooltiptext-8, .tooltiptext-9, .tooltiptext-10').removeClass('active');
}

function closeToggleGuidance1() {
    $('.tooltiptext-1').removeClass('active');
}

function toggleGuidance2() {
    $('.tooltiptext-2').toggleClass('active');
    $('.tooltiptext-1, .tooltiptext-3, .tooltiptext-4, .tooltiptext-5, .tooltiptext-6, .tooltiptext-7, .tooltiptext-8, .tooltiptext-9, .tooltiptext-10').removeClass('active');
}

function closeToggleGuidance2() {
    $('.tooltiptext-2').removeClass('active');
}

function toggleGuidance3() {
    $('.tooltiptext-3').toggleClass('active');
    $('.tooltiptext-1, .tooltiptext-2, .tooltiptext-4, .tooltiptext-5, .tooltiptext-6, .tooltiptext-7, .tooltiptext-8, .tooltiptext-9, .tooltiptext-10').removeClass('active');
}

function closeToggleGuidance3() {
    $('.tooltiptext-3').removeClass('active');
}

function toggleGuidance4() {
    $('.tooltiptext-4').toggleClass('active');
    $('.tooltiptext-1, .tooltiptext-2, .tooltiptext-3, .tooltiptext-5, .tooltiptext-6, .tooltiptext-7, .tooltiptext-8, .tooltiptext-9, .tooltiptext-10').removeClass('active');
}

function closeToggleGuidance4() {
    $('.tooltiptext-4').removeClass('active');
}

function toggleGuidance5() {
    $('.tooltiptext-5').toggleClass('active');
    $('.tooltiptext-1, .tooltiptext-2, .tooltiptext-3, .tooltiptext-4, .tooltiptext-6, .tooltiptext-7, .tooltiptext-8, .tooltiptext-9, .tooltiptext-10').removeClass('active');
}

function closeToggleGuidance5() {
    $('.tooltiptext-5').removeClass('active');
}

function toggleGuidance6() {
    $('.tooltiptext-6').toggleClass('active');
    $('.tooltiptext-1, .tooltiptext-2, .tooltiptext-3, .tooltiptext-4, .tooltiptext-5, .tooltiptext-7, .tooltiptext-8, .tooltiptext-9, .tooltiptext-10').removeClass('active');
}

function closeToggleGuidance6() {
    $('.tooltiptext-6').removeClass('active');
}

function toggleGuidance7() {
    $('.tooltiptext-7').toggleClass('active');
    $('.tooltiptext-1, .tooltiptext-2, .tooltiptext-3, .tooltiptext-4, .tooltiptext-5, .tooltiptext-6, .tooltiptext-8, .tooltiptext-9, .tooltiptext-10').removeClass('active');
}

function closeToggleGuidance7() {
    $('.tooltiptext-7').removeClass('active');
}

function toggleGuidance8() {
    $('.tooltiptext-8').toggleClass('active');
    $('.tooltiptext-1, .tooltiptext-2, .tooltiptext-3, .tooltiptext-4, .tooltiptext-5, .tooltiptext-6, .tooltiptext-7, .tooltiptext-9, .tooltiptext-10').removeClass('active');
}

function closeToggleGuidance8() {
    $('.tooltiptext-8').removeClass('active');
}

function toggleGuidance9() {
    $('.tooltiptext-9').toggleClass('active');
    $('.tooltiptext-1, .tooltiptext-2, .tooltiptext-3, .tooltiptext-4, .tooltiptext-5, .tooltiptext-6, .tooltiptext-7, .tooltiptext-8, .tooltiptext-10').removeClass('active');
}

function closeToggleGuidance9() {
    $('.tooltiptext-9').removeClass('active');
}

function toggleGuidance10() {
    $('.tooltiptext-10').toggleClass('active');
    $('.tooltiptext-1, .tooltiptext-2, .tooltiptext-3, .tooltiptext-4, .tooltiptext-5, .tooltiptext-6, .tooltiptext-7, .tooltiptext-8, .tooltiptext-9').removeClass('active');
}

function closeToggleGuidance10() {
    $('.tooltiptext-10').removeClass('active');
}

// ========================= TIMESTAMPS ========================= //
$(document).ready(function () {

    // HEADER - Case created
    // document.getElementById("date-created-timestamp").innerHTML = formatAMPM();
    // function formatAMPM() {
    // var d = new Date(),
    //     minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    //     hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    //     ampm = d.getHours() >= 12 ? 'pm' : 'am',
    //         months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
    //         days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    //     return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    // }

    // Tab 6 - Materials updated
    document.getElementById("materials-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }
    document.getElementById("materials-timestamp_V2").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }
    document.getElementById("materials-audit").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    document.getElementById("manage-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    document.getElementById("bundles-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Tab 7 - Comms
    document.getElementById("comms-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

            // 7B -  Emails
            document.getElementById("email-date").innerHTML = formatAMPM();
            function formatAMPM() {
            var d = new Date(),
                minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
                hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
                ampm = d.getHours() >= 12 ? 'pm' : 'am',
                    months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
                return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
            }

            // 7C -  Emails
            document.getElementById("email-date2").innerHTML = formatAMPM();
            function formatAMPM() {
            var d = new Date(),
                minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
                hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
                ampm = d.getHours() >= 12 ? 'pm' : 'am',
                    months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
                return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
            }

            // 7D -  Emails
            document.getElementById("email-date3").innerHTML = formatAMPM();
            function formatAMPM() {
            var d = new Date(),
                minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
                hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
                ampm = d.getHours() >= 12 ? 'pm' : 'am',
                    months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
                return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
            }

            // 7E -  Emails
            document.getElementById("email-date4").innerHTML = formatAMPM();
            function formatAMPM() {
            var d = new Date(),
                minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
                hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
                ampm = d.getHours() >= 12 ? 'pm' : 'am',
                    months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
                return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
            }


    // TAB 1 - My cases updated
    document.getElementById("my-cases-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

            // Recent activity
            document.getElementById("case-created-stamp2").innerHTML = formatAMPM();
            function formatAMPM() {
            var d = new Date(),
                minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
                hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
                ampm = d.getHours() >= 12 ? 'pm' : 'am',
                    months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
                    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
                return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
            }


    // TAB 2 - Case Progression
    document.getElementById("EA-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Tab 3 - Strategy
    document.getElementById("strategy-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // TAB 4 - Suspects updated
    document.getElementById("suspects-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Tab 5 - Witnesses updated
    document.getElementById("witnesses-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Tab 8 - Contacts
    document.getElementById("contacts-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Tab 9 - Case permissions
    document.getElementById("permissions-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // TAB 10 - CMR
    document.getElementById("CMR-stamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // New case created
    document.getElementById("case-created-stamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }









    // Case Review
    document.getElementById("CR-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Case Review - Modal
    document.getElementById("CR-timestamp2").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Charges updated
    document.getElementById("charges-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // EA New updated
    document.getElementById("EA-timestamp-NEW").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // EA New updated
    document.getElementById("EA-timestamp-NEW2").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // EA New updated
    document.getElementById("EA-timestamp-NEW3").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // EA New updated
    document.getElementById("EA-timestamp-NEW4").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Transferred date
    document.getElementById("TRANSFER-stamp").innerHTML = formatAMPM();
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

