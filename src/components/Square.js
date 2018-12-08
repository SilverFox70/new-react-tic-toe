import React from 'react';
// import './index.css';
import styled from '@emotion/styled/macro';

const SquareButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;

  :focus {
    outline: none;
  }
`;

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      value: null
    };
  }

  render() {
    return (
      <SquareButton 
        className="square" 
        onClick={ () => this.props.onClick()}>
        {this.props.value}
      </SquareButton>
    );
  }
}

export default Square;