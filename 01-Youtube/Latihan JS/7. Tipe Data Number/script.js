// numbers - 64-bit

let nilai_int = 10;
let nilai_float = 10.13;
let nilai_big_int = 123345678965433355n;

console.log(typeof nilai_int); // interger -nilai bilangan bulat
console.log(typeof nilai_float); //float -nilai bilangan desimal
console.log(typeof nilai_big_int);

console.log(nilai_float);
console.log(nilai_float);
console.log(nilai_big_int);

// Menggunakan data ini gimana?
let angka = 5.678;

let angka_int = parseInt(angka);
console.log(angka_int);

let angka_2 = 10.98;

let angka_float = parseFloat(angka_2);
console.log(angka_float);

// Merubah String
let data = "10.98";
console.log(data);
console.log(parseInt(data));
console.log(parseFloat(data) + 10);

// contoh
let pembelian = "10000";
let pajak = 1200;
let bayar = parseInt(pembelian) + pajak;
console.log(bayar);

let pembelian_a = "10000";
let pajak_a = 1200;
let pembelian_b = "20000";
let pajak_b = 2400;

let total = parseInt(pembelian_a) + parseInt(pembelian_b) + pajak_a + pajak_b;
console.log(total);
