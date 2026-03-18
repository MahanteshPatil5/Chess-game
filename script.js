const squares = document.querySelectorAll("#center div");
squares.forEach(function(square) {
    square.addEventListener("click",function(){
        movePawn(square);
    }
    );
});

// let selectedPawn = null;
// function movePawn(square) {

//     selectedPawn = square;
//         if(square.style.background === "lightgreen" && selectedPawn){
//             square.textContent = selectedPawn.textContent;
//             selectedPawn.textContent = "";
//             // selectedPawn = null;
//             return;
//         }

//     console.log(square);
//     if(square.textContent === "♙" || square.textContent === "♟"){
//         console.log("pawn selected");
//         square.style.background = "red";
        
//         const index = Array.from(squares).indexOf(square);

//         if(square.textContent === "♟"){
//         squares[index-8].style.background = "lightgreen";}

//         if(square.textContent === "♙"){
//         squares[index+8].style.background = "lightgreen";}
// }
    
// }

let selectedPawn = null;

function movePawn(square){

    // ✅ STEP 1 — If GREEN clicked → move pawn
    if(square.style.background === "lightgreen" && selectedPawn){
        square.textContent = selectedPawn.textContent;
        selectedPawn.textContent = "";
        selectedPawn = null;
        clearHighlights();
        return;
    }

    // ✅ STEP 2 — If pawn clicked → select + highlight
    if(square.textContent === "♙" || square.textContent === "♟"){

        clearHighlights(); // remove old highlights

        selectedPawn = square;
        square.style.background = "red";

        const index = Array.from(squares).indexOf(square);

        if(square.textContent === "♙"){   // white pawn
            squares[index-8].style.background = "lightgreen";
        }

        if(square.textContent === "♟"){   // black pawn
            squares[index+8].style.background = "lightgreen";
        }
    }
}
function clearHighlights(){
    squares.forEach(sq => {
        sq.style.background = "";
    });
}