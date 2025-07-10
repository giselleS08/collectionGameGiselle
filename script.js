/* VARIABLES */
let catcher, fallingObject;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  background(255,255,237);
  
  //Create the first sprite 
  
  fallingObject = new Sprite(100,0,10);
  fallingObject.vel.y=2;


  catcher = new Sprite(200,300,100,20);
}

/* DRAW LOOP REPEATS */
function draw() {
  background(255,255,237);

  
    if(fallingObject.y >= 410)
    {
      fallingObject.y=-20;
      fallingObject.x= random(10,390);
      fallingObject.vel.y=random(1,5);
    }

  //Move Catcher

  if (kb.pressing("left"))
  {
    catcher.vel.x = -3;
  }
  else if (kb.pressing("right"))
  {
    catcher.vel.x = 3;
    
  } 
  else
  {
    catcher.vel.x = 0;
  }
}