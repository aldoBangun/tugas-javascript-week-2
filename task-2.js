/*
Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan  callback function dengan data sebagai berikut:
const name = [
"Abigail", "Alexandra", "Alison",
"Amanda", "Angela", "Bella",
"Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth",
"Ella", "Faith", "Olivia", "Penelope"]

Contoh:
searchName(“an”, 3, callback)

Output: 
[“Alexandra”,”Amanda”,”Angela”]
*/


const names = [
   "Abigail", "Alexandra", "Alison",
   "Amanda", "Angela", "Bella",
   "Carol", "Caroline", "Carolyn",
   "Deirdre", "Diana", "Elizabeth",
   "Ella", "Faith", "Olivia", "Penelope"];

const printNames = (names, maxLength) => {
   if(names.length > maxLength) {
      names.length = maxLength
   }

   return names
}

const findNames = ({ names, keyword, maxOutput, callback }) => {
   const message = `Cannot find any names that contains '${keyword}'`
   const filteredNames = names.filter(name => {
      return name.toLowerCase().includes(keyword.toLowerCase())
   })

   if(!filteredNames.length) {
      return message
   }

   return callback(filteredNames, maxOutput)
}

const config = { names, keyword: 'el', maxOutput: 3, callback: printNames }

// console.log(findNames(config))
