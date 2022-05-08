'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('MediumTurquoise');
    strokeWeight(2);
    textAlign(CENTER);
}

function draw() {
    if(frameCount % 100 == 0) background('MediumTurquoise');
    spreadSpot(random(0, windowWidth), random(0, windowHeight));
    showText();
}

function showText() {
    textSize(40);
    fill(color('BLACK'));
    text('Hello World and P5.js !', windowWidth / 2, windowHeight / 2);
    textSize(10);
    fill(color('NAVY'));
    text('Wayne Chang', windowWidth - 100, windowHeight - 50);
}

function spreadSpot(x, y) {
    let spotNumber = int(random(100, 350));
    let spotRadius = random(2, 20);
    let diviation = 100;
    
    noStroke();

    for (let i = 0; i < spotNumber; i++) {
        fill(
            random((frameCount % 255) + y),
            random(200, 255),
            random(100, 200)
        );

        ellipse(
            x + random(-diviation, diviation),
            y + random(-diviation, diviation),
            spotRadius
        );
        spotRadius *= 0.9;
    }
}