for (let i = 0; i < 10; i++) {
    cetak(i);
}

function cetak(i) {
    setTimeout(angka, 1000 * i);

    function angka() {
        console.log(i);
    }
}