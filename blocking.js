// link to the node file system library to read text files
var fs = require('fs')

// open and read food list
var food = fs.readFileSync('food.txt', 'utf8')

// print food heading
console.log('\nFOOD\n')
console.log(food)
// open and read drinks list
var drinks = fs.readFileSync('drinks.txt', 'utf8')

// print drinks heading
console.log('DRINKS\n')
console.log(drinks)
