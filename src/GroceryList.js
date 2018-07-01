import React, { Component } from 'react'

export default class GroceryList extends Component {
  render() {
    return (
      <React.Fragment>          
          <ol>
              <li>Bread</li>
              <li>Flowers</li>
              <li>Peanut butter</li>
          </ol>
      </React.Fragment>
    )
  }
}
