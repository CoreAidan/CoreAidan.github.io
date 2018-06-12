var population;
var lifeSpan = 600;
var count = 0;
var lifeP;
var target;

var maxforce = 0.3;

var rx = 200;
var ry = 300;
var rw = 400;
var rh = 50;

function setup() {
  createCanvas(800, 600);
  population = new Population();
  lifeP = createP();
  target = createVector(width/2, 50);
}

function draw() {
  background(0);
  population.run();
  lifeP.html(count);

  rect(rx, ry, rw, rh);

  count++;
  if(count == lifeSpan){
    population.evaluate();
    population.selection();
    count = 0;
  }
  

  ellipse(target.x, target.y, 32, 32);
}