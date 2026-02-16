/**
 * BELAJAR DASAR JAVASCRIPT: STRING, METHODS, & MATH
 */

// ==========================================
// 1. TIPE DATA STRING
// ==========================================

// String bisa menggunakan double quote "" atau single quote ''
// Aturan: Pembuka dan penutup harus sama (konsisten)
console.log("--- Bagian 1: String Basics ---");

console.log(20); // Tipe data Number
console.log("20"); // Tipe data String

// Studi kasus: Menggunakan tanda petik di dalam teks (Nested Quotes)
// Jika di dalam teks ada 'single quote', bungkus dengan "double quote"
console.log("Saya mengucapkan 'selamat'");
console.log('Saya mengucapkan "selamat"');

// ==========================================
// 2. INDEX & MANIPULASI STRING
// ==========================================
console.log("\n--- Bagian 2: Index & Length ---");

// Index dimulai dari 0. Contoh "steven": s=0, t=1, e=2, v=3, e=4, n=5
let nama = "steven";

console.log(nama[0]); // s
console.log(nama[2]); // e

// Menggabungkan string (Concatenation)
nama = nama + " gerard";
console.log(nama); // "steven gerard"
console.log(nama.length); // Menghitung total karakter (termasuk spasi)
console.log(nama[8]); // Karakter pada index ke-8 (huruf 'e' dari gerard)

// Studi kasus: Input Nama
let namaDepan = "gojo";
let namaBelakang = "satorou";
let namaLengkap = namaDepan + " " + namaBelakang;

console.log(namaLengkap);

// Unik: Jika Number ditambahkan ke String, hasilnya akan menjadi String
namaLengkap += 1;
console.log(namaLengkap); // "gojo satorou1"

// ==========================================
// 3. STRING METHODS
// ==========================================
console.log("\n--- Bagian 3: String Methods ---");

let greeting = "hello world";

console.log(greeting.toUpperCase()); // "HELLO WORLD"
console.log("Leave mE Alone".toLowerCase()); // "leave me alone"

// Method Trimming (menghapus spasi di awal/akhir)
console.log("  hello world  ".trim());
console.log("  hello world  ".trim().toUpperCase()); // Chaining method

// Method Search & Slice
console.log(greeting.indexOf("world")); // Mencari posisi kata (index ke-6)
console.log(greeting.slice(0, 5)); // Mengambil "hello" (index 0 sampai sebelum 5)
console.log(greeting.slice(6)); // Mengambil dari index 6 sampai habis ("world")

// Method Replace
console.log(greeting.replace("world", "there")); // "hello there"

// ==========================================
// 4. TEMPLATE LITERALS (Cara Modern)
// ==========================================
console.log("\n--- Bagian 4: Template Literals ---");

let myName = "Steven";
let age = "30";
let status = "single";

// Cara lama (Ribet dengan tanda +)
let manual =
  greeting.replace("world", "there") + " Nama saya " + myName + " Umur " + age;
console.log(manual);

// Cara Modern (Gunakan backtick ` dan ${})
let modern = `${greeting.replace("world", "there")}, Nama saya ${myName}. Umur saya ${age}, status ${status}.`;
console.log(modern);

// ==========================================
// 5. NULL & UNDEFINED
// ==========================================
console.log("\n--- Bagian 5: Null & Undefined ---");

let wadah; // Dideklarasikan tapi belum diisi
console.log(wadah); // undefined
console.log(typeof wadah); // "undefined"

wadah = null; // Sengaja dikosongkan
console.log(wadah); // null
console.log(typeof wadah); // "object" (Bawaan JS)

// ==========================================
// 6. MATH OBJECT (Angka & Acak)
// ==========================================
console.log("\n--- Bagian 6: Math Object ---");

console.log(Math.PI); // 3.14159...
console.log(Math.abs(-123)); // 123 (Nilai mutlak/positif)
console.log(Math.floor(5.9)); // 5 (Pembulatan ke bawah)
console.log(Math.round(5.9)); // 6 (Pembulatan terdekat)

// Membuat angka acak (Random)
console.log(Math.random()); // Nilai antara 0 sampai 0.99

// Contoh cara dapet angka acak 1-10:
let angkaAcak = Math.floor(Math.random() * 10) + 1;
console.log("Angka acak 1-10: " + angkaAcak);
