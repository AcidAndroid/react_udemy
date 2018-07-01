import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from './GroceryList';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <GroceryList/>
      </React.Fragment>
    );
  }
}

export default App;
