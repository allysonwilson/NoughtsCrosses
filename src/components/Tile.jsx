import React from "react";

class Tile extends React.Component {

  // tileClicked(props) {
  //   props.updateBoard(props.position, props.turn);
  // }

  render() {
    return (
      <div
        onClick ={()=> this.tileClicked(this.props)}>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Tile;
