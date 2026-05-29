var CardComponent = (function () {

    function escapeHtml(text) {
        var tempDiv = document.createElement("div");
        tempDiv.textContent = text;
        return tempDiv.innerHTML;
    }

    function renderMenuCard(props) {
        return '<article class="card">' +
            '<div class="card-icon">' + props.icon + '</div>' +
            '<h3>' + props.title + '</h3>' +
            '<p>' + props.description + '</p>' +
            '<span class="card-price">' + props.price + '</span>' +
        '</article>';
    }

    function renderProductCard(props) {
        var priceText = "$" + Number(props.price).toFixed(2);
        return '<article class="card">' +
            '<img src="' + escapeHtml(props.thumbnail) + '" alt="' + escapeHtml(props.title) + '" class="card-image" loading="lazy" width="200" height="200">' +
            '<h3>' + escapeHtml(props.title) + '</h3>' +
            '<p>' + escapeHtml(props.description) + '</p>' +
            '<span class="card-price">' + priceText + '</span>' +
            '<div class="card-rating">Рейтинг: ' + escapeHtml(String(props.rating)) + '</div>' +
        '</article>';
    }

    function renderMessageCard(props) {
        return '<li class="message-card">' +
            '<div class="message-card-name">' + escapeHtml(props.name) + '</div>' +
            '<div class="message-card-email">' + escapeHtml(props.email) + '</div>' +
            '<div class="message-card-text">' + escapeHtml(props.text) + '</div>' +
        '</li>';
    }

    return {
        renderMenuCard: renderMenuCard,
        renderProductCard: renderProductCard,
        renderMessageCard: renderMessageCard,
        escapeHtml: escapeHtml
    };
})();
