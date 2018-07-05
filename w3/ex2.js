var fruits=["banana","orange","apple"];
var fruit=fruits.pop()
console.log(fruits);
fruits.push("kiwi");
console.log(fruits);
var fruit1=fruits.splice(1,1);
console.log(fruits);


var girls=["Cecilie","Lone"];
var boys=["Emil","Tobias","Linus"];
var children=girls.concat(boys);
console.log(children)