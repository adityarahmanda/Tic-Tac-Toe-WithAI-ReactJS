import {difficulties} from "./index";

export function isBoardFilled(squares) {
  for(let i = 0; i < squares.length; i++) {
    if(squares[i] === null) {
      return false;
    }
  }
  return true;
}

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function getWinnerLine(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return Array(3).fill(null);
}

function minimax(player, squares, isMax) {
  const opponent = (player === 'x') ? 'o' : 'x';
  const winner = calculateWinner(squares);

  // console.log("player : " + player + ", opponent : " + opponent);
  // console.log("square : " + squares + ", depth : " + depth + ", isMax : " + isMax);
  
  // If player wins, score is +1
  if (winner === player) return { square: -1, score: 1 };
  
  // If opponent wins, score is -1
  if (winner === opponent) return { square: -1, score: -1 };
  
  // If Tie, score is 0
  if (isBoardFilled(squares)) return { square: -1, score: 0 };
  
  // Initialize 'best'. If isMax, we want to maximize score, and minimize otherwise.
  const best = { square: -1, score: isMax ? -1000 : 1000 };
  
  // Loop through every square on the board
  for (let i = 0; i < squares.length; i++) {
    // If square is already filled, it's not a valid move so skip it
    if (squares[i]) {
      continue;
    }
    
    // If square is unfilled, then it's a valid move. Play the square.
    squares[i] = isMax ? player : opponent;
    // Simulate the game until the end game and get the score,
    // by recursively calling minimax.
    const score = minimax(player, squares, !isMax).score;
    // Undo the move
    squares[i] = null;

    if (isMax) {
      // Maximizing player; track the largest score and move.
      if (score > best.score) {
        best.score = score;
        best.square = i;
      }
    } else {
      // Minimizing opponent; track the smallest score and move.
      if (score < best.score) {
        best.score = score;
        best.square = i;
      }
    }
  }
  
  // The move that leads to the best score at end game.
  return best;
};

export function random(min, max) {
  return Math.floor((min + (Math.random() * max - min)));
}

export function findRandomSquare(squares) {
  let randomSquare = 0;
  
  do {
    randomSquare = random(0, 9);
  } while(squares[randomSquare] != null);
  
  return randomSquare;
}

export function findSquare(difficulty, squares, player) {
  let square;
  
  if(difficulty === difficulties.EASY) {
    square = findRandomSquare(squares);
  } else if(difficulty === difficulties.MEDIUM) { 
    let isUseMinimax;

    let squareLeft = 0;
    for(let i = 0; i < squares.length; i++) {
      if(squares[i] != null) {
        squareLeft++;
      }
    }

    isUseMinimax = squareLeft < 6 ? true : (random(0, 2) === 0);
    
    square = isUseMinimax ? minimax(player, squares, true).square : findRandomSquare(squares);
  } else if(difficulty === difficulties.HARD) {
    square =  minimax(player, squares, true).square;
  }

  return square;
}
