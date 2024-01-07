'use strict';

const Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    World = Matter.World;

let engine;
let world;
let boxes = [];
let balls = [];
let ground;
let runner;
let boundaries = [];

function setup() {
    let boxHeight = 20;
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    boundaries.push(
        new Boundary(windowWidth / 2, windowHeight - 10, windowWidth, boxHeight, 0, world)
    );
}

function draw() {
    background('DarkSlateGrey');
    Engine.update(engine);

    if (frameCount % 60 == 0)
        balls.push(new Ball(windowWidth / 2, 30, random(10, 40), world));

    for (let i = 0; i < balls.length; i++) {
        balls[i].show();
        if (balls[i].isOffScreen()) {
            balls[i].removeFromTheWorld();
            balls.splice(i, 1);
            // 如果目前i被檢查過出界，然後splice移除，原本的i+1會被移到i
            // 然後 i+1 就無法被檢查到。所以，這裏要i--，讓i再被檢查一次
            // 確認是否也出界。
            i--;
        }
    }

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
    fill('Aqua');
    // textSize(18);
    // text(
    //     `balls.length = ${balls.length}, world.bodies.length = ${world.bodies.length}`,
    //     windowWidth - 400,
    //     windowHeight - 200
    // );
}

function mouseDragged() {
    balls.push(new Ball(mouseX, mouseY, random(1, 50), world));
}
