const divContainer  = document.querySelector("#divContainer")
let squaresPerRow = 16;
const resizeGrid = document.querySelector("#resizeGrid")

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


divContainer.addEventListener("mouseover", (e) => {
    const square = e.target.closest(".square");
    if (!square) return;

    square.style.backgroundColor = "red";
});

resizeGrid.addEventListener("click", function(){
    const userInput = prompt("enter new grid size");
    let newSize = Number(userInput);
        if (!isNaN(newSize)) {

            if (newSize>100){
                newSize = 100;
            }
            divContainer.innerHTML = "";
            squaresPerRow = newSize;
            createGrid (squaresPerRow);
        }
});





