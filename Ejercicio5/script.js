document.getElementById("palabrasForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let datoIntroducido = String(document.getElementById("palabra").value);
    var letras ;
    var errorMessage = document.getElementById("error-message");

    if(datoIntroducido === datoIntroducido.toUpperCase()){
        letras = "Mayúsculas";
    }else if(datoIntroducido === datoIntroducido.toLowerCase()){
        letras = "Minúsculas";
    }else{
        letras = "Ni uno ni lo otro ";
    }

    if(datoIntroducido === "" ){
        errorMessage.textContent = "Debes introducir una palabra o frase";
        errorMessage.style.display = "block";
        return;
    }
    else{
        errorMessage.style.display = "none";
    }
    
    document.getElementById("results").innerHTML = "La palabra o frase que has introducido esta en: " + letras;

});