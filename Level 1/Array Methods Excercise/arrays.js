var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
fruit.shift();

var orange = fruit.indexOf("orange");

fruit.push("1");
vegetables.push("3");

var food = fruit.concat(vegetables);

food.splice(4,2);

food.reverse();

var newFood = food.join(",");
console.log(newFood)