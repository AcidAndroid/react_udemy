import React, { Component } from 'react';
import './App.css';
import GroceryList from './GroceryList';
import Header from './Header';
import Square from './Square';


class App extends Component {
  
  
  render() {
    return (
      <React.Fragment>
        <div><Square /><Square /><Square /></div>
        <div><Square /><Square /><Square /></div>
        <div><Square /><Square /><Square /></div>
      </React.Fragment>
    );
  }
}

export default App;
