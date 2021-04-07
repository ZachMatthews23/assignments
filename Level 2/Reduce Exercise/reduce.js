const nums = [1,2,3]

const result = nums.reduce(function(final, num){
    final += num
    return final
})

console.log(result)

const result2 = nums.reduce(function(final, num){
    final = nums.join("")
    return final
}, "")

console.log(result2)

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const result3 = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
}, 0)

console.log(result3)

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const result4 = wishlist.reduce(function(final, items){
    final += items.price
    return final
}, 0)

console.log(result4)

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const result5 = arrays.concat()

console.log(result5)

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const result6 = voters.reduce(function(final, voter){
    if(voter.age <= 18 && voter.age >= 25){
        youngPeople++
    } if(voter.age <= 18 && voter.age >= 25 && voter.voted){
        youngVotes++
    } if(voter.age <= 26 && voter.age >= 35){
        midPeople++
    } if(voter.age <= 26 && voter.age >= 35 && voter.voted){
        midVotes++
    } if(voter.age <= 36 && voter.age >= 55){
        oldPeople++
    } if(voter.age <= 36 && voter.age >= 55 && voter.voted){
        oldVotes++
    }
    return final
}, { youngVotes: 0, youngPeople: 0, midVotes: 0, midPeople: 0, oldVotes: 0, oldPeople: 0})

console.log(result6)