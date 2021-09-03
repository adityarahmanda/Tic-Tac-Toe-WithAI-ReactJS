import React from "react";
import Square from "./Square";

const Board = ({squares, lines, onClick}) => {
  function activeSquare(number) {
    if(lines == null) return false;
    for(let i = 0; i < lines.length; i++) {
      if(lines[i] === number) return true;
    }
    return false;
  }
    ;
  return(
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} active={activeSquare(i)} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Board;
