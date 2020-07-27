// Movements For Player 1

// Ladder Arrays
// Bottom of Ladders
let ladderStart = [{row: 2, col: 6}, {row: 3, col: 1}, {row: 5, col: 1}, {row: 5, col: 9}, {row: 6, col: 7}, {row: 8, col: 7}, {row: 9, col: 3}];

// Top of Ladders
let ladderStop = [{row: 0, col: 8}, {row: 1, col: 0}, {row: 3, col: 2}, {row: 3, col: 8}, {row: 5, col: 8}, {row: 5, col: 5}, {row: 7, col: 4}];

// Snakes Arrays
// Top of Snake
let snakeStart = [{row: 0, col: 1}, {row: 1, col: 8}, {row: 2, col: 4}, {row: 3, col: 5}, {row: 4, col: 6}, {row: 5, col: 2}, {row: 6, col: 0}, {row: 7, col: 6}];

let snakeStop = [{row: 5, col: 0}, {row: 4, col: 7}, {row: 4, col: 2}, {row: 5, col: 4}, {row: 6, col: 9}, {row: 8, col: 2}, {row: 9, col: 2}, {row: 9, col: 4}];

// // Update Player moving across the grid
function updatePlayer(newRow, newCol) {
    // Remove player class from current loacation
    cellId = "cell" + player.row + "-" + player.col;
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

    moveCount++;

}

function climbUpLadders() {
    for (let i = 0; i < ladderStart.length; i++) {
        if (cellId == "cell" + ladderStart[i].row + "-" + ladderStart[i].col) {
            console.log("Hello, I have arrived");
            snakesandladdersMovement(ladderStart[i].row, ladderStart[i].col, ladderStop[i].row, ladderStop[i].col, "climed up the ladder!");
        }

    }
}

function slideDownSnakes() {
    for (let i = 0; i < snakeStart.length; i++) {
        if (cellId == "cell" + snakeStart[i].row + "-" + snakeStart[i].col) {
            snakesandladdersMovement(snakeStart[i].row, snakeStart[i].col, snakeStop[i].row, snakeStop[i].col, "slid down the snake!");
        }   
    }
}


// Move up or down snakes and ladders
function snakesandladdersMovement(baseRow, baseCol, topRow, topCol, direction) {
    if (cellId == "cell" + baseRow + "-" + baseCol) {
        // cellId = "cell" + 7 +"-" + 4;
        updatePlayer(topRow, topCol);
        document.getElementById("player-movements").innerHTML = "Your player " + direction;
    }
}

