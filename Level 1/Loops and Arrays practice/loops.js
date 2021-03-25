var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0
for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        count++
    }
}
console.log(count)

var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

for (var i = 0; i < people.length; i++){
    if(people[i].age >= 18){
        console.log(people[i].name + " is allowed to see the movie.")
    } else if(people[i].age < 18){
        console.log(people[i].name + " is not allowed to see the movie.")
    }
}

// var lightSwitch = [2 , 3 , 2]

// for (var i = 0; i < lightSwitch.length; i++){
//     if(lightSwitch[i] % 2 === 0){
//         console.log("The light is off")
//     } else if(lightSwitch[i] % 2 === 1){
//         console.log("The light is on")
//     }
// }