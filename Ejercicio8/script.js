function calcularMCD() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var errorMessage = document.getElementById("error-message");

    if (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 <= 0) {
        errorMessage.textContent = "Debes introducir dos números enteros positivos.";
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    var mcd = metodoEuclides(numero1, numero2);
    
    document.getElementById("resultado").innerHTML = "El MCD de " + numero1 + " y " + numero2 + " es: " + mcd;
}

function metodoEuclides(a, b) {
    while (b !== 0) {
        var resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}