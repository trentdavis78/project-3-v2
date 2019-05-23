import React, { Component } from 'react'
import '../styles/layout.css'

export class section extends Component {
  render() {
    return (
      <section style={{minHeight:600}} className={`section ${this.props.styleName}`}> 
           {this.props.children}        
      </section>
    )
  }
}

export default section
