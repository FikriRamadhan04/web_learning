// // 1. Pengenalan Function Di Javascipt

// let LemparDadu = Math.floor(Math.random() * 6) + 1;
// console.log(LemparDadu);

// lemparDadu = console.log(lemparDadu);

// function lemparDadu() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// 2. Mendefinisikan Dan Menjalankan Function
// function nyanyi() {
// Tubuh fungsi: berisi perintah yang akan dijalankan (MENDIFINISIKAN FUNGSI)
//   console.log("Cek...");
//   console.log("Do RE MI...");
// }

// Pemanggilan fungsi: Tanpa baris ini, kode di dalam fungsi tidak akan pernah jalan (MEMANGGIL/MENJALANKAN FUNGSI)
// nyanyi();

// MENDIFINISIKAN FUNGSI
// function absensi() {
//   console.log("Absen 1");
//   console.log("Absen 2");
//   console.log("Absen 3");
// }

// MEMANGGIL/MENJALANKAN FUNGSI
// absensi();

// 3. Argument Dan Parameter Dalam Function

// name = Parameter;
// Jason = Argument;

// Contoh 1
// Deklarasi Fungsi dengan Parameter
// function greet(name) {
// Menggunakan Template Literals (tanda backtick `` dan ${})
//   console.log(`Hi How Are You, ${name} ?`);
// }

// Pemanggilan Fungsi dengan Argumen
// greet("Jason");

// Contoh 2
// function selamatPagi(name) {
//   console.log(`Hai, Selamat pagi ${name}  ?`);
// }

// selamatPagi("Kane");

// 4. Multiple Parameter dan Argument
// contoh 1
// Membuat fungsi bernama 'jumlahkan' dengan input a dan b
// function jumlahkan(a, b) {
// Proses: mengalikan a dan b, lalu simpan di variabel 'total'
// const total = a * b;

// Output: cetak hasil 'total' ke layar
//   console.log(total);
// }

// Eksekusi: jalankan fungsi dengan angka 1 dan 2
// jumlahkan(1, 2);

// contoh 2
// function jumlahkan2(a, b, c) {
//   const total = a * b + c;
//   console.log(total);
// }
// jumlahkan2(10, 5, 3);

// 5. Statement Return Pada Function
// contoh 1
// Mendefinisikan fungsi bernama 'jumlahkan'
// a = 1 dan b = 2 adalah nilai default jika kita tidak memasukkan angka saat memanggil fungsi
// function jumlahkan(a, b) {
//VALIDASI: Cek apakah input 'a' atau 'b' bukan tipe data angka (number)
//   if (typeof a !== "number" || typeof b !== "number") {
// Jika ada yang bukan angka, fungsi berhenti di sini dan mengirim pesan error
//     return "bukan angka";
//   }

//PROSES: Jika lolos validasi, maka variabel 'total' dibuat untuk menyimpan hasil
//   let total = a + b;

//OUTPUT: Mengirimkan hasil akhir penjumlahan keluar dari fungsi
//   return total;
// }

// contoh 2
// function hitung(x, y, z) {
//   if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
//     return "bukan angka";
//   }
//   let total = x + y + z;
//   return total;
// }

// console.log(hitung(10, 10, 10));

// --- CONTOH CARA PENGGUNAAN ---

// Memanggil fungsi dengan angka normal
// console.log(jumlahkan(10, 20)); // Hasil: 30

// Memanggil fungsi tanpa argumen (menggunakan nilai default 1 + 2)
// console.log(jumlahkan()); // Hasil: 3

// Memanggil fungsi dengan input yang salah (string)
// console.log(jumlahkan(5, "5")); // Hasil: "bukan angka"

// 6. Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup

// contoh1
// Variabel di bawah ini berada di "Global Scope"
// Artinya, variabel ini bisa diakses dari mana saja di dalam file ini.
// let programming = "JavaScript";

// function typeSafe() {
// Variabel di bawah ini berada di "Local Scope" atau "Function Scope"
// Namanya sama dengan variabel di atas, tapi karena di dalam fungsi,
// JavaScript menganggapnya sebagai variabel yang berbeda (Variable Shadowing).
// let programming = "TypeScript";

// Saat dipanggil di sini, JavaScript akan mengambil variabel yang paling dekat cakupannya,
// yaitu variabel "TypeScript" yang ada di dalam fungsi ini.
//   console.log(programming);
// }

// Memanggil fungsi typeSafe.
// Hasilnya akan mencetak "TypeScript" ke konsol.
// typeSafe();

// Catatan Tambahan:
// Jika kita menjalankan console.log(programming) di luar fungsi ini,
// yang muncul tetap "JavaScript" karena variabel di dalam fungsi tidak mengubah variabel di luar.

// contoh 2
// let makanSiang = "Nasi Padang";

// function lapar() {
//   let makanSiang = "Nasi Goreng";
//   console.log(makanSiang);
// }
// lapar();
// console.log(makanSiang);

// 7. Blocked Scope Variabel
// Deklarasi variabel 'tinggi' menggunakan 'let' (Block Scope)
// let tinggi = 8;

// if (tinggi > 5) {
// 'lebar' dideklarasikan di dalam blok IF menggunakan 'let'
// Variabel ini HANYA bisa diakses di dalam kurung kurawal ini {}
//   let lebar = 10;
//   console.log(lebar); // Output: 10
// }

// Baris di bawah ini akan error jika kamu mencoba console.log(lebar)
// karena 'lebar' tidak dikenal di luar blok IF.

// console.log(tinggi); // Output: 8 (Tinggi bisa diakses karena berada di scope global/luar)

// contoh 2
let tinggi = 10;
let lebar;
if (tinggi > 7) {
  let lebar = 100;
  console.log(lebar);
}
console.log(tinggi);
console.log("Ini lebar diluar block: " + lebar);

// Perulangan FOR
for (let index = 0; index < 10; index++) {
  // 'indexNumber' dideklarasikan dengan 'const' di dalam blok FOR
  const indexNumber = index;
  console.log(indexNumber); // Output: 0 sampai 9
}

// ERROR DI SINI:
// console.log(indexNumber);
// Penjelasan: 'indexNumber' dideklarasikan di dalam blok perulangan.
// Begitu keluar dari loop, variabel tersebut "mati" atau tidak terdefinisi.

// ---------------------------------------------------------

// CATATAN PENTING:
// Jika kamu menjalankan ulang "let tinggi = 8;" di file yang sama,
// JavaScript akan mengeluarkan error "Identifier 'tinggi' has already been declared".

if (tinggi > 5) {
  // Menggunakan 'var' (Function/Global Scope)
  // Berbeda dengan 'let', 'var' TIDAK peduli dengan blok IF.
  var lebarBaru = 10;
  console.log(lebarBaru); // Output: 10
}

// Karena menggunakan 'var', variabel ini tetap bisa diakses di luar blok IF:
console.log(lebarBaru); // Output: 10 (Tidak error)

// 8. console.log(lebar);

// Lexical Scope

function lamarKerja() {
  const jabatan = "programmer";

  function orangDalam() {
    let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
    console.log(kenalan);
  }

  orangDalam();
}

function hargaBarang() {
  const roti = 20000;

  function membeli() {
    let keterangan = `Harga Roti Ini Sebesar ${roti}`;
    console.log(keterangan);
  }

  membeli();
}

// 9. Function Expressions
function perpangkatan(nilai) {
  return nilai * nilai;
}

let hasil = perpangkatan(5);

// Function Expressions
const hasilPerpangkatan = function (nilai, pembanding) {
  return nilai * pembanding;
};

// 10. Function Sebagai Argument Function Lain
function enamKali(func) {
  func();
  func();
  func();
  func();
  func();
  func();
}

function lemparDadu() {
  const hasil = Math.floor(Math.random() * 6) + 1;
  console.log(hasil);
}

// 11. Function Bernilai Balik Function
function hasilnyaAdalahFunction() {
  const rand = Math.random();
  if (rand > 0.1) {
    return function () {
      console.log("Selamat, angkanya lebih besar");
    };
  } else {
    return function () {
      console.log("Maaf , mungkin bisa coba lagi");
    };
  }
}
const result = hasilnyaAdalahFunction();
// result();
// hasil();

// 12. Definisi Sebuah Method
function myFun() {
  // Function biasa
  console.log("Hi");
  return "Hello";
}

const myMath = {
  // Object
  perkalian: function (x, y) {
    // Method
    return x * y;
  },
};

// 13. This Adalah Keyword Sakti
// const saya = {
//   nama: "fikri",
//   hobi: "Mancing Keributan",
//   kenalan: function () {
//     return `saya ${this.nama}. hobi saya ${this.hobi}`;
//   },
// };

// 13.Try And Catch adalah Penyelamat
// function teriak(msg) {
//   try {
//     console.log(msg.toUpperCase());
//   } catch (error) {
//     console.log("error!!");
//     console.log("Silahkan masukkan tipe data string pada argument teriak()");
//   }
// }
