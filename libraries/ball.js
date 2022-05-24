class Ball {
    constructor(x, y, d, world) {
        this.options = {
            friction: 0,
            restitution: 0.6,
        };
        this.body = Bodies.circle(x, y, d / 2, this.options);
        Composite.add(world, this.body);

        this.isOffScreen = () => {
            return this.body.position.y > windowHeight + 100;
        };

        this.removeFromTheWorld = () => {
            World.remove(world, this.body);
        };

        this.show = () => {
            let pos = this.body.position;
            let angle = this.body.angle;

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(1);
            stroke(255);
            fill('DeepSkyBlue');
            ellipse(0, 0, d, d);

            pop();
        };
    }
}
