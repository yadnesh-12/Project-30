const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

}
function setup(){
    var canvas= createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   
    groundB= new Ground2(400,300);
    groundC=new Ground2(900,400);

   //tower-1
   //base 
    block1=new Box1(400,290);
    block2=new Box1(370,290);
    block3=new Box1(430,290);
    block4=new Box1(340,290);
    block5=new Box1(460,290);
    block6=new Box1(310,290);
    block7=new Box1(490,290);
    //level-1
    block8= new Box2(400,240);
    block9= new Box2(370,240);
    block10= new Box2(430,240);
    block11= new Box2(340,240);
    block12= new Box2(460,240);
    //level-2
    block13= new Box3(400,190);
    block14= new Box3(370,190);
    block15= new Box3(430,190);
    //top
    block16= new Box4(400,140);
    //tower-2
    //base
    block17= new Box1(900,390);
    block18= new Box1(870,390);
    block19= new Box1(930,390);
    block20= new Box1(840,390);
    block21= new Box1(960,390);
    //level-1
    block22= new Box3(900,340);
    block23= new Box3(870,340);
    block24= new Box3(930,340);
    //top
    block25= new Box2(900,290);
    
    pol1= new Polygon(200,300,30);  

    ground1= new Ground(600,590);

    cons1= new Const(pol1.body,{x:100,y:300});
}

function draw(){
    background("brown");
    fill("black");
    textSize(20);
    text("Drag and release the mouse to play", 400, 100);
    Engine.update(engine);
   
    fill("black");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    
    pol1.display();

    ground1.display();
    groundB.display();
    groundC.display();

    cons1.display();

    //mouseDragged()
    //mouseReleased()
    
}

function mouseDragged(){
	Matter.Body.setPosition(pol1.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
	cons1.fly();
}

function keyPressed(){
    if(keyCode===32){
        cons1.attach(pol1.body);
    }
}
