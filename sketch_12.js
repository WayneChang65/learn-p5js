'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('CadetBlue');
    strokeWeight(4);
}

function draw() {
    background(0);
    for (let i = 0; i < 10; i++) {
        noFill();
        strokeWeight(5);
        stroke(map(i, 0, 10, 0, 255), 0, 255);
        ellipse(
            width / 2,
            height / 2,
            500 - i * 5 * map(mouseY, 0, width, 0, 20)
        );
    }
}
