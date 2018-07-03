import React, { Component } from 'react';
import './App.css';
import GroceryList from './GroceryList';
import Header from './Header';
import Square from './Square';


class App extends Component {

  state={
    input:'Puedes escribir aqui'
  }

  handleOnchange = (e)=>{
    console.log(e.target)
    this.setState({
      input:e.target.value
    })
  }
  render(){
    return(
      <React.Fragment>
        <input defaultValue='Pueden escribir'  type="text" ref={(input)=>{this.inputField=input}}></input>
        <input value='Soy readony'  type="text" ref={(input)=>{this.inputField=input}}></input>
        <input value={this.state.input}  type="text" onChange={this.handleOnchange}></input>
        <button onClick={()=>{console.log(this.inputField.value)}} ></button>
      </React.Fragment>
    )
  }
}

export default App;
