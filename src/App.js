import React from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Navbar from "./components/Navbar/Navbar";
// import ScreenGameOver from './components/ScreenGameOver/ScreenGameOver';

class App extends React.Component {
  state = {
    squares: Array(9).fill(null),
    showSquares: false,
    StartNewGame: false,
    showMenu: false
  };

  startGameListener = () => {
    const didGameStart = this.state.showSquares;
    this.setState({ showSquares: !didGameStart });
  };

  openMenuListener = () => {
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu };
    });
  };

  render() {
    return (
      <>
        <Navbar
          clicking={this.openMenuListener}
          clicked={this.startGameListener}
        />
        <div className="whole-game">
          <div className="game">
            <div className="game-board">
              {this.state.showSquares ? (
                <Board 
                winnerSquares={this.props.winningStreak} 
                />
              ) : null}
            </div>
            <div className="game-info">
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

