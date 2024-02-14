let p= new Promise((resolve,reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        console.log("i am promise and i am fulfilled")
        resolve(true)
    },2000)
    
})