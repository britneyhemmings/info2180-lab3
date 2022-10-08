document.addEventListener("DOMContentLoaded", function() {
    let squares= document.getElementById("board").querySelectorAll("div");
    console.log(squares);
    squares.forEach(function(elem){
        elem.classList.add("square");
    })
}) 