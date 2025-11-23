/*
* Truthy value: if any variable contains a not null value or contain values from below:
* truthy values: "0", 'false', " "(space), [], {}, function(){}
* Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN 
*/

const emptyObj = {}

//condition becomes true, so if block will execute
if(Object.keys(emptyObj).length === 0){ 
    console.log("Object is empty");
}
//below if block won't execute as 0 is a false
if(0){
    console.log("printing 0 value");
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10   //here first value(5) will be assigned to val1
val1 = null ?? 10   //here 10 will be assigned
val1 = undefined ?? 15  //here, 15 will be assigned
val1 = null ?? 10 ?? 20     //first positive, not null value(10) will be assigned
console.log(val1);

/**
 * Ternary Operator: works as a shorthand for if-else conditional block. Syntax below,
 * condition ? true : false
 */

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");



