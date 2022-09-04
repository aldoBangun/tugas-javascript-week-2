const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
   if (typeof nilaiAwal !== 'number') return console.log("nilai awal harus berupa angka")
   if (typeof nilaiAkhir !== 'number') return console.log("nilai akhir harus berupa angka")
   if (!Array.isArray(dataArray)) return console.log("data array harus berupa array")

   if(nilaiAwal >= nilaiAkhir) {
      console.log("Nilai akhir harus lebih besar dari nilai awal")
      return 
   }

   if(dataArray.length < 5) {
      console.log("Jumlah angka dalam dataArray harus lebih dari 5")
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

seleksiNilai(4, 10, [3,2,11,12,45])