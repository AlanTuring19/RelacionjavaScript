document.getElementById("dniForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Para evita que el formulario se envíe y la página se recargue

    let numeroDni = parseInt(document.getElementById("dni").value);
    let resto = numeroDni % 23;
    const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
    var errorMessage = document.getElementById("error-message");

    if (isNaN(numeroDni) || numeroDni.toString().length !== 8) {
        errorMessage.textContent = "El DNI debe tener una longitud de 8 caracteres numéricos.";
        errorMessage.style.display = "block";
        return; // Para Detene la ejecución si el DNI no cumple los requisitos
    } else {
        errorMessage.style.display = "none";
    }

    document.getElementById("resultado").innerHTML = "La letra de tu DNI es: " + LETRAS.charAt(resto);
});



