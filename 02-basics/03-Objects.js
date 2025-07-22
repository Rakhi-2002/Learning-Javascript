//Singleton Object - using constructors --> e.g., Object.create

const mySymbol = Symbol("key1")     //declaration and initialization of Symbol variable

//Non-Singleton Object - using literals
const user = {
    name: "Rakhi",
    "Full name": "Rakhi Bhagwat",
    age: 23,
    location: "Banglore",
    email: "rakhibhagwat@cgi.com",
    isLoggedIn: false,
    myHobbies: ["Cooking", "Drawing", "Travelling", "WatchingMovies"],
    [mySymbol]: "mykey1",    //to add Symbol data type variable as key in objects

}

user.greeting = function(){
    console.log("Hello JS User :)");
}

user.greetingTwo = function(){
    console.log(`Hello JS User :), ${this.name}`);  //this refers to the user object
}
myArray = ["r", "a", "k", "h", "i"]

//Ways to access values in objects
console.log(user.name);
console.log(user["age"]);   //internally keys are defined as string in Objects
console.log(user["Full name"]);
console.log(user[mySymbol]);

user.email = "rakhi.bhagwat@google.com"
console.log(user.email);

// Object.freeze(user)     //to lock/freeze mentioned object's data, to prevent modification of its data

user.email = "rakhi.bhagwat@gmail.com"
console.log(user.email);

console.log(user);
console.log(user.greeting());     //reference of the function
console.log(user.greetingTwo());     



