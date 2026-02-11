// 1. variabel dengan let
let nama = "ucup surucup";

// tampilkan data
console.log(nama);

// kita ubah nilai variabel nama
nama = "Otong Surotong";
console.log(nama);

// 2. variabel dengan var
var namaDepan = "Ucup";
console.log(namaDepan);
namaDepan = "Otong";
console.log(namaDepan);

// kelakuan dari let
let namaBelakang = "Surucup";
{
  let namaBelakang = "Surotong";
  console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakuan dari var
var namaTengah = "Keren";
{
  var namaTengah = "Ganteng";
  console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus (tanpa keyboard akan jadi var atau default)
gorengan = "Bala-Bala";
{
  gorengan = "combro";
}
console.log(gorengan);

// 3. const (konstan ga bisa di ubah)
const TTL = "10 Maret 2022";
console.log(TTL);
// TTL = "11 Maret 2054"; gak bisa dilakukan karena sudah janji konstant
