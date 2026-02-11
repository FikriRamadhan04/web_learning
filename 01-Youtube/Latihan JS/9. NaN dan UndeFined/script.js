// NaN dan UndeFined

// NaN = Not a Number (Hasil operasi yang menjadi bukan angka)
console.log(`akar dari -1 :${Math.sqrt(-1)}`);
console.log(`"ucup" / "otong" :${"ucup" / "otong"}`);
console.log(`"ucup" * "otong" :${"ucup" * "otong"}`);
console.log(`"ucup" + "otong" :${"ucup" + "otong"}`);
console.log(`"ucup" - "otong" :${"ucup" - "otong"}`);

let data = parseInt("test123");
console.log(data + 5); //NaN ini tidak bisa dioperasikan lagi

// UndeFined - Dia belum tau nilainya (Sebuah operasi apapun yang tidak menghasilkan apapun)
let a = 0;
console.log(`a = ${a}`);
console.log(Math.sqrt(4));
console.log(console.log("test"));
