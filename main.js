// Snakes and Ladders

// Global Constants
const numOfRows = 10;
const numOfCols = 10;


// Create an array to represemt a grid
let grid = createGridArray();

// Add a player to the grid array
let player = {
    row: 9,
    col: 0
};

grid[player.row][player.col] = 1;

// Create divs to model the grid array
createDivGrid(grid);

// Player Movement - Key Event Listeners
document.addEventListener("keydown", movePlayer);

// Event Function
function movePlayer(event) { // Remove the player when right arrowkey is pressed, find the element with id cell row, col and then remove the player class
    console.log(event.keyCode);
        // Place boundries on edges of grid
        if (event.keyCode == 39) { //Right arrow key
            updatePlayer(player.row, player.col + 1);

        } else if (event.keyCode == 37) { //Left Arrow Key
            updatePlayer(player.row, player.col - 1);

        } else if (event.keyCode == 38) {
            updatePlayer(player.row - 1, player.col);

        } else if (event.keyCode == 40) {
            updatePlayer(player.row + 1, player.col);
        }
}

function updatePlayer(newRow, newCol) {
    // Remove player class from current loacation
    let cellId = "cell" + player.row + "-" + player.col;
    document.getElementById(cellId).classList.remove("player");

    //  Set grid array to 0 for current location
    grid[player.row][player.col] = 0;

    // Update player location 
    player.row = newRow;
    player.col = newCol;

    // Update class and grid
    cellId = "cell" + player.row + "-" + player.col;
    document.getElementById(cellId).classList.add("player");

    grid[player.row][player.col] = 1;
}
