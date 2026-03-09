// 1. Contoh Data Object(key:value)
const fitnessData = {
  totalSteps: 1341234,
  totalMiles: 119.2,
  avgCaloriesburn: 6654,
};

// 2. Cara Membuat Struktur Data Object
// struktur data object dapat menampung berbagai tipe data sekaligus
const orang = {
  nama: "Andrew",
  tanggal: 21,
  alamat: "Jakarta",
};

const barang = {
  judul: "Sepatu",
  harga: 2000000,
  isReady: true,
  size: [38, 29, 40, 41, 42],
  location: {
    indonesia: 48,
    singapore: 50,
  },
};

// 3.Cara Memanggil Data Dari Object
console.log(orang.nama);
console.log(orang.tanggal);
console.log(orang.alamat);
console.log(barang.isReady);
console.log(barang.location.indonesia);
console.log(barang.size[1]);

// 4. Cara Membuat Object Berjalan
console.log((orang["nama"] = "Febby"));
console.log((orang.tanggal = 3));
console.log((orang.alamat = "Medan"));
console.log((orang.gender = "Perempuan"));

// 5. Cara Memanggil Object Di Dalam Array
const shoppingcart = [
  {
    product: "kemeja",
    price: 50000,
    quantity: 25,
  },
  {
    product: "jaket",
    price: 90000,
    quantity: 20,
  },
  {
    product: "jersey",
    price: 70000,
    quantity: 40,
  },
];

console.log(shoppingcart[0].product);
