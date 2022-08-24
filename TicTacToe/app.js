const boardWidth = 3;
let player = 1;
let numMovesDone = 0;
let gameOver = null;

const gameSquares = document.querySelectorAll('.game-square');
const gameHeading = document.getElementById('game-heading');
const restartButton = document.getElementById('restart-game');

gameSquares.forEach((square, i) => {
  square.addEventListener('click', (e) => {
    const row = Math.floor(i / boardWidth);
    const col = i % boardWidth;
    numMovesDone++;

    insertPlay(e, row, col);
    changeHeading();
  });
});

restartButton.addEventListener('click', () => {
  gameSquares.forEach(square => {
    square.disabled = false;
    square.textContent = '';
  });
  player = 1;
  boardState = generateBoardState();
  gameOver = null;
  numMovesDone = 0;
  restartButton.style.display = 'none';
  changeHeading();
});

const changeHeading = () => {
  if (gameOver === 'win') {
    gameHeading.textContent = `Player ${player} Has Won!`;
  } else if (gameOver === 'tie') {
    gameHeading.textContent = `Tie Game!`;
  } else {
    gameHeading.textContent = `Player ${player}'s Turn`;
  }
};

const insertPlay = (e, row, col) => {
  e.target.textContent = player === 1 ? 'X' : 'O';
  boardState[row][col] = player;

  if (didPlayerWin()) {
    endGame();
    gameOver = 'win';
    restartButton.style.display = 'block';
  } else if (numMovesDone === boardWidth * boardWidth) {
    endGame();
    gameOver = 'tie';
    restartButton.style.display = 'block';
  } else {
    player = player === 1 ? 2 : 1;
    e.target.disabled = true;
  }
};

const didPlayerWin = () => {
  const rows = [0, 1, 2];

  const rowWin = rows.some(r => {
    return boardState[r][0] === player &&
    boardState[r][1] === player &&
    boardState[r][2] === player;
  });

  const cols = [0, 1, 2];

  const colWin = cols.some(c => {
    return boardState[0][c] === player &&
    boardState[1][c] === player &&
    boardState[2][c] === player;
  });

  const topLeftToBottomRight =  (
    boardState[0][0] === player &&
    boardState[1][1] === player &&
    boardState[2][2] === player
  );

  const topRightToBottomLeft = (
    boardState[0][2] === player &&
    boardState[1][1] === player &&
    boardState[2][0] === player
  );

  return rowWin || colWin || topLeftToBottomRight || topRightToBottomLeft;
};

const endGame = () => {
  gameSquares.forEach(square => {
    square.disabled = true;
  });
};

const generateBoardState = () => {
  return new Array(boardWidth)
    .fill()
    .map(() => new Array(boardWidth).fill());
};

let boardState = generateBoardState();