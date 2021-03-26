// for(var i = 0; i <= 9; i++){
//     console.log(i)
// }

// for(var i = 9; i >= 0; i--){
//     console.log(i)
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]
// for(var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }

// for(var i = 0; i <= 9; i++){
//     console.log([i])
// }

// for(var i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// for(var i = 0; i < fruit.length; i+=2){
//     console.log(fruit[i])
// }

// const people = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

// var nameArr = [];
// var jobArr = [];

// for(var i = 0; i < people.length; i+=2){
//   nameArr.push(people[i].name)
//   jobArr.push(people[i].occupation)
// } 
// console.log(nameArr)
// console.log(jobArr)


var newArr = []

for(var i = 0; i <= 0; i++){
  newArr.push();
  var innerArr = [];
  for(var j = 0; j <= 2; j++){
      innerArr.push(j)
      newArr.push(innerArr)
  }
}
console.log(newArr)