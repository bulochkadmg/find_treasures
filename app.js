// Random number for map size
let getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};

// Treasure coordinates
let width = 400;
let height = 400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
