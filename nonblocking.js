// link to the node file system library to read text files
var fs = require('fs');

// load food asynchronously
var food = fs.readFile('food.txt', 'utf8', function(err, food){
    // display food list when done
    if(err) {
      console.log(err);
    }
    else {
      console.log(food);
    }

});

// print food heading
console.log('FOOD');


// load drinks asynchronously
var drinks = fs.readFile('drinks.txt', 'utf8', function(err, aaa){
    // display food list when done
    if(err) {
      console.log(err);
    }
    else {
      console.log(aaa);
    }

});

// print food heading
console.log('DRINKS');
