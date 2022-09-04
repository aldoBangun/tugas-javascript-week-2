const names = [
   "Abigail", "Alexandra", "Alison",
   "Amanda", "Angela", "Bella",
   "Carol", "Caroline", "Carolyn",
   "Deirdre", "Diana", "Elizabeth",
   "Ella", "Faith", "Olivia", "Penelope"];

const validateInput = (input) => {
   if (typeof input !== 'object') return 'Input have to be an object'
   if (!Array.isArray(input?.names)) return 'Names should be a collection of array'
   if (typeof input?.keyword !== 'string') return 'search keyword should be a valid string'
   if (typeof input?.maxOutput !== 'number') return 'maxOutput should be a valid number'
   if (input?.maxOutput <= 0) return 'maxOutput should be more than 0'
   if (!input.callback) return 'Callback not provided'
   if (typeof input?.callback !== 'function') return 'invalid callback function'

   return null
}

const printNames = (names, maxLength) => {
   if(names.length > maxLength) {
      names.length = maxLength
   }

   return names
}

const findNames = (config) => {
   const { names = [], keyword = '', maxOutput = 5, callback } = config
   const inputError = validateInput(config)

   if (inputError) return inputError

   const filteredNames = names.filter(name => {
      return name.toLowerCase().includes(keyword.toLowerCase())
   })

   if(!filteredNames.length) {
      return `Cannot find any names that contains '${keyword}'`
   }

   return callback(filteredNames, maxOutput)
}

// Test invalid input type
const invalidInput = []
const test1 = findNames(invalidInput)
console.log({ test1 })

// Test invalid input names type
const invalidInputNamesType = { names: 'not an array', keyword: 'el', maxOutput: 3, callback: printNames }
const test2 = findNames(invalidInputNamesType)
console.log({ test2 })

// Test invalid input keyword
const invalidInputKeywordType = { names, keyword: 10, maxOutput: 3, callback: printNames }
const test3 = findNames(invalidInputKeywordType)
console.log({ test3 })

// Test invalid maxOutput type
const invalidInputMaxOutputType = { names, keyword: 'el', maxOutput: 'not a number', callback: printNames }
const test4 = findNames(invalidInputMaxOutputType)
console.log({ test4 })

const invalidInputMaxOutputSize = { names, keyword: 'el', maxOutput: 0, callback: printNames }
const test5 = findNames(invalidInputMaxOutputSize)
console.log({ test5 })

const invalidInputCallback = { names, keyword: 'el', maxOutput: 3 }
const test6 = findNames(invalidInputCallback)
console.log({ test6 })

// Test valid input
const config = { names, keyword: 'el', maxOutput: 3, callback: printNames }
const testValid = findNames(config)
console.log({ testValid })