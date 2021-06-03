const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane1 = new Plane(600,height,1200,20)
    hammer1 = new Hammer(10,100);
    rubber1 = new Rubber()
    iron1 = new iron()
    stone1 = new stone()


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane1.display();
    hammer1.display();
    rubber1.display();
    iron1.display();
    stone1.display();
 
}