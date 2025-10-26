//------------------------ Object and this keyword ----------------

const user = {
    username: "rakhi",
    price: 999,

    //this -> current reference (here it is user object)
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);  //it will print current context (current scope of code where this is used)
    }

}
// user.welcomeMessage()
user.username = "Priya" //changing username value
// user.welcomeMessage()
user.welcomeMessage()
console.log(this);      //otp: {} (node environment)


//--------------- Function and this keyword -------------------
function chai() {
    let usernm = "Rakhi"
    console.log(this.usernm);   //otp: undefined (Reason: cannot use this keywrd in function to access variables. Its usage is only applicable in objects)
}
// chai()

//---------------------- Anonymous and Arrow Function and this keyword ---------------

const anonymousFunc = function () {
    let username = "Rakhi"
    console.log(this.username);   //otp: undefined (Reason: cannot use this keywrd in function to access variables. Its usage is only applicable in objects)
}
// anonymousFunc()

const arrowFunc = () => {
    let username = "Rakhi"
    console.log(this.username);   //otp: undefined (Reason: cannot use this keywrd in function to access variables. Its usage is only applicable in objects)
}
// arrowFunc()

//------------- All about Arrow Function ---------------------

//Implicit return: (one line code where return and {} is not present [2 ways])
const addTwo = (n1, n2) =>  n1 + n2

const addTwo2 = (n1, n2) => (n1 + n2)

const object = () => ({username: "Rakhi"})
console.log(addTwo(10,20));
console.log(addTwo2(8,23));
console.log(object);


/** ----------------------- Important Note ----------------------------
 * Global object in browser: Window Object
 * Arrow function syntax: () => {}
 */
