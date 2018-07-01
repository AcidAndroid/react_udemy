import React, { Component } from 'react'

const data=[{id:1 ,name:"Bread"},{id:2,name:"Flowers"},{id:3,name:"Peanut butter"},{id:4,name:"Jelly"}]
export default class GroceryList extends Component {
  render() {
    return (
      <React.Fragment>          
          <ol>
              {data.map((item)=>{
                  return <li key={item.id}>{item.name}</li>
              })}
          </ol>
      </React.Fragment>
    )
  }
}
