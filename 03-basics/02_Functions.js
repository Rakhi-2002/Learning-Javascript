//Passing different types of parameters in Function

//function to calculate price for a shopping cart

//here, using spread operator, ...num1 -> accepts all args and converts it into an array
function calculateCartPrice(...num1){
    return num1     //num1: price of shopping item
}

console.log(calculateCartPrice(100, 50, 200, 300, 500));    //otp: [ 100, 50, 200, 300, 500 ]

const user = {
    username: "hitesh",
    price: 199
}

//Passing object as params in function
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)

//Passing array as params into function
const myArr = [200, 300, 400, 500, 600]

function returnSecondVal(getArr){
    return getArr[1]
}
console.log(`Value on second position in array is ${returnSecondVal(myArr)}`);
