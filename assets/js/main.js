document.addEventListener("DOMContentLoaded", function () {
    const getIconMenu = document.querySelector(".MobileMenu-iconMenu");
    const getBodyMenu = document.querySelector(".MobileMenu-body");
    const getModalMenu = document.querySelector(".MobileMenu-modal");

    // Function to show the box
    getIconMenu.addEventListener("click", function () {
        getModalMenu.style.display = "block";
    });

    // Function to hide the box when clicking outside
    getModalMenu.addEventListener("click", function (event) {
        if (!getBodyMenu.contains(event.target)) {
            getModalMenu.style.display = "none";
        }
    });
});

// About dropdown

document.addEventListener("DOMContentLoaded", function () {
    var headings = document.querySelectorAll(".about-category__item-heading");

    headings.forEach(function (heading) {
        heading.addEventListener("click", function () {
            var content = this.nextElementSibling;
            content.style.display =
                content.style.display === "none" ? "block" : "none";
        });
    });
});
