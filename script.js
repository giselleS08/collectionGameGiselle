/* VARIABLES */
let catcher, fallingObject;
let score = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  background(255,255,237);
  
  //Create the first sprite 
  
  fallingObject = new Sprite(100,0,10);
  fallingObject.vel.y=3;


  catcher = new Sprite(200,300,100,20, "k");
}

/* DRAW LOOP REPEATS */
function draw() {
  background(255,255,237);
  
  
  
    if(fallingObject.y >= 410)
    {
      fallingObject.y=-20;
      fallingObject.x= random(10,390);
      fallingObject.vel.y=random(1,5);
      score -=1;
    }

  //Move Catcher
  if (kb.pressing("left"))
    {
      catcher.vel.x = -5;
      print("left");
    }
    else if (kb.pressing("right"))
    {
      catcher.vel.x = 5;
      print("right");
    } 
    else
    {
      catcher.vel.x = 0;
    }

  if (catcher.x <= 50)
  {
    catcher.x = 50;
  }
  else if (catcher.x >= 350)
  {
    catcher.x = 350;
  }
  
  if (fallingObject.collides(catcher))
  {
    fallingObject.y=-20;
    fallingObject.x= random(10,390);
    fallingObject.vel.y=random(1,5)
    fallingObject.direction = "down";
    score +=1;
  }



  //score
  fill(0);
  text("Score: " + score, 5, 15);
}