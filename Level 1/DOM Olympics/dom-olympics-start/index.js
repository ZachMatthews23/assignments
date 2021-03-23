var newH1 = document.createElement("h1")
newH1.textContent = "JavaScript Made This!!"
document.body.prepend(newH1)
newH1.style.textAlign ="center"

var newH6 = document.createElement("h6")
newH6.textContent = "Zach wrote this JavaScript"
newH1.append(newH6)
newH6.style.marginTop = "10px"
newH6.style.marginBottom = "10px"

var newLM1 = document.getElementById("left1")
newLM1.textContent = "Dude what's your street name?"
var newLM2 = document.getElementById("left2")
newLM2.textContent = "You live on a street called Lil Marco?"
var newRM1 = document.getElementById("right1")
newRM1.textContent = "Lil Marco"
var newRM2 = document.getElementById("right2")
newRM2.textContent = "Ohhhh. You mean my address?"

var div1 = document.getElementById("messages")
var clear = document.getElementById("clear-button").addEventListener('click', deleteMessages(query))
function deleteMessages(){
    div1.innerHTML = " "
}

document.getElementById("send").addEventListener("click", newMessage());
function newMessage(){
    var messages = document.getElementById("messages")
    var newSpan = document.createElement("span")
    var input = document.getElementById("input")
    newSpan.classList.add("left")
    newSpan.textContent = input.value
    messages.append(newSpan)
}

function changeTheme(){
    var theme = document.getElementById("theme-drop-down").value;
    var left = document.getElementsByClassName("left");
    var right = document.getElementsByClassName("right");
    if(theme == "blue"){
        for (var i = 0; left.length && right.length; i++){
        left[i].style.backgroundColor = "burlywood"
        right[i].style.backgroundColor = "lightblue"
        };
    } else if(theme == "red"){
        for (var i = 0; left.length && right.length; i++){
        left[i].style.backgroundColor = "crimson"
        right[i].style.backgroundColor = "lightslategray"
        };
    }
    
}