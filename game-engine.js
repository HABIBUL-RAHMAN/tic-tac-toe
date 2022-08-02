let board = [
  [".", ".", "."],
  [".", ".", "."],
  [".", ".", "."],
];

const WINNER = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const board_container = document.querySelector(".board");

const board_cells = Array.from(document.querySelectorAll(".cell"));

let xTurn = true;

board_cells.forEach(function (cell, index) {
  cell.addEventListener("click", function (e) {
    e.preventDefault();

    // Conversion from 1d index to 2d index
    let i = Math.trunc(index / 3); // row = k / 3
    let j = index % 3; // column = k % 3

    if (xTurn) {
      board_container.classList.remove("cross");
      board_container.classList.add("circle");

      cell.classList.add("cross");
      board[i][j] = "X";

      xTurn = false;
    } else {
      board_container.classList.remove("circle");
      board_container.classList.add("cross");

      cell.classList.add("circle");
      board[i][j] = "O";

      xTurn = true;
    }

    // show_board();
  });
});

function show_board() {
  let s = "";
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      s += `${board[i][j]} `;
    }
    s += `\n`;
  }
  console.log(s);
}
