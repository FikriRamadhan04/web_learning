// 1. Deklarasi Variabel & Operasi Aritmatika
const tahunMerdeka = 1945;
let tahunSekarang = 2026;
let selisihTahun = tahunSekarang - tahunMerdeka;

console.log("Selisih Tahun:", selisihTahun); // Output: 81

// 2. Update Nilai Variabel (score)
let score = 0;

// Update Cara 1: Manual
score = score + 1; // score jadi 1
score = score + 1; // score jadi 2
console.log("Score Cara 1:", score);

// Update Cara 2: Assignment Operators (Lebih singkat)
score += 10; // Tambah 10
score *= 2; // Kali 2
score -= 10; // Kurang 10
score /= 2; // Bagi 2
console.log("Score Cara 2:", score);

// Update Cara 3: Increment & Decrement (Tambah/Kurang 1)
score++; // Tambah 1
score--; // Kurang 1
console.log("Score Akhir:", score);

// 3. Perbedaan let dan const
// Menggunakan let (Bisa di-reassign)
let ayam = 10;
ayam = 20;
console.log("Jumlah ayam:", ayam);

// Menggunakan const (Tidak bisa di-reassign)
const tanggalLahir = 19;
// tanggalLahir = 20; // Ini akan menyebabkan Error!
console.log("Tanggal lahir:", tanggalLahir);

// 4. Mengenal Tipe Data Dasar
let nama = "Budi"; // String (Teks)
let umur = 25; // Number (Angka)
let apakahSehat = true; // Boolean (True/False)
let daftarBelanja = []; // Array (List)
let dataUser = {}; // Object

// 5 Tipe Data Boolean
let angka = 20;

console.log(angka < 1);
console.log(angka > 10);

// 6.Tips Memberikan Nama Variabel  (jangan angka,jangan singkat,mudah dipahami sendiri & orang lain)

// Camel Case
let namaLengkap = "Camel Case";

// Pascal Case
let Namalengkap = "Pascal Case";

// Snake Case
let nama_lengkap = "Snake Case";

// simbol
let $variable = "simbol";
