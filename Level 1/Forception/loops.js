var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphabet = alphabet.toUpperCase();
var newAlphabet = alphabet.split("");
var newArr = []

for(var i = 0; i < people.length; i++){
    newArr.push(people[i])
    for(var j = 0; j < newAlphabet.length; j++){
        newArr.push(newAlphabet[j]);
    }
}
console.log(newArr)