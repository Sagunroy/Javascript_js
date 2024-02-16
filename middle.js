function findMiddleElement(arr) {
    if(arr.length === 0) return undefined; // Check if the array is empty
    let middleIndex = Math.floor(arr.length / 2);
  
    if(arr.length % 2 === 0) {
      // For even length arrays
      return arr[middleIndex - 1];
      // If you want to return both middle elements
      // return [arr[middleIndex - 1], arr[middleIndex]];
    } else {
      // For odd length arrays
      return arr[middleIndex];
    }
  }
  
  let myArray = [1, 2, 3, 4, 5];
  let myArray1= [6,7,4,2,8,9];
  console.log(findMiddleElement(myArray));
  console.log(findMiddleElement(myArray1));