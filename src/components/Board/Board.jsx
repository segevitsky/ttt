import React from "react";
import Square from "../Square/Square";
import "./Board.css";
import ScreenGameOver from "../ScreenGameOver/ScreenGameOver";

class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
    GameOver: false,
    
  };

  createBoard(row,col) {
    const board = [];
    let cellCounter = 0;
    for (let i=0; i < row; i++) {
      const columns = [];
      for (let j=0; j < col; j++) {
        columns.push(this.renderSquare(cellCounter++))
        }
     board.push (<div key={i} className='board-row'>{columns}</div>)   
    }
    return board
  }



  handleClick(i) {
    const squares = this.state.squares.slice(); // a copy of the squares array
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O"; // Decides whose turn is it
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    }); // and changing the current array to the new one
  }

  restartGame = () => {
    const restart = Array(9).fill(null);
    this.setState({ squares: restart });
  };


  renderSquare(i) {
    const winnerClass = 
      this.props.winnerSquares &&
      (this.props.winnerSquares[0] === i ||
       this.props.winnerSquares[1] === i ||
       this.props.winnerSquares[2] === i)
      ? 'winner' : '';
    
    return (
      <Square
        winnerClass={winnerClass}
        key={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    let zib;
    const winner = calculateWinner(this.state.squares); 
    let status;
    console.log(winner);
    if (winner) {
      let win = JSON.stringify(winner.winner);
      // console.log(winningStreak);
      // console.log(winner);
      status = winnerText + win.replace(/['"]+/g, "") + "!";
    } else {
      status = next + (this.state.xIsNext ? "X" : "O");
    }

    if (winner) {
      zib = `this is the winning streak: ${winner.winningStreak}`
    }
    
    

    return (
      <>
        <button
         onClick={this.restartGame}
         className='restart'
         >
           Restart Game</button>
        <div className='wholeBoard'>
          <div >
            {this.createBoard(3,3)}
          </div>
        </div>
        {
        winner ? <ScreenGameOver 
        onClick={this.restartGame}
        status={status}
        winningStreak={zib}
        /> : null
        }
        
      </>
    );
  }
}

function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    let strike;
    console.log(a);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      const [a, b, c] = lines[i];
      strike = [a,b,c];
      console.log(squares[b]);
      return  {
        winner: squares[a],
        loser: !squares[a],
        winningStreak: lines[i]
      };
    }
  }
  return null;
}

export default Board;

const winnerText = "And The Winner Is... ";
const next = "Next player: ";
// const noWinner = "No Winner";


