const squares = document.querySelectorAll("#center div");
squares.forEach(function(square) {
    square.addEventListener("click",function(){
        movePawn(square);
    }
    );
});

function movePawn(square) {
    console.log(square);
    if(square.textContent === "♙" || square.textContent === "♟"){
        console.log("pawn selected");
        square.style.background = "red";
        
        const index = Array.from(squares).indexOf(square);

        if(square.textContent === "♟"){
        squares[index-8].style.background = "lightgreen";}

        if(square.textContent === "♙"){
        squares[index+8].style.background = "lightgreen";}
}
}
