var CatalogPage = (function () {

    function render() {
        var state = AppState.getState();
        var contentMarkup;

        if (state.apiLoading === true) {
            contentMarkup = LoadingIndicatorComponent.render();
        } else if (state.apiError !== null) {
            contentMarkup = ErrorMessageComponent.render(state.apiError);
        } else if (state.apiProducts.length > 0) {
            var cards = state.apiProducts.map(function (product) {
                return CardComponent.renderProductCard(product);
            });
            contentMarkup = CardListComponent.render(cards);
        } else {
            contentMarkup = LoadingIndicatorComponent.render();
        }

        return '<section class="catalog-section">' +
            '<h2>Каталог товарів</h2>' +
            contentMarkup +
        '</section>';
    }

    async function loadData() {
        AppState.setState({
            apiLoading: true,
            apiError: null
        });

        try {
            var products = await ApiService.fetchProducts();
            AppState.setState({
                apiLoading: false,
                apiProducts: products
            });
        } catch (error) {
            AppState.setState({
                apiLoading: false,
                apiError: error.message
            });
        }
    }

    function afterRender() {
        var currentState = AppState.getState();
        if (currentState.apiProducts.length === 0 && currentState.apiLoading === false && currentState.apiError === null) {
            loadData();
        }

        var retryButton = document.getElementById("retry-button");
        if (retryButton) {
            retryButton.addEventListener("click", function () {
                loadData();
            });
        }
    }

    return {
        render: render,
        afterRender: afterRender
    };
})();
