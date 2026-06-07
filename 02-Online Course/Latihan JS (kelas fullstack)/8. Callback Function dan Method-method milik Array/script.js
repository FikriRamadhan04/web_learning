//  1. Foreach Method
// digunakan untuk melakukan sesuatu dengan setiap elemen di dalam array , tanpa menghasilkan array baru.

// - Inisialisasi array bernama 'angka' yang berisi sekumpulan data integer
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// - Memanggil metode .forEach() pada array 'angka'
// - Fungsi di dalam forEach akan dijalankan satu kali untuk setiap elemen di dalam array
angka.forEach(function (antrian) {
  // - Kondisi Logika: Mengecek apakah elemen (antrian) saat ini adalah angka genap
  // - Operator % (modulo) mencari sisa bagi. Jika dibagi 2 sisanya 0, maka genap.
  if (antrian % 2 === 0) {
    // -  Jika kondisi benar (True), cetak elemen tersebut ke konsol
    console.log(antrian);
  }
});

// contoh 2 (jadi for.Each itu tuganya memeriksa data di dalam array  satu persatu, dan if else tugasnya yang memutuskan, kalo module itu  aturannya bisa diganti sesuai kebutuhan)
// Misal Pemenang Undian

// deklarasi nilai array, misal pemenang undiannya (misal ada 1.000 lebih)
const peserta = [
  24, 34, 52, 465, 24, 227, 45, 56, 78, 43, 45, 7956, 402, 929.1394,
];

// buat daftar pemenang dulu
const daftarPemenang = [24, 34, 929, 56, 45];

// gunakan metode .forEach() untuk mengecek data array
peserta.forEach(function (nomor) {
  // keputusan dan function untuk menentukan pemenang
  if (daftarPemenang.includes(nomor)) {
    console.log(`nomor ${nomor} kamu menang`);
  } else {
    console.log(`nomor ${nomor} kamu belum beruntung`);
  }
});

// contoh 2 (menampikan daftar barang)
const keranjangBelanja = ["sepatu", "buku", "sepeda"];

keranjangBelanja.forEach((barang, index) => {
  console.log(`${index + 1}. produk: ${barang}`);
});
// 2. Map Method
// map() digunakan untuk membuat array baru dengan mengubah setiap elemen dari array lama tanpa merusak data aslinya.
// Kamu punya daftar nama, lalu kamu ingin mengubah semuanya jadi huruf kapital untuk disimpan di daftar baru.

// - Inisialisasi Array
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// - Proses Mapping
// - const angkaDouble: Menyiapkan variabel baru untuk menampung hasil akhir dari proses map.
// - angka.map(...): Memanggil metode .map() pada array angka.
// - function (num): Ini adalah callback function. JavaScript akan menjalankan fungsi ini sebanyak 9 kali (sesuai jumlah isi array). Setiap kali jalan, satu angka dari array dimasukkan ke dalam parameter num.
// - return num * 2: Inilah instruksi perubahannya. Setiap angka yang masuk (num) akan dikali 2, lalu hasilnya "dikembalikan" untuk disusun ke dalam array baru.
// const angkaDouble = angka.map(function (num) {
//   return num * 2;
// });
// console.log(angka);
// console.log(angkaDouble);

// 3. Arrow Function

// function biasa
const harga = [10000, 20000, 30000, 40000, 50000, 60000];

const murah = harga.filter(function (item) {
  return item < 40000;
});

console.log(murah);

// arrow function
const harga2 = [100000, 200000, 300000, 400000, 600000];

const murah2 = harga2.filter((item) => item > 300000);
console.log(murah2);

// arrow filter & map
const harga3 = [10, 20, 30, 40, 50, 60, 70];

const murah3 = harga3
  .filter((item) => item > 40)
  .map((item) => item * Math.random);
console.log(murah3);

const nomor = [1, 2, 3, 4, 5, 7, 8, 9, 10];

const total = nomor
  .filter((nomor) => nomor < 7)
  .map((item) => item * 7 - 2 * 2);
console.log(total);

// 4. Return Secara Implisit Dari arrow Function

// Menggunakan Fungsi Biasa (Explicit)
const kuadrat = function (x, y) {
  return x * y;
};

console.log(kuadrat(4, 2));

// Menggunakan Arrow Function Standar (Explicit)
const kuadrat2 = (x, y) => {
  return x * y;
};
console.log(kuadrat2(3, 2));

// Menggunakan Arrow Function (Implicit Return)
const bilanganBulat = (x, y) => x + y;
console.log(bilanganBulat(7, 7));

// Hubungannya dengan Method Array (Callback)
// Kasus: Mengalikan semua angka di dalam array dengan 2

// Pendekatan Tradisional Explicit Return (.map + arrow back + explisit return)
const diskon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dikaliDua = diskon.map((num) => {
  return num * 2;
});
console.log(dikaliDua);

// Pendekatan Tradisional Implisit Return (.map + arrow back + explisit return)
const diskonDua = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dikaliTujuh = diskonDua.map((num) => num * 3);
console.log(dikaliTujuh);

//  5. Memahami Settimeout Dan Setinterval

// Settimeout = menunggu proses setiap waktu yang ditentukan

// contoh 1
// console.log("Halo...");

// setTimeout(() => {
//   console.log("Masih disana enggak ?...");
// }, 5000);

// console.log("saya pergi ya..");

// contoh 2 - Menggunakan promise dan async/await.
// JavaScript dipaksa untuk benar-benar berhenti dan menunggu baris tersebut selesai, baru boleh lanjut ke baris berikutnya.

// Membuat Fungsi "Tukang Nunggu"
// ms: Adalah durasi waktu dalam milidetik yang kita kirim (misal 3000).
// new Promise(...): Kita membuat "perjanjian" dengan JavaScript.
// resolve: Ini adalah tombol saklar yang memberi tahu JavaScript, bahwa program 1 sudah selesai lanjut program lain.
// Jadi, fungsi ini intinya bilang: "Tunggu selama ms milidetik, kalau sudah selesai, pencet tombol resolve ya."
// const tunggu = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// // Menjalankan Fungsi Secara Berurutan
// // Agar kita bisa menggunakan kata kunci await (tunggu), fungsinya harus diawali dengan kata kunci async.
// async function kenalan() {
//   console.log("Saya...");

//   await tunggu(3000); // Nunggu 3 detik
//   console.log("Fikri Ramdhan...");

//   await tunggu(3000); // Nunggu 3 detik lagi setelah Fikri muncul
//   console.log("Dari...");

//   await tunggu(3000); // Nunggu 3 detik lagi setelah Dari muncul
//   console.log("Indonesia...");
// }

// kenalan();

// const tunggu2 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function kenalan2() {
//   console.log("Halo...");

//   await tunggu2(3000);
//   console.log("Saya...");

//   await tunggu2(3000);
//   console.log("Fikri Ramadhan...");

//   await tunggu2(3000);
//   console.log("Yes...");
// }

// kenalan2();

// setinterval = mengulang proses setiap waktu yang ditentukan
// contoh 1
// const hitung = setInterval(() => {
//   console.log(Math.random());
// }, 3000);

// const hitung = setInterval(() => {
//   console.log(Math.random());
// }, 3000);

// contoh 2 - Membuat Countdown Timer (waktu hitung mundur)
// Tentukan waktu mulai (dalam detik)
// let detikTersisa = 1;

// console.log("=== COUNTDOWN DIMULAI ===");
// console.log(`Waktu awal: ${detikTersisa} detik`);

// Jalankan setInterval dan simpan ke dalam variabel 'timer'
// const timer = setInterval(() => {
// Kurangi waktu sebanyak 1 detik setiap kali fungsi ini berjalan
// detikTersisa--;

// Tampilkan sisa waktu saat ini ke console
// console.log(`Sisa waktu: ${detikTersisa} detik...`);

// Cek apakah waktu sudah habis (menyentuh angka 0)
// if (detikTersisa === 0) {
//   console.log("⏱️ BUMMM! Waktu habis!");

// WAJIB: Hentikan setInterval agar tidak berjalan terus di latar belakang
//     clearInterval(timer);
//     console.log("=== TIMER BERHENTI ===");
//   }
// }, 1000); // 1000 milidetik = 1 detik

//  6. Memilih Data Tertentu Di Dalam Array Dengan Filter Method
const angka2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const angkaGanjil = angka2.filter((n) => {
  return n % 2 === 0;
});
