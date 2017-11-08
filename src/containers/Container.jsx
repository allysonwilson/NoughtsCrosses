import React, { Component } from 'react';
import Tile from "../components/Tile"
import Button from "../components/Button"

class Container extends Component {

  constructor() {
    super();
    this.state = {
      board: [
        "0","1","2","3","4","5","6","7","8"]
    }
    // this.updateBoard = this.updateBoard.bind(this);
  }

  resetBoard(){
    this.setState( {
        board: [
          "","","","","","","","",""]
    })
  }

  updateBoard(props){

  }

  render(){
    console.log(this)
    return (
      <div className="container">
        <Button reset={this.resetBoard.bind(this)}/>
        <h1>Tic Tac Toe</h1>
        <div className="board">
        {this.state.board.map(function(value, ind){

          return <Tile className="indiv-tile" key={ind} position={ind} value={value}/>
        })}
        </div>
      </div>


    )
  }
}

export default Container;
