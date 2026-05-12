const divContainer  = document.querySelector("#divContainer")
const squaresPerRow = 16;

function createGrid (gridWidth){
    for (let i = 0; i<gridWidth; i++){
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j<gridWidth; j++){
            const square = document.createElement("div");
            square.classList.add("square");

            row.appendChild(square);
        }
        
        divContainer.appendChild(row);
    }

}

createGrid (squaresPerRow);
    

