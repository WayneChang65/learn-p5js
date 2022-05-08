'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('BurlyWood');
    strokeWeight(2);
    
}

function draw() {}

function mouseClicked() {
    let cornWidth = random(20, 60);
    for (let i = 0; i < cornWidth / 2; i++) {
        fill(random(255), random(220, 255), random(100, 150));
        ellipse(mouseX, mouseY - 5 * i, cornWidth - 2 * i, 10);
    }
}