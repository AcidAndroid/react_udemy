import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

Header.protoTypes={
    day:PropTypes.string
}