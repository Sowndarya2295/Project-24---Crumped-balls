class Dustbin {
    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.width = 200;
      this.height = 100;
      this.thickness = 20;
      this.angle = 0;

      this.bottom = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
      Matter.Body.setAngle(this.bottom,this.angle);

      this.left= Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})
      Matter.Body.setAngle(this.left,this.angle);

      this.right= Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})
      Matter.Body.setAngle(this.right,this.angle * -1);

      World.add(world, this.bottom);
      World.add(world, this.left);
      World.add(world, this.right);
    }
    display(){
        
        push();
        translate(this.left.position.x,this.left.position.y);
        angleMode(RADIANS);
        fill("blue");
        rotate(this.angle);
        rect(0,0,this.thickness,this.height)
        pop();

        
        push();
        translate(this.right.position.x,this.right.position.y);
        angleMode(RADIANS);
        fill("blue");
        rotate(this.angle);
        rect(0,0,this.thickness,this.height)
        pop();
        
        push();
        translate(this.bottom.position.x,this.bottom.position.y);
        angleMode(RADIANS);
        fill("blue");
        rotate(this.angle);
        rect(0,0,this.width,this.thickness)
        pop();
        
     }
  }
 