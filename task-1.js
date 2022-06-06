/*
1. Array Splice
   Array Splice adalah sebuah method yang memungkinkan kita untuk memodifikasi sebuah array dengan cara menghapus, mengganti ataupun menambahkan elemen baru kedalamnya.

*/

const cart = [
   { id: '1234', product: 'Book'},
   { id: '1235', product: 'Pen'},
   { id: '1236', product: 'Bag'}
]

cart.splice(0, 1)

/*
2. Array Push
   Array push adalah sebuah method untuk memodifikasi sebuah array dengan cara menambahkan sebuah elemen ke akhir sebuah array.
*/

const fruits = ['Apple', 'Banana', 'Lemon']

fruits.push('Mango')

/*
3. Array Pop
   Array pop adalah sebuah method untuk memodifikasi sebuah array dengan menghapus elemen terakhir sebuah array. Method ini mengembalikan nilai yang di hapus tadi.
*/

const people = ['Nanang', 'Kevin', 'Wachid']

people.pop()

/*
4. Array Includes
   Method includes digunakan untuk menentukan apakah sebuah array mengandung elemen tertentu dan mengembalikan nilai true jika mengandung sebuah nilai yang ditentukan, dan false jika tidak.
*/

const colors = ['blue', 'red', 'yellow', 'green', 'black', 'white']

colors.includes('red')

/*
5. Math Round
   Math round adalah sebuah fungsi untuk mengembalikan bilangan bulat terdekat dari sebuah bilangan yang ditentukan
*/

const decNumber = 43.22
const intNumber = Math.round(decNumber)

console.log(intNumber)

/*
6. Math Random
   Method random digunakan bersama built-in object Math yang bertujuan untuk mengembalikan nilai secara acak dari 0 hingga 1.
*/

const generateNumber = () => Math.round(Math.random() * 100)

generateNumber()

/*
7. Object Freeze
   Object freeze adalah sebuah method untuk membekukan sebuah objek. objek yang dibekukan tidak dapat diubah, termasuk properti dari object tersebut tidak dapat dihapus ataupun ditambahkan.
*/

const person = {
   name: 'John Doe',
   age: 29
}

Object.freeze(person)

/*
8. Array Filter
   Array filter berfungsi untuk menyaring elemen - elemen pada sebuah array dengan sebuah kondisi yang ditentukan dan mengembalikan nilai berupa sebuah array baru yang berisi elemen - elemen yang sesuai dengan kondisi tersebut.
*/

const names = ['Anita', 'Boy', 'Chaca', 'Daniel', 'Emilia', 'Fanny', 'Gene']

const filteredNames = names.filter(name => {
   return name.toLowerCase().includes('an')
})

console.log(filteredNames)

/*
9. Console Log
   Log adalah salah satu method dari built-in object "console" yang berfungsi untuk menampilkan output yang dimasukan ke konsol.
*/

const l = param => console.log(param)

l('Hello World')

/*
10. Array Every
    Array Every merupakan sebuah method yang berfungsi untuk mencari tahu apakah semua elemen pada sebuah array memiliki kesamaan, berdasarkan suatu kondisi yang ditentukan. Method ini mengembalikan nilai true jika semua elemen memenuhi kondisi yang ditentukan, dan false jika tidak.
*/

const friends = [
   { id: 1, name: 'Nanang Komarudin', gender: 'male' },
   { id: 2, name: 'Ikhsan Aziz', gender: 'male' },
   { id: 3, name: 'Taufiq', gender: 'male' },
   { id: 4, name: 'Michael Kevin', gender: 'male'}
]


const checkFriendsGender = friends => {
   const result = friends.every(friend => friend.gender == 'male')
   return result ? 'All Friends are male' : 'Not All Friends are male'
}


const inputValidation = data => {
   if(!Array.isArray(data)) {
      return false
   }

   if(!data.length) {
      return false
   }

   return true
}


const printFriendsGender = friends => {
   const isValidFriends = inputValidation(friends)

   if(!isValidFriends) {
      return console.log('Invalid input')
   }

   const result = checkFriendsGender(friends)
   console.log(result)
}

const invalidInputExample = null

printFriendsGender(invalidInputExample)

// Do not Push the update (or commit) this is just an example