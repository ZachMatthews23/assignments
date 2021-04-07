var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const newArr = peopleArray.filter(old => old.age >= 18)

console.log(newArr)

newArr.sort((a, b) => a.lastName.localeCompare(b.lastName))

console.log(newArr)

const finalArr = newArr.map(function(people){
    return "<li>" + people.firstName + " " + people.lastName + " " + people.age + "<li>"
})

console.log(finalArr)

