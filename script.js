let percentageElement = document.querySelector('.percentage');
let waterElement = document.querySelector('.water');
let percentage = 0;
let button = document.getElementById('click-button');
let loadingText = document.querySelector('.loading-text');
let imageContainer = document.getElementById('image-container');

function load() {
    if (percentage <= 100) {
        percentageElement.innerText = `${percentage}%`;
        waterElement.style.width = `${percentage}%`;  // La animación ahora es horizontal
        percentage++;
    } else {
        clearInterval(interval);
        loadingText.style.display = 'none';  // Oculta el texto "LOADING LOVE..."
        button.style.display = 'block';  // Muestra el botón
        imageContainer.style.display = 'block';  // Muestra la imagen centrada encima de la barra
    }
}

let interval = setInterval(load, 150); // Ajustamos la velocidad de carga a 150ms para hacerlo más lento
