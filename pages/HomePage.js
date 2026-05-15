var HomePage = (function () {

    function render() {
        return '<section class="hero">' +
            '<div class="hero-content">' +
                '<h1>Бруко</h1>' +
                '<p class="hero-subtitle">Кава, що надихає. Атмосфера, що зігріває.</p>' +
                '<span class="hero-button" data-route="/menu">Переглянути меню</span>' +
            '</div>' +
        '</section>';
    }

    return {
        render: render
    };
})();
