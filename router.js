var Router = (function () {
    function navigateTo(path) {
        window.history.pushState({}, "", path);
        AppState.setState({ currentPage: path });
    }

    function getCurrentPath() {
        return window.location.pathname;
    }

    function init() {
        document.addEventListener("click", function (event) {
            var routeLink = event.target.closest("[data-route]");
            if (!routeLink) {
                return;
            }
            event.preventDefault();
            var targetPath = routeLink.getAttribute("data-route");
            navigateTo(targetPath);
        });

        window.addEventListener("popstate", function () {
            AppState.setState({ currentPage: getCurrentPath() });
        });

        AppState.setState({ currentPage: getCurrentPath() });
    }

    return {
        navigateTo: navigateTo,
        init: init
    };
})();
