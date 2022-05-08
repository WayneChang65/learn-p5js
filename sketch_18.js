'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB);
    rectMode(CENTER);
    for (let i = 20; i < width; i += 40) {
        let h = map(i, 0, width, 0, 360);
        let s = map(i, 0, width, 0, 100);
        let v = map(i, 0, width, 0, 100);
        for (let j = 20; j < height; j += 40) {
            fill(color(h, s, 100));
            rect(i, j, 30);
            fill(color(h, 50, 100));
            ellipse(i, j, 20, 20);
            fill(color(h, s, v));
            ellipse(i, j, 10, 10);
        }
    }
}