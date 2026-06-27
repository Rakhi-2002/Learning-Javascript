class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password() {
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}
/**
 * Note - Understand below errors
 * TypeError: Cannot set property password of #<User> which has only a getter
 * RangeError: Maximum call stack size exceeded
 */
const hitesh = new User("hitesh@h.ai", "abc")
console.log(hitesh.password);

//_email and email both are different properties (as per their names) but they are 2 different ways to initialize and get the values (i.e., using 1- Constructor and 2-GetterSetter)
console.log(hitesh._email);
console.log(hitesh.email);


