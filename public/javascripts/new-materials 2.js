document.addEventListener('DOMContentLoaded', () => {
  // --- FILTER PANEL TOGGLE ---
  const showBtn = document.getElementById('show_filter_Materials');
  const closeBtn = document.getElementById('close_filter_Materials');
  const col1 = document.getElementById('materials_column_1');
  const col2 = document.getElementById('materials_column_2');

  showBtn?.addEventListener('click', () => {
    showBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
    col1.style.display = 'block';
    col2.classList.remove('govuk-grid-column-full');
    col2.classList.add('govuk-grid-column-three-quarters');
  });

  closeBtn?.addEventListener('click', () => {
    closeBtn.style.display = 'none';
    showBtn.style.display = 'inline-block';
    col1.style.display = 'none';
    col2.classList.remove('govuk-grid-column-three-quarters');
    col2.classList.add('govuk-grid-column-full');
  });

  // --- PREVIEW TOGGLE ---
  document.querySelectorAll('.show_material').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const row = document.querySelector(`.hidden_row[data-row_id="${id}"]`);
      row.classList.toggle('hidden_row--visible');
      btn.innerHTML = 'Preview <i class="fa-solid fa-chevron-down"></i>';
    });
  });

  // --- ACTIONS ON SELECTION MODALS ---
  const actions = document.getElementById('actions_on_selection');
  const modalOverlay = document.getElementById('modal_overlay');
  const modalBody = document.getElementById('modal_body');
  const closeModalBtn = document.querySelector('.close-modal');

  actions?.addEventListener('change', () => {
    const action = actions.value;
    if (!action) return;

    fetch(`/materials/${action}`)
      .then(res => res.text())
      .then(html => {
        modalBody.innerHTML = html;
        modalOverlay.style.display = 'flex';
      });
  });

  closeModalBtn?.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    actions.value = '';
  });

  // --- FILTERS + SEARCH FUNCTIONALITY ---
  const checkboxes = document.querySelectorAll('.govuk-checkboxes__input');
  const searchBox = document.getElementById('search-materials');
  const applyFilters = document.getElementById('apply-filters');
  const tableRows = document.querySelectorAll('.govuk-table__body > tr.document_row_1');

  function filterMaterials() {
    const activeStatuses = Array.from(document.querySelectorAll('[id^="status-"]:checked')).map(cb => cb.id.replace('status-', ''));
    const activeCats = Array.from(document.querySelectorAll('[id^="cat-"]:checked')).map(cb => cb.id.replace('cat-', ''));
    const showUnread = document.getElementById('show-unread').checked;
    const searchTerm = searchBox.value.toLowerCase();

    tableRows.forEach(row => {
      const materialName = row.cells[1].innerText.toLowerCase();
      const type = row.cells[2].innerText.toLowerCase();
      const category = row.cells[3].innerText.toLowerCase();
      const status = row.cells[5].innerText.toLowerCase();
      const isNew = row.querySelector('.govuk-tag--blue') !== null;

      let visible = true;

      if (activeStatuses.length && !activeStatuses.some(s => status.includes(s.toLowerCase()))) visible = false;
      if (activeCats.length && !activeCats.some(c => category.includes(c.toLowerCase()))) visible = false;
      if (showUnread && !isNew) visible = false;
      if (searchTerm && !(materialName.includes(searchTerm) || type.includes(searchTerm) || category.includes(searchTerm) || status.includes(searchTerm))) visible = false;

      row.style.display = visible ? '' : 'none';

      const id = row.querySelector('.show_material')?.dataset.id;
      if (id) {
        const hiddenRow = document.querySelector(`.hidden_row[data-row_id="${id}"]`);
        if (hiddenRow) hiddenRow.style.display = visible ? hiddenRow.style.display : 'none';
      }
    });
  }

  checkboxes.forEach(cb => cb.addEventListener('change', filterMaterials));
  applyFilters?.addEventListener('click', filterMaterials);
  searchBox?.addEventListener('input', filterMaterials);
});