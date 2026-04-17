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

function jumlahkan(a = 3, b = 3) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "bukan angka";
  }

  return a + b;
}

// 6. Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup
let programming = "JavaScript";

function typsafe() {
  let programming = "TypeScript";

  console.log(programming);
}

typsafe();
