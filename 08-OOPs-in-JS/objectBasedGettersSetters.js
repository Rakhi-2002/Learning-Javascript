/**
 * Defining Getters and Setters for Objects
 */

const User = {
    //here, _email represents it as a private property
    _email: 'h@hc.com',
    _pass: 'rakhi@!@#$%&',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User)
console.log(tea.email); //tea.email represents we are calling or making use of getter for email property. Here, email doesnt represent _email property, it represents getter on _email property


//Learn About ES2022 Private proposal
