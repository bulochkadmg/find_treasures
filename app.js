// Click counter
let clicks = 0;

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

// Events
$('#map').click(function(event) {
    clicks++;
});

// The distance between the click and the treasure
let getDistance = function(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// How close to the treasure the player