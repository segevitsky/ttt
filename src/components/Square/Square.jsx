import React from "react";
import "./Square.css";


function Square(props) {
  return (
    <button
      className= {`${props.winnerClass} square`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;

