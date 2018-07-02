import React, { Component } from 'react'

export default class Counter extends Component {
    state ={
        count:0
      }
    
      
      incrementCount =()=> {
        this.setState((prevState)=>{
          return{
            count: prevState.count +1
          }
        })
      }
    
      decrementCount =()=> {
        this.setState((prevState)=>{
          return{
            count: prevState.count -1
          }
        })
      }

  render() {
    return (
      <React.Fragment>
        <h1>
          {this.state.count}
        </h1>
       <button onClick={this.incrementCount} >+</button>
       <button onClick={this.decrementCount} >-</button>
      </React.Fragment>
    )
  }
}
