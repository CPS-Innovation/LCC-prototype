// materials.js - JavaScript for CPS Materials Management

document.addEventListener('DOMContentLoaded', function() {
  
  // Toggle Filters
  const toggleFiltersBtn = document.getElementById('toggle-filters');
  const filtersSidebar = document.getElementById('filters-sidebar');
  
  if (toggleFiltersBtn && filtersSidebar) {
    toggleFiltersBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (filtersSidebar.classList.contains('hidden')) {
        filtersSidebar.classList.remove('hidden');
        toggleFiltersBtn.textContent = 'Hide filter';
      } else {
        filtersSidebar.classList.add('hidden');
        toggleFiltersBtn.textContent = 'Show filter';
      }
    });
  }

  // Select All Checkboxes
  const selectAllCheckbox = document.getElementById('select-all');
  const materialCheckboxes = document.querySelectorAll('.material-checkbox');
  
  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener('change', function() {
      materialCheckboxes.forEach(function(checkbox) {
        checkbox.checked = selectAllCheckbox.checked;
      });
    });
  }

  // Update select-all checkbox when individual checkboxes change
  materialCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      const allChecked = Array.from(materialCheckboxes).every(cb => cb.checked);
      const someChecked = Array.from(materialCheckboxes).some(cb => cb.checked);
      
      if (selectAllCheckbox) {
        selectAllCheckbox.checked = allChecked;
        selectAllCheckbox.indeterminate = someChecked && !allChecked;
      }
    });
  });

  // Search functionality (basic client-side search)
  const searchInput = document.getElementById('search-materials');
  const tableRows = document.querySelectorAll('.cps-materials-table tbody tr');
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      
      tableRows.forEach(function(row) {
        const materialName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        
        if (materialName.includes(searchTerm)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
      
      updateMaterialsCount();
    });
  }

  // Apply Filters
  const applyFiltersBtn = document.querySelector('.cps-filters .govuk-button');
  
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', function(e) {
      e.preventDefault();
      applyFilters();
    });
  }

  function applyFilters() {
    const statusFilters = getCheckedValues('input[name="status"]:checked');
    const categoryFilters = getCheckedValues('input[name="category"]:checked');
    const showUnread = document.getElementById('show-unread')?.checked;
    
    tableRows.forEach(function(row) {
      let showRow = true;
      
      // Status filter
      if (statusFilters.length > 0) {
        const statusTag = row.querySelector('.cps-status-tag');
        const status = statusTag ? statusTag.textContent.trim().toLowerCase() : '';
        if (!statusFilters.includes(status)) {
          showRow = false;
        }
      }
      
      // Category filter
      if (categoryFilters.length > 0) {
        const category = row.querySelector('td:nth-child(4)')?.textContent.trim().toLowerCase();
        const categoryMatch = categoryFilters.some(filter => {
          const filterText = filter.replace('-', ' ');
          return category.includes(filterText);
        });
        if (!categoryMatch) {
          showRow = false;
        }
      }
      
      // New materials filter
      if (showUnread) {
        const hasNewBadge = row.querySelector('.cps-badge--new');
        if (!hasNewBadge) {
          showRow = false;
        }
      }
      
      row.style.display = showRow ? '' : 'none';
    });
    
    updateMaterialsCount();
  }

  function getCheckedValues(selector) {
    const checkboxes = document.querySelectorAll(selector);
    return Array.from(checkboxes).map(cb => cb.value);
  }

  function updateMaterialsCount() {
    const visibleRows = Array.from(tableRows).filter(row => row.style.display !== 'none');
    const countText = document.querySelector('.cps-materials-header .govuk-body');
    
    if (countText) {
      const total = tableRows.length;
      const showing = visibleRows.length;
      countText.innerHTML = `Showing <strong>${showing}</strong> materials out of <strong>${total}</strong>`;
    }
  }

  // Actions on selection dropdown (placeholder functionality)
  const actionsBtn = document.querySelector('.cps-actions-dropdown button');
  
  if (actionsBtn) {
    actionsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const selectedCount = Array.from(materialCheckboxes).filter(cb => cb.checked).length;
      
      if (selectedCount === 0) {
        alert('Please select at least one material');
      } else {
        alert(`Actions menu for ${selectedCount} selected material(s)`);
        // Here you would typically show a dropdown menu with actions
      }
    });
  }

});