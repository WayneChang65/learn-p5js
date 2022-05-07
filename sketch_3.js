//runs once when program starts
function setup() {
    createCanvas(400, 400);
    background('CadetBlue');
}

//rendering loop
function draw() {
    background('CornflowerBlue');
    noFill();
    stroke('Black');
    ellipse(width / 2, height / 2, frameCount % 100, frameCount % 100);
}