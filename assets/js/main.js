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
