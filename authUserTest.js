const {LogInUser, SignUpUser} = require("./authUser")

var testUserAuth = (name) => {
    let user = SignUpUser(name);

    if(user) {
        var userAuthSucc = LogInUser(user)
    }
   console.log(userAuthSucc)
    // console.log();
    
}

testUserAuth("Turab")