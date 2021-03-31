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
function Enemy(name, hp, attack, hpPotion){
    this.name = name,
    this.hp = hp,
    this.attack = attack
    this.hpPotion = hpPotion 
}

// Enemies
// Array with the enemies pushed into it
let enemiesArr = [];
const goblin = new Enemy("Goblin", 35, 25, 10)
const ghoul = new Enemy("Ghoul", 35, 35, 20)
const ogre = new Enemy("Ogre", 35, 45, 30)
enemiesArr.push(goblin, ghoul, ogre);


// Random enemy selector function
function randomEnemy(){
    enemySelected = enemiesArr[Math.floor(Math.random() * enemiesArr.length)];
}

let welcome = readlineSync.keyIn("Welcome, " + player.name + "\nPress 'W' to begin you adventure! ", {limit: ['w']});

// While loop that run through the walk function as long as the players hp is above 0 and the enemy array still has at least one enemy in it
while(enemiesArr.length > 0 && player.hp > 0){
if(welcome === 'w'){
    readlineSync.keyIn("Press W to walk. ", {limit: ['w']});
    walking();        
}}


// Player walking with 1/3 chance of an enemy attacking.
function walking(){
    let attackOrWalk = Math.random() * 100;
    if(attackOrWalk < 33){
        randomEnemy();
        console.log(enemySelected.name, 'attacked!');
        let attackOrRun = readlineSync.keyIn("You have been attacked! Press 'A' to attack or 'R' to run! ", {limit: ['a', 'r']});
        if(attackOrRun === 'a'){
            fight();                     
        } else if(attackOrRun === 'r'){
            //run(); 
        } 
    } else {
        readlineSync.keyIn("You are safe for now traveler! Press 'W' to walk. ", {limit: ['w']});
    }
}

// Function for the fight with the enemy, it should attack the enemy console log its new health, have the enemy attack the player if it's hp is above 0
// and then repeat as long as the enemy is alive. Once the enemy hp is zero is should continue with the walking function.
function fight(){
    let damage = player.attack
    let enemyDamage = enemySelected.attack
    let newEnemyHp = enemySelected.hp - damage
    console.log('You hit the ' + enemySelected.name + ' ' + newEnemyHp);
    if (newEnemyHp > 0){
        let newPlayerHp = player.hp - enemyDamage
        console.log('You have been hit! ' + newPlayerHp);
    } else if(newEnemyHp <= 0){
        console.log('You have defeated the ' + enemySelected.name + '!');
        enemiesArr = enemiesArr.filter(function(enemySelected){
            console.log(enemySelected)
        });
        console.log(enemiesArr)
        walking();
    } else if(enemiesArr.length === 0){
        console.log("Congratulations, " + player.name + ". You have defeated all the enemies and escaped the forest!")
    }
}




