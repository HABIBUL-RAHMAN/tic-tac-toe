// Conversion from 1d index to 2d index
//       row = Math.trunc(index / 3)
//    column = index % 3

let board = [".", ".", ".", ".", ".", ".", ".", ".", "."];

const WINNING_STATES = [
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
  cell.addEventListener(
    "click",
    function (e) {
      e.preventDefault();

      if (xTurn) {
        board_container.classList.remove("cross");
        board_container.classList.add("circle");

        cell.classList.add("cross");
        board[index] = "X";

        let status = checkWinner("X");

        if (status.hasWon) {
          winning_animation("X");
        }

        xTurn = false;
      } else {
        board_container.classList.remove("circle");
        board_container.classList.add("cross");

        cell.classList.add("circle");
        board[index] = "O";

        let status = checkWinner("O");
        if (status.hasWon) {
          winning_animation("O");
        }

        if (status.hasWon) {
        }

        xTurn = true;
      }

      // show_board();
    },
    { once: true }
  );
});

function winning_animation(player) {
  board_container.style.boxShadow = `rgba(17, 12, 46, 0.15) 0px 48px 100px 0px`;

  setTimeout(() => {
    board_container.style.boxShadow = "none";
  }, 500);
}

function show_board() {
  let s = "";
  for (let i = 0; i < board.length; ++i) {
    s += `${board[i]} `;
    if ((i + 1) % 3 == 0) s += "\n";
  }
  console.log(s);
}

function checkWinner(current_player) {
  let status = {
    hasWon: false,
    winning_line: -1,
  };

  WINNING_STATES.forEach(function (state, index) {
    if (
      board[state[0]] == current_player &&
      board[state[1]] == current_player &&
      board[state[2]] == current_player
    ) {
      status.hasWon = true;
      status.winning_line = index;

      return status;
    }
  });

  return status;
}
