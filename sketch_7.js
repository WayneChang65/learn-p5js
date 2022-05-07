const CANVAS_WIDTH = 400,
    CANVAS_HEIGHT = 400;
let currentX = CANVAS_WIDTH / 2;
let currentY = CANVAS_HEIGHT;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    background('CadetBlue');
}

function draw() {
    background('CadetBlue');
    currentY = getDropPos(currentY);

    ellipse(currentX, currentY, 20, 20);
}

function getDropPos(currentY) {
    const speed = 1;
    currentY -= speed;
    return currentY;
}
