class Plinko{

    constructor(x,y){
        var options = {
            restitution : 0,
            isStatic : true,
            friction: 1

        }
        this.body = Bodies.circle(x,y,8,options);
        World.add(world,this.body)
        this.radius = 8
 
    }

    display(){

        push();
        ellipseMode(RADIUS);
        fill(255);
        circle(this.body.position.x,this.body.position.y,this.radius)
        pop();
    }

}