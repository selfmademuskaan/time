var hr, min, sec;



function setup() {
  createCanvas(600, 600);



  //createSprite(300, 300, 50, 50);
}

function draw() {
  translate(300, 300);
  rotate(-90);

  background('black');

  hr = hour();
  min = minute();
  sec = second();
  angleMode(DEGREES);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);

  //sec
  push()
  stroke('blue');
  rotate(secAngle);
  strokeWeight(7);
  line(0, 0, 100, 0),
    pop()
  //min
  push()
  stroke('yellow');
  rotate(minAngle);
  strokeWeight(7);
  line(0, 0, 75, 0),
    pop()

  //hr
  push()
  stroke('red');
  rotate(hrAngle);
  strokeWeight(7);
  line(0, 0, 50, 0),
    pop()

  drawSprites();
}