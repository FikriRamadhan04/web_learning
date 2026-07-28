// contoh Asynchronous JavaScript - setTimeout
console.log("Pertama: Mulai proses");

setTimeout(() => {
    console.log("Ketiga: Proses asynchronous selesai (setelah 2 detik)");
}, 5000);

console.log("Kedua: Proses lain berjalan duluan");
// output
// Pertama: Mulai proses
// Kedua: Proses lain berjalan duluan
// Ketiga: Proses asynchronous selesai (setelah 2 detik)