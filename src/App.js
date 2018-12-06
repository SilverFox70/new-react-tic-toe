import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import css from '@emotion/css/macro';
import styled from '@emotion/styled/macro';

const myCSS = css`
  color: red;
  padding: 1rem;
`;

const myDiv = styled.div`
  background-color: green;
`;

class App extends Component {
  componentWillMount() {
    console.log('myCSS', myCSS);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className={myCSS}>
          Test Div
        </div>
        <myDiv>
          Styled Div
        </myDiv>
      </div>
    );
  }
}

export default App;
