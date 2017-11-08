import React, { Component } from 'react';
import Tile from "../components/Tile"
import Button from "../components/Button"

class Container extends Component {

  constructor() {
    super();
    this.state = {
      board: [ "","","","","","","","",""],
      players: [
        {name: "Rebel", src: "X"},
        {name: "Alliance", src: "O"}],
      winningMoves: [ [0,1,2], [3,4,5] [6,7,8], [0,3,6],
                      [1,4,7], [2,6,8], [0,4,8], [2,4,6]],
      move: 0
    }
    this.updateBoard = this.updateBoard.bind(this);
    // this.isWin = this.isWin.bind(this);
  }

  resetBoard(){
    this.setState( {
      board: ["","","","","","","","",""],
      move: 0,
      winner: false
    })
  }

  turn() {
    const newMove = this.state.move + 1
    this.setState({move: newMove})
  }


  updateBoard(index){
    if (this.state.board[index] !== "") {
      return;
    }

    const player = this.state.move % 2 === 0 ? this.state.players[0] : this.state.players[1]
    const newBoard = this.state.board.slice(0)
    newBoard[index] = player.src

    this.setState({board: newBoard})
    this.turn()
  }

  render(){
    console.log(this.state.board)
    return (
      <div className="container">
        <Button reset={this.resetBoard.bind(this)}/>
        <h1 className="title">Let the wookie win</h1>
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
