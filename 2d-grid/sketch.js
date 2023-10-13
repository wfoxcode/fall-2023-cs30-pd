// 2D Grid
// Oct 12, 2023

// let grid = [[0, 1, 0, 0],
//             [1, 0, 1, 1],
//             [0, 0, 1, 1],
//             [1, 1, 0, 1]];

const ROWS = 4;
const COLS = 4;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);

  let grid = createRandomGrid(ROWS,COLS);

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

function createRandomGrid(ROWS,COLS) {
  let newGrid = [];
  for (let y=0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 50) {
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
      }
    }
  }

  return newGrid;
}

function createEmptyGrid {
  let newGrid = [];
  for (let y=0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x=0; x<COLS; x++) {
      newGrid[y].push([]);
    }
  }
}

function keyTyped() {
  if (key==="r") {
    grid = createRandomGrid(ROWS,COLS);
  }
  else if (key==="e") {
    grid = createEmptyGrid(ROWS,COLS);
  }
}