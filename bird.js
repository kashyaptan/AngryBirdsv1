class bird{
    constructor(x,y){
        var options={
            restitution: 0.8,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,50,50, options)
        World.add(world, this.body)
    }

    display(){
        this.body.position.x = mouseX
        this.body.position.y = mouseY
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill('red');
        rect(0, 0, 50,50);
        pop();
    }

}