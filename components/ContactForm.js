var ContactFormComponent = (function () {

    var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function render() {
        return '<div class="feedback-form-wrapper">' +
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
        '</div>';
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

    function attachHandlers() {
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

    return {
        render: render,
        attachHandlers: attachHandlers
    };
})();
