import React, { Component } from 'react';
import './App.css';
import GroceryList from './GroceryList';
import Header from './Header';

const monday=[{id:1 ,name:"Bread"},{id:2,name:"Flowers"},{id:3,name:"Peanut butter"},{id:4,name:"Jelly"}]
const tuesday=[{id:1 ,name:"Coffe"},{id:2,name:"Yougurt"},{id:3,name:"Cheese"},{id:4,name:"Wheat"}]

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <GroceryList />

        <Header day={'Monday'}/>
        <GroceryList list={monday}/>

        <Header day={'Tuesday'}/>
        <GroceryList list={tuesday}/>
        
      </React.Fragment>
    );
  }
}

export default App;
