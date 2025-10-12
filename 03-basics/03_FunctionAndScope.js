/*
 * var -> var variables will have global scope, meaning they can be accessed/changed inside of any block also 
   let -> let variables can't be accessed everywhere. Based on where it declared, it will be accessible
 */

var c = 300 //here c value is 300
let a = 400
if(true){
    let a = 10  //this a differs from globally declared a
    const b = 20  //can't accessible outside of if block
    var c = 30  //as var is globally accessible, c value changes to 30
}

// console.log(a);      //opt: 400
// console.log(b);      //gives error as we don't have globally declared b
console.log(c);

