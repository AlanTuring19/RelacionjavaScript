function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

function generatePalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr + reversedStr;
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('input').value;
    var errorMessage = document.getElementById("error-message");
    var goodMessage = document.getElementById("good-message");
    if (input.trim() === '') {
        errorMessage.textContent = "Debes introducir una palabra o frase";
        errorMessage.style.display = "block";
        return;
    }
    if (isPalindrome(input)) {
        goodMessage.textContent = "La palabra o frase es un palíndromo.";
        goodMessage.style.display = "block";
        return;
    } else {
        const palindrome = generatePalindrome(input);
        errorMessage.textContent = `La palabra o frase  no es un palíndromo. Su correspondiente palíndromo es: ${palindrome}`;
        errorMessage.style.display = "block";
        return;
    }
});


