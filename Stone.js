class Stone {
    constructor(x, y, r) {
      var options = {
          'isStatic': false,
          'restitution':0,
          'friction':1.0,
          'density':0.9
      }
      this.x = x;
      this.y = y;
      this.r = r;

      this.body = Bodies.circle(this.x,this.y,this.r/2, options);
      this.image = loadImage("stone.png");

      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      ellipseMode(RADIUS);
      fill("white");
      image(this.image,0, 0, this.r, this.r);
      pop();
    }
  };
  