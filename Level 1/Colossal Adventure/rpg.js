const readlineSync = require('readline-sync')

console.log("Welcome to the action role playing game Colossal Adventure. \nYou play as a traveler trying to make their way through the enchanted forest. \nIt is your goal to survive and defeat all the enemies that you might encounter along the way. \nOnce all enemies are defeated you will lift the spell and be able to exit the forest, or die trying..... \nGood luck!")

const player = {
    name: readlineSync.question("Traveler, what is your name? "),
    hp: 100,
    inventory: [],
    maxAttack: 50,
    minAttack: 25
}
console.log(player)

const enemies = [
    {
        name: "Goblin",
        hp: 50,
        maxAttack: 25,
        minAttack: 10
    },
    {
        name: "Ogre",
        hp: 100,
        maxAttack: 50,
        minAttack: 25
    },
    {
        name: "Ghoul",
        hp: 75,
        maxAttack: 40,
        minAttack: 30
    }
];

console.log(enemies.name)

// readlineSync.question("You must defeat these enemies in order to escape: " + enemies)
readlineSync.question("Welcome, " + player.name + "\nPress 'W' to begin you adventure! ");

