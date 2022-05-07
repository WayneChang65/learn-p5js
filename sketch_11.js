'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('CadetBlue');
    strokeWeight(4);
}

function draw() {
    const startAngle = (PI * 3) / 2;
    background('CadetBlue');
    fill('Yellow');
    textSize(20);
    text(`hour: ${hour()}, min: ${minute()}, second: ${second()}`, 50, 50);
    arc(
        200,
        200,
        150,
        150,
        startAngle,
        startAngle + map(hour(), 0, 24, 0, 2 * PI)
    );
    fill('Chartreuse');
    arc(
        200,
        200,
        100,
        100,
        startAngle,
        startAngle + map(minute(), 0, 60, 0, 2 * PI)
    );
    fill('Cyan');
    arc(
        200,
        200,
        50,
        50,
        startAngle,
        startAngle + map(second(), 0, 60, 0, 2 * PI)
    );
}
