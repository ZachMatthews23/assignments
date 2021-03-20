var readlineSync = require('readline-sync');

var name = readlineSync.question('Enter Players Name: ');

var welcome = readlineSync.question((name) + ", welcome to Escape Room. Press enter to play.");

var choices = readlineSync.question("Choose an action: 1. Put hand in hole, 2. Find the key, 3. Open the door ");

switch(choices){
    case "1":
        console.log("Oh no! You have died!");
        break;
    case "2":
        console.log("You Found a Key!");
        break;
    case "3":
        console.log("The door is locked!");
        break;
};

if((choices) === "1"){
    var choices2 = readlineSync.question("Choose an action: 1. Put hand in hole, 2. Find the key, 3. Open the door "); 
} else if ((choices) === "3"){
    var choices2 = readlineSync.question("Choose an action: 1. Put hand in hole, 2. Find the key, 3. Open the door ");
} else if ((choices) === "2"){
    var choices3 = readlineSync.question("Choose another action: 1. Put hand in hole, 3. Open the door ");
};

if ((choices3) === "3"){
    console.log("The door is unlocked! You Win!")
} else if ((choices2) === "1"){
    console.log("You died again! Game Over!")
} else if ((choices2) === "2"){
    console.log("You found a key!")
} else if ((choices2) === "3"){
    console.log("The door is locked!")
};

if ((choices2) === "2"){
    var choices4 = readlineSync.question("Choose another option: 1. Put hand in hole, 3. Open the door ")
};

if ((choices4) === "3"){
    console.log("The door is unlocked! You Win!")
} else if ((choices4) === "1"){
    console.log("You died! Game Over!")
};
