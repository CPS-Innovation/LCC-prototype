///////////////////////////////////////////////////// Monica CODE - START /////////////////////////////////////////////////////
console.log("materials.js loaded!");

// 6 February 2026 


// HARD STOP: clicking the order input must NEVER trigger sorting
window.addEventListener('click', function (e) {
     const orderInput = e.target.closest('input.order-input');
     if (!orderInput) return;

     // Allow editing the value
     // But kill every other listener (especially sort)
     e.stopPropagation();
     if (e.stopImmediatePropagation) e.stopImmediatePropagation();
}, true); // capture

// 5 February 2026

(function lockDownMaterialsTableClicks() {
     const TABLE_SEL = '#materials_table';

     function isInteractiveTarget(t) {
          return !!t.closest(
               [
                    `${TABLE_SEL} thead`, // allow header sorting clicks
                    `${TABLE_SEL} a`,
                    `${TABLE_SEL} button`,
                    `${TABLE_SEL} input`,
                    `${TABLE_SEL} label`,
                    `${TABLE_SEL} select`,
                    `${TABLE_SEL} textarea`,
                    `${TABLE_SEL} summary`,
                    `${TABLE_SEL} details`
               ].join(',')
          );
     }

     function isGutterDeadSpace(t) {
          // In the gutter cell, ONLY allow actual controls (move links + order input).
          const inOrderCell = t.closest(`${TABLE_SEL} tbody .order-cell, ${TABLE_SEL} tbody .order-links`);
          if (!inOrderCell) return false;

          const onAllowed = t.closest(
               `${TABLE_SEL} a.move-link[data-action], ${TABLE_SEL} input.order-input`
          );
          return !onAllowed; // dead space = true
     }

     ['pointerdown', 'click'].forEach(type => {
          window.addEventListener(type, (e) => {
               const table = e.target.closest?.(TABLE_SEL);
               if (!table) return;

               // Never block header (sorting lives there)
               if (e.target.closest('thead')) return;

               // If user clicked gutter dead space, do NOTHING (and stop sort)
               if (isGutterDeadSpace(e.target)) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
                    return;
               }

               // If it's not an actual control in tbody, kill it
               // This specifically covers your case where target becomes the <table>
               if (!isInteractiveTarget(e.target)) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
               }
          }, true); // CAPTURE: beats most nonsense
     });
})();

// HARD BLOCK: if a click happens inside the table but NOT in the header,
// kill it before any "sortable table" plugin can treat it as a sort trigger.
window.addEventListener('click', function (e) {
     const table = e.target.closest && e.target.closest('#materials_table');
     if (!table) return;


     // Allow legitimate interactive things anywhere in the table
     const allowed =
          e.target.closest('button.show-case') ||
          e.target.closest('td.title_column form button[type="submit"]') ||
          e.target.closest('.order-cell') ||
          e.target.closest('a.move-link[data-action]') ||
          e.target.closest('input[type="checkbox"], label');

     // If it’s not a header click and not an allowed control, nuke it.
     if (!inThead && !allowed) {
          e.preventDefault();
          e.stopPropagation();
          if (e.stopImmediatePropagation) e.stopImmediatePropagation();
     }
}, true);

// =====================================================
// HARD GUARD: stop "phantom header clicks" (sticky/overlay THEAD)
// =====================================================
window.addEventListener('click', function (e) {
     const table = document.getElementById('materials_table');
     if (!table) return;

     const thead = table.querySelector('thead');
     if (!thead) return;

     // Only care if the click is *reported* as inside THEAD
     if (!e.target.closest('thead')) return;

     // If the pointer is actually BELOW the visible THEAD,
     // this is almost certainly a header overlay stealing clicks.
     const r = thead.getBoundingClientRect();
     const clickedOutsideVisibleHead = e.clientY > r.bottom || e.clientY < r.top || e.clientX < r.left || e.clientX > r.right;

     if (clickedOutsideVisibleHead) {
          e.preventDefault();
          e.stopPropagation();
          if (e.stopImmediatePropagation) e.stopImmediatePropagation();
     }
}, true);

// Nuclear option: tbody clicks can NEVER sort
document.addEventListener('click', function (e) {
     if (e.target.closest('#materials_table tbody')) {
          const th = e.target.closest('th');
          if (th) {
               e.preventDefault();
               e.stopPropagation();
               if (e.stopImmediatePropagation) e.stopImmediatePropagation();
          }
     }
}, true);


// End of 5 February 2026

// 5 February 2026

(function lockDownMaterialsTableClicks() {
     const TABLE_SEL = '#materials_table';

     function isInteractiveTarget(t) {
          return !!t.closest(
               [
                    `${TABLE_SEL} thead`, // allow header sorting clicks
                    `${TABLE_SEL} a`,
                    `${TABLE_SEL} button`,
                    `${TABLE_SEL} input`,
                    `${TABLE_SEL} label`,
                    `${TABLE_SEL} select`,
                    `${TABLE_SEL} textarea`,
                    `${TABLE_SEL} summary`,
                    `${TABLE_SEL} details`
               ].join(',')
          );
     }

     function isGutterDeadSpace(t) {
          // In the gutter cell, ONLY allow actual controls (move links + order input).
          const inOrderCell = t.closest(`${TABLE_SEL} tbody .order-cell, ${TABLE_SEL} tbody .order-links`);
          if (!inOrderCell) return false;

          const onAllowed = t.closest(
               `${TABLE_SEL} a.move-link[data-action], ${TABLE_SEL} input.order-input`
          );
          return !onAllowed; // dead space = true
     }

     ['pointerdown', 'click'].forEach(type => {
          window.addEventListener(type, (e) => {
               const table = e.target.closest?.(TABLE_SEL);
               if (!table) return;

               // Never block header (sorting lives there)
               if (e.target.closest('thead')) return;

               // If user clicked gutter dead space, do NOTHING (and stop sort)
               if (isGutterDeadSpace(e.target)) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
                    return;
               }

               // If it's not an actual control in tbody, kill it
               // This specifically covers your case where target becomes the <table>
               if (!isInteractiveTarget(e.target)) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
               }
          }, true); // CAPTURE: beats most nonsense
     });
})();

// HARD BLOCK: if a click happens inside the table but NOT in the header,
// kill it before any "sortable table" plugin can treat it as a sort trigger.
window.addEventListener('click', function (e) {
     const table = e.target.closest && e.target.closest('#materials_table');
     if (!table) return;


     // Allow legitimate interactive things anywhere in the table
     const allowed =
          e.target.closest('button.show-case') ||
          e.target.closest('td.title_column form button[type="submit"]') ||
          e.target.closest('.order-cell') ||
          e.target.closest('a.move-link[data-action]') ||
          e.target.closest('input[type="checkbox"], label');

     // If it’s not a header click and not an allowed control, nuke it.
     if (!inThead && !allowed) {
          e.preventDefault();
          e.stopPropagation();
          if (e.stopImmediatePropagation) e.stopImmediatePropagation();
     }
}, true);

// =====================================================
// HARD GUARD: stop "phantom header clicks" (sticky/overlay THEAD)
// =====================================================
window.addEventListener('click', function (e) {
     const table = document.getElementById('materials_table');
     if (!table) return;

     const thead = table.querySelector('thead');
     if (!thead) return;

     // Only care if the click is *reported* as inside THEAD
     if (!e.target.closest('thead')) return;

     // If the pointer is actually BELOW the visible THEAD,
     // this is almost certainly a header overlay stealing clicks.
     const r = thead.getBoundingClientRect();
     const clickedOutsideVisibleHead = e.clientY > r.bottom || e.clientY < r.top || e.clientX < r.left || e.clientX > r.right;

     if (clickedOutsideVisibleHead) {
          e.preventDefault();
          e.stopPropagation();
          if (e.stopImmediatePropagation) e.stopImmediatePropagation();
     }
}, true);

// Nuclear option: tbody clicks can NEVER sort
document.addEventListener('click', function (e) {
     if (e.target.closest('#materials_table tbody')) {
          const th = e.target.closest('th');
          if (th) {
               e.preventDefault();
               e.stopPropagation();
               if (e.stopImmediatePropagation) e.stopImmediatePropagation();
          }
     }
}, true);


// End of 5 February 2026

// ************ Random clicks guards ************ //
// Folder open: allow form submit, but stop any other click handlers (like sorting) reacting to it
document.addEventListener('click', function (e) {
     const folderBtn = e.target.closest(
          '#materials_table tbody td.title_column form button[type="submit"]'
     );
     if (!folderBtn) return;

     // IMPORTANT: do NOT preventDefault (we want the form to submit)
     e.stopPropagation();
     if (e.stopImmediatePropagation) e.stopImmediatePropagation();
}, true); // capture phase so we beat other listeners



// Checkbox clicks: allow toggle, but stop any other click handlers (like sorting) reacting to it
document.addEventListener('click', function (e) {
     const cb = e.target.closest('#materials_table tbody .govuk-checkboxes__input, #materials_table tbody .govuk-checkboxes__label');
     if (!cb) return;

     // IMPORTANT: do NOT preventDefault (we want the checkbox to toggle)
     e.stopPropagation();
     if (e.stopImmediatePropagation) e.stopImmediatePropagation();
}, true); // capture phase


// Row dead-space clicks: stop them doing anything (prevents random sorts)
document.addEventListener('click', function (e) {
     const tbody = e.target.closest('#materials_table tbody');
     if (!tbody) return;

     // Allow legitimate interactive controls
     const allowed =
          e.target.closest('button.show-case') || // preview (files)
          e.target.closest('td.title_column form button[type="submit"]') || // folder open (folders)
          e.target.closest('.order-cell') || // gutter cell (order input + move links)
          e.target.closest('a.move-link[data-action]') || // move links explicitly
          e.target.closest('input[type="checkbox"], label'); // checkboxes

     if (allowed) return;

     // Anything else inside tbody is "no man's land" and should not trigger sorting
     e.stopPropagation();
     if (e.stopImmediatePropagation) e.stopImmediatePropagation();
}, true);
// ************ End of random clicks guards ************ //





// PREVIEW: intercept at WINDOW capture so no other capture listeners can sort the table
window.addEventListener('click', function (e) {
     const btn = e.target.closest && e.target.closest('button.show-case');
     if (!btn) return;

     e.preventDefault();
     e.stopPropagation();
     if (e.stopImmediatePropagation) e.stopImmediatePropagation();

     togglePreview(btn);
}, true);


document.addEventListener('click', function (e) {
     const row = e.target.closest('#materials_table tbody tr');
     if (!row) return;

     // Allow ONLY these interactions:
     const allowed =
          e.target.closest('.order-cell') ||                                // gutter
          e.target.closest('a.move-link[data-action]') ||                   // move links
          e.target.closest('button.show-case') ||                           // preview button for files
          e.target.closest('td.title_column form button[type="submit"]') || // folder name submit button
          e.target.closest('input[type="checkbox"], label');                // checkboxes

     if (allowed) return;

     // Otherwise, kill the click so the row is not "clickable"
     e.preventDefault();
     e.stopPropagation();
     if (e.stopImmediatePropagation) e.stopImmediatePropagation();
}, true);




// Defensive: run after other inits and put our label back
document.addEventListener('DOMContentLoaded', () => {
     document.querySelectorAll('button.show_material_actions').forEach(btn => {
          // If some script replaced the text with "Actions", restore ours:
          if (/^\s*Actions\s*$/i.test(btn.textContent.trim())) {
               btn.innerHTML = 'Preview <i class="fa-solid fa-chevron-down"></i>';
          }
     });
});


// HARD BLOCK: Select-all should never trigger sorting (or anything else)
document.addEventListener('click', function (e) {
     if (e.target.closest('#materials_documents_ALL, label[for="materials_documents_ALL"]')) {
          e.stopImmediatePropagation();
     }
}, true);



// Manage materials table sorting
document.addEventListener("DOMContentLoaded", function () {
     const table = document.getElementById("materials_table");
     if (!table) return;

     // Any clickable header with data-sort
     const headerButtons = table.querySelectorAll("thead button[data-sort], thead a[data-sort]");
     if (!headerButtons.length) return;

     const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

     function cleanText(el) {
          if (!el) return "";
          const clone = el.cloneNode(true);

          // remove tags/badges etc that mess with sort
          clone.querySelectorAll(".govuk-tag").forEach(n => n.remove());

          return (clone.innerText || clone.textContent || "").replace(/\s+/g, " ").trim();
     }

     function getSortableText(row, colIndex, key) {
          const cell = row.cells[colIndex];
          if (!cell) return "";

          // If sorting by name, prefer the visible title element you actually show users
          if (key === "name") {
               // common patterns in your markup
               const openMe = cell.querySelector(".openMe");
               if (openMe) return cleanText(openMe);

               const btnOrLink = cell.querySelector("button.govuk-button--link, button.show-case, a.govuk-link");
               if (btnOrLink) return cleanText(btnOrLink);

               return cleanText(cell);
          }

          return cleanText(cell);
     }

     function buildBlocks(tbody) {
          const rows = Array.from(tbody.rows);
          const blocks = [];

          for (let i = 0; i < rows.length; i++) {
               const main = rows[i];

               // Your preview rows are usually class hidden_row
               if (main.classList.contains("hidden_row")) continue;

               const block = [main];
               const next = rows[i + 1];

               if (next && next.classList.contains("hidden_row")) {
                    block.push(next);
                    i++;
               }

               blocks.push(block);
          }

          return blocks;
     }

     headerButtons.forEach(btn => {
          let dir = 1;

          btn.addEventListener("click", function (e) {
               // ABSOLUTE HARD STOP
               if (!e.target.closest('thead')) return;

               const th = btn.closest("th");
               if (!th || !th.closest('thead')) return;

               e.preventDefault();
               e.stopPropagation();
               if (e.stopImmediatePropagation) e.stopImmediatePropagation();

               const key = btn.getAttribute("data-sort") || "";
               const colIndex = th.cellIndex;

               const tbody = table.tBodies[0];
               if (!tbody) return;

               const blocks = buildBlocks(tbody);

               blocks.sort((A, B) => {
                    const a = getSortableText(A[0], colIndex, key);
                    const b = getSortableText(B[0], colIndex, key);
                    return collator.compare(a, b) * dir;
               });

               blocks.forEach(block => block.forEach(r => tbody.appendChild(r)));
               dir *= -1;

               if (window.updateMoveLinks) window.updateMoveLinks();
          });
     });
});



// Gutter move buttons
// function refreshOrderGutter(tbody) {
//      const rows = Array.from(tbody.querySelectorAll("tr"));

//      rows.forEach((row, idx) => {
//           const up = row.querySelector('a.move-link[data-action="up"]');
//           const down = row.querySelector('a.move-link[data-action="down"]');
//           const divider = row.querySelector(".divider");

//           const isFirst = idx === 0;
//           const isLast = idx === rows.length - 1;

//           // Helpers: you already have .is-hidden CSS that keeps spacing
//           const show = (el) => el && el.classList.remove("is-hidden");
//           const hide = (el) => el && el.classList.add("is-hidden");

//           // Enable/disable helper (keeps your is-disabled class)
//           const setEnabled = (link, enabled) => {
//                if (!link) return;
//                link.classList.toggle("is-disabled", !enabled);
//                link.setAttribute("aria-disabled", enabled ? "false" : "true");
//                link.tabIndex = enabled ? 0 : -1;
//           };

//           // Rules:
//           // First row: no Move up
//           if (isFirst) {
//                hide(up);
//                setEnabled(up, false);

//                show(down);
//                setEnabled(down, true);

//                hide(divider); // no point showing "|" with only one link
//                return;
//           }

//           // Last row: no Move down
//           if (isLast) {
//                show(up);
//                setEnabled(up, true);

//                hide(down);
//                setEnabled(down, false);

//                hide(divider);
//                return;
//           }

//           // Middle rows: both
//           show(up);
//           setEnabled(up, true);

//           show(down);
//           setEnabled(down, true);

//           show(divider);
//      });
// }



// document.addEventListener("click", (e) => {
//      const link = e.target.closest('a.move-link[data-action]');
//      if (!link) return;

//      e.preventDefault();
//      e.stopPropagation();
//      if (e.stopImmediatePropagation) e.stopImmediatePropagation();

//      if (link.classList.contains("is-disabled") || link.getAttribute("aria-disabled") === "true") return;

//      const row = link.closest("tr");
//      const tbody = row && row.closest("tbody");
//      if (!row || !tbody) return;

//      const action = link.dataset.action;
//      const prev = row.previousElementSibling;
//      const next = row.nextElementSibling;

//      if (action === "up" && prev) {
//           tbody.insertBefore(row, prev);
//      } else if (action === "down" && next) {
//           tbody.insertBefore(next, row);
//      } else {
//           return;
//      }

//      // Renumber after moving
//      Array.from(tbody.querySelectorAll("tr")).forEach((tr, i) => {
//           const input = tr.querySelector("input.order-input");
//           if (input) input.value = i + 1;
//      });

//      // Recompute which links should show on which rows
//      refreshOrderGutter(tbody);

// }, true);








// ===============================
// MOVE UP / DOWN (block-aware)
// ===============================
function getMainRows(tbody) {
     return Array.from(tbody.querySelectorAll('tr.material-row'));
}

function getPreviewRowFor(mainRow) {
     const id = mainRow?.dataset?.id;
     if (!id) return null;

     const next = mainRow.nextElementSibling;
     if (
          next &&
          next.classList.contains('hidden_row') &&
          String(next.dataset.row_id) === String(id)
     ) {
          return next;
     }
     return null;
}

function getBlock(mainRow) {
     const preview = getPreviewRowFor(mainRow);
     return preview ? [mainRow, preview] : [mainRow];
}

function renumberMainRows(tbody) {
     getMainRows(tbody).forEach((row, i) => {
          const input = row.querySelector('input.order-input');
          if (input) input.value = i + 1;
     });
}

function refreshOrderGutter(tbody) {
     const mainRows = getMainRows(tbody);

     mainRows.forEach((row, idx) => {
          const up = row.querySelector('a.move-link[data-action="up"]');
          const down = row.querySelector('a.move-link[data-action="down"]');
          const divider = row.querySelector(".divider");

          const isFirst = idx === 0;
          const isLast = idx === mainRows.length - 1;

          const show = (el) => el && el.classList.remove("is-hidden");
          const hide = (el) => el && el.classList.add("is-hidden");

          const setEnabled = (link, enabled) => {
               if (!link) return;
               link.classList.toggle("is-disabled", !enabled);
               link.setAttribute("aria-disabled", enabled ? "false" : "true");
               link.tabIndex = enabled ? 0 : -1;
          };

          if (isFirst) {
               hide(up); setEnabled(up, false);
               show(down); setEnabled(down, true);
               hide(divider);
               return;
          }

          if (isLast) {
               show(up); setEnabled(up, true);
               hide(down); setEnabled(down, false);
               hide(divider);
               return;
          }

          show(up); setEnabled(up, true);
          show(down); setEnabled(down, true);
          show(divider);
     });
}


// 6 February 2026
document.addEventListener('change', handleOrderInput, true);
document.addEventListener('blur', handleOrderInput, true);

function handleOrderInput(e) {
     const input = e.target.closest('input.order-input');
     if (!input) return;

     const row = input.closest('tr.material-row');
     const tbody = row?.closest('tbody');
     if (!row || !tbody) return;

     let desired = parseInt(input.value, 10);
     if (Number.isNaN(desired)) return;

     const rows = getMainRows(tbody);
     const max = rows.length;

     // Clamp value (1..n)
     desired = Math.max(1, Math.min(desired, max));

     const currentIndex = rows.indexOf(row);
     const targetIndex = desired - 1;

     if (currentIndex === targetIndex) {
          input.value = desired;
          return;
     }

     const block = getBlock(row);

     if (targetIndex < currentIndex) {
          // Move UP
          const targetRow = rows[targetIndex];
          block.forEach(node => tbody.insertBefore(node, targetRow));
     } else {
          // Move DOWN
          const targetRow = rows[targetIndex];
          const targetBlock = getBlock(targetRow);
          const afterNode = targetBlock[targetBlock.length - 1].nextElementSibling;
          block.forEach(node => tbody.insertBefore(node, afterNode));
     }
     


     renumberMainRows(tbody);
     refreshOrderGutter(tbody);
}
// End of 6 February 2026


document.addEventListener("click", (e) => {
     const link = e.target.closest('a.move-link[data-action]');
     if (!link) return;

     e.preventDefault();
     e.stopPropagation();
     if (e.stopImmediatePropagation) e.stopImmediatePropagation();

     if (link.classList.contains("is-disabled") || link.getAttribute("aria-disabled") === "true") return;

     const mainRow = link.closest("tr.material-row");
     const tbody = mainRow && mainRow.closest("tbody");
     if (!mainRow || !tbody) return;

     const action = link.dataset.action;
     const mainRows = getMainRows(tbody);
     const idx = mainRows.indexOf(mainRow);

     if (idx === -1) return;

     const thisBlock = getBlock(mainRow);

     if (action === "up" && idx > 0) {
          const targetRow = mainRows[idx - 1];
          tbody.insertBefore(thisBlock[0], targetRow);
          if (thisBlock[1]) tbody.insertBefore(thisBlock[1], targetRow);
     }

     if (action === "down" && idx < mainRows.length - 1) {
          const targetRow = mainRows[idx + 1];
          const targetBlock = getBlock(targetRow);
          const afterNode = targetBlock[targetBlock.length - 1].nextElementSibling;
          // Insert this block after the target block
          thisBlock.forEach(node => tbody.insertBefore(node, afterNode));
     }

     renumberMainRows(tbody);
     refreshOrderGutter(tbody);
}, true);

document.addEventListener("DOMContentLoaded", () => {
     const table = document.getElementById("materials_table");
     const tbody = table && table.querySelector("tbody");
     if (!tbody) return;
     refreshOrderGutter(tbody);
});


// Initial state
document.addEventListener("DOMContentLoaded", () => {
     const table = document.getElementById("materials_table");
     const tbody = table && table.querySelector("tbody");
     if (tbody) refreshOrderGutter(tbody);
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
     });

})


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


// initMoveFolderPicker – 4 February 2024
(function initMoveFolderPicker() {
     const moveBtn = document.getElementById('moveFolderButton');
     const destInput = document.getElementById('destinationFolder');
     if (!moveBtn || !destInput) return;

     // 🔴 RESET STATE ON PAGE LOAD
     moveBtn.textContent = 'Move';
     moveBtn.disabled = true;
     destInput.value = '';

     const defaultMoveText = moveBtn.textContent.trim() || 'Move';
     function applySelection(folderId, folderName) {
          destInput.value = folderId || '';
          moveBtn.textContent = folderName ? `Move to ${folderName}` : defaultMoveText;

          // optional: disable until selection
          moveBtn.disabled = !folderId;

          // visual highlight
          document.querySelectorAll('.folder-node.is-selected').forEach(n => n.classList.remove('is-selected'));
          if (folderId) {
               const node = document.querySelector(`.folder-node[data-folder-id="${CSS.escape(folderId)}"]`);
               if (node) node.classList.add('is-selected');
          }

          // persist across reloads (optional)
          if (folderId) {
               sessionStorage.setItem('moveDestinationFolderId', folderId);
               sessionStorage.setItem('moveDestinationFolderName', folderName || '');
          } else {
               sessionStorage.removeItem('moveDestinationFolderId');
               sessionStorage.removeItem('moveDestinationFolderName');
          }
     }

     // Restore previous selection after reload (optional but fixes your “deselect” complaint)
     const savedId = sessionStorage.getItem('moveDestinationFolderId');
     const savedName = sessionStorage.getItem('moveDestinationFolderName');
     if (savedId) {
          applySelection(savedId, savedName);
     } else {
          // start disabled until selected (if you want that)
          moveBtn.disabled = true;
          moveBtn.textContent = defaultMoveText;
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
     moveBtn.closest('form')?.addEventListener('submit', (e) => {
          if (!destInput.value) {
               e.preventDefault();
               // no alert if you hate alerts; just do nothing
               // or show an inline error later
          }
     });
})();




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
     const updateBtn = document.getElementById('updateButton');
     const markReadBtn = document.getElementById('markReadButton');
     const markUnreadBtn = document.getElementById('markUnreadButton');

     // Rename: exactly ONE
     if (updateBtn) {
          const ok = selected.length === 1;
          updateBtn.disabled = !ok;
          updateBtn.classList.toggle('govuk-button--disabled', !ok);
     }

     // Discard / Copy / Move: ONE OR MORE
     const multiOK = selected.length > 0;

     [discardBtn, copyBtn, moveBtn, markReadBtn, markUnreadBtn].forEach(btn => {
          if (!btn) return;
          btn.disabled = !multiOK;
          btn.classList.toggle('govuk-button--disabled', !multiOK);
     });

     // Populate hidden fields for Copy / Move
     const ids = selected.map(x => x.id).join(',');
     const copyHidden = document.getElementById('copy_selected_ids');
     const moveHidden = document.getElementById('move_selected_ids');
     const markReadHidden = document.getElementById('mark_read_selected_ids');
     const markUnreadHidden = document.getElementById('mark_unread_selected_ids');
     const discardHidden = document.getElementById('material_selected');


     if (copyHidden) copyHidden.value = ids;
     if (moveHidden) moveHidden.value = ids;
     if (markReadHidden) markReadHidden.value = ids;
     if (markUnreadHidden) markUnreadHidden.value = ids;
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


// Move button text – 4 February 2026
document.addEventListener('click', (e) => {
     const btn = e.target.closest('button.folder-select');
     if (!btn) return;

     const node = btn.closest('.folder-node');
     if (!node || node.classList.contains('folder-node--root')) return;

     const folderId = node.getAttribute('data-folder-id');
     const folderName = node.getAttribute('data-folder-name');

     const moveBtn = document.getElementById('moveFolderButton');
     const destInput = document.getElementById('destinationFolder');
     if (!moveBtn || !destInput || !folderId) return;

     destInput.value = folderId;
     moveBtn.textContent = folderName ? `Move to ${folderName}` : 'Move';
     moveBtn.disabled = false;
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


// 4 February 2026 - creating a path on search results
function buildFolderPath(materials, item) {
     const path = [];
     let current = item;

     while (current && current.parentId) {
          const parent = materials.find(m => String(m.id) === String(current.parentId));
          if (!parent) break;

          path.unshift(parent.name);
          current = parent;
     }

     return path.join(' / ');
}


function togglePreview(btn) {
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
}



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


(function () {
     function updateMoveLinks() {
          const table = document.getElementById('materials_table');
          if (!table) return;

          const rows = Array.from(table.querySelectorAll('tbody tr.material-row'));

          rows.forEach((row, i) => {
               const isFirst = i === 0;
               const isLast = i === rows.length - 1;

               const up = row.querySelector('.order-links .move-up');
               const down = row.querySelector('.order-links .move-down');
               const divider = row.querySelector('.order-links .divider');

               if (up) up.classList.toggle('is-hidden', isFirst);
               if (down) down.classList.toggle('is-hidden', isLast);

               // Divider shows only when BOTH links are visible
               if (divider) divider.classList.toggle('is-hidden', isFirst || isLast);
          });
     }

     // expose globally so the sort handler can call it
     window.updateMoveLinks = updateMoveLinks;

     // initial
     if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', updateMoveLinks);
     } else {
          updateMoveLinks();
     }
})();



document.addEventListener("DOMContentLoaded", () => {
     const table = document.getElementById("materials_table");
     if (!table) return;

     // Finds the "order" input inside a row. Adjust selectors here if yours differ.
     function findOrderInput(row) {
          // Prefer a specific class/data attribute if you can add one
          return (
               row.querySelector('input.order-input') ||
               row.querySelector('input[data-order]') ||
               row.querySelector('input[type="number"][name*="order"]') ||
               row.querySelector('input[type="number"]')
          );
     }

     function renumberAllRows(tbody) {
          const rows = Array.from(tbody.querySelectorAll("tr"));
          rows.forEach((row, idx) => {
               const input = findOrderInput(row);
               if (!input) return;
               const newVal = idx + 1;
               input.value = newVal;

               // If you keep the value elsewhere (hidden field, dataset), update it too.
               row.dataset.order = String(newVal);
          });
     }

     function moveRow(row, direction) {
          const tbody = row.closest("tbody");
          if (!tbody) return;

          const prev = row.previousElementSibling;
          const next = row.nextElementSibling;

          if (direction === "up" && prev) {
               // Move current row before previous
               tbody.insertBefore(row, prev);
               renumberAllRows(tbody);
          }

          if (direction === "down" && next) {
               // Move next row before current (equivalent to moving current down)
               tbody.insertBefore(next, row);
               renumberAllRows(tbody);
          }
     }

     // Delegate clicks so we don't bind handlers to every link (and risk side-effects)
     table.addEventListener("click", (e) => {
          const link = e.target.closest('a.order-link[data-action]');
          if (!link) return;

          // Critical: stop this click from triggering anything else (sorting, row toggles, etc.)
          e.preventDefault();
          e.stopPropagation();

          // If anything else is listening higher up in capture phase, this helps too:
          if (typeof e.stopImmediatePropagation === "function") e.stopImmediatePropagation();

          const row = link.closest("tr");
          if (!row) return;

          const action = link.getAttribute("data-action");
          moveRow(row, action);
     });
});




document.addEventListener("click", (e) => {
     // Only react to the move links, nothing else
     const moveLink = e.target.closest('a.move-link[data-action="up"], a.move-link[data-action="down"]');
     if (!moveLink) return; // IMPORTANT: don't block other clicks

     // Now and only now: block default/bubbling
     e.preventDefault();
     e.stopPropagation();
     if (e.stopImmediatePropagation) e.stopImmediatePropagation();

     // Respect disabled state
     if (moveLink.classList.contains("is-disabled") || moveLink.getAttribute("aria-disabled") === "true") return;

     const row = moveLink.closest("tr");
     const tbody = row && row.closest("tbody");
     if (!row || !tbody) return;

     const action = moveLink.dataset.action;
     const prev = row.previousElementSibling;
     const next = row.nextElementSibling;

     if (action === "up" && prev) tbody.insertBefore(row, prev);
     if (action === "down" && next) tbody.insertBefore(next, row);

     // Renumber visible "main" rows (simple version)
     Array.from(tbody.querySelectorAll("tr")).forEach((tr, i) => {
          const input = tr.querySelector("input.order-input");
          if (input) input.value = i + 1;
     });

     // Re-run your show/hide logic if you have it
     // refreshOrderGutter(tbody);
}, false);

