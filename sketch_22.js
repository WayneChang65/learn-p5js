'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('MediumTurquoise');
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    let rotateAngle = frameCount % 360;
    background('MediumTurquoise');
    fill('Black');
    ellipse(windowWidth / 2, windowHeight / 2, 50, 50);

    push();
    translate(windowWidth / 2, windowHeight / 2);
    rotate(rotateAngle * 1);
    fill('Red');
    rect(100, 100, 20, 20);

    translate(100, 100);
    rotate(rotateAngle * 2);
    fill('Blue');
    rect(100, 100, 15, 15);

    translate(100, 100);
    rotate(rotateAngle * 4);
    fill('Yellow');
    rect(50, 50, 10, 10);
    pop();

    push();
    translate(windowWidth / 6, windowHeight / 6);
    noFill();
    ellipse(0, 0, 160, 160);
    fill('Black');
    ellipse(0, 0, 10, 10);
    rotate(map(second(), 0, 60, 0, 360) + 180 + 45);
    fill('Pink');
    stroke('White');
    line(0, 0, 40, 40);
    ellipse(40, 40, 5, 5);
    pop();

    push();
    translate(windowWidth / 6, windowHeight / 6);
    rotate(map(minute(), 0, 60, 0, 360) + 180 + 45);
    fill('Red');
    line(0, 0, 50, 50);
    stroke('White');
    rect(50, 50, 10, 10);
    pop();

    push();
    translate(windowWidth / 6, windowHeight / 6);
    rotate(map(hour() % 12, 0, 12, 0, 360) + 180 + 45);
    fill('Blue');
    line(0, 0, 30, 30);
    stroke('White');
    rect(30, 30, 10, 10);
    pop();

    text(`${hour()}:${minute()}:${second()}`, 190, 170);
}
