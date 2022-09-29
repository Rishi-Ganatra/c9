var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(100,100,50,50)
  ball.shapeColor="red"
}

function draw() 
{
  background(30);
rect(200,200,100,100)
if (keyIsDown(RIGHT_ARROW)) {
  ball.position.x+=5
}
if (keyIsDown(LEFT_ARROW)) {
  ball.position.x-=5
}
drawSprites()
}




