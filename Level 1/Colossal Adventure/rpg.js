const readlineSync = require('readline-sync')

// Welcome message
console.log("Welcome to the action role playing game Colossal Adventure. \nYou play as a traveler trying to make their way through the enchanted forest. \nIt is your goal to survive and defeat all the enemies that you might encounter along the way. \nOnce all enemies are defeated you will lift the spell and be able to exit the forest, or die trying..... \nGood luck!")

// Creating the players information
const player = {
    name: readlineSync.question("Traveler, what is your name? "),
    hp: 100, 
    attack: 35
}
// console.log(player)

// Constructor function to create the enemies
function Enemies(name, hp, attack, hpPotion){
    this.name = name,
    this.hp = hp,
    this.attack = attack
    this.hpPotion = hpPotion 
}

// Enemies
const enemiesArr = [];
const goblin = new Enemies("Goblin", 35, 25, 10)
const ghoul = new Enemies("Ghoul", 60, 35, 20)
const ogre = new Enemies("Ogre", 75, 45, 30)
enemiesArr.push(goblin, ghoul, ogre);

// Array with the enemies pushed into it
// console.log(enemiesArr)

// Player walking with 1/3 chance of an enemy attacking.
function walking(){
    let attackOrWalk = Math.random();
    if(attackOrWalk < 0.35){
        enemyAmbush();
    } else {
        readlineSync.keyIn("You are safe for now traveler! ", {limit: ['w']});
    }
}

// Function that chooses one of the 3 enemies to attack the player 
function enemyAmbush(){
    let enemySelected = Math.floor(Math.random() * enemiesArr.length);
    if(enemySelected == 0){
        console.log(enemiesArr[0]);
        fight();
    } else if(enemySelected == 1){
        console.log(enemiesArr[1]);
        fight();
    } else if(enemySelected == 2){
        console.log(enemiesArr[2]);
        fight();
    }
}

// Function that allows player to attack or to run
function fight(){
    let attackOrRun = readlineSync.keyIn("You have been attacked! Press 'A' to attack or 'R' to run! ", {limit: ['a', 'r']});
    if(attackOrRun === 'a'){
        console.log("You have attacked!")
    } else if(attackOrRun === 'r'){
        console.log("You attempted to run!")
    }
    
}

let welcome = readlineSync.keyIn("Welcome, " + player.name + "\nPress 'W' to begin you adventure! ", {limit: ['w']});

// While loop that run through the walk function as long as the players hp is above 0 and the enemy array still has at least one enemy in it
while(enemiesArr.length > 0 && player.hp > 0){
if(welcome === 'w'){
    readlineSync.keyIn("Press W to continue ", {limit: ['w']});
    walking();        
}}



