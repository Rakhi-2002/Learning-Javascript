 const score = 100;
 const scoreVal = 100.3;
 const isLoggedIn = true;
 const outsideTemp = null;
 let userName;

 const id = Symbol('123')
 const empId = Symbol('123')

 const bigNumber = 1234523456768656
 console.table([typeof(score), typeof(scoreVal), typeof(isLoggedIn), typeof(outsideTemp), typeof(userName), typeof(id), typeof(empId), typeof(bigNumber)]);
 console.log(id === empId);
 
 const heros = ["shaktiman", "naagraj", "doga"]

 let obj = {
    name: "Rakhi",
    age: 22,
    location: "Maharashtra"
 }

 const tempFunc = function(){
    console.log("Hello World!!");
 }

 console.table([typeof heros, typeof obj, typeof tempFunc]);
 
 