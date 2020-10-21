import React from 'react';
import Board from'./Board.js';

class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true
      };
    }
  
    handleClick(i) {
        //todo: implement this function
    }
  
    render() {
      const squares = this.state.squares;
      const status = "Next player: " + (this.state.xIsNext ? "X" : "O");
  
      return (
        <div class="main">
            <div>
            <div>{status}</div>
            </div>
          <div>
            <Board
              squares={squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
        </div>
      );
    }
  }

  export default Game;