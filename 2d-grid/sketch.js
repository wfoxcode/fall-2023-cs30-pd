// 2D Grid
// Oct 12, 2023

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
    cellSize = height/ROWS;
  }
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }

  else if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  console.log(x, y);
}

function displayGrid() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 0) {
        fill("white");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}
