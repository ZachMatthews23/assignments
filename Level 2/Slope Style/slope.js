const animals = ["dog", "cat", "mouse", "jackolope", "platypus", "horse"]

const collectAnimals = [...animals]

console.log(collectAnimals)

//

function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

//
 
function parseSentence(location = "Burly Idaho", duration = "2 weeks"){
    return `We're going to have a good time in ${location} for ${duration}.`
}

console.log(parseSentence())

//

function returnFirst(items){
    const [first, second, third] = items;
    return first
}

//

let favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(...favoriteActivities){
    return `My top three favorite activities are ${favoriteActivities[0]}, ${favoriteActivities[1]}, and ${favoriteActivities[2]}.`;
}

console.log(returnFavorites(...favoriteActivities))

//

function combineAnimals(...allAnimals){
    return [...allAnimals] 
}

const realAnimals = ["dog", "cat", "mouse", "horse"];
const magicalAnimals = ["jackolope", "unicorn"];
const mysteriousAnimals = ["platypus", "weasel"];

console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals)) 

//

