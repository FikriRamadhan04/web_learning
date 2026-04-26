// 1. Pengenalan Function Di Javascipt

// let LemparDadu = Math.floor(Math.random() * 6) + 1;
// console.log(LemparDadu);

// lemparDadu = console.log(lemparDadu);

// function lemparDadu() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// 2. Mendefinisikan Dan Menjalankan Function
// function nyanyi() {
//   console.log("Cek...");
//   console.log("Do RE MI...");
// }
// nyanyi();

// function absensi() {
//   console.log("Absen 1");
//   console.log("Absen 2");
//   console.log("Absen 3");
// }

// absensi();

// 3. Argument Dan Parameter Dalam Function

// name = Parameter;
// Jason = Argument;

// Contoh 1
// function greet(name) {
//   console.log(`Hi How Are You, ${name} ?`);
// }

// greet("Jason");

// Contoh 2
// function selamatPagi(name) {
//   console.log(`Hai, Selamat pagi ${name}   ?`);
// }

// selamatPagi("Kane");

// 4. Multiple Parameter dan Argument
// function jumlahkan(a, b) {
//   const total = a * b;
//   console.log(total);
// }
// jumlahkan(1, 2);

// 5. Statement Return Pada Function
// function jumlahkan(b = 1, c = 2) {
//   let total = b + c;
//   return total;
// }

// function jumlahkan(a = 3, b = 3) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "bukan angka";
//   }

//   return a + b;
// }

// 6. Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup
// let programming = "JavaScript";

// function typeSafe() {
//   let programming = "TypeScript";

//   console.log(programming);
// }

// typeSafe();

// 7. Blocked Scope Variabel
// let tinggi = 8;

// if (tinggi > 5) {
//   let lebar = 10;
//   // console.log(lebar);
// }

// console.log(tinggi);

// for (let index = 0; index < 10; index++) {
//   const indexNumber = index;
//   console.log(indexNumber);
// }
// console.log(indexNumber);

// let tinggi = 8;

// if (tinggi > 5) {
//   var lebar = 10;
//   console.log(lebar);
// }

// 8. console.log(lebar);

// Lexical Scope

// function lamarKerja() {
//   const jabatan = "programmer";

//   function orangDalam() {
//     let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//     console.log(kenalan);
//   }

//   orangDalam();
// }

// function hargaBarang() {
//   const roti = 20000;

//   function membeli() {
//     let keterangan = `Harga Roti Ini Sebesar ${roti}`;
//     console.log(keterangan);
//   }

//   membeli();
// }

// // 9. Function Expressions
// function perpangkatan(nilai) {
//   return nilai * nilai;
// }

// let hasil = perpangkatan(5);

// // Function Expressions
// const hasilPerpangkatan = function (nilai, pembanding) {
//   return nilai * pembanding;
// };

// // 10. Function Sebagai Argument Function Lain
// function enamKali(func) {
//   func();
//   func();
//   func();
//   func();
//   func();
//   func();
// }

// function lemparDadu() {
//   const hasil = Math.floor(Math.random() * 6) + 1;
//   console.log(hasil);
// }

// // 11. Function Bernilai Balik Function
// function hasilnyaAdalahFunction() {
//   const rand = Math.random();
//   if (rand > 0.1) {
//     return function () {
//       console.log("Selamat, angkanya lebih besar");
//     };
//   } else {
//     return function () {
//       console.log("Maaf , mungkin bisa coba lagi");
//     };
//   }
// }
// const result = hasilnyaAdalahFunction();
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
