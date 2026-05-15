var ContactsPage = (function () {

    function render() {
        var messages = AppState.getState().formMessages;

        return '<section class="contacts-section">' +
            '<h2>Контакти</h2>' +
            ContactInfoComponent.render() +
            ContactFormComponent.render() +
            MessageListComponent.render(messages) +
        '</section>';
    }

    function afterRender() {
        ContactFormComponent.attachHandlers();
    }

    return {
        render: render,
        afterRender: afterRender
    };
})();
