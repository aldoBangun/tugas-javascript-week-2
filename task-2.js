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

const inputValidation = (data, keyword) => {
   if(!Array.isArray(data) || !keyword.trim()) {
      return false
   }

   if(!data.length) {
      return false
   }

   return true
}

const findNames = ({ names, keyword, maxOutput, callback }) => {
   const filteredNames = names.filter(name => {
      return name.toLowerCase().includes(keyword.toLowerCase())
   })

   if(!filteredNames.length) {
      return `Cannot find any names that contains '${keyword}'`
   }

   return callback(filteredNames, maxOutput)
}


const nameFinder = config => {
   const { names, keyword } = config
   const isValidInput = inputValidation(names, keyword);

   if(!isValidInput) {
      console.log('Invalid input, please check your input and try again!');
      return
   }

   return findNames(config)
}


const config = { names, keyword: 'el', maxOutput: 3, callback: printNames }

nameFinder(config)