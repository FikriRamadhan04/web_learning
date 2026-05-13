//  1. Foreach Method
// digunakan untuk melakukan sesuatu dengan setiap elemen di dalam array, tanpa menghasilkan array baru.
// Analogi Kamu punya daftar nama, lalu kamu ingin memanggil satu per satu nama tersebut untuk diabsen.

// - Inisialisasi array bernama 'angka' yang berisi sekumpulan data integer
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// - Memanggil metode .forEach() pada array 'angka'
//- Fungsi di dalam forEach akan dijalankan satu kali untuk setiap elemen di dalam array
// angka.forEach(function (antrian) {
// - Kondisi Logika: Mengecek apakah elemen (el) saat ini adalah angka genap
// Operator % (modulo) mencari sisa bagi. Jika dibagi 2 sisanya 0, maka genap.
// if (antrian % 2 === 0) {
// -  Jika kondisi benar (True), cetak elemen tersebut ke konsol
//     console.log(antrian);
//   }
// });

// contoh 2 (jadi for.Each itu tuganya memriksa data di dalam array  satu persatu, dan if else tugasnya yang memutudkan, kalo module itu  aturannya bisa diganti sesuai kebutuhan)
// Misal Pemenang Undian

// deklarasi nilai array, misal pemenang undiannya (misal ada 1.000 lebih)
// const peserta = [
//   24, 34, 52, 465, 24, 227, 45, 56, 78, 43, 45, 7956, 402, 929.1394,
// ];

// buat daftar pemenang dulu
// const daftarPemenang = [24, 34, 929, 56, 45];

// gunakan metode .forEach() untuk mengecek data array
// peserta.forEach(function (nomor) {
// keputusan da function untuk menentukan pemenang
//   if (daftarPemenang.includes(nomor)) {
//     console.log(`nomor ${nomor} kamu menang`);
//   } else {
//     console.log(`nomor ${nomor} kamu belum beruntung`);
//   }
// });

// 2. Map Method
// map() digunakan untuk membuat array baru dengan mengubah setiap elemen dari array lama tanpa merusak data aslinya.
// Kamu punya daftar nama, lalu kamu ingin mengubah semuanya jadi huruf kapital untuk disimpan di daftar baru.

// - Inisialisasi Array
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// - Proses Mapping
// - const angkaDouble: Menyiapkan variabel baru untuk menampung hasil akhir dari proses map.
// - angka.map(...): Memanggil metode .map() pada array angka.
// - function (num): Ini adalah callback function. JavaScript akan menjalankan fungsi ini sebanyak 9 kali (sesuai jumlah isi array). Setiap kali jalan, satu angka dari array dimasukkan ke dalam parameter num.
// - return num * 2: Inilah instruksi perubahannya. Setiap angka yang masuk (num) akan dikali 2, lalu hasilnya "dikembalikan" untuk disusun ke dalam array baru.
const angkaDouble = angka.map(function (num) {
  return num * 2;
});
console.log(angka);
console.log(angkaDouble);
