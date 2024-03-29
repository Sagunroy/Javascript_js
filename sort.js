function addAndSort(array, element) {
	return ([...array, element]).sort((a,b)=> a-b);
}

console.log(addAndSort([5, 7, 1, 6], 3)); 
// Expected Output: [1, 3, 5, 6, 7]
console.log(addAndSort([15, 7, 2, 26], 10)); 
// Expected Output: [2, 7, 10, 15, 26]
console.log(addAndSort([25, 27, 21, 16], 19)); 
// Expected Output: [16, 19, 21, 25, 27]
