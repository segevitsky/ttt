import React from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Navbar from "./components/Navbar/Navbar";
import Menu from './components/Menu/Menu';
// import ScreenGameOver from './components/ScreenGameOver/ScreenGameOver';

class App extends React.Component {
  state = {
    squares: Array(9).fill(null),
    showSquares: false,
    StartNewGame: false,
    showMenu: true,
    navBar: ''
  };

  startGameListener = () => {
    const didGameStart = this.state.showSquares;
    this.setState({ showSquares: !didGameStart });
    this.setState({showMenu: false})
  };

  openMenuListener = () => {
    this.setState({
      navBar: 'active',
    })
  };

  showMenuForNav = (state) => {
    this.setState({
      showMenu: !state.showMenu})
  }

  render() {
    return (
      <>
      {
        this.state.showMenu ?
        <Menu click={this.startGameListener}/> : null
      }
        <Navbar
          clicking={this.openMenuListener}
          clicked={this.startGameListener}
          // openMenu={this.showMenuForNav}
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

