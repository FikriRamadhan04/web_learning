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
// Secara sederhana, bayangkan fungsi ini seperti sebuah "pabrik" (factory): Anda memasukkan bahan-bahan (parameter), dan pabrik tersebut akan merakit serta mengeluarkan sebuah object jadi yang siap digunakan.
// - Mendefinisikan Factory Function
function buatMobil(merk, model, tahun) {
  return {
    merk: merk,
    model: model,
    tahun: tahun,

    //- Method di dalam object
    infoMobil: function () {
      return `Mobil ini adalah ${this.merk} ${this.model} keluaran tahun ${this.tahun}.`;
    },

    //- Method untuk menyalakan mesin
    nyalakanMesin: function () {
      console.log(`Mesin ${this.merk} ${this.model} berhasil dinyalakan! 🚗💨`);
    },
  };
}

// - Membuat beberapa object menggunakan Factory Function
const mobil1 = buatMobil("Toyota", "Avanza", 2022);
const mobil2 = buatMobil("Honda", "Civic", 2023);

// - Menggunakan object yang telah dibuat
console.log(mobil1.merk); // Output: Toyota
console.log(mobil2.infoMobil()); // Output: Mobil ini adalah Honda Civic keluaran tahun 2023.

mobil1.nyalakanMesin();
// - Output: Mesin Toyota Avanza berhasil dinyalakan!
