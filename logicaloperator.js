//logical &&
function license(age,bribe)
{
    if(age>=18 && bribe>100)
    {
        return true
    }
    else
    {
        return false
    }
}
console.log(license(20,102))

//logical ||
function license2(age,bribe)
{
    if((age>=18 && bribe>100) || bribe>500)
    {
        return true
    }
    else
    {
        return false
    }
}
console.log(license2(22,1000))

//logical !not
function f1(whitespace){
if(!whitespace){
    return true
}
else{
    return false
}
}
console.log(f1("sss"))
 