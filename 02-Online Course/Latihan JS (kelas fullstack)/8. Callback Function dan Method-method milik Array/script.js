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
// const keranjangBelanja = ["sepatu", "buku", "sepeda"];

// keranjangBelanja.forEach((barang, index) => {
//   console.log(`${index + 1}. produk: ${barang}`);
// });
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

// - Settimeout = menunggu proses setiap waktu yang ditentukan

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
//   console.log("saya fikri ramadhan...");

//   await tunggu2(3000);
//   console.log("berasal...");

//   await tunggu2(3000);
//   console.log("dari Indonesia...");
// }

// kenalan2();

// - setinterval = mengulang proses setiap waktu yang ditentukan
// contoh 1
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

// mencari angka genap, dengan sisa bagi-nya 0
// const angkaGenap = angka2.filter((n) => {
//   return n % 2 === 0; // Memeriksa apakah sisa baginya 0
// });

// mencari angka ganjil, dengan sisa bagi-nya 1
// const angka3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const angkaGanjil = angka3.filter((n) => {
//   return n % 2 === 1; // Memeriksa apakah sisa baginya 1
// });

// Menggunakan Arrow Function yang Lebih Ringkas (Shorthand)
// const angka4 = [5, 10, 15, 20, 36, 37, 38, 40];
// const angkagenap2 = angka4.filter((n) => n % 2 === 0);

// Contoh Visualisasi Program To-Do List (filter + arrow)
const listTugas = [
  { id: 1, tugas: "Olahraga", selesai: true },
  { id: 2, Tugas: "Belajar", selesai: false },
  { id: 3, Tugas: "Makan", selesai: true },
];

const tugasPending = listTugas.filter((item) => item.selesai === false);

// studi kasus mencari daftar anime rating di atas 85 dengan filter
const anime = [
  { id: 1, title: "Naruto", rating: 90, year: 2011 },
  { id: 2, title: "Hunter x Hunter", rating: 88, year: 2011 },
  { id: 3, title: "Boruto", rating: 85, year: 2017 },
  { id: 4, title: "Dragon Ball", rating: 87, year: 2004 },
];

// const animeBagus = anime.filter((anime) => anime.rating >= 85);
const animeBagus = anime
  .filter((item) => item.rating > 85)
  .map((item) => item.title);

const makanan = [
  { id: 1, nama: "Nasi Goreng", rating: 10 },
  { id: 2, nama: "ketoprak", rating: 8 },
  { id: 3, nama: "Soto Betawi", rating: 9 },
  { id: 4, nama: "Mie Ayam", rating: 7 },
  { id: 5, nama: "bakso", rating: 6 },
  { id: 6, nama: "gorengan", rating: 5 },
  { id: 7, nama: "batagor", rating: 4 },
];

// di filter
// const makananFavorit = makanan.filter((item) => item.rating >= 7);
// di mapping
// const namaMakananenak = makananFavorit.map((item) => item.nama);
// dalam satu syntak
const makananFavorit = makanan
  .filter((item) => item.rating >= 7)
  .map((item) => item.nama);

// 7. Menentukan Benar Atau Salah Pada Array Dengan Every Dan Some Method

// Every (Semua elemen harus lolos kondisi - "Apakah semua siswa lulus KKM?")
const examScore = [77, 78, 89, 90, 100, 99];
const isGraduate = examScore.every((score) => score >= 75);

// Every di dalam form login
// 1 every
const inputs = [
  { field: "username", isValid: true },
  { filed: "Email", isValid: true },
  { filed: "password", isValid: false },
];

const isFromValid = inputs.every((input) => input.isValid); // hasil false - karena salah satu kondisi tidka lolos (harus loos smeua)

// 2 every
const inputs2 = [
  { field: "username", isValid: true },
  { filed: "Email", isValid: true },
  { filed: "password", isValid: true },
];

const isFromValid2 = inputs2.every((input2) => input2.isValid); // hasil true - karena semua kondisi lolos

// Some (Minimal satu elemen lolos kondisi - kondisi.	"Apakah ada minimal satu anime rilisan minimal di aats tahun 2011")
// 1 some
const animes = [
  { id: 1, title: "Naruto", rating: 90, year: 2011 },
  { id: 2, title: "Hunter x Hunter", rating: 88, year: 2011 },
  { id: 3, title: "Boruto", rating: 85, year: 2017 },
  { id: 4, title: "Dragon Ball", rating: 87, year: 2004 },
];

const isAnimeListNew = animes.some((anime) => anime.year > 2011); //hasil true - karena salah satu kondisi lolos

// 8. Mendapatkan Satu Nilai Sesuai Kondisi Dari Sebuah Array Dengan Reduce
// contoh 1 menjumlahkan semua angka di dalam array examScore2
// total2 (disebut juga accumulator): Ini adalah variabel penampung yang menyimpan hasil penjumlahan sementara dari elemen-elemen sebelumnya.
// score2 (disebut juga current value): Ini adalah elemen array yang sedang diproses saat itu (berjalan bergantian dari index pertama sampai terakhir).
const examScore2 = [77, 78, 89, 90, 100, 99];
const total2 = examScore2.reduce((total2, score2) => {
  return total2 + score2;
});
console.log(total2);

const examScore3 = [75, 80, 90, 60, 100, 85, 88];
const total3 = examScore3.reduce((total3, jumlah) => {
  return total3 + jumlah;
});
console.log(total3);

// contoh 2
const animes2 = [
  { id: 3, title: "Boruto", rating: 85, year: 2017 },
  { id: 4, title: "Dragon Ball", rating: 87, year: 2004 },
  { id: 2, title: "Hunter x Hunter", rating: 88, year: 2011 },
  { id: 1, title: "Naruto", rating: 90, year: 2011 },
];

// currAnime = Mewakili data anime yang sedang diperiksa saat ini.(data yang sedang di proses) - parameter 1
// bestAnime = Mewakili data anime dengan rating tertinggi yang ditemukan sejauh ini.(menyimpan hasil sementara) - parameter 2
const bestAnime = animes2.reduce((currAnime, bestAnime) => {
  if (currAnime.rating > bestAnime.rating) {
    return currAnime;
  }
  return bestAnime;
});

console.log(bestAnime);

// 9. Object this di dalam arrow function
// kalau menggunakan reguler function
const person = {
  firstName: "Romo",
  lastName: "Satya",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName());
// kalau menggunakan arrow function
// const person = {
//   firstName: "Romo",
//   lastName: "Satya",
//   fullName: () => {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(person.fullName()); //output akan undefined

//10. Mengatur default value pada function
// contoh 1
function lemparDadu(sisi = 6) {
  return Math.floor(Math.random() * sisi) + 1;
}

// contoh 2
function sapa(name = "User", msg = "Selamat Bekerja....!") {
  console.log(`${name} ${msg}`);
}

// 11. Mengubah array atau value object menjadi deret value argument function
const angka5 = [1, 2, 3, 4, 5];
// Math.max(angka5);
// Math.min(angka5);
console.log(...angka5);
console.log(Math.max(...angka5));

// 12. Menggabungkan nilai array dengan array lagi
const angka6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nama = ["Joseph", "Andrew", "Asep", "Budi", "Jesica", "Dwi"];

const campuran1 = [...angka6, ...nama];
console.log(campuran1);

const campuran2 = [...nama, ...angka6];
console.log(campuran2);

// 13. Menggabungkan property objek dengan objek lainnya
// contoh 1
const user = {
  nama: "jhon",
  email: "jhoncena@gmail.com",
};

const userBaru = { ...user, id: 123, password: "password" };
console.log(user);
console.log(userBaru);

// contoh 2
const credential = {
  password: "298476328",
  token: "83r5n3rt88",
};

const userBaru2 = { ...user, ...credential };
console.log(userBaru2);

// contoh 3
const user2 = {
  nama: "Fikri",
  kelas: "05SISE002",
};

const credential2 = {
  id: "017",
  token: "nf39t349",
};

userBaru3 = { ...user2, ...credential2 };
console.log(userBaru3);

// 14.Menggunakan Rest Parameter (untuk parameter yang banyak atau tak terhingga)
// contoh 1
const sumAll = (...nums) => {
  return nums.reduce((total, el) => total + el);
};

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 10, 20)); // dia akan menambahkan dari awal hinggal akhir

// contoh 2
const nama2 = ["Joseph", "Andrew", "Asep", "Budi", "Jessica", "Dwi"];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//   console.log(`Medali emas diraih: ${gold}`);
//   console.log(`Medali perak diraih: ${silver}`);
//   console.log(`Medali bronze diraih: ${bronze}`);
//   console.log(`Peserta lainnya: ${sisa}`);
// };

// console.log(pemenang(...nama2));

// 15. DESTRUCTING - Bongkar Element Array ke Masing-masing Variabel dengan Mudah
const nama3 = ["Joseph", "Andrew", "Asep", "Budi", "Jessica", "Dwi"];
const [gold, silver, bronze, ...peserta2] = nama2;

// 16. Bogkar Properti Object Ke Masing-masing Variabel
const user5 = {
  name: "jhon",
  email: "jhon@dose.com",
};

const { name: nama6, email, phone=29494579 } = user;
