// Snakes and Ladders

// Global Constants and Variables
const numOfRows = 10;
const numOfCols = 10;

let cellId;


// Create an array to represemt a grid
let grid = createGridArray();

// Add a player to the grid array
let player = {
    row: 9,
    col: 0
};
grid[player.row][player.col] = 1;

// Add a indicator to grid array which tells user how many spaces to travel to 
let indicator = {
    row:0,
    col:0
};
// grid[indicator.row][indicator.col] = 2;

console.log(indicator);

// Create divs to model the grid array
createDivGrid(grid);

// Player Movement - Key Event Listeners
document.addEventListener("keydown", movePlayer);

