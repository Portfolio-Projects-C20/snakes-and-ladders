// Snakes and Ladders

// Global Constants and Variables
const numOfRows = 10;
const numOfCols = 10;

let indicatorCellId;
let cellId;
// Create an array to represent a grid
let grid = createGridArray();

// Add a player to the grid array
let player = {
    row: 9,
    col: 0
};
grid[player.row][player.col] = 1;

// Add a indicator to grid array which tells user how many spaces to travel to 
let indicator = {
    row: 0,
    col: 0
};

// Create divs to model the grid array
createDivGrid(grid);


// Player Movement - Key Event Listeners
// Id of dice so that player cannot move without dice being pressed
document.getElementById("rollDice").addEventListener("keydown", movePlayer);

// Event Function
function movePlayer(event) {
    // Players can only move along number order of grid
    if (event.keyCode == 39) { //Right arrow key
        if (player.col == 9 && player.row % 2 == 1) {
            updatePlayer(player.row - 1, player.col);
            
        } else if (player.col < 9) {
            updatePlayer(player.row, player.col + 1);
        }

    }

    if (event.keyCode == 37) { //Left Arrow Key
        if (player.col == 0 && player.row % 2 == 0) {
            updatePlayer(player.row - 1, player.col)
        } else if (player.col > 0) {
            updatePlayer(player.row, player.col - 1);
        }
        
    }

    // Remove indicator when player lands on proper square
    if (indicatorCellId == cellId) {
        document.getElementById(indicatorCellId).classList.remove("indicator");
        document.getElementById("player-movements").innerHTML = "Great Job! Roll the dice again!";
    }


}