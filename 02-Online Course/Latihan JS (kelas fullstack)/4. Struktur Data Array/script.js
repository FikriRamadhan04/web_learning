// 1. mengenal Struktur Data Array
let movie = [
  "6 underground",
  "the dark tower",
  "jujutsu kaisen",
  "Extraction",
  "The Gray Man",
];

let angka = [1, 2, 3, 4, 5, 6];

let campuran = ["laptop", 1, true, null];

// 2. Mendapatkan Nilai Dengan Index Dan Mengubah Isinya
let warna = ["hijau", "kuning", "kelab", "bu"];

warna[2] = "kelabu";
warna[3] = "merah muda";
warna[0] = 1;
warna[9] = "biru";
warna[4] = "hijau";

console.log(warna[2]);
console.log(warna[3]);
console.log(warna[0]);
console.log(warna[9]);
console.log(warna);

// 3.Method Array Push & Pop

// push menambahkan item pada akhir array
let barbel = [30, 25];

barbel.push(20);
barbel.push(15);
barbel.push(10);
barbel.push(5);
barbel.push(2.5);

console.log(barbel);

// pop menghapus item dari paling akhir array
barbel.pop();
barbel.pop();
barbel.pop();
barbel.pop();

console.log(barbel);

// 4.Method Array Unshift Dan Shift

//unshift menambahkan item pada pada awal array
let student = ["Berry", "Charlie ", "Densen", "Edwin"];

student.unshift("Andrew");
student.unshift("Alex");

console.log(student);

//shift menghapus item dari paling awal array
student.shift();

console.log(student);

// 5.Splice
const months = ["Jan", "march", "April", "Jun"];

months.splice(1, 0, "feb");
console.log(months);

months.splice(4, 1, "May");
console.log(months);
