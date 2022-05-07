let r = 30;
let x = 50,
    y = 50;
let vx = 1,
    vy = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('Yellow');
}

function draw() {
    //background('Gray');
    fill('Cyan');
    ellipse(x, y, r);
    x += vx;
    y += vy;
    vy += 0.2;
    if (y > height) {
        vy = -vy * 0.85;    // Y軸衰減率
        y = height;
    }
}

function mousePressed() {
    x = 50;
    y = 50;
    vy = 1;
    background('Yellow');
}
