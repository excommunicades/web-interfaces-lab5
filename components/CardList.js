var CardListComponent = (function () {

    function render(cardsHtmlArray) {
        return '<div class="cards-grid">' + cardsHtmlArray.join('') + '</div>';
    }

    return {
        render: render
    };
})();
