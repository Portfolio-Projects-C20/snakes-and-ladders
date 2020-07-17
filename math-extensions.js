// Math Extensions Library


// function randomDec(low, high) {
//     // Return a random decimal betwwen low(inclusive) and high (exclusive)
//     return Math.random() * (high - low) + low //Creating a range of numbers but adding low to adjust staring position if math.random picks zero
// }

// function randomInt(low, high) {
//     // Return a random integer betwwen low(inclusive) and high (exclusive)
//     return Math.floor(Math.random() * (high - low) + low) //Math. floor takes decimal created by .random and rounds it down
// }

// these are function expressions, does the same thing as first function

Math.randomInt = function (low, high) {
    // Return a random integer betwwen low(inclusive) and high (exclusive)
    return Math.floor(Math.random() * (high - low) + low)
}

Math.randomDec = function (low, high) {
    // Return a random decimal betwwen low(inclusive) and high (exclusive)
    return Math.random() * (high - low) + low
}

Math.roundTo = function (num, numPlaces) {
    // Round num off to the nearest numPlaces
    num = num * 10 ** numPlaces;
    num = Math.round(num);
    return num / 10 ** numPlaces;
}

Math.randomElement = function (anArray) {
    // Randomly select and return an element from anArray
    return anArray[Math.randomInt(0, anArray.length)];
}