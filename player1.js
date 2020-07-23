// Movements For Player 1

// Arrays for snakes and ladders


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



// Move up or down snakes and ladders
function snakesandladdersMovement(baseRow, baseCol, topRow, topCol, direction) {
    if (cellId == "cell" + baseRow + "-" + baseCol) {
        // cellId = "cell" + 7 +"-" + 4;
        updatePlayer(topRow, topCol);
        document.getElementById("player-movements").innerHTML = "Your player climed " + direction + " the ladder!";
        console.log(cellId);
    }
}

