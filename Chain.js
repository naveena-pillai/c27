class Chain{
    constructor(bodyA, bodyB){
        var options = {
            stiffness:0.1,
            bodyA:bodyA,
            bodyB: bodyB,
            length: 10
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var a = this.chain.bodyA.position;
        var b = this.chain.bodyB.position;
        strokeWeight(4);
        line(a.x,a.y,b.x,b.y);
    }
}