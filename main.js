var App = (function () {

    var appContainer = document.getElementById("app");

    var pageMap = {
        "/menu": MenuPage,
        "/about": AboutPage,
        "/contacts": ContactsPage,
        "/catalog": CatalogPage
    };

    var titleMap = {
        "/": "Бруко - Кав'ярня",
        "/menu": "Меню - Бруко",
        "/about": "Про нас - Бруко",
        "/contacts": "Контакти - Бруко",
        "/catalog": "Каталог - Бруко"
    };

    function updateActiveLink(path) {
        var allLinks = document.querySelectorAll("[data-route]");
        allLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("data-route") === path) {
                link.classList.add("active");
            }
        });
    }

    function render(state) {
        var path = state.currentPage;
        var page = pageMap[path] || HomePage;

        appContainer.innerHTML = page.render();
        updateActiveLink(path);
        document.title = titleMap[path] || titleMap["/"];
        window.scrollTo(0, 0);

        if (page.afterRender) {
            page.afterRender();
        }
    }

    function init() {
        AppState.subscribe(render);
        Router.init();
    }

    return {
        init: init
    };
})();

App.init();
