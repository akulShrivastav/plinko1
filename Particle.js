class Particle{

    constructor(x,y){
        var options = {
            restitution : 0.4           
            
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body)
        this.color = color(random(0,255),random(0,255),random(0,255))
        this.radius = 10
 
    }

    display(){

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        noStroke()
        imageMode(CENTER)
        ellipseMode(RADIUS);
        fill(this.color);
        circle(0,0,this.radius)
        pop();
    }

}