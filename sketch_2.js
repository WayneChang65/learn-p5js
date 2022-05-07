//runs once when program starts
function setup() {
    createCanvas(400, 400);
    background('CadetBlue');
    fill(0);
}

//rendering loop
function draw() {
    background('CornflowerBlue');
    
    if (mouseIsPressed) {
        fill('Yellow');
        rect(mouseX, mouseY, 50, 50);
    } else {
        fill(mouseX, mouseY, frameCount * 4 % 255); // 4是速度
        ellipse(mouseX, mouseY, 30, 30);
    }
}