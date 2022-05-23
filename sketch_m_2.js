'use strict';

const Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let engine;
let world;
let boxes = [];
let balls = [];
let ground;
let runner;
let boundaries = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    let boxHeight = 25;

    boundaries.push(
        new Boundary(400, windowHeight - 550, 600, boxHeight, PI / 10, world)
    );

    boundaries.push(
        new Boundary(800, windowHeight - 350, 600, boxHeight, -PI / 10, world)
    );

    boundaries.push(
        new Boundary(
            400,
            windowHeight - 150,
            600,
            boxHeight,
            PI / 10,
            world
        )
    );
    //runner = Runner.create();
    //Runner.run(runner, engine);
}

function draw() {
    background('DarkSlateGrey');
    Engine.update(engine);

    if (frameCount % 30 == 0)
        balls.push(new Ball(mouseX, mouseY, random(1, 50), world));

    for (let i = 0; i < balls.length; i++) {
        balls[i].show();
    }

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
}

function mouseDragged() {
    balls.push(new Ball(mouseX, mouseY, random(1, 50), world));
}
