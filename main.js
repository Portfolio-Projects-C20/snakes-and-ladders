// Snakes and Ladders

// Global Constants and Variables
const numOfRows = 10;
const numOfCols = 10;

let cellId;
// Create an array to represent a grid
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
// Id of dice so that player cannot move without dice being pressed
document.getElementById("rollDice").addEventListener("keydown", movePlayer);

// Event Function
function movePlayer(event) {
    // Players can only move along number order of grid
    if (event.keyCode == 39 && moveCount < dice) { //Right arrow key
        if (player.col == 9 && player.row % 2 == 1) {
            updatePlayer(player.row - 1, player.col);
        } else if (player.col < 9) {
            updatePlayer(player.row, player.col + 1);
        }
    }

    if (event.keyCode == 37 && moveCount < dice) { //Left Arrow Key
        if (player.col == 0 && player.row % 2 == 0) {
            updatePlayer(player.row - 1, player.col)
        } else if (player.col > 0) {
            updatePlayer(player.row, player.col - 1);
        }
    }

    // Up and down the ladders when player lands on specific squares
    if (moveCount == dice) {
        document.getElementById("player-movements").innerHTML = "Stop! Roll the dice again!"
        climbUpLadders();
        slideDownSnakes();

    }

    // Add powerUp
    PowerUp();

    // Congratulations, game is over!
    finalSquare();


}

