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

//child function (two()) can access things from parent function (one())
function one(){
  const username = "Rakhi"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);    //it gives error as website is not defined anywhere in func one()
  
  // two();   //this func have scope or can access outside variables as well as its own function scope (two())

}

one();

if(true){
  const username = "rakhi"
  if(username === "rakhi") {
    const website = "Youtube"
    console.log(username + " " + website);
  }
  // console.log(website);    //gives error as website is not in this scope
  
}
// console.log(username);    //gives error as username is not in global scope, its declared inside if block, so its scope is limited to it

addOne(7)   //No error, its accessible as it behaves as a function

function addOne(num){
  return num + 1;
}

// addTwo(61)     //gives Error: Cannot access 'addTwo' before initialization (Hoisting concept)

const addTwo = function(num){
  return num + 2
}

// console.log(addOne());


