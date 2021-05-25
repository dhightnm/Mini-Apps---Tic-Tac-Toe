var board = document.getElementById('gameBoard');

var boardGrid = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

var move = 'X';
var State = true;

// let gameStart = () => {
//   document.move = 'X';
// };

var playerMove = (element) => {
  // debugger;
  if (element.innerHTML.length === 0 && State) {
    var row = element.parentNode.id[element.parentNode.id.length - 1] - 1;
    var column = element.id[element.id.length - 1];
    element.innerHTML = move;
    boardGrid[row][column] = move;
    winCheckerAll()
    move = move === 'X' ? 'O' : 'X';
  }
};

let turnToggle = () => {
  if (document.move === 'X') {
    document.move = 'O';
  } else {
    document.move = 'X';
  }

};

let reset = () => {
  let domCells = document.getElementsByClassName('column');
  var boardGrid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];



  // boardGrid.forEach(element => {
  //   console.log(element);
  //     element.map(cell => {
  //       console.log(cell);
  //       cell = '';
  //       console.log(cell);
  //       console.log(boardGrid);

  //     });
  //   });
  for (let i = 0; i < domCells.length; i++) {
    domCells[i].innerHTML = '';
  }

  State = true;

};

let winMessage = () => {
  alert('You have won the game!');
  State = false;
}

//iterate through board and check if cells have X or O
let checkWinRow = (row, column) => {

  //================Check Win for Rows==================
  for (let row = 0; row < boardGrid.length; row++) {
    let move = boardGrid[row][0];
    let win = true;
    if (move !== '') {
      for (let column = 1; column < boardGrid.length; column++){
        if (boardGrid[row][column] !== move) {
          win = false;
        }
      }
      if (win) {
    winMessage()
      }
    }
  }
};

let checkWinColumn = (row, column) => {
  for (let row = 0; row < boardGrid.length; row++) {
    let move = boardGrid[0][row];
    let win = true;
    if (move !== '') {
      for (column = 1; column  < boardGrid.length; column++ ) {
        if (boardGrid[column][row] !== move) {
          win = false;
        }
      }
      if (win) {
        winMessage();
      }
    }
  }
};

let checkWinDiagonalMajor = () => {
  let move = boardGrid[0][0];
  let win = true;
  if (move !== '') {
    boardGrid.forEach((element, idx) => {
      if (element[idx] !== move){
        win = false;

      }
    });
    if (win) {
      winMessage();
    }
  }
};

let checkWinDiagonalMinor = (row, column) => {
  let move = boardGrid[boardGrid.length - 1][0];
  let win = true;
  if (move !== '') {
    for (let row = boardGrid.length - 2, column = 1; row >= 0; row--, column++) {
      if (boardGrid[row][column] !== move)
      win = false;
    }
    if (win) {
      winMessage();
    }
  }
};

let winCheckerAll = () => {
  return checkWinRow() || checkWinColumn() || checkWinDiagonalMajor() || checkWinDiagonalMinor();

};
