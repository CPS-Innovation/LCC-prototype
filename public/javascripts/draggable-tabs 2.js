document.addEventListener('DOMContentLoaded', (event) => {
    function handleDragStart(e) {
        this.style.opacity = '0.4';

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
        e.dataTransfer.setData('text/plain', this.id);
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';

        items.forEach(function (item) {
            item.classList.remove('over');
        });
    }

    function handleDragOver(e) {
        e.preventDefault();
        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }
  
    function handleDrop(e) {
        e.stopPropagation();

        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            dragSrcEl.id = this.id;
            this.innerHTML = e.dataTransfer.getData('text/html');
            this.id = e.dataTransfer.getData('text/plain');
        }

        return false;
    }

    let items = document.querySelectorAll('.sticky-tabs .govuk-tabs__list-item');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
    });
  
    let pages = [...document.getElementsByClassName('govuk-tabs__list-item')];
  
    $('.govuk-tabs__list-item').click(function(e) {
        let id = this.id;
        $('.govuk-tabs__panel').hide();
        $(`#${id}-page`).show();
    });
});