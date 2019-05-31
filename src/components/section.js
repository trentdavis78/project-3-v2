import React, { Component } from 'react'

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
