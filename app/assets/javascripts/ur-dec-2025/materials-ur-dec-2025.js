///////////////////////////////////////////////////// Monica CODE - START /////////////////////////////////////////////////////
// if (document.querySelector('.materials-page')) {

     function getSelectedMaterialIds(asString = false) {
          const ids = Array.from(
          document.querySelectorAll('input[name="materials_document"]:checked')
          ).map(cb => cb.value);

          return asString ? ids.join(',') : ids;
     }

     // ALL existing materials JS goes here
     console.log('materials.js running on materials page')

     console.log("materials.js loaded!");

     // Make it global so inline onclick can see it
     window.openMaterial = function (event) {
     const btn = event?.target?.closest('button') || this;
     if (!btn) return false;

     const isOpen = btn.classList.toggle('is-previewing');
     btn.innerHTML = isOpen
     ? 'Hide <i class="fa-solid fa-chevron-up"></i>'
     : 'Preview <i class="fa-solid fa-chevron-down"></i>';

     // Optional: toggle a preview panel for this row
     const id = btn.getAttribute('data-id');
     const panel = document.querySelector(`#preview-${id}`);
     if (panel) panel.classList.toggle('hidden', !isOpen);

     return false;
     };

     // Defensive: run after other inits and put our label back
     document.addEventListener('DOMContentLoaded', () => {
     document.querySelectorAll('button.show_material_actions').forEach(btn => {
     // If some script replaced the text with "Actions", restore ours:
     if (/^\s*Actions\s*$/i.test(btn.textContent.trim())) {
          btn.innerHTML = 'Preview <i class="fa-solid fa-chevron-down"></i>';
     }
     });
     });



     // Manage materials table sorting
     document.addEventListener("DOMContentLoaded", function () {
     const table = document.getElementById("materials_table");
     if (!table) return;

     const headerButtons = table.querySelectorAll("thead th .govuk-button");

     // Header text → actual column index in your table
     const COL_INDEX = { "File or folder": 1, "Last updated": 2, "Status": 3 };

     // Attach handlers only to the 3 sortable headers
     headerButtons.forEach(btn => {
     const label = btn.textContent.trim();
     if (!COL_INDEX[label]) return; // skip checkbox/empty columns

     let dir = 1; // 1 = ASC, -1 = DESC
     btn.style.cursor = "pointer";

     btn.addEventListener("click", function (e) {
          e.preventDefault();

          const col = COL_INDEX[label];
          const tbody = table.querySelector("tbody");
          const rows = Array.from(tbody.rows);

          // Build row blocks so a main row stays with its following hidden preview row (if any)
          const blocks = [];
          for (let i = 0; i < rows.length; i++) {
          const main = rows[i];
          const block = [main];
          const next = rows[i + 1];
          if (next && next.classList.contains("hidden_row")) {
               block.push(next);
               i++;
          }
          // guard: skip stray hidden rows that don't follow a main row
          if (!main.classList.contains("hidden_row")) blocks.push(block);
          }

          const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

          const getCellText = (row, index) => {
          const cell = row.cells[index];
          if (!cell) return "";
          // For Material, prefer the visible name inside .openMe
          if (index === COL_INDEX["Material"]) {
               const t = cell.querySelector(".openMe")?.innerText || cell.innerText;
               return t.trim();
          }
          // Status cell contains a <strong> tag – innerText is fine
          return cell.innerText.trim();
          };

          const parseUKDate = (str) => {
          // e.g. "12 Nov 2025"
          // Using Date with "Mon D, YYYY" is reliable
          const [d, m, y] = str.split(" ");
          return new Date(`${m} ${d}, ${y}`).getTime() || 0;
          };

          blocks.sort((A, B) => {
          const aRow = A[0], bRow = B[0];

          if (col === COL_INDEX["Last updated"]) {
               return (parseUKDate(getCellText(aRow, col)) - parseUKDate(getCellText(bRow, col))) * dir;
          } else {
               return collator.compare(getCellText(aRow, col), getCellText(bRow, col)) * dir;
          }
          });

          // Re-attach in new order (preserving preview rows)
          blocks.forEach(block => block.forEach(r => tbody.appendChild(r)));

          // Toggle direction
          dir *= -1;

          // Remove any existing arrows from all headers
          headerButtons.forEach(h => {
          // Reset to original label only (strip arrows if any)
          h.textContent = h.textContent.replace(/[▲▼]/g, '').trim();
          });

          // Append a single arrow to the active header
          btn.textContent = btn.textContent.replace(/[▲▼]/g, '').trim() + (dir === -1 ? ' ▼' : ' ▲');    });
     });
     });


     // Discarding materials
     document.addEventListener('DOMContentLoaded', function () {
     const form = document.getElementById('discardForm');
     const hiddenInput = document.getElementById('material_selected');
     const discardButton = document.getElementById('discardButton');
     const checkboxes = document.querySelectorAll('#materials_table input[name="materials_document"]');

     // Enable/disable Discard based on selection
     function updateButtonState() {
     const selected = Array.from(checkboxes).filter(cb => cb.checked);
     if (selected.length > 0) {
          discardButton.classList.remove('govuk-button--disabled');
          discardButton.removeAttribute('disabled');
     } else {
          discardButton.classList.add('govuk-button--disabled');
          discardButton.setAttribute('disabled', 'disabled');
     }
     }
     checkboxes.forEach(cb => cb.addEventListener('change', updateButtonState));

     // Before submitting, collect selected materials
     form.addEventListener('submit', function (e) {
     const selectedValues = Array.from(checkboxes)
          .filter(cb => cb.checked)
          .map(cb => cb.value.trim());
     hiddenInput.value = selectedValues.join(', ');
     });
     });


     // Renaming materials Monica 15 Dec 2025
     document.addEventListener('DOMContentLoaded', function () {
          const renameBtn = document.getElementById('renameSubmit');
          const renameInput = document.getElementById('rename_id');
          const checkboxes = document.querySelectorAll('#materials_table input[name="materials_document"]');

          if (!renameBtn || !renameInput) return;

          function updateRenameState() {
          const selected = [...checkboxes].filter(cb => cb.checked);

          if (selected.length === 1) {
               renameBtn.disabled = false;
               renameBtn.classList.remove('govuk-button--disabled');
               renameInput.value = selected[0].value;
          } else {
               renameBtn.disabled = true;
               renameBtn.classList.add('govuk-button--disabled');
               renameInput.value = '';
          }
          }

          checkboxes.forEach(cb =>
          cb.addEventListener('change', updateRenameState)
          );
     });

     document.addEventListener('click', function (e) {
          if (e.target.closest('#renameSubmit')) {
          e.stopPropagation();
          }
     });

     ///////////////////////////////////////////////////// Monica CODE - END /////////////////////////////////////////////////////




     ///////////////////////////////////////////////////// CHRIS CODE - START /////////////////////////////////////////////////////

     // TABS
     $(document).ready(function() {
     // Only target elements within ur-dec-2025
     var $version11 = $('.version-11');

     $version11.find("#new-tabs .tab-link").on("click", function (e) {
          e.preventDefault();
          $version11.find('ul#new-tabs li').removeClass('govuk-tabs__list-item--selected');
          $(this).parent().addClass('govuk-tabs__list-item--selected');

          $version11.find('.extra-nav').hide();
          $version11.find('.extended-navigation').removeClass('govuk-tabs__list-item--selected');
          $version11.find('.show-hide').removeClass('active');
     });

          $version11.find('.tab-1-content').on("click", function (e) {
          $version11.find('.panel').hide();
          $version11.find('#tab-1-content').show();
          });

          $version11.find('.tab-2-content').on("click", function (e) {
          $version11.find('.panel').hide();
          $version11.find('#tab-2-content').show();
          });

          $version11.find('.tab-3-content').on("click", function (e) {
          $version11.find('.panel').hide();
          $version11.find('#tab-3-content').show();
          $version11.find('#tab-list').show();
          $version11.find('#docCopy').hide();
          });

          $version11.find('.tab-3-content_link').on("click", function (e) {
          $version11.find('.panel').hide();
          $version11.find('#tab-3-content').show();
          $version11.find('#tab-list').show();
          $version11.find('#docCopy').hide();
          });

          $version11.find('.tab-4-content').on("click", function (e) {
          $version11.find('.panel').hide();
          $version11.find('#tab-4-content').show();
          });
          
          $version11.find('.tab-5-content').on("click", function (e) {
          $version11.find('.panel').hide();
          $version11.find('#tab-5-content').show();
          });

          $version11.find('.tab-5-content_link').on("click", function (e) {
          $version11.find('.panel').hide();
          $version11.find('#tab-5-content').show();
          });

     });

     // FILTER
     $(document).ready(function() {
          // Only target elements within ur-dec-2025
          var $version11 = $('.ur-dec-2025');

          $version11.find('#show_filter_Comms, #show_filter_Materials, .no_results, #show_filter_Redactions').hide();

          // MATERIALS
          const $btn = $version11.find("#toggle_filter_Materials");
          const $col1 = $version11.find("#materials_column_1");
          const $col2 = $version11.find("#materials_column_2");

          // Initialise button text based on visibility
          if ($col1.is(":visible")) {
          $btn.text("<< Hide filters");
          } else {
          $btn.text("Show filters >>");
          }

          // Toggle instantly on click
          $btn.on("click", function () {
          const isVisible = $col1.is(":visible");

          if (isVisible) {
               // Hide filter
               $col1.hide();
               $col2.removeClass("govuk-grid-column-three-quarters")
                    .addClass("govuk-grid-column-full");
               $btn.text("Show filters >>");
          } else {
               // Show filter
               $col1.show();
               $col2.removeClass("govuk-grid-column-full")
                    .addClass("govuk-grid-column-three-quarters");
               $btn.text("<< Hide filters");
          }
          });

          $(function () {
               function syncStatusHeight() {
               var h = $("#toggle_filter_Materials").outerHeight(); // includes padding
               $(".materials-status").css({
                    lineHeight: h + "px",
                    margin: 0
               });
               }
               syncStatusHeight();
               $(window).on("resize", syncStatusHeight);
          });

          // COMMS
          $version11.find("#close_filter_Comms").on("click", function (e) {
               $version11.find('#show_filter_Comms').show();
               $version11.find('#comms_column_1').hide();
               $version11.find('#comms_column_2').removeClass('govuk-grid-column-three-quarters').addClass('govuk-grid-column-full');
          });

          $version11.find("#show_filter_Comms").on("click", function (e) {
               $(this).hide();
               $version11.find('#close_filter_Comms').show();
               $version11.find('#comms_column_1').show();
               $version11.find('#comms_column_2').removeClass('govuk-grid-column-full').addClass('govuk-grid-column-three-quarters');
          });

          // REDACTIONS
          $version11.find("#close_filter_Redactions").on("click", function (e) {
               $version11.find('#show_filter_Redactions').show();
               $version11.find('#redact_column_1').hide();
               $version11.find('#redact_column_2').removeClass('govuk-grid-column-three-quarters').addClass('govuk-grid-column-full');
          });

          $version11.find("#show_filter_Redactions").on("click", function (e) {
               $(this).hide();
               $version11.find('#close_filter_Redactions').show();
               $version11.find('#redact_column_1').show();
               $version11.find('#redact_column_2').removeClass('govuk-grid-column-full').addClass('govuk-grid-column-three-quarters');
          });

          // CLEAR FILTERS
          $version11.find('.materials_filters_clear_All').on("click", function (e) {
               e.preventDefault();
               $version11.find('#active_filter').hide();
               $version11.find('table#materials_table tr.material_All').show();
               $version11.find('input[name=filter_materials__New]').prop('checked', false);
               $version11.find('input[name=filter_materials__Status]').prop('checked', false);
               $version11.find('input[name=filter_materials__Category]').prop('checked', false);
          });


          $version11.find('#applyFiltersBtn').on("click", function (e) {
               // SECTION 1
               if ($version11.find('input[name=filter_materials__New]').is(':checked')) {
                    $version11.find('#active_filter').show();
                    $version11.find('.materials_filters_Title_1, .materials_filters_clear_New').show();

                    $version11.find('table#materials_table tr').hide();

                    // $('table#materials_table thead tr, table#materials_table tr.material_New').show();
                    $version11.find('table#materials_table thead tr, table#materials_table tr.material_Reviews').show();
               }

               // SECTION 2
               if ($('input[name=filter_materials__Status]').is(':checked')) {
                    $('#active_filter').show();
                    $('.materials_filters_Title_2').show();
               }

               if ($('input[id=filter_materials__Status_1]').is(':checked')) { 
                    $('.materials_filters_clear_Used').show(); 

                    $('table#materials_table tr').hide();
                    $('table#materials_table thead tr, table#materials_table tr.material_Used').show();
               }
               if ($('input[id=filter_materials__Status_2]').is(':checked')) { 
                    $('.materials_filters_clear_Unused').show(); 

                    $('table#materials_table tr').hide();
                    $('table#materials_table thead tr, table#materials_table tr.material_Unused').show();
               }
               if ($('input[id=filter_materials__Status_3]').is(':checked')) { 
                    $('.materials_filters_clear_None').show(); 

                    $('table#materials_table tr').hide();
                    $('table#materials_table thead tr, table#materials_table tr.material_Statement').show();
               }

               // SECTION 3
               if ($('input[name=filter_materials__Category]').is(':checked')) {
                    $('#active_filter').show();
                    $('.materials_filters_Title_3').show();
               }
               if ($('input[id=filter_materials__Category_1]').is(':checked')) { 
                    $('.materials_filters_clear_Review').show();

                    $('table#materials_table tr').hide();
                    $('table#materials_table thead tr, table#materials_table tr.material_Review').show();
               }
               if ($('input[id=filter_materials__Category_2]').is(':checked')) { 
                    $('.materials_filters_clear_Case_overview').show();

                    $('table#materials_table tr').hide();
                    $('table#materials_table thead tr, table#materials_table tr.material_Case_overview').show();
               }
               if ($('input[id=filter_materials__Category_3]').is(':checked')) { 
                    $('.materials_filters_clear_Statement').show();

                    $('table#materials_table tr').hide();
                    $('table#materials_table thead tr, table#materials_table tr.material_Statement').show();
               }
               if ($('input[id=filter_materials__Category_4]').is(':checked')) { 
                    $('.materials_filters_clear_Exhibit').show();

                    $('table#materials_table tr').hide();
                    $('table#materials_table thead tr, table#materials_table tr.material_Exhibit').show();
               }

          if ($('input[id=filter_materials__Category_5]').is(':checked')) {
               $('.materials_filters_clear_Forensics').show();

               $('table#materials_table tr').hide();
               $('table#materials_table thead tr, table#materials_table tr.material_Forensics').show();
          }

               if ($('input[id=filter_materials__Category_6]').is(':checked')) {
                    $('.materials_filters_clear_Always_Unused').show(); 

                    $('table#materials_table tr').hide();
                    $('table#materials_table thead tr, table#materials_table tr.material_Always_Unused').show();
                    $('.no_results').show();
               }

          if ($('input[id=filter_materials__Category_7]').is(':checked')) {
               $('.materials_filters_clear_Defendant').show();

               $('table#materials_table tr').hide();
               $('table#materials_table thead tr, table#materials_table tr.material_Defendant').show();
          }

          if ($('input[id=filter_materials__Category_8]').is(':checked')) {
               $('.materials_filters_clear_Court_preparation').show();

               $('table#materials_table tr').hide();
               $('table#materials_table thead tr, table#materials_table tr.material_Court_preparation').show();
          }

          if ($('input[id=filter_materials__Category_9]').is(':checked')) {
               $('.materials_filters_clear_Communications').show();

               $('table#materials_table tr').hide();
               $('table#materials_table thead tr, table#materials_table tr.material_Communications').show();
          }

          if ($('input[id=filter_materials__Category_10]').is(':checked')) {
               $('.materials_filters_clear_Uncategorised').show();

               $('table#materials_table tr').hide();
               $('table#materials_table thead tr, table#materials_table tr.material_Uncategorised').show();
          }
          });

          $('.selected_filter').on("click", function (e) {
               $(this).hide();
          });

          // SECTION 1
          $('.materials_filters_clear_New').on("click", function (e) {
               $('input[name=filter_materials__New]').prop('checked', false);
               $('.materials_filters_Title_1').hide();
               if ($('input[name=filter_materials__New]:checked').length == 0 && $('input[name=filter_materials__Status]:checked').length == 0 && $('input[name=filter_materials__Category]:checked').length == 0) {
                    $('#active_filter').hide();
               } else {
                    $('#active_filter').show();
               }
          });  

          // SECTION 2
          $('.materials_filters_clear_Used').on("click", function (e) {
               $('input[id=filter_materials__Status_1]').prop('checked', false);
               $('table#materials_table tr.material_All').show();

               if ($('input[name=filter_materials__New]:checked').length == 0 && $('input[name=filter_materials__Status]:checked').length == 0 && $('input[name=filter_materials__Category]:checked').length == 0) {
                    $('#active_filter').hide();
               } else if ($('input[name=filter_materials__Status]:checked').length == 0 || $('input[name=filter_materials__New]:checked').length >= 1 || $('input[name=filter_materials__Category]:checked').length >= 1) {
                    $('.materials_filters_Title_2').hide();
                    $('#active_filter').show();
               } else {
                    $('#active_filter').show();
               }
          });  

          $('.materials_filters_clear_Unused').on("click", function (e) {
               $('input[id=filter_materials__Status_2]').prop('checked', false);
               $('table#materials_table tr.material_All').show();

               if ($('input[name=filter_materials__New]:checked').length == 0 && $('input[name=filter_materials__Status]:checked').length == 0 && $('input[name=filter_materials__Category]:checked').length == 0) {
                    $('#active_filter').hide();
               } else if ($('input[name=filter_materials__Status]:checked').length == 0 || $('input[name=filter_materials__New]:checked').length >= 1 || $('input[name=filter_materials__Category]:checked').length >= 1) {
                    $('.materials_filters_Title_2').hide();
                    $('#active_filter').show();
               } else {
                    $('#active_filter').show();
               }
          });

          $('.materials_filters_clear_None').on("click", function (e) {
               $('input[id=filter_materials__Status_3]').prop('checked', false);
               $('table#materials_table tr.material_All').show();

               if ($('input[name=filter_materials__New]:checked').length == 0 && $('input[name=filter_materials__Status]:checked').length == 0 && $('input[name=filter_materials__Category]:checked').length == 0) {
                    $('#active_filter').hide();
               } else if ($('input[name=filter_materials__Status]:checked').length == 0 || $('input[name=filter_materials__New]:checked').length >= 1 || $('input[name=filter_materials__Category]:checked').length >= 1) {
                    $('.materials_filters_Title_2').hide();
                    $('#active_filter').show();
               } else {
                    $('#active_filter').show();
               }
          });  

          // SECTION 3
          $('.materials_filters_clear_Statement').on("click", function (e) {
               $('input[id=filter_materials__Category_3]').prop('checked', false);
               $('table#materials_table tr.material_All').show();

               if ($('input[name=filter_materials__New]:checked').length == 0 && $('input[name=filter_materials__Status]:checked').length == 0 && $('input[name=filter_materials__Category]:checked').length == 0) {
                    $('#active_filter').hide();
               } else if ($('input[name=filter_materials__Category]:checked').length == 0 || $('input[name=filter_materials__New]:checked').length >= 1 || $('input[name=filter_materials__Status]:checked').length >= 1) {
                    $('.materials_filters_Title_3').hide();
                    $('#active_filter').show();
               } else {
                    $('#active_filter').show();
               }
          });  

          $('.materials_filters_clear_Exhibit').on("click", function (e) {
               $('input[id=filter_materials__Category_4]').prop('checked', false);
               $('table#materials_table tr.material_All').show();

               if ($('input[name=filter_materials__New]:checked').length == 0 && $('input[name=filter_materials__Status]:checked').length == 0 && $('input[name=filter_materials__Category]:checked').length == 0) {
                    $('#active_filter').hide();
               } else if ($('input[name=filter_materials__Category]:checked').length == 0 || $('input[name=filter_materials__New]:checked').length >= 1 || $('input[name=filter_materials__Status]:checked').length >= 1) {
                    $('.materials_filters_Title_4').hide();
                    $('#active_filter').show();
               } else {
                    $('#active_filter').show();
               }
          });  

          $('.materials_filters_clear_Statement').on("click", function (e) {
               $('input[id=filter_materials__Category_3]').prop('checked', false);
               $('table#materials_table tr.material_All').show();

               if ($('input[name=filter_materials__New]:checked').length == 0 && $('input[name=filter_materials__Status]:checked').length == 0 && $('input[name=filter_materials__Category]:checked').length == 0) {
                    $('#active_filter').hide();
               } else if ($('input[name=filter_materials__Category]:checked').length == 0 || $('input[name=filter_materials__New]:checked').length >= 1 || $('input[name=filter_materials__Status]:checked').length >= 1) {
                    $('.materials_filters_Title_3').hide();
                    $('#active_filter').show();
               } else {
                    $('#active_filter').show();
               }
          });  

          $('.materials_filters_clear_Other').on("click", function (e) {
               $('input[id=filter_materials__Category_4]').prop('checked', false);
               $('table#materials_table tr.material_All').show();

               if ($('input[name=filter_materials__New]:checked').length == 0 && $('input[name=filter_materials__Status]:checked').length == 0 && $('input[name=filter_materials__Category]:checked').length == 0) {
                    $('#active_filter').hide();
               } else if ($('input[name=filter_materials__Category]:checked').length == 0 || $('input[name=filter_materials__New]:checked').length >= 1 || $('input[name=filter_materials__Status]:checked').length >= 1) {
                    $('.materials_filters_Title_3').hide();
                    $('#active_filter').show();
               } else {
                    $('#active_filter').show();
               }
          });  

          $('.materials_filters_clear_Always_Unused').on("click", function (e) {
               $('input[id=filter_materials__Category_5]').prop('checked', false);
               $('table#materials_table tr.material_All').show();

               if ($('input[name=filter_materials__New]:checked').length == 0 && $('input[name=filter_materials__Status]:checked').length == 0 && $('input[name=filter_materials__Category]:checked').length == 0) {
                    $('#active_filter').hide();
               } else if ($('input[name=filter_materials__Category]:checked').length == 0 || $('input[name=filter_materials__New]:checked').length >= 1 || $('input[name=filter_materials__Status]:checked').length >= 1) {
                    $('.materials_filters_Title_3').hide();
                    $('#active_filter').show();
               } else {
                    $('#active_filter').show();
               }
          });  


     });

     // ACTIONS - MATERIALS & COMMS
     $(document).ready(function() {
          // Only target elements within ur-dec-2025
          var $version11 = $('.version-11');

          $version11.find("#show_Materials_Actions").click(function(){
               $(this).toggleClass('active');
               $version11.find('#materials_Actions').toggle();
          });
          
          $version11.find("#show_Comms_Actions").click(function(){
               $(this).toggleClass('active');
               $version11.find('.hidden_buttons').toggle();
          });

     });

     $(document).mouseup(function(e) {
          var $version11 = $('.ur-dec-2025');
          var container = $version11.find("#materials_Actions");

          if (!container.is(e.target) && container.has(e.target).length === 0) {
               container.hide();
               $version11.find('#show_Materials_Actions').removeClass('active');
          }

          var container_V2 = $version11.find("#comms_Actions");

          if (!container_V2.is(e.target) && container_V2.has(e.target).length === 0) {
               container_V2.hide();
               $version11.find('#show_Comms_Actions').removeClass('active');
          }

     });

     $(window).scroll(function() { 
     var $version11 = $('.ur-dec-2025');
     var scroll = $(window).scrollTop();

     //     if (scroll >= 375) {
     //         $version11.find(".actions_holder").addClass("sticky");
     //     } else {
     //         $version11.find(".actions_holder").removeClass("sticky");
     //     }

     });


     function scrollToTab3Position() {
          // Get the tabs position
          var tabsPosition = $('#tab-list').offset().top;
          // Scroll to a position 200px above the tabs
          $('html, body').animate({
               scrollTop: tabsPosition - 200
          }, 300);
     }

     function closeTab() {
          var redactedDocuments = parseInt($('.redacted_documents').text());
          $('.redacted_documents').text(redactedDocuments - 1);

          var numberOfLis = parseInt($('ul#tab-list').children().length);
          if (numberOfLis <= 4) { 
               $('#tab-list').hide(); 
          }
          
     }


     // =================================== Search button =================================== //
     $(document).ready(function () {

     $(".search-button").on("click", function (e) {
          e.preventDefault();
          $('#searchFormTest2 .searchForm-inner').find('input').toggleClass('show');
          $('#searchFormTest2 .searchForm-inner').find('.bba.v2').toggleClass('show');
          $(this).toggleClass('open');
          $('#searchFormTest2 .searchForm-inner').toggle();
     });

     $(".search-item a").on("click", function (e) {
          $('.panel').hide();
          $('#tab_content_2').hide();
          $('#tab_content_3').show();
          $('#docCopy').hide();
          $('ul#tab-list').show();
          
          $('ul#new-tabs li').removeClass('govuk-tabs__list-item--selected');
          $('ul#new-tabs li.tab-3-content_link').addClass('govuk-tabs__list-item--selected');

          var redactedDocuments = parseInt($('.redacted_documents').text());
          $('.redacted_documents').text(redactedDocuments + 1);
     });

     $("input[id=searchURNModal]").on("keyup", function (e) {
          if ($(this).val() == "error") {
               $('button.search').attr('onClick','openModal(); searchTerm(); searchError();');
          } else {
               $('button.search').attr('onClick','openModal(); searchTerm();');
          }
     });

     $("input[id=searchURNModal2]").on("keyup", function (e) {
          if ($(this).val() == "error") {
               $('button.search').attr('onClick','openModal(); searchTerm(); searchError();');
          } else {
               $('button.search').attr('onClick','openModal(); searchTerm();');
          }
     });

     $('#searchErrorPanel').hide();

     $('#searchLoadingPanel').hide();


     })

     function searchTerm() {
     var resultValue = $('#searchURNModal').val();
     $('.searchModalResults').text(resultValue); 
     $('#searchURNModal-result').val(resultValue).text(resultValue); 
     $('#searchErrorPanel').hide();
     $('#searchModal .das-cookie-banner').removeClass('small');
     }

     function searchTerm2() {
     var resultValue = $('#searchURNModal2').val();
     $('.searchModalResults').text(resultValue); 
     $('#searchURNModal-result').val(resultValue).text(resultValue); 
     $('#searchErrorPanel').hide();
     $('#searchModal .das-cookie-banner').removeClass('small');
     }

     function searchError() {
     $('#searchResultsPanel, #searchLoadingPanel').hide();
     $('#searchErrorPanel').show();
     $('#searchModal .das-cookie-banner').addClass('small');
     }



     // =================================== Monica =================================== //
     // ----------------------------------------
     // COPY + MOVE MODE (Layer 2)
     // ----------------------------------------

     (function() {
          console.log("Copy code is running");
          document.body.dataset.materialsMode = "copy";

          const copyBtn = document.getElementById('copyButton');
          const moveBtn = document.getElementById('moveButton');
          const toggleBtn = document.getElementById('show_Materials_Actions');

          function activateMode(mode) {
               if (toggleBtn) toggleBtn.click();

               // document.querySelectorAll('.show_material_actions').forEach(btn => btn.remove());
               btn.classList.add('govuk-visually-hidden');

               const selected = getSelectedMaterialIds();

               if (selected.length === 0) {
                    alert("Select at least one item first.");
                    return;
               }

               window.materialsSelectedForAction = selected;

               document.querySelectorAll('.material-row[data-folder="true"]').forEach(row => {
                    const tds = row.querySelectorAll('td');
                    const lastCell = tds[tds.length - 1];

                    if (lastCell.querySelector('.here-action')) return;

                    const link = document.createElement('a');
                    link.href = '#';
                    link.className = 'govuk-link here-action';
                    // link.textContent = (mode === 'copy') ? 'Copy here' : 'Move here';

                    link.addEventListener('click', function(ev) {
                         ev.preventDefault();
                         const dest = row.dataset.id;
                         submitAction(mode, dest);
                    });

                    lastCell.appendChild(link);
               });
          }

          function submitAction(mode, destinationFolder) {
               const selected = window.materialsSelectedForAction || [];

               const form = document.createElement('form');
               form.method = 'post';

               form.action = (mode === 'copy')
                    ? '/ur-dec-2025/B-off-system-MVP/copy-material'
                    : '/ur-dec-2025/B-off-system-MVP/move-material';

               form.innerHTML = `
                    <input type="hidden" name="selected_ids" value="${selected.join(',')}">
                    <input type="hidden" name="destinationFolder" value="${destinationFolder}">
               `;

               document.body.appendChild(form);
               form.submit();
          }

          if (copyBtn) copyBtn.addEventListener('click', () => activateMode('copy'));
          if (moveBtn) moveBtn.addEventListener('click', () => activateMode('move'));

     })();


     // function getSelectedMaterialIds() {
     //      return Array.from(document.querySelectorAll('input[name="materials_document"]:checked'))
     //      .map(cb => cb.value)
     //      .join(',');
     // }

     const copyForm = document.getElementById('copyForm');
     if (copyForm) {
          copyForm.addEventListener('submit', () => {
          document.getElementById('copy_selected_ids').value = getSelectedMaterialIds();
          });
     }

     const moveForm = document.getElementById('moveForm');
     if (moveForm) {
          moveForm.addEventListener('submit', () => {
          document.getElementById('move_selected_ids').value = getSelectedMaterialIds();
          });
     }
// }

