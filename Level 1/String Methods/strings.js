var hello = "Hello World I am Alive"
// function upperAndLower(){
//     var upper = hello.toUpperCase();
//     var lower = hello.toLowerCase();
//     var newHello = upper.concat(lower)
//     console.log(newHello)
// }

// upperAndLower()

function middleIndex(){
    var halfHello = hello.length/ 2
    var middle = Math.floor(halfHello)
    var firstHalf = hello.slice(0, middle)
    var lastHalf = hello.slice(middle)
    var upper = firstHalf.toUpperCase()
    var lower = lastHalf.toLowerCase()
    var newHello = upper.concat(lower)
    console.log(newHello)
}

middleIndex()
