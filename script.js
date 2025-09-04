document.addEventListener('DOMContentLoaded', function() {
    // Animación suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efecto de zoom en las imágenes de la galería
    const galleryImages = document.querySelectorAll('.gallery-item img, .servicio-img img, .trabajo-img img');
    
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Crear carpeta para imágenes si no existe
    function checkImagesFolder() {
        // Esta función es solo un recordatorio, no puede ejecutarse en el navegador
        console.log('Recuerda crear la carpeta "images" y añadir las imágenes necesarias');
    }
    
    checkImagesFolder();
});