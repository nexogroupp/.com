// ===============================
// NEXO GROUP
// ===============================


// Анимация элементов при прокрутке

const elements = document.querySelectorAll(
    ".card, .why-card, .process-item, .contact-card, .stat"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach(function(element) {
    observer.observe(element);
});


// ===============================
// ФОРМА ЗАКАЗА
// ===============================

const form = document.querySelector(".order-form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = form.querySelector(
            'input[type="text"]'
        ).value.trim();

        const phone = form.querySelector(
            'input[type="tel"]'
        ).value.trim();

        if (name === "" || phone === "") {

            alert(
                "Пожалуйста, заполните имя и номер телефона."
            );

            return;
        }

        alert(
            "Спасибо, " +
            name +
            "!\n\n" +
            "Ваша заявка принята.\n" +
            "Мы свяжемся с вами по номеру:\n" +
            phone
        );

        form.reset();

    });

}


// ===============================
// ПЛАВНАЯ НАВИГАЦИЯ
// ===============================

const links = document.querySelectorAll(
    'a[href^="#"]'
);

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId =
            link.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ===============================
// NAVBAR ПРИ ПРОКРУТКЕ
// ===============================

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        navbar.classList.add(
            "navbar-scrolled"
        );

    } else {

        navbar.classList.remove(
            "navbar-scrolled"
        );

    }

});


// ===============================
// ГОД В FOOTER
// ===============================

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        "© " +
        new Date().getFullYear() +
        " NEXO GROUP. Все права защищены.";

}
