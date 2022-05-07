'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('BurlyWood');
    strokeWeight(2);
    for (let y = 0; y < height; y += 50) {
        for (let x = 0; x < width; x += 80) {
            fill(random(255), random(255), random(255));
            rect(x, y, 80, 50);
        }
    }
}

function draw() {}
