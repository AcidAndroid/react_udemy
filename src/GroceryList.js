import React, { Component } from 'react'

export default class GroceryList extends Component {
  render() {
    return (
      <React.Fragment>
          <h1>Grocery Listo for Monday</h1>
          <ol>
              <li>Bread</li>
              <li>Flowers</li>
              <li>Peanut butter</li>
          </ol>
      </React.Fragment>
    )
  }
}
