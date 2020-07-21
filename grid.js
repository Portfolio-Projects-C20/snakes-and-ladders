// Grid Functions
function createGridArray() {
    // Create and retrun a grid array
    return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}

function createDivGrid(grid) {
    // Loop through rows and columns of grid 
    for (let row = 0; row < numOfRows; row++) { //always start with row 
        for (let col = 0; col < numOfCols; col++) {
            // Create a div for each element in 2D grid
            let divEl = document.createElement("div");

            // Add an id to each divEl
            divEl.id = "cell" + row + "-" + col;

            // Add appropriate class to each divEl
            if (grid[row][col] == 1) {
                divEl.classList.add("player");
            } else if(grid[row][col] == 2){
                divEl.classList.add("indicator");
            }
            // Add dataset values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col;


            // Add div to container
            document.getElementById("container").append(divEl);
        }
    }
}