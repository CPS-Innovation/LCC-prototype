// ========================= Search files =========================

$(document).ready(function () {

    $('.search_error_free, .search_error_2, .search_error_3, .search_error_4').hide();
    $('.govuk-error-message, #search_errors_summary, ul.govuk-error-summary__list li').hide();

    // Error 1 - Trigger
    $("#searchOFF_SYSTEM_Error_1").on("click", function (e) {
        $('#search_errors_summary').show();
        $('ul.govuk-error-summary__list li').hide();
        $('ul.govuk-error-summary__list li.nothing_error_text').show();
        $('#searchOFF_SYSTEM_Container').addClass('govuk-form-group--error');
        $('#nothing_error').show();
    });

    // Error 1 - Hide
    $("input[name=searchOFF").on("change", function (e) {
        $('.search_error_free').hide();
        if ($(this).val() == 'Operation name') {
            $(".search_error_2").show();
            $(".search_error_1, .search_error_3, .search_error_4").hide();
            $('#nothing_error').hide();
        } else if ($(this).val() == 'Defendant surname') {
            $(".search_error_3").show();
            $(".search_error_1, .search_error_2, .search_error_4").hide();
            $('#nothing_error').hide();
        } else if ($(this).val() == 'URN') {
            $(".search_error_4").show();
            $(".search_error_1, .search_error_2, .search_error_3").hide();
            $('#nothing_error').hide();
        }
    });
    
    // Error 2 - Trigger
    $("#searchOFF_SYSTEM_Error_2").on("click", function (e) {
        // Operation name
        if ($('input[id=searchOFF_Operation]').is(':checked') && $('#searchOFF_Operation_VALUE').val()) {
            $('#conditional-searchOFF_Operation').addClass('govuk-radios__conditional_error');
            $('#searchOFF_Operation_AREA').addClass('govuk-input--error');
            $('ul.govuk-error-summary__list li').hide();
            $('#search_errors_summary, #operation_area-error, ul.govuk-error-summary__list li.area-error').show();
        } else if ($('input[id=searchOFF_Operation]').is(':checked') && $('#searchOFF_Operation_AREA').val()) {
            $('#conditional-searchOFF_Operation').addClass('govuk-radios__conditional_error');
            $('#searchOFF_Operation_VALUE').addClass('govuk-input--error');
            $('ul.govuk-error-summary__list li').hide();
            $('#search_errors_summary, ul.govuk-error-summary__list li.operation_name-error_text, #operation_name-error').show();
        } else if ($('input[id=searchOFF_Operation]').is(':checked')) {
            $('#conditional-searchOFF_Operation').addClass('govuk-radios__conditional_error');
            $('#searchOFF_Operation_VALUE, #searchOFF_Operation_AREA').addClass('govuk-input--error');
            $('ul.govuk-error-summary__list li').hide();
            $('#search_errors_summary, ul.govuk-error-summary__list li.operation_name-error_text, #operation_name-error, #operation_area-error, ul.govuk-error-summary__list li.area-error').show();
        }
    });

    $("#searchOFF_SYSTEM_Error_3").on("click", function (e) {
        // Defendant surname
        if ($('input[id=searchOFF_Defendant]').is(':checked') && $('#searchOFF_Defendant_VALUE').val()) {
            $('#conditional-searchOFF_Defendant').addClass('govuk-radios__conditional_error');
            $('#searchOFF_Defendant_AREA').addClass('govuk-input--error');
            $('ul.govuk-error-summary__list li').hide();
            $('#search_errors_summary, #defendant_area-error, ul.govuk-error-summary__list li.area-error').show();
        } else if ($('input[id=searchOFF_Defendant]').is(':checked') && $('#searchOFF_Defendant_AREA').val()) {
            $('#conditional-searchOFF_Defendant').addClass('govuk-radios__conditional_error');
            $('#searchOFF_Defendant_VALUE').addClass('govuk-input--error');
            $('ul.govuk-error-summary__list li').hide();
            $('#search_errors_summary, ul.govuk-error-summary__list li.defendant_name-error_text, #defendant_name-error').show();
        } else if ($('input[id=searchOFF_Defendant]').is(':checked')) {
            $('#conditional-searchOFF_Defendant').addClass('govuk-radios__conditional_error');
            $('#searchOFF_Defendant_VALUE, #searchOFF_Defendant_AREA').addClass('govuk-input--error');
            $('ul.govuk-error-summary__list li').hide();
            $('#search_errors_summary, ul.govuk-error-summary__list li.defendant_name-error_text, #defendant_name-error, #defendant_area-error, ul.govuk-error-summary__list li.area-error').show();
        }
    });

    // 1A - Operation name
    $("#searchOFF_Operation_VALUE").on("keyup", function (e) {
        if ($('#searchOFF_Operation_AREA').val()) {
            $('#searchOFF_SYSTEM').attr('action','02-search-results');
            $('.search_errors').hide();
            $('.search_error_free').show();
        } else {
            $('#searchOFF_SYSTEM').removeAttr('action');
            $('.search_errors').show();
            $('.search_error_free').hide();
        }
    });

    // 1B - Operation area
    $("#searchOFF_Operation_AREA").on("change", function (e) {
        if ($('#searchOFF_Operation_VALUE').val()) {
            $('#searchOFF_SYSTEM').attr('action','02-search-results');
            $('.search_error_2').hide();
            $('.search_error_free').show();
        } else {
            $('#searchOFF_SYSTEM').removeAttr('action');
            $('.search_error_2').show();
            $('.search_error_free').hide();
        }
    });

    // 2A - Defendant surname
    $("#searchOFF_Defendant_VALUE").on("keyup", function (e) {
        if ($('#searchOFF_Defendant_AREA').val()) {
            $('#searchOFF_SYSTEM').attr('action','02-search-results');
            $('.search_error_3').hide();
            $('.search_error_free').show();
        } else {
            $('#searchOFF_SYSTEM').removeAttr('action');
            $('.search_error_3').show();
            $('.search_error_free').hide();
        }
    });

    // 2B - Defendant area
    $("#searchOFF_Defendant_AREA").on("change", function (e) {
        if ($('#searchOFF_Defendant_VALUE').val()) {
            $('#searchOFF_SYSTEM').attr('action','02-search-results');
            $('.search_error_3').hide();
            $('.search_error_free').show();
        } else {
            $('#searchOFF_SYSTEM').removeAttr('action');
            $('.search_error_3').show();
            $('.search_error_free').hide();
        }
    });

    // Error 4 - Trigger
    $("#searchOFF_SYSTEM_Error_4").on("click", function (e) {
        if ($("#searchOFF_URN_VALUE").val().length == 0) {
            $('#search_errors_summary').show();
            $('#conditional-searchOFF_URN').addClass('govuk-radios__conditional_error');
            $("#searchOFF_URN_VALUE").addClass('govuk-input--error');
            $('ul.govuk-error-summary__list li').hide();
            $('ul.govuk-error-summary__list li.urn_name').show();
            $('#urn_name-invalid_error').hide();
            $('#urn_name-error').show();
        } else if ($("#searchOFF_URN_VALUE").val().length <= 10) {
            $('#search_errors_summary').show();
            $('#conditional-searchOFF_URN').addClass('govuk-radios__conditional_error');
            $("#searchOFF_URN_VALUE").addClass('govuk-input--error');
            $('ul.govuk-error-summary__list li').hide();
            $('ul.govuk-error-summary__list li.urn_invalid_error').show();
            $('#urn_name-invalid_error').show();
            $('#urn_name-error').hide();
        }
    });

    // Error 4 - URN
    $("#searchOFF_URN_VALUE").on("keyup", function (e) {
        if ($(this).val().length >= 11) {
            $('.search_error_4').hide();
            $('.search_error_free').show();
            $('#searchOFF_SYSTEM').attr('action','03-case-overview');
        } else {
            $('.search_error_4').show();
            $('.search_error_free').hide();
            $('#searchOFF_SYSTEM').removeAttr('action');
        } 
    });


})

// ========================= Locked Case =========================
window.onload = function() {

    $('#locked_file_transfer_MANAGE, #locked_file_transfer_MATERIALS').show();
    $('#locked_file_transfer_container_MANAGE, #locked_file_transfer_container_MATERIALS').hide();

    setTimeout(function () {
        $('#locked_file_transfer_MANAGE, #locked_file_transfer_MATERIALS').hide();
        $('#locked_file_transfer_container_MANAGE, #locked_file_transfer_container_MATERIALS').show();
    }, 10000)

    $(function() {
        function count($this){
            var current = parseInt($this.html(), 10);
            $this.html(++current);
            if(current !== $this.data('count')){
                setTimeout(function(){count($this)}, 100);
            }
        }        
        $(".loading_transfer_completed").each(function() {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            count($(this));
        });
    });

};

// ========================= Transfer files =========================
$(document).ready(function () {

    $('.shared_drive_to_egress').hide();
    $('#switching_transfer_V1, #switching_transfer_V2').hide();

    $(".switch_direction_1").on("click", function (e) {
        $('.egress_to_shared_drive').hide();
        $('.section-wrapper.materials_holder').hide();
        $('#switching_transfer_V1').show();
        $('#shared_drive_container').addClass('order_1').removeClass('order_2');
        $('#egress_container').addClass('order_2').removeClass('order_1');
        $('#success_banner').hide();
        $('.govuk-notification-banner').hide();

        $('.direction_1').text('Destination');
        $('.direction_2').text('Source');

        setTimeout(function () {
            $('.shared_drive_to_egress').show();
            $('.section-wrapper.materials_holder').show();
            $('#switching_transfer_V1').hide();
        }, 2500)
    });

    $(".switch_direction_2").on("click", function (e) {
        $('.shared_drive_to_egress').hide();
        $('.section-wrapper.materials_holder').hide();
        $('#switching_transfer_V2').show();
        $('#shared_drive_container').addClass('order_2').removeClass('order_1');
        $('#egress_container').addClass('order_1').removeClass('order_2');
        $('#success_banner').hide();
        $('.govuk-notification-banner').hide();

        $('.direction_1').text('Source');
        $('.direction_2').text('Destination');
        
        setTimeout(function () {
            $('.egress_to_shared_drive').show();
            $('.section-wrapper.materials_holder').show();
            $('#switching_transfer_V2').hide();
        }, 2500)
    });

    $(".copy-button").on("click", function (e) {
        $(this).find('.visuallyhidden').fadeIn();
        setTimeout(function () {
            $('.visuallyhidden').fadeOut();
        }, 5000)
    });

    

})


// ========================= Egress files =========================
$(document).ready(function () {

    $('#empty_section_2, #egress_section_2, #egress_section_3A, #egress_section_3B, #egress_section_3C').hide();
    $('#egress_section_2.shared_Drive_Copying').show();


    // Nav Level 0
    $(".egress_nav_level_0").on("click", function (e) {
        e.preventDefault();
        $('.egress_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_0 a').addClass('selected');
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_1, .egress_nav nav.govuk-breadcrumbs ol li.egress_level_2, .egress_nav nav.govuk-breadcrumbs ol li.egress_level_3A, .egress_nav nav.govuk-breadcrumbs ol li.egress_level_3B, .egress_nav nav.govuk-breadcrumbs ol li.egress_level_3C').hide();
        $('#egress_section_1').show();
        $('#empty_section_2, #egress_section_2, egress_section_3A, egress_section_3B, egress_section_3C').hide();
    });

    // Nav Level 1
    $(".egress_nav_level_1").on("click", function (e) {
        e.preventDefault();
        $('.egress_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_1 a').addClass('selected');
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_2').hide();
        $('#egress_section_1').show();
        $('#empty_section_2, #egress_section_2').hide();
        $('input[name=transfer_Folder_2], input[name=transfer_Folder_3A], input[name=transfer_Folder_3B], input[name=transfer_Folder_3C]').prop('checked', false);
    });

    // Nav Level 2
    $(".egress_nav_level_2").on("click", function (e) {
        e.preventDefault();
        $('.egress_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_2 a').addClass('selected');
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_3').hide();
        $('#egress_section_2').show();
        $('#empty_section_2, #egress_section_3A, #egress_section_3B, #egress_section_3C').hide();
        $('input[name=transfer_Folder_2], input[name=transfer_Folder_3A], input[name=transfer_Folder_3B], input[name=transfer_Folder_3C]').prop('checked', false);
    });

    // Empty Level 2
    $(".empty_section_2").on("click", function (e) {
        e.preventDefault();
        var folder_name = $(this).text();
        $('.egress_level_2 a').text(folder_name);

        $('.egress_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_2').show();
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_2 a').show().addClass('selected');
        $('#egress_section_1').hide();
        $('#empty_section_2').show();
        $('input[name=transfer_Folder_2], input[name=transfer_Folder_3A], input[name=transfer_Folder_3B], input[name=transfer_Folder_3C]').prop('checked', false);
    });

    // Level 2
    $(".show_section_2").on("click", function (e) {
        e.preventDefault();
        var folder_name = $(this).text();
        $('.egress_level_2 a').text(folder_name);

        $('.egress_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_2').show();
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_2 a').show().addClass('selected');
        $('#egress_section_1').hide();
        $('#egress_section_2').show();
        $('.cta-materials').hide();
        $('input[name=transfer_Folder_2], input[name=transfer_Folder_3A], input[name=transfer_Folder_3B], input[name=transfer_Folder_3C]').prop('checked', false);
    });

    $('.move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination, .duplicate_transfer_Folder_Destination, #duplicate_Transfer_Files_Journey, #duplicate_Rename_File_Journey').hide();
    $('.move_Folder_Destination.shared_Drive_Copying, .copy_Folder_Destination.shared_Drive_Copying').show();
    
    $("input[name=transfer_Folder_2]").on("change", function (e) {
        $('input[name=transfer_Folder_Confirmation]').prop('checked', false);
        $('button.copy_content_show, button.move_content_show').prop('disabled', true).prop('aria-disabled', true).addClass('govuk-button--disabled');

        $('table#shared_drive-table tbody tr td strong.govuk-tag').hide();
        if ($(this).is(':checked')) {
            $('table#shared_drive-table tbody tr td:last-of-type, table.transfer-table tbody tr td:last-of-type, table.transferred-table tbody tr td:last-of-type').addClass('active');
            $('.move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination').show();
            // $('input[name=shared_drive_Folder]').removeAttr('disabled');
            $('.cta-materials').show();
        } else {
            $('table#shared_drive-table tbody tr td:last-of-type, table.transfer-table tbody tr td:last-of-type, table.transferred-table tbody tr td:last-of-type').removeClass('active');
            $('.move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination, .duplicate_transfer_Folder_Destination').hide();
            // $('input[name=shared_drive_Folder]').attr('disabled','disabled').prop('checked', false);
            $('.cta-materials, .destination_folder').hide();
        }
        if ($("input[name=transfer_Folder_2]:checked").length <= 1) {
            var number_Checked = parseInt($("input[name=transfer_Folder_2]:checked").length);
            $('.selected-number').text('is 1 folder');
        } else if ($("input[name=transfer_Folder_2]:checked").length >= 4) {
            var number_Checked = parseInt($("input[name=transfer_Folder_2]:checked").length);
            $('.selected-number').text('are 3 folders');
        } else {
            var number_Checked = parseInt($("input[name=transfer_Folder_2]:checked").length);
            $('.selected-number').text('are ' + number_Checked + ' folders');
        }

        // if ($('input[id=transfer_Folder_2F]').is(':checked') || $('input[id=transfer_Folder_2G]').is(':checked')) {
        //     $('.duplicate_transfer_Folder_Destination').show();
        //     $('.transfer_Folder_Destination').hide();

        //     // $('#duplicate_Transfer_Files_Journey, #duplicate_File').show();
        //     // $('#confirm_Transfer_Files_Journey').hide();
        // }
    });

    // Duplicate file
    $("input[name=duplicate_File]").on("change", function (e) {
        $('button#duplicate_File').prop('disabled', false).prop('aria-disabled', false).removeClass('govuk-button--disabled');
        $('.files_number').text('1 file');
    });

    $('#duplicate_File').click(function () {
        $('#duplicate_Transfer_Files_Journey').hide();
        $('#confirm_Transfer_Files_Journey').show();
        // if ($('input[id=duplicate_File_Replace]').is(':checked')) {
        //     $('#duplicate_Transfer_Files_Journey, #duplicate_Rename_File_Journey').hide();
        //     $('#confirm_Transfer_Files_Journey').show();
        // } else if ($('input[id=duplicate_File_Keep]').is(':checked')) {
        //     $('#duplicate_Transfer_Files_Journey, #confirm_Transfer_Files_Journey').hide();
        //     $('#duplicate_Rename_File_Journey').show();
        // }
    });

    $("#duplicate_Rename_File").on("keyup", function (e) {
        $('button#duplicate_Rename_COPY, button#duplicate_Rename_MOVE').prop('disabled', false).prop('aria-disabled', false).removeClass('govuk-button--disabled');
    });

    $('#duplicate_Rename_COPY, #duplicate_Rename_MOVE').click(function () {
        $('#confirmTransferFiles').addClass('rj-dont-display');
        $('#completing_transfer_V1').show();
        $('.materials_holder, .egress_to_shared_drive, .shared_drive_to_egress, .cta-materials, .move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination, .duplicate_transfer_Folder_Destination').hide();

        var duplicated_file_name = $('#duplicate_Rename_File').val();
        $('.duplicated_file_name').text(duplicated_file_name);
        $('table#shared_drive-table .materials_row_18').show();
        $('table#shared_drive-table tr.materials_row_18 td:last-of-type').prepend('<strong class="govuk-tag govuk-tag--green" style="display: inline-block;">Finished</strong>');

        // $('table.transfer-table tr.selected_for_transfer').hide();

        setTimeout(function () {
            $('#completing_transfer_V1').hide();
            $('.materials_holder, .egress_to_shared_drive').show();
            $('#success_banner').show();
        }, 2500)
    });

    $('#duplicate_Rename_MOVE').click(function () {
        $('table.transfer-table tr.selected_for_transfer').hide();
    });

    // File locked
    $("input[id=transfer_Folder_2F]").on("change", function (e) {
        $('.files_number').text('1 file');
        $('.locked_file_transfer').show();
        $('.normal_transfer, .zip_transfer, .failed_transfer, .duplicate_file_transfer, .all_file_errors').hide();
        // $('#redirect_locked_file').attr('action','09A-locked-files').attr('method','post');
        $('#redirect_locked_file').attr('action','11B-file-duplicate').attr('method','post');
    });

    // File transfer
    $("input[id=transfer_Folder_2G]").on("change", function (e) {
        $('.files_number').text('1 folder');
        // $('.files_number').text('75 files');
        $('.duplicate_file_transfer').show();
        $('.normal_transfer, .zip_transfer, .failed_transfer, .locked_file_transfer, .all_file_errors').hide();
    });

    // ALL FAILS File transfer
    $("input[id=transfer_Folder_2H]").on("change", function (e) {
        $('.files_number').text('1 folder');
        // $('.files_number').text('75 files');
        $('.all_file_errors').show();
        $('.normal_transfer, .zip_transfer, .failed_transfer, .locked_file_transfer, .duplicate_file_transfer').hide();
    });


    // Select All - Level 2
    $('#select_all_Folder_2').change(function () {
        $('input[name=transfer_Folder_2]').prop('checked', $(this).prop('checked'));
    });

    $("input[name=transfer_Folder_2]").on("click", function (e) {
        if ($(this).is(':checked')) {
            $('.move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination').show();
            $('table#shared_drive-table tbody tr td:last-of-type, table.transfer-table tbody tr td:last-of-type, table.transferred-table tbody tr td:last-of-type').addClass('active');
            // $('input[name=shared_drive_Folder]').removeAttr('disabled');
        } else {
            $('.move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination, .duplicate_transfer_Folder_Destination').hide();
            $('table#shared_drive-table tbody tr td:last-of-type, table.transfer-table tbody tr td:last-of-type, table.transferred-table tbody tr td:last-of-type').removeClass('active');
            // $('input[name=shared_drive_Folder]').attr('disabled','disabled').prop('checked', false);
        }
    });

    // Level 3A
    $(".show_section_3A").on("click", function (e) {
        e.preventDefault();
        var folder_name = $(this).text();
        $('.egress_level_3 a').text(folder_name);

        $('.egress_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_2, .egress_nav nav.govuk-breadcrumbs ol li.egress_level_3').show();
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_3 a').show().addClass('selected');
        $('#egress_section_1, #egress_section_2').hide();
        $('#egress_section_3A').show();
        $('.cta-materials').hide();
        $('input[name=transfer_Folder_2], input[name=transfer_Folder_3A], input[name=transfer_Folder_3B], input[name=transfer_Folder_3C]').prop('checked', false);
    });

    $("input[name=transfer_Folder_3A]").on("click", function (e) {
        $('input[name=transfer_Folder_Confirmation]').prop('checked', false);
        $('button.copy_content_show, button.move_content_show').prop('disabled', true).prop('aria-disabled', true).addClass('govuk-button--disabled');

        $('table#shared_drive-table tbody tr td strong.govuk-tag').hide();
        if ($(this).is(':checked')) {
            $('.move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination').show();
            $('table#shared_drive-table tbody tr td:last-of-type, table.transfer-table tbody tr td:last-of-type, table.transferred-table tbody tr td:last-of-type').addClass('active');
            // $('input[name=shared_drive_Folder]').removeAttr('disabled');
            $('.cta-materials').show();
        } else {
            $('.move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination, .duplicate_transfer_Folder_Destination').hide();
            $('table#shared_drive-table tbody tr td:last-of-type, table.transfer-table tbody tr td:last-of-type, table.transferred-table tbody tr td:last-of-type').removeClass('active');
            // $('input[name=shared_drive_Folder]').attr('disabled','disabled').prop('checked', false);
            $('.cta-materials, .destination_folder').hide();
        }
        if ($("input[name=transfer_Folder_3A]:checked").length <= 1) {
            var number_Checked = parseInt($("input[name=transfer_Folder_3A]:checked").length);
            $('.selected-number').text('is 1 file');
        } else if ($("input[name=transfer_Folder_3A]:checked").length >= 2) {
            var number_Checked = parseInt($("input[name=transfer_Folder_3A]:checked").length);
            $('.selected-number').text('are 2 files');
        } else {
            var number_Checked = parseInt($("input[name=transfer_Folder_3A]:checked").length);
            $('.selected-number').text('are ' + number_Checked + ' files');
        }
    });

    // Select All - Level 3A
    $('#select_all_Folder_3A').change(function () {
        $('input[name=transfer_Folder_3A]').prop('checked', $(this).prop('checked'));
    });

    // Level 3B
    $(".show_section_3B").on("click", function (e) {
        e.preventDefault();
        var folder_name = $(this).text();
        $('.egress_level_3 a').text(folder_name);

        $('.egress_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_2, .egress_nav nav.govuk-breadcrumbs ol li.egress_level_3').show();
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_3 a').show().addClass('selected');
        $('#egress_section_1, #egress_section_2').hide();
        $('#egress_section_3B').show();
        $('.cta-materials').hide();
        $('input[name=transfer_Folder_2], input[name=transfer_Folder_3A], input[name=transfer_Folder_3B], input[name=transfer_Folder_3C]').prop('checked', false);
    });

    $("input[name=transfer_Folder_3B]").on("click", function (e) {
        $('input[name=transfer_Folder_Confirmation]').prop('checked', false);
        $('button.copy_content_show, button.move_content_show').prop('disabled', true).prop('aria-disabled', true).addClass('govuk-button--disabled');

        $('table#shared_drive-table tbody tr td strong.govuk-tag').hide();
        if ($(this).is(':checked')) {
            $('.move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination').show();
            $('table#shared_drive-table tbody tr td:last-of-type, table.transfer-table tbody tr td:last-of-type, table.transferred-table tbody tr td:last-of-type').addClass('active');
            // $('input[name=shared_drive_Folder]').removeAttr('disabled');
            $('.cta-materials').show();
        } else {
            $('.move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination, .duplicate_transfer_Folder_Destination').hide();
            $('table#shared_drive-table tbody tr td:last-of-type, table.transfer-table tbody tr td:last-of-type, table.transferred-table tbody tr td:last-of-type').removeClass('active');
            // $('input[name=shared_drive_Folder]').attr('disabled','disabled').prop('checked', false);
            $('.cta-materials, .destination_folder').hide();
        }
        if ($("input[name=transfer_Folder_3B]:checked").length <= 1) {
            var number_Checked = parseInt($("input[name=transfer_Folder_3B]:checked").length);
            $('.selected-number').text('is 1 file');
        } else if ($("input[name=transfer_Folder_3B]:checked").length >= 5) {
            var number_Checked = parseInt($("input[name=transfer_Folder_3B]:checked").length);
            $('.selected-number').text('are 4 files');
        } else {
            var number_Checked = parseInt($("input[name=transfer_Folder_3B]:checked").length);
            $('.selected-number').text('are ' + number_Checked + ' files');
        }
    });

    // Select All - Level 3B
    $('#select_all_Folder_3B').change(function () {
        $('input[name=transfer_Folder_3B]').prop('checked', $(this).prop('checked'));
    });

    // Level 3C
    $(".show_section_3C").on("click", function (e) {
        e.preventDefault();
        var folder_name = $(this).text();
        $('.egress_level_3 a').text(folder_name);

        $('.egress_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_2, .egress_nav nav.govuk-breadcrumbs ol li.egress_level_3').show();
        $('.egress_nav nav.govuk-breadcrumbs ol li.egress_level_3 a').show().addClass('selected');
        $('#egress_section_1, #egress_section_2').hide();
        $('#egress_section_3C').show();
        $('.cta-materials').hide();
        $('input[name=transfer_Folder_2], input[name=transfer_Folder_3A], input[name=transfer_Folder_3B], input[name=transfer_Folder_3C]').prop('checked', false);
    });

    $("input[name=transfer_Folder_3C]").on("click", function (e) {
        $('input[name=transfer_Folder_Confirmation]').prop('checked', false);
        $('button.copy_content_show, button.move_content_show').prop('disabled', true).prop('aria-disabled', true).addClass('govuk-button--disabled');

        $('table#shared_drive-table tbody tr td strong.govuk-tag').hide();
        if ($(this).is(':checked')) {
            $('.move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination').show();
            $('table#shared_drive-table tbody tr td:last-of-type, table.transfer-table tbody tr td:last-of-type, table.transferred-table tbody tr td:last-of-type').addClass('active');
            // $('input[name=shared_drive_Folder]').removeAttr('disabled');
            $('.cta-materials').show();
        } else {
            $('.move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination, .duplicate_transfer_Folder_Destination').hide();
            $('table#shared_drive-table tbody tr td:last-of-type, table.transfer-table tbody tr td:last-of-type, table.transferred-table tbody tr td:last-of-type').removeClass('active');
            // $('input[name=shared_drive_Folder]').attr('disabled','disabled').prop('checked', false);
            $('.cta-materials, .destination_folder').hide();
        }
        if ($("input[name=transfer_Folder_3C]:checked").length <= 1) {
            var number_Checked = parseInt($("input[name=transfer_Folder_3C]:checked").length);
            $('.selected-number').text('is 1 file');
        } else if ($("input[name=transfer_Folder_3C]:checked").length >= 2) {
            var number_Checked = parseInt($("input[name=transfer_Folder_3C]:checked").length);
            $('.selected-number').text('are 2 files');
        } else {
            var number_Checked = parseInt($("input[name=transfer_Folder_3C]:checked").length);
            $('.selected-number').text('are ' + number_Checked + ' files');
        }
    });

    // Select All - Level 3C
    $('#select_all_Folder_3C').change(function () {
        $('input[name=transfer_Folder_3C]').prop('checked', $(this).prop('checked'));
    });

})

// ========================= LINK EGRESS files =========================


$(document).ready(function () {

    $("input[name=searchOFF_Operation_VALUE], input[name=searchOFF_Defendant_VALUE]").on("keyup", function (e) {
        if ($(this).val() == 'Dumper Truck' || $(this).val() == 'Dumper truck' || $(this).val() == 'Dumper truck' || $(this).val() == 'Dumpertruck') {
            $('#searchOFF_SYSTEM').attr('action','03-case-overview');
        } else {
            $('#searchOFF_SYSTEM').attr('action','02-search-results');
        }
    });

    $("input[name=searchOFF_URN_VALUE]").on("keyup", function (e) {
        $('#searchOFF_SYSTEM').attr('action','03-case-overview');
    });

    $("input[name=egress_file_link]").on("change", function (e) {
        $('#egress-table tbody tr').removeClass('selected');
        $(this).closest('tr').addClass('selected');
    });

    // V1
    $("input[name=offCMS_Egress_files]").on("change", function (e) {
        if ($(this).val() == 'Yes') {
            $('#confirm_egress_transfer').attr('action','03-case-overview');
        } else if ($(this).val() == 'No') {
            $('#confirm_egress_transfer').attr('action','04A-egress-files');
        }
    });
    
    // V2
    $("input[name=offCMS_Egress_files_V2]").on("change", function (e) {
        if ($(this).val() == 'Yes') {
            $('#confirm_egress_transfer').attr('action','05A-p-drive-files');
        } else if ($(this).val() == 'No') {
            $('#confirm_egress_transfer').attr('action','04A-egress-files');
        }
    });

    // NEW CASE - EGRESS/SHARED DRIVE
    $("input[name=offCMS_Egress_files]").on("change", function (e) {
        if ($(this).val() == 'Yes') {
            $('#createCaseStarted_Egress_SD').attr('action','05A-p-drive-files');
        } else if ($(this).val() == 'No') {
            $('#createCaseStarted_Egress_SD').attr('action','04A-egress-files');
        }
    });

    // NEW CASE - EGRESS
    $("input[name=offCMS_Egress_files]").on("change", function (e) {
        if ($(this).val() == 'Yes') {
            $('#createCaseStarted_Egress').attr('action','./create-case/08-check-answers');
        } else if ($(this).val() == 'No') {
            $('#createCaseStarted_Egress').attr('action','04A-egress-files');
        }
    });

    // NEW CASE - SD
    $("input[name=offCMS_Egress_files]").on("change", function (e) {
        if ($(this).val() == 'Yes') {
            $('#createCaseStarted_SD').attr('action','./create-case/08-check-answers');
        } else if ($(this).val() == 'No') {
            $('#createCaseStarted_SD').attr('action','04A-egress-files');
        }
    });

    // Egress link files
    // $(".egress_link_files").on("click", function (e) {
    //     $('#confirmEgressFiles').removeClass('rj-dont-display');
    //     var egressFolderName = $(this).closest('tr').find('.operation_name').text();
    //     $('.egress_folder_name').text(egressFolderName);
    // });

    // V1
    // $("input[id=offCMS_Egress_files]").on("change", function (e) {
    //     if ($(this).is(':checked')) {
    //         $('#confirm-EgressFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
    //     } else {
    //         $('#confirm-EgressFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
    //     }
    // });

    // V2
    // $("input[id=offCMS_Egress_files_V2]").on("change", function (e) {
    //     if ($(this).is(':checked')) {
    //         $('#confirm-EgressFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
    //     } else {
    //         $('#confirm-EgressFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
    //     }
    // });

    // P Drive links files
    // $(".pdrive_link_files").on("click", function (e) {
    //     $('#confirmPDriveFiles').removeClass('rj-dont-display');
    //     var pdriveFolderName = $(this).closest('tr').find('.operation_name').text();
    //     $('.pdrive_folder_name').text(pdriveFolderName);
    // });

    // V1
    // $("input[id=offCMS_PDrive_files]").on("change", function (e) {
    //     if ($(this).is(':checked')) {
    //         $('#confirm-PDriveFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
    //     } else {
    //         $('#confirm-PDriveFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
    //     }
    // });

    // V2
    // $("input[id=offCMS_PDrive_files_V2]").on("change", function (e) {
    //     if ($(this).is(':checked')) {
    //         $('#confirm-PDriveFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
    //     } else {
    //         $('#confirm-PDriveFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
    //     }
    // });

    // V3
    // $("input[id=offCMS_PDrive_files_V3]").on("change", function (e) {
    //     if ($(this).is(':checked')) {
    //         $('#confirm-PDriveFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
    //     } else {
    //         $('#confirm-PDriveFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
    //     }
    // });

})

// function closeConfirmEgressFiles() {
//     $('#confirmEgressFiles').addClass('rj-dont-display');
// }

// function closeConfirmPDriveFiles() {
//     $('#confirmPDriveFiles').addClass('rj-dont-display');
// }

// ========================= P DRIVE files =========================
$(document).ready(function () {

    $('.destination_folder, .shared_drive_level_2, .shared_drive_level_3, .shared_drive_level_4').hide();
    $('.zip_transfer, .locked_file_transfer, .failed_transfer, .duplicate_file_transfer, .all_file_errors').hide();

    $('#character_limit').hide();

    $('#shared_drive_empty_section_2, #shared_drive_section_2').hide();

    // Nav 1
    $('.shared_drive_nav_level_1').on("click", function (e) {
        e.preventDefault();
        $('#shared_drive_section_1').show();
        $('#shared_drive_empty_section_2, #show_transferred_Folders, #show_transferred_Folder_Contents_1, #show_transferred_Folder_Contents_2, #show_transferred_Folder_Contents_3').hide();
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_2, .shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_3, .shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_4').hide();
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_1 a').addClass('selected');


        $('#shared_drive_section_2 .permissions').hide();
        var folder_name = $(this).text();
        $('.transfer_folder_name').text(folder_name).addClass('selected');
    });

    $('.empty_shared_drive_section_2').on("click", function (e) {
        e.preventDefault();
        $('#shared_drive_section_1').hide();
        $('#shared_drive_empty_section_2').show();

        $('.shared_drive_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_2').show();
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_2 a').show().addClass('selected');

        var folder_name = $(this).text();
        $('.shared_drive_nav_level_2, .transfer_folder_name').text(folder_name).addClass('selected');
    });
    
    // Activate button
    $('a.move_Folder_Destination, a.copy_Folder_Destination').on("click", function (e) {
        e.preventDefault();
        // $('.govuk-notification-banner').hide();
        $('#confirmTransferFiles').removeClass('rj-dont-display');
        var transfer_folder_name = $(this).closest('tr').find('a.empty_shared_drive_section_2').text();
        $('.transfer_folder_name').text(transfer_folder_name);

        // File number
        if ($('#transfer_Folder_2A').is(':checked') && $('#transfer_Folder_2B').is(':checked') && $('#transfer_Folder_2C').is(':checked')) {
            $('.files_number').text('3 folders');
            // $('.files_number').text('11 files');
        } else if ($('#transfer_Folder_2A').is(':checked') && $('#transfer_Folder_2B').is(':checked')) {
            $('.files_number').text('2 folders');
            // $('.files_number').text('6 files');
        } else if ($('#transfer_Folder_2A').is(':checked') && $('#transfer_Folder_2C').is(':checked')) {
            $('.files_number').text('2 folders');
            // $('.files_number').text('7 files');
        } else if ($('#transfer_Folder_2B').is(':checked') && $('#transfer_Folder_2C').is(':checked')) {
            $('.files_number').text('2 folders');
            // $('.files_number').text('10 files');
        } else if ($('#transfer_Folder_2A').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('1 file');
        } else if ($('#transfer_Folder_2B').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('4 files');
        } else if ($('#transfer_Folder_2C').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('6 files');
        }
        else if ($('#transfer_Folder_2D').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('200 files');
            $('.zip_transfer').show();
            $('.normal_transfer, .locked_file_transfer, .duplicate_file_transfer, .all_file_errors').hide();
            $('#redirect_long_file_path').attr('action','06A-long-file-paths').attr('method','post');
        } 
        else if ($('#transfer_Folder_2E').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('151 files');
            $('.failed_transfer').show();
            $('.normal_transfer, .locked_file_transfer, .duplicate_file_transfer, .zip_transfer, .all_file_errors').hide();
            // setTimeout(function () {
            //     window.location.href = "10A-file-errors.html"; //will redirect to your blog page (an ex: blog.html)
            // }, 6000);
            // $('#redirect_long_file_path').attr('action','10A-file-errors').attr('method','post');
        } 
        else if ($('input[name=transfer_Folder_3A]').is(':checked')) {
            var folders_checked = parseInt($('input[name=transfer_Folder_3A]:checked').length);
            $('.files_number').text(folders_checked + ' file');
        } else if ($('input[name=transfer_Folder_3B]').is(':checked')) {
            var folders_checked = parseInt($('input[name=transfer_Folder_3B]:checked').length);
            $('.files_number').text(folders_checked + ' files');
        } else if ($('input[name=transfer_Folder_3C]').is(':checked')) {
            var folders_checked = parseInt($('input[name=transfer_Folder_3C]:checked').length);
            $('.files_number').text(folders_checked + ' files');
        }

        $(this).closest('tr').addClass('files_go_here');

        // LEVEL 1

        // ALL FOLDERS
        if ($('#transfer_Folder_2A').is(':checked') || $('#transfer_Folder_2B').is(':checked') || $('#transfer_Folder_2C').is(':checked')) {
            $('#show_transferred_Folders').show();
            $('#show_transferred_Folder_1, #show_transferred_Folder_2, #show_transferred_Folder_3').hide();
        }

        // REVIEWS
        if ($('#transfer_Folder_2A').is(':checked')) {
            $('#show_transferred_Folder_1').show();
        } else {
            $('#show_transferred_Folder_1').hide();
        }

        // CASE OVERVIEW
        if ($('#transfer_Folder_2B').is(':checked')) {
            $('#show_transferred_Folder_2').show();
        } else {
            $('#show_transferred_Folder_2').hide();
        }

        // STATEMENTS
        if ($('#transfer_Folder_2C').is(':checked')) {
            $('#show_transferred_Folder_3').show();
        } else {
            $('#show_transferred_Folder_3').hide();
        }

        // DIGITAL EVIDENCE - Long file paths
        if ($('#transfer_Folder_2D').is(':checked')) {
            $('#show_transferred_Folder_4').show();
        } else {
            $('#show_transferred_Folder_4').hide();
        }

        // NEW EVIDENCE - Failed transfer
        if ($('#transfer_Folder_2E').is(':checked')) {
            $('#show_transferred_Folder_5').show();
        } else {
            $('#show_transferred_Folder_5').hide();
        }

        // LEVEL 2A
        if ($('input[name=transfer_Folder_3A]').is(':checked')) {
            $('#show_transferred_Folder_Contents_1').show();
            $('#show_transferred_Folder_Contents_1A').show();
        }

        if ($('#transfer_Folder_3A_1').is(':checked')) {
            $('#show_transferred_Folder_Contents_1').show();
            $('#show_transferred_Folder_Contents_1A').show();
            $('#transfer_Folder_3A_hidden_row').show();
        }

        // LEVEL 2B
        if ($('input[name=transfer_Folder_3B]').is(':checked')) {
            $('#show_transferred_Folder_Contents_2').show();
            $('#show_transferred_Folder_Contents_2A, #show_transferred_Folder_Contents_2B, #show_transferred_Folder_Contents_2C, #show_transferred_Folder_Contents_2D').show();
        }
        if ($('#transfer_Folder_3B_1').is(':checked')) {
            $('#show_transferred_Folder_Contents_2A').show();
        } 
        if ($('#transfer_Folder_3B_2').is(':checked')) {
            $('#show_transferred_Folder_Contents_2B').show();
        } 
        if ($('#transfer_Folder_3B_3').is(':checked')) {
            $('#show_transferred_Folder_Contents_2C').show();
        } 
        if ($('#transfer_Folder_3B_4').is(':checked')) {
            $('#show_transferred_Folder_Contents_2D').show();
        } 

        // Level 2C
        if ($('input[name=transfer_Folder_3C]').is(':checked')) {
            $('#show_transferred_Folder_Contents_3').show();
            $('#show_transferred_Folder_Contents_3A, #show_transferred_Folder_Contents_3B, #show_transferred_Folder_Contents_3C, #show_transferred_Folder_Contents_3D, #show_transferred_Folder_Contents_3E, #show_transferred_Folder_Contents_3F').show();
        }
        if ($('#transfer_Folder_3C_1').is(':checked')) {
            $('#show_transferred_Folder_Contents_3A').show();
        }
        if ($('#transfer_Folder_3C_2').is(':checked')) {
            $('#show_transferred_Folder_Contents_3B').show();
        }
        if ($('#transfer_Folder_3C_3').is(':checked')) {
            $('#show_transferred_Folder_Contents_3C').show();
        }
        if ($('#transfer_Folder_3C_4').is(':checked')) {
            $('#show_transferred_Folder_Contents_3D').show();
        }
        if ($('#transfer_Folder_3C_5').is(':checked')) {
            $('#show_transferred_Folder_Contents_3E').show();
        }
        if ($('#transfer_Folder_3C_6').is(':checked')) {
            $('#show_transferred_Folder_Contents_3F').show();
        }
    });

    // NORMAL LEVEL 
    $('a.move_Folder_Destination').on("click", function (e) {
        $('.copy_content_show').hide();
        $('.move_content_show').show();

        // HIDE BUTTONS
        $('#confirm-MoveFiles_TOP, #confirm-MoveFiles_SECOND').hide();
    });

    $('a.copy_Folder_Destination').on("click", function (e) {
        $('.copy_content_show').show();
        $('.move_content_show').hide();

        // HIDE BUTTONS
        $('#confirm-CopyFiles_TOP, #confirm-CopyFiles_SECOND').hide();
    });

    // $('#confirm-CopyFiles, #confirm-MoveFiles').on("click", function (e) {
    //     if ($('input[id=transfer_Folder_2A]').is(':checked') || $('input[id=transfer_Folder_2B]').is(':checked') || $('input[id=transfer_Folder_2C]').is(':checked')) {
    //         $('table#shared_drive-table').css('margin','0');

    //         // Section
    //         $('shared_drive_section_2').show();

    //         // Table
    //         $('table#show_transferred_Folders').show();
    //         $('#show_transferred_Folder_1, #show_transferred_Folder_2, #show_transferred_Folder_3').show();
    //     } else if ($('input[id=transfer_Folder_2A]').is(':checked') && $('input[id=transfer_Folder_2B]').is(':checked') && $('input[id=transfer_Folder_2C]').is(':checked')) {

    //     } else if ($('input[name=transfer_Folder_3A]').is(':checked')) {

    //     } else if ($('input[name=transfer_Folder_3B]').is(':checked')) {

    //     } else if ($('input[name=transfer_Folder_3C]').is(':checked')) {

    //     }
    // });

    // TOP LEVEL 
    $('a.move_Folder_Destination_top_level').on("click", function (e) {
        e.preventDefault();
        var transfer_folder_name = $(this).parent().find('.transfer_folder_name').html();
        $('.transfer_folder_name').text(transfer_folder_name);
        $('#confirmTransferFiles').removeClass('rj-dont-display');
        $('.copy_content_show').hide();
        $('.move_content_show').show();

        // HIDE BUTTONS
        $('#confirm-MoveFiles_SECOND, #confirm-MoveFiles').hide();
    });

    $('a.copy_Folder_Destination_top_level').on("click", function (e) {
        e.preventDefault();
        var transfer_folder_name = $(this).parent().find('.transfer_folder_name').html();
        $('.transfer_folder_name').text(transfer_folder_name);
        $('#confirmTransferFiles').removeClass('rj-dont-display');
        $('.copy_content_show').show();
        $('.move_content_show').hide();

        // HIDE BUTTONS
        $('#confirm-CopyFiles_SECOND, #confirm-CopyFiles').hide();
    });

    $('a.move_Folder_Destination_top_level, a.copy_Folder_Destination_top_level').on("click", function (e) {
        // File number
        if ($('#transfer_Folder_2A').is(':checked') && $('#transfer_Folder_2B').is(':checked') && $('#transfer_Folder_2C').is(':checked')) {
            $('.files_number').text('3 folders');
            // $('.files_number').text('11 files');
        } else if ($('#transfer_Folder_2A').is(':checked') && $('#transfer_Folder_2A').is(':checked')) {
            // $('.files_number').text('6 files');
            $('.files_number').text('2 folders');
        } else if ($('#transfer_Folder_2A').is(':checked') && $('#transfer_Folder_2B').is(':checked')) {
            // $('.files_number').text('7 files');
            $('.files_number').text('2 folders');
        } else if ($('#transfer_Folder_2B').is(':checked') && $('#transfer_Folder_2C').is(':checked')) {
            // $('.files_number').text('10 files');
            $('.files_number').text('2 folders');
        } else if ($('#transfer_Folder_2A').is(':checked')) {
            // $('.files_number').text('1 file');
            $('.files_number').text('2 folders');
        } else if ($('#transfer_Folder_2B').is(':checked')) {
            // $('.files_number').text('4 files');
            $('.files_number').text('1 folder');
        } else if ($('#transfer_Folder_2C').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('6 files');
        }
        else if ($('#transfer_Folder_2D').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('200 files');
            $('.zip_transfer').show();
            $('.normal_transfer, .locked_file_transfer, .duplicate_file_transfer, .failed_transfer, .all_file_errors').hide();
            $('#redirect_long_file_path').attr('action','06A-long-file-paths').attr('method','post');
        }
        else if ($('#transfer_Folder_2E').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('151 files');
            $('.failed_transfer').show();
            $('.normal_transfer, .locked_file_transfer, .duplicate_file_transfer, .zip_transfer, .all_file_errors').hide();
            // setTimeout(function () {
            //     window.location.href = "10A-file-errors.html"; //will redirect to your blog page (an ex: blog.html)
            // }, 6000);
        }
        else if ($('#transfer_Folder_2G').is(':checked')) {
            $('#duplicate_Transfer_Files_Journey').show();
            $('#confirm_Transfer_Files_Journey').hide();

            $('.transfer_file_name').text('10. Police');
        }
        else if ($('#transfer_Folder_2H').is(':checked')) {
            $('#duplicate_Transfer_Files_Journey').show();
            $('#confirm_Transfer_Files_Journey').hide();

            $('.transfer_file_name').text('11. Media');            
        }
        else if ($('#transfer_Folder_2F').is(':checked')) {
            $('#duplicate_Transfer_Files_Journey').show();
            $('#confirm_Transfer_Files_Journey').hide();

            // $('.transfer_file_name').text('10. Police');
        }    
        else if ($('input[name=transfer_Folder_3A]').is(':checked')) {
            var folders_checked = parseInt($('input[name=transfer_Folder_3A]:checked').length);
            $('.files_number').text(folders_checked + ' file');
        } else if ($('input[name=transfer_Folder_3B]').is(':checked')) {
            var folders_checked = parseInt($('input[name=transfer_Folder_3B]:checked').length);
            $('.files_number').text(folders_checked + ' files');
        } else if ($('input[name=transfer_Folder_3C]').is(':checked')) {
            var folders_checked = parseInt($('input[name=transfer_Folder_3C]:checked').length);
            $('.files_number').text(folders_checked + ' files');
        }
    });

    $("#confirm-CopyFiles, #confirm-MoveFiles").on("click", function (e) {
        $('#confirmTransferFiles').addClass('rj-dont-display');
        $('#success_banner, #success_banner_LONG_CHARACTER').hide();
        $('table#shared_drive-table tbody tr.files_go_here strong.govuk-tag').show();
        $('table#shared_drive-table tbody tr.files_go_here .shared_drive_section_2').show();
        $('table#shared_drive-table tbody tr.files_go_here .empty_shared_drive_section_2').hide();

        $('#completing_transfer_V1').show();
        $('#completing_transfer_V1 .transferring_files').hide();
        $('#completing_transfer_V1 .indexing_files').show();


        $('.materials_holder, .egress_to_shared_drive, .shared_drive_to_egress, .cta-materials, .move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination, .duplicate_transfer_Folder_Destination').hide();
        $('input[name=transfer_Folder_2]').prop('checked', false);
        $('input[name=transfer_Folder_3A]').prop('checked', false);
        $('input[name=transfer_Folder_3B]').prop('checked', false);
        $('input[name=transfer_Folder_3C]').prop('checked', false);
        setTimeout(function () {
            $('#completing_transfer_V1 .transferring_files').show();
            $('#completing_transfer_V1 .indexing_files').hide();
        }, 1000)
        setTimeout(function () {
            $('#completing_transfer_V1').hide();
            $('.materials_holder, .egress_to_shared_drive').show();
            $('#success_banner').show();
            // $('#confirmTransferComplete').removeClass('rj-dont-display');
        }, 2500)
    });

    $("#confirm-MoveFiles").on("click", function (e) {
        $('table.transfer-table .selected_for_transfer').hide();
    });

    $("#confirm-CopyFiles").on("click", function (e) {
        $('table.transfer-table .selected_for_transfer').show();
    });

    // SHOW TOP LEVEL FILES
    $('#confirm-CopyFiles_TOP, #confirm-MoveFiles_TOP').on("click", function (e) {
        $('#confirmTransferFiles').addClass('rj-dont-display');
        $('#success_banner, #success_banner_LONG_CHARACTER').hide();
        $('table#shared_drive-table tbody tr.files_go_here strong.govuk-tag').show();
        $('table#shared_drive-table tbody tr.files_go_here .shared_drive_section_2').show();
        $('table#shared_drive-table tbody tr.files_go_here .empty_shared_drive_section_2').hide();

        $('#egress_section_2 table tbody tr.selected_for_transfer td:last-of-type').append('<strong class="govuk-tag govuk-tag--green" style="display: inline-block;">Finished</strong>');

        $('#completing_transfer_V1').show();

        $('.materials_holder, .egress_to_shared_drive, .shared_drive_to_egress, .cta-materials, .move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination, .duplicate_transfer_Folder_Destination').hide();
        setTimeout(function () {
            $('#completing_transfer_V1').hide();
            $('.materials_holder, .egress_to_shared_drive').show();
            $('#success_banner').show();
            // $('#confirmTransferComplete').removeClass('rj-dont-display');
        }, 2500)

        if ($('input[id=transfer_Folder_2A]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_1').show();
            $('#shared_drive-table .hidden_row_1 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_1').hide();
            $('#shared_drive-table .hidden_row_1 strong.govuk-tag').hide();
        }
        if ($('input[id=transfer_Folder_2B]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_2').show();
            $('#shared_drive-table .hidden_row_2 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_2').hide();
            $('#shared_drive-table .hidden_row_2 strong.govuk-tag').hide();
        }
        if ($('input[id=transfer_Folder_2C]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_3').show();
            $('#shared_drive-table .hidden_row_3 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_3').hide();
            $('#shared_drive-table .hidden_row_3 strong.govuk-tag').hide();
        } 
        // if ($('input[id=transfer_Folder_2D]').is(':checked')) {
        //     $('#shared_drive-table .empty_row').hide();
        //     $('#shared_drive-table .hidden_row_ZIP').show();
        //     $('#shared_drive-table .hidden_row_ZIP strong.govuk-tag').show();
        // } else {
        //     $('#shared_drive-table .hidden_row_ZIP').hide();
        //     $('#shared_drive-table .hidden_row_ZIP strong.govuk-tag').hide();
        // } 
        if ($('input[id=transfer_Folder_2E]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_ERROR').show();
            $('#shared_drive-table .hidden_row_ERROR strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_ERROR').hide();
            $('#shared_drive-table .hidden_row_ERROR strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_2F]').is(':checked')) {
            $('table#shared_drive-table tr.materials_row_17 td:last-of-type').prepend('<strong class="govuk-tag govuk-tag--green" style="display: inline-block;">Replaced</strong>');
        } else {
            $('table#shared_drive-table tr.materials_row_17 td:last-of-type strong').hide();
        } 
        if ($('input[id=transfer_Folder_2G]').is(':checked')) {
            $('table#shared_drive-table tr.materials_row_19 td:last-of-type').prepend('<strong class="govuk-tag govuk-tag--green" style="display: inline-block;">Replaced</strong>');
        } else {
            $('table#shared_drive-table tr.materials_row_19 td:last-of-type strong').hide();
        } 

        if ($('input[id=transfer_Folder_2H]').is(':checked')) {
            $('table#shared_drive-table tr.materials_row_11 td:last-of-type').prepend('<strong class="govuk-tag govuk-tag--green" style="display: inline-block;">Replaced</strong>');
        } else {
            $('table#shared_drive-table tr.materials_row_11 td:last-of-type strong').hide();
        } 


        if ($('input[id=transfer_Folder_3A_1]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_4').show();
            $('#shared_drive-table .hidden_row_4 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_4').hide();
            $('#shared_drive-table .hidden_row_4 strong.govuk-tag').hide();
        } 

        if ($('input[id=transfer_Folder_3B_1]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_5').show();
            $('#shared_drive-table .hidden_row_5 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_5').hide();
            $('#shared_drive-table .hidden_row_5 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3B_2]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_6').show();
            $('#shared_drive-table .hidden_row_6 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_6').hide();
            $('#shared_drive-table .hidden_row_6 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3B_3]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_7').show();
            $('#shared_drive-table .hidden_row_7 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_7').hide();
            $('#shared_drive-table .hidden_row_7 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3B_4]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_8').show();
            $('#shared_drive-table .hidden_row_8 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_8').hide();
            $('#shared_drive-table .hidden_row_8 strong.govuk-tag').hide();
        } 

        if ($('input[id=transfer_Folder_3C_1]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_9').show();
            $('#shared_drive-table .hidden_row_9 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_9').hide();
            $('#shared_drive-table .hidden_row_9 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3C_2]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_10').show();
            $('#shared_drive-table .hidden_row_10 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_10').hide();
            $('#shared_drive-table .hidden_row_10 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3C_3]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_11').show();
            $('#shared_drive-table .hidden_row_11 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_11').hide();
            $('#shared_drive-table .hidden_row_11 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3C_4]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_12').show();
            $('#shared_drive-table .hidden_row_12 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_12').hide();
            $('#shared_drive-table .hidden_row_12 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3C_5]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_13').show();
            $('#shared_drive-table .hidden_row_13 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_13').hide();
            $('#shared_drive-table .hidden_row_13 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3C_6]').is(':checked')) {
            $('#shared_drive-table .empty_row').hide();
            $('#shared_drive-table .hidden_row_14').show();
            $('#shared_drive-table .hidden_row_14 strong.govuk-tag').show();
        } else {
            $('#shared_drive-table .hidden_row_14').hide();
            $('#shared_drive-table .hidden_row_14 strong.govuk-tag').hide();
        } 

    });

    $('#confirm-MoveFiles_TOP').on("click", function (e) {
        $('table.transfer-table .selected_for_transfer').hide();
    });

     $('#confirm-CopyFiles_TOP').on("click", function (e) {
        $('table.transfer-table .selected_for_transfer').show();
    });

    // SECOND LEVEL 
    $('a.move_Folder_Destination_second_level').on("click", function (e) {
        e.preventDefault();
        var transfer_folder_name = $(this).parent().find('.transfer_folder_name').html();
        $('.transfer_folder_name').text(transfer_folder_name);
        $('#confirmTransferFiles').removeClass('rj-dont-display');
        $('.copy_content_show').hide();
        $('.move_content_show').show();

        // HIDE BUTTONS
        $('#confirm-MoveFiles_TOP, #confirm-MoveFiles').hide();
    });

    $('a.copy_Folder_Destination_second_level').on("click", function (e) {
        e.preventDefault();
        var transfer_folder_name = $(this).parent().find('.transfer_folder_name').html();
        $('.transfer_folder_name').text(transfer_folder_name);
        $('#confirmTransferFiles').removeClass('rj-dont-display');
        $('.copy_content_show').show();
        $('.move_content_show').hide();

        // HIDE BUTTONS
        $('#confirm-CopyFiles_TOP, #confirm-CopyFiles').hide();
    });

    $('a.move_Folder_Destination_second_level, a.copy_Folder_Destination_second_level').on("click", function (e) {
        // File number
        if ($('#transfer_Folder_2A').is(':checked') && $('#transfer_Folder_2B').is(':checked') && $('#transfer_Folder_2C').is(':checked')) {
            $('.files_number').text('3 folders');
            // $('.files_number').text('11 files');
        } else if ($('#transfer_Folder_2A').is(':checked') && $('#transfer_Folder_2B').is(':checked')) {
            $('.files_number').text('2 folders');
            // $('.files_number').text('6 files');
        } else if ($('#transfer_Folder_2A').is(':checked') && $('#transfer_Folder_2C').is(':checked')) {
            $('.files_number').text('2 folders');
            // $('.files_number').text('7 files');
        } else if ($('#transfer_Folder_2B').is(':checked') && $('#transfer_Folder_2C').is(':checked')) {
            $('.files_number').text('2 folders');
            // $('.files_number').text('10 files');
        } else if ($('#transfer_Folder_2A').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('1 file');
        } else if ($('#transfer_Folder_2B').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('4 files');
        } else if ($('#transfer_Folder_2C').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('6 files');
        }
        else if ($('#transfer_Folder_2D').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('200 files');
            $('.zip_transfer').show();
            $('.normal_transfer, .locked_file_transfer, .duplicate_file_transfer, .failed_transfer, .all_file_errors').hide();
            $('#redirect_long_file_path').attr('action','06A-long-file-paths').attr('method','post');
        } 
        else if ($('#transfer_Folder_2E').is(':checked')) {
            $('.files_number').text('1 folder');
            // $('.files_number').text('151 files');
            $('.failed_transfer').show();
            $('.normal_transfer, .locked_file_transfer, .duplicate_file_transfer, .zip_transfer, .all_file_errors').hide();
            // setTimeout(function () {
            //     window.location.href = "10A-file-errors.html"; //will redirect to your blog page (an ex: blog.html)
            // }, 6000);
        } 
        else if ($('input[name=transfer_Folder_3A]').is(':checked')) {
            var folders_checked = parseInt($('input[name=transfer_Folder_3A]:checked').length);
            $('.files_number').text(folders_checked + ' file');
        } else if ($('input[name=transfer_Folder_3B]').is(':checked')) {
            var folders_checked = parseInt($('input[name=transfer_Folder_3B]:checked').length);
            $('.files_number').text(folders_checked + ' files');
        } else if ($('input[name=transfer_Folder_3C]').is(':checked')) {
            var folders_checked = parseInt($('input[name=transfer_Folder_3C]:checked').length);
            $('.files_number').text(folders_checked + ' files');
        }
    });

    $('#confirm-CopyFiles_SECOND, #confirm-MoveFiles_SECOND').on("click", function (e) {
        $('#confirmTransferFiles').addClass('rj-dont-display');
        $('#success_banner, #success_banner_LONG_CHARACTER').hide();
        $('table.transfer-table tbody tr.files_go_here strong.govuk-tag').show();
        $('table.transfer-table tbody tr.files_go_here .shared_drive_section_2').show();
        $('table.transfer-table tbody tr.files_go_here .empty_shared_drive_section_2').hide();

        $('#completing_transfer_V1').show();

        $('.materials_holder, .egress_to_shared_drive, .shared_drive_to_egress, .cta-materials, .move_Folder_Destination, .copy_Folder_Destination, .transfer_Folder_Destination, .duplicate_transfer_Folder_Destination').hide();
        setTimeout(function () {
            $('#completing_transfer_V1').hide();
            $('.materials_holder, .egress_to_shared_drive').show();
            $('#success_banner').show();
            // $('#confirmTransferComplete').removeClass('rj-dont-display');
        }, 2500)

        if ($('input[id=transfer_Folder_2A]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_1').show();
            $('.transfer-table .hidden_row_1 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_1').hide();
            $('.transfer-table .hidden_row_1 strong.govuk-tag').hide();
        }
        if ($('input[id=transfer_Folder_2B]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_2').show();
            $('.transfer-table .hidden_row_2 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_2').hide();
            $('.transfer-table .hidden_row_2 strong.govuk-tag').hide();
        }
        if ($('input[id=transfer_Folder_2C]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_3').show();
            $('.transfer-table .hidden_row_1 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_3').hide();
            $('.transfer-table .hidden_row_3 strong.govuk-tag').hide();
        } 

        if ($('input[id=transfer_Folder_3A_1]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_4').show();
            $('.transfer-table .hidden_row_4 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_4').hide();
            $('.transfer-table .hidden_row_4 strong.govuk-tag').hide();
        } 

        if ($('input[id=transfer_Folder_3B_1]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_5').show();
            $('.transfer-table .hidden_row_5 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_5').hide();
            $('.transfer-table .hidden_row_5 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3B_2]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_6').show();
            $('.transfer-table .hidden_row_6 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_6').hide();
            $('.transfer-table .hidden_row_6 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3B_3]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_7').show();
            $('.transfer-table .hidden_row_7 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_7').hide();
            $('.transfer-table .hidden_row_7 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3B_4]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_8').show();
            $('.transfer-table .hidden_row_8 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_8').hide();
            $('.transfer-table .hidden_row_8 strong.govuk-tag').hide();
        } 

        if ($('input[id=transfer_Folder_3C_1]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_9').show();
            $('.transfer-table .hidden_row_9 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_9').hide();
            $('.transfer-table .hidden_row_9 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3C_2]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_10').show();
            $('.transfer-table .hidden_row_10 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_10').hide();
            $('.transfer-table .hidden_row_10 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3C_3]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_11').show();
            $('.transfer-table .hidden_row_11 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_11').hide();
            $('.transfer-table .hidden_row_11 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3C_4]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_12').show();
            $('.transfer-table .hidden_row_12 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_12').hide();
            $('.transfer-table .hidden_row_12 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3C_5]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_13').show();
            $('.transfer-table .hidden_row_13 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_13').hide();
            $('.transfer-table .hidden_row_13 strong.govuk-tag').hide();
        } 
        if ($('input[id=transfer_Folder_3C_6]').is(':checked')) {
            $('.transfer-table .empty_row').hide();
            $('.transfer-table .hidden_row_14').show();
            $('.transfer-table .hidden_row_14 strong.govuk-tag').show();
        } else {
            $('.transfer-table .hidden_row_14').hide();
            $('.transfer-table .hidden_row_14 strong.govuk-tag').hide();
        } 

    });

    $('#confirm-MoveFiles_SECOND').on("click", function (e) {
        $('table.transfer-table .selected_for_transfer').hide();
    });

     $('#confirm-CopyFiles_SECOND').on("click", function (e) {
        $('table.transfer-table .selected_for_transfer').show();
    });

    // LONG FILE PATHS
    $('#confirm-CopyFiles_ZIP, #confirm-MoveFiles_ZIP').on("click", function (e) {
        $('#confirmTransferFiles').addClass('rj-dont-display');
        $('#longFilePaths').removeClass('rj-dont-display');

        $(function() {
            function count($this){
                var current = parseInt($this.html(), 10);
                $this.html(++current);
                if(current !== $this.data('count')){
                    setTimeout(function(){count($this)}, 100);
                }
            }        
            $(".loading_transfer_completed_V2").each(function() {
                $(this).data('count', parseInt($(this).html(), 10));
                $(this).html('0');
                count($(this));
            });
        });
    });

    $('p.duplicate_message').hide();

    // DUPLICATE FILES
    $('#confirm-CopyFiles_DUPLICATE, #confirm-MoveFiles_DUPLICATE').on("click", function (e) {
        $('#confirmTransferFiles').addClass('rj-dont-display');

        // $('.transferring_files').hide();
        // $('.indexing_files').show();

        setTimeout(function () {
            $('p.duplicate_message').show();
        }, 3500);

        setTimeout(function () {
            $('.files_transfers_duplicate').html('2');
        }, 4000);

        setTimeout(function () {
            $('.files_transfers_duplicate').html('3');
        }, 6500);

        setTimeout(function () {
            $('.files_transfers_duplicate').html('4');
        }, 7500);

        $(function() {
            function count($this){
                var current = parseInt($this.html(), 10);
                $this.html(++current);
                if(current !== $this.data('count')){
                    setTimeout(function(){count($this)}, 100);
                }
            }        
            $(".loading_transfer_completed_V3").each(function() {
                $(this).data('count', parseInt($(this).html(), 10));
                $(this).html('0');
                count($(this));
            });
            // $(".loading_transfer_completed_V4").each(function() {
            //     $(this).data('count', parseInt($(this).html(), 5));
            //     $(this).html('0');
            //     count($(this));
            // });
        });
    });

    // DUPLICATE FILES
    $('#confirm-CopyFiles_ALL_ERRORS, #confirm-MoveFiles_ALL_ERRORS').on("click", function (e) {
        $('#confirmTransferFiles').addClass('rj-dont-display');

        // $('.transferring_files').hide();
        // $('.indexing_files').show();

        setTimeout(function () {
            $('p.duplicate_message').show();
        }, 3500);

        setTimeout(function () {
            $('.files_transfers_duplicate').html('2');
        }, 4000);

        setTimeout(function () {
            $('.files_transfers_duplicate').html('3');
        }, 6500);

        setTimeout(function () {
            $('.files_transfers_duplicate').html('4');
        }, 7500);

        $(function() {
            function count($this){
                var current = parseInt($this.html(), 10);
                $this.html(++current);
                if(current !== $this.data('count')){
                    setTimeout(function(){count($this)}, 100);
                }
            }        
            $(".loading_transfer_completed_V3").each(function() {
                $(this).data('count', parseInt($(this).html(), 10));
                $(this).html('0');
                count($(this));
            });
            // $(".loading_transfer_completed_V4").each(function() {
            //     $(this).data('count', parseInt($(this).html(), 5));
            //     $(this).html('0');
            //     count($(this));
            // });
        });
    });

    // $('.move_Folder_Destination').on("click", function (e) {
    //     $('.copy_content_show').hide();
    //     $('.move_content_show').show();
    // });

    // $('.move_Folder_Destination_top_level').on("click", function (e) {
    //     e.preventDefault();
    //     var transfer_folder_name = $(this).parent().find('.transfer_folder_name').html();
    //     $('.transfer_folder_name').text(transfer_folder_name);
    //     $('#confirmTransferFiles').removeClass('rj-dont-display');
    //     $('.copy_content_show').hide();
    //     $('.move_content_show').show();
    // });

    // $('.copy_Folder_Destination').on("click", function (e) {
    //     $('.copy_content_show').show();
    //     $('.move_content_show').hide();
    // });

    // $('.copy_Folder_Destination_top_level').on("click", function (e) {
    //     e.preventDefault();
    //     var transfer_folder_name = $(this).parent().find('.transfer_folder_name').html();
    //     $('.transfer_folder_name').text(transfer_folder_name);
    //     $('#confirmTransferFiles').removeClass('rj-dont-display');
    //     $('.copy_content_show').show();
    //     $('.move_content_show').hide();
    // });

    $('input[id=transfer_Folder_2A]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });
    
    $('input[id=transfer_Folder_2B]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_2C]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_2D]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_2E]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_2F]').on("click", function (e) {
        // $('input[id=transfer_Folder_2G]').prop('checked', false);
        $('.transfer_file_name').html('mg11_BLAYNEE.pdf');
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_2G]').on("click", function (e) {
        // $('input[id=transfer_Folder_2F]').prop('checked', false);
        // $('.transfer_file_name').html('MG11_Joe_BLOGGS.pdf');
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_2H]').on("click", function (e) {
        $('.transfer_file_name').html('11. Media');
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    // REVIEWS
    $('input[id=select_all_Folder_3A]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $('tr.second_level_file_1').addClass('selected_for_transfer');
        } else {
            $('tr.second_level_file_1').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_3A_1]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    // CASE OVERVIEW
    $('input[id=select_all_Folder_3B]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $('tr.second_level_file_2').addClass('selected_for_transfer');
            $('tr.second_level_file_3').addClass('selected_for_transfer');
            $('tr.second_level_file_4').addClass('selected_for_transfer');
            $('tr.second_level_file_5').addClass('selected_for_transfer');
        } else {
            $('tr.second_level_file_2').removeClass('selected_for_transfer');
            $('tr.second_level_file_3').removeClass('selected_for_transfer');
            $('tr.second_level_file_4').removeClass('selected_for_transfer');
            $('tr.second_level_file_5').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_3B_1]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_3B_2]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_3B_3]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_3B_4]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    // STATEMENTS
    $('input[id=select_all_Folder_3C]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $('tr.second_level_file_6').addClass('selected_for_transfer');
            $('tr.second_level_file_7').addClass('selected_for_transfer');
            $('tr.second_level_file_8').addClass('selected_for_transfer');
            $('tr.second_level_file_9').addClass('selected_for_transfer');
            $('tr.second_level_file_10').addClass('selected_for_transfer');
            $('tr.second_level_file_11').addClass('selected_for_transfer');
        } else {
            $('tr.second_level_file_6').removeClass('selected_for_transfer');
            $('tr.second_level_file_7').removeClass('selected_for_transfer');
            $('tr.second_level_file_8').removeClass('selected_for_transfer');
            $('tr.second_level_file_9').removeClass('selected_for_transfer');
            $('tr.second_level_file_10').removeClass('selected_for_transfer');
            $('tr.second_level_file_11').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_3C_1]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_3C_2]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_3C_3]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_3C_4]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_3C_5]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    $('input[id=transfer_Folder_3C_6]').on("click", function (e) {
        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('selected_for_transfer');
        } else {
            $(this).closest('tr').removeClass('selected_for_transfer');
        }
    });

    // $('input[name=shared_drive_Folder]').on("change", function (e) {
    //     var shared_Drive_Folder = $(this).parent().find('label').text();
    //     $('.destination_folder').show();
    //     $('.destination_folder_name').text(shared_Drive_Folder);
    //     if ($('input[name=shared_drive_Folder]:checked').length >= 1) {
    //         $('#transfer_egress_materials').removeAttr('disabled').attr('aria-disabled','false');
    //     } else {
    //         $('#transfer_egress_materials').attr('disabled','disabled').attr('aria-disabled','true');
    //     }
    // });

    $('#transfer_egress_materials').on("click", function (e) {
        $('#completing_transfer_V1').show();
        $('.materials_holder').hide();
        setTimeout(function () {
            $('#completing_transfer_V1').hide();
            $('.materials_holder').show();
        }, 2500)
    });

    // V1
    $("input[name=offCMS_PDrive_files]").on("change", function (e) {
        if ($(this).val() == 'Yes') {
            $('#confirm_prdive_transfer').attr('action','03-case-overview');
        } else if ($(this).val() == 'No') {
            $('#confirm_prdive_transfer').attr('action','05A-p-drive-files');
        }
    });

    // SD
    $("input[name=offCMS_PDrive_files]").on("change", function (e) {
        if ($(this).val() == 'Yes') {
            $('#createCaseStarted_SD').attr('action','./create-case/08-check-answers');
        } else if ($(this).val() == 'No') {
            $('#createCaseStarted_SD').attr('action','05A-p-drive-files');
        }
    });

    
    // V2
    $("input[name=offCMS_PDrive_files_V2]").on("change", function (e) {
        if ($(this).val() == 'Yes') {
            $('#confirm_prdive_transfer').attr('action','03-case-overview');
        } else if ($(this).val() == 'No') {
            $('#confirm_prdive_transfer').attr('action','05A-p-drive-files');
        }
    });

    // V3
    $("input[name=offCMS_PDrive_files_V3]").on("change", function (e) {
        if ($(this).val() == 'Yes') {
            $('#confirm_prdive_transfer').attr('action','03-case-overview');
        } else if ($(this).val() == 'No') {
            $('#confirm_prdive_transfer').attr('action','05A-p-drive-files');
        }
    });

    // Confirm transfer
    $("input[id=transfer_Folder_Confirmation]").on("change", function (e) {
        if ($(this).is(':checked')) {
            // TOP
            $('#confirm-CopyFiles_TOP').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
            $('#confirm-MoveFiles_TOP').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
            // SECOND
            $('#confirm-CopyFiles_SECOND').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
            $('#confirm-MoveFiles_SECOND').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
            // NORMAL
            $('#confirm-CopyFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
            $('#confirm-MoveFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
            // ZIP
            $('#confirm-CopyFiles_ZIP').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmLongFilePaths();');
            $('#confirm-MoveFiles_ZIP').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmLongFilePaths();');
            // LOCK
            $('#confirm-CopyFiles_LOCK').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
            $('#confirm-MoveFiles_LOCK').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
            // FAILED
            $('#confirm-CopyFiles_FAILED').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmFailedTransfer();');
            $('#confirm-MoveFiles_FAILED').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmFailedTransfer();');
            // DUPLICATE
            $('#confirm-CopyFiles_DUPLICATE').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmDuplicateTransfer();');
            $('#confirm-MoveFiles_DUPLICATE').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmDuplicateTransfer();');
            // ALL ERRORS
            $('#confirm-CopyFiles_ALL_ERRORS').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmAllFailTypesTransfer();');
            $('#confirm-MoveFiles_ALL_ERRORS').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmAllFailTypesTransfer();');
        } else {
            // TOP
            $('#confirm-CopyFiles_TOP').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            $('#confirm-MoveFiles_TOP').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            // SECOND
            $('#confirm-CopyFiles_SECOND').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            $('#confirm-MoveFiles_SECOND').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            // NORMAL
            $('#confirm-CopyFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            $('#confirm-MoveFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            // ZIP
            $('#confirm-CopyFiles_ZIP').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            $('#confirm-MoveFiles_ZIP').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            // LOCK
            $('#confirm-CopyFiles_LOCK').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            $('#confirm-MoveFiles_LOCK').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            // FAILED
            $('#confirm-CopyFiles_FAILED').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            $('#confirm-MoveFiles_FAILED').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            // DUPLICATE
            $('#confirm-CopyFiles_DUPLICATE').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            $('#confirm-MoveFiles_DUPLICATE').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            // ALL ERRORS
            $('#confirm-CopyFiles_ALL_ERRORS').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
            $('#confirm-MoveFiles_ALL_ERRORS').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');            
        }
    });

    $('.shared_drive_section_2').hide();

    $(".shared_drive_section_2").on("click", function (e) {
        if ($('table#shared_drive-table tr').hasClass('files_go_here')) {
            $('#shared_drive_section_1').hide();
            $('#shared_drive_section_2').show();
            $('#show_transferred_Folders').show();
        } else {
            $('#shared_drive_section_1').hide();
            $('#shared_drive_section_2').show();
            $('#show_transferred_Folders').hide();
        }
    });

    $('#show_transferred_Folders, #show_transferred_Folder_Contents_1, #show_transferred_Folder_Contents_2, #show_transferred_Folder_Contents_3').hide();
 
    // Nav 2
    $('.shared_drive_nav_level_2').on("click", function (e) {
        e.preventDefault();

        $('#shared_drive_section_2').show();
        $('#show_transferred_Folders').show();
        $('#show_transferred_Folder_Contents_1, #show_transferred_Folder_Contents_2, #show_transferred_Folder_Contents_3').hide();
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_3, .shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_4').hide();
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_2 a').addClass('selected');
    });

    $('.shared_drive_section_2').on("click", function (e) {
        e.preventDefault();

        $('.shared_drive_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_2').show();
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_2 a').show().addClass('selected');

        var folder_name = $(this).text();
        $('.shared_drive_nav_level_2').text(folder_name).addClass('selected');
    });

    // Nav 3
    $('.shared_drive_nav_level_3').on("click", function (e) {
        e.preventDefault();
        // $('#shared_drive_section_1').show();
        // $('#shared_drive_empty_section_2').hide();
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_4').hide();
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_3 a').addClass('selected');
    });


    $(".show_section_pdrive_3A").on("click", function (e) {
        e.preventDefault();
        $('#shared_drive_section_2').show();
        $('#show_transferred_Folder_Contents_1, #shared_drive_section_2').show();
        $('#show_transferred_Folders, #shared_drive_section_1, #shared_drive_empty_section_2').hide();

        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_2').show();

        $('.shared_drive_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_3').show();
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_3 a').show().addClass('selected');
        var folder_name = $(this).text();
        $('.shared_drive_nav_level_3').text(folder_name).addClass('selected');

        if ($('#transfer_Folder_2A:checked')) {
            $('#show_transferred_Folder_Contents_1A').show();
        }
    });

    $(".show_section_pdrive_3B").on("click", function (e) {
        e.preventDefault();
        $('#show_transferred_Folder_Contents_2, #shared_drive_section_2').show();
        $('#show_transferred_Folders, #shared_drive_empty_section_2, #shared_drive_section_1').hide();

        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_2').show();

        $('.shared_drive_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_3').show();
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_3 a').show().addClass('selected');
        var folder_name = $(this).text();
        $('.shared_drive_nav_level_3').text(folder_name).addClass('selected');

        if ($('#transfer_Folder_2B:checked')) {
            $('#show_transferred_Folder_Contents_2A').show();
            $('#show_transferred_Folder_Contents_2B').show();
            $('#show_transferred_Folder_Contents_2C').show();
            $('#show_transferred_Folder_Contents_2D').show();
        }

    });

    $(".show_section_pdrive_3C").on("click", function (e) {
        e.preventDefault();
        $('#show_transferred_Folder_Contents_3, #shared_drive_section_2').show();
        $('#show_transferred_Folders, #shared_drive_empty_section_2, #shared_drive_section_1').hide();

        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_2').show();

        $('.shared_drive_nav nav.govuk-breadcrumbs ol li a').removeClass('selected');
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_3').show();
        $('.shared_drive_nav nav.govuk-breadcrumbs ol li.shared_drive_level_3 a').show().addClass('selected');
        var folder_name = $(this).text();
        $('.shared_drive_nav_level_3').text(folder_name).addClass('selected');

        if ($('#transfer_Folder_2C:checked')) {
            $('#show_transferred_Folder_Contents_3A').show();
            $('#show_transferred_Folder_Contents_3B').show();
            $('#show_transferred_Folder_Contents_3C').show();
            $('#show_transferred_Folder_Contents_3D').show();
            $('#show_transferred_Folder_Contents_3E').show();
            $('#show_transferred_Folder_Contents_3F').show();
        }
    });


    $('.pdrive_nav_4, .pdrive_nav_5').hide();
    $('.pdrive_stage_1, .pdrive_stage_2, .pdrive_stage_4, .pdrive_stage_5').hide();

    $("a.operation_name").on("click", function (e) {
        var folder_name = $(this).text();
        $('.folder_name').text(folder_name);
    });

    $("a.pdrive_stage_1").on("click", function (e) {
        $('.pdrive_items').hide();
        $('.pdrive_stage_2').show();
    });

    $("a.pdrive_stage_2").on("click", function (e) {
        $('.pdrive_items').hide();
        $('.pdrive_stage_3').show();
    });

    // Nav - L3
    $("a.pdrive_nav_3").on("click", function (e) {
        $('.pdrive_items').hide();
        $('.pdrive_stage_4').hide();
        $('.pdrive_stage_3, .pdrive_nav_3').show();
        $('.pdrive_stage_4, .pdrive_nav_4').hide();

        $('nav.govuk-breadcrumbs ol.govuk-breadcrumbs__list  li.govuk-breadcrumbs__list-item a').removeClass('selected');
        $('nav.govuk-breadcrumbs ol.govuk-breadcrumbs__list  li.govuk-breadcrumbs__list-item a.pdrive_nav_3').addClass('selected');
    });

    // Folder - L3
    $("a.pdrive_stage_3").on("click", function (e) {
        $('.pdrive_items').hide();
        $('.pdrive_stage_4').show();
        $('.pdrive_stage_4, .pdrive_nav_4').show();

        $('nav.govuk-breadcrumbs ol.govuk-breadcrumbs__list  li.govuk-breadcrumbs__list-item a').removeClass('selected');
        $('nav.govuk-breadcrumbs ol.govuk-breadcrumbs__list  li.govuk-breadcrumbs__list-item a.pdrive_nav_4').addClass('selected');
    });

    // Nav - L4
    $("a.pdrive_nav_4").on("click", function (e) {
        $('.pdrive_items').hide();
        $('.pdrive_stage_3, .pdrive_stage_4').hide();
        $('.pdrive_stage_4, .pdrive_nav_4').show();
        $('.pdrive_stage_3, .pdrive_stage_5, .pdrive_nav_5').hide();

        $('nav.govuk-breadcrumbs ol.govuk-breadcrumbs__list  li.govuk-breadcrumbs__list-item a').removeClass('selected');
        $('nav.govuk-breadcrumbs ol.govuk-breadcrumbs__list  li.govuk-breadcrumbs__list-item a.pdrive_nav_4').addClass('selected');
    });

    // Folder - L4
    $("a.pdrive_stage_4").on("click", function (e) {
        $('.pdrive_items').hide();
        $('.pdrive_stage_5, .pdrive_nav_5').show();

        $('nav.govuk-breadcrumbs ol.govuk-breadcrumbs__list  li.govuk-breadcrumbs__list-item a').removeClass('selected');
        $('nav.govuk-breadcrumbs ol.govuk-breadcrumbs__list  li.govuk-breadcrumbs__list-item a.pdrive_nav_5').addClass('selected');
    });

})

function closeLongFilePaths() {
    $('#longFilePaths').addClass('rj-dont-display');
    $('table#shared_drive-table tbody tr').removeClass('files_go_here');
    $('#transfer_Folder_2D').prop('checked', false);
    $('.transfer_Folder_Destination, .move_Folder_Destination, .copy_Folder_Destination, .duplicate_transfer_Folder_Destination').hide();
}

function closeConfirmTransferFiles() {
    $('#confirmTransferFiles').addClass('rj-dont-display');
    $('table#shared_drive-table tbody tr').removeClass('files_go_here');
}

function confirmFailedTransfer() {
    $('#confirmTransferFiles').addClass('rj-dont-display');
    $('#completing_transfer_V2').show();
    $('.section-wrapper.materials_holder, .egress_to_shared_drive').hide();
    setTimeout(function () {
        window.location.href = "10A-file-errors.html"; //will redirect to your blog page (an ex: blog.html)
    }, 15150);
}

function confirmDuplicateTransfer() {
    $('#confirmTransferFiles').addClass('rj-dont-display');
    $('#completing_transfer_V4').show();
    $('.section-wrapper.materials_holder, .egress_to_shared_drive').hide();
    setTimeout(function () {
        window.location.href = "11A-file-duplicate.html"; //will redirect to your blog page (an ex: blog.html)
    }, 7250);
}

function confirmAllFailTypesTransfer() {
    $('#confirmTransferFiles').addClass('rj-dont-display');
    $('#completing_transfer_V5').show();
    $('#completing_transfer_V5 .indexing_files').show();
    $('#completing_transfer_V5 .transferring_files').hide();

    $('.section-wrapper.materials_holder, .egress_to_shared_drive').hide();

    setTimeout(function () {
        $('#completing_transfer_V5 .indexing_files').hide();
        $('#completing_transfer_V5 .transferring_files').show();
        $('p.duplicate_message').show();
    }, 2000);

    setTimeout(function () {
        $('p.error_message').show();
        $('.files_transfers_duplicate').html('2');
    }, 4000);

    setTimeout(function () {
        $('.files_transfers_duplicate').html('3');
        $('.files_transfers_failed').html('2');
    }, 5500);

    setTimeout(function () {
        $('.files_transfers_failed').html('4');
    }, 6000);

    setTimeout(function () {
        $('.files_transfers_failed').html('5');
    }, 7000);

    setTimeout(function () {
        $('.files_transfers_duplicate').html('4');
        $('.files_transfers_failed').html('6');

        window.location.href = "10B-all-file-errors.html"; //will redirect to your blog page (an ex: blog.html)
    }, 7250);

    $(function() {
        function count($this){
            var current = parseInt($this.html(), 10);
            $this.html(++current);
            if(current !== $this.data('count')){
                setTimeout(function(){count($this)}, 100);
            }
        }        
        $(".loading_transfer_completed_V4").each(function() {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            count($(this));
        });
    });

}

function confirmLongFilePaths() {
    $('#confirmTransferFiles').addClass('rj-dont-display');
    $('#completing_transfer_V3').show();
    $('.section-wrapper.materials_holder, .egress_to_shared_drive').hide();
    setTimeout(function () {
        window.location.href = "06A-long-file-paths.html"; //will redirect to your blog page (an ex: blog.html)
    }, 18250);
}

$(document).ready(function () {

    $('p.error_message, .transferring_files').hide();

    // FAILED FILES
    $('#confirm-CopyFiles_FAILED, #confirm-MoveFiles_FAILED').on("click", function (e) {

        $('.indexing_files').show();

        setTimeout(function () {
            $('.indexing_files').hide();
            $('.transferring_files').show();
        }, 2000);

        setTimeout(function () {
            $('p.error_message').show();
        }, 4000);

        setTimeout(function () {
            $('.files_transfers_failed').html('2');
        }, 4500);

        setTimeout(function () {
            $('.files_transfers_failed').html('3');
        }, 6000);

        setTimeout(function () {
            $('.files_transfers_failed').html('4');
        }, 8000);

        $(function() {
            function count($this){
                var current = parseInt($this.html(), 10);
                $this.html(++current);
                if(current !== $this.data('count')){
                    setTimeout(function(){count($this)}, 100);
                }
            }        
            $(".loading_transfer_completed_V1").each(function() {
                $(this).data('count', parseInt($(this).html(), 10));
                $(this).html('0');
                count($(this));
            });
        });    

    });
});
    


// function closeConfirmTransferComplete() {
//     $('#confirmTransferComplete').addClass('rj-dont-display');
// }

// ========================= LONG FILE PATHS =========================
$(document).ready(function () {

    // 1 - LONG FILE PATHS
    if (window.location.href.indexOf("long_file_path_COMPLETED") > -1) {
        $('#completing_transfer_V3').show();
        $('#success_banner_LONG_CHARACTER, .egress_to_shared_drive, .section-wrapper.materials_holder, #success_banner_FAILED_FILES').hide();

        $('#egress_section_1').hide();
        $('#egress_section_2').show();

        $(function() {
            function count($this){
                var current = parseInt($this.html(), 10);
                $this.html(++current);
                if(current !== $this.data('count')){
                    setTimeout(function(){count($this)}, 100);
                }
            }        
            $(".loading_transfer_completed_V2").each(function() {
                $(this).data('count', parseInt($(this).html(), 10));
                $(this).html('0');
                count($(this));
            });
        });

        setTimeout(function () {
            $('#completing_transfer_V3').hide();
            $('#success_banner_LONG_CHARACTER, .egress_to_shared_drive, .section-wrapper.materials_holder').show();
        }, 20000)

    }

    // 2 - DUPLICATE FILES
    if (window.location.href.indexOf("duplicate_files_COMPLETED") > -1) {
        $('#completing_transfer_V4').show();
        $('#success_banner_FAILED_FILES, .egress_to_shared_drive, .section-wrapper.materials_holder').hide();

        $('#egress_section_1').hide();
        $('#egress_section_2').show();

        $(function() {
            function count($this){
                var current = parseInt($this.html(), 10);
                $this.html(++current);
                if(current !== $this.data('count')){
                    setTimeout(function(){count($this)}, 100);
                }
            }        
            $(".loading_transfer_completed_V3").each(function() {
                $(this).data('count', parseInt($(this).html(), 10));
                $(this).html('0');
                count($(this));
            });
        });

        setTimeout(function () {
            $('#completing_transfer_V4').hide();
            $('#success_banner_FAILED_FILES, .egress_to_shared_drive, .section-wrapper.materials_holder').show();
        }, 7500)
    }

    // 3 - DUPLICATE FILES
    if (window.location.href.indexOf("failed_files_COMPLETED") > -1) {
        $('#completing_transfer_V2').hide();
        $('#success_banner_FAILED_FILES, .egress_to_shared_drive, .section-wrapper.materials_holder').show();

        $('#egress_section_1').hide();
        $('#egress_section_2').show();

        // $(function() {
        //     function count($this){
        //         var current = parseInt($this.html(), 10);
        //         $this.html(++current);
        //         if(current !== $this.data('count')){
        //             setTimeout(function(){count($this)}, 100);
        //         }
        //     }        
        //     $(".loading_transfer_completed_V1").each(function() {
        //         $(this).data('count', parseInt($(this).html(), 10));
        //         $(this).html('0');
        //         count($(this));
        //     });
        // });

        // setTimeout(function () {
        //     $('#completing_transfer_V2').hide();
        //     $('#success_banner_FAILED_FILES, .egress_to_shared_drive, .section-wrapper.materials_holder').show();
        // }, 7500)
    }


    // 4 - FILE LOCKED
    if (window.location.href.indexOf("file_locked_COMPLETED") > -1) {
        $('#completing_transfer_V2, #success_banner_FAILED_FILES').hide();

        setTimeout(function () {
            $('#success_banner_FAILED_FILES, .egress_to_shared_drive, .section-wrapper.materials_holder').show();
        }, 3000)

        $('#egress_section_1').hide();
        $('#egress_section_2').show();
    }

    // 5 - ALL FILE ERRORS LOCKED
    if (window.location.href.indexOf("all_file_errors_COMPLETED") > -1) {

        $(function() {
            function count($this){
                var current = parseInt($this.html(), 10);
                $this.html(++current);
                if(current !== $this.data('count')){
                    setTimeout(function(){count($this)}, 100);
                }
            }        
            $(".loading_transfer_completed_V3").each(function() {
                $(this).data('count', parseInt($(this).html(), 10));
                $(this).html('0');
                count($(this));
            });
        });

        $('#completing_transfer_V4').show();
        $('#success_banner_FAILED_FILES, #egress_container, #shared_drive_container, .egress_to_shared_drive').hide();

        setTimeout(function () {
            $('#completing_transfer_V4').hide();
            $('#success_banner_FAILED_FILES, #egress_container, #shared_drive_container, .egress_to_shared_drive').show();
        }, 3000)

        $('#egress_section_1').hide();
        $('#egress_section_2').show();
    } 

    // FILE NAME - 1
    $("input[id=long_file_path_1_NAME]").on("keyup", function (e) {
        var number_of_characters = parseInt($('#long_file_path_1_NAME').val().length);
        var starting_number = 198;
        var total_number_of_characters = parseInt($('.total_character_number').text());
        $('.total_character_number').text(starting_number + number_of_characters);
        if (starting_number + number_of_characters <= 260) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#long_file_path_1_BUTTON').prop('disabled', false).removeClass('govuk-button--disabled').prop('aria-disabled', false);
        } else if (starting_number + number_of_characters >= 261) {
            $('.total_character_number').parent().addClass('govuk-tag--red').removeClass('govuk-tag--green');
            $('#long_file_path_1_BUTTON').prop('disabled', true).addClass('govuk-button--disabled').prop('aria-disabled', true);
        }
    });

    $("#long_file_path_1_BUTTON").on("click", function (e) {
        $.cookie("long_file_path_1", $('.total_character_number').text(), {path:'/'});
    });

    if ($.cookie("long_file_path_1")) {
        $('.long_file_path_1').text($.cookie("long_file_path_1"));
    }

    // FILE NAME - 2
    $("input[id=long_file_path_2_NAME]").on("keyup", function (e) {
        var number_of_characters = parseInt($('#long_file_path_2_NAME').val().length);
        var starting_number = 198;
        var total_number_of_characters = parseInt($('.total_character_number').text());
        $('.total_character_number').text(starting_number + number_of_characters);
        if (starting_number + number_of_characters <= 260) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#long_file_path_2_BUTTON').prop('disabled', false).removeClass('govuk-button--disabled').prop('aria-disabled', false);
        } else if (starting_number + number_of_characters >= 261) {
            $('.total_character_number').parent().addClass('govuk-tag--red').removeClass('govuk-tag--green');
            $('#long_file_path_2_BUTTON').prop('disabled', true).addClass('govuk-button--disabled').prop('aria-disabled', true);
        }
    });

    $("#long_file_path_2_BUTTON").on("click", function (e) {
        $.cookie("long_file_path_2", $('.total_character_number').text(), {path:'/'});
    });

    if ($.cookie("long_file_path_2")) {
        $('.long_file_path_2').text($.cookie("long_file_path_2"));
    }

    // FILE NAME - 3
    $("input[id=long_file_path_3_NAME]").on("keyup", function (e) {
        var number_of_characters = parseInt($('#long_file_path_3_NAME').val().length);
        var starting_number = 198;
        var total_number_of_characters = parseInt($('.total_character_number').text());
        $('.total_character_number').text(starting_number + number_of_characters);
        if (starting_number + number_of_characters <= 260) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#long_file_path_3_BUTTON').prop('disabled', false).removeClass('govuk-button--disabled').prop('aria-disabled', false);
        } else if (starting_number + number_of_characters >= 261) {
            $('.total_character_number').parent().addClass('govuk-tag--red').removeClass('govuk-tag--green');
            $('#long_file_path_3_BUTTON').prop('disabled', true).addClass('govuk-button--disabled').prop('aria-disabled', true);
        }
    });

    $("#long_file_path_3_BUTTON").on("click", function (e) {
        $.cookie("long_file_path_3", $('.total_character_number').text(), {path:'/'});
    });

    if ($.cookie("long_file_path_3")) {
        $('.long_file_path_3').text($.cookie("long_file_path_3"));
    }

    // FILE NAME - 4
    $("input[id=long_file_path_4_NAME]").on("keyup", function (e) {
        var number_of_characters = parseInt($('#long_file_path_4_NAME').val().length);
        var starting_number = 198;
        var total_number_of_characters = parseInt($('.total_character_number').text());
        $('.total_character_number').text(starting_number + number_of_characters);
        if (starting_number + number_of_characters <= 260) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#long_file_path_4_BUTTON').prop('disabled', false).removeClass('govuk-button--disabled').prop('aria-disabled', false);
        } else if (starting_number + number_of_characters >= 261) {
            $('.total_character_number').parent().addClass('govuk-tag--red').removeClass('govuk-tag--green');
            $('#long_file_path_4_BUTTON').prop('disabled', true).addClass('govuk-button--disabled').prop('aria-disabled', true);
        }
    });

    $("#long_file_path_4_BUTTON").on("click", function (e) {
        $.cookie("long_file_path_4", $('.total_character_number').text(), {path:'/'});
    });

    if ($.cookie("long_file_path_4")) {
        $('.long_file_path_4').text($.cookie("long_file_path_4"));
    }


    // FOLDER STRUCTURE - 1
    $("input[id=structure_1_level_1]").on("keyup", function (e) {  
        var structure_1_level_1 = parseInt($('#structure_1_level_1').val().length);
        var structure_1_level_2 = parseInt($('#structure_1_level_2').val().length);
        var structure_1_level_3 = parseInt($('#structure_1_level_3').val().length);
        var structure_1_level_4 = parseInt($('#structure_1_level_4').val().length);
        var structure_1_level_5 = parseInt($('#structure_1_level_5').val().length);
        var structure_1_level_6 = parseInt($('#structure_1_level_6').val().length);
        var structure_1_level_7 = parseInt($('#structure_1_level_7').val().length);
        var total_number_of_characters = parseInt(structure_1_level_1 + structure_1_level_2 + structure_1_level_3 + structure_1_level_4 + structure_1_level_5 + structure_1_level_6 + structure_1_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_1_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_1_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_1_level_2]").on("keyup", function (e) {  
        var structure_1_level_1 = parseInt($('#structure_1_level_1').val().length);
        var structure_1_level_2 = parseInt($('#structure_1_level_2').val().length);
        var structure_1_level_3 = parseInt($('#structure_1_level_3').val().length);
        var structure_1_level_4 = parseInt($('#structure_1_level_4').val().length);
        var structure_1_level_5 = parseInt($('#structure_1_level_5').val().length);
        var structure_1_level_6 = parseInt($('#structure_1_level_6').val().length);
        var structure_1_level_7 = parseInt($('#structure_1_level_7').val().length);
        var total_number_of_characters = parseInt(structure_1_level_1 + structure_1_level_2 + structure_1_level_3 + structure_1_level_4 + structure_1_level_5 + structure_1_level_6 + structure_1_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_1_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_1_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_1_level_3]").on("keyup", function (e) {  
        var structure_1_level_1 = parseInt($('#structure_1_level_1').val().length);
        var structure_1_level_2 = parseInt($('#structure_1_level_2').val().length);
        var structure_1_level_3 = parseInt($('#structure_1_level_3').val().length);
        var structure_1_level_4 = parseInt($('#structure_1_level_4').val().length);
        var structure_1_level_5 = parseInt($('#structure_1_level_5').val().length);
        var structure_1_level_6 = parseInt($('#structure_1_level_6').val().length);
        var structure_1_level_7 = parseInt($('#structure_1_level_7').val().length);
        var total_number_of_characters = parseInt(structure_1_level_1 + structure_1_level_2 + structure_1_level_3 + structure_1_level_4 + structure_1_level_5 + structure_1_level_6 + structure_1_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_1_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_1_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_1_level_4]").on("keyup", function (e) {  
        var structure_1_level_1 = parseInt($('#structure_1_level_1').val().length);
        var structure_1_level_2 = parseInt($('#structure_1_level_2').val().length);
        var structure_1_level_3 = parseInt($('#structure_1_level_3').val().length);
        var structure_1_level_4 = parseInt($('#structure_1_level_4').val().length);
        var structure_1_level_5 = parseInt($('#structure_1_level_5').val().length);
        var structure_1_level_6 = parseInt($('#structure_1_level_6').val().length);
        var structure_1_level_7 = parseInt($('#structure_1_level_7').val().length);
        var total_number_of_characters = parseInt(structure_1_level_1 + structure_1_level_2 + structure_1_level_3 + structure_1_level_4 + structure_1_level_5 + structure_1_level_6 + structure_1_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_1_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_1_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_1_level_5]").on("keyup", function (e) {  
        var structure_1_level_1 = parseInt($('#structure_1_level_1').val().length);
        var structure_1_level_2 = parseInt($('#structure_1_level_2').val().length);
        var structure_1_level_3 = parseInt($('#structure_1_level_3').val().length);
        var structure_1_level_4 = parseInt($('#structure_1_level_4').val().length);
        var structure_1_level_5 = parseInt($('#structure_1_level_5').val().length);
        var structure_1_level_6 = parseInt($('#structure_1_level_6').val().length);
        var structure_1_level_7 = parseInt($('#structure_1_level_7').val().length);
        var total_number_of_characters = parseInt(structure_1_level_1 + structure_1_level_2 + structure_1_level_3 + structure_1_level_4 + structure_1_level_5 + structure_1_level_6 + structure_1_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_1_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_1_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_1_level_6]").on("keyup", function (e) {  
        var structure_1_level_1 = parseInt($('#structure_1_level_1').val().length);
        var structure_1_level_2 = parseInt($('#structure_1_level_2').val().length);
        var structure_1_level_3 = parseInt($('#structure_1_level_3').val().length);
        var structure_1_level_4 = parseInt($('#structure_1_level_4').val().length);
        var structure_1_level_5 = parseInt($('#structure_1_level_5').val().length);
        var structure_1_level_6 = parseInt($('#structure_1_level_6').val().length);
        var structure_1_level_7 = parseInt($('#structure_1_level_7').val().length);
        var total_number_of_characters = parseInt(structure_1_level_1 + structure_1_level_2 + structure_1_level_3 + structure_1_level_4 + structure_1_level_5 + structure_1_level_6 + structure_1_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_1_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_1_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_1_level_7]").on("keyup", function (e) {  
        var structure_1_level_1 = parseInt($('#structure_1_level_1').val().length);
        var structure_1_level_2 = parseInt($('#structure_1_level_2').val().length);
        var structure_1_level_3 = parseInt($('#structure_1_level_3').val().length);
        var structure_1_level_4 = parseInt($('#structure_1_level_4').val().length);
        var structure_1_level_5 = parseInt($('#structure_1_level_5').val().length);
        var structure_1_level_6 = parseInt($('#structure_1_level_6').val().length);
        var structure_1_level_7 = parseInt($('#structure_1_level_7').val().length);
        var total_number_of_characters = parseInt(structure_1_level_1 + structure_1_level_2 + structure_1_level_3 + structure_1_level_4 + structure_1_level_5 + structure_1_level_6 + structure_1_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_1_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_1_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    // FOLDER STRUCTURE - 2
    $("input[id=structure_2_level_1]").on("keyup", function (e) {  
        var structure_2_level_1 = parseInt($('#structure_2_level_1').val().length);
        var structure_2_level_2 = parseInt($('#structure_2_level_2').val().length);
        var structure_2_level_3 = parseInt($('#structure_2_level_3').val().length);
        var structure_2_level_4 = parseInt($('#structure_2_level_4').val().length);
        var structure_2_level_5 = parseInt($('#structure_2_level_5').val().length);
        var structure_2_level_6 = parseInt($('#structure_2_level_6').val().length);
        var structure_2_level_7 = parseInt($('#structure_2_level_7').val().length);
        var total_number_of_characters = parseInt(structure_2_level_1 + structure_2_level_2 + structure_2_level_3 + structure_2_level_4 + structure_2_level_5 + structure_2_level_6 + structure_2_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_2_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_2_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_2_level_2]").on("keyup", function (e) {  
        var structure_2_level_1 = parseInt($('#structure_2_level_1').val().length);
        var structure_2_level_2 = parseInt($('#structure_2_level_2').val().length);
        var structure_2_level_3 = parseInt($('#structure_2_level_3').val().length);
        var structure_2_level_4 = parseInt($('#structure_2_level_4').val().length);
        var structure_2_level_5 = parseInt($('#structure_2_level_5').val().length);
        var structure_2_level_6 = parseInt($('#structure_2_level_6').val().length);
        var structure_2_level_7 = parseInt($('#structure_2_level_7').val().length);
        var total_number_of_characters = parseInt(structure_2_level_1 + structure_2_level_2 + structure_2_level_3 + structure_2_level_4 + structure_2_level_5 + structure_2_level_6 + structure_2_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_2_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_2_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_2_level_3]").on("keyup", function (e) {  
        var structure_2_level_1 = parseInt($('#structure_2_level_1').val().length);
        var structure_2_level_2 = parseInt($('#structure_2_level_2').val().length);
        var structure_2_level_3 = parseInt($('#structure_2_level_3').val().length);
        var structure_2_level_4 = parseInt($('#structure_2_level_4').val().length);
        var structure_2_level_5 = parseInt($('#structure_2_level_5').val().length);
        var structure_2_level_6 = parseInt($('#structure_2_level_6').val().length);
        var structure_2_level_7 = parseInt($('#structure_2_level_7').val().length);
        var total_number_of_characters = parseInt(structure_2_level_1 + structure_2_level_2 + structure_2_level_3 + structure_2_level_4 + structure_2_level_5 + structure_2_level_6 + structure_2_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_2_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_2_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_2_level_4]").on("keyup", function (e) {  
        var structure_2_level_1 = parseInt($('#structure_2_level_1').val().length);
        var structure_2_level_2 = parseInt($('#structure_2_level_2').val().length);
        var structure_2_level_3 = parseInt($('#structure_2_level_3').val().length);
        var structure_2_level_4 = parseInt($('#structure_2_level_4').val().length);
        var structure_2_level_5 = parseInt($('#structure_2_level_5').val().length);
        var structure_2_level_6 = parseInt($('#structure_2_level_6').val().length);
        var structure_2_level_7 = parseInt($('#structure_2_level_7').val().length);
        var total_number_of_characters = parseInt(structure_2_level_1 + structure_2_level_2 + structure_2_level_3 + structure_2_level_4 + structure_2_level_5 + structure_2_level_6 + structure_2_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_2_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_2_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_2_level_5]").on("keyup", function (e) {  
        var structure_2_level_1 = parseInt($('#structure_2_level_1').val().length);
        var structure_2_level_2 = parseInt($('#structure_2_level_2').val().length);
        var structure_2_level_3 = parseInt($('#structure_2_level_3').val().length);
        var structure_2_level_4 = parseInt($('#structure_2_level_4').val().length);
        var structure_2_level_5 = parseInt($('#structure_2_level_5').val().length);
        var structure_2_level_6 = parseInt($('#structure_2_level_6').val().length);
        var structure_2_level_7 = parseInt($('#structure_2_level_7').val().length);
        var total_number_of_characters = parseInt(structure_2_level_1 + structure_2_level_2 + structure_2_level_3 + structure_2_level_4 + structure_2_level_5 + structure_2_level_6 + structure_2_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_2_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_2_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_2_level_6]").on("keyup", function (e) {  
        var structure_2_level_1 = parseInt($('#structure_2_level_1').val().length);
        var structure_2_level_2 = parseInt($('#structure_2_level_2').val().length);
        var structure_2_level_3 = parseInt($('#structure_2_level_3').val().length);
        var structure_2_level_4 = parseInt($('#structure_2_level_4').val().length);
        var structure_2_level_5 = parseInt($('#structure_2_level_5').val().length);
        var structure_2_level_6 = parseInt($('#structure_2_level_6').val().length);
        var structure_2_level_7 = parseInt($('#structure_2_level_7').val().length);
        var total_number_of_characters = parseInt(structure_2_level_1 + structure_2_level_2 + structure_2_level_3 + structure_2_level_4 + structure_2_level_5 + structure_2_level_6 + structure_2_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_2_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_2_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

    $("input[id=structure_2_level_7]").on("keyup", function (e) {  
        var structure_2_level_1 = parseInt($('#structure_2_level_1').val().length);
        var structure_2_level_2 = parseInt($('#structure_2_level_2').val().length);
        var structure_2_level_3 = parseInt($('#structure_2_level_3').val().length);
        var structure_2_level_4 = parseInt($('#structure_2_level_4').val().length);
        var structure_2_level_5 = parseInt($('#structure_2_level_5').val().length);
        var structure_2_level_6 = parseInt($('#structure_2_level_6').val().length);
        var structure_2_level_7 = parseInt($('#structure_2_level_7').val().length);
        var total_number_of_characters = parseInt(structure_2_level_1 + structure_2_level_2 + structure_2_level_3 + structure_2_level_4 + structure_2_level_5 + structure_2_level_6 + structure_2_level_7);
        $('.total_character_number').text(193 + total_number_of_characters);
        if (total_number_of_characters <= 67) {
            $('.total_character_number').parent().removeClass('govuk-tag--red').addClass('govuk-tag--green');
            $('#structure_2_COMPLETED_Button').removeAttr('disabled').attr('aria-disabled','false').removeClass('govuk-button--disabled');
        } else {
            $('.total_character_number').parent().removeClass('govuk-tag--green').addClass('govuk-tag--red');
            $('#structure_2_COMPLETED_Button').attr('disabled','disabled').attr('aria-disabled','true').addClass('govuk-button--disabled');
        }
    });

})

// ========================= AUDIT  =========================
$(document).ready(function () {

    $('.audit_item').hide();

    // $('button.move_content_show, button.copy_content_show').on("click", function (e) {
    //     if ($('input[id=transfer_Folder_2A]:checked') || $('input[id=transfer_Folder_2B]:checked') || $('input[id=transfer_Folder_2C]:checked')) { 
    //         $('#show_transferred_Folders').show();
    //         $('#show_transferred_Folder_Contents_1, #show_transferred_Folder_Contents_2, #show_transferred_Folder_Contents_3').hide();
    //     }

    //     if ($('input[id=transfer_Folder_2A]:checked') { 

    //     }

    //     if ($('input[id=select_all_Folder_3A]:checked') || $('input[id=transfer_Folder_3A_1]:checked')) { 
    //         $('#show_transferred_Folder_Contents_1').show();
    //         $('#show_transferred_Folders, #show_transferred_Folder_Contents_2, #show_transferred_Folder_Contents_3').hide();
    //     }
        
    //     if ($('input[id=select_all_Folder_3B]:checked') || $('input[id=transfer_Folder_3B_1]:checked') || $('input[id=transfer_Folder_3B_2]:checked') || $('input[id=transfer_Folder_3B_3]:checked') || $('input[id=transfer_Folder_3B_4]:checked')) { 
    //         $('#show_transferred_Folder_Contents_2').show();
    //         $('#show_transferred_Folders, #show_transferred_Folder_Contents_1, #show_transferred_Folder_Contents_3').hide();
    //     }

    //     if ($('input[id=select_all_Folder_3C]:checked') || $('input[id=transfer_Folder_3C_1]:checked') || $('input[id=transfer_Folder_3C_2]:checked') || $('input[id=transfer_Folder_3C_3]:checked') || $('input[id=transfer_Folder_3C_4]:checked') || $('input[id=transfer_Folder_3C_5]:checked') || $('input[id=transfer_Folder_3C_4]:checked')) { 
    //         $('#show_transferred_Folder_Contents_3').show();
    //         $('#show_transferred_Folders, #show_transferred_Folder_Contents_1, #show_transferred_Folder_Contents_2').hide();
    //     }
    // });


    // MOVED 
    $('button.move_content_show').on("click", function (e) {
        $('#audit_documents_moved').show();
        $('.govuk-notification-banner').hide();
        if ($('tr.top_level_folder_1').hasClass('selected_for_transfer')) { 
            $('.documents_folder_name_list').append(`
                <li class="non_list_item"><span class="icon-new folder"></span> Reviews</li>
                <li><span class="icon-new file"></span> MCLOVEMG3.pdf</li>
            `); 
        }
        if ($('tr.top_level_folder_2').hasClass('selected_for_transfer')) { 
            $('.documents_folder_name_list').append(`
                <li class="non_list_item"><span class="icon-new folder"></span> Case overview</li>
                <li><span class="icon-new file"></span> CM01.pdf</li>
                <li><span class="icon-new file"></span> CM01.pdf</li>
                <li><span class="icon-new file"></span> MG06_3June.pdf</li>
                <li><span class="icon-new file"></span> MG06_10june.pdf</li>
            `); 
        }
        if ($('tr.top_level_folder_3').hasClass('selected_for_transfer')) { 
            $('.documents_folder_name_list').append(`
                <li class="non_list_item"><span class="icon-new folder"></span> Statements</li>
                <li><span class="icon-new file"></span> stmt_BLAYNEE_2034_1_JUNE_mg11.pdf</li>
                <li><span class="icon-new file"></span> stmt_JONES_1989_1_JUNE_mg11.pdf</li>
                <li><span class="icon-new file"></span> stmt_Lucy_Doyle_MG11.pdf</li>
                <li><span class="icon-new file"></span> stmt_Shelagh_McLove_MG11_hand.pdf</li>
                <li><span class="icon-new file"></span> Shelagh_McLove_VPS_mg11.pdf</li>
                <li><span class="icon-new file"></span> MG11_Shelagh_MCLOVE_retraction.pdf</li>
            `);
        }
        if ($('tr.top_level_folder_4').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li class="non_list_item"><span class="icon-new folder"></span> Digital evidence</li>`); }
        if ($('tr.top_level_folder_5').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li class="non_list_item"><span class="icon-new folder"></span> New evidence</li>`); }
        if ($('tr.top_level_folder_6').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> mg11_BLAYNEE.pdf</li>`); }
        if ($('tr.top_level_folder_7').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> MG11_Joe_BLOGGS.pdf</li>`); }

        if ($('tr.second_level_file_1').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> MCLOVEMG3.pdf</li>`); }
  
        if ($('tr.second_level_file_2').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> CM01.pdf</li>`); }
        if ($('tr.second_level_file_3').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> CM01.pdf</li>`); }
        if ($('tr.second_level_file_4').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> MG06_3June.pdf</li>`); }
        if ($('tr.second_level_file_5').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> MG06_10june.pdf</li>`); }

        if ($('tr.second_level_file_6').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> stmt_BLAYNEE_2034_1_JUNE_mg11.pdf</li>`); }
        if ($('tr.second_level_file_7').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> stmt_JONES_1989_1_JUNE_mg11.pdf</li>`); }
        if ($('tr.second_level_file_8').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> stmt_Lucy_Doyle_MG11.pdf</li>`); }
        if ($('tr.second_level_file_9').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> stmt_Shelagh_McLove_MG11_hand.pdf</li>`); }
        if ($('tr.second_level_file_10').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> Shelagh_McLove_VPS_mg11.pdf</li>`); }
        if ($('tr.second_level_file_11').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> MG11_Shelagh_MCLOVE_retraction.pdf</li>`); }

        if ($('input[id=select_all_Folder_3A]:checked') || $('input[id=transfer_Folder_3A_1]:checked')) { 
            $('#transfer_Folder_3A_hidden_row').show(); 
        } else { 
            $('#transfer_Folder_3A_hidden_row').hide(); 
        }

        if ($('input[id=select_all_Folder_3B]').is(':checked')) { 
            $('#transfer_Folder_3B_hidden_row').show(); 
        } else { 
            $('#transfer_Folder_3B_hidden_row').hide(); 
        }

        if ($('input[id=select_all_Folder_3C]').is(':checked')) { 
            $('#transfer_Folder_3C_hidden_row').show(); 
        } else { 
            $('#transfer_Folder_3C_hidden_row').hide(); 
        }
    });

    // COPIED 
    $('button.copy_content_show').on("click", function (e) {
        $('#audit_documents_copied').show();
        $('.govuk-notification-banner').hide();
        if ($('tr.top_level_folder_1').hasClass('selected_for_transfer')) { 
            $('.documents_folder_name_list').append(`
                <li class="non_list_item"><span class="icon-new folder"></span> Reviews</li>
                <li><span class="icon-new file"></span> MCLOVEMG3.pdf</li>
            `); 
        }
        if ($('tr.top_level_folder_2').hasClass('selected_for_transfer')) { 
            $('.documents_folder_name_list').append(`
                <li class="non_list_item"><span class="icon-new folder"></span> Case overview</li>
                <li><span class="icon-new file"></span> CM01.pdf</li>
                <li><span class="icon-new file"></span> CM01.pdf</li>
                <li><span class="icon-new file"></span> MG06_3June.pdf</li>
                <li><span class="icon-new file"></span> MG06_10june.pdf</li>
            `); 
        }
        if ($('tr.top_level_folder_3').hasClass('selected_for_transfer')) { 
            $('.documents_folder_name_list').append(`
                <li class="non_list_item"><span class="icon-new folder"></span> Statements</li>
                <li><span class="icon-new file"></span> stmt_BLAYNEE_2034_1_JUNE_mg11.pdf</li>
                <li><span class="icon-new file"></span> stmt_JONES_1989_1_JUNE_mg11.pdf</li>
                <li><span class="icon-new file"></span> stmt_Lucy_Doyle_MG11.pdf</li>
                <li><span class="icon-new file"></span> stmt_Shelagh_McLove_MG11_hand.pdf</li>
                <li><span class="icon-new file"></span> Shelagh_McLove_VPS_mg11.pdf</li>
                <li><span class="icon-new file"></span> MG11_Shelagh_MCLOVE_retraction.pdf</li>
            `);
        }
        if ($('tr.top_level_folder_4').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new folder"></span> Digital evidence</li>`); }
        if ($('tr.top_level_folder_5').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new folder"></span> New evidence</li>`); }
        if ($('tr.top_level_folder_6').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> mg11_BLAYNEE.pdf</li>`); }
        if ($('tr.top_level_folder_7').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> MG11_Joe_BLOGGS.pdf<</li>`); }
 
        if ($('tr.second_level_file_1').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> MCLOVEMG3.pdf</li>`); }
  
        if ($('tr.second_level_file_2').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> CM01.pdf</li>`); }
        if ($('tr.second_level_file_3').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> CM01.pdf</li>`); }
        if ($('tr.second_level_file_4').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> MG06_3June.pdf</li>`); }
        if ($('tr.second_level_file_5').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> MG06_10june.pdf</li>`); }

        if ($('tr.second_level_file_6').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> stmt_BLAYNEE_2034_1_JUNE_mg11.pdf</li>`); }
        if ($('tr.second_level_file_7').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> stmt_JONES_1989_1_JUNE_mg11.pdf</li>`); }
        if ($('tr.second_level_file_8').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> stmt_Lucy_Doyle_MG11.pdf</li>`); }
        if ($('tr.second_level_file_9').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> stmt_Shelagh_McLove_MG11_hand.pdf</li>`); }
        if ($('tr.second_level_file_10').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> Shelagh_McLove_VPS_mg11.pdf</li>`); }
        if ($('tr.second_level_file_11').hasClass('selected_for_transfer')) { $('.documents_folder_name_list').append(`<li><span class="icon-new file"></span> MG11_Shelagh_MCLOVE_retraction.pdf</li>`); }

        if ($('input[id=select_all_Folder_3A]').is(':checked')) { $('#transfer_Folder_3A_hidden_row').hide(); }
        if ($('input[id=select_all_Folder_3B]').is(':checked')) { $('#transfer_Folder_3B_hidden_row').hide(); }
        if ($('input[id=select_all_Folder_3C]').is(':checked')) { $('#transfer_Folder_3C_hidden_row').hide(); }
    });

    // NEW FOLDER 
    // $('button#confirm-NewFolder').on("click", function (e) {
    //     $('#audit_documents_new_folder').show();
    //     var newFolderName = $('input[id=shared_drive_NewFolder]').val();
    //     $('.new_folder_name').text(newFolderName);
    // });

    // DELETE FOLDER
    $('button#confirm-DeleteFolder').on("click", function (e) {
        $('#audit_documents_delete_folder').show();
    });

    // RENAME FOLDER
    $('button#confirm-DeleteFolder').on("click", function (e) {
        $('#audit_documents_delete_folder').show();
    });

});



// ========================= MANAGE - P DRIVE files =========================
$(document).ready(function () {

    $('#manage_SD_section_1, #rename_folder, .search_headline .line_2, #success_banner_Folder, #success_banner_Deleted, #shared_drive_move_container, #success_banner_Move_Folder, #success_banner_New_Folder').hide();

    setTimeout(function () {
        $('#manage_SD_section_1').show();
        $('#success_banner_New_Folder').show();
    }, 3000)

    $('#select_all_manage_SD_Folder_1').change(function () {
        $('input[name=select_manage_SD_Folder_1]').prop('checked', $(this).prop('checked'));
    });

    $('.moj-button-menu__toggle-button').click(function (e) {
        $('table .moj-button-menu').removeClass('open');
        $(this).parent().toggleClass('open');
    });

    //  RENAME
    $('input[name=select_manage_SD_Folder_1]').on("change", function (e) {
        if ($('input[name=select_manage_SD_Folder_1]').is(':checked')) {
            $('.move_bulk_documents').attr('aria-disabled','false').removeAttr('disabled');
        } else {
            $('.move_bulk_documents').attr('aria-disabled','true').attr('disabled','disabled');
        }

        if ($("input[name=select_manage_SD_Folder_1]:checked").length == 0) {
            var number_Selected = parseInt($("input[name=select_manage_SD_Folder_1]:checked").length);
            $('.selected_to_move').text('0 items');
            $('.rename_folder').show();
        } else if ($("input[name=select_manage_SD_Folder_1]:checked").length <= 1) {
            var number_Selected = parseInt($("input[name=select_manage_SD_Folder_1]:checked").length);
            $('.selected_to_move').text('1 item');
            $('.rename_folder').show();
        } else if ($("input[name=select_manage_SD_Folder_1]:checked").length >= 2) {
            var number_Selected = parseInt($("input[name=select_manage_SD_Folder_1]:checked").length);
            $('.selected_to_move').text(number_Selected + ' items');
            $('.rename_folder').hide();
        } 

        if ($(this).is(':checked')) {
            $(this).closest('tr').addClass('highlight move_folder');
            // $('.rename_folder').hide();
        } else {
            $(this).closest('tr').removeClass('highlight move_folder');
            // $('.rename_folder').show();
        }
    });

    $('.rename_folder').on("click", function (e) {
        $(this).closest('tr').addClass('highlight');
        var folder_name = $(this).closest('tr').find('label').text();
        $('.folder_title').text(folder_name);
        $('#rename_SD_Folder').val(folder_name);
    });

    // DELETE
    $('input[name=delete_Folder_Confirmation]').on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-DeleteFolder').attr('aria-disabled','false').removeAttr('disabled').removeClass('govuk-button--disabled').attr('onClick', 'return confirmDeleteFolder();');
        } else {
            $('#confirm-DeleteFolder').attr('aria-disabled','true').attr('disabled','disabled').addClass('govuk-button--disabled') .removeAttr('onClick');
        }
    });

    $('.delete_folder').on("click", function (e) {
        $(this).closest('tr').addClass('highlight delete_folder');
        var folder_name = $(this).closest('tr').find('label').text();
        $('.delete_folder_name').text(folder_name);
        $('.folder_deleted_name').text(folder_name);
    });

    // File path name
    // $('input[name=long_file_path]').on("change", function (e) {
    //     $('#redirect_long_file_path').attr('action','06A-long-file-paths');
    //     $('#continue-file_Path_Length').attr('aria-disabled','false').removeAttr('disabled').removeClass('govuk-button--disabled').attr('onClick','return changeFilePath();');
    // });

    // $('#continue-file_Path_Length').on("click", function (e) {

    // });

    // NEW FOLDER
    $('#confirm-NewFolder-ERROR, #shared_drive_NewFolder-error').hide();

    $('#shared_drive_NewFolder').on("keyup", function (e) {
        if ($(this).val() == '1. Case Management' || $(this).val() == '2. Conference Hearing Notes' || $(this).val() == '3. Experts' || $(this).val() == '4. Counsel' || $(this).val() == '5. Correspondence' || $(this).val() == '6. Disclosure' || $(this).val() == '7. Finance' || $(this).val() == '8. Lawyer Working copies' || $(this).val() == '9. PO Working copies' || $(this).val() == '10. Police' || $(this).val() == '11. Media' || $(this).val() == '12. Victims & Witnesses' || $(this).val() == '13. DCS' || $(this).val() == '14. Mags Ct' || $(this).val() == '15. IDPC') {
            $('#confirm-NewFolder').hide();
            $('#NewFolder_FORM').removeAttr('action');
            $('#confirm-NewFolder-ERROR').show();
        } else {
            $('#confirm-NewFolder').attr('aria-disabled','false').removeAttr('disabled').removeClass('govuk-button--disabled').attr('onClick','return createNewFolder();').show();
            $('#NewFolder_FORM').attr('action','03-case-overview#success_banner_New_Folder');
            $('#confirm-NewFolder-ERROR').hide();
        }
    });


    $('#confirm-NewFolder-ERROR').on("click", function (e) {
        $('#New_Folder_Group').addClass('govuk-form-group--error');
        $('#shared_drive_NewFolder-error').show();
        $('#shared_drive_NewFolder').addClass('govuk-input--error');
    });

    // Move folder
    $('.move_folder').on("click", function (e) {
        $(this).closest('tr').addClass('highlight move_folder');
        $(this).closest('tr').find('input').prop('checked', true);
        $('table#shared_drive_Manage-table thead tr th:last-of-type, table#shared_drive_Manage-table tbody tr td:last-of-type').hide();
        $('#success_banner_New_Folder').hide();
        if ($('input[id=select_manage_SD_Folder_1A]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_1').addClass('disabled');
            $('#shared_drive_move-table .materials_row_1 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_1 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_1 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1B]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_2').addClass('disabled');
            $('#shared_drive_move-table .materials_row_2 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_2 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_2 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1C]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_3').addClass('disabled');
            $('#shared_drive_move-table .materials_row_3 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_3 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_3 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1D]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_4').addClass('disabled');
            $('#shared_drive_move-table .materials_row_4 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_4 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_4 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1E]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_5').addClass('disabled');
            $('#shared_drive_move-table .materials_row_5 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_5 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_5 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1F]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_6').addClass('disabled');
            $('#shared_drive_move-table .materials_row_6 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_6 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_6 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1G]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_7').addClass('disabled');
            $('#shared_drive_move-table .materials_row_7 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_7 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_7 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1H]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_8').addClass('disabled');
            $('#shared_drive_move-table .materials_row_8 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_8 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_8 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1I]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_9').addClass('disabled');
            $('#shared_drive_move-table .materials_row_9 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_9 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_9 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1J]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_10').addClass('disabled');
            $('#shared_drive_move-table .materials_row_10 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_10 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_10 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1K]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_11').addClass('disabled');
            $('#shared_drive_move-table .materials_row_11 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_11 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_11 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1L]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_12').addClass('disabled');
            $('#shared_drive_move-table .materials_row_12 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_12 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_12 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1M]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_13').addClass('disabled');
            $('#shared_drive_move-table .materials_row_13 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_13 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_13 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1N]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_14').addClass('disabled');
            $('#shared_drive_move-table .materials_row_14 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_14 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_14 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1O]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_15').addClass('disabled');
            $('#shared_drive_move-table .materials_row_15 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_15 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_15 button.move_documents_here').hide();
        }
        if ($('input[id=select_manage_SD_Folder_1P]').is(':checked')) {
            $('#shared_drive_move-table .materials_row_16').addClass('disabled');
            $('#shared_drive_move-table .materials_row_16 .icon-new').addClass('empty');
            $('#shared_drive_move-table .materials_row_16 a').prop('disabled', true);
            $('#shared_drive_move-table .materials_row_16 button.move_documents_here').hide();
        }

    });

    $('.move_documents_here').on("click", function (e) {
        e.preventDefault();
        $(this).closest('tr').addClass('move_documents_row');
        $('#confirmMoveFiles').removeClass('rj-dont-display');
        var folder_name = $(this).closest('tr').find('.empty_shared_drive_section_2').text();
        var number_of_folders = parseInt($('input[name=select_manage_SD_Folder_1]:checked').length);
        var name_of_destination = $(this).closest('tr').find('a').text();
        $('.name_of_destination').text(folder_name);
        $('.move_folder_name').text(folder_name);
        $('.folders_number').text(number_of_folders);
        if ($('#select_manage_SD_Folder_1A').is(':checked')) { $('#folders_to_be_moved').append(`<li>1. Case Management</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 1. Case Management</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`1. Case Management`); $('.hods-timeline__title .moved_documents_folder_name').append(`1. Case Management`); }
        if ($('#select_manage_SD_Folder_1B').is(':checked')) { $('#folders_to_be_moved').append(`<li>2. Conference Hearing Notes</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 2. Conference Hearing Notes</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`2. Conference Hearing Notes`); $('.hods-timeline__title .moved_documents_folder_name').append(`2. Conference Hearing Notes`); }
        if ($('#select_manage_SD_Folder_1C').is(':checked')) { $('#folders_to_be_moved').append(`<li>3. Experts</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 3. Experts</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`3. Experts`); $('.hods-timeline__title .moved_documents_folder_name').append(`3. Experts`); }
        if ($('#select_manage_SD_Folder_1D').is(':checked')) { $('#folders_to_be_moved').append(`<li>4. Counsel</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 4. Counsel</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`4. Counsel`); $('.hods-timeline__title .moved_documents_folder_name').append(`4. Counsel`); }
        if ($('#select_manage_SD_Folder_1E').is(':checked')) { $('#folders_to_be_moved').append(`<li>5. Correspondence</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 5. Correspondence</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`5. Correspondence`); $('.hods-timeline__title .moved_documents_folder_name').append(`5. Correspondence`); }
        if ($('#select_manage_SD_Folder_1F').is(':checked')) { $('#folders_to_be_moved').append(`<li>6. Disclosure</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 6. Disclosure</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`6. Disclosure`); $('.hods-timeline__title .moved_documents_folder_name').append(`6. Disclosure`); }
        if ($('#select_manage_SD_Folder_1G').is(':checked')) { $('#folders_to_be_moved').append(`<li>7. Finance</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 7. Finance</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`7. Finance`); $('.hods-timeline__title .moved_documents_folder_name').append(`7. Finance`); }
        if ($('#select_manage_SD_Folder_1H').is(':checked')) { $('#folders_to_be_moved').append(`<li>8. Lawyer Working copies</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 8. Lawyer Working copies</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`8. Lawyer Working copies`); $('.hods-timeline__title .moved_documents_folder_name').append(`8. Lawyer Working copies`); }
        if ($('#select_manage_SD_Folder_1I').is(':checked')) { $('#folders_to_be_moved').append(`<li>9. PO Working copies</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 9. PO Working copies</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`9. PO Working copies`); $('.hods-timeline__title .moved_documents_folder_name').append(`9. PO Working copies`); }
        if ($('#select_manage_SD_Folder_1J').is(':checked')) { $('#folders_to_be_moved').append(`<li>10. Police</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 10. Police</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`10. Police`); $('.hods-timeline__title .moved_documents_folder_name').append(`10. Police`); }
        if ($('#select_manage_SD_Folder_1K').is(':checked')) { $('#folders_to_be_moved').append(`<li>11. Media</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 11. Media</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`11. Media`); $('.hods-timeline__title .moved_documents_folder_name').append(`11. Media`); }
        if ($('#select_manage_SD_Folder_1L').is(':checked')) { $('#folders_to_be_moved').append(`<li>12. Victims & Witnesses</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 12. Victims & Witnesses</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`12. Victims & Witnesses`); $('.hods-timeline__title .moved_documents_folder_name').append(`12. Victims & Witnesses`); }
        if ($('#select_manage_SD_Folder_1M').is(':checked')) { $('#folders_to_be_moved').append(`<li>13. DCS</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 13. DCS</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`13. DCS`); $('.hods-timeline__title .moved_documents_folder_name').append(`13. DCS`); }
        if ($('#select_manage_SD_Folder_1N').is(':checked')) { $('#folders_to_be_moved').append(`<li>14. Mags Ct</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 14. Mags Ct</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`14. Mags Ct`); $('.hods-timeline__title .moved_documents_folder_name').append(`14. Mags Ct`); }
        if ($('#select_manage_SD_Folder_1O').is(':checked')) { $('#folders_to_be_moved').append(`<li>15. IDPC</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> 15. IDPC</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`15. IDPC`); $('.hods-timeline__title .moved_documents_folder_name').append(`15. IDPC`); }
        if ($('#select_manage_SD_Folder_1P').is(':checked')) { $('#folders_to_be_moved').append(`<li>New folder created</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new folder"></span> New folder created</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`New folder created`); $('.hods-timeline__title .moved_documents_folder_name').append(`New folder created`); }
        if ($('#select_manage_SD_Folder_1Q').is(':checked')) { $('#folders_to_be_moved').append(`<li>stmt_BLAYNEE_2034_1_JUNE_mg11.pdf</li>`); $('ul.moved_documents_folder_name').append(`<li><span class="icon-new file"></span> stmt_BLAYNEE_2034_1_JUNE_mg11.pdf</li>`); $('.hods-timeline__source .moved_documents_folder_name').append(`stmt_BLAYNEE_2034_1_JUNE_mg11.pdf`); $('.hods-timeline__title .moved_documents_folder_name').append(`stmt_BLAYNEE_2034_1_JUNE_mg11.pdf`); }
    }); 

    $('.moved_to_folder_1').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_1 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_2').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_2 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_3').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_3 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_4').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_4 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_5').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_5 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_6').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_6 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_7').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_7 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_8').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_8 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_9').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_9 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_10').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_10 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_11').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_11 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_12').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_12 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_13').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_13 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_14').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_14 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 
    $('.moved_to_folder_15').on("click", function (e) { $('#shared_drive_Manage-table tr.materials_row_15 td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Moved</strong>`); }); 

    $('input[name=move_Folder_Confirmation]').on("change", function (e) {
        $('#success_banner_Deleted').hide();
        if ($(this).is(':checked')) {
            $('#confirm-Move_Folders').attr('aria-disabled','false').removeAttr('disabled').removeClass('govuk-button--disabled').attr('onClick','return confirmMoveFiles();');
        } else {
            $('#confirm-Move_Folders').attr('aria-disabled','true').attr('disabled','disabled').addClass('govuk-button--disabled');
        }
    });

    // $('#confirm-Move_Folders').on("click", function (e) {
    //     if ($('input[name=select_manage_SD_Folder_1]').is(':checked')) {
    //         $(this).closest('tr').addClass('folder_has_been_moved');
    //     }
    // });




})

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 450) {
        $('.sticky_move_documents').addClass('sticky');
    } else {
        $('.sticky_move_documents').removeClass('sticky');
    }
});

window.onclick = function(event) {
    if (!event.target.matches('.moj-button-menu__toggle-button')) {
        var dropdowns = document.getElementsByClassName("moj-button-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('open')) {
                openDropdown.classList.remove('open');
            }
        }
    }
}

function clearSearch() {
    $('table#egress-table tr.hidden_row').show();
    $('#searchOFF_EGRESS_VALUE').val('');
    $('.search_headline .line_1').hide();
    $('.search_headline .line_2').show();
}

function renameFolderConfirm () {
    var new_folder_name = $('#rename_SD_Folder').val();

    $('.new_folder_title').text(new_folder_name);
    $('#audit_documents_rename_folder').show();

    $('table tbody tr.highlight').addClass('completed');
    $('table tbody tr.highlight td:nth-of-type(2)').prepend(`<strong class="govuk-tag govuk-tag--green">Renamed</strong>`);
    $('table tbody tr.highlight a.govuk-link').text(new_folder_name);
    $('table tbody tr.highlight label').text(new_folder_name);
    $('table tbody tr.highlight input').val(new_folder_name);
    $('#rename_folder').hide();
    $('#shared_drive_manage_container').removeClass('width_70');
    $('#success_banner_Folder').show();
    $('#success_banner_Deleted, #success_banner_New_Folder, #success_banner_Move_Folder').hide();
    document.querySelector('#success_banner_Folder').scrollIntoView({behavior: 'smooth'});
}

function renameFolder() {
    $('#rename_folder').show();
    $('#shared_drive_manage_container').addClass('width_70');
    document.querySelector('#rename_folder').scrollIntoView({behavior: 'smooth'});
}

function closeRenameFolder() {
    $('#rename_folder').hide();
    $('#shared_drive_manage_container').removeClass('width_70');
    $('table tbody tr').removeClass('highlight');
}

function confirmDeleteFolder() {
    $('#confirmDeleteFolder').addClass('rj-dont-display');
    $('table tbody tr.highlight.delete_folder').hide();
    $('#success_banner_Deleted').show();
    $('#success_banner_Folder, #success_banner_New_Folder, #success_banner_Move_Folder').hide();
    document.querySelector('#success_banner_Deleted').scrollIntoView({behavior: 'smooth'});
    // document.getElementById('#success_banner_Deleted').scrollIntoView();
}

function deleteFolder() {
    $('#confirmDeleteFolder').removeClass('rj-dont-display');
    // $('.delete_folder_name');
}

function closeConfirmDeleteFolder() {
    $('#confirmDeleteFolder').addClass('rj-dont-display');
    $('table tbody tr').removeClass('highlight');
}

function changeFilePath() {
    $('#longFilePaths').addClass('rj-dont-display');
    $('#changeFilePath').removeClass('rj-dont-display');
}


// NEW FOLDER
function newSharedDriveFolder() {
    $('#newFolder').removeClass('rj-dont-display');

}

function closeNewSharedDriveFolder() {
    $('#newFolder').addClass('rj-dont-display');
}

// function createNewFolder() {
//     setTimeout(function () {
//         $('#success_banner_New_Folder').show();
//     }, 3000)
//     $('#success_banner_Folder, #success_banner_Deleted').hide();
// }


// MOVE FOLDER 
function moveFolder() {
    $('#shared_drive_move_container').show();
    $('#shared_drive_manage_container').addClass('width_60');
}

function confirmMoveFiles() {
    $('#confirmMoveFiles').addClass('rj-dont-display');
    // Tabs
    $('#new-tabs ul li').removeClass('list-item--selected');
    $('#new-tabs ul li#tab-2').addClass('list-item--selected');
    $('#tab-1-content').hide();
    $('#tab-2-content').show();

    // Banner
    $('#success_banner_Move_Folder, #success_banner_Folder').hide();

    // Contents
    $('#loading_materials_move').show();
    $('#shared_drive_manage_container').removeClass('width_60');
    $('#shared_drive_move_container').hide();
    $('#manage_SD_section_1').hide();
    $('.highlight.move_folder').hide();
    setTimeout(function () {
        $('#loading_materials_move').hide();
        $('#manage_SD_section_1').show();
        $('#success_banner_Move_Folder').show();
    }, 3000)
    $('table#shared_drive_Manage-table thead tr th:last-of-type, table#shared_drive_Manage-table tbody tr td:last-of-type').show();

    document.querySelector('#success_banner_Move_Folder').scrollIntoView({behavior: 'smooth'});

    // Audit log
    $('#audit_documents_move_folder').show();
}

function closeConfirmMoveFiles() {
    $('#confirmMoveFiles').addClass('rj-dont-display');
}





// ========================= TRANSFER - FAILED files =========================
$(document).ready(function () {

    $('#file_locked_transfer__Warning').hide();

    $('input[name=file_locked_transfer]').on("change", function (e) {
        if ($('input[id=file_locked_transfer__Duplicate_files]').is(':checked')) {
            $('#file_locked_transfer__Warning').show();
        } else {
            $('#file_locked_transfer__Warning').hide();
        }
    }); 

    // ALL ERRORS PAGE
    $('input[name=all_transfer_errors_Locked]').on("change", function (e) {
        if ($('input[id=all_transfer_errors_Locked__Duplicate_files]').is(':checked')) {
            $('#file_locked_transfer__Warning').show();
        } else {
            $('#file_locked_transfer__Warning').hide();
        }
    }); 

    $('#duplicate_files_transfer__Warning').hide();

    $('input[name=duplicate_files_transfer]').on("change", function (e) {
        if ($('input[id=duplicate_files_transfer__Duplicate_files]').is(':checked')) {
            $('#duplicate_files_transfer__Warning').show();
        } else {
            $('#duplicate_files_transfer__Warning').hide();
        }
    }); 
    
    // ALL ERRORS PAGE
    $('input[name=all_transfer_errors_Duplicate]').on("change", function (e) {
        if ($('input[id=all_transfer_errors_Duplicate__Duplicate_files]').is(':checked')) {
            $('#duplicate_files_transfer__Warning').show();
        } else {
            $('#duplicate_files_transfer__Warning').hide();
        }
    }); 

})

// window.onscroll = function() { scrollTrigger() };

// function scrollTrigger() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementsByClassName("sticky_move_documents").className = "sticky_move_documents_sticky";
//     } else {
//         document.getElementsByClassName("sticky_move_documents").className = "";
//     }
// }
// window.addEventListener('mouseup',function(event){
//     var pol = document.getElementsByClassName('moj-button-menu');
//     if(event.target != pol && event.target.parentNode != pol){
//         pol.style.display = 'none';
//     }
// });  



// ========================= CREATE CASE - ERRORS =========================
$(document).ready(function () {

    // PAGE 01
    $('.create_case_Continue, #create_case_errors_summary').hide();

    $('#newCase_Operation_AREA').on("change", function (e) {
        $('#conditional-newCase_Operation_AREA').show();
    }); 

    $('#newCase_URN-Compass_ID').on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#newCase_URN-C').val('12345');
            // $('#newCase_URN-A, #newCase_URN-B, #newCase_URN-C, #newCase_URN-D').attr('disabled','disabled').addClass('disabled').val('');
        } else {
            // $('#newCase_URN-A, #newCase_URN-B, #newCase_URN-C, #newCase_URN-D').removeAttr('disabled').removeClass('disabled')
            $('#newCase_URN-A').val('84');
            $('#newCase_URN-C').val('20982').removeAttr('disabled').removeClass('disabled');
            $('#newCase_URN-D').val('25');
        }
    }); 

    // PAGE 02
    $('.create_case_date_picker').hide();

    $('.moj-js-datepicker-toggle').on("click", function (e) {
        $('.create_case_date_picker').show();
    }); 

    $('.create_case_date_picker').on("click", function (e) {
        $(this).hide();
        $('#newCase_FirstHearing_Date').val('18/7/2025');
    }); 

    $('input[name=newCase_Suspect_YesNo], input[name=newCase_Witness_YesNo]').on("click", function (e) {
        if ($('#newCase_Suspect_Yes').is(':checked') && $('#newCase_Witness_Yes').is(':checked') || $('#newCase_Suspect_Yes').is(':checked') && $('#newCase_Witness_No').is(':checked')) {
            $('#newCase_Form-B').attr('action','03A-create-suspects');
        } else if ($('#newCase_Suspect_No').is(':checked') && $('#newCase_Witness_Yes').is(':checked')) {
            $('#newCase_Form-B').attr('action','04A-create-witness');
        } else if ($('#newCase_Suspect_No').is(':checked') && $('#newCase_Witness_No').is(':checked')) {
            $('#newCase_Form-B').attr('action','05-monitoring-codes');
        } 
    }); 



    // Add suspects (Monica)
    $('input[name=addSuspect]').on("click", function (e) {
        if ($('#addSuspectYes').is(':checked')) {
            $('#add-supects-choice-form').attr('action','03A-add-suspect-name');
        } else {
            $('#add-supects-choice-form').attr('action','03A-create-suspects-monica');
        } 
    }); 
















    // PAGE 07
    $('input[name=newCase_ExistingEgress_YesNo], input[name=newCase_ExistingSharedDrive_YesNo]').on("click", function (e) {
        if ($('#newCase_ExistingEgress_Yes').is(':checked') && $('#newCase_ExistingSharedDrive_Yes').is(':checked')) {
            $('#newCase_Form-G').attr('action','../04A-egress-files');
        } else if ($('#newCase_ExistingEgress_Yes').is(':checked') && $('#newCase_ExistingSharedDrive_No').is(':checked')) {
            $('#newCase_Form-G').attr('action','../04A-egress-files');
        } else if ($('#newCase_ExistingEgress_No').is(':checked') && $('#newCase_ExistingSharedDrive_Yes').is(':checked')) {
            $('#newCase_Form-G').attr('action','../05A-p-drive-files');
        } else if ($('#newCase_ExistingEgress_No').is(':checked') && $('#newCase_ExistingSharedDrive_No').is(':checked')) {
            $('#newCase_Form-G').attr('action','08-check-answers');
        } 
    }); 




    



    

    // * OPERATION NAME, SUSPECT OR COMPANY NAME
    // $('input[id=newCase_OperationName]').on("keyup", function (e) {
    //     if ($(this).val().length >= 5 && $('input[id=newCase_URN-B]').val().length >= 2 && $('select[id=newCase_Operation_AREA]').val()) { 
    //         $('#newCase_Form-A').attr('action','03-case-overview');
    //         $('.create_case_Continue').show();
    //         $('.create_case_Errors').hide();
    //     } else {
    //         $('#newCase_Form-A').removeAttr('action');
    //         $('.create_case_Continue').hide();
    //         $('.create_case_Errors').show();
    //     }
    // }); 

    // $('input[id=newCase_DefendantName-Surname]').on("keyup", function (e) {
    //     if ($(this).val().length >= 2 && $('input[id=newCase_URN-B]').val().length >= 2 && $('select[id=newCase_Operation_AREA]').val()) { 
    //         $('#newCase_Form-A').attr('action','03-case-overview');
    //         $('.create_case_Continue').show();
    //         $('.create_case_Errors').hide();
    //     } else {
    //         $('#newCase_Form-A').removeAttr('action');
    //         $('.create_case_Continue').hide();
    //         $('.create_case_Errors').show();
    //     }
    // }); 

    // $('input[id=newCase_DefendantName-CompanyName]').on("keyup", function (e) {
    //     if ($(this).val().length >= 5 && $('input[id=newCase_URN-B]').val().length >= 2 && $('select[id=newCase_Operation_AREA]').val()) { 
    //         $('#newCase_Form-A').attr('action','03-case-overview');
    //         $('.create_case_Continue').show();
    //         $('.create_case_Errors').hide();
    //     } else {
    //         $('#newCase_Form-A').removeAttr('action');
    //         $('.create_case_Continue').hide();
    //         $('.create_case_Errors').show();
    //     }
    // }); 

    // * AREA
    // $('select[id=newCase_Operation_AREA]').on("change", function (e) {
    //     if ($(this).val() && $('input[id=newCase_OperationName]').val().length >= 5 && $('input[id=newCase_URN-B]').val().length >= 2 || $(this).val() && $('input[id=newCase_DefendantName-Surname]').val().length >= 2 && $('input[id=newCase_URN-B]').val().length >= 2 || $(this).val() && $('input[id=newCase_DefendantName-CompanyName]').val().length >= 5 && $('input[id=newCase_URN-B]').val().length >= 2) { 
    //         $('#newCase_Form-A').attr('action','03-case-overview');
    //         $('.create_case_Continue').show();
    //         $('.create_case_Errors').hide();
    //     } else {
    //         $('#newCase_Form-A').removeAttr('action');
    //         $('.create_case_Continue').hide();
    //         $('.create_case_Errors').show();
    //     }
    // }); 

    // * URN
    // $('input[id=newCase_URN-B]').on("keyup", function (e) {
    //     if ($(this).val() == '87' && $('input[id=newCase_OperationName]').val().length >= 5 && $('select[id=newCase_Operation_AREA]').val() || $(this).val() == '87' && $('input[id=newCase_DefendantName-Surname]').val().length >= 2 && $('select[id=newCase_Operation_AREA]').val() || $(this).val() == '87' && $('input[id=newCase_DefendantName-CompanyName]').val().length >= 5 && $('select[id=newCase_Operation_AREA]').val()) { 
    //         $('#newCase_Form-A').removeAttr('action');
    //         $('.create_case_Continue').hide();
    //         $('.create_case_Errors').show();
    //     } else if ($(this).val().length >= 2 && $('input[id=newCase_OperationName]').val().length >= 5 && $('select[id=newCase_Operation_AREA]').val() || $(this).val().length >= 2 && $('input[id=newCase_DefendantName-Surname]').val().length >= 2 && $('select[id=newCase_Operation_AREA]').val() || $(this).val().length >= 2 && $('input[id=newCase_DefendantName-CompanyName]').val().length >= 5 && $('select[id=newCase_Operation_AREA]').val()) { 
    //         $('#newCase_Form-A').attr('action','03-case-overview');
    //         $('.create_case_Continue').show();
    //         $('.create_case_Errors').hide();
    //     } else {
    //         $('#newCase_Form-A').removeAttr('action');
    //         $('.create_case_Continue').hide();
    //         $('.create_case_Errors').show();
    //     }
    // }); 

    // ACTIVATE ERRORS
    $('#create_case_Errors').on("click", function (e) {
        $('#create_case_errors_summary').show();

        // OP NAME, SUSPECT NAME OR COMPANY NAME
        if ($('#newCase_OperationName').val().length <= 1 && $('#newCase_DefendantName-Surname').val().length <= 1 && $('#newCase_DefendantName-CompanyName').val().length <= 1) {
            $('#create_case_errors_summary ul li.newCase_OperationName').show();

            // OP NAME
            $('#newCase_OperationName-Value').addClass('govuk-form-group--error');
            $('#newCase_OperationName_Error').show();
            $('#newCase_OperationName').addClass('govuk-input--error');

            // SUSPECT NAME or COMPANY NAME
            $('#newCase_Name-Value').addClass('govuk-form-group--error');
            $('#newCase_Name_Error').show();
        }

        // AREA
        if ($('#newCase_Operation_AREA').val() == null) {
            $('#create_case_errors_summary ul li.newCase_Area').show();
            $('#newCase_Operation_AREA-Value').addClass('govuk-form-group--error');
            $('#newCase_Area-error').show();
        }

        // URN
        if ($('#newCase_URN-B').val().length <= 1) {
            $('#create_case_errors_summary ul li.newCase_URN').show();
            $('#newCase_URN-Value').addClass('govuk-form-group--error');
            $('#newCase_URN_Error').show();
            $('#newCase_URN-B').addClass('govuk-input--error');
        }

        if ($('#newCase_URN-B').val() == '87') {
            $('#create_case_errors_summary ul li.newCase_URN-DUPLICATE').show();
            $('#newCase_URN-Value').addClass('govuk-form-group--error');
            $('#newCase_URN_Error_DUPLICATE').show();
            $('#newCase_URN-B').addClass('govuk-input--error');
        }

    }); 


    // PAGE B
    $('#newCase_Egress_Content, #newCase_No_Egress_Content, .create_case_Continue_B, #create_case_errors_summary_B').hide();

    $('input[name=newCase_Egress]').on("change", function (e) {
        $('.create_case_Continue_B').show();
        $('.create_case_Errors_B').hide();

        if ($(this).val() == 'Yes') {
            $('#newCase_Egress_Content').show(); 
            $('#newCase_No_Egress_Content').hide();
            $('#newCase_Form-B').attr('action','04A-egress-files');
        } else if ($(this).val() == 'No') {
            $('#newCase_Egress_Content').hide();
            $('#newCase_No_Egress_Content').show();
            $('#newCase_Form-B').attr('action','03-case-overview');
        }
    }); 

    $('#create_case_Errors_B').on("click", function (e) {
        $('#create_case_errors_summary_B, #newCase_Egress_Error').show();
        $('#create_case_errors_summary_B ul li.newCase_Egress').show();
        $('#newCase_Egress').addClass('govuk-form-group--error');
    }); 

})

// ========================= ADD SUSPECTS ========================= //
$(document).ready(function () {
    $('#suspectDetails-1 a#removeSuspect1').hide();

    $('#addSuspect_Form-Type').on("change", function (e) {
        if ($(this).val() == 'Unspecified') {
            $('#conditional-addSuspect_Form-Type').hide();
        } else {
            $('#conditional-addSuspect_Form-Type').show();
        }
    }); 

    // $('input[name=addSuspect_Form-Charges]').on("click", function (e) {
    //     if ($("#addSuspect_Form-Charges_Yes").is(':checked')) {
    //         $('#newCase_Form-C3_1').attr('action','03E-suspect-charges');
    //     } else if (("#addSuspect_Form-Charges_No").is(':checked')) {
    //         $('#newCase_Form-C3_1').attr('action','03B-suspects');
    //     }
    // }); 

    $('input[name=addSuspect_Form-Alias]').on("click", function (e) {
        if ($("#addSuspect_Form-Alias_Yes").is(':checked')) {
            $('#newCase_Form-C3_1').attr('action','03D-suspect-aliases');
        } else if (("#addSuspect_Form-Alias_No").is(':checked')) {
            $('#newCase_Form-C3_1').attr('action','03B-suspects');
        }
    });

    $('#charge_code_V1, #charge_code_V2').on("click", function (e) {
        e.preventDefault();
        $('#newChargeCode, #newChargeCode_2').val('SX56085T');
        $('#newCharge_Description').val('Criminal damage to a property valued under £5,000');
    }); 

    
    
})

// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 200) {
//         $('.existing-contacts').addClass('sticky');
//     } else {
//         $('.existing-contacts').removeClass('sticky');
//     }
// });


function addSuspect1() {
    var suspectSecondName = $('#newCase_Suspect-LastName').val();
    var suspectFirstName = $('#newCase_Suspect-FirstName').val();
    var suspectCompanyName = $('#newCase_Suspect-CompanyName').val();
    if (suspectSecondName) {
        $('#new-contacts').append('<p class="suspectDetails-1"><span class="icon-new user"></span><span class="uppercase">' + suspectSecondName + '</span>, ' + suspectFirstName + '</p>');
    } else if (suspectCompanyName) {
        $('#new-contacts').append('<p class="suspectDetails-1"><span class="icon-new company"></span>' + suspectCompanyName + '</p>');
    }
    $('#suspectDetails-2').addClass('active');
    $('#addSuspect1').hide();
    $('#suspectDetails-1 a#removeSuspect1').show();
    $('p.holder').hide();
}

function removeSuspect1() {
    $('#suspectDetails-1').hide();
    $('.suspectDetails-1').hide();
    $('p.holder').show();
}

function addSuspect2() {
    var suspectSecondName2 = $('#newCase_Suspect-LastName2').val();
    var suspectFirstName2 = $('#newCase_Suspect-FirstName2').val();
    var suspectCompanyName2 = $('#newCase_Suspect-CompanyName2').val();
    if (suspectSecondName2) {
        $('#new-contacts').append('<p class="suspectDetails-2"><span class="icon-new user"></span><span class="uppercase">' + suspectSecondName2 + '</span>, ' + suspectFirstName2 + '</p>');
    } else if (suspectCompanyName2) {
        $('#new-contacts').append('<p class="suspectDetails-2"><span class="icon-new company"></span>' + suspectCompanyName2 + '</p>');
    }
    $('#suspectDetails-3').addClass('active');
    $('#addSuspect2').hide();
    $('#removeSuspect2').show();
}

function removeSuspect2() {
    $('#suspectDetails-2').hide();
    $('.suspectDetails-2').hide();
}

function addSuspect3() {
    var suspectSecondName3 = $('#newCase_Suspect-LastName3').val();
    var suspectFirstName3 = $('#newCase_Suspect-FirstName3').val();
    var suspectCompanyName3 = $('#newCase_Suspect-CompanyName3').val();
    if (suspectSecondName3) {
        $('#new-contacts').append('<p class="suspectDetails-2"><span class="icon-new user"></span><span class="uppercase">' + suspectSecondName3 + '</span>, ' + suspectFirstName3 + '</p>');
    } else if (suspectCompanyName3) {
        $('#new-contacts').append('<p class="suspectDetails-2"><span class="icon-new company"></span>' + suspectCompanyName3 + '</p>');
    }
    $('#suspectDetails-4').addClass('active');
    $('#addSuspect3').hide();
    $('#removeSuspect3').show();
}

function removeSuspect3() {
    $('#suspectDetails-3').hide();
    $('.suspectDetails-3').hide();
}

function addSuspect4() {
    var suspectSecondName4 = $('#newCase_Suspect-LastName4').val();
    var suspectFirstName4 = $('#newCase_Suspect-FirstName4').val();
    var suspectCompanyName4 = $('#newCase_Suspect-CompanyName4').val();
    if (suspectSecondName4) {
        $('#new-contacts').append('<p class="suspectDetails-4"><span class="icon-new user"></span><span class="uppercase">' + suspectSecondName4 + '</span>, ' + suspectFirstName4 + '</p>');
    } else if (suspectCompanyName4) {
        $('#new-contacts').append('<p class="suspectDetails-2"><span class="icon-new company"></span>' + suspectCompanyName4 + '</p>');
    }
    $('#suspectDetails-5').addClass('active');
    $('#addSuspect4').hide();
    $('#removeSuspect4').show();
}

function removeSuspect4() {
    $('#suspectDetails-4').hide();
    $('.suspectDetails-4').hide();
}

function addSuspect5() {
    var suspectSecondName5 = $('#newCase_Suspect-LastName5').val();
    var suspectFirstName5 = $('#newCase_Suspect-FirstName5').val();
    var suspectCompanyName5 = $('#newCase_Suspect-CompanyName5').val();
    if (suspectSecondName5) {
        $('#new-contacts').append('<p class="suspectDetails-5"><span class="icon-new user"></span><span class="uppercase">' + suspectSecondName5 + '</span>, ' + suspectFirstName5 + '</p>');
    } else if (suspectCompanyName5) {
        $('#new-contacts').append('<p class="suspectDetails-2"><span class="icon-new company"></span>' + suspectCompanyName5 + '</p>');
    }
    $('#removeSuspect5').show();
}

function removeSuspect5() {
    $('#suspectDetails-5').hide();
    $('.suspectDetails-5').hide();
}

// ========================= ADD WITNESS ========================= //
$(document).ready(function () {
    $('#witnessDetails-1 a#removeWitness1').hide();
})

function addWitness1() {
    var witnessSecondName = $('#newCase_Witness-LastName').val();
    var witnessFirstName = $('#newCase_Witness-FirstName').val();
    $('#new-contacts').append('<p class="witnessDetails-1"><span class="icon-new user"></span><span class="uppercase">' + witnessSecondName + '</span>, ' + witnessFirstName + '<br></p>');
    if ($('#newCase_Witness-Victim').is(':checked')) {
        $('#new-contacts .witnessDetails-1').append('<strong class="govuk-tag govuk-tag--blue">Victim</strong>');
    }
    if ($('#newCase_Witness-Vulnerable').is(':checked')) {
        $('#new-contacts .witnessDetails-1').append('<strong class="govuk-tag govuk-tag--blue">Vulnerable</strong>');
    }
    if ($('#newCase_Witness-Intimidated').is(':checked')) {
        $('#new-contacts .witnessDetails-1').append('<strong class="govuk-tag govuk-tag--blue">Intimidated</strong>');
    }
    $('#witnessDetails-2').addClass('active');
    $('#addWitness1').hide();
    $('#witnessDetails-1 a#removeWitess1').show();
    $('p.holder').hide();
}

function removeWitness1() {
    $('#witnessDetails-1').hide();
    $('.witnessDetails-1').hide();
    $('p.holder').show();
}

function addWitness2() {
    var witnessSecondName2 = $('#newCase_Witness-LastName2').val();
    var witnessFirstName2 = $('#newCase_Witness-FirstName2').val();
    $('#new-contacts').append('<p class="witnessDetails-2"><span class="icon-new user"></span><span class="uppercase">' + witnessSecondName2 + '</span>, ' + witnessFirstName2 + '<br></p>');
    if ($('#newCase_Witness-Victim2').is(':checked')) {
        $('#new-contacts .witnessDetails-2').append('<strong class="govuk-tag govuk-tag--blue">Victim</strong>');
    }
    if ($('#newCase_Witness-Vulnerable2').is(':checked')) {
        $('#new-contacts .witnessDetails-2').append('<strong class="govuk-tag govuk-tag--blue">Vulnerable</strong>');
    }
    if ($('#newCase_Witness-Intimidated2').is(':checked')) {
        $('#new-contacts .witnessDetails-2').append('<strong class="govuk-tag govuk-tag--blue">Intimidated</strong>');
    }
    $('#witnessDetails-3').addClass('active');
    $('#addWitness2').hide();
    $('#removeWitness2').show();
}

function removeWitness2() {
    $('#witnessDetails-2').hide();
    $('.witnessDetails-2').hide();
}

function addWitness3() {
    var witnessSecondName3 = $('#newCase_Witness-LastName3').val();
    var witnessFirstName3 = $('#newCase_Witness-FirstName3').val();
    $('#new-contacts').append('<p class="witnessDetails-3"><span class="icon-new user"></span><span class="uppercase">' + witnessSecondName3 + '</span>, ' + witnessFirstName3 + '<br></p>');
    if ($('#newCase_Witness-Victim3').is(':checked')) {
        $('#new-contacts .witnessDetails-3').append('<strong class="govuk-tag govuk-tag--blue">Victim</strong>');
    }
    if ($('#newCase_Witness-Vulnerable3').is(':checked')) {
        $('#new-contacts .witnessDetails-3').append('<strong class="govuk-tag govuk-tag--blue">Vulnerable</strong>');
    }
    if ($('#newCase_Witness-Intimidated3').is(':checked')) {
        $('#new-contacts .witnessDetails-3').append('<strong class="govuk-tag govuk-tag--blue">Intimidated</strong>');
    }
    $('#witnessDetails-4').addClass('active');
    $('#addWitness3').hide();
    $('#removeWitness3').show();
}

function removeWitness3() {
    $('#witnessDetails-3').hide();
    $('.witnessDetails-3').hide();
}

function addWitness4() {
    var witnessSecondName4 = $('#newCase_Witness-LastName4').val();
    var witnessFirstName4 = $('#newCase_Witness-FirstName4').val();
    $('#new-contacts').append('<p class="witnessDetails-4"><span class="icon-new user"></span><span class="uppercase">' + witnessSecondName4 + '</span>, ' + witnessFirstName4 + '<br></p>');
    if ($('#newCase_Witness-Victim4').is(':checked')) {
        $('#new-contacts .witnessDetails-4').append('<strong class="govuk-tag govuk-tag--blue">Victim</strong>');
    }
    if ($('#newCase_Witness-Vulnerable4').is(':checked')) {
        $('#new-contacts .witnessDetails-4').append('<strong class="govuk-tag govuk-tag--blue">Vulnerable</strong>');
    }
    if ($('#newCase_Witness-Intimidated4').is(':checked')) {
        $('#new-contacts .witnessDetails-4').append('<strong class="govuk-tag govuk-tag--blue">Intimidated</strong>');
    }
    $('#witnessDetails-5').addClass('active');
    $('#addWitness4').hide();
    $('#removeWitness4').show();
}

function removeWitness4() {
    $('#witnessDetails-4').hide();
    $('.witnessDetails-4').hide();
}

function addWitness5() {
    var witnessSecondName5 = $('#newCase_Witness-LastName5').val();
    var witnessFirstName5 = $('#newCase_Witness-FirstName5').val();
    $('#new-contacts').append('<p class="witnessDetails-5"><span class="icon-new user"></span><span class="uppercase">' + witnessSecondName5 + '</span>, ' + witnessFirstName5 + '<br></p>');
    if ($('#newCase_Witness-Victim5').is(':checked')) {
        $('#new-contacts .witnessDetails-5').append('<strong class="govuk-tag govuk-tag--blue">Victim</strong>');
    }
    if ($('#newCase_Witness-Vulnerabl5').is(':checked')) {
        $('#new-contacts .witnessDetails-5').append('<strong class="govuk-tag govuk-tag--blue">Vulnerable</strong>');
    }
    if ($('#newCase_Witness-Intimidated5').is(':checked')) {
        $('#new-contacts .witnessDetails-5').append('<strong class="govuk-tag govuk-tag--blue">Intimidated</strong>');
    }
    $('#removeWitness5').show();
}

function removeWitness5() {
    $('#witnessDetails-5').hide();
    $('.witnessDetails-5').hide();
}

// ========================= ADD ALIAS ========================= //
$(document).ready(function () {
    $('#aliasDetails-1 a#removeAlias1').hide();
})

function addAlias1() {
    var aliasSecondName = $('#createCase_Suspect_1_Aliases-LastName').val();
    var aliasFirstName = $('#createCase_Suspect_1_Aliases-FirstName').val();
    $('#new-contacts').append('<p class="aliasDetails-1"><span class="icon-new user"></span><span class="uppercase">' + aliasSecondName + '</span>, ' + aliasFirstName + '<br></p>');
    $('#aliasDetails-2').addClass('active');
    $('#addAlias1').hide();
    $('#aliasDetails-1 a#removeAlias1').show();
    $('p.holder').hide();
}

function removeAlias1() {
    $('#aliasDetails-1').hide();
    $('.aliasDetails-1').hide();
    $('p.holder').show();
}

function addAlias2() {
    var aliasSecondName2 = $('#createCase_Suspect_1_Aliases-LastName2').val();
    var aliasFirstName2 = $('#createCase_Suspect_1_Aliases-FirstName2').val();
    $('#new-contacts').append('<p class="aliasDetails-2"><span class="icon-new user"></span><span class="uppercase">' + aliasSecondName2 + '</span>, ' + aliasFirstName2 + '<br></p>');
    $('#aliasDetails-3').addClass('active');
    $('#addAlias2').hide();
    $('#removeAlias2').show();
}

function removeAlias2() {
    $('#aliasDetails-2').hide();
    $('.aliasDetails-2').hide();
}

function addAlias3() {
    var aliasSecondName3 = $('#createCase_Suspect_1_Aliases-LastName3').val();
    var aliasFirstName3 = $('#createCase_Suspect_1_Aliases-FirstName3').val();
    $('#new-contacts').append('<p class="aliasDetails-3"><span class="icon-new user"></span><span class="uppercase">' + aliasSecondName3 + '</span>, ' + aliasFirstName3 + '<br></p>');
    $('#aliasDetails-4').addClass('active');
    $('#addAlias3').hide();
    $('#removeAlias3').show();
}

function removeAlias3() {
    $('#aliasDetails-3').hide();
    $('.aliasDetails-3').hide();
}

function addAlias4() {
    var aliasSecondName4 = $('#createCase_Suspect_1_Aliases-LastName4').val();
    var aliasFirstName4 = $('#createCase_Suspect_1_Aliases-FirstName4').val();
    $('#new-contacts').append('<p class="aliasDetails-4"><span class="icon-new user"></span><span class="uppercase">' + aliasSecondName4 + '</span>, ' + aliasFirstName4 + '<br></p>');
    $('#aliasDetails-5').addClass('active');
    $('#addAlias4').hide();
    $('#removeAlias4').show();
}

function removeAlias4() {
    $('#aliasDetails-4').hide();
    $('.aliasDetails-4').hide();
}

function addAlias5() {
    var aliasSecondName5 = $('#createCase_Suspect_1_Aliases-LastName5').val();
    var aliasFirstName5 = $('#createCase_Suspect_1_Aliases-FirstName5').val();
    $('#new-contacts').append('<p class="aliasDetails-5"><span class="icon-new user"></span><span class="uppercase">' + aliasSecondName5 + '</span>, ' + aliasFirstName5 + '<br></p>');
    $('#removeAlias5').show();
}

function removeAlias5() {
    $('#aliasDetails-5').hide();
    $('.aliasDetails-5').hide();
}


// ========================= BUNDLES =========================
$(document).ready(function () {

    $('.view_tab.tab-3-content').on("click", function (e) {
        e.preventDefault();
        $('#new-tabs ul.govuk-tabs__list li').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs ul.govuk-tabs__list li#tab-3').addClass('govuk-tabs__list-item--selected');    
    }); 

})

$(document).ready(function () {
    const tbody = document.getElementById("table-body")
    Sortable.create(tbody, {
        animation: 150,
    })

    const tbody2 = document.getElementById("table-test")
    Sortable.create(tbody2, {
        animation: 150,
    })
})

// ========================= ACTIVITY LOG =========================
$(document).ready(function () {

    $('.view_tab.tab-4-content').on("click", function (e) {
        e.preventDefault();
        $('#new-tabs ul.govuk-tabs__list li').removeClass('govuk-tabs__list-item--selected');
        $('#new-tabs ul.govuk-tabs__list li#tab-4').addClass('govuk-tabs__list-item--selected');    
    }); 

})

// import Sortable from 'sortablejs';
