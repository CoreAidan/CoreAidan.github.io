// Position Variables
let x = 100;
let y = 100;

// Speed - Velocity
let speed = 2;

let vx = speed;
let vy = speed;

// Acceleration
let ax = 1;
let ay = 1;

let vMultiplier = 0.007;
let bMultiplier = 0.6;

//let img;
let images = [];
let currentImage = 0;

function preload(){
  //images[] = loadImage('assets/dvd.png');
  for (var i = 0; i < 8; i++) {
    images[i] = loadImage("assets/dvd-" + (i + 1) + ".png");
  }
}

function setup() {
  var canvasDiv = document.getElementById('main');
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  
  let canvas = createCanvas(width, height);
  canvas.class("screen");
  canvas.parent("main");

  fill(0);
}

function draw() {
  background(33, 36, 40);
  ballMove();
  //ellipse(x, y, 30, 30);
  //img.loadPixels();
  // for (let x = 0; x < img.width; x++) {
  //   for (let y = 0; y < img.width; y++) {
  //     let i =  x+ y*img.width;
  //     if (img.get(x, y) == "#000000") {
  //       img.pixels[i] = c;
  //     }
  //   }
  // }
  //img.updatePixels();
  image(images[currentImage], x, y, 200, 100);
}

function changeColor(){
  currentImage = int(random(0, 8));
}

function ballMove() {
  // ax = accelerationX;
  // ay = accelerationY;

  x += vx;
  y += vy;
  // y = y + vy * vMultiplier;
  // x = x + vx * vMultiplier;

  //console.log(x);
  // Bounce when touch the edge of the canvas
  //left
  if (x < 0) {
    vx = -vx;
    changeColor();
  }
  if (y < 0) {
    vy = -vy;
    changeColor();
  }
  if (x > width - 200) {
    vx = -vx;
    changeColor();
  }
  if (y > height - 100) {
    vy = -vy;
    changeColor();
  }
}