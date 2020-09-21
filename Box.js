class Box{
  constructor(x,y,width,height){
    var options ={
      'density':0.2,
      'friction': 0.3,
      'restitution': 0.2
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("wood1.png");
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    this.Visiblity = 255;
  }
  display(){
    if(this.body.speed < 3){

    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
  else{
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    image(this.image, this.body.position.x, this.body.position.y, 30, 30);
    pop();
  }
  }
  
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }
}