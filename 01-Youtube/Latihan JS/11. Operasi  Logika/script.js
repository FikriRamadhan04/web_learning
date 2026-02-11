// Operator Aritmatika

// ekspresi (expression) dan statement

// */+-
// % <- modulo
// ++ <- increment
// -- <- decrement
// ** <- pangkat atau power

let x = 10;
console.log(x + 1);
console.log(x - 1);
console.log(x / 4);
console.log(x * 2);

// artimatika khusus di javascript
console.log(x % 3); // sisa pembagian
console.log(x ** 2);

// pemograman biasa
x = x + 1;
console.log(x);
x = x + 1;
console.log(x);

x++;
x++;
console.log(x);

x = x - 1;
console.log(x);

x--;
console.log(x);

// studi kasus (number + string , string harus di parseFloat atau parseInt dulu )
let y = 1 + "1";
console.log(y);

let z = 1 + parseFloat("1");
console.log(z);
