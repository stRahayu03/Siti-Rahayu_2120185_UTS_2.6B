function hitungPerkalian() {
    // Mengambil nilai dari input
    var bilanganBulat = parseInt(document.getElementById('bilanganBulat').value);
    var bilanganGanjil = parseInt(document.getElementById('bilanganGanjil').value);

    // Mengecek apakah input valid
    if (isNaN(bilanganBulat)) {
        alert("Mohon masukkan bilangan bulat yang benar.");
        return;
    }

    if (isNaN(bilanganGanjil) || bilanganGanjil % 2 === 0) {
        alert("Mohon masukkan bilangan ganjil yang benar.");
        return;
    }

    // Menghitung perkalian
    var hasil = bilanganBulat * bilanganGanjil;

    // Menampilkan hasil
    document.getElementById('hasil').innerText = "Hasil: " + hasil;
}