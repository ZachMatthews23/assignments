const numbers = [3, 6, 8, 2]

const result = numbers.filter(num => num >= 5)

console.log(result)

const result2 = numbers.filter(num => num % 2 === 0)

console.log(result2)

const strings = ["dog", "wolf", "by", "family", "eaten", "camping"]

const result3 = strings.filter(words => words.length <= 5)

console.log(result3)

const illuminati = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const result4 = illuminati.filter(confirmed => confirmed.member === true)

console.log(result4)

const matrix = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const result5 = matrix.filter(old => old.age >= 18)

console.log(result5)