function setup() {
    createCanvas(windowWidth, windowHeight);
    background('MediumTurquoise');
}
function draw() {
    background('MediumTurquoise');
    rect(100, 200, 50, 50);
    translate(100, 200); // 座標平移(100，200)
    rect(100, 200, 50, 50);
    translate(-100, -200); // 座標平移回(0, 0)
    rect(0, 0, 30, 30);
    angleMode(DEGREES);
    rect(100, 50, 30, 30);
    rotate(30);
    rect(100, 50, 30, 30);
    rotate(-30);

    translate(0, height / 2);
    colorMode(HSB);
    noStroke();
    for (let i = 0; i < 20; i++) {
        fill(i * 20 + random(-20, 20), 80, 100);
        ellipse(0, 0, random(0, 50), random(0, 50));
        translate(60, 0);
        rotate(map(mouseX, 0, height, -0.5, 0.5));
    }
}
