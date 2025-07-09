const {LogInUser, SignUpUser} = require("./authUser")

var testUserAuth = (name) => {
    let user = SignUpUser(name);

    if(user) {
        var userAuthSucc = LogInUser(user)
    }
    userAuthSucc.then((res) => console.log(res)
    )
    // console.log();
    
}

testUserAuth("Turab")