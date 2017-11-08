import React, { Component } from 'react';
import Tile from "../components/Tile"
import Button from "../components/Button"

class App extends Component {

  constructor() {
    super();
    this.state = {
      board: [
        "","","","","","","","",""]
    }
    // this.updateBoard = this.updateBoard.bind(this);
  }

  reset(){
    this.setState( {
        board: [
          "","","","","","","","",""]
    })
  }

  // updateBoard(props){
  //
  // }

  render(){
    console.log(this)
    return (
      <div className="container">
        <Button />
        <h1>Tic Tac Toe</h1>
        {this.state.board.map(function(value, ind){
          return <Tile className="tile" key={ind} position={ind} value={value}/>
        })}
      </div>


    )
  }
}

export default App;
