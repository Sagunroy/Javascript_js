/*
//promise all executes all promises parallely 
//It will only resolve if all the promises passed have been resolved.
//If any promise in an array of promises fails then it will reject.
const promiseArr = [
    new Promise(resolve => setTimeout(resolve, 100, 'apple')),
    new Promise(resolve => setTimeout(resolve, 100, 'banana')),
    new Promise(resolve => setTimeout(resolve, 3000, 'orange'))
  ]
  Promise.all(promiseArr)
    .then(fruits => console.log(fruits))
    .catch(err => console.log('Error:', err))
    */
/*  
const promiseArr1 = [
    new Promise(resolve => setTimeout(resolve, 100, 'apple')),
    new Promise((resolve, reject) => setTimeout(resolve, 100, 'banana')),
    new Promise(resolve => setTimeout(resolve, 3000, 'orange'))
      ]
    Promise.all(promiseArr1)
        .then(fruits => console.log(fruits))
        .catch(err => console.log('Error:', err))


*/
const promiseArr2 = [
            new Promise(resolve => setTimeout(resolve, 100, 'apple')),
            new Promise((resolve, reject) => setTimeout(reject, 10, 'banana')),
            new Promise(resolve => setTimeout(resolve, 3000, 'orange'))
          ]
          Promise.allSettled(promiseArr2)
            .then(fruits => console.log(fruits))
            .catch(err => console.log('Error:', err))