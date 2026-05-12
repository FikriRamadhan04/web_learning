//  1. Foreach Method
// - Inisialisasi array bernama 'angka' yang berisi sekumpulan data integer
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// - Memanggil metode .forEach() pada array 'angka'
//- Fungsi di dalam forEach akan dijalankan satu kali untuk setiap elemen di dalam array
angka.forEach(function (antrian) {
  // - Kondisi Logika: Mengecek apakah elemen (el) saat ini adalah angka genap
  // Operator % (modulo) mencari sisa bagi. Jika dibagi 2 sisanya 0, maka genap.
  if (antrian % 2 === 0) {
    // -  Jika kondisi benar (True), cetak elemen tersebut ke konsol
    console.log(antrian);
  }
});

// contoh 2 (jadi for.Each itu tuganya memriksa data di dalam array  satu persatu, dan if else tugasnya yang memutudkan, kalo module itu  aturannya bisa diganti sesuai kebutuhan)
// Misal Pemenang Undian

// deklarasi nilai array, misal pemenang undiannya (misal ada 1.000 lebih)
const peserta = [
  24, 34, 52, 465, 24, 227, 45, 56, 78, 43, 45, 7956, 402, 929.1394,
];

// buat daftar pemenang dulu
const daftarPemenang = [24, 34, 929, 56, 45];

// gunakan metode .forEach() untuk mengecek data array
peserta.forEach(function (nomor) {
  // keputusan da function untuk menentukan pemenang
  if (daftarPemenang.includes(nomor)) {
    console.log(`nomor ${nomor} kamu menang`);
  } else {
    console.log(`nomor ${nomor} kamu belum beruntung`);
  }
});
