const readlineSync = require('readline-sync')
const chalk = require('chalk')

// Random number function that uses a min and max number to pick a number in that range.
const randomAttack = function(max,min){
    return Math.floor((Math.random()* max)+min)
    }
// Welcome message
console.log(chalk.black.bgWhite.bold("Welcome to the action role playing game Colossal Adventure. \nYou play as a traveler trying to make their way through the enchanted forest. \nIt is your goal to survive and defeat all the enemies that you might encounter along the way. \nOnce all enemies are defeated you will lift the spell and be able to exit the forest, or die trying..... \nGood luck!"));

// Creating the players information
const player = {
    name: readlineSync.question(chalk.black.bgWhite.bold("Traveler, what is your name? ")),
    hp: 100, 
    minAttack: randomAttack(15, 10),
    maxAttack: randomAttack(25, 10)
}
// console.log(player)

// Constructor function to create the enemies
function Enemy(name, hp, hpPotion, minAttack, maxAttack){
    this.name = name,
    this.hp = hp,
    this.hpPotion = hpPotion,
    this.minAttack = minAttack,
    this.maxAttack = maxAttack 
}

// Enemies
// Array with the enemies pushed into it
let enemiesArr = [];
const goblin = new Enemy("Goblin", 45, 10, randomAttack(10, 5), randomAttack(10, 10))
const ghoul = new Enemy("Ghoul", 55, 20, randomAttack(15, 5), randomAttack(15, 15))
const ogre = new Enemy("Ogre", 60, 30, randomAttack(15, 10), randomAttack(20, 15))
enemiesArr.push(goblin, ghoul, ogre);


// Random enemy selector function
function randomEnemy(){
    enemySelected = enemiesArr[Math.floor(Math.random() * enemiesArr.length)];
}

let welcome = readlineSync.keyIn("Welcome, " + player.name + "\nPress 'W' to begin you adventure! You can also press 'P' to see your status. ", {limit: ['w', 'p']});

// While loop that run through the walk function as long as the players hp is above 0 and the enemy array still has at least one enemy in it
while(enemiesArr.length > 0 && player.hp > 0){
if(welcome === 'w'){
    walking();       
} else if(welcome === 'p'){
    playerInfo();
    break;
} else if(player.hp <= 0){
    console.log(chalk.black.bgRed("YOU HAVE DIED! GAME OVER!"));
}
}

function playerInfo(){
    console.log(player)
    walking();
}

// Player walking with 1/3 chance of an enemy attacking.
function walking(){
    let attackOrWalk = Math.random() * 100;
    if(attackOrWalk <= 33){
        randomEnemy();
        console.log(chalk.red(enemySelected.name, 'attacked!'));
        let attackOrRun = readlineSync.keyIn("You have been attacked! Press 'A' to attack or 'R' to run! ", {limit: ['a', 'r']});
        if(attackOrRun === 'a'){
            fight();                     
        } else if(attackOrRun === 'r'){
            run(); 
        } 
    } else {
        let adventure = readlineSync.keyIn("You are safe for now traveler! Press 'W' to walk or 'P' to see your status. ", {limit: ['w', 'p']});
        if(adventure === 'p'){
            playerInfo();
        } 
    }
}

// Function for the fight with the enemy, it should attack the enemy console log its new health, have the enemy attack the player if it's hp is above 0
// and then repeat as long as the enemy is alive. Once the enemy hp is zero is should continue with the walking function.
function fight(){
    if(enemySelected.hp > 0){
        let damage = randomAttack(player.maxAttack, player.minAttack)
        enemySelected.hp = enemySelected.hp - damage
        console.log(chalk.green('You hit the ' + enemySelected.name + ' and did ' + damage + ' damage. ' + enemySelected.hp));
        if(enemySelected.hp > 0){
            let enemyDamage = randomAttack(enemySelected.maxAttack,enemySelected.minAttack)
            player.hp = player.hp - enemyDamage
            console.log(chalk.red('You have been hit for ' + enemyDamage + ' damage! ' + player.hp));
            fight();
        } else if(enemySelected.hp <= 0){
            console.log(chalk.green('You have defeated the ' + enemySelected.name + '!'));
            player.hp = player.hp + enemySelected.hpPotion
            console.log(chalk.blue('You have gained a health potion! Your hp is now: ' + player.hp))
            enemiesArr = enemiesArr.filter(enemy => enemy !== enemySelected);
            // console.log(enemiesArr)
            if(enemiesArr.length > 0){
                walking();
            } else if (enemiesArr.length === 0){
                console.log(chalk.black.bgGreen.bold("Congratulations, " + player.name + ". You have defeated all of the enemies and lifted the curse!"))
            }
        }else if(player.hp <= 0){
            console.log(chalk.black.bgRed("YOU HAVE DIED! GAME OVER!"));
        }
    }
}

// Function that gives 50% to escape, if successful it continues the walking function if failed it goes into the fight function
function run(){
    if(Math.floor(Math.random() * 100) < 50){
        console.log("You have successfully escaped!");
        walking();
    } else {
        console.log("Oh no! You have failed to escape! Prepare for battle!")
        fight();
    }
}




