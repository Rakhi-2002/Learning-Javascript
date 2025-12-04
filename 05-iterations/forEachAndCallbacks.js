//----------------------------------------------- About forEach loop, filter, map and reduce callback functions ----------------------------------------------

const coding = ["js", "ruby", "python", "cpp", "java"]

/**
 * Syntax of forEach
 * arrayname.forEach(function (iterator){
 *   -- function body; --
 * })
 */
const value = coding.forEach(function (item){
    console.log(item);
});
console.log(value);     //returns undefined


//Using forEach with Arrow function
coding.forEach((item) => {
    console.log(item);
})

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    //index: index of each item
    //arr: complete array
})

//--------------------------- Iteration over objects(Very Important!!) --------------------------
const myCoding = [
    {
        langName: "Javascript",
        langFileName: "js"
    },
    {
        langName: "Python",
        langFileName: "py"
    },
    {
        langName: "C++",
        langFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.langFileName + " " + item.langName);
})

//----------------- About Filter in JS----------------------

/**
 * In case we want to return some values, in such case will be using .filter() which works similar to the forEach loop
 */
const myNums = [1, 2, 3, 4, 5, 6]
const filterValues = myNums.filter((num) => num < 5)    //Implicit return ({} scope isn't present)so it doesnt need return keyword explicitly
// const filterValues = myNums.filter((num) => {num < 5})   //return [] array as {} bracket is added which represents a scope. In this case, we needs to write return keyword explicitly.
console.log(filterValues);

//Same above task could be performed using forEach with if condition
const newNums = []
myNums.forEach((num) => {
    if(num < 5){
        newNums.push(num)
    }
})
console.log(newNums);

//array of objects
const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publishDate: '1999',
        edition: '1999'
    },
    {
        title: 'Book Two',
        genre: 'History',
        publishDate: '1989',
        edition: '1989'
    },
    {
        title: 'Book Three',
        genre: 'Science',
        publishDate: '1990',
        edition: '1990'
    },
    {
        title: 'Book Four',
        genre: 'Non-Fiction',
        publishDate: '1954',
        edition: '1954'
    },
];

let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) => bk.publishDate > 1980) //returns whole object which matches the given condition
console.log(userBooks);

//------------------------------------ About Map in JS ---------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const updatedNums = numbers.map((num) => num + 10)
console.log(updatedNums);

//-------- Above same task using forEach loop ------------
// numbers.forEach((num) => {
//     num += 10;
//     console.log(num);    
// })

//------------------------------------ Chaining of methods (using multiple methods in chain) ----------------------------------
const num2 = numbers.
    map((num) => num * 10). //first, it will execute 
    map((num => num + 1)).   //it will get resultant array of num from above line
    filter((num) => num >= 40)//it will get resultant arr from above line and then filter will get applied

console.log(num2);  //output: [41, 51,  61, 71, 81, 91, 101]

//-------------------------------- reduce method in JS ----------------------------------------
const nums = [1, 2, 3, 4]
const totalValue = nums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0)

//using arrow func in reduce
const totalVal = nums.reduce((acc, curr) => 
    acc + curr, 0)
console.log(totalValue);
console.log(totalVal);

const shoppingCart = [
    {
        itemNm: "js course",
        price: 2999
    },
    {
        itemNm: "py course",
        price: 999
    },
    {
        itemNm: "mobile dev course",
        price: 4999
    },
    {
        itemNm: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

console.log(priceToPay);

