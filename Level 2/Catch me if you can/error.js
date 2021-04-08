function sum(x, y){
    if(isNaN(x)){
        throw "Not a number!"
    } if(isNaN(x)){
        throw "Not a number!"
    }
    else console.log(x + y);
  }

//console.log(sum("1", "2"))

try{
    sum(77, 2)
}
catch(err){
    console.log(err)
}




var user = {username: "sam", password: "123abc"};
function login(username, password){
    if(username !== user.username) throw "Invalid username, try again!";
    if(password !== user.password) throw "Invalid password, try again";
    else console.log("Log in successful")
}

// login("sam", "123abc")

try{
    login("sam", "123abc")
}
catch(err){
    console.log(err)
}