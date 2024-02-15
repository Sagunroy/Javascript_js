function fun(){
    console.log('hey')
}
const myobj = {
    'keyname': 'hiii' ,
    'keyname1':'123',
    'keyname3':fun(),
    'keyname4': {'keyname5':'hey'},
    obj2 : {
        'keyname6':'hello'

    }
}
console.log(myobj)
console.log(myobj.keyname[1])
console.log(myobj.keyname4['keyname5'])
console.log(myobj.obj2)

//call by reference 
let firstprofile = {
    age:22
}

let secondprofile = {
    age:32
}
function primitivemutate(primitive){
    primitive++
    console.log(primitive) //num is here only increamented
}

function mutates(obj){
    console.log(obj.age)
}
function mutatess(obj){
    obj.age++ //oblect works via reference in js
}
mutates(secondprofile)
let num=4
primitivemutate(num)// increamented because value is copied inside the loop #call by value
console.log(num) //no is not changed outside of loop in call by value
mutatess(secondprofile)
console.log(secondprofile) 