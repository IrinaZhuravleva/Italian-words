const tableController = (function (modelCtrl, uiTableCtrl) {
    function start() {
        listenEvents();
        modelCtrl.countNewItems(modelCtrl.getData());
        setFilter(modelCtrl.getData());
    }

    //Формируем объект фильтра для записи в ls
    let filter = {
        status: 'all',
        course: 'all'
    }
    storage.set('filter', filter);

    function listenEvents() {
        const tableDOM = uiTableCtrl.getDOM();
        document.querySelector(tableDOM.upperMenu).addEventListener('click', filterNav);
        document.querySelector(tableDOM.asideMenu).addEventListener('click', filterNav);
        document.querySelector(tableDOM.courseSelect).addEventListener('change', filterSelect);
        document.querySelector(tableDOM.body).addEventListener('click', syncLinks);
    }

    function filterSelect() {
        filter.course = this[this.selectedIndex].value;
        setFilter(modelCtrl.getData());
    }

    return {
        start: start,
    }

})(modelController, tableViewController);

tableController.start();