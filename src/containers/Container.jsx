import React, { Component } from 'react';
import Tile from "../components/Tile"
import Button from "../components/Button"

class Container extends Component {

  constructor() {
    super();
    this.state = {
      board: [ "0","1","2","3","4","5","6","7","8"],
      winningMoves: [ [0,1,2], [3,4,5] ],
      move: 0
    }
    this.updateBoard = this.updateBoard.bind(this);
  }

  resetBoard(){
    this.setState( {
        board: ["","","","","","","","",""]
    })
  }

  turn() {
    const newMove = this.state.move + 1
    this.setState({move: newMove})
  }

  isWin() {

  }

  updateBoard(index){
    const player = this.state.move % 2 === 0 ? "X" : "O"
    const newBoard = this.state.board.slice(0)
    newBoard[index] = player
    this.setState({board: newBoard})
    this.isWin()
    this.turn()
  }

  render(){
    console.log(this.state.board)
    return (
      <div className="container">
        <Button reset={this.resetBoard.bind(this)}/>
        <h1>Tic Tac Toe</h1>
        <div className="board">
        {this.state.board.map((value, ind)=>{
          return <Tile
            className="indiv-tile"
            key={ind}
            position={ind}
            value={value}
            onTileClick={this.updateBoard}/>
        })}
        </div>
      </div>


    )
  }
}

export default Container;
