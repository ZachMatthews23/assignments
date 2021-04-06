const arr = [1, 3, 5, 2, 90, 20]

arr.sort((a, b) => a - b)
console.log(arr)

arr.sort((a, b) => b - a)
console.log(arr)

const strings = ["dog", "wolf", "by", "family", "eaten"]

strings.sort((a, b) => a.length - b.length)
console.log(strings)

strings.sort()
console.log(strings)

const users = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

users.sort((a , b) => a.age - b.age)
console.log(users)