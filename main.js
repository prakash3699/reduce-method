const numbers = [1, 2, 3, 4, 5];

let result=numbers.reduce(function(a,b){
 return a+b*2;
},10)
console.log(result);