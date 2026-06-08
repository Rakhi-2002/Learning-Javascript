class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)     //behaves same as call(this, value)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);        
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addCourse();
chai.logMe();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

//below output = false
console.log(chai === masalaChai);

//chai is an instanceof Teacher
console.log(chai instanceof Teacher);

//chai is an instanceof Teacher -> Teacher is an instanceof User
console.log(chai instanceof User);


