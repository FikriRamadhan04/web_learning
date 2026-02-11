// Operator Logika

// And, OR, Not

let data_bool = true;
console.log(data_bool);

// 1. Not
console.log(!data_bool); // ngeflip data boolean
console.log(!data_bool);
console.log(!1);
console.log(!0);

let is_keren = true;
let is_jelek = !is_keren;

// 2. OR || (operasi antar dua variabel boolean)
// A      true true  false flase
// B.     true false true  false
// Hasil  true true  true  false

// 2. OR || (operasi antar dua variabel boolean)
// A      1 1 0 0
// B.     1 0 1 0
// Hasil  1 1 1 0

console.log(`A = true || B = true, Hasil = ${true || true}`);
console.log(`A = true || B = false, Hasil = ${true || false}`);
console.log(`A= false || B= true, Hasil = ${false || true}`);
console.log(`A = false || B= false, Hasil = ${false || false}`);

let makan = true;
let minum = true;

let sudah_menyantap = makan || minum;
console.log(`sudah menyantap =  ${sudah_menyantap}`);

// 3. AND -> && (operasi antara dua variabel boolean)
// A      true true  false false
// B.     true false true  false
// Hasil  true false false false

// 3. AND -> && (operasi antara dua variabel boolean)
// A      1 1 0 0
// B.     1 0 1 0
// Hasil  1 0 0 0

console.log(`A = true && B = true, Hasil = ${true && true}`);
console.log(`A = true && B = false, Hasil = ${true && false}`);
console.log(`A= false && B= true, Hasil = ${false && true}`);
console.log(`A = false && B= false, Hasil = ${false && false}`);

makan = false;
minum = false;

let sudah_makmin = makan && minum;
console.log(`sudah makan dan minum? =  ${sudah_makmin}`);
