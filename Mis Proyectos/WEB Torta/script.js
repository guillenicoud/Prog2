document.addEventListener('DOMContentLoaded', function() {
    // Espera a que el contenido del documento se haya cargado completamente antes de ejecutar el código
  
    const galeria = document.querySelector('.galeria');
    // Obtiene el elemento con la clase "galeria" que contiene las imágenes
  
    const overlay = document.getElementById('overlay');
    // Obtiene el elemento con el id "overlay" que representa el contenedor del overlay
  
    const overlayImg = document.getElementById('overlay-img');
    // Obtiene el elemento de imagen dentro del overlay
  
    galeria.addEventListener('click', function(e) {
      // Agrega un evento de clic a la galería y pasa el evento como parámetro a la función de manejo de eventos
  
      if (e.target.tagName === 'IMG') {
        // Verifica si el elemento que se hizo clic es una imagen
  
        overlayImg.src = e.target.src;
        // Asigna la ruta de la imagen al atributo "src" de la imagen dentro del overlay
  
        overlay.classList.add('active');
        // Agrega la clase "active" al overlay para mostrarlo
      }
    });
  
    overlay.addEventListener('click', function() {
      // Agrega un evento de clic al overlay
  
      overlay.classList.remove('active');
      // Remueve la clase "active" del overlay para ocultarlo
    });
  });
  