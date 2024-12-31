function acceptCita() {
    // Ocultamos la carta y mostramos el mensaje de agradecimiento
    document.querySelector('.card').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
    
    // Mostramos la imagen
    document.getElementById('img-container').style.display = 'block';

    // Llamada a la función para generar las estrellas
    createStarRain();
}

function moveRejectButton() {
    // Hacemos que el botón "No acepto" se mueva aleatoriamente
    document.getElementById('reject-button').classList.add('moving');
    // Desactivamos el botón "No acepto" para que no se pueda hacer clic
    document.getElementById('reject-button').disabled = true;
}

// Función para crear las estrellas
function createStarRain() {
    const starsContainer = document.getElementById('stars-container');

    // Generamos 500 estrellas
    for (let i = 0; i < 500; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Establecemos una posición aleatoria para la estrella
        const randomLeft = Math.random() * 100;  // Posición aleatoria en el eje X
        const randomDelay = Math.random() * 3;   // Retraso aleatorio para la animación

        // Asignamos propiedades aleatorias
        star.style.left = `${randomLeft}%`;
        star.style.animationDelay = `${randomDelay}s`;

        // Añadimos la estrella al contenedor
        starsContainer.appendChild(star);
    }
}

// Aplicamos el efecto de brillo a los botones cuando se carga la página
window.onload = function() {
    document.getElementById('accept-button').classList.add('glowing');
    document.getElementById('reject-button').classList.add('glowing');
}
