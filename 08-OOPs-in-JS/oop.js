// Object literal - below created object is the literal
const user = {
    username: "rakhi",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database"); 

        //this - represents current block OR current context
        console.log(`Username: ${this.username}`);
        console.log(this);  //this --> Current context        
    }
}
// console.log(user.username);

/**
 * Note:
 * object.functionname() - running the method
 * functionname - giving reference of the method to run it (when we assign the method in a variable)
 */

// console.log(user.getUserDetails()); 
// console.log(this);   //this --> here it represents Global context


/**
 * 2. Constructor Function
 * always creates new instance of the original code
 * to give new instance, it uses 'new' keyword 
 * if new keyword is not used, then new instance will not be created and everytime the code will be overridden by new code
 */

/**
 * new keyword
 * empty object instance will be created
 * constructor function will be called when using new keyword
 * data members and functions will be injected in the created object instance
 * we can return or call the created object instance
 */

// const promiseOne = new Promise()
// const date = new Date()

/**
 * Constructor function below
 * it acts as a blueprint, used by all the objects. 
 * These objects will follow the same structure as of given blueprint, along with their unique real/actual values 
 */
function user2(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn  = 
    isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);    //output - [Function (anonymous)]
    }

    // return this
}

//Example - userOne, userTwo follows same structure as of user2, but their actual values differ
const userOne = new user2("Rakhi", 10, true)
const userTwo = new user2("Chai aur code", 12, false)

//below returns reference of self(reference of self object)
console.log(userOne.constructor);   //[Function: user2]

//instanceOf - return true or false, if created instance is the instance of our main object
console.log(userOne instanceof user2);




