// user defined module
const { people, ages } = require('./people')

console.log(people)
console.log(ages)

// built in module
const os = require('os')

console.log(os.platform())
console.log(os.homedir())
