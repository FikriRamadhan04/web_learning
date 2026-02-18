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

let angka = Math.random();
console.log(angka);

if (angka >= 0.5) {
  console.log("angka lebih besar dari 0.5");
}

if (angka <= 0.5) {
  console.log("angka lebih kecil dari 0.5");
}
