class Ground2 {
    constructor(x,y){
        var options={
            isStatic:true,
        }
        this.body= Bodies.rectangle(x,y,250,15,options);
        this.width = 250;
        this.height = 15;
        World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
}