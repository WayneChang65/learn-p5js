class Box {
    constructor(x, y, w, h, world) {
        this.options = {
            friction: 0,
            restitution: 0.6,
        };
        this.body = Bodies.rectangle(x, y, w, h, this.options);
        Composite.add(world, this.body);

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
            rect(0, 0, w, h);
            pop();
        };
    }
}
