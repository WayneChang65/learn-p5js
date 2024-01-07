class Boundary {
    constructor(x, y, w, h, a, world) {
        this.options = {
            friction: 0,
            restitution: 0.6,
            angle: a,
            isStatic: true
        };
        this.body = Bodies.rectangle(x, y, w, h, this.options);
        Composite.add(world, this.body);

        this.show = () => {
            let pos = this.body.position;
            let angle = this.body.angle;

            push();
            translate(pos.x, pos.y + 1);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(1);
            stroke(0);
            fill('#330019');
            rect(0, 0, w, h);
            pop();
        };
    }
}
