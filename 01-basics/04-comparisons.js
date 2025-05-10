/*
Comparisons 
these operators are used - <, >, <=, >=, ==, != 
*/

//Comparison with same data type - Best way of comparison
/*
2 > 1,
2 < 1,
2 >= 1,
2 <= 1
*/


//JS implicitly converts "2" to integer 2 and then comparison happens
console.log("2" > 1);
console.log("02" > 1);

/*
- Below kinds of conversion should never be used, it gives inconsistent results due to inconsistency in JS. Affects code readability
- Equality check "==" and Comparison check (>, <, >=, <=) works differently
- Equality check converts null to NaN or integer(0) but Comparison check always converts null to integer(0)
*/

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null != 0);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

/*
- Strict check (===)
- "==" : check for only values of the variable
- "===" : check for variable value and data type as well
*/
console.log("2" == 2);
console.log("2" === 2);





