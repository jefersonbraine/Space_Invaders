let starfield = document.querySelector("#starfield");
let mainContext = starfield.getContext("2d");

let canvasWidth = starfield.width;
let canvasHeight = starfield.height;

let numberOfStars = 500;
let stars = [];

let centerX = canvasWidth * 0.5;
let centerY = canvasHeight * 0.5;

function updateCanvasSize() {
  starfield.width = window.innerWidth;
  starfield.height = window.innerHeight;

  canvasWidth = starfield.width;
  canvasHeight = starfield.height;

  centerX = canvasWidth * 0.5;
  centerY = canvasHeight * 0.5;
}

updateCanvasSize();

class Star {
  constructor() {
    this.x = getRandomInt(-centerX, centerX);
    this.y = getRandomInt(-centerY, centerY);

    this.counter = getRandomInt(1, canvasWidth);

    this.radiusMax = getRandomInt(0.1, 2);
    this.speed = getRandomInt(1, 50);
    // this.radius = getRandomInt(0.1, 1);
    this.context = mainContext;
  }

  drawStar() {
    this.counter -= this.speed;

    if (this.counter < 1) {
      this.counter = canvasWidth;

      this.x = getRandomInt(-centerX, centerX);
      this.x = getRandomInt(-centerY, centerY);

      this.radiusMax = getRandomInt(0.1, 10);
      this.speed = getRandomInt(1, 50);
    }

    let xRatio = this.x / this.counter;
    let yRatio = this.y / this.counter;

    let starX = remap(xRatio, 0, 1, 0, canvasWidth);
    let starY = remap(yRatio, 0, 1, 0, canvasHeight);

    this.radius = remap(this.counter, 0, canvasWidth, this.radiusMax, 0);

    mainContext.beginPath();

    mainContext.arc(starX, starY, this.radius, 0, Math.PI * 2, false);

    mainContext.closePath();

    mainContext.fillStyle = "#FFF";
    mainContext.fill();
  }
}

function setup() {
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(new Star());
  }
}
setup();

function draw() {
  mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
  mainContext.fillStyle = "#111";
  mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

  mainContext.translate(centerX, centerY);

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    star.drawStar();
  }

  mainContext.translate(-centerX, -centerY);

  requestAnimationFrame(draw);
  /*
TODO 

    *ADD Delta Tima for fixing the frame rate
*/
}
draw();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function remap(value, istart, istop, ostart, ostop) {
  value = Number(value);
  istart = Number(istart);
  istop = Number(istop);
  ostart = Number(ostart);
  ostop = Number(ostop);

  // Perform the mapping calculation
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}
