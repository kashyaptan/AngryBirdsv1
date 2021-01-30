class log{
    constructor(x,y,h,a){

        var options={
            'restitution':0.2,
            'friction':1.2,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,20,h, options)
        Matter.Body.setAngle(this.body, a)
        World.add(world,this.body)
        this.height = h
    }
    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, 20, this.height);
        pop();
    }

}