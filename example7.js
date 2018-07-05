var arr=["Jazz","Bluez"];
console.log(arr);
arr.push("Rock-n-roll");
console.log(arr);
arr[Math.floor((arr.length/1.5)-1)]="classics";

console.log(arr);
arr1=arr.shift();
console.log(arr);
arr2=arr.unshift("Rap","Raggie");
console.log(arr);