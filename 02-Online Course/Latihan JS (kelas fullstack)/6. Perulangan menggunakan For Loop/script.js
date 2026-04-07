// 1.Pengenalan Perulangan
// console.log(1);

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 1; i <= 10; i++) {
//   console.log("saya ada di dalam loop");
//   console.log(i);
// }

// 2. Contoh Lain perulangan For
// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 20; i >= 0; i--) {
//   console.log(i);
// }

// for (let i = 10; i <= 100000; i *= 10) {
//   console.log(i);
// }

// // 3. Awas Perulangan Tanpa Henti
// for (let i = 20; i >= 0; i++) {
//   console.log(i);
// }

// 4. Mendapatkan Data Dari Array Dengan Perulangan
//

// 5. Pengenalan Nested Loop
// const pilihan = "abcd";
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. Soal nomor ${i}:`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`   ${pilihan[j]}. Pilihan Jawaban`);
//   }
// }

// 6. Mendapatkan Data Dari Nested Array Dengan Nested Loop

// const studentRow = [
//   ["jack", "syane", "david", "kroos"],
//   ["emma", "william", "billy", "rosy"],
//   ["peter", "mikey", "isabela", "rucas"],
// ];

// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Rowe #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   ${row[j]}`);
//   }
// }
// 7. Perulangan Menggunakan Peritah While
// let num = 10;
// while (num <= 50) {
//   console.log(num);
//   num++;
// }

// for (let num = 10; num <= 50; num++) {
//   console.log(num);
// }

// const PASSWORD = "Pass123";

// let guess = prompt("enter the password");
// while (guess !== PASSWORD) {
//   guess = prompt("enter the password");
// }

// alert("congrats! the password is correct");

// 8. Kata Kunci Break Untuk Memberhentikan Perulangan
// let input = prompt("Hei, Say something");

// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop") break;
// }

// alert("ok");

// for (let i = 0; i < 10000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }

for (let i = 101; i > 100; i++) {
  console.log(i);
  if (i === 200) break;
}
