const ownerName = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", ownerName)
    return petObjects
}

runForLoop(["cat", "dog"])

//

const carrots = ["bright orange", "ripe", "rotten"]

let mapVegetables = arr => arr.map(carrot => {type: "carrot"; name: carrot})

//

let people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const result = people.filter(person => person.friendly)

console.log(result)

//

const doMath = ((a, b) => a + b)

console.log(doMath(2, 4))

const produceProduct = ((a, b) => a * b)

console.log(produceProduct(3, 5))

//

const printStrings = ((firstName = "Jane", lastName = "Doe", age = 100) => (`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`))

console.log(printStrings())

//

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

 const filterForDogs = animals.filter(animal => animal.type === "dog")

 console.log(filterForDogs)

 //

 const welcome = ((name, location) => (`Hi ${name}! \n \nWelcome to ${location}. \n \nI hope you enjoy your stay. Please ask the president of ${location} if you need anyhting.`))

 console.log(welcome("Zach", "Mexico"))