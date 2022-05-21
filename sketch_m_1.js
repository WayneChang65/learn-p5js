'use strict';

const Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let engine;
let world;
let boxes = [];
let ground;
let runner;

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    let boxHeight = 30;
    ground = Bodies.rectangle(
        windowWidth / 2,
        windowHeight - boxHeight,
        windowWidth,
        boxHeight,
        {
            isStatic: true,
        }
    );
    Composite.add(world, ground);
    runner = Runner.create();
    Runner.run(runner, engine);
}

function draw() {
    let boxHeight = 30;
    background('DarkSlateGrey');

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }

    fill(255);
    strokeWeight(20);
    line(
        0,
        windowHeight - boxHeight * 1.1,
        windowWidth,
        windowHeight - boxHeight * 1.1
    );
}

function mouseDragged() {
    boxes.push(new Box(mouseX, mouseY, 20, 20, world));
}

// function keyPressed() {
//     let boxWidth = windowWidth,
//         boxHeight = 30;
//     boxes.push(new Box(boxWidth / 2, 0, boxWidth, boxHeight, world));
// }
