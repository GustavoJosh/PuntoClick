document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const allLinks = document.querySelectorAll('a[href^="#"]');

    // Función para mostrar/ocultar el menú al hacer clic en la hamburguesa
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Bucle para manejar TODOS los enlaces (del menú y del cuerpo)
    allLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Si el menú móvil está abierto, lo cerramos
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                // Esperamos un poquito a que se cierre el menú antes de hacer scroll
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 300); // 300 milisegundos
            }
        });
    });
});