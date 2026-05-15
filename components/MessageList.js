var MessageListComponent = (function () {

    function render(messages) {
        if (messages.length === 0) {
            return '';
        }

        var cardsMarkup = messages.map(function (entry) {
            return CardComponent.renderMessageCard(entry);
        }).join('');

        return '<div class="messages-list visible">' +
            '<h3 class="messages-title">Останні повідомлення</h3>' +
            '<ul>' + cardsMarkup + '</ul>' +
        '</div>';
    }

    return {
        render: render
    };
})();
