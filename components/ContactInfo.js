var ContactInfoComponent = (function () {

    function render() {
        return '<div class="contacts-content">' +
            '<div class="contact-item">' +
                '<span class="contact-label">Адреса</span>' +
                '<span>вул. Хрещатик, 10, Київ</span>' +
            '</div>' +
            '<div class="contact-item">' +
                '<span class="contact-label">Телефон</span>' +
                '<span>+380 44 123 45 67</span>' +
            '</div>' +
            '<div class="contact-item">' +
                '<span class="contact-label">Графік роботи</span>' +
                '<span>Пн–Пт: 08:00–21:00</span>' +
            '</div>' +
            '<div class="contact-item">' +
                '<span class="contact-label">Вихідні</span>' +
                '<span>Сб–Нд: 09:00–22:00</span>' +
            '</div>' +
        '</div>';
    }

    return {
        render: render
    };
})();
