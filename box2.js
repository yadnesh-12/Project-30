class Box2  {
    constructor(x,y){
        var options={
            isStatic:false,
        }
        this.visibility = 225;  
        this.body= Bodies.rectangle(x,y,30,30,options);
        this.width = 30;
        this.height = 30;
        World.add(world,this.body);
    }
    display(){
    if(this.body.speed<10){
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        pop();
    }
    }
}