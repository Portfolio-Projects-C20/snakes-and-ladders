// Dice Roll

// Event Listener
document.getElementById("rollDice").addEventListener("click", rollDice);



// Global Variable
let dice;
let storeNames;

let moveCount = 0;
// Event Function

function rollDice() {
    dice = Math.randomInt(1, 7);
    moveCount = 0;

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

    // Player Movement
    document.getElementById("player-movements").innerHTML = "Move your player " + number + " square(s)!";
}