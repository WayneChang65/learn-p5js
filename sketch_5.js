function setup() {
    createCanvas(1000, 1000);
    background(0, 0, 0);
}

function draw() {
    background('#000');

    beginShape();
    vertex(440, 160);
    vertex(360, 360);
    vertex(160, 400);
    vertex(350, 500);
    vertex(320, 700);
    vertex(width / 2, 500);
    vertex(570, 700);
    vertex(500, 460);
    vertex(670, 400);
    vertex(480, 360);
    endShape(CLOSE); // 設定close就會把你的邊線填顏色上去

    //如果不確定 可以把它印出來 去確認自己想要的正確位置
    fill('white');
    textSize(20);
    text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 50, 80);
}
