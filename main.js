// Snakes and Ladders

// Global Constants
const numOfRows = 10;
const numOfCols = 10;
// Grid Array
// Create an array to represent a grid
// let grid = createGridArray();

// function createGridArray() {
//     // Create and retrun a grid array
//     return [
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     ];
// }

// Create divs 
createDivGrid();

function createDivGrid(grid) {

    // Loop through rows and columns of grid 
    for (let row = 0; row < numOfRows; row++) { //always start with row 
        for (let col = 0; col < numOfCols; col++) {
            // Create a div for each element in 2D grid
            let divEl = document.createElement("div");

            
            // Add div to container
            document.getElementById("container").append(divEl);
        }
    }
}

