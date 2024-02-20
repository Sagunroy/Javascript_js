//map

var arr= [2,4,8,10] 
var updatedArr = arr.map(val=> val+2) 
console.log(arr); 
console.log(updatedArr);

//filter

var arr1= [2,4,8,10] 
var updatedArr1 = arr1.filter(val=> val<5) 
console.log(arr1); 
console.log(updatedArr1);

//reduce

   
var arr2= [2,4,8,10] 
var updatedArr2 = arr2.reduce((prev, curr)=> curr= prev+curr) 
console.log(arr2); 
console.log(updatedArr2);