document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sortable").forEach(header => {
    header.addEventListener("click", () => {
      const table = header.closest("table");
      const tbody = table.querySelector("tbody");
      const index = Array.from(header.parentNode.children).indexOf(header);
      const ascending = !header.classList.contains("sorted-asc");

      // Clear sort classes on all headers
      table.querySelectorAll(".sortable").forEach(h => h.classList.remove("sorted-asc", "sorted-desc"));

      header.classList.toggle("sorted-asc", ascending);
      header.classList.toggle("sorted-desc", !ascending);

      const rows = Array.from(tbody.querySelectorAll("tr"));

      rows.sort((a, b) => {
        const aText = a.children[index].innerText.trim();
        const bText = b.children[index].innerText.trim();
        const isDate = header.dataset.sort === "date";

        if (isDate) {
          return ascending
            ? new Date(aText) - new Date(bText)
            : new Date(bText) - new Date(aText);
        }

        return ascending
          ? aText.localeCompare(bText, "en", { numeric: true })
          : bText.localeCompare(aText, "en", { numeric: true });
      });

      rows.forEach(row => tbody.appendChild(row));
    });
  });
});