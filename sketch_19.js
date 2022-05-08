'use strict';

function setup() {
    let objDist = { x: 150, y: 200 };
    createCanvas(windowWidth, windowHeight);
    testForBlendMode(0, 0, ADD);
    testForBlendMode(1 * objDist.x, 0, DARKEST);
    testForBlendMode(2 * objDist.x, 0, LIGHTEST);
    testForBlendMode(3 * objDist.x, 0, DIFFERENCE);
    testForBlendMode(4 * objDist.x, 0, EXCLUSION);
    testForBlendMode(5 * objDist.x, 0, MULTIPLY);

    testForBlendMode(0, objDist.y, SCREEN);
    testForBlendMode(1 * objDist.x, objDist.y, OVERLAY);
    testForBlendMode(2 * objDist.x, objDist.y, HARD_LIGHT);
    testForBlendMode(3 * objDist.x, objDist.y, SOFT_LIGHT);
    testForBlendMode(4 * objDist.x, objDist.y, DODGE);
    testForBlendMode(5 * objDist.x, objDist.y, BURN);
    // 其實還有 REPLACE, REMOVE以及 3D模式，不容易顯示，就先略過
}

function draw() {}

function testForBlendMode(x, y, mode) {
    blendMode(mode);
    strokeWeight(30);
    stroke(80, 150, 255); // Red
    line(25 + x, 25 + y, 75 + x, 75 + y);
    stroke(255, 50, 50); // Blue
    line(75 + x, 25 + y, 25 + x, 75 + y);

    blendMode(LIGHTEST);
    stroke(color('LightSeaGreen'));
    strokeWeight(1);
    textSize(16);
    textAlign(CENTER);
    text(`${mode.toUpperCase()}`, 50 + x, 25 + y + 100);
}
