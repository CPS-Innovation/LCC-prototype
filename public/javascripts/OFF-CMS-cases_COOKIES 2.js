// ========================= MATERIALS ========================= //

$(document).ready(function () {

    // Title open
    $(".title-open").on("click", function (e) { 
        e.preventDefault();
        $(this).parent().parent().find('.preview-materials-link').toggle();
        $(this).parent().parent().find('.hide-materials-link').toggle();
        $(this).parent().parent().parent().find('.materials-details-wrapper').toggle();
        $(this).parent().parent().parent().toggleClass('open');
    });

    // One by one
    $(".hide-materials-link").hide();

    $(".preview-materials-link").on("click", function (e) { 
        $(this).hide();
        $(this).parent().find('.hide-materials-link').show();
        $(this).parent().parent().find('.materials-details-wrapper').show();
        $(this).parent().parent().addClass('open');
    });

    $(".hide-materials-link").on("click", function (e) { 
        $(this).hide();
        $(this).parent().find('.preview-materials-link').show();
        $(this).parent().parent().find('.materials-details-wrapper').hide();
        $(this).parent().parent().removeClass('open');
    });

    // Select all - Folders
    // $("#transfer_Folder_All").click(function() {
    //     $('.cta-wrapper.cta-materials').addClass('sticky');
    //     $("input[type=checkbox]").prop("checked", $(this).prop("checked"));
    //     $('#transfer_Materials').removeAttr('disabled').attr('aria-disabled','false');
    // });

    $('.cta-wrapper.cta-materials').hide();

    // $('input[name=transfer_Folder_Destination]').on("click", function (e) {
    //     var checkedMaterialsValue = $(this).parent().find('label').text();
    //     $('.folder-destination').text(checkedMaterialsValue);
    // });

    $("input[name=transfer_Folder]").click(function() {
        $('.cta-wrapper.cta-materials').addClass('sticky').show();
        if (!$(this).prop("checked")) {
            $("#transfer_Folder_All").prop("checked", false);
        }

        var numberChecked = $('input[name=transfer_Folder]:checked').length;
        if (numberChecked >= 1) {
            $('#transfer_Materials').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return sortMaterials();');
            // $('#transfer_Materials').removeAttr('disabled').attr('aria-disabled','false').attr('href','5-case-overview#materialsTab');
        } else if (numberChecked == 0) {
            $('#transfer_Materials').attr('disabled','disabled').attr('aria-disabled','true');
        }
        $('.selected-number').text(numberChecked + ' files');
    });

    // Select all -  Folder 1
    $("#transfer_Folder_3").click(function() {
        if ($(this).is(':checked')) {
            $('#transfer_Folder_3A, #transfer_Folder_3A_1, #transfer_Folder_3B, #transfer_Folder_3B_1, #transfer_Folder_3B_2, #transfer_Folder_3B_3, #transfer_Folder_3B_4, #transfer_Folder_3C, #transfer_Folder_3C_1, #transfer_Folder_3C_2, #transfer_Folder_3C_3, #transfer_Folder_3C_4, #transfer_Folder_3C_5, #transfer_Folder_3C_6').attr('checked','checked');
            $('.selected-number').text('11 files');
        } else {
            $('#transfer_Folder_3A, #transfer_Folder_3A_1, #transfer_Folder_3B, #transfer_Folder_3B_1, #transfer_Folder_3B_2, #transfer_Folder_3B_3, #transfer_Folder_3B_4, #transfer_Folder_3C, #transfer_Folder_3C_1, #transfer_Folder_3C_2, #transfer_Folder_3C_3, #transfer_Folder_3C_4, #transfer_Folder_3C_5, #transfer_Folder_3C_6').removeAttr("checked");
            $('.selected-number').text('0 files');
        }
    });

    $("#transfer_Folder_3A").click(function() {
        if ($(this).is(':checked')) {
            $('#transfer_Folder_3A_1').attr('checked','checked');
        } else {
            $('#transfer_Folder_3A_1').removeAttr("checked");
        }
    });

    $("#transfer_Folder_3B").click(function() {
        if ($(this).is(':checked')) {
            $('#transfer_Folder_3B_1, #transfer_Folder_3B_2, #transfer_Folder_3B_3, #transfer_Folder_3B_4').attr('checked','checked');
        } else {
            $('#transfer_Folder_3B_1, #transfer_Folder_3B_2, #transfer_Folder_3B_3, #transfer_Folder_3B_4').removeAttr("checked");
        }
    });

    $("#transfer_Folder_3C").click(function() {
        if ($(this).is(':checked')) {
            $('#transfer_Folder_3C_1, #transfer_Folder_3C_2, #transfer_Folder_3C_3, #transfer_Folder_3C_4, #transfer_Folder_3C_5, #transfer_Folder_3C_6').attr('checked','checked');
        } else {
            $('#transfer_Folder_3C_1, #transfer_Folder_3C_2, #transfer_Folder_3C_3, #transfer_Folder_3C_4, #transfer_Folder_3C_5, #transfer_Folder_3C_6').removeAttr("checked");
        }
    });

    $("#newMaterials-column .accordion-section-header").on("click", function (e) { 
        $(this).toggleClass('open');
        $(this).parent().find('.accordion-section-body').toggle();
    });

    // Mark as unread
    $("#newMaterials-column a.show-case").on("click", function (e) { 
        $(this).closest('td').removeClass('unreadDocument');
    });

    // Show documents - Folder 1
    $("#newMaterials-column a.show-case.folder_1_document").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').addClass('document_present');
        $('.document_holder.folder_1_Documents .holder').hide();
    });

    // Folder 1A - Document 1
    $("#newMaterials-column a.show-case.document_1").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').html(`<embed src="../../../public/files/MCLOVEMG3.pdf"></embed>`);
    });

    // Folder 1B - Document 1
    $("#newMaterials-column a.show-case.document_2").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').html(`<embed src="../../../public/files/CM01.pdf"></embed>`);
    });

    // Folder 1B - Document 2
    $("#newMaterials-column a.show-case.document_3").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').html(`<embed src="../../../public/files/MG05MCLOVE.pdf"></embed>`);
    });

    // Folder 1B - Document 3
    $("#newMaterials-column a.show-case.document_4").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').html(`<embed src="../../../public/files/MG06_3June.pdf"></embed>`);
    });

    // Folder 1B - Document 4
    $("#newMaterials-column a.show-case.document_5").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').html(`<embed src="../../../public/files/MG06_10june.pdf"></embed>`);
    });

    // Folder 1C - Document 1
    $("#newMaterials-column a.show-case.document_6").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').html(`<embed src="../../../public/files/stmt_BLAYNEE_2034_1_JUNE_mg11.pdf"></embed>`);
    });

    // Folder 1C - Document 2
    $("#newMaterials-column a.show-case.document_7").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').html(`<embed src="../../../public/files/stmt_JONES_1989_1_JUNE_mg11.pdf"></embed>`);
    });

    // Folder 1C - Document 3
    $("#newMaterials-column a.show-case.document_8").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').html(`<embed src="../../../public/files/stmt_Lucy_Doyle_MG11.pdf"></embed>`);
    });

    // Folder 1C - Document 4
    $("#newMaterials-column a.show-case.document_9").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').html(`<embed src="../../../public/files/stmt_Shelagh_McLove_MG11_hand.pdf"></embed>`);
    });

    // Folder 1C - Document 5
    $("#newMaterials-column a.show-case.document_10").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').html(`<embed src="../../../public/files/Shelagh_McLove_VPS_mg11.pdf"></embed>`);
    });

    // Folder 1C - Document 6
    $("#newMaterials-column a.show-case.document_11").on("click", function (e) { 
        $('.document_holder.folder_1_Documents').html(`<embed src="../../../public/files/MG11_Shelagh_MCLOVE_retraction.pdf"></embed>`);
    });


    // Transfer back to egress
    $('.transfer-Document').on("click", function (e) {
        $('#egressTransfer_1_Modal').removeClass('rj-dont-display');
        var documentName = $(this).closest('tr').find('.show-case').text();
        $('.document-name').text(documentName);
    });

    $('#egress_Transfer').on("click", function (e) {
        $('#egressTransfer_1_Modal').addClass('rj-dont-display');

        $('#loading_transfer').show();
        $('#materials-table').hide();

        setTimeout(function () {
            $('#loading_transfer').hide();
            $('#materials-table').show();
        }, 3000)

        var documentName = $('#egressTransfer_1_Modal .document-name').text();
        if ($('input[id=transfer_Folder_Egress_1]').is(':checked')) {
            $('#materials_Row_1 td p').hide();
            $('.folder.materials_Row_1').removeClass('empty');
            $('.egress_number-1').html('1');
            $('#materials_Row_1 td').append(`
                <table class="govuk-table sub-table2" id="">
                    <tbody class="govuk-table__body">
                        <tr class="govuk-table__row">
                            <td scope="row" class="govuk-table__cell">
                                <div class="govuk-form-group">
                                    <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
                                        <div class="govuk-checkboxes__item">
                                            <input class="govuk-checkboxes__input" id="transfer_Folder_Egress" name="transfer_Folder" type="checkbox" value="` + documentName + `">
                                            <label class="govuk-label govuk-checkboxes__label" for="transfer_Folder_Egress">` + documentName + `</label>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="govuk-table__cell file_name_cell">
                                <span class="icon-new file materials_Row_1A_1"></span>` + documentName + `
                            </td>
                        </tr>
                    </tbody>
                </table>
            `);
        } else if ($('input[id=transfer_Folder_Egress_2]').is(':checked')) {
            $('#materials_Row_2 td p').hide();
            $('.folder.materials_Row_2').removeClass('empty');
            $('.egress_number-2').html('1');
            $('#materials_Row_2 td').append(`
                <table class="govuk-table sub-table2" id="">
                    <tbody class="govuk-table__body">
                        <tr class="govuk-table__row">
                            <td scope="row" class="govuk-table__cell">
                                <div class="govuk-form-group">
                                    <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
                                        <div class="govuk-checkboxes__item">
                                            <input class="govuk-checkboxes__input" id="transfer_Folder_Egress" name="transfer_Folder" type="checkbox" value="` + documentName + `">
                                            <label class="govuk-label govuk-checkboxes__label" for="transfer_Folder_Egress">` + documentName + `</label>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="govuk-table__cell file_name_cell">
                                <span class="icon-new file materials_Row_1A_1"></span>` + documentName + `
                            </td>
                        </tr>
                    </tbody>
                </table>
            `);
        } else if ($('input[id=transfer_Folder_Egress_3]').is(':checked')) {
            $('#materials_Row_3 td p').hide();
            $('.folder.materials_Row_3').removeClass('empty');
            $('.egress_number-3').html('1');
            $('#materials_Row_3 td').append(`
                <table class="govuk-table sub-table2" id="">
                    <tbody class="govuk-table__body">
                        <tr class="govuk-table__row">
                            <td scope="row" class="govuk-table__cell">
                                <div class="govuk-form-group">
                                    <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
                                        <div class="govuk-checkboxes__item">
                                            <input class="govuk-checkboxes__input" id="transfer_Folder_Egress" name="transfer_Folder" type="checkbox" value="` + documentName + `">
                                            <label class="govuk-label govuk-checkboxes__label" for="transfer_Folder_Egress">` + documentName + `</label>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="govuk-table__cell file_name_cell">
                                <span class="icon-new file materials_Row_1A_1"></span>` + documentName + `
                            </td>
                        </tr>
                    </tbody>
                </table>
            `);
        } else if ($('input[id=transfer_Folder_Egress_4]').is(':checked')) {
            $('#materials_Row_4 td p').hide();
            $('.folder.materials_Row_4').removeClass('empty');
            $('.egress_number-4').html('1');
            $('#materials_Row_4 td').append(`
                <table class="govuk-table sub-table2" id="">
                    <tbody class="govuk-table__body">
                        <tr class="govuk-table__row">
                            <td scope="row" class="govuk-table__cell">
                                <div class="govuk-form-group">
                                    <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
                                        <div class="govuk-checkboxes__item">
                                            <input class="govuk-checkboxes__input" id="transfer_Folder_Egress" name="transfer_Folder" type="checkbox" value="` + documentName + `">
                                            <label class="govuk-label govuk-checkboxes__label" for="transfer_Folder_Egress">` + documentName + `</label>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="govuk-table__cell file_name_cell">
                                <span class="icon-new file materials_Row_1A_1"></span>` + documentName + `
                            </td>
                        </tr>
                    </tbody>
                </table>
            `);
        } else if ($('input[id=transfer_Folder_Egress_5]').is(':checked')) {
            $('#materials_Row_5 td p').hide();
            $('.folder.materials_Row_5').removeClass('empty');
            $('.egress_number-5').html('1');
            $('#materials_Row_5 td').append(`
                <table class="govuk-table sub-table2" id="">
                    <tbody class="govuk-table__body">
                        <tr class="govuk-table__row">
                            <td scope="row" class="govuk-table__cell">
                                <div class="govuk-form-group">
                                    <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
                                        <div class="govuk-checkboxes__item">
                                            <input class="govuk-checkboxes__input" id="transfer_Folder_Egress" name="transfer_Folder" type="checkbox" value="` + documentName + `">
                                            <label class="govuk-label govuk-checkboxes__label" for="transfer_Folder_Egress">` + documentName + `</label>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="govuk-table__cell file_name_cell">
                                <span class="icon-new file materials_Row_1A_1"></span>` + documentName + `
                            </td>
                        </tr>
                    </tbody>
                </table>
            `);
        } else if ($('input[id=transfer_Folder_Egress_6]').is(':checked')) {
            $('#materials_Row_6 td p').hide();
            $('.folder.materials_Row_6').removeClass('empty');
            $('.egress_number-6').html('1');
            $('#materials_Row_6 td').append(`
                <table class="govuk-table sub-table2" id="">
                    <tbody class="govuk-table__body">
                        <tr class="govuk-table__row">
                            <td scope="row" class="govuk-table__cell">
                                <div class="govuk-form-group">
                                    <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
                                        <div class="govuk-checkboxes__item">
                                            <input class="govuk-checkboxes__input" id="transfer_Folder_Egress" name="transfer_Folder" type="checkbox" value="` + documentName + `">
                                            <label class="govuk-label govuk-checkboxes__label" for="transfer_Folder_Egress">` + documentName + `</label>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="govuk-table__cell file_name_cell">
                                <span class="icon-new file materials_Row_1A_1"></span>` + documentName + `
                            </td>
                        </tr>
                    </tbody>
                </table>
            `);
        }
    });

    // Move in Shared Drive
    $('.move-Document').on("click", function (e) {
        $('#MaterialsMove_Modal').removeClass('rj-dont-display');
        var documentName = $(this).closest('tr').find('.show-case').text();
        $('.document-name').text(documentName);

        $(this).parent().parent().parent().addClass('move_This_Document');
    });

    $('#move_Document').on("click", function (e) {
        $('#MaterialsMove_Modal').addClass('rj-dont-display');

        $('.move_This_Document').hide();

        $('#loading_materials').show();
        $('.accordion-wrapper').hide();

        setTimeout(function () {
            $('#loading_materials').hide();
            $('.accordion-wrapper').show();
        }, 1000)

        var documentName = $('#MaterialsMove_Modal .document-name').text();

        // $('.number-2').text('10')

        var number1 = parseInt($('.number-1').text());
        var number2 = parseInt($('.number-2').text());
        var number3 = parseInt($('.number-3').text());
        var number4 = parseInt($('.number-4').text());
        var number5 = parseInt($('.number-5').text());
        var number6 = parseInt($('.number-6').text());
        var number7 = parseInt($('.number-7').text());
        var number8 = parseInt($('.number-8').text());
        var number9 = parseInt($('.number-9').text());
        var number10 = parseInt($('.number-10').text());
        var number11 = parseInt($('.number-11').text());
        var number12 = parseInt($('.number-12').text());
        var number13 = parseInt($('.number-13').text());
        var number14 = parseInt($('.number-14').text());
        var number15 = parseInt($('.number-15').text());

        // Sub folder 1
        if ($('.document-1').hasClass('move_This_Document')) {
            $('.reviews-number').text('0');
            $('.section-1 .accordion-section-header').addClass('no-documents');
            $('.section-1 .sort-documents-nav').hide();
            $('.section-1 .accordion-section-body').append('<p class="govuk-body-s">No documents</p>');
        }

        // Sub folder 2
        if ($('.document-2').hasClass('move_This_Document') || $('.document-3').hasClass('move_This_Document') || $('.document-4').hasClass('move_This_Document') || $('.document-5').hasClass('move_This_Document')) {
            $('.case-overview-number').text('3');
        }

        // Sub folder 3
        if ($('.document-6').hasClass('move_This_Document') || $('.document-7').hasClass('move_This_Document') || $('.document-8').hasClass('move_This_Document') || $('.document-9').hasClass('move_This_Document') || $('.document-10').hasClass('move_This_Document') || $('.document-11').hasClass('move_This_Document')) {
            $('.statements').text('5');
        }

        // Move to Folder 1
        if ($('input[id=move_Folder_Destination_1]').is(':checked')) {
            $('.materials_section_1').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-1').text(number1 + 1);
            $('.materials_section_1 p.documents-holder').hide();
            $('.materials_section_1 .sort-documents').hide();
            $('.materials_section_1 .documents-available.move_to_folder_1').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-1').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-header').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-body').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 p.govuk-body-s').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-2').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-2').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-3, .materials_section_1 .documents-available.move_to_folder_1 .document-4, .materials_section_1 .documents-available.move_to_folder_1 .document-5').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-header').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-body').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 p.govuk-body-s').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-1').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-3').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-2, .materials_section_1 .documents-available.move_to_folder_1 .document-4, .materials_section_1 .documents-available.move_to_folder_1 .document-5').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-header').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-body').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 p.govuk-body-s').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-1').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-4').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-2, .materials_section_1 .documents-available.move_to_folder_1 .document-3, .materials_section_1 .documents-available.move_to_folder_1 .document-5').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-header').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-body').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 p.govuk-body-s').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-1').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-5').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-2, .materials_section_1 .documents-available.move_to_folder_1 .document-3, .materials_section_1 .documents-available.move_to_folder_1 .document-4').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-header').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-body').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 p.govuk-body-s').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-1').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-6').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-7, .materials_section_1 .documents-available.move_to_folder_1 .document-7, .materials_section_1 .documents-available.move_to_folder_1 .document-9, .materials_section_1 .documents-available.move_to_folder_1 .document-10, .materials_section_1 .documents-available.move_to_folder_1 .document-11').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-header').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-body').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 p.govuk-body-s').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-1').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-7').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-6, .materials_section_1 .documents-available.move_to_folder_1 .document-7, .materials_section_1 .documents-available.move_to_folder_1 .document-9, .materials_section_1 .documents-available.move_to_folder_1 .document-10, .materials_section_1 .documents-available.move_to_folder_1 .document-11').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-header').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-body').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 p.govuk-body-s').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-1').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-8').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-6, .materials_section_1 .documents-available.move_to_folder_1 .document-7, .materials_section_1 .documents-available.move_to_folder_1 .document-9, .materials_section_1 .documents-available.move_to_folder_1 .document-10, .materials_section_1 .documents-available.move_to_folder_1 .document-11').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-header').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-body').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 p.govuk-body-s').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-1').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-9').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-6, .materials_section_1 .documents-available.move_to_folder_1 .document-7, .materials_section_1 .documents-available.move_to_folder_1 .document-8, .materials_section_1 .documents-available.move_to_folder_1 .document-10, .materials_section_1 .documents-available.move_to_folder_1 .document-11').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-header').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-body').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 p.govuk-body-s').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-1').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-10').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-6, .materials_section_1 .documents-available.move_to_folder_1 .document-7, .materials_section_1 .documents-available.move_to_folder_1 .document-8, .materials_section_1 .documents-available.move_to_folder_1 .document-9, .materials_section_1 .documents-available.move_to_folder_1 .document-11').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-header').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-body').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 p.govuk-body-s').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-1').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-11').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 .document-6, .materials_section_1 .documents-available.move_to_folder_1 .document-7, .materials_section_1 .documents-available.move_to_folder_1 .document-8, .materials_section_1 .documents-available.move_to_folder_1 .document-9, .materials_section_1 .documents-available.move_to_folder_1 .document-10').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-header').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section-body').show();
                $('.materials_section_1 .documents-available.move_to_folder_1 p.govuk-body-s').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-1').hide();
                $('.materials_section_1 .documents-available.move_to_folder_1 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 2
        if ($('input[id=move_Folder_Destination_2]').is(':checked')) {
            $('.materials_section_2').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-2').text(number2 + 1);
            $('.materials_section_2 p.documents-holder').hide();
            $('.materials_section_2 .sort-documents').hide();
            $('.materials_section_2 .documents-available.move_to_folder_2').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-1').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-header').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-body').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 p.govuk-body-s').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-2').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-2').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-3, .materials_section_2 .documents-available.move_to_folder_2 .document-4, .materials_section_2 .documents-available.move_to_folder_2 .document-5').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-header').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-body').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 p.govuk-body-s').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-1').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-3').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-2, .materials_section_2 .documents-available.move_to_folder_2 .document-4, .materials_section_2 .documents-available.move_to_folder_2 .document-5').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-header').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-body').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 p.govuk-body-s').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-1').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-4').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-2, .materials_section_2 .documents-available.move_to_folder_2 .document-3, .materials_section_2 .documents-available.move_to_folder_2 .document-5').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-header').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-body').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 p.govuk-body-s').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-1').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-5').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-2, .materials_section_2 .documents-available.move_to_folder_2 .document-3, .materials_section_2 .documents-available.move_to_folder_2 .document-4').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-header').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-body').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 p.govuk-body-s').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-1').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-6').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-7, .materials_section_2 .documents-available.move_to_folder_2 .document-7, .materials_section_2 .documents-available.move_to_folder_2 .document-9, .materials_section_2 .documents-available.move_to_folder_2 .document-10, .materials_section_2 .documents-available.move_to_folder_2 .document-11').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-header').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-body').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 p.govuk-body-s').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-1').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-7').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-6, .materials_section_2 .documents-available.move_to_folder_2 .document-7, .materials_section_2 .documents-available.move_to_folder_2 .document-9, .materials_section_2 .documents-available.move_to_folder_2 .document-10, .materials_section_2 .documents-available.move_to_folder_2 .document-11').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-header').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-body').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 p.govuk-body-s').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-1').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-8').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-6, .materials_section_2 .documents-available.move_to_folder_2 .document-7, .materials_section_2 .documents-available.move_to_folder_2 .document-9, .materials_section_2 .documents-available.move_to_folder_2 .document-10, .materials_section_2 .documents-available.move_to_folder_2 .document-11').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-header').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-body').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 p.govuk-body-s').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-1').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-9').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-6, .materials_section_2 .documents-available.move_to_folder_2 .document-7, .materials_section_2 .documents-available.move_to_folder_2 .document-8, .materials_section_2 .documents-available.move_to_folder_2 .document-10, .materials_section_2 .documents-available.move_to_folder_2 .document-11').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-header').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-body').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 p.govuk-body-s').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-1').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-10').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-6, .materials_section_2 .documents-available.move_to_folder_2 .document-7, .materials_section_2 .documents-available.move_to_folder_2 .document-8, .materials_section_2 .documents-available.move_to_folder_2 .document-9, .materials_section_2 .documents-available.move_to_folder_2 .document-11').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-header').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-body').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 p.govuk-body-s').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-1').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-11').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 .document-6, .materials_section_2 .documents-available.move_to_folder_2 .document-7, .materials_section_2 .documents-available.move_to_folder_2 .document-8, .materials_section_2 .documents-available.move_to_folder_2 .document-9, .materials_section_2 .documents-available.move_to_folder_2 .document-10').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-header').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section-body').show();
                $('.materials_section_2 .documents-available.move_to_folder_2 p.govuk-body-s').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-1').hide();
                $('.materials_section_2 .documents-available.move_to_folder_2 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 3
        if ($('input[id=move_Folder_Destination_3]').is(':checked')) {
            $('.materials_section_3').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-3').text(number3 + 1);
            $('.materials_section_3 p.documents-holder').hide();
            $('.materials_section_3 .sort-documents').hide();
            $('.materials_section_3 .documents-available.move_to_folder_3').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-1').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-header').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-body').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 p.govuk-body-s').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-2').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-2').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-3, .materials_section_3 .documents-available.move_to_folder_3 .document-4, .materials_section_3 .documents-available.move_to_folder_3 .document-5').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-header').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-body').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 p.govuk-body-s').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-1').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-3').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-2, .materials_section_3 .documents-available.move_to_folder_3 .document-4, .materials_section_3 .documents-available.move_to_folder_3 .document-5').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-header').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-body').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 p.govuk-body-s').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-1').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-4').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-2, .materials_section_3 .documents-available.move_to_folder_3 .document-3, .materials_section_3 .documents-available.move_to_folder_3 .document-5').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-header').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-body').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 p.govuk-body-s').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-1').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-5').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-2, .materials_section_3 .documents-available.move_to_folder_3 .document-3, .materials_section_3 .documents-available.move_to_folder_3 .document-4').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-header').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-body').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 p.govuk-body-s').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-1').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-6').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-7, .materials_section_3 .documents-available.move_to_folder_3 .document-7, .materials_section_3 .documents-available.move_to_folder_3 .document-9, .materials_section_3 .documents-available.move_to_folder_3 .document-10, .materials_section_3 .documents-available.move_to_folder_3 .document-11').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-header').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-body').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 p.govuk-body-s').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-1').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-7').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-6, .materials_section_3 .documents-available.move_to_folder_3 .document-7, .materials_section_3 .documents-available.move_to_folder_3 .document-9, .materials_section_3 .documents-available.move_to_folder_3 .document-10, .materials_section_3 .documents-available.move_to_folder_3 .document-11').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-header').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-body').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 p.govuk-body-s').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-1').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-8').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-6, .materials_section_3 .documents-available.move_to_folder_3 .document-7, .materials_section_3 .documents-available.move_to_folder_3 .document-9, .materials_section_3 .documents-available.move_to_folder_3 .document-10, .materials_section_3 .documents-available.move_to_folder_3 .document-11').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-header').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-body').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 p.govuk-body-s').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-1').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-9').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-6, .materials_section_3 .documents-available.move_to_folder_3 .document-7, .materials_section_3 .documents-available.move_to_folder_3 .document-8, .materials_section_3 .documents-available.move_to_folder_3 .document-10, .materials_section_3 .documents-available.move_to_folder_3 .document-11').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-header').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-body').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 p.govuk-body-s').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-1').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-10').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-6, .materials_section_3 .documents-available.move_to_folder_3 .document-7, .materials_section_3 .documents-available.move_to_folder_3 .document-8, .materials_section_3 .documents-available.move_to_folder_3 .document-9, .materials_section_3 .documents-available.move_to_folder_3 .document-11').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-header').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-body').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 p.govuk-body-s').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-1').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-11').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 .document-6, .materials_section_3 .documents-available.move_to_folder_3 .document-7, .materials_section_3 .documents-available.move_to_folder_3 .document-8, .materials_section_3 .documents-available.move_to_folder_3 .document-9, .materials_section_3 .documents-available.move_to_folder_3 .document-10').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-header').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section-body').show();
                $('.materials_section_3 .documents-available.move_to_folder_3 p.govuk-body-s').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-1').hide();
                $('.materials_section_3 .documents-available.move_to_folder_3 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 4
        if ($('input[id=move_Folder_Destination_4]').is(':checked')) {
            $('.materials_section_4').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-4').text(number4 + 1);
            $('.materials_section_4 p.documents-holder').hide();
            $('.materials_section_4 .sort-documents').hide();
            $('.materials_section_4 .documents-available.move_to_folder_4').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-1').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-header').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-body').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 p.govuk-body-s').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-2').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-2').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-3, .materials_section_4 .documents-available.move_to_folder_4 .document-4, .materials_section_4 .documents-available.move_to_folder_4 .document-5').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-header').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-body').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 p.govuk-body-s').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-1').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-3').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-2, .materials_section_4 .documents-available.move_to_folder_4 .document-4, .materials_section_4 .documents-available.move_to_folder_4 .document-5').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-header').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-body').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 p.govuk-body-s').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-1').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-4').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-2, .materials_section_4 .documents-available.move_to_folder_4 .document-3, .materials_section_4 .documents-available.move_to_folder_4 .document-5').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-header').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-body').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 p.govuk-body-s').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-1').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-5').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-2, .materials_section_4 .documents-available.move_to_folder_4 .document-3, .materials_section_4 .documents-available.move_to_folder_4 .document-4').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-header').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-body').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 p.govuk-body-s').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-1').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-6').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-7, .materials_section_4 .documents-available.move_to_folder_4 .document-7, .materials_section_4 .documents-available.move_to_folder_4 .document-9, .materials_section_4 .documents-available.move_to_folder_4 .document-10, .materials_section_4 .documents-available.move_to_folder_4 .document-11').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-header').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-body').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 p.govuk-body-s').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-1').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-7').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-6, .materials_section_4 .documents-available.move_to_folder_4 .document-7, .materials_section_4 .documents-available.move_to_folder_4 .document-9, .materials_section_4 .documents-available.move_to_folder_4 .document-10, .materials_section_4 .documents-available.move_to_folder_4 .document-11').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-header').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-body').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 p.govuk-body-s').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-1').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-8').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-6, .materials_section_4 .documents-available.move_to_folder_4 .document-7, .materials_section_4 .documents-available.move_to_folder_4 .document-9, .materials_section_4 .documents-available.move_to_folder_4 .document-10, .materials_section_4 .documents-available.move_to_folder_4 .document-11').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-header').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-body').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 p.govuk-body-s').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-1').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-9').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-6, .materials_section_4 .documents-available.move_to_folder_4 .document-7, .materials_section_4 .documents-available.move_to_folder_4 .document-8, .materials_section_4 .documents-available.move_to_folder_4 .document-10, .materials_section_4 .documents-available.move_to_folder_4 .document-11').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-header').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-body').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 p.govuk-body-s').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-1').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-10').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-6, .materials_section_4 .documents-available.move_to_folder_4 .document-7, .materials_section_4 .documents-available.move_to_folder_4 .document-8, .materials_section_4 .documents-available.move_to_folder_4 .document-9, .materials_section_4 .documents-available.move_to_folder_4 .document-11').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-header').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-body').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 p.govuk-body-s').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-1').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-11').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 .document-6, .materials_section_4 .documents-available.move_to_folder_4 .document-7, .materials_section_4 .documents-available.move_to_folder_4 .document-8, .materials_section_4 .documents-available.move_to_folder_4 .document-9, .materials_section_4 .documents-available.move_to_folder_4 .document-10').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-header').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section-body').show();
                $('.materials_section_4 .documents-available.move_to_folder_4 p.govuk-body-s').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-1').hide();
                $('.materials_section_4 .documents-available.move_to_folder_4 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 5
        if ($('input[id=move_Folder_Destination_5]').is(':checked')) {
            $('.materials_section_5').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-5').text(number5 + 1);
            $('.materials_section_5 p.documents-holder').hide();
            $('.materials_section_5 .sort-documents').hide();
            $('.materials_section_5 .documents-available.move_to_folder_5').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-1').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-header').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-body').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 p.govuk-body-s').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-2').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-2').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-3, .materials_section_5 .documents-available.move_to_folder_5 .document-4, .materials_section_5 .documents-available.move_to_folder_5 .document-5').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-header').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-body').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 p.govuk-body-s').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-1').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-3').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-2, .materials_section_5 .documents-available.move_to_folder_5 .document-4, .materials_section_5 .documents-available.move_to_folder_5 .document-5').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-header').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-body').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 p.govuk-body-s').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-1').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-4').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-2, .materials_section_5 .documents-available.move_to_folder_5 .document-3, .materials_section_5 .documents-available.move_to_folder_5 .document-5').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-header').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-body').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 p.govuk-body-s').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-1').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-5').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-2, .materials_section_5 .documents-available.move_to_folder_5 .document-3, .materials_section_5 .documents-available.move_to_folder_5 .document-4').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-header').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-body').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 p.govuk-body-s').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-1').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-6').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-7, .materials_section_5 .documents-available.move_to_folder_5 .document-7, .materials_section_5 .documents-available.move_to_folder_5 .document-9, .materials_section_5 .documents-available.move_to_folder_5 .document-10, .materials_section_5 .documents-available.move_to_folder_5 .document-11').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-header').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-body').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 p.govuk-body-s').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-1').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-7').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-6, .materials_section_5 .documents-available.move_to_folder_5 .document-7, .materials_section_5 .documents-available.move_to_folder_5 .document-9, .materials_section_5 .documents-available.move_to_folder_5 .document-10, .materials_section_5 .documents-available.move_to_folder_5 .document-11').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-header').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-body').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 p.govuk-body-s').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-1').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-8').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-6, .materials_section_5 .documents-available.move_to_folder_5 .document-7, .materials_section_5 .documents-available.move_to_folder_5 .document-9, .materials_section_5 .documents-available.move_to_folder_5 .document-10, .materials_section_5 .documents-available.move_to_folder_5 .document-11').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-header').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-body').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 p.govuk-body-s').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-1').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-9').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-6, .materials_section_5 .documents-available.move_to_folder_5 .document-7, .materials_section_5 .documents-available.move_to_folder_5 .document-8, .materials_section_5 .documents-available.move_to_folder_5 .document-10, .materials_section_5 .documents-available.move_to_folder_5 .document-11').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-header').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-body').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 p.govuk-body-s').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-1').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-10').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-6, .materials_section_5 .documents-available.move_to_folder_5 .document-7, .materials_section_5 .documents-available.move_to_folder_5 .document-8, .materials_section_5 .documents-available.move_to_folder_5 .document-9, .materials_section_5 .documents-available.move_to_folder_5 .document-11').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-header').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-body').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 p.govuk-body-s').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-1').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-11').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 .document-6, .materials_section_5 .documents-available.move_to_folder_5 .document-7, .materials_section_5 .documents-available.move_to_folder_5 .document-8, .materials_section_5 .documents-available.move_to_folder_5 .document-9, .materials_section_5 .documents-available.move_to_folder_5 .document-10').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-header').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section-body').show();
                $('.materials_section_5 .documents-available.move_to_folder_5 p.govuk-body-s').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-1').hide();
                $('.materials_section_5 .documents-available.move_to_folder_5 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 6
        if ($('input[id=move_Folder_Destination_6]').is(':checked')) {
            $('.materials_section_6').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-6').text(number6 + 1);
            $('.materials_section_6 p.documents-holder').hide();
            $('.materials_section_6 .sort-documents').hide();
            $('.materials_section_6 .documents-available.move_to_folder_6').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-1').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-header').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-body').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 p.govuk-body-s').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-2').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-2').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-3, .materials_section_6 .documents-available.move_to_folder_6 .document-4, .materials_section_6 .documents-available.move_to_folder_6 .document-5').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-header').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-body').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 p.govuk-body-s').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-1').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-3').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-2, .materials_section_6 .documents-available.move_to_folder_6 .document-4, .materials_section_6 .documents-available.move_to_folder_6 .document-5').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-header').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-body').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 p.govuk-body-s').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-1').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-4').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-2, .materials_section_6 .documents-available.move_to_folder_6 .document-3, .materials_section_6 .documents-available.move_to_folder_6 .document-5').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-header').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-body').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 p.govuk-body-s').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-1').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-5').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-2, .materials_section_6 .documents-available.move_to_folder_6 .document-3, .materials_section_6 .documents-available.move_to_folder_6 .document-4').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-header').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-body').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 p.govuk-body-s').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-1').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-6').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-7, .materials_section_6 .documents-available.move_to_folder_6 .document-7, .materials_section_6 .documents-available.move_to_folder_6 .document-9, .materials_section_6 .documents-available.move_to_folder_6 .document-10, .materials_section_6 .documents-available.move_to_folder_6 .document-11').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-header').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-body').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 p.govuk-body-s').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-1').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-7').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-6, .materials_section_6 .documents-available.move_to_folder_6 .document-7, .materials_section_6 .documents-available.move_to_folder_6 .document-9, .materials_section_6 .documents-available.move_to_folder_6 .document-10, .materials_section_6 .documents-available.move_to_folder_6 .document-11').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-header').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-body').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 p.govuk-body-s').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-1').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-8').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-6, .materials_section_6 .documents-available.move_to_folder_6 .document-7, .materials_section_6 .documents-available.move_to_folder_6 .document-9, .materials_section_6 .documents-available.move_to_folder_6 .document-10, .materials_section_6 .documents-available.move_to_folder_6 .document-11').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-header').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-body').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 p.govuk-body-s').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-1').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-9').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-6, .materials_section_6 .documents-available.move_to_folder_6 .document-7, .materials_section_6 .documents-available.move_to_folder_6 .document-8, .materials_section_6 .documents-available.move_to_folder_6 .document-10, .materials_section_6 .documents-available.move_to_folder_6 .document-11').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-header').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-body').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 p.govuk-body-s').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-1').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-10').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-6, .materials_section_6 .documents-available.move_to_folder_6 .document-7, .materials_section_6 .documents-available.move_to_folder_6 .document-8, .materials_section_6 .documents-available.move_to_folder_6 .document-9, .materials_section_6 .documents-available.move_to_folder_6 .document-11').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-header').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-body').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 p.govuk-body-s').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-1').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-11').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 .document-6, .materials_section_6 .documents-available.move_to_folder_6 .document-7, .materials_section_6 .documents-available.move_to_folder_6 .document-8, .materials_section_6 .documents-available.move_to_folder_6 .document-9, .materials_section_6 .documents-available.move_to_folder_6 .document-10').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-header').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section-body').show();
                $('.materials_section_6 .documents-available.move_to_folder_6 p.govuk-body-s').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-1').hide();
                $('.materials_section_6 .documents-available.move_to_folder_6 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 7
        if ($('input[id=move_Folder_Destination_7]').is(':checked')) {
            $('.materials_section_7').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-7').text(number7 + 1);
            $('.materials_section_7 p.documents-holder').hide();
            $('.materials_section_7 .sort-documents').hide();
            $('.materials_section_7 .documents-available.move_to_folder_7').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-1').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-header').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-body').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 p.govuk-body-s').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-2').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-2').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-3, .materials_section_7 .documents-available.move_to_folder_7 .document-4, .materials_section_7 .documents-available.move_to_folder_7 .document-5').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-header').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-body').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 p.govuk-body-s').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-1').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-3').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-2, .materials_section_7 .documents-available.move_to_folder_7 .document-4, .materials_section_7 .documents-available.move_to_folder_7 .document-5').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-header').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-body').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 p.govuk-body-s').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-1').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-4').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-2, .materials_section_7 .documents-available.move_to_folder_7 .document-3, .materials_section_7 .documents-available.move_to_folder_7 .document-5').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-header').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-body').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 p.govuk-body-s').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-1').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-5').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-2, .materials_section_7 .documents-available.move_to_folder_7 .document-3, .materials_section_7 .documents-available.move_to_folder_7 .document-4').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-header').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-body').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 p.govuk-body-s').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-1').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-6').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-7, .materials_section_7 .documents-available.move_to_folder_7 .document-7, .materials_section_7 .documents-available.move_to_folder_7 .document-9, .materials_section_7 .documents-available.move_to_folder_7 .document-10, .materials_section_7 .documents-available.move_to_folder_7 .document-11').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-header').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-body').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 p.govuk-body-s').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-1').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-7').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-6, .materials_section_7 .documents-available.move_to_folder_7 .document-7, .materials_section_7 .documents-available.move_to_folder_7 .document-9, .materials_section_7 .documents-available.move_to_folder_7 .document-10, .materials_section_7 .documents-available.move_to_folder_7 .document-11').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-header').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-body').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 p.govuk-body-s').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-1').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-8').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-6, .materials_section_7 .documents-available.move_to_folder_7 .document-7, .materials_section_7 .documents-available.move_to_folder_7 .document-9, .materials_section_7 .documents-available.move_to_folder_7 .document-10, .materials_section_7 .documents-available.move_to_folder_7 .document-11').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-header').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-body').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 p.govuk-body-s').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-1').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-9').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-6, .materials_section_7 .documents-available.move_to_folder_7 .document-7, .materials_section_7 .documents-available.move_to_folder_7 .document-8, .materials_section_7 .documents-available.move_to_folder_7 .document-10, .materials_section_7 .documents-available.move_to_folder_7 .document-11').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-header').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-body').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 p.govuk-body-s').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-1').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-10').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-6, .materials_section_7 .documents-available.move_to_folder_7 .document-7, .materials_section_7 .documents-available.move_to_folder_7 .document-8, .materials_section_7 .documents-available.move_to_folder_7 .document-9, .materials_section_7 .documents-available.move_to_folder_7 .document-11').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-header').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-body').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 p.govuk-body-s').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-1').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-11').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 .document-6, .materials_section_7 .documents-available.move_to_folder_7 .document-7, .materials_section_7 .documents-available.move_to_folder_7 .document-8, .materials_section_7 .documents-available.move_to_folder_7 .document-9, .materials_section_7 .documents-available.move_to_folder_7 .document-10').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-header').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section-body').show();
                $('.materials_section_7 .documents-available.move_to_folder_7 p.govuk-body-s').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-1').hide();
                $('.materials_section_7 .documents-available.move_to_folder_7 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 8
        if ($('input[id=move_Folder_Destination_8]').is(':checked')) {
            $('.materials_section_8').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-8').text(number8 + 1);
            $('.materials_section_8 p.documents-holder').hide();
            $('.materials_section_8 .sort-documents').hide();
            $('.materials_section_8 .documents-available.move_to_folder_8').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-1').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-header').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-body').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 p.govuk-body-s').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-2').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-2').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-3, .materials_section_8 .documents-available.move_to_folder_8 .document-4, .materials_section_8 .documents-available.move_to_folder_8 .document-5').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-header').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-body').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 p.govuk-body-s').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-1').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-3').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-2, .materials_section_8 .documents-available.move_to_folder_8 .document-4, .materials_section_8 .documents-available.move_to_folder_8 .document-5').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-header').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-body').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 p.govuk-body-s').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-1').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-4').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-2, .materials_section_8 .documents-available.move_to_folder_8 .document-3, .materials_section_8 .documents-available.move_to_folder_8 .document-5').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-header').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-body').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 p.govuk-body-s').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-1').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-5').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-2, .materials_section_8 .documents-available.move_to_folder_8 .document-3, .materials_section_8 .documents-available.move_to_folder_8 .document-4').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-header').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-body').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 p.govuk-body-s').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-1').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-6').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-7, .materials_section_8 .documents-available.move_to_folder_8 .document-7, .materials_section_8 .documents-available.move_to_folder_8 .document-9, .materials_section_8 .documents-available.move_to_folder_8 .document-10, .materials_section_8 .documents-available.move_to_folder_8 .document-11').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-header').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-body').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 p.govuk-body-s').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-1').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-7').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-6, .materials_section_8 .documents-available.move_to_folder_8 .document-7, .materials_section_8 .documents-available.move_to_folder_8 .document-9, .materials_section_8 .documents-available.move_to_folder_8 .document-10, .materials_section_8 .documents-available.move_to_folder_8 .document-11').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-header').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-body').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 p.govuk-body-s').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-1').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-8').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-6, .materials_section_8 .documents-available.move_to_folder_8 .document-7, .materials_section_8 .documents-available.move_to_folder_8 .document-9, .materials_section_8 .documents-available.move_to_folder_8 .document-10, .materials_section_8 .documents-available.move_to_folder_8 .document-11').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-header').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-body').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 p.govuk-body-s').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-1').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-9').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-6, .materials_section_8 .documents-available.move_to_folder_8 .document-7, .materials_section_8 .documents-available.move_to_folder_8 .document-8, .materials_section_8 .documents-available.move_to_folder_8 .document-10, .materials_section_8 .documents-available.move_to_folder_8 .document-11').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-header').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-body').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 p.govuk-body-s').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-1').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-10').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-6, .materials_section_8 .documents-available.move_to_folder_8 .document-7, .materials_section_8 .documents-available.move_to_folder_8 .document-8, .materials_section_8 .documents-available.move_to_folder_8 .document-9, .materials_section_8 .documents-available.move_to_folder_8 .document-11').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-header').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-body').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 p.govuk-body-s').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-1').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-11').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 .document-6, .materials_section_8 .documents-available.move_to_folder_8 .document-7, .materials_section_8 .documents-available.move_to_folder_8 .document-8, .materials_section_8 .documents-available.move_to_folder_8 .document-9, .materials_section_8 .documents-available.move_to_folder_8 .document-10').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-header').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section-body').show();
                $('.materials_section_8 .documents-available.move_to_folder_8 p.govuk-body-s').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-1').hide();
                $('.materials_section_8 .documents-available.move_to_folder_8 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 9
        if ($('input[id=move_Folder_Destination_9]').is(':checked')) {
            $('.materials_section_9').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-9').text(number9 + 1);
            $('.materials_section_9 p.documents-holder').hide();
            $('.materials_section_9 .sort-documents').hide();
            $('.materials_section_9 .documents-available.move_to_folder_9').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-1').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-header').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-body').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 p.govuk-body-s').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-2').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-2').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-3, .materials_section_9 .documents-available.move_to_folder_9 .document-4, .materials_section_9 .documents-available.move_to_folder_9 .document-5').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-header').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-body').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 p.govuk-body-s').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-1').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-3').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-2, .materials_section_9 .documents-available.move_to_folder_9 .document-4, .materials_section_9 .documents-available.move_to_folder_9 .document-5').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-header').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-body').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 p.govuk-body-s').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-1').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-4').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-2, .materials_section_9 .documents-available.move_to_folder_9 .document-3, .materials_section_9 .documents-available.move_to_folder_9 .document-5').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-header').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-body').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 p.govuk-body-s').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-1').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-5').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-2, .materials_section_9 .documents-available.move_to_folder_9 .document-3, .materials_section_9 .documents-available.move_to_folder_9 .document-4').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-header').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-body').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 p.govuk-body-s').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-1').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-6').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-7, .materials_section_9 .documents-available.move_to_folder_9 .document-7, .materials_section_9 .documents-available.move_to_folder_9 .document-9, .materials_section_9 .documents-available.move_to_folder_9 .document-10, .materials_section_9 .documents-available.move_to_folder_9 .document-11').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-header').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-body').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 p.govuk-body-s').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-1').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-7').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-6, .materials_section_9 .documents-available.move_to_folder_9 .document-7, .materials_section_9 .documents-available.move_to_folder_9 .document-9, .materials_section_9 .documents-available.move_to_folder_9 .document-10, .materials_section_9 .documents-available.move_to_folder_9 .document-11').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-header').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-body').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 p.govuk-body-s').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-1').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-8').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-6, .materials_section_9 .documents-available.move_to_folder_9 .document-7, .materials_section_9 .documents-available.move_to_folder_9 .document-9, .materials_section_9 .documents-available.move_to_folder_9 .document-10, .materials_section_9 .documents-available.move_to_folder_9 .document-11').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-header').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-body').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 p.govuk-body-s').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-1').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-9').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-6, .materials_section_9 .documents-available.move_to_folder_9 .document-7, .materials_section_9 .documents-available.move_to_folder_9 .document-8, .materials_section_9 .documents-available.move_to_folder_9 .document-10, .materials_section_9 .documents-available.move_to_folder_9 .document-11').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-header').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-body').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 p.govuk-body-s').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-1').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-10').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-6, .materials_section_9 .documents-available.move_to_folder_9 .document-7, .materials_section_9 .documents-available.move_to_folder_9 .document-8, .materials_section_9 .documents-available.move_to_folder_9 .document-9, .materials_section_9 .documents-available.move_to_folder_9 .document-11').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-header').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-body').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 p.govuk-body-s').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-1').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-11').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 .document-6, .materials_section_9 .documents-available.move_to_folder_9 .document-7, .materials_section_9 .documents-available.move_to_folder_9 .document-8, .materials_section_9 .documents-available.move_to_folder_9 .document-9, .materials_section_9 .documents-available.move_to_folder_9 .document-10').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-header').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section-body').show();
                $('.materials_section_9 .documents-available.move_to_folder_9 p.govuk-body-s').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-1').hide();
                $('.materials_section_9 .documents-available.move_to_folder_9 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 10
        if ($('input[id=move_Folder_Destination_10]').is(':checked')) {
            $('.materials_section_10').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-10').text(number10 + 1);
            $('.materials_section_10 p.documents-holder').hide();
            $('.materials_section_10 .sort-documents').hide();
            $('.materials_section_10 .documents-available.move_to_folder_10').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-1').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-header').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-body').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 p.govuk-body-s').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-2').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-2').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-3, .materials_section_10 .documents-available.move_to_folder_10 .document-4, .materials_section_10 .documents-available.move_to_folder_10 .document-5').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-header').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-body').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 p.govuk-body-s').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-1').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-3').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-2, .materials_section_10 .documents-available.move_to_folder_10 .document-4, .materials_section_10 .documents-available.move_to_folder_10 .document-5').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-header').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-body').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 p.govuk-body-s').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-1').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-4').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-2, .materials_section_10 .documents-available.move_to_folder_10 .document-3, .materials_section_10 .documents-available.move_to_folder_10 .document-5').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-header').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-body').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 p.govuk-body-s').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-1').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-5').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-2, .materials_section_10 .documents-available.move_to_folder_10 .document-3, .materials_section_10 .documents-available.move_to_folder_10 .document-4').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-header').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-body').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 p.govuk-body-s').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-1').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-6').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-7, .materials_section_10 .documents-available.move_to_folder_10 .document-7, .materials_section_10 .documents-available.move_to_folder_10 .document-9, .materials_section_10 .documents-available.move_to_folder_10 .document-10, .materials_section_10 .documents-available.move_to_folder_10 .document-11').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-header').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-body').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 p.govuk-body-s').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-1').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-7').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-6, .materials_section_10 .documents-available.move_to_folder_10 .document-7, .materials_section_10 .documents-available.move_to_folder_10 .document-9, .materials_section_10 .documents-available.move_to_folder_10 .document-10, .materials_section_10 .documents-available.move_to_folder_10 .document-11').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-header').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-body').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 p.govuk-body-s').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-1').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-8').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-6, .materials_section_10 .documents-available.move_to_folder_10 .document-7, .materials_section_10 .documents-available.move_to_folder_10 .document-9, .materials_section_10 .documents-available.move_to_folder_10 .document-10, .materials_section_10 .documents-available.move_to_folder_10 .document-11').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-header').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-body').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 p.govuk-body-s').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-1').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-9').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-6, .materials_section_10 .documents-available.move_to_folder_10 .document-7, .materials_section_10 .documents-available.move_to_folder_10 .document-8, .materials_section_10 .documents-available.move_to_folder_10 .document-10, .materials_section_10 .documents-available.move_to_folder_10 .document-11').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-header').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-body').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 p.govuk-body-s').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-1').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-10').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-6, .materials_section_10 .documents-available.move_to_folder_10 .document-7, .materials_section_10 .documents-available.move_to_folder_10 .document-8, .materials_section_10 .documents-available.move_to_folder_10 .document-9, .materials_section_10 .documents-available.move_to_folder_10 .document-11').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-header').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-body').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 p.govuk-body-s').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-1').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-11').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 .document-6, .materials_section_10 .documents-available.move_to_folder_10 .document-7, .materials_section_10 .documents-available.move_to_folder_10 .document-8, .materials_section_10 .documents-available.move_to_folder_10 .document-9, .materials_section_10 .documents-available.move_to_folder_10 .document-10').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-header').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section-body').show();
                $('.materials_section_10 .documents-available.move_to_folder_10 p.govuk-body-s').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-1').hide();
                $('.materials_section_10 .documents-available.move_to_folder_10 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 11
        if ($('input[id=move_Folder_Destination_11]').is(':checked')) {
            $('.materials_section_11').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-11').text(number11 + 1);
            $('.materials_section_11 p.documents-holder').hide();
            $('.materials_section_11 .sort-documents').hide();
            $('.materials_section_11 .documents-available.move_to_folder_11').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-1').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-header').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-body').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 p.govuk-body-s').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-2').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-2').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-3, .materials_section_11 .documents-available.move_to_folder_11 .document-4, .materials_section_11 .documents-available.move_to_folder_11 .document-5').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-header').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-body').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 p.govuk-body-s').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-1').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-3').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-2, .materials_section_11 .documents-available.move_to_folder_11 .document-4, .materials_section_11 .documents-available.move_to_folder_11 .document-5').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-header').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-body').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 p.govuk-body-s').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-1').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-4').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-2, .materials_section_11 .documents-available.move_to_folder_11 .document-3, .materials_section_11 .documents-available.move_to_folder_11 .document-5').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-header').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-body').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 p.govuk-body-s').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-1').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-5').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-2, .materials_section_11 .documents-available.move_to_folder_11 .document-3, .materials_section_11 .documents-available.move_to_folder_11 .document-4').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-header').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-body').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 p.govuk-body-s').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-1').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-6').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-7, .materials_section_11 .documents-available.move_to_folder_11 .document-7, .materials_section_11 .documents-available.move_to_folder_11 .document-9, .materials_section_11 .documents-available.move_to_folder_11 .document-10, .materials_section_11 .documents-available.move_to_folder_11 .document-11').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-header').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-body').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 p.govuk-body-s').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-1').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-7').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-6, .materials_section_11 .documents-available.move_to_folder_11 .document-7, .materials_section_11 .documents-available.move_to_folder_11 .document-9, .materials_section_11 .documents-available.move_to_folder_11 .document-10, .materials_section_11 .documents-available.move_to_folder_11 .document-11').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-header').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-body').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 p.govuk-body-s').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-1').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-8').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-6, .materials_section_11 .documents-available.move_to_folder_11 .document-7, .materials_section_11 .documents-available.move_to_folder_11 .document-9, .materials_section_11 .documents-available.move_to_folder_11 .document-10, .materials_section_11 .documents-available.move_to_folder_11 .document-11').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-header').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-body').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 p.govuk-body-s').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-1').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-9').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-6, .materials_section_11 .documents-available.move_to_folder_11 .document-7, .materials_section_11 .documents-available.move_to_folder_11 .document-8, .materials_section_11 .documents-available.move_to_folder_11 .document-10, .materials_section_11 .documents-available.move_to_folder_11 .document-11').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-header').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-body').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 p.govuk-body-s').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-1').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-10').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-6, .materials_section_11 .documents-available.move_to_folder_11 .document-7, .materials_section_11 .documents-available.move_to_folder_11 .document-8, .materials_section_11 .documents-available.move_to_folder_11 .document-9, .materials_section_11 .documents-available.move_to_folder_11 .document-11').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-header').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-body').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 p.govuk-body-s').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-1').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-11').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 .document-6, .materials_section_11 .documents-available.move_to_folder_11 .document-7, .materials_section_11 .documents-available.move_to_folder_11 .document-8, .materials_section_11 .documents-available.move_to_folder_11 .document-9, .materials_section_11 .documents-available.move_to_folder_11 .document-10').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-header').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section-body').show();
                $('.materials_section_11 .documents-available.move_to_folder_11 p.govuk-body-s').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-1').hide();
                $('.materials_section_11 .documents-available.move_to_folder_11 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 12
        if ($('input[id=move_Folder_Destination_12]').is(':checked')) {
            $('.materials_section_12').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-12').text(number12 + 1);
            $('.materials_section_12 p.documents-holder').hide();
            $('.materials_section_12 .sort-documents').hide();
            $('.materials_section_12 .documents-available.move_to_folder_12').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-1').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-header').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-body').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 p.govuk-body-s').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-2').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-2').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-3, .materials_section_12 .documents-available.move_to_folder_12 .document-4, .materials_section_12 .documents-available.move_to_folder_12 .document-5').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-header').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-body').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 p.govuk-body-s').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-1').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-3').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-2, .materials_section_12 .documents-available.move_to_folder_12 .document-4, .materials_section_12 .documents-available.move_to_folder_12 .document-5').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-header').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-body').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 p.govuk-body-s').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-1').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-4').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-2, .materials_section_12 .documents-available.move_to_folder_12 .document-3, .materials_section_12 .documents-available.move_to_folder_12 .document-5').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-header').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-body').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 p.govuk-body-s').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-1').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-5').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-2, .materials_section_12 .documents-available.move_to_folder_12 .document-3, .materials_section_12 .documents-available.move_to_folder_12 .document-4').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-header').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-body').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 p.govuk-body-s').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-1').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-6').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-7, .materials_section_12 .documents-available.move_to_folder_12 .document-7, .materials_section_12 .documents-available.move_to_folder_12 .document-9, .materials_section_12 .documents-available.move_to_folder_12 .document-10, .materials_section_12 .documents-available.move_to_folder_12 .document-11').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-header').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-body').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 p.govuk-body-s').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-1').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-7').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-6, .materials_section_12 .documents-available.move_to_folder_12 .document-7, .materials_section_12 .documents-available.move_to_folder_12 .document-9, .materials_section_12 .documents-available.move_to_folder_12 .document-10, .materials_section_12 .documents-available.move_to_folder_12 .document-11').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-header').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-body').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 p.govuk-body-s').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-1').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-8').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-6, .materials_section_12 .documents-available.move_to_folder_12 .document-7, .materials_section_12 .documents-available.move_to_folder_12 .document-9, .materials_section_12 .documents-available.move_to_folder_12 .document-10, .materials_section_12 .documents-available.move_to_folder_12 .document-11').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-header').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-body').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 p.govuk-body-s').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-1').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-9').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-6, .materials_section_12 .documents-available.move_to_folder_12 .document-7, .materials_section_12 .documents-available.move_to_folder_12 .document-8, .materials_section_12 .documents-available.move_to_folder_12 .document-10, .materials_section_12 .documents-available.move_to_folder_12 .document-11').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-header').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-body').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 p.govuk-body-s').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-1').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-10').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-6, .materials_section_12 .documents-available.move_to_folder_12 .document-7, .materials_section_12 .documents-available.move_to_folder_12 .document-8, .materials_section_12 .documents-available.move_to_folder_12 .document-9, .materials_section_12 .documents-available.move_to_folder_12 .document-11').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-header').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-body').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 p.govuk-body-s').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-1').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-11').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 .document-6, .materials_section_12 .documents-available.move_to_folder_12 .document-7, .materials_section_12 .documents-available.move_to_folder_12 .document-8, .materials_section_12 .documents-available.move_to_folder_12 .document-9, .materials_section_12 .documents-available.move_to_folder_12 .document-10').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-header').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section-body').show();
                $('.materials_section_12 .documents-available.move_to_folder_12 p.govuk-body-s').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-1').hide();
                $('.materials_section_12 .documents-available.move_to_folder_12 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 13
        if ($('input[id=move_Folder_Destination_13]').is(':checked')) {
            $('.materials_section_13').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-13').text(number13 + 1);
            $('.materials_section_13 p.documents-holder').hide();
            $('.materials_section_13 .sort-documents').hide();
            $('.materials_section_13 .documents-available.move_to_folder_13').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-1').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-header').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-body').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 p.govuk-body-s').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-2').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-2').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-3, .materials_section_13 .documents-available.move_to_folder_13 .document-4, .materials_section_13 .documents-available.move_to_folder_13 .document-5').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-header').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-body').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 p.govuk-body-s').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-1').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-3').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-2, .materials_section_13 .documents-available.move_to_folder_13 .document-4, .materials_section_13 .documents-available.move_to_folder_13 .document-5').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-header').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-body').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 p.govuk-body-s').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-1').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-4').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-2, .materials_section_13 .documents-available.move_to_folder_13 .document-3, .materials_section_13 .documents-available.move_to_folder_13 .document-5').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-header').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-body').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 p.govuk-body-s').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-1').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-5').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-2, .materials_section_13 .documents-available.move_to_folder_13 .document-3, .materials_section_13 .documents-available.move_to_folder_13 .document-4').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-header').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-body').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 p.govuk-body-s').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-1').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-6').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-7, .materials_section_13 .documents-available.move_to_folder_13 .document-7, .materials_section_13 .documents-available.move_to_folder_13 .document-9, .materials_section_13 .documents-available.move_to_folder_13 .document-10, .materials_section_13 .documents-available.move_to_folder_13 .document-11').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-header').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-body').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 p.govuk-body-s').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-1').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-7').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-6, .materials_section_13 .documents-available.move_to_folder_13 .document-7, .materials_section_13 .documents-available.move_to_folder_13 .document-9, .materials_section_13 .documents-available.move_to_folder_13 .document-10, .materials_section_13 .documents-available.move_to_folder_13 .document-11').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-header').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-body').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 p.govuk-body-s').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-1').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-8').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-6, .materials_section_13 .documents-available.move_to_folder_13 .document-7, .materials_section_13 .documents-available.move_to_folder_13 .document-9, .materials_section_13 .documents-available.move_to_folder_13 .document-10, .materials_section_13 .documents-available.move_to_folder_13 .document-11').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-header').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-body').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 p.govuk-body-s').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-1').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-9').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-6, .materials_section_13 .documents-available.move_to_folder_13 .document-7, .materials_section_13 .documents-available.move_to_folder_13 .document-8, .materials_section_13 .documents-available.move_to_folder_13 .document-10, .materials_section_13 .documents-available.move_to_folder_13 .document-11').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-header').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-body').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 p.govuk-body-s').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-1').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-10').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-6, .materials_section_13 .documents-available.move_to_folder_13 .document-7, .materials_section_13 .documents-available.move_to_folder_13 .document-8, .materials_section_13 .documents-available.move_to_folder_13 .document-9, .materials_section_13 .documents-available.move_to_folder_13 .document-11').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-header').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-body').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 p.govuk-body-s').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-1').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-11').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 .document-6, .materials_section_13 .documents-available.move_to_folder_13 .document-7, .materials_section_13 .documents-available.move_to_folder_13 .document-8, .materials_section_13 .documents-available.move_to_folder_13 .document-9, .materials_section_13 .documents-available.move_to_folder_13 .document-10').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-header').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section-body').show();
                $('.materials_section_13 .documents-available.move_to_folder_13 p.govuk-body-s').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-1').hide();
                $('.materials_section_13 .documents-available.move_to_folder_13 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 14
        if ($('input[id=move_Folder_Destination_14]').is(':checked')) {
            $('.materials_section_14').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-14').text(number14 + 1);
            $('.materials_section_14 p.documents-holder').hide();
            $('.materials_section_14 .sort-documents').hide();
            $('.materials_section_14 .documents-available.move_to_folder_14').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-1').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-header').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-body').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 p.govuk-body-s').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-2').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-2').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-3, .materials_section_14 .documents-available.move_to_folder_14 .document-4, .materials_section_14 .documents-available.move_to_folder_14 .document-5').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-header').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-body').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 p.govuk-body-s').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-1').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-3').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-2, .materials_section_14 .documents-available.move_to_folder_14 .document-4, .materials_section_14 .documents-available.move_to_folder_14 .document-5').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-header').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-body').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 p.govuk-body-s').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-1').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-4').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-2, .materials_section_14 .documents-available.move_to_folder_14 .document-3, .materials_section_14 .documents-available.move_to_folder_14 .document-5').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-header').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-body').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 p.govuk-body-s').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-1').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-5').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-2, .materials_section_14 .documents-available.move_to_folder_14 .document-3, .materials_section_14 .documents-available.move_to_folder_14 .document-4').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-header').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-body').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 p.govuk-body-s').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-1').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-6').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-7, .materials_section_14 .documents-available.move_to_folder_14 .document-7, .materials_section_14 .documents-available.move_to_folder_14 .document-9, .materials_section_14 .documents-available.move_to_folder_14 .document-10, .materials_section_14 .documents-available.move_to_folder_14 .document-11').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-header').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-body').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 p.govuk-body-s').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-1').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-7').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-6, .materials_section_14 .documents-available.move_to_folder_14 .document-7, .materials_section_14 .documents-available.move_to_folder_14 .document-9, .materials_section_14 .documents-available.move_to_folder_14 .document-10, .materials_section_14 .documents-available.move_to_folder_14 .document-11').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-header').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-body').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 p.govuk-body-s').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-1').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-8').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-6, .materials_section_14 .documents-available.move_to_folder_14 .document-7, .materials_section_14 .documents-available.move_to_folder_14 .document-9, .materials_section_14 .documents-available.move_to_folder_14 .document-10, .materials_section_14 .documents-available.move_to_folder_14 .document-11').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-header').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-body').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 p.govuk-body-s').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-1').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-9').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-6, .materials_section_14 .documents-available.move_to_folder_14 .document-7, .materials_section_14 .documents-available.move_to_folder_14 .document-8, .materials_section_14 .documents-available.move_to_folder_14 .document-10, .materials_section_14 .documents-available.move_to_folder_14 .document-11').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-header').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-body').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 p.govuk-body-s').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-1').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-10').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-6, .materials_section_14 .documents-available.move_to_folder_14 .document-7, .materials_section_14 .documents-available.move_to_folder_14 .document-8, .materials_section_14 .documents-available.move_to_folder_14 .document-9, .materials_section_14 .documents-available.move_to_folder_14 .document-11').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-header').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-body').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 p.govuk-body-s').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-1').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-11').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 .document-6, .materials_section_14 .documents-available.move_to_folder_14 .document-7, .materials_section_14 .documents-available.move_to_folder_14 .document-8, .materials_section_14 .documents-available.move_to_folder_14 .document-9, .materials_section_14 .documents-available.move_to_folder_14 .document-10').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-header').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section-body').show();
                $('.materials_section_14 .documents-available.move_to_folder_14 p.govuk-body-s').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-1').hide();
                $('.materials_section_14 .documents-available.move_to_folder_14 .accordion-section.section-2').hide();
            }
        }

        // Move to Folder 15
        if ($('input[id=move_Folder_Destination_15]').is(':checked')) {
            $('.materials_section_15').addClass('documents documents_moved');
            var number = parseInt($('.materials.documents h3 .name_Wrapper span').text());
            $('.materials.documents h3 .name_Wrapper span').text('10');
            $('.number-15').text(number15 + 1);
            $('.materials_section_15 p.documents-holder').hide();
            $('.materials_section_15 .sort-documents').hide();
            $('.materials_section_15 .documents-available.move_to_folder_15').show();
            if ($('.document-1').hasClass('move_This_Document')) {
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-1').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-header').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-body').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 p.govuk-body-s').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-2').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-3').hide();
            }
            if ($('.document-2').hasClass('move_This_Document')) {
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-2').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-3, .materials_section_15 .documents-available.move_to_folder_15 .document-4, .materials_section_15 .documents-available.move_to_folder_15 .document-5').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-header').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-body').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 p.govuk-body-s').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-1').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-3').hide();
            }
            if ($('.document-3').hasClass('move_This_Document')) {
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-3').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-2, .materials_section_15 .documents-available.move_to_folder_15 .document-4, .materials_section_15 .documents-available.move_to_folder_15 .document-5').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-header').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-body').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 p.govuk-body-s').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-1').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-3').hide();
            }
            if ($('.document-4').hasClass('move_This_Document')) {
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-4').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-2, .materials_section_15 .documents-available.move_to_folder_15 .document-3, .materials_section_15 .documents-available.move_to_folder_15 .document-5').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-header').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-body').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 p.govuk-body-s').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-1').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-3').hide();
            }
            if ($('.document-5').hasClass('move_This_Document')) {
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-5').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-2, .materials_section_15 .documents-available.move_to_folder_15 .document-3, .materials_section_15 .documents-available.move_to_folder_15 .document-4').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-header').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-body').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 p.govuk-body-s').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-1').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-3').hide();
            }
            if ($('.document-6').hasClass('move_This_Document')) {
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-6').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-7, .materials_section_15 .documents-available.move_to_folder_15 .document-7, .materials_section_15 .documents-available.move_to_folder_15 .document-9, .materials_section_15 .documents-available.move_to_folder_15 .document-10, .materials_section_15 .documents-available.move_to_folder_15 .document-11').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-header').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-body').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 p.govuk-body-s').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-1').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-2').hide();
            }
            if ($('.document-7').hasClass('move_This_Document')) {
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-7').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-6, .materials_section_15 .documents-available.move_to_folder_15 .document-7, .materials_section_15 .documents-available.move_to_folder_15 .document-9, .materials_section_15 .documents-available.move_to_folder_15 .document-10, .materials_section_15 .documents-available.move_to_folder_15 .document-11').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-header').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-body').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 p.govuk-body-s').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-1').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-2').hide();
            }
            if ($('.document-8').hasClass('move_This_Document')) {
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-8').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-6, .materials_section_15 .documents-available.move_to_folder_15 .document-7, .materials_section_15 .documents-available.move_to_folder_15 .document-9, .materials_section_15 .documents-available.move_to_folder_15 .document-10, .materials_section_15 .documents-available.move_to_folder_15 .document-11').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-header').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-body').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 p.govuk-body-s').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-1').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-2').hide();
            }
            if ($('.document-9').hasClass('move_This_Document')) {
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-9').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-6, .materials_section_15 .documents-available.move_to_folder_15 .document-7, .materials_section_15 .documents-available.move_to_folder_15 .document-8, .materials_section_15 .documents-available.move_to_folder_15 .document-10, .materials_section_15 .documents-available.move_to_folder_15 .document-11').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-header').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-body').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 p.govuk-body-s').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-1').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-2').hide();
            }
            if ($('.document-10').hasClass('move_This_Document')) {
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-10').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-6, .materials_section_15 .documents-available.move_to_folder_15 .document-7, .materials_section_15 .documents-available.move_to_folder_15 .document-8, .materials_section_15 .documents-available.move_to_folder_15 .document-9, .materials_section_15 .documents-available.move_to_folder_15 .document-11').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-header').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-body').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 p.govuk-body-s').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-1').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-2').hide();
            }
            if ($('.document-11').hasClass('move_This_Document')) {
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-11').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 .document-6, .materials_section_15 .documents-available.move_to_folder_15 .document-7, .materials_section_15 .documents-available.move_to_folder_15 .document-8, .materials_section_15 .documents-available.move_to_folder_15 .document-9, .materials_section_15 .documents-available.move_to_folder_15 .document-10').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-header').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section-body').show();
                $('.materials_section_15 .documents-available.move_to_folder_15 p.govuk-body-s').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-1').hide();
                $('.materials_section_15 .documents-available.move_to_folder_15 .accordion-section.section-2').hide();
            }
        }

    });


})

// Close move folder
function closeMoveMaterials() {
    $('#MaterialsMove_Modal').addClass('rj-dont-display');
    $('table tr').removeClass('move_This_Document');
}

// Close egress transfer
function closeEgressMaterials() {
    $('#egressTransfer_1_Modal').addClass('rj-dont-display');
}


// Choose a folder
function sortMaterials() {
    $('#MaterialsTransfer_1_Modal').removeClass('rj-dont-display');
}

function closeSortMaterials() {
    $('#MaterialsTransfer_1_Modal').addClass('rj-dont-display');
}

// Witness and suspect data
function sortMaterials2() {
    $('#MaterialsTransfer_2_Modal').removeClass('rj-dont-display');
}

function closeSortMaterials2() {
    $('#MaterialsTransfer_2_Modal').addClass('rj-dont-display');
}

// Finished 
// function finishedTransfer() {
//     $('#MaterialsTransfer_2_Modal').addClass('rj-dont-display');
//     // location.reload();
// }

function windowSizeChange2() {
    $('.window-size').toggleClass('close');
    $('.width_30').toggle();
    $('.width_70').toggleClass('full-width');
}

// Row 1
function materials_Row_1() {
    $('#materials_Row_1').toggle();
    $('.folder.materials_Row_1').toggleClass('open');
}

function materials_Row_1A() {
    $('#materials_Row_1A').toggle();
    $('.folder.materials_Row_1A').toggleClass('open');
}

function materials_Row_1B() {
    $('#materials_Row_1B').toggle();
    $('.folder.materials_Row_1B').toggleClass('open');
}

function materials_Row_1C() {
    $('#materials_Row_1C').toggle();
    $('.folder.materials_Row_1C').toggleClass('open');
}

// Row 2
function materials_Row_2() {
    $('#materials_Row_2').toggle();
    $('.folder.materials_Row_2').toggleClass('open');
}

function materials_Row_3() {
    $('#materials_Row_3').toggle();
    $('.folder.materials_Row_3').toggleClass('open');
}

function materials_Row_4() {
    $('#materials_Row_4').toggle();
    $('.folder.materials_Row_4').toggleClass('open');
}

function materials_Row_5() {
    $('#materials_Row_5').toggle();
    $('.folder.materials_Row_5').toggleClass('open');
}

function materials_Row_6() {
    $('#materials_Row_6').toggle();
    $('.folder.materials_Row_6').toggleClass('open');
}

// =================================== MATERIALS - COOKIES =================================== //
$(document).ready(function () {

    $('.accordion-wrapper, #materials-table, #shared_drive-table, .transfer-table').hide();
    $('#loading_materials, #loading_transfer').show();

    setTimeout(function () {
        $('#loading_materials, #loading_transfer').hide();
        $('.accordion-wrapper, #materials-table, #shared_drive-table, .transfer-table').show();

        $('.transfer_Folder_Destination.shared_Drive_Copying').show();
    }, 3000)

    // File location
    $("#transfer_Files_to_Shared_Drive").on("click", function (e) { 
        $.cookie("transfer_Files_to_Shared_Drive", $('input[name=transfer_Folder_Destination]:checked').val(), {path:'/'});
    });

    // Egress
    $("#transfer_Materials").on("click", function (e) { 
        if ($('input[id=transfer_Folder_3]').is(':checked')) {
            $.cookie("transfer_Folder_3", true, {path:'/'});
        }
    });

    $('#folder-destination').hide();

    if ($.cookie("transfer_Folder_3") == 'true') {
        // Numbers
        $('#materials_Nav .materials-number').removeClass('zero');
        $('.number-2').removeClass('zero');

        // var materialsNumber1 = parseInt($('#materials_Nav .materials-number').text());
        // var inboundNumber1 = parseInt($('#materials_Nav .inbound-number').text());

        // Egress section
        $('#materials-table .folder.materials_Row_3').addClass('empty');
        $('#materials_Row_3 td table').remove();
        $('.egress_number-3').html('0');
        $('#materials_Row_3 td').append(`
            <td scope="row" class="govuk-table__cell" colspan="2">
                <p>Materials received and deleted <strong id="TRANSFER-stamp">Today, 11:05am</strong>.</p>
            </td>
        `);

        $('.accordion-wrapper').hide();
        $('#loading_materials').show();

        setTimeout(function () {
            $('#loading_materials').hide();
            $('.accordion-wrapper').show();
        }, 3000)

        $('#folder-destination').show();

    }

    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_1') {
        var materialsNumber1 = parseInt($('.number-1').text());
        $('.number-1').text(materialsNumber1 + 11);
        // Shared drive
        $('.materials_section_1 .documents-available').css('display','inline-block');
        $('.materials_section_1 .documents-holder').hide();
        $('.materials_section_1').addClass('documents');
        $('.folder-destination').html('');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_2') {
        var materialsNumber2 = parseInt($('.number-2').text());
        $('.number-2').text(materialsNumber2 + 11);
        // Shared drive
        $('.materials_section_2 .documents-available').css('display','inline-block');
        $('.materials_section_2 .documents-holder').hide();
        $('.materials_section_2').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_3') {
        var materialsNumber3 = parseInt($('.number-3').text());
        $('.number-3').text(materialsNumber2 + 11);
        // Shared drive
        $('.materials_section_3 .documents-available').css('display','inline-block');
        $('.materials_section_3 .documents-holder').hide();
        $('.materials_section_3').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_4') {
        var materialsNumber4 = parseInt($('.number-4').text());
        $('.number-4').text(materialsNumber4 + 11);
        // Shared drive
        $('.materials_section_4 .documents-available').css('display','inline-block');
        $('.materials_section_4 .documents-holder').hide();
        $('.materials_section_4').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_5') {
        var materialsNumber5 = parseInt($('.number-5').text());
        $('.number-5').text(materialsNumber5 + 11);
        // Shared drive
        $('.materials_section_5 .documents-available').css('display','inline-block');
        $('.materials_section_5 .documents-holder').hide();
        $('.materials_section_5').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_6') {
        var materialsNumber6 = parseInt($('.number-6').text());
        $('.number-6').text(materialsNumber6 + 11);
        // Shared drive
        $('.materials_section_6 .documents-available').css('display','inline-block');
        $('.materials_section_6 .documents-holder').hide();
        $('.materials_section_6').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_7') {
        var materialsNumber7 = parseInt($('.number-2').text());
        $('.number-7').text(materialsNumber7 + 11);
        // Shared drive
        $('.materials_section_7 .documents-available').css('display','inline-block');
        $('.materials_section_7 .documents-holder').hide();
        $('.materials_section_7').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_8') {
        var materialsNumber8 = parseInt($('.number-2').text());
        $('.number-8').text(materialsNumber8 + 11);
        // Shared drive
        $('.materials_section_8 .documents-available').css('display','inline-block');
        $('.materials_section_8 .documents-holder').hide();
        $('.materials_section_8').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_9') {
        var materialsNumber9 = parseInt($('.number-9').text());
        $('.number-9').text(materialsNumber2 + 11);
        // Shared drive
        $('.materials_section_9 .documents-available').css('display','inline-block');
        $('.materials_section_9 .documents-holder').hide();
        $('.materials_section_9').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_10') {
        var materialsNumber10 = parseInt($('.number-10').text());
        $('.number-10').text(materialsNumber2 + 11);
        // Shared drive
        $('.materials_section_10 .documents-available').css('display','inline-block');
        $('.materials_section_10 .documents-holder').hide();
        $('.materials_section_10').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_11') {
        var materialsNumber11 = parseInt($('.number-11').text());
        $('.number-11').text(materialsNumber2 + 11);
        // Shared drive
        $('.materials_section_11 .documents-available').css('display','inline-block');
        $('.materials_section_11 .documents-holder').hide();
        $('.materials_section_11').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_12') {
        var materialsNumber12 = parseInt($('.number-12').text());
        $('.number-12').text(materialsNumber12 + 11);
        // Shared drive
        $('.materials_section_12 .documents-available').css('display','inline-block');
        $('.materials_section_12 .documents-holder').hide();
        $('.materials_section_12').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_13') {
        var materialsNumber13 = parseInt($('.number-2').text());
        $('.number-13').text(materialsNumber13 + 11);
        // Shared drive
        $('.materials_section_13 .documents-available').css('display','inline-block');
        $('.materials_section_13 .documents-holder').hide();
        $('.materials_section_13').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_14') {
        var materialsNumber14 = parseInt($('.number-14').text());
        $('.number-14').text(materialsNumber2 + 11);
        // Shared drive
        $('.materials_section_14 .documents-available').css('display','inline-block');
        $('.materials_section_14 .documents-holder').hide();
        $('.materials_section_14').addClass('documents');
    }
    if ($.cookie("transfer_Files_to_Shared_Drive") == 'Destination_15') {
        var materialsNumber15 = parseInt($('.number-15').text());
        $('.number-15').text(materialsNumber2 + 11);
        // Shared drive
        $('.materials_section_15 .documents-available').css('display','inline-block');
        $('.materials_section_15 .documents-holder').hide();
        $('.materials_section_15').addClass('documents');
    }

    // Transfer Suspects
    $('#transferred_Suspect_Details, .transferred_Suspect_1, .transferred_Suspect_2, .transferred_Suspect_3').hide();
    $('#transferred_Witness_Details, .transferred_Witness_1, .transferred_Witness_2, .transferred_Witness_3, .transferred_Witness_4, .transferred_Witness_5').hide();

    $("#finish_Transfer").on("click", function (e) { 
        $.cookie("finish_Transfer", true, {path:'/'});
        // $.cookie("transfer_Materials", true, {path:'/'});

        $.cookie("folder_Transfer_To", $('input[name=transfer_Folder_Destination]:checked').closest('.govuk-radios__item').find('label').text(), {path:'/'});

        window.location.replace('5-case-overview#materialsTab');

        // $.cookie("transferNumberSuspects", parseInt($('.suspects-number').text()), {path:'/'});
        $.cookie("transferNumberTotalSuspects", parseInt($('input[name="transfer_Folder_SuspectData"]:checked').length), {path:'/'});
        $.cookie("transferNumberTotalWitnesses", parseInt($('input[name="transfer_Folder_WitnessData"]:checked').length), {path:'/'});
        
        if ($('input[id=transfer_Folder_Suspect_1]').is(':checked')) {
            $.cookie("transfer_Folder_Suspect_1", true, {path:'/'});
        }
        if ($('input[id=transfer_Folder_Suspect_2]').is(':checked')) {
            $.cookie("transfer_Folder_Suspect_2", true, {path:'/'});
        }
        if ($('input[id=transfer_Folder_Suspect_3]').is(':checked')) {
            $.cookie("transfer_Folder_Suspect_3", true, {path:'/'});
        }

        if ($('input[id=transfer_Folder_Witness_1]').is(':checked')) {
            $.cookie("transfer_Folder_Witness_1", true, {path:'/'});
        }
        if ($('input[id=transfer_Folder_Witness_2]').is(':checked')) {
            $.cookie("transfer_Folder_Witness_2", true, {path:'/'});
        }
        if ($('input[id=transfer_Folder_Witness_3]').is(':checked')) {
            $.cookie("transfer_Folder_Witness_3", true, {path:'/'});
        }
        if ($('input[id=transfer_Folder_Witness_4]').is(':checked')) {
            $.cookie("transfer_Folder_Witness_4", true, {path:'/'});
        }
        if ($('input[id=transfer_Folder_Witness_5]').is(':checked')) {
            $.cookie("transfer_Folder_Witness_5", true, {path:'/'});
        }
    });

    if ($.cookie("folder_Transfer_To")) {
        $('.folder-destination').text($.cookie("folder_Transfer_To"));
    }

    if ($.cookie("finish_Transfer") == 'true') {
        $('#transferred_Suspect_Details').show();
        $('#transferred_Witness_Details').show();

        var suspectsNumber = parseInt($('.suspects-number').text());
        var suspectsNumberTotal = parseInt($.cookie("transferNumberTotalSuspects"));
        $('.suspects-number').text(suspectsNumber + suspectsNumberTotal);

        var witnessNumber = parseInt($('.witnesses-number').text());
        var witnessNumberTotal = parseInt($.cookie("transferNumberTotalWitnesses"));
        $('.witnesses-number').text(witnessNumber + witnessNumberTotal);
    }

    if ($.cookie("transfer_Folder_Suspect_1") == 'true') {
        $('.transferred_Suspect_1').show();
    }
    if ($.cookie("transfer_Folder_Suspect_2") == 'true') {
        $('.transferred_Suspect_2').show();
    }
    if ($.cookie("transfer_Folder_Suspect_3") == 'true') {
        $('.transferred_Suspect_3').show();
    }

    if ($.cookie("transfer_Folder_Witness_1") == 'true') {
        $('.transferred_Witness_1').show();
    }
    if ($.cookie("transfer_Folder_Witness_2") == 'true') {
        $('.transferred_Witness_2').show();
    }
    if ($.cookie("transfer_Folder_Witness_3") == 'true') {
        $('.transferred_Witness_3').show();
    }
    if ($.cookie("transfer_Folder_Witness_4") == 'true') {
        $('.transferred_Witness_4').show();
    }
    if ($.cookie("transfer_Folder_Witness_5") == 'true') {
        $('.transferred_Witness_5').show();
    }

})

