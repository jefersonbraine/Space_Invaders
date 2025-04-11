let starfield = document.querySelector("#starfield");
let mainContext = starfield.getContext("2d");


let canvasWidth = starfield.width;
let canvasHeight = starfield.height;

let numberOfStars = 200;
let stars = [];


class Star { 
    constructor() {
        this.x = getRandomInt(0, canvasWidth);
        this.y = getRandomInt(0, canvasHeight);

        this.counter = canvasWidth;

        this.radius = getRandomInt(1, 10);
        this.context = mainContext;
    }

    drawStar() {
        this.counter -= 1;

        let xRatio = this.x / this.counter;
        let yRatio = this.y / this.counter;

        let starX = remap(xRatio, 0, 1, 0, canvasWidth);
        let starY = remap(yRatio, 0, 1, 0, canvasHeight);

        mainContext.beginPath();

        mainContext.arc(starX, starY, this.radius, 0, Math.PI * 2, false);

        mainContext.closePath();

        mainContext.fillStyle = "#FFF";
        mainContext.fill()
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

    for (let i = 0; i < stars.length; i++) {
        let star = stars[i]
        star.drawStar();
    }

    requestAnimationFrame(draw);
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