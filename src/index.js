import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import styled from '@emotion/styled/macro';
import Board from './components/Board';
import calculateWinner from './components/calculateWinner';

const StatusDiv = styled.div`
  margin: 1rem 0 1rem 0;
`;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length -1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // Pass a function into setState because we are using current state
    // to help determine future state for xIsNext
    this.setState(
      (prevState, props) => {
        console.log('squares in fn: ', squares);
        console.log('prevState squares: ', prevState.history[history.length - 1]);
        return ({
          history : history.concat([{
            squares: squares
          }]),
          stepNumber: history.length,
          xIsNext: !prevState.xIsNext
        })
      }, 
        // Log out that state was updated as expected in the callback
        () => {
          console.log('squares: ', squares);
        }
    );
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ===0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #${move}` :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <StatusDiv>{status}</StatusDiv>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
