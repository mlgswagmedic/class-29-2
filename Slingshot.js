class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=loadImage('sprites/sling1.png');
        this.sling2=loadImage('sprites/sling2.png');
        this.sling3=loadImage('sprites/sling3.png');
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,120,50,100);
        image(this.sling2,175,105,0,75);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke("#52260F");
            line(pointA.x-15, pointA.y, pointB.x-5, pointB.y+5);
            line(pointA.x+20, pointA.y, pointB.x+43, pointB.y+12);
            image(this.sling3,pointA.x-25,pointA.y,15,20)
        }
    }
    
}