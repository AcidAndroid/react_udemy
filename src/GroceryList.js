import React, { Component } from 'react'


export default class GroceryList extends Component {
  render() {
    return (
      <React.Fragment>          
          <ol>
              {this.props.list.map((item)=>{
                  return <li key={item.id}>{item.name}</li>
              })}
          </ol>
      </React.Fragment>
    )
  }
}
