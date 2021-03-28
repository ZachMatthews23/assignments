const numbers = [3, 5, 2, 8, 1, 99, 67, -1008, 1001]

function largest(){
    let largest = numbers[0];
    // largest is equal to numbers array at the index of 0, which is 3 in this case.
    for(let i = 0; i < numbers.length; i++){
        // Loop through numbers array starting at the index of 0. 
        if(numbers[i] > largest){
            largest = numbers[i];
            // If the current number that is being indexed is greater than 3, in this case, than replace the value of largest with that number, if not than the value stays the same.
            // So largest would change to 5, 8, 99, and than end on 1001 during the whole for loop process. 
        }
    }
    console.log(largest)
}

largest()



let words = ["#3", "$$$", "C%4!", "Hey!"];

function wordGet(){
    let wordsArr = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].includes("!")){
            wordsArr.push(words[i])
        }
    }
        console.log(wordsArr)
}   


wordGet()



function isDivisable(num1, num2){
    if(num1 % num2 === 0){
        console.log("true")
    } else{
        console.log("false")
    }
}

isDivisable(4, 2)
