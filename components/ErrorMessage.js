var ErrorMessageComponent = (function () {

    function render(errorText) {
        return '<div class="error-message">' +
            CardComponent.escapeHtml(errorText) +
            '<br><button class="retry-button" id="retry-button">Спробувати знову</button>' +
        '</div>';
    }

    return {
        render: render
    };
})();
