// 1. Mengenal Tipe Data String
// string menggunakan double quote" atau single quote'
// contoh : "hakim" atau 'hakim'
// kedua haru sama, jangan double & single di gunakan keduanya
// string = "20"
// number = 20
// studi kasus pengucapan selamat yang ada quote
// "saya mengucapakan 'selamat'" (pembungkus double quote dan 'selamat' harus single quote) begitu sebaliknya

console.log(20);

console.log("saya mengucapkan 'selamat");
console.log('saya mengucapkan "selamat"');

// Method

// 1. Mengenal Index dalam string dan panjang karakter
// nilai index dalam string dimulai dari 0 ( jadi misal: hakim: h=0, a=1,k=2 i=4, m=4)
let nama = "steven";

console.log(nama[0]);
console.log(nama[1]);
console.log(nama[2]);
console.log(nama[3]);
console.log(nama[4]);
console.log(nama[5]);

console.log((nama = nama + " gerard"));
console.log(nama.length);

console.log(nama[8]);

// study case - input nama
let namaDepan = "gojo";
let namaBelakang = "satorou";

console.log((namaLengkap = namaDepan + " " + namaBelakang));
// number jika di tambahkan ke string akan menjadi string
console.log((namaLengkap += 1));

// 2. Method
let greeting = "hello world";

console.log(greeting.toUpperCase());
console.log("hello world".toLowerCase());

console.log("Leave mE Alone".toLowerCase());

console.log(" hello world".trim());
console.log(" hello world".trim().toUpperCase());

console.log(greeting.indexOf("world"));
console.log(greeting.slice(0, 5));
console.log(greeting.slice(5));
console.log(greeting.slice(6, 11));

console.log(greeting.replace("world", "there"));

let name = "Steven";
let age = "30";
let status = "single";

// cara manual
console.log(
  greeting.replace("world", "there") +
    " " +
    "Nama saya " +
    name +
    " " +
    "Umur saya " +
    age +
    " " +
    "Status saya " +
    status,
);

// menggunakan template literals
console.log(
  `${greeting.replace("world", "there")} Nama saya ${name} Umur saya ${age} Status saya ${status}`,
);

// 3. Mengenal Null dan Undefined
console.log(null);
console.log(undefined);

let wadah;
console.log(wadah);
console.log(typeof wadah);

wadah = null;
console.log(wadah);
console.log(typeof wadah);

// 4. Mengenal Object dan angka Acak
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-123));
console.log(Math.floor(5.9));
console.log(Math.round(5.9));
console.log(Math);
