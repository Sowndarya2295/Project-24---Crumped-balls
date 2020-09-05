class Paper {
    constructor(x,y,r) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.y = y;
      this.x = x;
      this.r = r;

      this.body = Bodies.circle(this.x,this.y,this.r/2, options);
      
      World.add(world, this.body);
    }
    display(){
      
      push();
      translate(this.body.position.x,this.body.position.y);
      strokeWeight(4);
      stroke("pink");
      fill("white");
      ellipse(0,0,this.r,this.r);
      pop();
    }
  }
  