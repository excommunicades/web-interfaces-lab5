var App = (function () {
    var appContainer = document.getElementById("app");
    var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function renderHomePage() {
        return '<section class="hero">' +
            '<div class="hero-content">' +
                '<h1>Бруко</h1>' +
                '<p class="hero-subtitle">Кава, що надихає. Атмосфера, що зігріває.</p>' +
                '<span class="hero-button" data-route="/menu">Переглянути меню</span>' +
            '</div>' +
        '</section>';
    }

    function renderMenuPage() {
        return '<section class="menu-section">' +
            '<h2>Наше меню</h2>' +
            '<div class="cards-grid">' +
                '<article class="card">' +
                    '<div class="card-icon">☕</div>' +
                    '<h3>Еспресо</h3>' +
                    '<p>Класичний насичений еспресо з щільною крема-пінкою. Зерна середнього обсмаження.</p>' +
                    '<span class="card-price">45 ₴</span>' +
                '</article>' +
                '<article class="card">' +
                    '<div class="card-icon">🥛</div>' +
                    '<h3>Капучіно</h3>' +
                    '<p>Еспресо з ніжною молочною пінкою. Ідеальний баланс кави та молока.</p>' +
                    '<span class="card-price">75 ₴</span>' +
                '</article>' +
                '<article class="card">' +
                    '<div class="card-icon">🍫</div>' +
                    '<h3>Мокко</h3>' +
                    '<p>Поєднання еспресо, шоколаду та збитого молока. Солодкий та насичений смак.</p>' +
                    '<span class="card-price">85 ₴</span>' +
                '</article>' +
                '<article class="card">' +
                    '<div class="card-icon">🧊</div>' +
                    '<h3>Айс Латте</h3>' +
                    '<p>Холодний латте з подвійною порцією еспресо та льодом. Освіжає у спеку.</p>' +
                    '<span class="card-price">80 ₴</span>' +
                '</article>' +
                '<article class="card">' +
                    '<div class="card-icon">🍵</div>' +
                    '<h3>Матча Латте</h3>' +
                    '<p>Японський зелений чай матча з вівсяним молоком. М\'який та кремовий.</p>' +
                    '<span class="card-price">90 ₴</span>' +
                '</article>' +
                '<article class="card">' +
                    '<div class="card-icon">🥐</div>' +
                    '<h3>Круасан</h3>' +
                    '<p>Свіжий масляний круасан щоденної випічки. Хрусткий зовні, ніжний всередині.</p>' +
                    '<span class="card-price">55 ₴</span>' +
                '</article>' +
            '</div>' +
        '</section>';
    }

    function renderAboutPage() {
        return '<section class="about-section">' +
            '<h2>Про нас</h2>' +
            '<div class="about-content">' +
                '<p>Бруко - це простір, де кожна чашка кави готується з увагою до деталей. Ми працюємо з зернами specialty-класу від українських обсмажувачів та створюємо атмосферу, в якій хочеться залишитися.</p>' +
                '<p>Наша команда вірить, що кава - це більше, ніж напій. Це ритуал, пауза, натхнення. Ми відкрились у 2023 році в центрі Києва і з того часу стали улюбленим місцем для тих, хто цінує якість та затишок.</p>' +
            '</div>' +
        '</section>';
    }

    function renderMessagesCards() {
        var messages = AppState.getState().formMessages;
        if (messages.length === 0) {
            return '';
        }
        var cardsMarkup = messages.map(function (entry) {
            return '<li class="message-card">' +
                '<div class="message-card-name">' + escapeHtml(entry.name) + '</div>' +
                '<div class="message-card-email">' + escapeHtml(entry.email) + '</div>' +
                '<div class="message-card-text">' + escapeHtml(entry.text) + '</div>' +
            '</li>';
        }).join('');

        return '<div class="messages-list visible">' +
            '<h3 class="messages-title">Останні повідомлення</h3>' +
            '<ul>' + cardsMarkup + '</ul>' +
        '</div>';
    }

    function renderContactsPage() {
        return '<section class="contacts-section">' +
            '<h2>Контакти</h2>' +
            '<div class="contacts-content">' +
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
            '</div>' +
            '<div class="feedback-form-wrapper">' +
                '<h3 class="form-title">Напишіть нам</h3>' +
                '<form id="feedback-form" novalidate>' +
                    '<div class="form-group">' +
                        '<label for="user-name">Ім\'я</label>' +
                        '<input type="text" id="user-name" name="name" placeholder="Ваше ім\'я">' +
                        '<span class="field-error" id="name-error"></span>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="user-email">Email</label>' +
                        '<input type="email" id="user-email" name="email" placeholder="example@mail.com">' +
                        '<span class="field-error" id="email-error"></span>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="user-message">Повідомлення</label>' +
                        '<textarea id="user-message" name="message" rows="4" placeholder="Ваше повідомлення..."></textarea>' +
                        '<span class="field-error" id="message-error"></span>' +
                    '</div>' +
                    '<button type="submit" class="form-submit" id="submit-button">Надіслати</button>' +
                '</form>' +
                '<div class="form-success hidden" id="success-message">Дякуємо! Ваше повідомлення надіслано.</div>' +
            '</div>' +
            renderMessagesCards() +
        '</section>';
    }

    function escapeHtml(text) {
        var tempDiv = document.createElement("div");
        tempDiv.textContent = text;
        return tempDiv.innerHTML;
    }

    function getPageMarkup(path) {
        switch (path) {
            case "/menu":
                return renderMenuPage();
            case "/about":
                return renderAboutPage();
            case "/contacts":
                return renderContactsPage();
            default:
                return renderHomePage();
        }
    }

    function updateActiveLink(path) {
        var allLinks = document.querySelectorAll("[data-route]");
        allLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("data-route") === path) {
                link.classList.add("active");
            }
        });
    }

    function updatePageTitle(path) {
        var titles = {
            "/": "Бруко - Кав'ярня",
            "/menu": "Меню - Бруко",
            "/about": "Про нас - Бруко",
            "/contacts": "Контакти - Бруко"
        };
        document.title = titles[path] || "Бруко - Кав'ярня";
    }

    function render(state) {
        var path = state.currentPage;
        appContainer.innerHTML = getPageMarkup(path);
        updateActiveLink(path);
        updatePageTitle(path);
        window.scrollTo(0, 0);

        if (path === "/contacts") {
            attachFormHandlers();
        }
    }

    function validateField(inputElement, errorElement, checkFunction) {
        var value = inputElement.value.trim();
        var errorText = checkFunction(value);
        errorElement.textContent = errorText;
        if (errorText) {
            inputElement.classList.add("invalid");
            return false;
        }
        inputElement.classList.remove("invalid");
        return true;
    }

    function checkNameValue(value) {
        if (value.length === 0) {
            return "Будь ласка, введіть ім'я";
        }
        return "";
    }

    function checkEmailValue(value) {
        if (value.length === 0) {
            return "Будь ласка, введіть email";
        }
        if (!EMAIL_REGEX.test(value)) {
            return "Невірний формат email";
        }
        return "";
    }

    function checkMessageValue(value) {
        if (value.length === 0) {
            return "Будь ласка, введіть повідомлення";
        }
        return "";
    }

    function attachFormHandlers() {
        var feedbackForm = document.getElementById("feedback-form");
        var nameInput = document.getElementById("user-name");
        var emailInput = document.getElementById("user-email");
        var messageInput = document.getElementById("user-message");
        var nameError = document.getElementById("name-error");
        var emailError = document.getElementById("email-error");
        var messageError = document.getElementById("message-error");
        var successBlock = document.getElementById("success-message");
        var submitButton = document.getElementById("submit-button");

        nameInput.addEventListener("input", function () {
            validateField(nameInput, nameError, checkNameValue);
        });

        emailInput.addEventListener("input", function () {
            validateField(emailInput, emailError, checkEmailValue);
        });

        messageInput.addEventListener("input", function () {
            validateField(messageInput, messageError, checkMessageValue);
        });

        submitButton.addEventListener("click", function () {
            successBlock.classList.add("hidden");
        });

        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var isNameValid = validateField(nameInput, nameError, checkNameValue);
            var isEmailValid = validateField(emailInput, emailError, checkEmailValue);
            var isMessageValid = validateField(messageInput, messageError, checkMessageValue);

            if (!isNameValid || !isEmailValid || !isMessageValid) {
                return;
            }

            var currentMessages = AppState.getState().formMessages;
            var newEntry = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                text: messageInput.value.trim()
            };

            AppState.setState({
                currentPage: "/contacts",
                formMessages: [newEntry].concat(currentMessages)
            });

            var updatedSuccess = document.getElementById("success-message");
            if (updatedSuccess) {
                updatedSuccess.classList.remove("hidden");
            }
        });
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
