import React from "react";

const Square = ({value, active, onClick}) => {
  const style = `squares btn ${value && value} ${active && "active"}`;

  return(
    <button className={style} onClick={onClick}>
      <div className="content">{ value }</div>
    </button>
  )
}

export default Square;
