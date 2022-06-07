const validasiInput = ({ nilaiAwal, nilaiAkhir, dataArray }) => {
   const error = { error: true }
   const validasiNilai = typeof nilaiAwal !== 'number' || typeof nilaiAkhir !== 'number'
   
   if(validasiNilai) {
      error.pesan = 'Nilai awal dan nilai akhir harus bertipe data "number"'
      return error
   }
   
   if(!Array.isArray(dataArray)) {
      error.pesan = 'Parameter ke-3 (dataArray) harus berbentuk "array"'
      return error
   }

   const semuaDataNumber = dataArray.every(data => {
      return typeof data === 'number'
   })

   if(!semuaDataNumber) {
      error.pesan = 'Semua data dalam dataArray harus bertipe data "number"'
      return error
   }

   // validasi yang diminta disoal
   if(nilaiAwal >= nilaiAkhir) {
      error.pesan = 'Nilai akhir harus lebih besar dari nilai awal'
      return error
   }

   // validasi yang diminta disoal
   if(dataArray.length < 5) {
      error.pesan = 'Jumlah angka dalam dataArray harus lebih dari 5'
      return error
   }

   return { error: false }
}


const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
   const adaError = validasiInput({ nilaiAwal, nilaiAkhir, dataArray })

   if(adaError.error) {
      console.log(adaError.pesan)
      return
   }

   const nilaiTerfilter = dataArray.filter(nilai => {
      return (nilai > nilaiAwal) && (nilai < nilaiAkhir)
   })

   if(nilaiTerfilter.length) {
      const nilaiTerurut = nilaiTerfilter.sort((a,b) => a-b)
      console.log(nilaiTerurut)
   } else {
      console.log("Nilai tidak ditemukan")
   }
}


seleksiNilai(4, 10, [3,2,11,12,45]) // Nilai tidak ditemukan
seleksiNilai('4', 10, [1,2,3,4,5]) // Nilai awal dan nilai akhir harus bertipe data "number"
seleksiNilai(4, 5, 'Bukan array') // dataArray harus bertipe "Array"
seleksiNilai(4, 10, [1, 2, 3, 4, '5']) // semua data dalam array harus bertipe "number"
seleksiNilai(14, 10, [3,2,11,12,45]) // Nilai akhir harus lebih besar dari nilai awal
seleksiNilai(5, 10, [11, 12, 30]) // Jumlah angka dalam dataArray harus lebih dari 5
seleksiNilai(3, 10, [1, 3, 5, 7, 9]) // [5, 7, 9]