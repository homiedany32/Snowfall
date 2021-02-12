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
