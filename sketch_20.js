'use strict';

function setup() {
    let clrFrom = color(218, 165, 32);
    let clrTo = color(72, 61, 139);

    createCanvas(windowWidth, windowHeight);
    colorMode(RGB);
    stroke(255);
    background(51);
    textSize(20);

    // lerpColor 是顏色內插的功能
    // 從 clrFrom 到 clrTo 這兩種顏色，中間以 33% 以及 66%
    // 各別內插出 clrInterA 與 clrInterB 這兩種顏色
    let clrInterA = lerpColor(clrFrom, clrTo, 0.33);
    let clrInterB = lerpColor(clrFrom, clrTo, 0.66);
    let rectWidth = 200,
        rectHeight = 60;

    fill(clrFrom);
    rect(10, 20, rectWidth, rectHeight);
    text('From', 10, rectHeight + 50);

    fill(clrInterA);
    rect(10 + 1 * rectWidth, 20, rectWidth, rectHeight);
    text('33%', 10 + 1 * rectWidth, rectHeight + 50);

    fill(clrInterB);
    rect(10 + 2 * rectWidth, 20, rectWidth, rectHeight);
    text('66%', 10 + 2 * rectWidth, rectHeight + 50);

    fill(clrTo);
    rect(10 + 3 * rectWidth, 20, rectWidth, rectHeight);
    text('To', 10 + 3 * rectWidth, rectHeight + 50);
}

function draw() {}
