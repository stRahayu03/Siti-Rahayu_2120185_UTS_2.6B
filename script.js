function calculateSum() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.innerHTML = "Silakan masukkan kedua bilangan.";
    } else {
        const sum = number1 + number2;
        resultDiv.innerHTML = `Hasil penjumlahan: ${sum}`;
    }
}
