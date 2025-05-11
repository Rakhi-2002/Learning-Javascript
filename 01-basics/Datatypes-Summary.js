 //----------------------- Summary on Imp data types in JS ----------------------------------------------
 
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
 
 //---------------- Understanding Stack and Heap usage in data storage ----------------

 //Stack: Call by Value Example
 let name = "Rakhi";
 let anotherName = name;

 anotherName = "Bhagwat";
 
 console.log(name);
 console.log(anotherName);

 //Heap: Call by Reference Example 
 let userInfo = {
   name: "Rutika",
   upiId: "rutika23@ybl"
 }
 console.log(userInfo);

 let AnotherUser = userInfo;
 AnotherUser.name = "Priya";

 console.log(AnotherUser);
 console.log(userInfo);

 function print(){
   //Stored in Stack
   let name = "Anjali";
   let salary = 30000;

   console.table([name, salary]);

   //Stored in Heap
   let roleDesc = {
      role: "Java Developer",
      location: "Pune",
      empId: 123456,
      name: name,    //pass by value is used, so copy of name will be passed and not its reference
      name: "Anita"
   }
   console.log(roleDesc);
   console.log(name);
 }

 print();
