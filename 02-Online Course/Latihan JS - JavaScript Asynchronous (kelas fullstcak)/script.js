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

// Function yang mensimulasikan proses asynchronous (misal: mengambil data dari server)
function ambilDataDariServer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data berhasil diterima dari server!");
    }, 2000); // Penundaan selama 2 detik (2000 ms)
  });
}

// Function async untuk menjalankan proses secara asynchronous
async function prosesUtama() {
  console.log("1. Mulai mengambil data...");

  // Menunggu (await) sampai fungsi ambilDataDariServer selesai
  const hasil = await ambilDataDariServer();
  console.log("2.", hasil);

  console.log("3. Proses selesai!");
}

// Jalankan fungsi
prosesUtama();