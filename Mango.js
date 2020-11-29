class Mango {
    constructor(x,y,radius){
        var options = {
            isStatic : true,
            restitution: 0,
            'friction': 1,
            'density': 1.2
        }
        this.radius = radius;
        this.body= Bodies.circle(x,y,radius,options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos  = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("pink"); 
        ellipse(0,0,this.radius,this.radius); 
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius+10, this.radius+10);
        pop();
    }
}