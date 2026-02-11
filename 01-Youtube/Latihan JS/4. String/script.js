let dataString = "data string";
console.log(dataString);

// 1. excaping string (\' \" \\ \N \R \T \B \F)
let data1 = 'ucup \tberkata "apa kabar dunia"';
console.log(data1);
let data2 = "ucup berjalan-jalan di tepi pantai, \nkereen";
console.log(data2);

// 2. Literal String  (template literal string)
let namaDepan = "Fikri";
let namaBelakang = "Ramadhan";
let umur = 17;
let namalengkap = umur + " " + namaDepan + " " + namaBelakang; // menjadi masalah
console.log(namalengkap);

// lebih elegan supaya ini tidak bikin eror
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);
