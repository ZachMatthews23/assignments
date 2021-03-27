let fizzBuzz = function (){
    let arr = [];

    for(let i = 1; arr.length <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push('fizzbuzz')
        } else if(i % 5 === 0){
            arr.push('buzz')
        } else if(i % 3 === 0){
            arr.push('fizz')
        } else {
            arr.push(i)
        }
    }
    console.log(arr)
}

fizzBuzz()