'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('LightSeaGreen');
    strokeWeight(2);
    textAlign(CENTER);
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    push();
    if (frameCount % 180 == 0) background('LightSeaGreen');
    spreadSpot(random(0, windowWidth), random(0, windowHeight));
    showText();
    pop();

    push();
    translate(windowWidth / 6, windowHeight / 6);
    noFill();
    stroke('Cyan');
    ellipse(0, 0, 130, 130);
    fill('Black');
    ellipse(0, 0, 10, 10);
    rotate(map(second(), 0, 60, 0, 360) + 180 + 45);
    fill('Pink');
    stroke('White');
    line(0, 0, 45, 45);
    ellipse(45, 45, 5, 5);
    pop();

    push();
    translate(windowWidth / 6, windowHeight / 6);
    rotate(map(minute(), 0, 60, 0, 360) + 180 + 45);
    fill('SteelBlue');
    stroke('SteelBlue');
    line(0, 0, 40, 40);
    stroke('White');
    rect(40, 40, 5, 5);
    pop();

    push();
    translate(windowWidth / 6, windowHeight / 6);
    rotate(map(hour() % 12, 0, 12, 0, 360) + 180 + 45);
    fill('Tomato');
    stroke('Tomato');
    line(0, 0, 30, 30);
    stroke('White');
    rect(30, 30, 5, 5);
    pop();

    fill('Purple');
    textSize(20);
    text(`${hour()}:${minute()}`, 210, 170);
}

function showText() {
    textSize(40);
    fill('BLACK');
    text('Hello World and P5.js !', windowWidth / 2, windowHeight / 2);
    textSize(10);
    fill('NAVY');
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
