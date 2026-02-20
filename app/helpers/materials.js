module.exports = function (materials) {

  function getChildren(folderId) {
    folderId = Number(folderId) || 0;

    const children = materials.filter(m => Number(m.parentId) === folderId);

    // ✅ Sort by saved order if present, otherwise shove to bottom
    children.sort((a, b) => {
      const ao = Number.isFinite(Number(a.order)) ? Number(a.order) : 999999;
      const bo = Number.isFinite(Number(b.order)) ? Number(b.order) : 999999;
      if (ao !== bo) return ao - bo;

      // tie-break so it’s stable
      return String(a.name || '').localeCompare(String(b.name || ''), 'en', { numeric: true, sensitivity: 'base' });
    });

    return children;
  }

  function getBreadcrumbs(folderId) {
    const crumbs = [];
    let currentId = Number(folderId);

    while (true) {
      const item = materials.find(m => Number(m.id) === currentId);
      if (!item) break;

      crumbs.unshift({ id: item.id, name: item.name });

      if (!item.parentId) break;
      currentId = Number(item.parentId);
    }

    if (!crumbs.length || crumbs[0].id !== 0) {
      crumbs.unshift({ id: 0, name: "Home: Thundercat" });
    }

    return crumbs;
  }

  return { getChildren, getBreadcrumbs };
};