let score = true

// console.log(typeof score);
// console.log(typeof(score));

//converting string score into number
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


/*
Notes: Conversion of various datatypes into a Number and their output
- "33" = 33 -- converted into a number
- "33abc" = NaN -- Not a pure Number, hence we got this
- "true" = 1 -- in boolean true means 1 and false means 0
- "abc" = NaN -- string can't be converted into a number
- "null" = 0 -- converted into 0
- "undefined" = NaN -- can't be converted into a number
*/

let isLoggedIn = "Rakhi"
let boolIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof isLoggedIn);
// console.log(boolIsLoggedIn);

/*
Notes: Conversion of various data types into Boolean
- "1" = true
- "0" = false
- "" = false -- empty string equates to false boolean value
- "abc" = true
*/

let num = 1234
let stringNum = String(num)
// console.log(typeof num);
// console.log(typeof stringNum);

/*
Notes: Conversion of various data types into String
- 1234 = string -- any number converts into string
*/


//******************************** Operations in JS ************************** */

let value = 3
let negOfVal = -value
console.log(negOfVal);
console.log(34+8);
console.log(2^10);
console.log(2**5);
console.log(5/2);

let str1 = "Rakhi"
let str2 = " Bhagwat"
console.log(str1 + str2);

console.log("12" + 6);
console.log("1" + 2 + 5);
console.log(1 + 3 + "2");       //Not a good practice in corperate
console.log(true);

//All below kinds of code is not recommended, not a good practice. Reflects poor readability
console.log(+true);
console.log(+"");
















