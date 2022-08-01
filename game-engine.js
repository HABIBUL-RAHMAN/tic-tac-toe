let board = [
  [".", ".", "."],
  [".", ".", "."],
  [".", ".", "."],
];

const winning_states = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const CIRCLE = "circle";
const CROSS = "cross";

// Conversion from 1d to 2d index...
//        row = k / 3  and  column = k % 3

const board_container = document.querySelector(".board");

const board_cells = Array.from(document.querySelectorAll(".cell"));

board_cells.forEach(function (cell, index) {
  cell.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(index, `(${Math.trunc(index / 3)}, ${index % 3})`);
  });
});
