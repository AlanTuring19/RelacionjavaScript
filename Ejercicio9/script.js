const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

document.getElementById('MesForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var errorMessage = document.getElementById("error-message");

    const numeroMes = document.getElementById('numeroMes').value;

    if (isNaN(numeroMes) || numeroMes < 0 || numeroMes > 12) {
        errorMessage.textContent = "Debes introducir un número entero entre 0 y 12.";
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    const nombreMes = meses[numeroMes];

    document.getElementById('results').textContent = `El mes seleccionado es: ${nombreMes}`;
});