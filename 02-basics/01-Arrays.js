const numArr = [0, 1, 2, 3]
const cities = ["Nashik", "Pune", "Mumbai", "Nagpur"]

// console.log(cities);

//Array Methods
cities.push("Kolhapur")     //JS arrays are resizable 
console.log(cities);

cities.pop()    //removes last element
console.log(cities);

cities.unshift("Solapur")   //unshift adds element at the first(0th) position in array
console.log(cities);

cities.shift()  //removes first element in array
console.log(cities);

console.log(cities.includes(9));    //returns true if given element is present in array, else false
console.log(cities.indexOf("Nashik"));    //returns -1 if given element's index is not there in array, else 0

const newArr = cities.join()    //join() converts the array into string data type
console.log(newArr);    
console.log(typeof newArr);

console.log("A ", numArr);
const newArr1 = numArr.slice(1, 3)      //slice(startIndx, endIndx) --> returns section of array as per given range, won't touch actual array
console.log(newArr1);

//original array after slice operation
console.log("B ", numArr);

const newArr2 = numArr.splice(0, 2)     //splice(startindx, numberOfElements)  --> deletes element in the given range from the actual array and returns deleted elements, modifies actual array
console.log("C", newArr2);

//array after splice operation
console.log(numArr);











