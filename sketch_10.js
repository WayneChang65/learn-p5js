'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('CadetBlue');
}
const PI = 3.141592654;
const startAngle = PI * 3 / 2;
let endAngle = 0;

function draw() {
    endAngle = startAngle + degreeToRadius((frameCount / 60) % 600 * 6);
    background('CadetBlue');
    fill('Blue');
    arc(500, 200, 150, 150, startAngle, endAngle);
    text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 50, 50);
    text(`startAngle: ${startAngle}, endAngle: ${endAngle}`, 50, 80);
    textSize(20);
}

function degreeToRadius(deg) {
    return deg * PI / 180.;
}