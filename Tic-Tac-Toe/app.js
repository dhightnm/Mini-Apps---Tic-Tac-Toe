var board = document.getElementById('gameBoard');

var boardGrid = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

var move = 'X';
var gameState = true;

// let gameStart = () => {
//   document.move = 'X';
// };

var playerMove = (element) => {
  // debugger;
  if (element.innerHTML.length === 0 && gameState) {
    var row = element.parentNode.id[element.parentNode.id.length - 1] - 1;
    var column = element.id[element.id.length - 1];
    element.innerHTML = move;
    boardGrid[row][column] = move;
    checkWinRow();
    checkWinColumn();
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
      if (win)
       alert('You have won the game');
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
        alert('You have won the game');
      }
    }
  }
};
  //if

