var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1300, 400);

  thickness = random(22, 83);

  wall = createSprite(1100, 200, thickness, height/2);
  
  speed = random(223, 321);
  weight = random(30, 52)

  bullet = createSprite(50, 200, 100, 50);
  

  bullet.velocityX = speed
}

function draw() {
  background(255,255,255);
  
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;

    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    console.log(damage);

    if(damage>10) {
      wall.shapeColor = color(255, 0, 0);
    }

    else if(damage<=10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}

function hasCollided(bullet, wall) {
  if(bullet.x>=wall.x) {
    return true
  }
  else {
    return false;
  }
}