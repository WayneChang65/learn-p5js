'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('BurlyWood');
    strokeWeight(2);
}

function draw() {}

function mouseMoved() {
    let spotNumber = int(random(100, 350));
    let spotRadius = random(2, 20);
    // 這裏開根號乘以10，是讓diviation值較快成長。這招學校老師應該都有用過。
    // 可以讓滑鼠移動速度較慢時，畫圓的區域較廣，不會太過集中。
    // 這部分的設計，還是要看想達成什麼效果而定。
    //let diviation = dist(pmouseX, pmouseY, mouseX, mouseY);
    let diviation = sqrt(dist(pmouseX, pmouseY, mouseX, mouseY)) * 10;
    
    noStroke();

    for (let i = 0; i < spotNumber; i++) {
        fill(
            random((frameCount % 255) + mouseY),
            random(200, 255),
            random(100, 200)
        );

        ellipse(
            mouseX + random(-diviation, diviation),
            mouseY + random(-diviation, diviation),
            spotRadius
        );
        spotRadius *= 0.9;
    }
}
