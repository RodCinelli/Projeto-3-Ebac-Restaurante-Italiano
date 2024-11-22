document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#menu-navegacao .nav-link");
    const navbarCollapse = document.querySelector("#menu-navegacao");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});