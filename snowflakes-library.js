/* Requires:
    graphics-library.js
*/

/* Function List:
    newSnowflake(initX, initY, initR, initColor, xspeed, yspeed)
    newRandomSnowflake()
    createRandomSnowflakeArray(num)
    drawSnowflake(aSnowflake)
    moveSnowflakeRandom(aSnowflake, xSpeed, ySpeed)
    moveSnowflake(aSnowflake, xSpeed, ySpeed)
    createSnowflakeArray(num, initX, initY, initR, initColor)
*/

// Creates a Snowflake with x, y, r and color values
function newSnowflake(initX, initY, initR, initColor, xspeed, yspeed) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor,
        XS: xspeed,
        YS: yspeed
    }
}

// Creates a Snowflake with random properties
function newRandomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5, 35),
        color: randomRGB()
    }
}

// Create and return an array with 'num' Snowflake objects
function createRandomSnowflakeArray(num) {
    let temp = [];
    for (let n = 1; n <= num; n++) {
        temp.push(newRandomSnowflake())
    }
    return temp;
}

// Create and return an array with 'num' Snowflake objects with set properties
function createSnowflakeArray(num) {
    let temp = [];
    for (let n = 1; n <= num; n++) {
        temp.push(newSnowflake(randomInt(0, cnv.width), randomInt(0, cnv.height), randomDec(3, 7), "white", randomDec(0.5, 3.0), randomDec(0.5, 3.0)));
    }
    return temp;
}

// Draws Snowflakes from an array
function drawSnowflake(aSnowflake) {
    fill(aSnowflake.color);
    circle(aSnowflake.x, aSnowflake.y, aSnowflake.r, "fill");
}

// Moves Snowflakes in random directions
function moveSnowflakeRandom(aSnowflake, xSpeed1, xSpeed2, ySpeed1, ySpeed2) {
    aSnowflake.x += randomInt(xSpeed1, xSpeed2);
    aSnowflake.y += randomInt(ySpeed1, ySpeed2);
}

function moveSnowflake(aSnowflake) {
    aSnowflake.x += aSnowflake.XS;
    aSnowflake.y += aSnowflake.YS;
}