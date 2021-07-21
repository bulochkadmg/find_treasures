// Random number for map size
let getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};

// The distance between the click and the treasure
let getDistance = function(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// How close to the treasure the player
let getDistanceHint = function(distance) {
    if(distance < 10) {
        return 'Boiling hot!';
    } else if(distance < 20) {
        return 'Really hot';
    } else if(distance < 40) {
        return 'Hot';
    } else if(distance < 80) {
        return 'Warm';
    } else if(distance < 160) {
        return 'Cold';
    } else if(distance < 320) {
        return 'Really cold';
    } else {
        return 'Freezing!';
    }
};

// Click counter
let clicks = 0;

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
    
    // Display a message how close or far the player is from the treasure
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $('#distance').text(distanceHint);

    if(distance < 8) {
        alert(`Found the treasure in ${clicks} clicks!`);
    }
});