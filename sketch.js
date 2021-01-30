const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var stand1,stand2;
var polygon;
var score = 0;
var bgColor;

function preload(){
    polygonImage = loadImage("polygon.png");
}
function setup(){
    engine =Engine.create();
    world = engine.world;

    createCanvas(1200,400);

    stand1 = new Ground(600,380,300,10);
    stand2 = new Ground(1000,200,300,10);

    block1 = new Box(480,360,"lightblue");
    block2 = new Box(520,360,"lightblue");
    block3 = new Box(560,360,"lightblue");
    block4 = new Box(600,360,"lightblue");
    block5 = new Box(640,360,"lightblue");
    block6 = new Box(680,360,"lightblue");
    block7 = new Box(720,360,"lightblue");

    block8 = new Box(520,340,"pink");
    block9 = new Box(560,340,"pink");
    block10 = new Box(600,340,"pink");
    block11 = new Box(640,340,"pink");
    block12 = new Box(680,340,"pink");

    block13 = new Box(560,320,"orange");
    block14 = new Box(600,320,"orange");
    block15 = new Box(640,320,"orange");

    block16 = new Box(600,300,"lightgreen");

    block17 = new Box(920,180,"lightblue");
    block18 = new Box(960,180,"lightblue");
    block19 = new Box(1000,180,"lightblue");
    block20 = new Box(1040,180,"lightblue");
    block21 = new Box(1080,180,"lightblue");
    

    block22 = new Box(960,160,"pink");
    block23 = new Box(1000,160,"pink");
    block24 = new Box(1040,160,"pink");
    

    block25 = new Box(1000,140,"orange");

    var options = {
        density : 2
    }
    polygon = Bodies.circle(100,200,30,options);
    World.add(world,polygon);

    sling = new SlingShot(polygon,{x:100,y:200});

    setBackgroundColor();
    
}

function draw(){
    Engine.update(engine);

    if(bgColor !== undefined){
        background(bgColor);
    }
    

    textSize(15);
    fill("black");
    text("Score :" + score ,1000,30);
    stand1.display();
    stand2.display();

    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();  
    block11.score();
    block12.display();
    block12.score();
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    block16.display();
    block16.score();
    block17.display();
    block17.score();
    block18.display();
    block18.score();
    block19.display();
    block19.score();
    block20.display();  
    block20.score();
    block21.display();
    block21.score();
    block22.display();
    block22.score();
    block23.display();
    block23.score();
    block24.display();
    block24.score();
    block25.display();
    block25.score();

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,60,60);

    sling.display();

    fill("black");
    text("Grag the Hexagonal Stone and Release it, to launch it towards the blocks",50,20);
    text("To replay press Space key", 50,40);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode == 32){
        sling.attach(polygon);
    }
}

async function setBackgroundColor(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    console.log(dateTime);

    var hour = dateTime.slice(11,13);
    console.log(hour);

    if(hour>=6 && hour<=18){
        bgColor = "orange";
    }else{
        bgColor = "grey";
    }

}