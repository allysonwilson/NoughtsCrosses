import React from 'react';

class Button extends React.Component {

  render(){
    return (
      <button className="reset-button" onClick={this.props.reset}>New Game</button>
    )
  }
}

export default Button;
