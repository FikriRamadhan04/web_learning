// deklarasi vairabel
tahunMerdeka = 1945;
let selisihTahun = 2026 - tahunMerdeka;

console.log(selisihTahun);

// update (cara 1)
let score = 0;

score = score + 1;
score = score + 1;
score = score + 1;
score = score + 1;

console.log(score);

// update (cara 2)
score += 1;
score += 1;
score += 1;
score += 1;
score += 1;
score += 1;
score += 5;

score *= 2;
score -= 10;
score /= 2;

score++;
score++;
score++;
score++;
score++;
score--;
score--;
score--;
score--;
score--;

console.log(score);

// pake let
let ayam = 10;
ayam = 20;

console.log(ayam);

// pake const (tidak bisa diubah nilanya, akan eror)
// digunakan untuk nilai pasti yang tidak berubah atau tidak ingin dirubah (contoh:tahun merdeka,tanggal lahir )
const merdeka = 1945;
merdeka = 1946;

console.log(merdeka);
