document.getElementById("divisionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var numerador = parseInt(document.getElementById("numerador").value);
    var denominador = parseInt(document.getElementById("denominador").value);
    var errorMessage = document.getElementById("error-message");

    if (isNaN(numerador) || isNaN(denominador) || numerador < 0 || denominador <= 0) {
        errorMessage.textContent = "Debes introducir dos números enteros positivos.";
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }
    
    var conciente = Math.floor(numerador / denominador);
    var resto = numerador % denominador;
    
    document.getElementById("results").innerHTML = "Conciente: " + conciente + " Resto: " + resto;
});