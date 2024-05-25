document.getElementById("dniForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    let numeroDni = parseInt(document.getElementById("dni").value);
    let resto = numeroDni % 23;
    const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
    var errorMessage = document.getElementById("error-message");
    
    if (isNaN(numeroDni) || numeroDni.toString().length !== 8) {
        errorMessage.textContent = "El DNI debe tener una longitud de 8 caracteres numéricos.";
        errorMessage.style.display = "block";
        return; // Detiene la ejecución si el DNI no cumple los requisitos
    } else {
        errorMessage.style.display = "none";
    }

    document.getElementById("resultado").innerHTML = "La letra de tu DNI es: " + LETRAS.charAt(resto);
});


// Función para cambiar a modo dark
function setDarkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.getElementById('darkModeButton').style.backgroundColor = 'white';
    document.getElementById('darkModeButton').style.color = 'black';
    document.getElementById('LightModeButton').style.backgroundColor = '#007bff';
    document.getElementById('LightModeButton').style.color = 'black';
}

// Función para cambiar a modo Light
function setLightMode() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = '#333';
    document.getElementById('darkModeButton').style.backgroundColor = '#007bff';
    document.getElementById('darkModeButton').style.color = 'white';
    document.getElementById('LightModeButton').style.backgroundColor = 'white';
    document.getElementById('LightModeButton').style.color = 'black';
}

// Event listeners para los botones
document.getElementById('darkModeButton').addEventListener('click', setDarkMode);
document.getElementById('LightModeButton').addEventListener('click', setLightMode);