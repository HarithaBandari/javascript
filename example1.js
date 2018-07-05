var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 


var pos = 2, n = 1;

 
var addedItems = vegetables.splice(pos, n,'lemon','kiwi');

var shallowCopy = vegetables.slice();
var shallowCopy1 = vegetables.slice(2,1);  
console.log(vegetables); 


console.log(addedItems); 
console.log(shallowCopy1);