var readlineSync = require('readline-sync');

var num1 = readlineSync.questionInt("Please enter your first number ");
    
var num2 = readlineSync.questionInt("Please enter your second number ");
    
var math = readlineSync.question("Please enter the operation to perform: add, sub, mul, div");

switch(math){
    case "add":
        console.log("The result is: " + Number(num1 + num2));
        break;
    case "sub":
        console.log("The result is: " + Number(num1 - num2));
        break;
    case "mul":
        console.log("The result is: " + Number(num1 * num2));
        break;
    case "div":
        console.log("The result is: " + Number(num1 / num2));
};










   