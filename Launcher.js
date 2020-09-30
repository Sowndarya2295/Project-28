class Launcher{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
        }
        
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
            var startPoint = this.launcher.bodyA.position;
            var endPoint = this.launcher.pointB;

            strokeWeight(5);
            line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
        }
        
    }

    fly(){
        this.launcher.bodyA = null;
    }
    
    attach(bodyA){
        this.launcher.bodyA = bodyA;
    }
}