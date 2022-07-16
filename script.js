let board = document.querySelector(".board");
let cells = Array.from(document.querySelectorAll(".cell"));

// 0 1 2 3 4 5 6 7 8
//
// 0 1 2
// 3 4 5
// 6 7 8
//

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

let x_turn = true;

cells.forEach((cell) => {
  cell.classList.remove(CROSS);
  cell.classList.remove(CIRCLE);

  cell.addEventListener(
    "click",
    function () {
      let current_class = x_turn ? CROSS : CIRCLE;

      // switch turn
      if (x_turn) {
        board.classList.remove(CROSS);
        board.classList.add(CIRCLE);

        cell.classList.add(CROSS);
        x_turn = false;
      } else {
        board.classList.remove(CIRCLE);
        board.classList.add(CROSS);

        cell.classList.add(CIRCLE);
        x_turn = true;
      }

      let hasWon = isWinner(current_class);
      showWinAnimation(hasWon);
    },
    { once: true }
  );
});

function isWinner(current_class) {
  for (let i = 0; i < winning_states.length; ++i) {
    let x = cells[winning_states[i][0]].classList.contains(current_class);
    let y = cells[winning_states[i][1]].classList.contains(current_class);
    let z = cells[winning_states[i][2]].classList.contains(current_class);

    if (x && y && z) {
      return true;
    }
  }
  return false;
}
function isDraw() {
  for (let i = 0; i < cells.length; ++i) {
    if (
      !(
        cells[i].classList.contains(CROSS) ||
        cells[i].classList.contains(CIRCLE)
      )
    )
      return false;
  }
  return true;
}

function showWinAnimation(hasWon) {
  if (hasWon) {
    board.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";

    board.style.transform = "scale(1.04, 1.04)";
    setTimeout(() => {
      board.style.transform = "scale(1.02, 1.02)";
      board.style.boxShadow =
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px";
    }, 700);
  }
}

function board_state() {
  let str = "";
  let cnt = 0;
  for (let i = 0; i < cells.length; ++i) {
    let cross = cells[i].classList.contains(CROSS);
    let circle = cells[i].classList.contains(CIRCLE);
    if (cross) {
      str += "X ";
    } else if (circle) {
      str += "O ";
    } else {
      str += ". ";
    }
    if ((cnt++ + 1) % 3 == 0) str += "\n";
  }
  console.log(str);
}
