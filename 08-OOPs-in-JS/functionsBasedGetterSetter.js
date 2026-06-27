//Defining properties based upon Getters and Setters

/**
 * 1. Classes
 * In case of classes, we get built in getters and setters
 * 2. Functions
 * In case of functions we can use below way to get getters and setters for function properties
 */
function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password;
        },
        set: function(value){
            this._password = value;
        }
    })
}

const chai = new User("rakhi@google.com", "123#$@!");
console.log(chai.email);
