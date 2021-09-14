var ob1;
var ob2;
var ob3;
var ob4;


function setup() {
  createCanvas(800,400);
  ob1 = createSprite(400, 200, 50, 50);
  ob2 = createSprite(500,300,50,50);
  ob3 = createSprite(300,400,50,50);
  ob4 = createSprite(100,200,50,50);

  ob1.debug=true;
  ob2.debug=true;
  ob3.debug=true;
  ob4.debug=true;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  ob1.y=mouseY;
  ob1.x=mouseX;
  if(isTouching(ob1,ob3,ob4)){
    
      ob1.shapeColor="green";
      ob2.shapeColor="blue";
  }
  
    else{
      ob1.shapeColor="black";
      ob2.shapeColor="black";
    }
  }

function isTouching(ob3,ob4){

  if(ob1.x-ob2.x<ob1.width/2+ob2.width/2&&ob2.x-ob1.x<ob2.width/2+ob1.width/2&&ob1.x-ob2.x<ob1.height/2+ob2.height/2&&ob2.x-ob1.x<ob2.height/2+ob1.height/2&&ob3.x-ob4.x<ob3.width/2+ob4.width/2&&ob4.x-ob3.x<ob4.width/2+ob3.width/2&&ob3.x-ob4.x<ob3.height/2+ob4.height/2&&ob4.x-ob3.x<ob4.height/2+ob3.height/2){
    return true;
  }

  else{
    return false;
  }
}