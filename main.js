let Snowflakes = createSnowflakeArray(300);

requestAnimationFrame(draw);
function draw() {
    background("black")
    for (let i = 0; i < Snowflakes.length; i++) {
        drawSnowflake(Snowflakes[i]);
        moveSnowflake(Snowflakes[i]);
        sideWallTest(i);
        bottomWallTest(i);
    }
    requestAnimationFrame(draw);
}

function sideWallTest(o) {
    let snowflakex = (cnv.width + Snowflakes[o].r)
    if (Snowflakes[o].x >= snowflakex) {
        Snowflakes[o].x -= snowflakex + Snowflakes[o].r;
    }
}

function bottomWallTest(o) {
    let snowflakex = (randomDec(0, cnv.width));
    let snowflakey = (cnv.height + Snowflakes[o].r)
    if (Snowflakes[o].y >= snowflakey) {
        Snowflakes[o].y -= snowflakey + Snowflakes[o].r;
        Snowflakes[o].x += snowflakex;
    }
}

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { // Right arrow
        Snowflakes.push(newSnowflake(randomInt(0, cnv.width), randomInt(0, cnv.height), randomDec(3, 7), "white", randomDec(0.5, 3.0), randomDec(0.5, 3.0)));
    } else if (event.keyCode === 37) { // Left arrow
        Snowflakes.pop();
    }
}