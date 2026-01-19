///////////////////////////////////////////////////// Monica CODE - START /////////////////////////////////////////////////////
(() => {
console.log('🔥 materials-ur-dec-2025.js LOADED');

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
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('button.show_material_actions').forEach(btn => {
//     // If some script replaced the text with "Actions", restore ours:
//     if (/^\s*Actions\s*$/i.test(btn.textContent.trim())) {
//       btn.innerHTML = 'Preview <i class="fa-solid fa-chevron-down"></i>';
//     }
//   });
// });



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

//         window.location.href = `/ur-dec-2025/B-off-system-MVP/rename?id=${materialId}`;
//     });

// });


// document.addEventListener('DOMContentLoaded', function () {
//      const renameButton = document.getElementById('renameButtonURDec2025');
//      const renameInput = document.getElementById('rename_selected');
//      const checkboxes = document.querySelectorAll(
//      '#materials_table input[name="materials_document"]'
//      );

//      if (!renameButton || !renameInput) return;

//      function updateRenameState() {
//           console.log('Rename selected count:', selected.length);
//           const selected = Array.from(checkboxes).filter(cb => cb.checked);

//           if (selected.length === 1) {
//                renameButton.disabled = false;
//                renameButton.classList.remove('govuk-button--disabled');
//                renameInput.value = selected[0].value;
//           } else {
//                renameButton.disabled = true;
//                renameButton.classList.add('govuk-button--disabled');
//                renameInput.value = '';
//           }
//      }

//      checkboxes.forEach(cb =>
//      cb.addEventListener('change', updateRenameState)
//      );
// });


document.addEventListener('DOMContentLoaded', function () {
     console.log('Test to see if we get here');
     const renameButton = document.getElementById('renameButtonURDec2025');
     const renameInput = document.getElementById('rename_selected');

     if (!renameButton || !renameInput) return;

     const checkboxes = document.querySelectorAll('#materials_table input[name="materials_document"]');

     function updateRenameState() {
          const selected = Array.from(checkboxes).filter(cb => cb.checked);

          if (selected.length === 1) {
               console.log('Rename selected count:', selected.length);
               renameButton.disabled = false;
               renameButton.classList.remove('govuk-button--disabled');
               renameInput.value = selected[0].value;
          } else {
               renameButton.disabled = true;
               renameButton.classList.add('govuk-button--disabled');
               renameInput.value = '';
          }
     }

     checkboxes.forEach(cb =>
     cb.addEventListener('change', updateRenameState)
     );
});

// document.addEventListener('change', function (e) {
//   if (!e.target.matches('input[name="materials_document"]')) return;

//   const renameButton = document.getElementById('renameButtonURDec2025');
//   const renameInput = document.getElementById('rename_selected');

//   const selected = document.querySelectorAll(
//     '#materials_table input[name="materials_document"]:checked'
//   );

//   console.log('Rename selected count:', selected.length);

//   if (selected.length === 1) {
//     renameButton.disabled = false;
//     renameButton.classList.remove('govuk-button--disabled');
//     renameInput.value = selected[0].value;
//   } else {
//     renameButton.disabled = true;
//     renameButton.classList.add('govuk-button--disabled');
//     renameInput.value = '';
//   }
// });



///////////////////////////////////////////////////// Monica CODE - END /////////////////////////////////////////////////////





///////////////////////////////////////////////////// CHRIS CODE - START /////////////////////////////////////////////////////

// TABS
$(document).ready(function() {
    // Only target elements within ur-dec-2025
    var $urDec2025 = $('.ur-dec-2025');

    $urDec2025.find("#new-tabs .tab-link").on("click", function (e) {
        e.preventDefault();
        $urDec2025.find('ul#new-tabs li').removeClass('govuk-tabs__list-item--selected');
        $(this).parent().addClass('govuk-tabs__list-item--selected');

        $urDec2025.find('.extra-nav').hide();
        $urDec2025.find('.extended-navigation').removeClass('govuk-tabs__list-item--selected');
        $urDec2025.find('.show-hide').removeClass('active');
    });

     $urDec2025.find('.tab-1-content').on("click", function (e) {
         $urDec2025.find('.panel').hide();
         $urDec2025.find('#tab-1-content').show();
     });

     $urDec2025.find('.tab-2-content').on("click", function (e) {
         $urDec2025.find('.panel').hide();
         $urDec2025.find('#tab-2-content').show();
     });

     $urDec2025.find('.tab-3-content').on("click", function (e) {
         $urDec2025.find('.panel').hide();
         $urDec2025.find('#tab-3-content').show();
         $urDec2025.find('#tab-list').show();
         $urDec2025.find('#docCopy').hide();
     });

     $urDec2025.find('.tab-3-content_link').on("click", function (e) {
         $urDec2025.find('.panel').hide();
         $urDec2025.find('#tab-3-content').show();
         $urDec2025.find('#tab-list').show();
         $urDec2025.find('#docCopy').hide();
     });

     $urDec2025.find('.tab-4-content').on("click", function (e) {
         $urDec2025.find('.panel').hide();
         $urDec2025.find('#tab-4-content').show();
     });
     
     $urDec2025.find('.tab-5-content').on("click", function (e) {
         $urDec2025.find('.panel').hide();
         $urDec2025.find('#tab-5-content').show();
     });

     $urDec2025.find('.tab-5-content_link').on("click", function (e) {
         $urDec2025.find('.panel').hide();
         $urDec2025.find('#tab-5-content').show();
     });

});

// FILTER
$(document).ready(function() {
     // Only target elements within ur-dec-2025
     var $urDec2025 = $('.ur-dec-2025');

     $urDec2025.find('#show_filter_Comms, #show_filter_Materials, .no_results, #show_filter_Redactions').hide();

     // MATERIALS
     const $btn = $urDec2025.find("#toggle_filter_Materials");
     const $col1 = $urDec2025.find("#materials_column_1");
     const $col2 = $urDec2025.find("#materials_column_2");

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
     $urDec2025.find("#close_filter_Comms").on("click", function (e) {
          $urDec2025.find('#show_filter_Comms').show();
          $urDec2025.find('#comms_column_1').hide();
          $urDec2025.find('#comms_column_2').removeClass('govuk-grid-column-three-quarters').addClass('govuk-grid-column-full');
     });

     $urDec2025.find("#show_filter_Comms").on("click", function (e) {
          $(this).hide();
          $urDec2025.find('#close_filter_Comms').show();
          $urDec2025.find('#comms_column_1').show();
          $urDec2025.find('#comms_column_2').removeClass('govuk-grid-column-full').addClass('govuk-grid-column-three-quarters');
     });

     // REDACTIONS
     $urDec2025.find("#close_filter_Redactions").on("click", function (e) {
          $urDec2025.find('#show_filter_Redactions').show();
          $urDec2025.find('#redact_column_1').hide();
          $urDec2025.find('#redact_column_2').removeClass('govuk-grid-column-three-quarters').addClass('govuk-grid-column-full');
     });

     $urDec2025.find("#show_filter_Redactions").on("click", function (e) {
          $(this).hide();
          $urDec2025.find('#close_filter_Redactions').show();
          $urDec2025.find('#redact_column_1').show();
          $urDec2025.find('#redact_column_2').removeClass('govuk-grid-column-full').addClass('govuk-grid-column-three-quarters');
     });

     // CLEAR FILTERS
     $urDec2025.find('.materials_filters_clear_All').on("click", function (e) {
          e.preventDefault();
          $urDec2025.find('#active_filter').hide();
          $urDec2025.find('table#materials_table tr.material_All').show();
          $urDec2025.find('input[name=filter_materials__New]').prop('checked', false);
          $urDec2025.find('input[name=filter_materials__Status]').prop('checked', false);
          $urDec2025.find('input[name=filter_materials__Category]').prop('checked', false);
     });


     $urDec2025.find('#applyFiltersBtn').on("click", function (e) {
          // SECTION 1
          if ($urDec2025.find('input[name=filter_materials__New]').is(':checked')) {
               $urDec2025.find('#active_filter').show();
               $urDec2025.find('.materials_filters_Title_1, .materials_filters_clear_New').show();

               $urDec2025.find('table#materials_table tr').hide();

               // $('table#materials_table thead tr, table#materials_table tr.material_New').show();
               $urDec2025.find('table#materials_table thead tr, table#materials_table tr.material_Reviews').show();
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
     var $urDec2025 = $('.ur-dec-2025');

     $urDec2025.find("#show_Materials_Actions").on("click", function (e) {
     e.stopPropagation();

     const $menu = $urDec2025.find("#materials_Actions");
     $menu.toggle();
     $(this).toggleClass("active");

     // 👇 force rename button visual update
     refreshRenameButtonState();
     });

     $urDec2025.find("#show_Comms_Actions").click(function(){
          $(this).toggleClass('active');
          $urDec2025.find('.hidden_buttons').toggle();
     });

});

$(document).on("click", function (e) {
  const $scope = $('.ur-dec-2025');
  const $menu = $scope.find("#materials_Actions");
  const $button = $scope.find("#show_Materials_Actions");

  if (
    !$menu.is(e.target) &&
    $menu.has(e.target).length === 0 &&
    !$button.is(e.target) &&
    $button.has(e.target).length === 0
  ) {
    $menu.hide();
    $button.removeClass("active");
  }
});


$(window).scroll(function() { 
    var $urDec2025 = $('.ur-dec-2025');
    var scroll = $(window).scrollTop();

});

// SELECTING MATERIALS & COMMS
$(document).ready(function() {
     // Only target elements within ur-dec-2025
     var $urDec2025 = $('.ur-dec-2025');

     $urDec2025.find('#tab-list, #auto_reclassify').hide();

     // RECLASSIFY
     $urDec2025.find(".auto_reclassify_Documents").click(function(){
          $urDec2025.find('#discard_successful, #rename_COMPLETE, #mark_as').hide();
          $urDec2025.find('#auto_reclassify').show();
     });

     // MATERIALS
     $urDec2025.find("#materials_documents_ALL").click(function(){
          if ($(this).is(':checked')) {
               $urDec2025.find('input[name=materials_document]').prop('checked', true);
          } else {
               $urDec2025.find('input[name=materials_document]').prop('checked', false);
          }
     });

     $('input[name=materials_document]').click(function(){
          if ($("input[name=materials_document]:checked").length >= 1) {
               $('.reclassify_Document_Multiple_Docs, .redact_Document_Multiple_Docs').removeAttr('disabled').removeClass('govuk-button--disabled');
          } else if ($("input[name=materials_document]:checked").length == 0) {
               $('.reclassify_Document_Multiple_Docs, .redact_Document_Multiple_Docs').attr('disabled','disabled').addClass('govuk-button--disabled').removeAttr('onClick');
          }
     });

     // COMMS
     $("#comms_documents_ALL").click(function(){
          if ($(this).is(':checked')) {
               $('input[name=comms_document]').prop('checked', true);
          } else {
               $('input[name=comms_document]').prop('checked', false);
          }
     });

     $('input[name=comms_document]').click(function(){
          if ($("input[name=comms_document]:checked").length >= 1) {
               $('.reclassify_Comms_Multiple_Docs').removeAttr('disabled').removeClass('govuk-button--disabled');
               $('.redact_Comms_Multiple_Docs').removeAttr('disabled').removeClass('govuk-button--disabled');
          } else if ($("input[name=comms_document]:checked").length == 0) { 
               $('.reclassify_Comms_Multiple_Docs').attr('disabled','disabled').addClass('govuk-button--disabled');
               $('.redact_Comms_Multiple_Docs').attr('disabled','disabled').addClass('govuk-button--disabled');
          }
     });

     $('.show_material, .show_material_actions').click(function(){
          $('#discard_successful').hide();

          var materialsNumber = $(this).data('id');
          if (materialsNumber == 1) { $('table#materials_table tr[data-row_id="1"').toggle(); $('button.show_material_actions[data-id="1"]').toggleClass('hide'); }
          if (materialsNumber == 2) { $('table#materials_table tr[data-row_id="2"').toggle(); $('button.show_material_actions[data-id="2"]').toggleClass('hide'); }
          if (materialsNumber == 3) { $('table#materials_table tr[data-row_id="3"').toggle(); $('button.show_material_actions[data-id="3"]').toggleClass('hide'); }
          if (materialsNumber == 4) { $('table#materials_table tr[data-row_id="4"').toggle(); $('button.show_material_actions[data-id="4"]').toggleClass('hide'); }
          if (materialsNumber == 5) { $('table#materials_table tr[data-row_id="5"').toggle(); $('button.show_material_actions[data-id="5"]').toggleClass('hide'); }
          if (materialsNumber == 6) { $('table#materials_table tr[data-row_id="6"').toggle(); $('button.show_material_actions[data-id="6"]').toggleClass('hide'); }
          if (materialsNumber == 7) { $('table#materials_table tr[data-row_id="7"').toggle(); $('button.show_material_actions[data-id="7"]').toggleClass('hide'); }
          if (materialsNumber == 8) { $('table#materials_table tr[data-row_id="8"').toggle(); $('button.show_material_actions[data-id="8"]').toggleClass('hide'); }
          if (materialsNumber == 9) { $('table#materials_table tr[data-row_id="9"').toggle(); $('button.show_material_actions[data-id="9"]').toggleClass('hide'); }
          if (materialsNumber == 10) { $('table#materials_table tr[data-row_id="10"').toggle(); $('button.show_material_actions[data-id="10"]').toggleClass('hide'); }
          if (materialsNumber == 11) { $('table#materials_table tr[data-row_id="11"').toggle(); $('button.show_material_actions[data-id="11"]').toggleClass('hide'); }
          if (materialsNumber == 12) { $('table#materials_table tr[data-row_id="12"').toggle(); $('button.show_material_actions[data-id="12"]').toggleClass('hide'); }
          if (materialsNumber == 13) { $('table#materials_table tr[data-row_id="13"').toggle(); $('button.show_material_actions[data-id="13"]').toggleClass('hide'); }
          if (materialsNumber == 14) { $('table#materials_table tr[data-row_id="14"').toggle(); $('button.show_material_actions[data-id="14"]').toggleClass('hide'); }
          if (materialsNumber == 15) { $('table#materials_table tr[data-row_id="15"').toggle(); $('button.show_material_actions[data-id="15"]').toggleClass('hide'); }
          if (materialsNumber == 16) { $('table#materials_table tr[data-row_id="16"').toggle(); $('button.show_material_actions[data-id="16"]').toggleClass('hide'); }
          if (materialsNumber == 17) { $('table#materials_table tr[data-row_id="17"').toggle(); $('button.show_material_actions[data-id="17"]').toggleClass('hide'); }
          if (materialsNumber == 18) { $('table#materials_table tr[data-row_id="18"').toggle(); $('button.show_material_actions[data-id="18"]').toggleClass('hide'); }
          if (materialsNumber == 19) { $('table#materials_table tr[data-row_id="19"').toggle(); $('button.show_material_actions[data-id="19"]').toggleClass('hide'); }
          if (materialsNumber == 20) { $('table#materials_table tr[data-row_id="20"').toggle(); $('button.show_material_actions[data-id="20"]').toggleClass('hide'); }
     });

     $('.show_material_actions').click(function(){
          if ($(this).hasClass('hide')) {
               $(this).html('Hide <i class="fa-solid fa-chevron-down"></i>');
          } else {
               $(this).html('Actions <i class="fa-solid fa-chevron-down"></i>');
          }
     });

     // $('.show_material_actions.hide').click(function(){
     //      $(this).html('Actions <i class="fa-solid fa-chevron-down"></i>').removeClass('hide');
     //      $('table#materials_table tr.hidden_row').hide();     
     // });

     $('.redact_Document_Multiple_Docs').click(function(){
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
     
     $('.redact_Document').click(function(){
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

     $('#filter_Redactions table .openMe a').click(function(){
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
$(document).ready(function() {
     // Only target elements within ur-dec-2025
     var $urDec2025 = $('.ur-dec-2025');

     $urDec2025.find('#mark_as').hide();

     $urDec2025.find('.mark_as_Read').click(function(){
          $(this).toggleClass('read');

          $urDec2025.find('#discard_successful, #auto_reclassify').hide();

          $urDec2025.find('#mark_as').show().toggleClass('read');

          var document_title = $(this).closest('.openMe').find('.redact_Document').text();
          $urDec2025.find('.document_title').text(document_title);

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


// function getSelectedMaterialIds() {
//   return Array.from(
//     document.querySelectorAll('input[name="materials_document"]:checked')
//   ).map(x => x.value);
// }


// … existing materials.js code …

// ----------------------------------------
// COPY + MOVE MODE (Layer 2)
// ----------------------------------------

(function() {
     console.log("Copy code is running");
     document.body.dataset.materialsMode = "copy";

     const copyBtn = document.getElementById('copyButton');
     const moveBtn = document.getElementById('moveButton');
     const toggleBtn = document.getElementById('show_Materials_Actions');


     // function getSelectedMaterialIds() {
     //      return Array.from(
     //           document.querySelectorAll('input[name="materials_document"]:checked')
     //      ).map(x => x.value);
     // }

     function activateMode(mode) {
          if (toggleBtn) toggleBtn.click();

          document.querySelectorAll('.show_material_actions').forEach(btn => btn.remove());

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





// Rename addition - Monica
// document.addEventListener('DOMContentLoaded', function () {
//   const renameForm = document.getElementById('renameFormURDec2025');
//   const renameInput = document.getElementById('rename_selected');

//   if (!renameForm || !renameInput) return;

//   renameForm.addEventListener('submit', function () {
//     const selected = document.querySelector(
//       '#materials_table input[name="materials_document"]:checked'
//     );

//     if (selected) {
//       renameInput.value = selected.value;
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const btn = document.getElementById('renameButtonURDec2025');
//   const input = document.getElementById('rename_selected');
//   const boxes = document.querySelectorAll('input[name="materials_document"]');

//   function update() {
//     const selected = [...boxes].filter(b => b.checked);

//     if (selected.length === 1) {
//       btn.disabled = false;
//       input.value = selected[0].value;
//     } else {
//       btn.disabled = true;
//       input.value = '';
//     }
//   }

//   boxes.forEach(b => b.addEventListener('change', update));
// });


document.addEventListener('DOMContentLoaded', function () {
  const renameForm = document.getElementById('renameForm');
  const renameInput = document.getElementById('rename_selected');

  if (!renameForm || !renameInput) return;

  renameForm.addEventListener('submit', function (e) {
    const selected = Array.from(
      document.querySelectorAll('input[name="materials_document"]:checked')
    );

    if (selected.length !== 1) {
      e.preventDefault();
      alert('Select exactly one file or folder to rename.');
      return;
    }

    renameInput.value = selected[0].value;
  });
});

})();