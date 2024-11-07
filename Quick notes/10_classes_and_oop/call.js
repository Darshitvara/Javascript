function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    // console.log(this)
}

function createUser(username, email, password){
    // SetUsername(username)
    SetUsername.call(this, username)
   // call is used to pass the current context.
   // because each time another function is called and executed it clears the execution context and the values will be viped out.
   // it stops the data lose.
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);