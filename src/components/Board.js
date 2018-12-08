import React from 'react';
import '../styles/index.css';
import styled from '@emotion/styled/macro';
import Square from './Square';
import calculateWinner from './calculateWinner';

const StatusDiv = styled.div`
  margin-bottom: 10px;
`;

const BoardRow = styled.div`
  :after {
  clear: both;
  content: "";
  display: table;
}
`;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // Pass a function into setState because we are using current state
    // to help determine future state for xIsNext
    this.setState(
      (prevState, props) => {
        return ({
          squares: squares,
          xIsNext: !prevState.xIsNext
        })
      }, 
        // Log out that state was updated as expected in the callback
        () => {
          console.log('squares: ', this.state.squares);
        }
      );
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={ () => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div>
        <StatusDiv>{status}</StatusDiv>
        <BoardRow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BoardRow>
      </div>
    );
  }
}

export default Board;
