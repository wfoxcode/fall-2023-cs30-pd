// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [[0, 1, 0, 0],
            [1, 0, 1, 1],
            [0, 0, 1, 1],
            [1, 1, 0, 1]];

const ROWS = 4;
const COLS = 4;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width < height) {
    cellSize = width/ROWS;
  }
  else {
    cellSize = height/COLS
  }
}

function draw() {
  background(220);
  displayGrid();
}

function displayGRID(){
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellsize);
  let y = Math.floor(mouseY/cellSize);

  console.log(x,y)

  if (grid[y][x]===0) {
    grid[y][x]===1
  }
  else {
    grid[y][x]===0
  }
}