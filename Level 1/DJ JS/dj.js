var square = document.getElementById("square");

square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "cyan";
});

square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "firebrick"
});

square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "gold"
});

square.addEventListener("dblclick",function(){
    square.style.backgroundColor = "forestgreen"
});

document.addEventListener("scroll", function(){
    square.style.backgroundColor = "orange"
});

square.addEventListener("mouseout", function(){
    square.style.backgroundColor = "white"
});

document.addEventListener("keydown", function(e){
    if (e.keyCode == 82){
        square.style.backgroundColor = "firebrick"
    } else if (e.keyCode == 66){
        square.style.backgroundColor = "cyan"
    } else if (e.keyCode == 89){
        square.style.backgroundColor = "gold"
    } else if (e.keyCode == 71){
        square.style.backgroundColor = "forestgreen"
    } else if (e.keyCode == 79){
        square.style.backgroundColor = "orange"
    } else if (e.keyCode == 87){
        square.style.backgroundColor = "white"
    }
});