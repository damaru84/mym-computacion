document.addEventListener('DOMContentLoaded', function () {

    // Scroll suave al hacer clic en los enlaces del menú
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Resalta en el menú la sección visible mientras se hace scroll
    const sections = document.querySelectorAll('section[id], .hero[id]');
    const menuItems = document.querySelectorAll('nav a[href^="#"]');

    function marcarSeccionActiva() {
        let actual = '';
        sections.forEach(function (section) {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                actual = section.getAttribute('id');
            }
        });

        menuItems.forEach(function (item) {
            item.style.color = '';
            if (item.getAttribute('href') === '#' + actual) {
                item.style.color = 'var(--accent-color)';
            }
        });
    }

    window.addEventListener('scroll', marcarSeccionActiva);
    marcarSeccionActiva();



});
