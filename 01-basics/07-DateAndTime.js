 //epoch date: 1st January 1970 UTC

 let myDate = new Date();
 console.log(myDate);

 //Various Built in Date Methods
 console.log(myDate.toString());
 console.log(myDate.toDateString());    //format: Day Month Date Year
 console.log(myDate.toISOString());
 console.log(myDate.toLocaleDateString());
 console.log(myDate.toLocaleString());  //format: yyyy-mm-dd-hh-mm-ss
 
 console.log(typeof(myDate));


 //to declare a specific date --> Here Date(yyyy, mm, dd) is the format
let myCustomDate = new Date(2023, 0, 23)
console.log(myCustomDate.toDateString());

//here Date and Time format: Date(yyyy, mm, dd, hh, mm, ss)
let myCustomDateTime = new Date(2023, 0, 23, 12, 16, 40)
console.log(myCustomDateTime.toLocaleString());

let custDate1 = new Date("01-13-2025")  //format: mm-dd-yyyy
console.log(custDate1.toLocaleString());

let myTimeStamp = Date.now()    //gives current date in millisec
console.log(custDate1.getTime());
console.log(Math.floor(myTimeStamp/1000));  //to get it in seconds

//Various methods to get any specific day, month.... others

let dt = new Date()
console.log(dt.getMonth());
console.log(dt.getDay());

//more customized way to display date and time
dt.toLocaleString('default', {
    weekday: "long",
})








 
 
 
 
 