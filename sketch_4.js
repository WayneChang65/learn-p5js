function setup() {
    createCanvas(500, 500); //製造畫布
    background(0, 0, 0); // 先給背景
}

function draw() {
    noFill(); //不要填顏色
    stroke('#fff'); //把邊線顏色改成白色
    strokeWeight(frameCount % 2 == 0 ? 5 : 1); // 設定邊線粗細
    rect(width / 2, height / 2, frameCount * 20); // 利用frameCount產生出由小至大的方框
    rectMode(CENTER); //改變圖形的訂位方式
}
