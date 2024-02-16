const findTheDistanceValue = function (arr1, arr2, d) {
    let count = 0;
    for(let i=0; i<arr1.length; i++) {
        if(arr2.every(num => Math.abs(arr1[i] - num) > d)) {
            count++;
        }
    }
    return count;
}

console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2)) //2
console.log(findTheDistanceValue([1,4,2,3],[-4,-3,6,10,20,30], 3))//2
console.log(findTheDistanceValue([2,1,100,3],[-5,-2,10,-3,7], 6)) //1
