document.addEventListener("DOMContentLoaded", function () {
    // Fechar o menu ao clicar em um link de navegação
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

    // Scroll suave para o topo ao clicar no título
    const logo = document.querySelector('.navbar-brand');
    logo.addEventListener('click', function (event) {
        event.preventDefault(); // Previne qualquer comportamento padrão

        // Rola suavemente para o topo da página
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Comportamento suave ao rolar
        });
    });
});
