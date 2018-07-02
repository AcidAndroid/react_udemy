import React, { Component } from 'react';
import './App.css';
import GroceryList from './GroceryList';
import Header from './Header';
import Square from './Square';


class App extends Component {

  state={
    turn:'X'
    ,board:["","","","","","","","",""]
  }
  
  // Se activa cuando se da click en un cuadro; por ahora
  // cada cuandro es solo conciente de si mismo  no sabe
  // el state de los otros para saber si es posible modificarse
  changeOnSquares = (squareId)=>{

    const actualBoardState = this.state.board.slice()
    let nextTurn = this.state.turn

    // Solo cuando no se ha hecho clic en el campo previamente
    // lo deja cambiar
    if (actualBoardState[squareId]==='') {
      // Le asigna el valor de quien es el turno
      actualBoardState[squareId]=nextTurn

    }

    this.setState(
      {board:actualBoardState
        //Cambia el turno
      ,turn: nextTurn === 'O'? 'X' : 'O'      }
    )
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Square handleClick={()=>this.changeOnSquares(0)} value={this.state.board[0]} />
          <Square handleClick={()=>this.changeOnSquares(1)} value={this.state.board[1]} />
          <Square handleClick={()=>this.changeOnSquares(2)} value={this.state.board[2]} />
        </div>
        <div>
          <Square handleClick={()=>this.changeOnSquares(3)} value={this.state.board[3]} />
          <Square handleClick={()=>this.changeOnSquares(4)} value={this.state.board[4]} />
          <Square handleClick={()=>this.changeOnSquares(5)} value={this.state.board[5]} />
        </div>
        <div>
        <Square handleClick={()=>this.changeOnSquares(6)} value={this.state.board[6]} />
        <Square handleClick={()=>this.changeOnSquares(7)} value={this.state.board[7]} />
        <Square handleClick={()=>this.changeOnSquares(8)} value={this.state.board[8]} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
