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
console.log(kucingPertama.bersuara());
