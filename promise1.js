/*
function Demo(){
    console.log("inside fun")
    return Promise.resolve("success")

}
Demo().then()
//then with argu
Demo().then(
    (message) =>{
        console.log("inside then" + message)
    }

)
function demo1(){
    console.log("inside demo1")
    return Promise.reject("failure")
}
demo1().catch(
    (message) => {
        console.log("inside demo1" + message)
    }
)

const promise = new Promise(function(resolve, reject) {
    resolve('Promise has been resolved!');
});

promise.then((value) => console.log(value));
console.log('I am not the promise');

const delay = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve('Hello');
        }, 3000)
    });
}

const sayHello = (value) => {
    console.log('Hiii');
    console.log(value);
}

delay().then(() => (sayHello(2)));*/
/*
const delay1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();

        },5000);
    });
}
const sayHello1=(value) => {
    console.log("hello");
    console.log(value);
    return value;

}
delay1().then(() =>{
    const result=sayHello1(2);
    console.log(result); 
});
*/

const p1= new Promise((resolve,reject) =>{
    resolve('second');
});
const p2= new Promise((resolve,reject) => {
    resolve(p1)
});
p2
.then(Promise => Promise)
.then(value => console.log(value));