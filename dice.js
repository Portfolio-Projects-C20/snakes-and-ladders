// Dice Roll

// Event Listener
document.getElementById("rollDice").addEventListener("click", rollDice);

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
    console.log(number);
    // Display dice number image
    document.getElementById("diceImg").src = "images/dice/dice" + number + ".png";

    // Add indicator to square player should travel to
    let indicatorCellId = "cell" + 9 + "-" + (player.col + dice);
    document.getElementById(indicatorCellId).classList.add("indicator");

    grid[indicator.row][indicator.col] = 2;

    // Remove indicator once player has moved on top 
    console.log(indicatorCellId);
}