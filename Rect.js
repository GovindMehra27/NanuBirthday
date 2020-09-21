class Recta{
  constructor(x,y,width,height){
    var options ={
      'density':2.1,
      'friction': 2.1,
      'restitution': 1.4
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("wood2.png");
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }
  display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}