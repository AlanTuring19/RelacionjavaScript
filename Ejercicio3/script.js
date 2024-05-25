document.getElementById("triangleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);
    var errorMessage = document.getElementById("error-message");

    var triangleForm

    if (lado1 === lado2 && lado2 === lado3) {
        triangleForm = "equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        triangleForm = "isósceles";
    } else {
        triangleForm = "escaleno";
    }

    if(lado1 <= 0){
        errorMessage.textContent = "El lado 1 debe ser > 0. Por favor, introduzca un valor positivo y > 0.";
        errorMessage.style.display = "block";
        return;
    } else if(lado2 <= 0){
        errorMessage.textContent = "El lado 2 debe ser > 0. Por favor, introduzca un valor positivo y > 0.";
        errorMessage.style.display = "block";
        return;
    } else if(lado3 <= 0){
        errorMessage.textContent = "El lado 3 debe ser > 0. Por favor, introduzca un valor positivo y > 0.";
        errorMessage.style.display = "block";
        return;
    }
    else {
        errorMessage.style.display = "none";
    }
    document.getElementById("tipoTriangulo").innerHTML = "Se trata de un triángulo: " + triangleForm;
    
});