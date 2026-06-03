var ErrorMessageComponent = (function () {

    function render(errorText) {
        return '<div class="error-message" role="alert">' +
            CardComponent.escapeHtml(errorText) +
            '<br><button class="retry-button" id="retry-button">Спробувати знову</button>' +
        '</div>';
    }

    return {
        render: render
    };
})();
