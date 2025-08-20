// Unused and Evidential

$(document).ready(function () {

    // Move to UNUSED
    $(".unused-Document").on("click", function (e) {
        e.preventDefault();
        $(this).parent().parent().parent().hide();

        var unusedNumber = parseFloat($('.unused-materials').text()) + 1;
        $('.unused-materials').html(unusedNumber);

        var documentID = $(this).parent().parent().parent().attr('id');

        // 1 - Reviews
        if (documentID == 'group1-doc1') { 
            $('#group1-doc1-B').show(); 
            var reviewsNumber = parseFloat($('.reviews-number').text()) -1;
            $('.reviews-number').html(reviewsNumber);
            $('.accordion-section.section-1 .accordion-section-header').addClass('no-documents');     
        }

        // 2 - Case overview
        if (documentID == 'group2-doc1') { 
            $('#group2-doc1-B').show(); 
            var caseOverviewNumber = parseFloat($('.case-overview-number').text()) -1;
            $('.case-overview-number').html(caseOverviewNumber);
        }
        if (documentID == 'group2-doc2') { 
            $('#group2-doc2-B').show(); 
            var caseOverviewNumber = parseFloat($('.case-overview-number').text()) -1;
            $('.case-overview-number').html(caseOverviewNumber);
        }
        if (documentID == 'group2-doc3') { 
            $('#group2-doc3-B').show(); 
            var caseOverviewNumber = parseFloat($('.case-overview-number').text()) -1;
            $('.case-overview-number').html(caseOverviewNumber);
        }
        if (documentID == 'group2-doc4') { 
            $('#group2-doc4-B').show(); 
            var caseOverviewNumber = parseFloat($('.case-overview-number').text()) -1;
            $('.case-overview-number').html(caseOverviewNumber);
        }

        // 3 - Statements
        if (documentID == 'group3-doc1') { 
            $('#group3-doc1-B').show(); 
            var statementsNumber = parseFloat($('.statements').text()) -1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group3-doc2') { 
            $('#group3-doc2-B').show(); 
            var statementsNumber = parseFloat($('.statements').text()) -1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group3-doc3') { 
            $('#group3-doc3-B').show(); 
            var statementsNumber = parseFloat($('.statements').text()) -1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group3-doc4') { 
            $('#group3-doc4-B').show(); 
            var statementsNumber = parseFloat($('.statements').text()) -1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group3-doc5') { 
            $('#group3-doc5-B').show(); 
            var statementsNumber = parseFloat($('.statements').text()) -1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'new-document-2') { 
            $('#new-document-2-B').show(); 
            var statementsNumber = parseFloat($('.statements').text()) -1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group3-doc6') { 
            $('#group3-doc6-B').show(); 
            var statementsNumber = parseFloat($('.statements').text()) -1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group10-doc3') { 
            $('#group10-doc3-B').show(); 
            var statementsNumber = parseFloat($('.statements').text()) -1;
            $('.statements').html(statementsNumber);
        }

        // 4 - Exhibits
        if (documentID == 'group4-doc1') { 
            $('#group4-doc1-B').show(); 
            var exhibitsNumber = parseFloat($('.exhibits-number').text()) -1;
            $('.exhibits-number').html(exhibitsNumber);
        }
        if (documentID == 'group4-doc2') { 
            $('#group4-doc2-B').show(); 
            var exhibitsNumber = parseFloat($('.exhibits-number').text()) -1;
            $('.exhibits-number').html(exhibitsNumber);
        }
        if (documentID == 'group10-doc4') { 
            $('#group10-doc4-B').show(); 
            var exhibitsNumber = parseFloat($('.exhibits-number').text()) -1;
            $('.exhibits-number').html(exhibitsNumber);
        }

        // 5 - Forensics

        // 6 - Unused materials

        // 7 - Defendant
        if (documentID == 'new-document-1') { 
            $('#new-document-1-B').show(); 
            var defendantsNumber = parseFloat($('.defendants').text()) -1;
            $('.defendants').html(defendantsNumber);
        }

        // 8 - Court preparation

        // 9 - Communications
        if (documentID == 'group10-doc2') { 
            $('#group10-doc2-B').show(); 
            var communicationsNumber = parseFloat($('.communications-number').text()) -1;
            $('.communications-number').html(communicationsNumber);
        }
        if (documentID == 'group9-doc1') { 
            $('#group9-doc1-B').show(); 
            var communicationsNumber = parseFloat($('.communications-number').text()) -1;
            $('.communications-number').html(communicationsNumber);
        }
        if (documentID == 'group9-doc2') { 
            $('#group9-doc2-B').show(); 
            var communicationsNumber = parseFloat($('.communications-number').text()) -1;
            $('.communications-number').html(communicationsNumber);
        }

        // 10 - Communications
        if (documentID == 'group10-doc1') { 
            $('#group10-doc1-B').show(); 
            var unclassifiedNumber = parseFloat($('.unclassified-number').text()) -1;
            $('.unclassified-number').html(unclassifiedNumber);
        }
        if (documentID == 'group10-doc2') { 
            $('#group10-doc2-B').show(); 
            var unclassifiedNumber = parseFloat($('.unclassified-number').text()) -1;
            $('.unclassified-number').html(unclassifiedNumber);
        }
        if (documentID == 'group10-doc3') { 
            $('#group10-doc3-B').show(); 
            var unclassifiedNumber = parseFloat($('.unclassified-number').text()) -1;
            $('.unclassified-number').html(unclassifiedNumber);
        }
        if (documentID == 'group10-doc4') { 
            $('#group10-doc4-B').show(); 
            var unclassifiedNumber = parseFloat($('.unclassified-number').text()) -1;
            $('.unclassified-number').html(unclassifiedNumber);
        }


    });

    // MOVE BACK TO EVIDENTIAL
    $(".evidential-Document").on("click", function (e) {
        e.preventDefault();
        // var documentID = $(this).parent().parent().parent().attr('id');
        $(this).parent().parent().parent().hide();

        var unusedNumber = parseFloat($('.unused-materials').text()) - 1;
        $('.unused-materials').html(unusedNumber);

        var documentID = $(this).parent().parent().parent().attr('id');

        // 1 - Reviews
        if (documentID == 'group1-doc1-B') { 
            $('#group1-doc1').show(); 
            var reviewsNumber = parseFloat($('.reviews-number').text()) +1;
            $('.reviews-number').html(reviewsNumber);
            $('.accordion-section.section-1 .accordion-section-header').removeClass('no-documents');     
        }

        // 2 - Case overview
        if (documentID == 'group2-doc1-B') { 
            $('#group2-doc1').show(); 
            var caseOverviewNumber = parseFloat($('.case-overview-number').text()) +1;
            $('.case-overview-number').html(caseOverviewNumber);
        }
        if (documentID == 'group2-doc2-B') { 
            $('#group2-doc2').show(); 
            var caseOverviewNumber = parseFloat($('.case-overview-number').text()) +1;
            $('.case-overview-number').html(caseOverviewNumber);
        }
        if (documentID == 'group2-doc3-B') { 
            $('#group2-doc3').show(); 
            var caseOverviewNumber = parseFloat($('.case-overview-number').text()) +1;
            $('.case-overview-number').html(caseOverviewNumber);
        }
        if (documentID == 'group2-doc4-B') { 
            $('#group2-doc4').show(); 
            var caseOverviewNumber = parseFloat($('.case-overview-number').text()) +1;
            $('.case-overview-number').html(caseOverviewNumber);
        }

        // 3 - Statements
        if (documentID == 'group3-doc1-B') { 
            $('#group3-doc1').show(); 
            var statementsNumber = parseFloat($('.statements').text()) +1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group3-doc2-B') { 
            $('#group3-doc2').show(); 
            var statementsNumber = parseFloat($('.statements').text()) +1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group3-doc3-B') { 
            $('#group3-doc3').show(); 
            var statementsNumber = parseFloat($('.statements').text()) +1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group3-doc4-B') { 
            $('#group3-doc4').show(); 
            var statementsNumber = parseFloat($('.statements').text()) +1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group3-doc5') { 
            $('#group3-doc5').show(); 
            var statementsNumber = parseFloat($('.statements').text()) +1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'new-document-2-B') { 
            $('#new-document-2').show(); 
            var statementsNumber = parseFloat($('.statements').text()) +1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group3-doc6-B') { 
            $('#group3-doc6').show(); 
            var statementsNumber = parseFloat($('.statements').text()) +1;
            $('.statements').html(statementsNumber);
        }
        if (documentID == 'group10-doc3-B') { 
            $('#group10-doc3').show(); 
            var statementsNumber = parseFloat($('.statements').text()) +1;
            $('.statements').html(statementsNumber);
        }

        // 4 - Exhibits
        if (documentID == 'group4-doc1-B') { 
            $('#group4-doc1').show(); 
            var exhibitsNumber = parseFloat($('.exhibits-number').text()) +1;
            $('.exhibits-number').html(exhibitsNumber);
        }
        if (documentID == 'group4-doc2-B') { 
            $('#group4-doc2').show(); 
            var exhibitsNumber = parseFloat($('.exhibits-number').text()) +1;
            $('.exhibits-number').html(exhibitsNumber);
        }
        if (documentID == 'group10-doc4-B') { 
            $('#group10-doc4').show(); 
            var exhibitsNumber = parseFloat($('.exhibits-number').text()) +1;
            $('.exhibits-number').html(exhibitsNumber);
        }

        // 5 - Forensics

        // 6 - Unused materials       
        if (documentID == 'group6-doc4') { 
            $('.empty-table').hide();
            $('#group6-doc4-B').show(); 
            var communicationsNumber = parseFloat($('.communications-number').text()) +1;
            $('.communications-number').html(communicationsNumber);
            var unusedNumber = parseFloat($('.unused-materials').text()) -1;
            $('.unused-materials').html(unusedNumber);
        }
        if (documentID == 'group6-doc5') { 
            $('.empty-table').hide();
            $('#group6-doc5-B').show(); 
            var communicationsNumber = parseFloat($('.communications-number').text()) +1;
            $('.communications-number').html(communicationsNumber);
            var unusedNumber = parseFloat($('.unused-materials').text()) -1;
            $('.unused-materials').html(unusedNumber);
        }

        // 7 - Defendant
        if (documentID == 'new-document-1-B') { 
            $('#new-document-1').show(); 
            var defendantsNumber = parseFloat($('.defendants').text()) +1;
            $('.defendants').html(defendantsNumber);
        }

        // 8 - Court preparation

        // 9 - Communications
        if (documentID == 'group10-doc2-B') { 
            $('#group10-doc2').show(); 
            var communicationsNumber = parseFloat($('.communications-number').text()) +1;
            $('.communications-number').html(communicationsNumber);
        }
        if (documentID == 'group9-doc1-B') { 
            $('#group9-doc1').show(); 
            var communicationsNumber = parseFloat($('.communications-number').text()) +1;
            $('.communications-number').html(communicationsNumber);
        }
        if (documentID == 'group9-doc2-B') { 
            $('#group9-doc2').show(); 
            var communicationsNumber = parseFloat($('.communications-number').text()) +1;
            $('.communications-number').html(communicationsNumber);
        }

        // 10 - Communications
        if (documentID == 'group10-doc1-B') { 
            $('#group10-doc1').show(); 
            var unclassifiedNumber = parseFloat($('.unclassified-number').text()) +1;
            $('.unclassified-number').html(unclassifiedNumber);
        }
        if (documentID == 'group10-doc2-B') { 
            $('#group10-doc2').show(); 
            var unclassifiedNumber = parseFloat($('.unclassified-number').text()) +1;
            $('.unclassified-number').html(unclassifiedNumber);
        }
        if (documentID == 'group10-doc3-B') { 
            $('#group10-doc3').show(); 
            var unclassifiedNumber = parseFloat($('.unclassified-number').text()) +1;
            $('.unclassified-number').html(unclassifiedNumber);
        }
        if (documentID == 'group10-doc4-B') { 
            $('#group10-doc4').show(); 
            var unclassifiedNumber = parseFloat($('.unclassified-number').text()) +1;
            $('.unclassified-number').html(unclassifiedNumber);
        }

    });


})