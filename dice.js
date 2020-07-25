// Dice Roll

// Event Listener
document.getElementById("rollDice").addEventListener("click", rollDice);

// Array for even and odd numbers
let oddRow = [1, 3, 5, 7, 9];
let evenRow = [0, 2, 4, 6, 8];

// Global Variable
let dice;
// Event Function

function rollDice() {
    dice = Math.randomInt(1, 7);

    if (dice == 1) {
        displayDice("One");
    } else if (dice == 2) {
        displayDice("Two");
    } else if (dice == 3) {
        displayDice("Three");
    } else if (dice == 4) {
        displayDice("Four");
    } else if (dice == 5) {
        displayDice("Five");
    } else if (dice == 6) {
        displayDice("Six");
    }

}

function displayDice(number) {

    // Display dice number image
    document.getElementById("diceImg").src = "images/dice/dice" + number + ".png";

   
    // console.log(indicatorCellId);
    // if (player.row % 2 == 1) {
    //     if (indicatorCellId > "cell" + player.row + "-" + 9) {
    //         updatePlayer(indicator.row - 1, indicator.col - dice, indicator, "indicator", 2);
    //         console.log("greater than nine");
    //     } else {
    //         updatePlayer(indicator.row, indicator.col + dice, indicator, "indicator", 2);
    //         console.log("less than nine");
    //     }
    // }


    // if (player.row % 2 == 0) {
    //     indicatorCellId = "cell" + player.row + "-" + (player.col - dice);
    // }

    // if (indicatorCellId <= "cell" + 8 + "-" + 0) {
    //     indicatorCellId = "cell" + (player.row - 1) + "-" + (player.col + dice);
    // }

    // indicatorCellId = "cell" + (player.row) + "-" + (player.col + dice);
    // document.getElementById(indicatorCellId).classList.add("indicator");
    document.getElementById("player-movements").innerHTML = "Move your player " + number + " square(s)!";



}