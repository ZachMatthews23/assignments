const arr = [2, 5, 100]

const result = arr.map(function doubleNumbers(arr){
    return arr * 2
  })
  
  console.log(result);

const result2 = arr.map(function stringItUp(num){
    return num.toString()
  })

  console.log(result2)

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const result3 = names.map(function (name){
    return name.toUpperCase()
})
console.log(result3)

const namesArr = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]; 

  const result4 = namesArr.map(function (names){
      return names.name
  })

  console.log(result4)

const result5 = namesArr.map(function (matrix){
    if(matrix.age >= 18){
        return matrix.name + " is allowed to go to the movie."
    } else {
        return matrix.name + " is not allowed to go to the movie."
    }
})

console.log(result5)

const result6 = namesArr.map(function (people){
    document.createElement('h1').innerText = people.name
    document.createElement('h2').innerText = people.age
})

console.log(result6)