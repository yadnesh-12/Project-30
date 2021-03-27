 class Polygon{
     constructor(x,y, radius){
        var options={
            isStatic:false,
        }
        this.x=x;
		this.y=y;
		this.r=radius;
		this.image=loadImage("polygon.png")
		this.body=Bodies.circle(this.x, this.y, 25, options)
		World.add(world, this.body);
     }

     display()
	{
		var polPos=this.body.position;	
		push()
		translate(polPos.x, polPos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
 }