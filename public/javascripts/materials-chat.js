/////////////////////////////////////////////////////
// materials.js – cleaned & simplified (Monica)
/////////////////////////////////////////////////////

console.log("materials.js loaded!");

// -------------------------------------------------
// 0. SMALL HELPER: get selected material IDs
// -------------------------------------------------
function getSelectedMaterialIds() {
  return Array.from(
    document.querySelectorAll('input[name="materials_document"]:checked')
  ).map(x => x.value.trim());
}

/////////////////////////////////////////////////////
// 1. CUSTOM PREVIEW – MONICA VERSION
//    Works with: 
//      - button.show_material_actions.show-case[data-id]
//      - <tr class="hidden_row" data-row_id="ID">
/////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  // Make sure all preview rows start hidden
  document.querySelectorAll('tr.hidden_row').forEach(row => {
    // Only add inline display:none if not already controlled by CSS
    if (!row.hasAttribute('data-preview-initialised')) {
      row.style.display = 'none';
      row.setAttribute('data-preview-initialised', 'true');
    }
  });

  document.querySelectorAll('button.show_material_actions.show-case').forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();

      const id = btn.getAttribute('data-id');
      if (!id) return;

      const row = document.querySelector(`tr.hidden_row[data-row_id="${id}"]`);
      const isOpen = !btn.classList.contains('is-open');

      btn.classList.toggle('is-open', isOpen);

      if (row) {
        row.style.display = isOpen ? '' : 'none';
      }

      btn.innerHTML = isOpen
        ? 'Hide <i class="fa-solid fa-chevron-up"></i>'
        : 'Preview <i class="fa-solid fa-chevron-down"></i>';
    });
  });
});

/////////////////////////////////////////////////////
// 2. TABLE SORTING (File/folder, Last updated, Status)
/////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("materials_table");
  if (!table) return;

  const headerButtons = table.querySelectorAll("thead th .govuk-button");

  // Map visible header text → column index
  const COL_INDEX = {
    "File or folder": 1,
    "Last updated": 2,
    "Status": 3
  };

  headerButtons.forEach(btn => {
    const label = btn.textContent.trim();
    const col = COL_INDEX[label];
    if (col == null) return; // skip checkbox/empty columns

    let dir = 1; // 1 = ASC, -1 = DESC
    btn.style.cursor = "pointer";

    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const tbody = table.querySelector("tbody");
      const rows = Array.from(tbody.rows);

      // Keep main row + following preview row together
      const blocks = [];
      for (let i = 0; i < rows.length; i++) {
        const main = rows[i];
        if (main.classList.contains("hidden_row")) continue;

        const block = [main];
        const next = rows[i + 1];
        if (next && next.classList.contains("hidden_row")) {
          block.push(next);
          i++;
        }
        blocks.push(block);
      }

      const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

      const getCellText = (row, index) => {
        const cell = row.cells[index];
        if (!cell) return "";
        return cell.innerText.trim();
      };

      const parseUKDate = (str) => {
        // Expecting e.g. "18 May 2022"
        if (!str) return 0;
        const parts = str.split(" ");
        if (parts.length !== 3) return 0;
        const [d, m, y] = parts;
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

      // Re-attach rows in new order
      blocks.forEach(block => block.forEach(r => tbody.appendChild(r)));

      // Toggle direction
      dir *= -1;

      // Remove arrows from all headers then set on this one
      headerButtons.forEach(h => {
        h.textContent = h.textContent.replace(/[▲▼]/g, '').trim();
      });
      btn.textContent = btn.textContent.replace(/[▲▼]/g, '').trim() + (dir === -1 ? ' ▼' : ' ▲');
    });
  });
});

/////////////////////////////////////////////////////
// 3. DISCARDING MATERIALS
/////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('discardForm');
  const hiddenInput = document.getElementById('material_selected');
  const discardButton = document.getElementById('discardButton');
  const checkboxes = document.querySelectorAll('#materials_table input[name="materials_document"]');

  if (!form || !hiddenInput || !discardButton || !checkboxes.length) return;

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

  form.addEventListener('submit', function () {
    const selectedValues = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.trim());
    hiddenInput.value = selectedValues.join(', ');
  });
});

/////////////////////////////////////////////////////
// 4. RENAME – CLEAN, MODERN VERSION
//    - Enables Rename when exactly 1 item selected
//    - Navigates to /rename?id=<materialId>
/////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  const renameButton = document.getElementById('renameButton');
  const checkboxes = document.querySelectorAll('#materials_table input[name="materials_document"]');

  if (!renameButton || !checkboxes.length) return;

  function updateRenameState() {
    const selected = Array.from(checkboxes).filter(cb => cb.checked);
    if (selected.length === 1) {
      renameButton.classList.remove('govuk-button--disabled');
      renameButton.removeAttribute('disabled');
    } else {
      renameButton.classList.add('govuk-button--disabled');
      renameButton.setAttribute('disabled', 'disabled');
    }
  }

  checkboxes.forEach(cb => cb.addEventListener('change', updateRenameState));
  updateRenameState(); // initialise

  renameButton.addEventListener('click', function (e) {
    e.preventDefault();

    if (renameButton.classList.contains('govuk-button--disabled')) {
      alert('Select exactly one file or folder to rename.');
      return;
    }

    const selected = Array.from(checkboxes).filter(cb => cb.checked);
    if (selected.length !== 1) {
      alert('Select exactly one file or folder to rename.');
      return;
    }

    const materialId = selected[0].value.trim();
    if (!materialId) {
      console.warn('Rename selected item has no value.');
      return;
    }

    window.location.href = `/version-11/B-off-system-MVP/rename?id=${encodeURIComponent(materialId)}`;
  });
});

/////////////////////////////////////////////////////
// 5. MATERIALS FILTER COLUMN TOGGLE ONLY
/////////////////////////////////////////////////////

$(document).ready(function() {
  const $version11 = $('.version-11');
  const $btn  = $version11.find("#toggle_filter_Materials");
  const $col1 = $version11.find("#materials_column_1");
  const $col2 = $version11.find("#materials_column_2");

  if (!$btn.length || !$col1.length || !$col2.length) return;

  // Initialise button text
  if ($col1.is(":visible")) {
    $btn.text("<< Hide filters");
  } else {
    $btn.text("Show filters >>");
  }

  $btn.on("click", function (e) {
    e.preventDefault();
    const isVisible = $col1.is(":visible");

    if (isVisible) {
      // Hide filter column
      $col1.hide();
      $col2.removeClass("govuk-grid-column-three-quarters")
           .addClass("govuk-grid-column-full");
      $btn.text("Show filters >>");
    } else {
      // Show filter column
      $col1.show();
      $col2.removeClass("govuk-grid-column-full")
           .addClass("govuk-grid-column-three-quarters");
      $btn.text("<< Hide filters");
    }
  });
});

/////////////////////////////////////////////////////
// 6. ACTIONS DROPDOWN
/////////////////////////////////////////////////////

$(document).ready(function() {
  const $version11 = $('.version-11');
  const $toggle = $version11.find("#show_Materials_Actions");
  const $menu   = $version11.find("#materials_Actions");

  if (!$toggle.length || !$menu.length) return;

  $toggle.on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $menu.toggle();
  });

  // Close when clicking outside
  $(document).on("mouseup", function(e) {
    if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && !$toggle.is(e.target)) {
      $menu.hide();
      $toggle.removeClass('active');
    }
  });
});

/////////////////////////////////////////////////////
// 7. COPY / MOVE MODE – SERVER-SIDE PERSISTENCE
/////////////////////////////////////////////////////

(function () {
  const copyBtn   = document.getElementById('copyButton');
  const moveBtn   = document.getElementById('moveButton');
  const toggleBtn = document.getElementById('show_Materials_Actions');

  if (!copyBtn && !moveBtn) return;

  async function activateMode(mode) {
    const selected = getSelectedMaterialIds();

    if (!selected.length) {
      alert("Select at least one item first.");
      return;
    }

    // Close actions dropdown if open
    if (toggleBtn) toggleBtn.click();

    // Send mode + selection to server
    await fetch('/version-11/B-off-system-MVP/materials-set-mode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `mode=${encodeURIComponent(mode)}&selected_ids=${encodeURIComponent(selected.join(','))}`
    });

    // Reload so Nunjucks can render "Copy here" / "Move here"
    window.location.reload();
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => activateMode('copy'));
  }

  if (moveBtn) {
    moveBtn.addEventListener('click', () => activateMode('move'));
  }
})();