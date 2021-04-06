const button = document.getElementById("button");
let clicks = 0;

button.addEventListener("click", function(){
    clicks += 1;
    var count = document.getElementById('clicks').innerText = clicks 
    localStorage.setItem('clicks', count)
})










