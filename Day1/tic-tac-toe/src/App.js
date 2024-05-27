import { useState } from 'react';

function Square({i, value, onSquareClick, winner }) {
  if (winner.length > 1 && winner.includes(i)) {
    return (
      <button className="square" onClick={onSquareClick} style={{backgroundColor: "green"}}>
        {value}
      </button>
    );
  }
  else {
    return (<button className="square" onClick={onSquareClick}>
      {value}
    </button>
    );
  }
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares).length == 3 || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner.length > 1) {
    status = 'Winner is ' + (xIsNext ? 'O' : 'X') + '! \n Refresh to play again';
  }
  // if all squares are filled with no winner, it's a draw
  else if (!squares.includes(null)) {
    status = 'Draw! \n Refresh to play again';
  }
  else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <h1>Welcome to Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      {[0, 1, 2].map((row) => (
          <div className="board-row" key={row}>
          {[0, 1, 2].map((col) => (              
            <Square
              key={row * 3 + col}
              i={row * 3 + col}
              value={squares[row * 3 + col]}
              onSquareClick={() => handleClick(row * 3 + col)}
              winner={winner}
            />))
          }
          </div>))
      }
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      // return the winning array of indices
      return lines[i];
  }
  return [-1];
}