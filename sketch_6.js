function setup() {
    createCanvas(1000, 1000);
    background(0, 0, 0);
}

function draw() {
    background(255, mouseX / 2, 0);

    // random加入抖動的動作
    beginShape();
    curveVertex(440, 160);
    curveVertex(360, 360);
    curveVertex(160, 400);
    curveVertex(350, 500 + random(-10, 10));
    curveVertex(320, 700 + random(-10, 10));
    curveVertex(width / 2 - 80, 500 + random(-10, 10));
    curveVertex(470, 700 + random(-10, 10));
    curveVertex(500, 460 + random(-10, 10));
    curveVertex(670, 400 + random(-10, 10));
    curveVertex(480, 360);
    curveVertex(440, 160);
    endShape(CLOSE);

    //畫眼睛
    fill('white');
    strokeWeight(5);
    ellipse(369, 400, 30);
    ellipse(459, 400, 30);
    ellipse(369, 400, 5);
    ellipse(459, 400, 5);

    //如果不確定 可以把它印出來
    fill('white');
    textSize(20);
    text(mouseX + ',' + mouseY, 50, 50);
}
