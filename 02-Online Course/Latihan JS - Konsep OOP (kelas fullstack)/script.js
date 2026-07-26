// 1. Pengenealan OOP
// - Membuat CLASS (Cetakan)
class Kucing {
  // Constructor: Tempat memberikan data awal untuk si kucing
  constructor(nama, warna) {
    this.nama = nama; // Properti nama
    this.warna = warna; // Properti warna
  }

  // Method: Aksi atau kemampuan yang bisa dilakukan si kucing
  bersuara() {
    return `${this.nama} berkata: Meowww!`;
  }

  perkenalkan() {
    return `Halo, saya kucing bernama ${this.nama} dan bulu saya berwarna ${this.warna}.`;
  }
}

// - Buat Objek Kucing
const kucingPertama = new Kucing("Milo", "Oranye");
console.log(kucingPertama.perkenalkan());
0;
console.log(kucingPertama.bersuara());

// 2. Membuat Object Dengan Factory Function
// Factory Function adalah sebuah fungsi di JavaScript yang bertugas untuk membuat dan mengembalikan (return) sebuah object.
// Secara sederhana, bayangkan fungsi ini seperti sebuah "pabrik" (factory): Kita memasukkan bahan-bahan (parameter), dan pabrik
// tersebut akan merakit serta mengeluarkan sebuah object jadi yang siap digunakan.

// // - Mendefinisikan Factory Function
// function buatMobil(merk, model, tahun) {
//   return {
//     merk: merk,
//     model: model,
//     tahun: tahun,

//     //- Method di dalam object
//     infoMobil: function () {
//       return `Mobil ini adalah ${this.merk} ${this.model} keluaran tahun ${this.tahun}.`;
//     },

//     //- Method untuk menyalakan mesin
//     nyalakanMesin: function () {
//       console.log(`Mesin ${this.merk} ${this.model} berhasil dinyalakan!`);
//     },
//   };
// }

// // - Membuat beberapa object menggunakan Factory Function
// const mobil1 = buatMobil("Toyota", "Avanza", 2022);
// const mobil2 = buatMobil("Honda", "Civic", 2023);

// // - Menggunakan object yang telah dibuat
// console.log(mobil1.merk); // Output: Toyota
// console.log(mobil2.infoMobil()); // Output: Mobil ini adalah Honda Civic keluaran tahun 2023.

// mobil1.nyalakanMesin();
// // - Output: Mesin Toyota Avanza berhasil dinyalakan!

// contoh 2 : Pakaian
function infoPakaian(merk, ukuran, warna) {
  return {
    merk: merk,
    ukuran: ukuran,
    warna: warna,

    infoPakaian: function () {
      return `Pakaian ini bermerk ${this.merk}, ukuran ${this.ukuran}, dan berwarna ${this.warna}`;
    },

    belanjaPakaian: function () {
      console.log(
        `Pakaian bermerek ${this.merk}, dengan ukuran ${this.ukuran}, dan warna ${this.warna} berhasil di checkput`,
      );
    },
  };
}

const pakaian1 = infoPakaian("uniqlo", "XL", "Merah");
const pakaian2 = infoPakaian("erigo", "L", "Hitam");

console.log(pakaian1.merk); //output uniqlo
console.log(pakaian2.ukuran); //uouput L
console.log(pakaian2.infoPakaian()); //output Pakaian ini bermerk erigo, ukuran L, dan berwarna Hitam

pakaian1.belanjaPakaian(); //output Pakian bermerek uniqlo, dengan ukuran XL, dan warna Merah berhasil di checkput

//2. Membuat Object Dengan Constructur Function
// Constructor Function (Fungsi Konstruktor) adalah sebuah fungsi khusus yang digunakan untuk membuat dan menginisialisasi object.
// Jika kamu ingin membuat banyak object dengan struktur data dan fungsi yang sama (misalnya data banyak siswa atau produk),
// menggunakan constructor function jauh lebih efisien daripada menulis ulang object satu per satu.

//- contoh 1
function Mahasiswa(nama, jurusan, angkatan) {
  this.nama = nama;
  this.jurusan = jurusan;
  this.angkatan = angkatan;

  // Menambahkan method di dalam constructor
  this.sapa = function () {
    return "Halo, nama saya " + this.nama;
  };
}

// 2. Membuat Object baru menggunakan keyword 'new'
const mhs1 = new Mahasiswa("Budi", "Teknik Informatika", 2023);
const mhs2 = new Mahasiswa("Siti", "Sistem Informasi", 2024);

// 3. Mengakses property dan method object
console.log(mhs1.nama); // Output: Budi
console.log(mhs2.jurusan); // Output: Sistem Informasi
console.log(mhs1.sapa()); // Output: Halo, nama saya Budi
