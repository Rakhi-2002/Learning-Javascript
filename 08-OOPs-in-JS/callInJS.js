function setUserName(username) {
    //complex DB calls
    this.username = username;
    console.log("this method is called");
    
}

function createUser(username, email, password) {
    //below method is getting called. But once its execution completes, its execution context will be removed from the memory. Hence, username will set but as soon as it vipes out of memory, createUser will not have access to the username. 
    // setUserName();

    //Thus, need to use call() to store/save the reference of setUsername()
    //this in call() --> passing reference of current function's context(createUser) to another method(setUsername), to set this -> variables(createUser.username) in another method. It allows to set username even if setUserName -> execution context get erased from the memory

    setUserName.call(this, username);

    this.email = email;
    this.password = password;
}

const obj = new createUser("Rakhi", "chai@twitter.com", "1234");
console.log(obj)