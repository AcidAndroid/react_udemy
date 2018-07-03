import React, { Component } from 'react'

export default class Game extends Component {

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
    
    
      playerWon() {
        const board = this.state.board;
        const winningConditions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
       ];
    
        // determining if someone won
        for(let i = 0; i < winningConditions.length; i++){
         const [a, b, c] = winningConditions[i];
          if(board[a] !== "" &&
             board[a] === board[b] &&
             board[b] === board[c])
          {
            return board[winningConditions[i][0]]
          }
    
        }
    
        // check if board is full
        let isBoardFull = true;
        for(let i = 0; i < board.length; i++){
          if( board[i] === "" ){
            isBoardFull = false;
          }
        }
    
        if(!isBoardFull){
          // if no one has won and the board is not full, game continues
          return ""
        } else {
          // if no one has won when the board is full, it is a tie
          return "tie";
        }
      }
    
    
      render() {
        return (
          <React.Fragment>
            <h1>{this.playerWon()}</h1>
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
