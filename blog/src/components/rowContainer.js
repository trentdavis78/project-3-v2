import React, { Component } from 'react'
import '../styles/layout.css'

export class rowContainer extends Component {
  render() {
    return (
        <div className={`row container ${this.props.color}`} style={{borderRadius:10}}>
            {this.props.children}
        </div>
    )
  }
}

export default rowContainer