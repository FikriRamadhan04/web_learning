// //1. contoh 1 Asynchronous JavaScript - setTimeout
// console.log("Pertama: Mulai proses");

// setTimeout(() => {
//     console.log("Ketiga: Proses asynchronous selesai (setelah 2 detik)");
// }, 5000);

// console.log("Kedua: Proses lain berjalan duluan");
// // output
// // Pertama: Mulai proses
// // Kedua: Proses lain berjalan duluan
// // Ketiga: Proses asynchronous selesai (setelah 2 d  etik)

// // contoh Function yang mensimulasikan proses asynchronous (misal: mengambil data dari server)
// function ambilDataDariServer() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data berhasil diterima dari server!");
//     }, 2000); // Penundaan selama 2 detik (2000 ms)
//   });
// }

// // contoh 3 - Function async untuk menjalankan proses secara asynchronous
// async function prosesUtama() {
//   console.log("1. Mulai mengambil data...");

//   // Menunggu (await) sampai fungsi ambilDataDariServer selesai
//   const hasil = await ambilDataDariServer();
//   console.log("2.", hasil);

//   console.log("3. Proses selesai!");
// }

// prosesUtama();

// // contoh 2 - contoh callback hell
// setTimeout(function (){
//     document.body.style.backgroundColor = "red";
//     setTimeout(function (){
//     document.body.style.backgroundColor = "yellow";
//     setTimeout(function (){
//     document.body.style.backgroundColor = "green";
//     setTimeout(function (){
//     document.body.style.backgroundColor = "blue";
  
// },3000);
// },3000);
// },2000);
// },1000);

// 2. Latihan Request Menggunakan Call Back Function
// callback version
const requestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Error: Connection Timeout');
		} else {
			success(`Success: ${url} (${delay}ms)`);
		}
	}, delay);
};

// Promise version
const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 2000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

requestCallback('Movie.com', function (response){
	console.log('success', response);
},

function(error){
	console.log('error', error);
}
);

// 2. Latihan Request Menggunakan Promise
requestPromise('movie.com')
.then((response) => {
	console.log('success', response);
})
.catch((error) => {
	console.log('erros', error);
});

// 2. Cara Benar Menggunakan Fungsi Promise
requestPromise('movie.com').then((result) => {
	console.log(result + "page - 1");
	console.log(result );
	return requestPromise('movie.com');
	
})
.then((result) => {
	console.log(result + "page - 2");
	return requestPromise('movie.com');
})
.then((result) => {
	console.log(result + "page - 3");
	return requestPromise('movie.com');
})
.then((result) => {
	console.log(result + "page - 4");
})

.catch((err) => {
	console.log(err);
});



