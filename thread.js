class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY)
    {
       this.offsetX = offsetX;
       this.offsetY = offsetY;       
      var options = {
           bodyA: bodyA,
           bodyB: bodyB,
           pointB: {x: this.offsetX, y: this.offsetY},
       }
       this.rope = Constraint.create(options);
       World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(3);

        var end1X = pointA.x;
        var end1Y = pointA.y;

        var end2X = pointB.x + this.offsetX
        var end2Y = pointB.y + this.offsetY

        line(end1X, end1Y, end2X, end2Y);
    }
}