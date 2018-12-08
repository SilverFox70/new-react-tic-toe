import React from 'react';
import './index.css';
import styled from '@emotion/styled/macro';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      value: null
    };
  }

  render() {
    return (
      <button 
        className="square" 
        onClick={ () => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;