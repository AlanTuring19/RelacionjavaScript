document.getElementById("circleForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var radius = parseFloat(document.getElementById("radius").value);
    var errorMessage = document.getElementById("error-message");

    if (radius < 0) {
        errorMessage.textContent = "El radio no puede ser negativo. Por favor, introduzca un valor positivo.";
        errorMessage.style.display = "block";
        return; // Detiene la ejecución si el radio es negativo
    } else {
        errorMessage.style.display = "none";
    }
    
    var circumference = 2 * Math.PI * radius;
    var area = Math.PI * Math.pow(radius, 2);
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);

    document.getElementById("circumference").textContent = "Longitud de la circunferencia: " + circumference.toFixed(2);
    document.getElementById("area").textContent = "Área del círculo: " + area.toFixed(2);
    document.getElementById("volume").textContent = "Volumen de la esfera: " + volume.toFixed(2);
});
