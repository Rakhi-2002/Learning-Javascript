//Functions in JS

//function declaration OR function definition OR function syntax
function myName(){
    console.log("My name is Rakhi");
    
}

//function name(myName) --> function reference
//myName() --> function execution
myName();
console.log(myName);    //output: [Function: myName]

//function to add two numbers, it prints sum of 2 numbers and doesnt return any value
//here, num1 and num2 are parameters
function addTwoNums(num1, num2){
    console.log(num1 + num2);   
}

//here, 1 and 10 are arguments
addTwoNums(1,10)
addTwoNums()        //otp: NaN, as both num1 and num2 are empty or didnt pass yet

const result = addTwoNums(3, 9)
console.log(result);    //otp: undefined as addTwoNums() funtion doesnt return anything

//Note: below function return sum of num1, num2. After return it don't do anything(any logic, printing,etc). So, code next to return is unreachable code
function addTwoNumstemp(num1, num2){
    let res = num1 + num2
    return res  
    console.log("Hello");   //unreachable code
}

const result2 = addTwoNumstemp(10, 30)
console.log(result2);       //otp: 40

//function to display a message to logged in user
function loginUserMsg(username = "Rani"){
    //OR (!username) can be used, its same as below condition
    if(username === undefined){ 
        console.log("No value entered. Please enter a valid username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("Rakhi"));
console.log(loginUserMsg());        //otp: undefined, as no value/args passed to it


//------------------- Important Notes Summarized-----------------------------

/**
 * By default undefined is equivalent to false value.
 * returning function has to do console.log() when it is called, to print the returning value. After return statement, all code will be unreachable 
 * function which doesnt return anything and only prints, need not to do console.log while calling it
 * when we pass some value in function call as an argument, it has more priority in comparison with the value assigned to the corresponding parameter in the function definition.
 */ 

