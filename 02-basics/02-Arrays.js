const actors = ["Akshay", "Ajay", "Ranveer", "Shahrukh"]
const fruits = ["Apple", "Banana", "Pear", "Kiwi"]

//Array takes(can be pushed) any type of data type in it and as it is, without any modification.
// actors.push(fruits)      //pushes/concats array2 in existing array1
const finalArr = actors.concat(fruits)      //concat returns new concatenated array
console.log(actors);
console.log(finalArr);

//Concatenation of arrays using Spread operator
// [...arrayname1, ...arrayname2] --> ... is a spread operator which concatenates given arrays and returns a new array
const spreadArr = [...actors, ...fruits]
console.log(spreadArr);

const arr3 = [1, 2, 3, [4, 5, 6], 7, [7, 8, [1, 2]]]

//flat() --> takes above type of array (array with sub-arrays or an array which contains recursively indepth sub-arrays) and converts it into a single 1D/linear array
const flattenArray = arr3.flat(2)
console.log(flattenArray);

const str = "Rakhi"
console.log(Array.isArray(str));    //checks whether given variable is array or not
console.log(Array.from(str));       //converts given variable to an array
console.log(Array.from({name: "rakhi"}));   //converts into an empty array '[]', as .from accepts only iterable string

let s1 = 100, s2 = 200, s3 = 300
console.log(Array.of(s1, s2, s3));      //returns a new array from the given set of variables







