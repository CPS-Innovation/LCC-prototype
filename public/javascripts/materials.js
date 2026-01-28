///////////////////////////////////////////////////// Monica CODE - START /////////////////////////////////////////////////////
console.log("materials.js loaded!");

// Make it global so inline onclick can see it
// window.openMaterial = function (event) {
//      const btn = event?.target?.closest('button') || this;
//      if (!btn) return false;

//      const isOpen = btn.classList.toggle('is-previewing');
//      btn.innerHTML = isOpen
//           ? 'Hide <i class="fa-solid fa-chevron-up"></i>'
//           : 'Preview <i class="fa-solid fa-chevron-down"></i>';

//      // Optional: toggle a preview panel for this row
//      const id = btn.getAttribute('data-id');
//      const panel = document.querySelector(`#preview-${id}`);
//      if (panel) panel.classList.toggle('hidden', !isOpen);

//      return false;
// };


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
               btn.textContent = btn.textContent.replace(/[▲▼]/g, '').trim() + (dir === -1 ? ' ▼' : ' ▲');
          });
     });
});


// Discarding materials
// Discarding materials (works for normal + search)
document.addEventListener('DOMContentLoaded', function () {
     const form = document.getElementById('discardForm');
     const hiddenInput = document.getElementById('material_selected');
     const discardButton = document.getElementById('discardButton');

     if (!form || !hiddenInput || !discardButton) return;

     function getCheckedIds() {
          return Array.from(document.querySelectorAll('input.js-material-checkbox:checked'))
               .filter(cb => cb.value && cb.value !== 'ALL')
               .map(cb => cb.value.toString());
     }

     function updateButtonState() {
          const selected = getCheckedIds();
          const enabled = selected.length > 0;
          discardButton.disabled = !enabled;
          discardButton.classList.toggle('govuk-button--disabled', !enabled);
     }

     document.addEventListener('change', function (e) {
          if (e.target.matches('input.js-material-checkbox, input.js-select-all')) {
               updateButtonState();
          }
     });

     form.addEventListener('submit', function () {
          hiddenInput.value = getCheckedIds().join(',');
     });

     updateButtonState();
});


// ---------------------------
// Rename using selected item
// ---------------------------
// document.addEventListener('DOMContentLoaded', function () {

//     const renameBtn = document.getElementById('renameButton');
//     if (!renameBtn) return;

//     renameBtn.addEventListener('click', function (e) {
//         e.preventDefault();

//         const selected = document.querySelector('input[name="materials_document"]:checked');

//         if (!selected) {
//             console.warn("Rename attempted but no material selected");
//             alert("Select one file or folder to rename.");
//             return;
//         }

//         // ID now comes from the checkbox VALUE
//         const materialId = selected.value;

//         window.location.href = `/version-11/B-off-system-MVP/rename?id=${materialId}`;
//     });

// });


// Preview document from clicking on its name
// $(document).ready(function () {
//   $('.toggle-preview').on('click', function (e) {
//     e.preventDefault();
//     const id = $(this).data('id');
//     const $preview = $('#preview_' + id);

//     // close all others first (optional)
//     $('.material-preview').not($preview).attr('hidden', true);

//     // toggle current one
//     if ($preview.is('[hidden]')) {
//       $preview.removeAttr('hidden');
//     } else {
//       $preview.attr('hidden', true);
//     }
//   });
// });



///////////////////////////////////////////////////// Monica CODE - END /////////////////////////////////////////////////////








///////////////////////////////////////////////////// CHRIS CODE - START /////////////////////////////////////////////////////

// TABS
$(document).ready(function () {
     // Only target elements within version-11
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
$(document).ready(function () {
     // Only target elements within version-11
     var $version11 = $('.version-11');

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
$(document).ready(function () {
     // Only target elements within version-11
     var $version11 = $('.version-11');

     // $version11.find("#show_Materials_Actions").click(function () {
     //      $(this).toggleClass('active');
     //      $version11.find('.hidden_buttons').toggle();
     // });

     // $version11.find("#show_Comms_Actions").click(function () {
     //      $(this).toggleClass('active');
     //      $version11.find('.hidden_buttons').toggle();
     // });

     $version11.find("#show_Materials_Actions").on("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          const $btn = $(this);
          const $menu = $btn.closest(".moj-button-menu"); // anchor container
          const $panel = $menu.find("#materials_Actions");

          const left = $btn.offset().left - $menu.offset().left;
          $panel.css({ left });

          $btn.toggleClass("active");
          $panel.toggle();
     });

     $version11.find("#show_Comms_Actions").on("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          const $btn = $(this);
          const $panel = $version11.find("#comms_Actions");

          $btn.toggleClass("active");
          $panel.toggle(); // ONLY comms
     });

});

// $(document).mouseup(function (e) {
//      var $version11 = $('.version-11');
//      var container = $version11.find("#materials_Actions");

//      if (!container.is(e.target) && container.has(e.target).length === 0) {
//           container.hide();
//           $version11.find('#show_Materials_Actions').removeClass('active');
//      }

//      var container_V2 = $version11.find("#comms_Actions");

//      if (!container_V2.is(e.target) && container_V2.has(e.target).length === 0) {
//           container_V2.hide();
//           $version11.find('#show_Comms_Actions').removeClass('active');
//      }

// });
// $(document).on("mouseup", function (e) {
//      var $version11 = $('.version-11');

//      // MATERIALS
//      var $btnMat = $version11.find("#show_Materials_Actions");
//      var $panelMat = $version11.find("#materials_Actions");

//      if (!$panelMat.is(e.target) && $panelMat.has(e.target).length === 0 && !$btnMat.is(e.target) && $btnMat.has(e.target).length === 0) {
//           $panelMat.hide();
//           $btnMat.removeClass("active");
//      }

//      // COMMS
//      var $btnComms = $version11.find("#show_Comms_Actions");
//      var $panelComms = $version11.find("#comms_Actions");

//      if (!$panelComms.is(e.target) && $panelComms.has(e.target).length === 0 && !$btnComms.is(e.target) && $btnComms.has(e.target).length === 0 ) {
//           $panelComms.hide();
//           $btnComms.removeClass("active");
//      }
// });

$(document).on("click", function (e) {
     var $version11 = $('.version-11');

     var $btnMat = $version11.find("#show_Materials_Actions");
     var $panelMat = $version11.find("#materials_Actions");

     if (!$panelMat.is(e.target) && $panelMat.has(e.target).length === 0 &&
          !$btnMat.is(e.target) && $btnMat.has(e.target).length === 0) {
          $panelMat.hide();
          $btnMat.removeClass("active");
     }

     var $btnComms = $version11.find("#show_Comms_Actions");
     var $panelComms = $version11.find("#comms_Actions");

     if (!$panelComms.is(e.target) && $panelComms.has(e.target).length === 0 &&
          !$btnComms.is(e.target) && $btnComms.has(e.target).length === 0) {
          $panelComms.hide();
          $btnComms.removeClass("active");
     }
});

$(window).scroll(function () {
     var $version11 = $('.version-11');
     var scroll = $(window).scrollTop();

     //     if (scroll >= 375) {
     //         $version11.find(".actions_holder").addClass("sticky");
     //     } else {
     //         $version11.find(".actions_holder").removeClass("sticky");
     //     }

});

// SELECTING MATERIALS & COMMS
$(document).ready(function () {
     // Only target elements within version-11
     var $version11 = $('.version-11');

     $version11.find('#tab-list, #auto_reclassify').hide();

     // RECLASSIFY
     $version11.find(".auto_reclassify_Documents").click(function () {
          $version11.find('#discard_successful, #rename_COMPLETE, #mark_as').hide();
          $version11.find('#auto_reclassify').show();
     });

     // MATERIALS
     $version11.find("#materials_documents_ALL").click(function () {
          if ($(this).is(':checked')) {
               $version11.find('input[name=materials_document]').prop('checked', true);
          } else {
               $version11.find('input[name=materials_document]').prop('checked', false);
          }
     });

     $('input[name=materials_document]').click(function () {
          if ($("input[name=materials_document]:checked").length >= 1) {
               $('.reclassify_Document_Multiple_Docs, .redact_Document_Multiple_Docs').removeAttr('disabled').removeClass('govuk-button--disabled');
          } else if ($("input[name=materials_document]:checked").length == 0) {
               $('.reclassify_Document_Multiple_Docs, .redact_Document_Multiple_Docs').attr('disabled', 'disabled').addClass('govuk-button--disabled').removeAttr('onClick');
          }
     });

     // COMMS
     $("#comms_documents_ALL").click(function () {
          if ($(this).is(':checked')) {
               $('input[name=comms_document]').prop('checked', true);
          } else {
               $('input[name=comms_document]').prop('checked', false);
          }
     });

     $('input[name=comms_document]').click(function () {
          if ($("input[name=comms_document]:checked").length >= 1) {
               $('.reclassify_Comms_Multiple_Docs').removeAttr('disabled').removeClass('govuk-button--disabled');
               $('.redact_Comms_Multiple_Docs').removeAttr('disabled').removeClass('govuk-button--disabled');
          } else if ($("input[name=comms_document]:checked").length == 0) {
               $('.reclassify_Comms_Multiple_Docs').attr('disabled', 'disabled').addClass('govuk-button--disabled');
               $('.redact_Comms_Multiple_Docs').attr('disabled', 'disabled').addClass('govuk-button--disabled');
          }
     });



     $('.redact_Document_Multiple_Docs').click(function () {
          $('ul#tab-list').show();

          $('ul#new-tabs li').removeClass('list-item--selected govuk-tabs__list-item--selected');
          $('ul#new-tabs li.tab-3-content_link').addClass('list-item--selected govuk-tabs__list-item--selected');

          $('.panel').hide();
          $('#tab_content_2').hide();
          $('#docCopy').hide();
          $('#tab_content_3').show();

          var redactedDocuments = parseInt($("input[name=materials_document]:checked").length);
          var existingNUmber = parseInt($('.redacted_documents').text());
          $('.redacted_documents').text(redactedDocuments + existingNUmber);

          // Scroll to a position above the tabs
          scrollToTab3Position();
     });

     $('.redact_Document').click(function () {
          $('.panel').hide();
          $('#tab_content_2').hide();
          $('#tab_content_3').show();
          $('#tab-list').show();

          $('#new-tabs li').removeClass('list-item--selected govuk-tabs__list-item--selected');
          $('#new-tabs li.tab-3-content_link').addClass('list-item--selected govuk-tabs__list-item--selected');

          $('#docCopy').hide();

          var redactedDocuments = parseInt($('.redacted_documents').text());
          $('.redacted_documents').text(redactedDocuments + 1);

          // Scroll to a position above the tabs
          scrollToTab3Position();
     });

     $('#filter_Redactions table .openMe a').click(function () {
          $('ul#tab-list').show();
          var redactedDocuments = parseInt($('.redacted_documents').text());
          $('.redacted_documents').text(redactedDocuments + 1);

          $('.panel').hide();
          $('#tab_content_3').show();

          $('#filter_Redactions table tbody tr').removeClass('active_document');
          // $('#filter_Redactions table tbody tr td strong.govuk-tag').remove();
          $(this).closest('tr').addClass('active_document').removeClass('unread_document');
          $(this).closest('td').prepend(`<strong class="govuk-tag active_document">Active document</strong>`);

          // Scroll to a position above the tabs
          scrollToTab3Position();
     });

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

// MARK AS READ
$(document).ready(function () {
     // Only target elements within version-11
     var $version11 = $('.version-11');

     $version11.find('#mark_as').hide();

     $version11.find('.mark_as_Read').click(function () {
          $(this).toggleClass('read');

          $version11.find('#discard_successful, #auto_reclassify').hide();

          $version11.find('#mark_as').show().toggleClass('read');

          var document_title = $(this).closest('.openMe').find('.redact_Document').text();
          $version11.find('.document_title').text(document_title);

          var row_ID = parseInt($(this).closest('tr').data('row_id'));
          if (row_ID == 1) { $('table#materials_table .document_row_1').toggleClass('read'); }
          if (row_ID == 2) { $('table#materials_table .document_row_2').toggleClass('read'); }
          if (row_ID == 3) { $('table#materials_table .document_row_3').toggleClass('read'); }
          if (row_ID == 4) { $('table#materials_table .document_row_4').toggleClass('read'); }
          if (row_ID == 5) { $('table#materials_table .document_row_5').toggleClass('read'); }
          if (row_ID == 6) { $('table#materials_table .document_row_6').toggleClass('read'); }
          if (row_ID == 7) { $('table#materials_table .document_row_7').toggleClass('read'); }
          if (row_ID == 8) { $('table#materials_table .document_row_8').toggleClass('read'); }
          if (row_ID == 9) { $('table#materials_table .document_row_9').toggleClass('read'); }
          if (row_ID == 10) { $('table#materials_table .document_row_10').toggleClass('read'); }
          if (row_ID == 11) { $('table#materials_table .document_row_11').toggleClass('read'); }
          if (row_ID == 12) { $('table#materials_table .document_row_12').toggleClass('read'); }
          if (row_ID == 13) { $('table#materials_table .document_row_13').toggleClass('read'); }
          if (row_ID == 14) { $('table#materials_table .document_row_14').toggleClass('read'); }
          if (row_ID == 15) { $('table#materials_table .document_row_15').toggleClass('read'); }
          if (row_ID == 16) { $('table#materials_table .document_row_16').toggleClass('read'); }
          if (row_ID == 17) { $('table#materials_table .document_row_17').toggleClass('read'); }
          if (row_ID == 18) { $('table#materials_table .document_row_18').toggleClass('read'); }
          if (row_ID == 19) { $('table#materials_table .document_row_19').toggleClass('read'); }
          if (row_ID == 20) { $('table#materials_table .document_row_20').toggleClass('read'); }

          if ($(this).hasClass('read')) {
               $(this).html('Mark as unread');
          } else {
               $(this).html('Mark as read');
          }

          if ($('#mark_as').hasClass('read')) {
               $('#mark_as .govuk-notification-banner__title').text('Mark as read successful');
               $('#mark_as .govuk-notification-banner__heading .status').text('read');
          } else {
               $('#mark_as .govuk-notification-banner__title').text('Mark as unread successful');
               $('#mark_as .govuk-notification-banner__heading .status').text('unread');
          }

     });

});

function mark_as_Read() {
     $('#filter_Redactions table tr.active_document strong').hide();
     $('#mark_as').show();
     $('html,body').scrollTop(0);
     var document_title = $('#filter_Redactions table tr.active_document a.show-case').text();
     $('.document_title').text(document_title);
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
               $('button.search').attr('onClick', 'openModal(); searchTerm(); searchError();');
          } else {
               $('button.search').attr('onClick', 'openModal(); searchTerm();');
          }
     });

     $("input[id=searchURNModal2]").on("keyup", function (e) {
          if ($(this).val() == "error") {
               $('button.search').attr('onClick', 'openModal(); searchTerm(); searchError();');
          } else {
               $('button.search').attr('onClick', 'openModal(); searchTerm();');
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


// =================================== NOTES =================================== //
$(document).ready(function () {

     $(".redact_Document").on("click", function (e) {
          // $('div').attr('data-tab-id', 'MCLOVE%20MG3-content').find('.date_details').text('test');
          // $('div').attr('data-tab-id', 'MCLOVE%20MG3-content').find('.time_details').text('test');

          // $('div').attr('data-tab-id', 'Case%20overview%20and%20officer%20comments-content').find('.date_details').text('test  r ewfwef');
          // $('div').attr('data-tab-id', 'Case%20overview%20and%20officer%20comments-content').find('.time_details').text('test  r ewfwef');
     });

})

// function documentDetails() {
//      if ($('.document-panel').data('tab-id','MCLOVE%20MG3-content')) {
//           alert('working');
//      }

// }

function openNewNotesModal() {
     $("#openNewNotesModal").removeClass("rj-dont-display");
}
function closeNewNotesModal() {
     $("#openNewNotesModal").addClass("rj-dont-display");
}

function openNotesModal() {
     $("#openNotesModal").removeClass("rj-dont-display");
     $('#notes-Comments').val('');
}

function closeNotesModal() {
     $("#openNotesModal").addClass("rj-dont-display");
}








// ChatGPT fixes [Monica]
// ====== ACTIONS DROPDOWN: MODAL HELPERS (add at the end of materials.js) ======
(function () {
     // Utility: find any of a list of selectors, return the first jQuery element that exists
     function $firstExisting(selectors) {
          for (const sel of selectors) {
               const $el = $(sel);
               if ($el.length) return $el;
          }
          return $(); // empty
     }

     // Utility: show/hide modal containers that are initially hidden with CSS classes
     function showModal($container) {
          if (!$container.length) return false;
          // Remove any "display: none" / hiding classes you use
          $container.removeClass('rj-dont-display').show();
          // Optional a11y attributes
          $container.attr('aria-hidden', 'false');
          return false;
     }

     function hideModal($container) {
          if (!$container.length) return false;
          $container.addClass('rj-dont-display').hide();
          $container.attr('aria-hidden', 'true');
          return false;
     }

     // Count selected materials (checkboxes in the table)
     function selectedMaterials() {
          return $('input[name="materials_document"]:checked');
     }

     // ===== Rename modal =====
     window.openRenameModal = function () {
          const $sel = selectedMaterials();
          if ($sel.length !== 1) {
               // Guard: rename is single-selection only
               // (You can swap this for a GDS error summary if you prefer)
               alert('Please select exactly one document to rename.');
               return false;
          }

          // Optionally put the current title into the modal
          const docTitle = $sel.first().val() || 'Document title';
          $('.document-title-10').text(docTitle);
          $('#rename-Document').val(docTitle);

          // Reset state banners
          $('.saving-panel-rename, .success-banner-rename, .secondary-action').hide();
          $('.initial-action').show();

          // Show the modal container from includes/modals/rename.html
          const $modal = $('#openRenameModal');
          return showModal($modal);
     };

     window.closeRenameModal = function () {
          const $modal = $('#openRenameModal');
          return hideModal($modal);
     };

     window.renameDocument = function () {
          // Fake a quick save UX: hide initial buttons, show "saving", then "success"
          $('.initial-action').hide();
          $('.saving-panel-rename').show();

          setTimeout(function () {
               $('.saving-panel-rename').hide();
               $('.success-banner-rename, .secondary-action').show();

               // Reflect new name back into the table UI (optional)
               const newName = ($('#rename-Document').val() || '').trim();
               if (newName) {
                    const $sel = selectedMaterials();
                    if ($sel.length === 1) {
                         // Update the visible button text in the Title column that matches this checkbox row
                         const idAttr = $sel.attr('id'); // e.g. materials_document_6
                         if (idAttr) {
                              const $row = $('#' + idAttr).closest('tr');
                              $row.find('.title_column .openMe .govuk-button.show_material').text(newName);
                         }
                    }
               }
          }, 400); // tweak the delay if you want
          return false;
     };

     // ===== Update Statement / Exhibit modals =====
     // Your HTML uses onclick="return openUpdateStatement()" and "...Exhibit()"
     // We’ll look for a few likely IDs and open whichever exists.
     function openGenericModal(possibleSelectors) {
          const $modal = $firstExisting(possibleSelectors);
          if (!$modal.length) {
               console.warn('Update modal not found. Tried:', possibleSelectors.join(', '));
               // Fall back to a gentle alert so users aren’t stuck
               alert('This modal is not wired yet in this prototype.');
               return false;
          }
          return showModal($modal);
     }

     window.openUpdateStatement = function () {
          return openGenericModal([
               '#updateStatementModal',
               '#openUpdateStatementModal',
               '#update-statement-modal'
          ]);
     };

     window.openUpdateExhibit = function () {
          return openGenericModal([
               '#updateExhibitModal',
               '#openUpdateExhibitModal',
               '#update-exhibit-modal'
          ]);
     };
})();



// *********************************************************************** //
// Rename from Actions on selection menu
// *********************************************************************** //

(function () {
     function getSelected() {
          return Array.from(document.querySelectorAll('input.js-material-checkbox:checked'))
               .filter(cb => cb.value && cb.value !== 'ALL')
               .map(cb => ({
                    id: cb.value,
                    name: cb.dataset.name || '',
                    isFolder: cb.dataset.folder === 'true'
               }));
     }

     function submitBulkAction(action) {
          const selected = getSelected();

          if (selected.length === 0) return; // nothing selected
          if (action === 'rename' && selected.length !== 1) {
               // Rename should be single-select. You can fancy this up with an error message later.
               return;
          }

          const one = selected[0];
          document.getElementById('bulkActionType').value = action;
          document.getElementById('bulkSelectedId').value = one.id;
          document.getElementById('bulkSelectedName').value = one.name;
          document.getElementById('bulkSelectedIsFolder').value = one.isFolder ? 'true' : 'false';

          document.getElementById('bulkActionForm').submit();
     }

     // If your “Actions on selection” menu uses buttons/links, hook them here.
     // Update the selector to match your Rename menu item.
     document.addEventListener('click', function (e) {
          const renameBtn = e.target.closest('[data-action="rename"]');
          if (!renameBtn) return;

          e.preventDefault();
          submitBulkAction('rename');
     });

     // Optional: enable/disable the actions menu based on selection
     function updateActionsState() {
          const selected = getSelected();
          const menuButton = document.querySelector('.moj-button-menu__toggle-button, .actions-on-selection-toggle');
          if (menuButton) menuButton.disabled = selected.length === 0;
     }

     document.addEventListener('change', function (e) {
          if (e.target.matches('input.js-material-checkbox, input.js-select-all')) {
               updateActionsState();
          }
     });

     updateActionsState();
})();

// *********************************************************************** //


// … existing materials.js code …

// ----------------------------------------
// COPY + MOVE MODE (Layer 2)
// ----------------------------------------

(function () {
     console.log("Copy code is running");
     document.body.dataset.materialsMode = "copy";

     const copyBtn = document.getElementById('copyButton');
     const moveBtn = document.getElementById('moveButton');
     const toggleBtn = document.getElementById('show_Materials_Actions');

     // function updateButtonState() {
     //      const selected = Array.from(checkboxes).filter(cb => cb.checked);
     //      if (selected.length > 0) {
     //           copyButton.classList.remove('govuk-button--disabled');
     //           copyButton.removeAttribute('disabled');
     //           moveButton.classList.remove('govuk-button--disabled');
     //           moveButton.removeAttribute('disabled');
     //      } else {
     //           copyButton.classList.add('govuk-button--disabled');
     //           copyButton.setAttribute('disabled', 'disabled');
     //           moveButton.classList.add('govuk-button--disabled');
     //           moveButton.setAttribute('disabled', 'disabled');
     //      }
     // }

     // checkboxes.forEach(cb => cb.addEventListener('change', updateButtonState));


     function getSelectedMaterialIds() {
          return Array.from(
               document.querySelectorAll('input[name="materials_document"]:checked')
          ).map(x => x.value);
     }

     function activateMode(mode) {
          if (toggleBtn) toggleBtn.click();

          document.querySelectorAll('.show_material_actions').forEach(btn => btn.remove());

          const selected = getSelectedMaterialIds();

          if (selected.length === 0) {
               // alert("Select at least one item first.");
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

               link.addEventListener('click', function (ev) {
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
               ? '/version-11/B-off-system-MVP/copy-material'
               : '/version-11/B-off-system-MVP/move-material';

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


function getSelectedMaterialIds() {
     return Array.from(document.querySelectorAll('input[name="materials_document"]:checked'))
          .map(cb => cb.value)
          .join(',');
}

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



// Version-12
// ===============================
// Folder tree expand / collapse
// ===============================
(function initFolderTreeToggles() {
     function setToggleState(btn, children, open) {
          if (open) {
               children.removeAttribute('hidden');
               btn.textContent = '−';
               btn.setAttribute('aria-expanded', 'true');
          } else {
               children.setAttribute('hidden', '');
               btn.textContent = '+';
               btn.setAttribute('aria-expanded', 'false');
          }
     }

     // Initialise symbols on load (so +/− matches hidden state)
     function syncAllFolderToggles() {
          document.querySelectorAll('.folder-node').forEach(node => {
               const btn = node.querySelector(':scope > .folder-row .folder-toggle');
               const children = node.querySelector(':scope > .folder-children');
               if (!btn || !children) return;

               // Stop buttons behaving like submit buttons in forms
               if (!btn.getAttribute('type')) btn.setAttribute('type', 'button');

               const open = !children.hasAttribute('hidden');
               setToggleState(btn, children, open);
          });
     }

     // Click handler (delegated)
     document.addEventListener('click', function (e) {
          const btn = e.target.closest('.folder-toggle');
          if (!btn) return;

          // Prevent form submits, link clicks, or other nonsense
          e.preventDefault();
          e.stopPropagation();

          const node = btn.closest('.folder-node');
          if (!node) return;

          const children = node.querySelector(':scope > .folder-children');
          if (!children) return; // nothing to expand/collapse

          const currentlyOpen = !children.hasAttribute('hidden');
          setToggleState(btn, children, !currentlyOpen);
     });

     // Run once on DOM ready
     if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', syncAllFolderToggles);
     } else {
          syncAllFolderToggles();
     }

     // Optional: if your prototype re-renders the tree dynamically,
     // call window.syncFolderTreeToggles() after render.
     window.syncFolderTreeToggles = syncAllFolderToggles;
})();


document.addEventListener('click', function (e) {
     const btn = e.target.closest('.folder-toggle');
     if (!btn) return;

     e.preventDefault();

     const node = btn.closest('.folder-node');
     if (!node) return;

     const children = node.querySelector('.folder-children');
     if (!children) return;

     const opening = children.hasAttribute('hidden');

     if (opening) {
          children.removeAttribute('hidden');
          btn.textContent = '−';
          btn.setAttribute('aria-expanded', 'true');
     } else {
          children.setAttribute('hidden', '');
          btn.textContent = '+';
          btn.setAttribute('aria-expanded', 'false');
     }
});

document.addEventListener('click', function (e) {
     const btn = e.target.closest('.folder-toggle');
     if (!btn) return;

     e.preventDefault();

     const node = btn.closest('.folder-node');
     if (!node) return;

     const children = node.querySelector(':scope > .folder-children');
     if (!children) return;

     const opening = children.hasAttribute('hidden');

     if (opening) {
          children.removeAttribute('hidden');
          btn.textContent = '−';
          btn.setAttribute('aria-expanded', 'true');
     } else {
          children.setAttribute('hidden', '');
          btn.textContent = '+';
          btn.setAttribute('aria-expanded', 'false');
     }
});



// (function initCopyButtonLabelFromFolderTree() {
//   const copyBtn = document.getElementById('copyFolderButton');
//   if (!copyBtn) return;

//   const defaultCopyText = copyBtn.textContent.trim() || "Copy";

//   function setCopyText(names) {
//     if (!names || names.length === 0) {
//       copyBtn.textContent = defaultCopyText;
//       copyBtn.disabled = true; // optional: disable until selection
//       return;
//     }

//     copyBtn.disabled = false;

//     // Single selection
//     if (names.length === 1) {
//       copyBtn.textContent = `Copy to ${names[0]}`;
//       return;
//     }

//     // Multi-selection (if you allow it)
//     copyBtn.textContent = `Copy to ${names.length} folders`;
//   }

//   // start disabled until user selects something
//   setCopyText([]);

//   // Click a folder-box to select it
//   document.addEventListener('click', (e) => {
//     const box = e.target.closest('.folder-box');
//     if (!box) return;

//     const node = box.closest('.folder-node');
//     if (!node) return;

//     // Don't allow Thundercat to be selected
//     if (node.classList.contains('folder-node--root')) return;

//     const folderName = node.getAttribute('data-folder-name')?.trim();
//     if (!folderName) return;

//     const multi = e.ctrlKey || e.metaKey; // Ctrl (Win) / Cmd (Mac)

//     // If you do NOT want multi-select, force single
//     if (!multi) {
//       document.querySelectorAll('.folder-node.is-selected').forEach(n => n.classList.remove('is-selected'));
//     }

//     node.classList.toggle('is-selected', true);

//     const selectedNames = Array.from(document.querySelectorAll('.folder-node.is-selected'))
//       .map(n => n.getAttribute('data-folder-name'))
//       .filter(Boolean);

//     setCopyText(selectedNames);
//   });

//   // Optional: clicking the same selected folder again clears selection (single-select mode)
//   document.addEventListener('dblclick', (e) => {
//     const box = e.target.closest('.folder-box');
//     if (!box) return;

//     const node = box.closest('.folder-node');
//     if (!node || node.classList.contains('folder-node--root')) return;

//     node.classList.remove('is-selected');

//     const selectedNames = Array.from(document.querySelectorAll('.folder-node.is-selected'))
//       .map(n => n.getAttribute('data-folder-name'))
//       .filter(Boolean);

//     setCopyText(selectedNames);
//   });
// })();

(function initCopyFolderPicker() {
     const copyBtn = document.getElementById('copyFolderButton');
     const destInput = document.getElementById('destinationFolder');
     if (!copyBtn || !destInput) return;

     // 🔴 RESET STATE ON PAGE LOAD
     copyBtn.textContent = 'Copy';
     copyBtn.disabled = true;
     destInput.value = '';

     const defaultCopyText = copyBtn.textContent.trim() || 'Copy';

     function applySelection(folderId, folderName) {
          destInput.value = folderId || '';
          copyBtn.textContent = folderName ? `Copy to ${folderName}` : defaultCopyText;

          // optional: disable until selection
          copyBtn.disabled = !folderId;

          // visual highlight
          document.querySelectorAll('.folder-node.is-selected').forEach(n => n.classList.remove('is-selected'));
          if (folderId) {
               const node = document.querySelector(`.folder-node[data-folder-id="${CSS.escape(folderId)}"]`);
               if (node) node.classList.add('is-selected');
          }

          // persist across reloads (optional)
          if (folderId) {
               sessionStorage.setItem('copyDestinationFolderId', folderId);
               sessionStorage.setItem('copyDestinationFolderName', folderName || '');
          } else {
               sessionStorage.removeItem('copyDestinationFolderId');
               sessionStorage.removeItem('copyDestinationFolderName');
          }
     }

     // Restore previous selection after reload (optional but fixes your “deselect” complaint)
     const savedId = sessionStorage.getItem('copyDestinationFolderId');
     const savedName = sessionStorage.getItem('copyDestinationFolderName');
     if (savedId) {
          applySelection(savedId, savedName);
     } else {
          // start disabled until selected (if you want that)
          copyBtn.disabled = true;
          copyBtn.textContent = defaultCopyText;
     }

     // Select folder on click
     document.addEventListener('click', (e) => {
          const btn = e.target.closest('button.folder-select');
          if (!btn) return;

          const node = btn.closest('.folder-node');
          if (!node || node.classList.contains('folder-node--root')) return;

          const folderId = node.getAttribute('data-folder-id');
          const folderName = node.getAttribute('data-folder-name');

          if (!folderId) return;

          applySelection(folderId, folderName);
     });

     // Guard submit if somehow no destination selected
     copyBtn.closest('form')?.addEventListener('submit', (e) => {
          if (!destInput.value) {
               e.preventDefault();
               // no alert if you hate alerts; just do nothing
               // or show an inline error later
          }
     });
})();



// document.addEventListener('DOMContentLoaded', () => {
//   const copyBtn = document.getElementById('copyButton');
//   if (!copyBtn) return;

//   // Scope to the materials table if it exists, so we don’t pick up random checkboxes elsewhere
//   const table = document.getElementById('materials_table');

//   function checkedCount() {
//     const scope = table || document;
//     // Common patterns: adjust if yours differs, but this covers most of your prototype
//     return scope.querySelectorAll(
//       'input[type="checkbox"]:checked'
//     ).length;
//   }

//   function setEnabled(enabled) {
//     // Works for <button>
//     if (copyBtn.tagName === 'BUTTON') {
//       copyBtn.disabled = !enabled;
//       copyBtn.setAttribute('aria-disabled', enabled ? 'false' : 'true');
//       return;
//     }

//     // Works for <a> menu item (MOJ button menu often uses <a>)
//     copyBtn.classList.toggle('is-disabled', !enabled);
//     copyBtn.setAttribute('aria-disabled', enabled ? 'false' : 'true');
//     copyBtn.dataset.disabled = enabled ? 'false' : 'true';
//   }

//   // If it’s an <a>, stop it navigating while disabled
//   copyBtn.addEventListener('click', (e) => {
//     if (copyBtn.tagName !== 'BUTTON' && copyBtn.dataset.disabled === 'true') {
//       e.preventDefault();
//     }
//   });

//   // Initial state
//   setEnabled(checkedCount() > 0);

//   // Update whenever any checkbox changes
//   document.addEventListener('change', (e) => {
//     if (!e.target || e.target.type !== 'checkbox') return;

//     // If a table exists, ignore checkboxes outside it
//     if (table && !table.contains(e.target)) return;

//     setEnabled(checkedCount() > 0);
//   });
// });






// =====================================================
// MATERIAL SELECTION (single source of truth)
// =====================================================

function getSelectedItems() {
     return Array.from(document.querySelectorAll('input.js-material-checkbox:checked'))
          .filter(cb => cb.value && cb.value !== 'ALL')
          .map(cb => ({
               id: cb.value.toString(),
               name: cb.dataset.name || '',
               isFolder: cb.dataset.folder === 'true'
          }));
}

// =====================================================
// ENABLE / DISABLE ACTION BUTTONS
// =====================================================

function updateActionsUI() {
     const selected = getSelectedItems();

     const renameBtn = document.getElementById('renameButton');
     const discardBtn = document.getElementById('discardButton');
     const copyBtn = document.getElementById('copyButton');
     const moveBtn = document.getElementById('moveButton');

     // Rename: exactly ONE
     if (renameBtn) {
          const ok = selected.length === 1;
          renameBtn.disabled = !ok;
          renameBtn.classList.toggle('govuk-button--disabled', !ok);
     }

     // Discard / Copy / Move: ONE OR MORE
     const multiOK = selected.length > 0;

     [discardBtn, copyBtn, moveBtn].forEach(btn => {
          if (!btn) return;
          btn.disabled = !multiOK;
          btn.classList.toggle('govuk-button--disabled', !multiOK);
     });

     // Populate hidden fields for Copy / Move
     const ids = selected.map(x => x.id).join(',');
     const copyHidden = document.getElementById('copy_selected_ids');
     const moveHidden = document.getElementById('move_selected_ids');
     const discardHidden = document.getElementById('material_selected');

     if (copyHidden) copyHidden.value = ids;
     if (moveHidden) moveHidden.value = ids;
     if (discardHidden) discardHidden.value = selected[0]?.id || '';
}

// =====================================================
// SELECT ALL SUPPORT
// =====================================================

document.addEventListener('change', function (e) {
     if (e.target.matches('input.js-select-all')) {
          const all = document.querySelectorAll('input.js-material-checkbox');
          all.forEach(cb => (cb.checked = e.target.checked));
          updateActionsUI();
          return;
     }

     if (e.target.matches('input.js-material-checkbox')) {
          updateActionsUI();
     }
});

// =====================================================
// RENAME (Actions on selection → Rename)
// =====================================================

document.addEventListener('click', function (e) {
     const renameBtn = e.target.closest('[data-action="rename"]');
     if (!renameBtn) return;

     e.preventDefault();

     const selected = getSelectedItems();
     if (selected.length !== 1) return;

     const item = selected[0];

     document.getElementById('bulkActionType').value = 'rename';
     document.getElementById('bulkSelectedId').value = item.id;
     document.getElementById('bulkSelectedName').value = item.name;
     document.getElementById('bulkSelectedIsFolder').value = item.isFolder ? 'true' : 'false';

     document.getElementById('bulkActionForm').submit();
});

// Run once on load
document.addEventListener('DOMContentLoaded', updateActionsUI);





// Folder tree for copy/move 

document.addEventListener('DOMContentLoaded', () => {
     const table = document.getElementById('materials_table');
     if (!table) return; // ✅ only run on tab-manage-materials

     const copyBtn = document.getElementById('copyButton');
     if (!copyBtn) return;

     function checkedCount() {
          return table.querySelectorAll('input[type="checkbox"]:checked').length;
     }

     function setEnabled(enabled) {
          if (copyBtn.tagName === 'BUTTON') {
               copyBtn.disabled = !enabled;
               copyBtn.setAttribute('aria-disabled', enabled ? 'false' : 'true');
               return;
          }

          copyBtn.classList.toggle('is-disabled', !enabled);
          copyBtn.setAttribute('aria-disabled', enabled ? 'false' : 'true');
          copyBtn.dataset.disabled = enabled ? 'false' : 'true';
     }

     copyBtn.addEventListener('click', (e) => {
          if (copyBtn.tagName !== 'BUTTON' && copyBtn.dataset.disabled === 'true') {
               e.preventDefault();
          }
     });

     setEnabled(checkedCount() > 0);

     table.addEventListener('change', (e) => {
          if (e.target && e.target.type === 'checkbox') {
               setEnabled(checkedCount() > 0);
          }
     });
});


(function forceCopyButtonDefaultOnFolderTreeCopy() {
     function reset() {
          const copyBtn = document.getElementById('copyFolderButton');
          const destInput = document.getElementById('destinationFolder');

          // Only on folder-tree-copy page
          if (!copyBtn || !destInput) return;

          // Hard reset UI
          copyBtn.textContent = 'Copy';
          copyBtn.disabled = false;
          destInput.value = '';

          // Clear any selected styling
          document.querySelectorAll('.folder-node.is-selected')
               .forEach(n => n.classList.remove('is-selected'));

          // Kill any browser “remembering” you might have added earlier
          sessionStorage.removeItem('copyDestinationFolderId');
          sessionStorage.removeItem('copyDestinationFolderName');
          localStorage.removeItem('copyDestinationFolderId');
          localStorage.removeItem('copyDestinationFolderName');
     }

     // Run on normal load AND back/forward cache restores
     window.addEventListener('pageshow', reset);
     document.addEventListener('DOMContentLoaded', reset);
})();



document.addEventListener('click', (e) => {
     const btn = e.target.closest('button.folder-select');
     if (!btn) return;

     const node = btn.closest('.folder-node');
     if (!node || node.classList.contains('folder-node--root')) return;

     const folderId = node.getAttribute('data-folder-id');
     const folderName = node.getAttribute('data-folder-name');

     const copyBtn = document.getElementById('copyFolderButton');
     const destInput = document.getElementById('destinationFolder');
     if (!copyBtn || !destInput || !folderId) return;

     destInput.value = folderId;
     copyBtn.textContent = folderName ? `Copy to ${folderName}` : 'Copy';
     copyBtn.disabled = false;
});





document.querySelectorAll('.js-material-actions').forEach(menu => {
     const btn = menu.querySelector('.js-actions-toggle');
     const panel = menu.querySelector('.js-actions-panel');
     if (!btn || !panel) return;

     btn.addEventListener('click', () => {
          const isOpen = !panel.hasAttribute('hidden');
          if (isOpen) panel.setAttribute('hidden', '');
          else panel.removeAttribute('hidden');
     });
});



// Code 23 January 2026 - Mónica
document.addEventListener('click', (e) => {
     const btn = e.target.closest('button.show-case');
     if (!btn) return;

     e.preventDefault();
     e.stopPropagation();

     const id = btn.getAttribute('data-id');
     const row = btn.closest('tr');
     const previewRow = document.querySelector(`tr.hidden_row[data-row_id="${id}"]`);
     if (!row || !previewRow) return;

     // close all other previews
     document.querySelectorAll('tr.hidden_row').forEach(r => {
          if (r !== previewRow) r.style.display = 'none';
     });

     // reset all other buttons
     document.querySelectorAll('button.show-case').forEach(b => {
          if (b !== btn) b.innerHTML = 'Preview <i class="fa-solid fa-chevron-down"></i>';
     });

     // keep preview row right after its main row
     row.insertAdjacentElement('afterend', previewRow);

     const opening = previewRow.style.display !== 'table-row';
     previewRow.style.display = opening ? 'table-row' : 'none';

     btn.innerHTML = opening
          ? 'Hide <i class="fa-solid fa-chevron-up"></i>'
          : 'Preview <i class="fa-solid fa-chevron-down"></i>';
});


document.addEventListener('DOMContentLoaded', () => {
     const details = document.querySelector('.materials-search');
     const spacer = document.querySelector('.materials-toolbar__spacer');
     if (!details || !spacer) return;

     const panel = details.querySelector('.govuk-details__text');
     if (!panel) return;

     function syncSpacer() {
          if (!details.open) {
               spacer.style.height = '0px';
               return;
          }

          // Measure the actual panel height
          const h = panel.getBoundingClientRect().height;

          // Add the panel margin-top too (since it's absolute)
          const mt = parseFloat(getComputedStyle(panel).marginTop) || 0;

          spacer.style.height = `${Math.ceil(h + mt)}px`;
     }

     details.addEventListener('toggle', syncSpacer);
     window.addEventListener('resize', syncSpacer);

     syncSpacer();
});





// ----------------------------------------------------
// Auto-populate the order inputs (1..n)
// ----------------------------------------------------
function populateOrderInputs({ force = false } = {}) {
     const rows = document.querySelectorAll('#materials_table tbody tr.material-row');
     let order = 1;

     rows.forEach((row) => {
          const input = row.querySelector('.order-input');
          if (!input) return;

          const current = String(input.value || '').trim();

          // Only fill blanks unless forcing overwrite
          if (force || current === '') {
               input.value = order;
          }

          order++;
     });
}

const _populateOrderInputs = populateOrderInputs;
populateOrderInputs = function (...args) {
     console.trace('populateOrderInputs CALLED with:', args);
     return _populateOrderInputs.apply(this, args);
};

// ----------------------------------------------------
// Page init
// ----------------------------------------------------
function initMaterialsPage() {
     // Run ONCE on load.
     // Use force:true if you want to overwrite whatever's already there.
     populateOrderInputs();

     // Any other init code you need can go here.
     // initThing(); // uncomment if/when it becomes real
}

document.addEventListener('DOMContentLoaded', initMaterialsPage);



// (function () {
//      const renameForm = document.getElementById('renameForm');
//      const renameBtn = document.getElementById('renameButton');
//      const renameIdsInput = document.getElementById('rename_selected_ids');

//      function getSelected() {
//           return Array.from(document.querySelectorAll('.js-material-checkbox:checked'))
//                .map(cb => cb.value);
//      }

//      function setRenameEnabled() {
//           const selected = getSelected();
//           const enabled = selected.length > 0;

//           // GOVUK "disabled" styling you already use
//           renameBtn.classList.toggle('govuk-button--disabled', !enabled);

//           // Also make it actually disabled (stops submits)
//           renameBtn.disabled = !enabled;

//           renameIdsInput.value = selected.join(',');
//      }

//      document.addEventListener('change', function (e) {
//           if (e.target.classList && e.target.classList.contains('js-material-checkbox')) {
//                setRenameEnabled();
//           }
//      });

//      // Ensure it’s set correctly on load (in case of back nav, etc.)
//      setRenameEnabled();

//      renameForm.addEventListener('submit', function (e) {
//           const selected = getSelected();
//           if (selected.length === 0) {
//                e.preventDefault();
//                return;
//           }
//           renameIdsInput.value = selected.join(',');
//      });
// })();


// Rename multiple materials from Actions on selection
(function () {
     const renameForm = document.getElementById('renameForm');
     const renameBtn = document.getElementById('renameButton');
     const renameIdsInput = document.getElementById('rename_selected_ids');

     function getSelected() {
          return Array.from(document.querySelectorAll('.js-material-checkbox:checked'))
               .map(cb => cb.value);
     }

     function setRenameEnabled() {
          const selected = getSelected();
          const enabled = selected.length > 0;

          renameBtn.classList.toggle('govuk-button--disabled', !enabled);
          renameBtn.disabled = !enabled;

          if (renameIdsInput) renameIdsInput.value = selected.join(',');
     }

     // When any row checkbox changes
     document.addEventListener('change', function (e) {
          if (e.target.classList && e.target.classList.contains('js-material-checkbox')) {
               setRenameEnabled();
          }

          // When Select all changes, wait a tick for it to toggle the row checkboxes
          if (e.target.classList && e.target.classList.contains('js-select-all')) {
               setTimeout(setRenameEnabled, 0);
          }
     });

     // On load
     setRenameEnabled();

     // Before submit, ensure IDs are up to date
     if (renameForm) {
          renameForm.addEventListener('submit', function (e) {
               const selected = getSelected();
               if (!selected.length) {
                    e.preventDefault();
                    return;
               }
               if (renameIdsInput) renameIdsInput.value = selected.join(',');
          });
     }
})();


// Tick the select all checkbox appropriately
(function () {
     function syncSelectAll() {
          const selectAll = document.querySelector('.js-select-all');
          if (!selectAll) return;

          const boxes = Array.from(document.querySelectorAll('.js-material-checkbox'))
               .filter(cb => !cb.disabled);

          const total = boxes.length;
          const checked = boxes.filter(cb => cb.checked).length;

          if (total === 0 || checked === 0) {
               selectAll.checked = false;
               selectAll.indeterminate = false;
               return;
          }

          if (checked === total) {
               selectAll.checked = true;
               selectAll.indeterminate = false;
               return;
          }

          selectAll.checked = false;
          selectAll.indeterminate = true;
     }

     // Catch-all: after any click in the table, update the header state
     document.addEventListener('click', function (e) {
          if (e.target.closest('#materials_table')) {
               setTimeout(syncSelectAll, 0);
          }
     });

     // Also handle keyboard toggles (space on checkbox) which may not trigger click consistently
     document.addEventListener('change', function (e) {
          if (e.target.classList &&
               (e.target.classList.contains('js-material-checkbox') || e.target.classList.contains('js-select-all'))) {
               setTimeout(syncSelectAll, 0);
          }
     });

     // Initial sync
     if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', syncSelectAll);
     } else {
          syncSelectAll();
     }
})();