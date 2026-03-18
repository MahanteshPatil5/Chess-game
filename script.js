const squares = document.querySelectorAll("#center div");
squares.forEach(function(square) {
    square.addEventListener("click",function(){
        movePawn(square);
    }
    );
});

let selectedPawn = null;

function movePawn(square){
    // selectedPawn = square;
    // if green clicked -> move pawn
    if(square.style.background == "lightgreen" && selectedPawn){
        square.textContent = selectedPawn.textContent;
        selectedPawn.textContent = "";
        return;
    }

    console.log(square);
    if(square.textContent === '♙' || square.textContent === '♟'){
        console.log("Pawn selected");
        square.style.background  = "red";
        
        const index = Array.from(squares).indexOf(square);
        if(square.textContent === '♙'){
            squares[index-8].style.background = "lightgreen";
        }
        if(square.textContent === '♟'){
            squares[index+8].style.background = "lightgreen";
        }
        selectedPawn = square;
    }
}
