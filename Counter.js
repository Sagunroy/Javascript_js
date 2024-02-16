function createCounter(n) {
	let count = n;
	return function counter() {
		let currentCount = count;
		count += 1;
		return currentCount;
	};
}


const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter()); 

const secondCounter = createCounter(42);
console.log(secondCounter());
console.log(secondCounter()); 
