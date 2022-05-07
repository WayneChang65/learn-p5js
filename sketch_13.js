'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('BurlyWood');
    strokeWeight(4);
}

function draw() {
    for (let x = 0; x < width; x += 80) {
        fill(random(255), random(255), random(255));
        rect(x, height / 2, 80, 50);
    }
}