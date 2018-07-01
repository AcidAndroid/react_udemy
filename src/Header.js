import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
          <h1>Grocery List for {this.props.day}</h1>
      </React.Fragment>
    )
  }
}

Header.defaultProps={
    day:'Anyday'
}