//Normal way to define numbers
const number = 20;

//Using objects or new keyword

const num = new Number(100);

console.log([number, num]);

console.log(num.toFixed(3));

const num2 = 15.66645;
console.log(num2.toPrecision(2));

//to improve readability of 10^n values
const hundred = 100000000;
console.log(hundred.toLocaleString('en-IN'));

//------------------------------- Maths library in JS -----------------------------------

console.log(Math);

// console.log(Math.floor(Math.random()*10) + 1);

//to get values in a specific range (e.g, 10 to 20) using random function
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min) + 1) + min)


