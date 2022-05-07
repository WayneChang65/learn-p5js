'use strict';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('BurlyWood');
    strokeWeight(2);
    let count = 0;
    for (let x = 0; x < width; x += 50) {
        for (let y = 0; y < height; y += 50) {
            count += 1;
            fill(random(0, 50), random(0), random(255));
            stroke(random(0, 50), random(255), random(255));
            strokeWeight(3);
            if (count % 3 < 2) {
                rect(x, y, 40, 40, 5);
                if (random() < 0.5) {
                    fill(0);
                    // 利用亂數 1/2機會在裏面四邊形裏畫圈
                    ellipse(x + 20, y + 20, 20);
                    noStroke();
                    // 利用亂數 1/4機會在裏面四邊形裏畫另一小圈
                    if (random() < 0.25) {
                        fill(random(250), random(0), random(255));
                        ellipse(x + 20, y + 20, 10);
                        noStroke();
                    }
                }
            }
        }
    }
}

function draw() {}
