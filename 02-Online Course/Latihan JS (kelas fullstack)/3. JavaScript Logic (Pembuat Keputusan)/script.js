// 1. Operator Pembanding
console.log(1 > 3);
console.log(1 < 3);
console.log(-1 > 1);
console.log(-1 > -1);
console.log(-1 <= -1);
console.log(-1 >= -1);

console.log("a" > "A");

let age = 21;

console.log(age > 6);
console.log(age > 25);

// 2. Kejanggalan == (equals)
console.log(5 == 5);
console.log("b" == "c");
console.log(7 == "7");
console.log(0 == "");
console.log(true == false);

console.log(0 == false);
console.log(null == undefined);

// tips
console.log(5 === 5);
console.log(1 === 2);
console.log(7 === "7");
console.log(0 === false);

console.log(10 != "10");
console.log(10 !== "10");

// 3. Console Alert & Prompt
// console.error("This is error message");
// alert("This is error message");
// prompt("input your number!");

// 4.if statement
// console.log("Sebelum pembanding");
// if (1 + 1 == 2) {
//   console.log("Di dalam pembanding");
// }

// console.log("Setelah pembanding");

// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//   console.log("angka lebih besar dari 0.5");
// }

// if (angka <= 0.5) {
//   console.log("angka lebih kecil dari 0.5");
// }

// 5.Else if Statement
// const iniHari = "Senin";
// const iniHari = prompt("Isikan hari!").toLowerCase();

// if (iniHari === "senin") {
//   console.log("Selamat bekerja kawan");
// } else if (iniHari === "selasa") {
//   console.log("Yah biasa saja");
// } else if (iniHari === "rabu") {
//   console.log("Yah biasa saja");
// } else if (iniHari === "kamis") {
//   console.log("Yah biasa saja");
// } else if (iniHari === "jum'at") {
//   console.log("Yah biasa saja");
// } else if (iniHari === "sabtu") {
//   s;
//   console.log("jangan cepat berlalu");
// } else if (iniHari === "minggu") {
//   console.log("jangan cepat berlalu");
// } else {
//   console.log("jawaban salah");
// }

// const nilai = 80;

// if (nilai < 50) {
//   console.log("E");
// } else if (nilai < 60) {
//   console.log("D");
// } else if (nilai < 70) {
//   console.log("C");
// } else if (nilai < 80) {
//   console.log("B");
// } else if (nilai < 100) {
//   console.log("A");
// }

// 5. Nested if (if di dalam if)
// const password1 = prompt("buat password");

// Password harus sepanjang 6 karakter & tidak boleh ada spasi
// if (password  >= 6) {
//   if (password1.indexOf(" ") === -1) {
//     console.log("password valid");
//   } else {
//     console.log("password tidak boleh ada spasi");
//   }
// } else {
//   console.log("Password minimal 6 karakter");
// }

// versi guard clauses
// function password2() {
//   const password2 = prompt("buat password");

//   if (password2.length < 6) {
//     console.log("Eror:Minimal 6 krakter");
//     return; //berhenti disini
//   }

//   if (password2.includes(" ")) {
//     console.log("Eror: Tidak boleh ada spasi");
//     return; //berhenti disini
//   }

//   // Jika lolos semua cek di atas, baru eksekusi kode utama
//   console.log("Sukses: Password kamu valid!");
// }
// password2();

// 6.Operator Logic And
// const password3 = prompt("buat password");

// if (password3.length >= 6 && password3.indexOf(" ") === -1) {
//   console.log("Password Valid");
// } else {
//   console.log("Password tidak valid");
// }

// Opeartor logic or
// const role = prompt("Masukan Role Akun");

// if (role == "Admin" || role == "spv") {
//   console.log("Boleh Mengakses");
// } else {
//   console.log("Akses Ditolak");
// }

// Opeartor logic not
// const role = prompt("Masukan Role Akun");

// if (role !== "Admin")
//   if (role !== "Member") {
//     console.log("Akses Ditolak");
//   } else {
//     console.log("Akses Diterima");
//   }

// switch sebagai alternatif if statement
// const balonku = prompt("masukan warna balon");

// switch (balonku) {
//   case "merah":
//     console.log("warna merah");
//     break;
//   case "hijau":
//     console.log("dooor");
//     break;
//   default:
//     console.log("bukan balonku");
// }

const day = prompt("masukan hari");

switch (day) {
  case "1":
    console.log("senin");
    break;
  case "2":
    console.log("selasa");
    break;
  case "3":
    console.log("rabu");
    break;
  case "4":
    console.log("kamis");
    break;
  case "5":
    console.log("jum'at");
    break;
  case "6":
    console.log("sabtu");
    break;
  case "7":
    console.log("Minggu");
    break;
  default:
    console.log("tidak ada");
}
