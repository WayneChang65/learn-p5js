const disBetweenBlocks = 10;
const blockHeight = 20;

let x = 0 - disBetweenBlocks,
    y = 0,
    w = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('BurlyWood');
    fill(30, 80, random(0, 255));
}

function draw() {
    rect(x, y, w, blockHeight);
    x += w + disBetweenBlocks;

    if ((frameCount + 1) % 4 == 0) {
        w = 10;
        fill('Chartreuse');
    } else {
        w = random(20, 80);
        fill(30, 80, random(0, 255));
    }
    if (x > width) {
        x = 0;
        y += 30;
    }
}

function mouseClicked() {
    background('BurlyWood');
    x = 0 - disBetweenBlocks;
    y = 0;
}
