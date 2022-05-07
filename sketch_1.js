//runs once when program starts
function setup() {
    createCanvas(400, 400);
    background('CadetBlue');
    fill(0);
}

//rendering loop
function draw() {
    background('CornflowerBlue');
    fill('Yellow');
    ellipse(mouseX, mouseY, 20, 20);
}
