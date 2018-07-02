import React, { Component } from 'react'

const style = {

    backgroundColor: "white",  
    border: "black solid 2px",  
    textAlign: "center",  
    fontSize: "20px",  
    width: "40px",  
    height: "40px",  
    margin: -1,  
    display: "inline-block",  
    verticalAlign: "top",  
  }

  const squareValues =[' ','X','O']
export default class Square extends Component {
    
    state={
        value :0
    }

    squareClicked =()=>{
        console.log('Click')
        this.setState((prevState,props)=>{
            return {value: (prevState.value+4)%3}
        })
    }

  render() {
    return (
        <div style={style} onClick={this.squareClicked} >{ squareValues[this.state.value] }</div>
    )
  }
}
