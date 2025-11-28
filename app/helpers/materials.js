module.exports = function(materials) {

  function getChildren(folderId) {
    folderId = Number(folderId) || 0;
    return materials.filter(m => Number(m.parentId) === folderId);
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

    // Always ensure shared drive
    if (!crumbs.length || crumbs[0].id !== 0) {
      crumbs.unshift({ id: 0, name: "Shared drive" });
    }

    return crumbs;
  }

  return { getChildren, getBreadcrumbs };
};