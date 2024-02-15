const missingNumber = function(nums) {
    // Calculate the expected sum of the first n natural numbers
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;

    // Calculate the actual sum of numbers in the array
    const actualSum = nums.reduce((acc, curr) => acc + curr, 0);

    // The difference between the expected sum and the actual sum is the missing number
    return expectedSum - actualSum;
};

// Sample Tests
console.log(missingNumber([3, 0, 1])); // returns 2
console.log(missingNumber([0, 1])); // returns 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // returns 8