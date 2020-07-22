// Movements For Player 1

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
}

// Event Function
function movePlayer(event) {
    let rightCol = player.col <= 8;
    let leftCol = player.col >= 1;
    let upRow = player.row >= 1;
    let downRow = player.row <= 8;

    // Place boundries on edges of grid
    if (event.keyCode == 39 && rightCol) { //Right arrow key
        updatePlayer(player.row, player.col + 1);

    } else if (event.keyCode == 37 && leftCol) { //Left Arrow Key
        updatePlayer(player.row, player.col - 1);

    } else if (event.keyCode == 38 && upRow) { //Up Arrow Key
        updatePlayer(player.row - 1, player.col);

    } else if (event.keyCode == 40 && downRow) { //Down Arrow Key
        updatePlayer(player.row + 1, player.col);
    }

    // Remove indicator when player lands on proper square
    if (indicatorCellId == cellId) {
        document.getElementById(indicatorCellId).classList.remove("indicator");
        document.getElementById("player-movements").innerHTML = "Great Job! Roll the dice again!";
    }

}






// Move up the ladder
function ladderMovement(baseRow, baseCol, topRow, topCol, direction) {
    if (cellId == "cell" + baseRow + "-" + baseCol) {
        // cellId = "cell" + 7 +"-" + 4;
        updatePlayer(topRow, topCol);
        document.getElementById("player-movements").innerHTML = "Your player climed " + direction + " the ladder!";
        console.log(cellId);
    }
}