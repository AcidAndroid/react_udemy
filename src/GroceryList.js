import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

GroceryList.defaultProps = {
    list:[]  
  }

  GroceryList.propTypes={
      list:PropTypes.arrayOf(PropTypes.shape({
          id:PropTypes.number
          ,name:PropTypes.string
      }))
  }