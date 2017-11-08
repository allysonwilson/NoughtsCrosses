import React from "react";

class Tile extends React.Component {

  tileClicked(props) {
    props.updateBoard(props.position, props.turn);
  }

  render() {
    return (
      <div className="indiv-tile"
        onClick ={()=> this.tileClicked(this.props)}>
        {this.props.value}
      </div>
    );
  }
}

export default Tile;
